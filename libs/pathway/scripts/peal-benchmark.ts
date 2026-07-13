import {
  Benchmark,
  BenchmarkResult,
  PealBenchmarkSubsystem,
} from '../src/benchmarks/benchmark.js';
import {
  BenchmarkProfileId,
  getBenchmarkProfile,
} from '../src/benchmarks/profiles.js';
import { futureBenchmarkPlaceholders } from '../src/benchmarks/placeholder-benchmarks.js';
import { RetrievalBenchmark } from '../src/benchmarks/retrieval-benchmark.js';

interface CliOptions {
  readonly profile: BenchmarkProfileId;
  readonly subsystem?: PealBenchmarkSubsystem;
  readonly live: boolean;
  readonly json: boolean;
  readonly corpusPath?: string;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const profile = getBenchmarkProfile(options.profile);
  const benchmarks = selectBenchmarks(options);
  const results: BenchmarkResult[] = [];

  for (const benchmark of benchmarks) {
    if (!profile.subsystems.includes(benchmark.subsystem)) {
      continue;
    }

    results.push(
      await benchmark.run({
        profile,
        liveServices: options.live || profile.includeLiveServices,
        outputJson: options.json,
      })
    );
  }

  if (options.json) {
    console.log(JSON.stringify({ profile: profile.id, results }, null, 2));
  } else {
    printResults(profile.id, results);
  }

  process.exit(results.some(result => result.status === 'failed') ? 1 : 0);
}

function selectBenchmarks(options: CliOptions): Benchmark[] {
  const benchmarks: Benchmark[] = [
    new RetrievalBenchmark({ corpusPath: options.corpusPath }),
    ...futureBenchmarkPlaceholders,
  ];

  return options.subsystem
    ? benchmarks.filter(benchmark => benchmark.subsystem === options.subsystem)
    : benchmarks;
}

function parseArgs(args: readonly string[]): CliOptions {
  let profile: BenchmarkProfileId = 'ci';
  let subsystem: PealBenchmarkSubsystem | undefined;
  let live = false;
  let json = false;
  let corpusPath: string | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === 'benchmark') continue;

    if (arg === '--profile') {
      profile = parseProfile(args[++i]);
    } else if (arg === '--subsystem') {
      subsystem = parseSubsystem(args[++i]);
    } else if (arg === '--live') {
      live = true;
    } else if (arg === '--json') {
      json = true;
    } else if (arg === '--corpus') {
      corpusPath = args[++i];
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return { profile, subsystem, live, json, corpusPath };
}

function parseProfile(value: string | undefined): BenchmarkProfileId {
  if (value === 'ci' || value === 'nightly' || value === 'research') {
    return value;
  }
  throw new Error(`Unknown benchmark profile: ${value || '(missing)'}`);
}

function parseSubsystem(value: string | undefined): PealBenchmarkSubsystem {
  const subsystems: readonly PealBenchmarkSubsystem[] = [
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
  ];
  if (value && subsystems.includes(value as PealBenchmarkSubsystem)) {
    return value as PealBenchmarkSubsystem;
  }
  throw new Error(`Unknown benchmark subsystem: ${value || '(missing)'}`);
}

function printResults(
  profileId: BenchmarkProfileId,
  results: readonly BenchmarkResult[]
): void {
  console.log(`\nPEAL Benchmark Suite (${profileId})`);
  if (results.length === 0) {
    console.log('No benchmarks selected.');
    return;
  }

  for (const result of results) {
    console.log(`\n${result.benchmarkId}: ${result.status}`);
    console.log(`  subsystem: ${result.subsystem}`);
    console.log(`  corpus: ${result.provenance.corpusVersion}`);
    for (const [metric, value] of Object.entries(result.metrics)) {
      console.log(`  ${metric}: ${formatMetric(value)}`);
    }

    for (const benchmarkCase of result.cases) {
      console.log(
        `  - ${benchmarkCase.id}: ${benchmarkCase.status} (${benchmarkCase.message || 'ok'})`
      );
    }
  }
}

function formatMetric(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(4);
}

function printHelp(): void {
  console.log(`Usage:
  peal benchmark --profile ci
  peal benchmark --profile nightly --live
  peal benchmark --profile ci --subsystem retrieval --json

Options:
  --profile <ci|nightly|research>
  --subsystem <retrieval|compilation|planning|simulation|audit|learning|replay|stability|mutation|context-quality>
  --live
  --json
  --corpus <path>`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
