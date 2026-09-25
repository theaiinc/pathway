import type { PealBenchmarkSubsystem } from './benchmark.js';

export type BenchmarkProfileId = 'ci' | 'nightly' | 'research';

export interface BenchmarkProfile {
  readonly id: BenchmarkProfileId;
  readonly description: string;
  readonly deterministic: boolean;
  readonly includeLiveServices: boolean;
  readonly subsystems: readonly PealBenchmarkSubsystem[];
}

export const benchmarkProfiles: Readonly<Record<BenchmarkProfileId, BenchmarkProfile>> = {
  ci: {
    id: 'ci',
    description: 'Deterministic infrastructure benchmarks safe for CI.',
    deterministic: true,
    includeLiveServices: false,
    subsystems: ['retrieval', 'compilation', 'replay', 'mutation', 'stability', 'skills'],
  },
  nightly: {
    id: 'nightly',
    description: 'Full suite including live services and statistical agent checks.',
    deterministic: false,
    includeLiveServices: true,
    subsystems: [
      'retrieval',
      'compilation',
      'planning',
      'simulation',
      'audit',
      'learning',
      'replay',
      'stability',
      'mutation',
      'context-quality',
      'skills',
    ],
  },
  research: {
    id: 'research',
    description: 'Experimental selectors, compiler passes, planners, and profiles.',
    deterministic: false,
    includeLiveServices: true,
    subsystems: [
      'retrieval',
      'compilation',
      'planning',
      'simulation',
      'audit',
      'learning',
      'replay',
      'stability',
      'mutation',
      'context-quality',
      'skills',
    ],
  },
};

export function getBenchmarkProfile(id: BenchmarkProfileId): BenchmarkProfile {
  return benchmarkProfiles[id];
}
