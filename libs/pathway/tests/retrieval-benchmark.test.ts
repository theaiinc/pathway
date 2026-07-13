import { describe, expect, it } from 'vitest';
import { MultiGraph } from 'graphology';
import { PathwayManager } from '../src/pathway-manager.js';
import { getBenchmarkProfile } from '../src/benchmarks/profiles.js';
import { RetrievalBenchmark } from '../src/benchmarks/retrieval-benchmark.js';
import { GraphStore } from '../src/graph-store.js';
import { VectorStore } from '../src/vector-store.js';

describe('RetrievalBenchmark', () => {
  it('reports deterministic retrieval accuracy and known false negatives', async () => {
    const result = await new RetrievalBenchmark().run({
      profile: getBenchmarkProfile('ci'),
    });

    expect(result.subsystem).toBe('retrieval');
    expect(result.status).toBe('passed');
    expect(result.metrics.totalCases).toBe(6);
    expect(result.metrics.falsePositives).toBe(0);
    expect(result.metrics.falseNegatives).toBe(0);
    expect(result.metrics.top1Accuracy).toBeCloseTo(1);
    expect(result.provenance.benchmarkVersion).toBe('1.0.0');
    expect(result.provenance.knowledgeSnapshotHash).toMatch(/^sha256:/);
  });

  it('does not traverse Similarity edges into unrelated workflows', async () => {
    const result = await new RetrievalBenchmark().run({
      profile: getBenchmarkProfile('ci'),
    });
    const oauthCase = result.cases.find(item => item.id === 'paraphrase-oauth');

    expect(oauthCase?.status).toBe('passed');
    const actual = oauthCase?.actual as {
      candidates: readonly { workflowNodeCount?: number }[];
    };
    expect(actual.candidates[0].workflowNodeCount).toBe(4);
  });

  it('surfaces stale vector ids as deterministic diagnostics', async () => {
    const result = await new RetrievalBenchmark().run({
      profile: getBenchmarkProfile('ci'),
    });
    const staleCase = result.cases.find(item => item.id === 'stale-vector');

    expect(staleCase?.status).toBe('passed');
    expect(staleCase?.message).toContain('no-valid-candidates');
  });
});

describe('PathwayManager retrieval audit', () => {
  it('returns no-candidates for empty vector results', async () => {
    const manager = new PathwayManager(
      new EmptyVectorStore() as unknown as VectorStore,
      new EmptyGraphStore() as unknown as GraphStore
    );

    const audit = await manager.auditSimilarWorkflow('nothing here');

    expect(audit.selectedWorkflow).toBeNull();
    expect(audit.rejectionReason).toBe('no-candidates');
    expect(audit.candidates).toHaveLength(0);
  });

  it('accepts a perfect-similarity large workflow', async () => {
    const graphStore = new SingleWorkflowGraphStore(7);
    const manager = new PathwayManager(
      new FixedVectorStore([{ vectorId: 'large-vector', distance: 0 }]) as unknown as VectorStore,
      graphStore as unknown as GraphStore
    );

    const audit = await manager.auditSimilarWorkflow('large workflow');

    expect(audit.selectedWorkflow).not.toBeNull();
    expect(audit.rejectionReason).toBeUndefined();
    expect(audit.selectedCandidate?.score).toBeCloseTo(0.65);
  });
});

class EmptyVectorStore {
  async findSimilarIntentions(): Promise<{ ids: string[]; distances: number[] }> {
    return { ids: [], distances: [] };
  }
}

class FixedVectorStore {
  constructor(
    private readonly results: readonly { readonly vectorId: string; readonly distance: number }[]
  ) {}

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

class EmptyGraphStore {
  findIntentNodeByVectorId(): string | null {
    return null;
  }

  getWorkflowByIntentNode(): MultiGraph {
    return new MultiGraph();
  }
}

class SingleWorkflowGraphStore {
  private readonly graph = new MultiGraph();

  constructor(nodeCount: number) {
    this.graph.addNode('large-intent', {
      type: 'Intent',
      vectorId: 'large-vector',
      label: 'Large workflow',
    });

    let previous = 'large-intent';
    for (let i = 1; i < nodeCount; i++) {
      const nodeId = `large-step-${i}`;
      this.graph.addNode(nodeId, {
        type: 'Step',
        label: `Step ${i}`,
        action: 'step',
        parameters: {},
      });
      this.graph.addDirectedEdge(previous, nodeId, { type: 'Flow' });
      previous = nodeId;
    }
  }

  findIntentNodeByVectorId(vectorId: string): string | null {
    return vectorId === 'large-vector' ? 'large-intent' : null;
  }

  getWorkflowByIntentNode(): MultiGraph {
    return this.graph;
  }
}
