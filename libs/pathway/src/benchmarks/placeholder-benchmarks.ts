import {
  Benchmark,
  BenchmarkResult,
  BenchmarkRunContext,
  PealBenchmarkSubsystem,
} from './benchmark.js';
import { createBenchmarkProvenance } from './provenance.js';

export class PlaceholderBenchmark implements Benchmark {
  readonly category = 'infrastructure' as const;

  constructor(
    readonly id: string,
    readonly subsystem: PealBenchmarkSubsystem,
    private readonly description: string
  ) {}

  async run(context: BenchmarkRunContext): Promise<BenchmarkResult> {
    const timestamp = new Date().toISOString();
    return {
      benchmarkId: this.id,
      subsystem: this.subsystem,
      category: this.category,
      status: 'warning',
      metrics: {},
      cases: [
        {
          id: `${this.subsystem}-placeholder`,
          status: 'warning',
          metrics: {},
          message: this.description,
          durationMs: 0,
        },
      ],
      startedAt: timestamp,
      finishedAt: timestamp,
      provenance: createBenchmarkProvenance({
        benchmarkVersion: '0.0.0',
        corpusVersion: 'unimplemented',
        gitSha: context.gitSha,
        seed: context.seed,
        runtimeConfiguration: {
          profile: context.profile.id,
        },
      }),
    };
  }
}

export const futureBenchmarkPlaceholders: readonly PlaceholderBenchmark[] = [
  new PlaceholderBenchmark(
    'peal.compilation.placeholder',
    'compilation',
    'Compilation benchmark placeholder: token reduction, node retention, optimization ratio, deterministic hash.'
  ),
  new PlaceholderBenchmark(
    'peal.planning.placeholder',
    'planning',
    'Planning benchmark placeholder: plan correctness, cost, latency, execution success.'
  ),
  new PlaceholderBenchmark(
    'peal.simulation.placeholder',
    'simulation',
    'Simulation benchmark placeholder: predicted success versus observed execution.'
  ),
  new PlaceholderBenchmark(
    'peal.audit.placeholder',
    'audit',
    'Audit benchmark placeholder: injected failures, precision, recall, explanation quality.'
  ),
  new PlaceholderBenchmark(
    'peal.learning.placeholder',
    'learning',
    'Learning benchmark placeholder: duplicate rate, false knowledge, validation success.'
  ),
  new PlaceholderBenchmark(
    'peal.replay.placeholder',
    'replay',
    'Replay benchmark placeholder: frozen input and output regression checks.'
  ),
  new PlaceholderBenchmark(
    'peal.stability.placeholder',
    'stability',
    'Stability benchmark placeholder: repeated compilation hashes must match.'
  ),
  new PlaceholderBenchmark(
    'peal.mutation.placeholder',
    'mutation',
    'Mutation benchmark placeholder: deleted edges, duplicate nodes, broken provenance, cycles.'
  ),
  new PlaceholderBenchmark(
    'peal.context-quality.placeholder',
    'context-quality',
    'Context quality benchmark placeholder: useful, unused, missing context, and waste ratio.'
  ),
];
