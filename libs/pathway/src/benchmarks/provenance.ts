export interface BenchmarkProvenance {
  readonly benchmarkVersion: string;
  readonly corpusVersion: string;
  readonly gitSha?: string;
  readonly knowledgeSnapshotHash?: string;
  readonly compilerVersion?: string;
  readonly passSetVersion?: string;
  readonly plannerId?: string;
  readonly modelId?: string;
  readonly seed?: number;
  readonly runtimeConfiguration?: Readonly<Record<string, unknown>>;
}

export function createBenchmarkProvenance(
  input: BenchmarkProvenance
): BenchmarkProvenance {
  return {
    benchmarkVersion: input.benchmarkVersion,
    corpusVersion: input.corpusVersion,
    gitSha: input.gitSha,
    knowledgeSnapshotHash: input.knowledgeSnapshotHash,
    compilerVersion: input.compilerVersion,
    passSetVersion: input.passSetVersion,
    plannerId: input.plannerId,
    modelId: input.modelId,
    seed: input.seed,
    runtimeConfiguration: input.runtimeConfiguration,
  };
}
