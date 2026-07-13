import { MultiGraph } from 'graphology';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import {
  DEFAULT_RETRIEVAL_AUDIT_OPTIONS,
  PathwayManager,
  RetrievalAuditResult,
} from '../pathway-manager.js';
import { GraphStore } from '../graph-store.js';
import { VectorStore } from '../vector-store.js';
import {
  Benchmark,
  BenchmarkCaseResult,
  BenchmarkResult,
  BenchmarkRunContext,
  mean,
  percentile,
  summarizeCaseStatus,
} from './benchmark.js';
import { Corpus, getCorpusHash, pairCorpusCases } from './corpus.js';
import { createBenchmarkProvenance } from './provenance.js';

export interface RetrievalWorkflowFixture {
  readonly id: string;
  readonly intentNodeId: string;
  readonly vectorId: string;
  readonly intent: string;
  readonly steps: readonly {
    readonly id: string;
    readonly label: string;
    readonly action: string;
    readonly parameters: Readonly<Record<string, unknown>>;
  }[];
}

export interface RetrievalVectorResultFixture {
  readonly vectorId: string;
  readonly distance: number;
}

export interface RetrievalFixture {
  readonly id: string;
  readonly query: string;
  readonly vectorResults: readonly RetrievalVectorResultFixture[];
}

export interface RetrievalExpected {
  readonly id: string;
  readonly shouldRetrieve: boolean;
  readonly expectedIntentNodeId?: string;
  readonly expectedRejectionReason?: string;
  readonly knownIssue?: boolean;
}

export interface RetrievalCorpus
  extends Corpus<RetrievalFixture, RetrievalExpected> {
  readonly workflows: readonly RetrievalWorkflowFixture[];
  readonly similarityEdges?: readonly {
    readonly source: string;
    readonly target: string;
  }[];
}

export interface RetrievalBenchmarkOptions {
  readonly corpusPath?: string;
  readonly k?: number;
  readonly similarityThreshold?: number;
  readonly complexityPenaltyPerNode?: number;
}

const benchmarkVersion = '1.0.0';

export class RetrievalBenchmark implements Benchmark {
  readonly id = 'peal.retrieval.v1';
  readonly subsystem = 'retrieval' as const;
  readonly category = 'infrastructure' as const;

  constructor(private readonly options: RetrievalBenchmarkOptions = {}) {}

  async run(context: BenchmarkRunContext): Promise<BenchmarkResult> {
    const startedAt = new Date();
    const corpus = await loadRetrievalCorpus(this.options.corpusPath);
    const graphStore = new BenchmarkGraphStore(corpus);
    const liveVectorStore = context.liveServices
      ? await LiveBenchmarkVectorStore.create(corpus)
      : undefined;

    const cases: BenchmarkCaseResult[] = [];
    for (const corpusCase of pairCorpusCases(corpus)) {
      const vectorStore =
        liveVectorStore ||
        new FixtureVectorStore(corpusCase.fixture.vectorResults);
      const manager = new PathwayManager(
        vectorStore as unknown as VectorStore,
        graphStore as unknown as GraphStore
      );

      const caseStartedAt = Date.now();
      const audit = await manager.auditSimilarWorkflow(corpusCase.fixture.query, {
        k: this.options.k,
        similarityThreshold: this.options.similarityThreshold,
        complexityPenaltyPerNode: this.options.complexityPenaltyPerNode,
      });
      cases.push(
        createRetrievalCaseResult(
          corpusCase.id,
          corpusCase.expected,
          audit,
          Date.now() - caseStartedAt
        )
      );
    }

    const finishedAt = new Date();
    const metrics = calculateRetrievalMetrics(cases);
    return {
      benchmarkId: this.id,
      subsystem: this.subsystem,
      category: this.category,
      status: summarizeCaseStatus(cases),
      metrics,
      cases,
      startedAt: startedAt.toISOString(),
      finishedAt: finishedAt.toISOString(),
      provenance: createBenchmarkProvenance({
        benchmarkVersion,
        corpusVersion: corpus.version,
        gitSha: context.gitSha,
        knowledgeSnapshotHash: getCorpusHash(corpus),
        seed: context.seed,
        runtimeConfiguration: {
          profile: context.profile.id,
          liveServices: Boolean(context.liveServices),
          k: this.options.k ?? DEFAULT_RETRIEVAL_AUDIT_OPTIONS.k,
          similarityThreshold:
            this.options.similarityThreshold ??
            DEFAULT_RETRIEVAL_AUDIT_OPTIONS.similarityThreshold,
          complexityPenaltyPerNode:
            this.options.complexityPenaltyPerNode ??
            DEFAULT_RETRIEVAL_AUDIT_OPTIONS.complexityPenaltyPerNode,
        },
      }),
    };
  }
}

