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
import { ArmId } from '../src/benchmarks/skills/episode.js';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { SKILL_BENCHMARK_ARMS, SkillBenchmark } from '../src/benchmarks/skills/skill-benchmark.js';

/** Skills corpora, one per skill; SKILLS_CORPUS narrows to one file name (without .json). */
function skillCorpora(): string[] {
  const dir = path.join(process.cwd(), 'benchmarks', 'skills', 'goldens');
  const only = process.env.SKILLS_CORPUS;
  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith('.json') && (!only || file === `${only}.json`))
    .sort()
    .map(file => path.join(dir, file));
}

interface CliOptions {
  readonly profile: BenchmarkProfileId;
  readonly subsystem?: PealBenchmarkSubsystem;
  readonly live: boolean;
  readonly json: boolean;
  readonly corpusPath?: string;
  readonly runs?: number;
  readonly model?: string;
  readonly baseUrl?: string;
  readonly seed?: number;
  readonly arms?: readonly ArmId[];
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
        seed: options.seed,
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
    // One per skill corpus in benchmarks/skills/goldens.
    ...skillCorpora().map(
      corpusPath =>
        new SkillBenchmark({
          corpusPath,
          runs: options.runs,
          arms: options.arms,
          model: { model: options.model, baseUrl: options.baseUrl },
          // Live runs take minutes; progress goes to stderr so --json stays parseable.
          log: line => console.error(`[skills:${path.basename(corpusPath, '.json')}] ${line}`),
        })
    ),
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
  let runs: number | undefined;
  let model: string | undefined;
  let baseUrl: string | undefined;
  let seed: number | undefined;
  let arms: ArmId[] | undefined;

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
    } else if (arg === '--runs') {
      runs = parsePositiveInteger('--runs', args[++i]);
    } else if (arg === '--model') {
      model = args[++i];
    } else if (arg === '--base-url') {
      baseUrl = args[++i];
    } else if (arg === '--arms') {
      arms = parseArms(args[++i]);
    } else if (arg === '--seed') {
      seed = parsePositiveInteger('--seed', args[++i]);
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return { profile, subsystem, live, json, corpusPath, runs, model, baseUrl, seed, arms };
}

function parseArms(value: string | undefined): ArmId[] {
  const arms = (value || '').split(',').map(arm => arm.trim()).filter(Boolean);
  const unknown = arms.filter(arm => !SKILL_BENCHMARK_ARMS.includes(arm as ArmId));
  if (!arms.length || unknown.length) {
    throw new Error(`--arms takes a comma-separated list of ${SKILL_BENCHMARK_ARMS.join(', ')}; got ${value || '(missing)'}`);
  }
  return arms as ArmId[];
}

function parsePositiveInteger(flag: string, value: string | undefined): number {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) {
    throw new Error(`${flag} needs a positive integer, got ${value || '(missing)'}`);
  }
  return parsed;
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
    'skills',
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
  peal benchmark --profile nightly --subsystem skills --runs 5 --model unsloth_Qwen3.5-4B-GGUF

Options:
  --profile <ci|nightly|research>
  --subsystem <retrieval|compilation|planning|simulation|audit|learning|replay|stability|mutation|context-quality|skills>
  --live
  --json
  --corpus <path>
  --runs <n>          skills: episodes per task per arm in live runs (default 5)
  --model <id>        skills: model id (default $PATHWAY_SKILLS_MODEL or unsloth_Qwen3.5-4B-GGUF)
  --base-url <url>    skills: OpenAI-compatible endpoint (default $PATHWAY_SKILLS_BASE_URL or http://127.0.0.1:8790/v1,
                      where scripts/serve-avalon-model.sh serves)
  --arms <a,b>        skills: arms to run live (default all: ${SKILL_BENCHMARK_ARMS.join(', ')})
  --seed <n>          base seed; runs of every arm share it`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
