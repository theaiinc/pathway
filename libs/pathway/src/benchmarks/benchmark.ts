import type { BenchmarkProfile } from './profiles.js';
import type { BenchmarkProvenance } from './provenance.js';

export type PealBenchmarkSubsystem =
  | 'retrieval'
  | 'compilation'
  | 'planning'
  | 'simulation'
  | 'audit'
  | 'learning'
  | 'replay'
  | 'stability'
  | 'mutation'
  | 'context-quality';

export type BenchmarkCategory = 'infrastructure' | 'agent';
export type BenchmarkStatus = 'passed' | 'failed' | 'warning';

export interface BenchmarkRunContext {
  readonly profile: BenchmarkProfile;
  readonly liveServices?: boolean;
  readonly seed?: number;
  readonly gitSha?: string;
  readonly outputJson?: boolean;
}

export interface BenchmarkCaseResult {
  readonly id: string;
  readonly status: BenchmarkStatus;
  readonly metrics: Readonly<Record<string, number>>;
  readonly expected?: unknown;
  readonly actual?: unknown;
  readonly message?: string;
  readonly durationMs: number;
}

export interface BenchmarkResult {
  readonly benchmarkId: string;
  readonly subsystem: PealBenchmarkSubsystem;
  readonly category: BenchmarkCategory;
  readonly status: BenchmarkStatus;
  readonly metrics: Readonly<Record<string, number>>;
  readonly cases: readonly BenchmarkCaseResult[];
  readonly startedAt: string;
  readonly finishedAt: string;
  readonly provenance: BenchmarkProvenance;
}

export interface Benchmark {
  readonly id: string;
  readonly subsystem: PealBenchmarkSubsystem;
  readonly category: BenchmarkCategory;
  run(context: BenchmarkRunContext): Promise<BenchmarkResult>;
}

export function summarizeCaseStatus(cases: readonly BenchmarkCaseResult[]): BenchmarkStatus {
  if (cases.some(result => result.status === 'failed')) return 'failed';
  if (cases.some(result => result.status === 'warning')) return 'warning';
  return 'passed';
}

export function mean(values: readonly number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function percentile(values: readonly number[], percentileValue: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(
    sorted.length - 1,
    Math.max(0, Math.ceil((percentileValue / 100) * sorted.length) - 1)
  );
  return sorted[index];
}