export async function loadRetrievalCorpus(
  corpusPath = defaultRetrievalCorpusPath()
): Promise<RetrievalCorpus> {
  const data = await fs.readFile(corpusPath, 'utf-8');
  return JSON.parse(data) as RetrievalCorpus;
}

export function defaultRetrievalCorpusPath(): string {
  return path.join(
    process.cwd(),
    'benchmarks',
    'retrieval',
    'goldens',
    'retrieval-goldens.json'
  );
}

function createRetrievalCaseResult(
  id: string,
  expected: RetrievalExpected,
  audit: RetrievalAuditResult,
  durationMs: number
): BenchmarkCaseResult {
  const retrieved = Boolean(audit.selectedWorkflow);
  const selectedIntentNodeId = retrieved
    ? audit.selectedCandidate?.intentNodeId
    : undefined;
  const matchedExpected =
    retrieved &&
    expected.shouldRetrieve &&
    selectedIntentNodeId === expected.expectedIntentNodeId;
  const expectedMiss =
    !expected.shouldRetrieve &&
    !retrieved &&
    (!expected.expectedRejectionReason ||
      audit.rejectionReason === expected.expectedRejectionReason);
  const knownIssueMatched =
    expected.knownIssue &&
    !retrieved &&
    audit.rejectionReason === expected.expectedRejectionReason;
  const status = matchedExpected || expectedMiss ? 'passed' : knownIssueMatched ? 'warning' : 'failed';

  return {
    id,
    status,
    metrics: {
      retrieved: retrieved ? 1 : 0,
      expectedRetrieve: expected.shouldRetrieve ? 1 : 0,
      matchedExpected: matchedExpected ? 1 : 0,
      falsePositive: !expected.shouldRetrieve && retrieved ? 1 : 0,
      falseNegative: expected.shouldRetrieve && !matchedExpected ? 1 : 0,
      reciprocalRank: reciprocalRank(expected, audit),
      latencyMs: audit.durationMs,
      candidateCount: audit.candidates.length,
    },
    expected,
    actual: {
      selectedIntentNodeId,
      bestCandidateIntentNodeId: audit.selectedCandidate?.intentNodeId,
      rejectionReason: audit.rejectionReason,
      candidates: audit.candidates,
    },
    message: messageForCase(expected, audit, selectedIntentNodeId),
    durationMs,
  };
}

function reciprocalRank(
  expected: RetrievalExpected,
  audit: RetrievalAuditResult
): number {
  if (!expected.expectedIntentNodeId) return 0;
  const candidate = audit.candidates.find(
    item => item.intentNodeId === expected.expectedIntentNodeId
  );
  return candidate ? 1 / candidate.rank : 0;
}

function messageForCase(
  expected: RetrievalExpected,
  audit: RetrievalAuditResult,
  selectedIntentNodeId?: string
): string {
  if (expected.shouldRetrieve) {
    return `expected=${expected.expectedIntentNodeId || 'none'} actual=${
      selectedIntentNodeId || audit.rejectionReason || 'none'
    }`;
  }

  return `expected=no-retrieval actual=${
    selectedIntentNodeId || audit.rejectionReason || 'none'
  }`;
}

function calculateRetrievalMetrics(
  cases: readonly BenchmarkCaseResult[]
): Readonly<Record<string, number>> {
  const positives = cases.filter(item => item.metrics.expectedRetrieve === 1);
  const retrieved = cases.filter(item => item.metrics.retrieved === 1);
  const truePositives = cases.filter(item => item.metrics.matchedExpected === 1);
  const falsePositives = cases.filter(item => item.metrics.falsePositive === 1);
  const falseNegatives = cases.filter(item => item.metrics.falseNegative === 1);
  const latencies = cases.map(item => item.metrics.latencyMs);

  return {
    totalCases: cases.length,
    top1Accuracy: ratio(truePositives.length, positives.length),
    recallAtK: ratio(
      positives.filter(item => item.metrics.reciprocalRank > 0).length,
      positives.length
    ),
    mrr: mean(positives.map(item => item.metrics.reciprocalRank)),
    precision: ratio(truePositives.length, retrieved.length),
    falsePositives: falsePositives.length,
    falseNegatives: falseNegatives.length,
    medianLatencyMs: percentile(latencies, 50),
    p95LatencyMs: percentile(latencies, 95),
  };
}

function ratio(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

class FixtureVectorStore {
  constructor(private readonly results: readonly RetrievalVectorResultFixture[]) {}

  async findSimilarIntentions(
    queryText: string,
    k: number
  ): Promise<{ ids: string[]; distances: number[] }> {
    void queryText;
    const results = this.results.slice(0, k);
    return {
      ids: results.map(result => result.vectorId),
      distances: results.map(result => result.distance),
    };
  }
}

class LiveBenchmarkVectorStore {
  private constructor(
    private readonly vectorStore: VectorStore,
    private readonly corpusVectorIdsByLiveId: ReadonlyMap<string, string>
  ) {}

  static async create(corpus: RetrievalCorpus): Promise<LiveBenchmarkVectorStore> {
    const vectorStore = new VectorStore();
    const corpusVectorIdsByLiveId = new Map<string, string>();

    for (const workflow of corpus.workflows) {
      const liveId = await vectorStore.addIntention(workflow.intent, {
        benchmark: 'peal.retrieval.v1',
        corpusVersion: corpus.version,
        corpusVectorId: workflow.vectorId,
      });
      corpusVectorIdsByLiveId.set(liveId, workflow.vectorId);
    }

    return new LiveBenchmarkVectorStore(vectorStore, corpusVectorIdsByLiveId);
  }

  async findSimilarIntentions(
    queryText: string,
    k: number
  ): Promise<{ ids: string[]; distances: number[] }> {
    const result = await this.vectorStore.findSimilarIntentions(queryText, k);
    return {
      ids: result.ids.map(id => this.corpusVectorIdsByLiveId.get(id) || id),
      distances: result.distances,
    };
  }
}

class BenchmarkGraphStore {
  private readonly graph = new MultiGraph();

  constructor(corpus: RetrievalCorpus) {
    for (const workflow of corpus.workflows) {
      this.graph.addNode(workflow.intentNodeId, {
        id: workflow.intentNodeId,
        type: 'Intent',
        label: workflow.intent,
        vectorId: workflow.vectorId,
        originalQuery: workflow.intent,
      });

      let previousNodeId = workflow.intentNodeId;
      for (const step of workflow.steps) {
        this.graph.addNode(step.id, {
          id: step.id,
          type: 'Step',
          label: step.label,
          action: step.action,
          parameters: step.parameters,
        });
        this.graph.addDirectedEdge(previousNodeId, step.id, { type: 'Flow' });
        previousNodeId = step.id;
      }
    }

    for (const edge of corpus.similarityEdges || []) {
      this.graph.addDirectedEdge(edge.source, edge.target, { type: 'Similarity' });
    }
  }

  findIntentNodeByVectorId(vectorId: string): string | null {
    return (
      this.graph.findNode(
        (node: string, attrs: { vectorId?: string }) => attrs.vectorId === vectorId
      ) || null
    );
  }

  getWorkflowByIntentNode(
    startNodeId: string,
    options: { edgeTypes?: readonly string[] } = {}
  ): MultiGraph {
    const allowedEdgeTypes = options.edgeTypes
      ? new Set(options.edgeTypes)
      : undefined;
    const queue = [startNodeId];
    const visited = new Set<string>();

    while (queue.length > 0) {
      const node = queue.shift()!;
      if (visited.has(node)) continue;
      visited.add(node);

      for (const edge of this.graph.outEdges(node)) {
        const edgeType = this.graph.getEdgeAttribute(edge, 'type');
        if (allowedEdgeTypes && !allowedEdgeTypes.has(edgeType)) continue;

        const target = this.graph.target(edge);
        if (!visited.has(target)) queue.push(target);
      }
    }

    const subgraph = new MultiGraph();
    for (const node of visited) {
      subgraph.addNode(node, this.graph.getNodeAttributes(node));
    }

    for (const edge of this.graph.edges()) {
      const source = this.graph.source(edge);
      const target = this.graph.target(edge);
      if (visited.has(source) && visited.has(target)) {
        subgraph.addDirectedEdgeWithKey(
          edge,
          source,
          target,
          this.graph.getEdgeAttributes(edge)
        );
      }
    }

    return subgraph;
  }
}
