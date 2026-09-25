import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { hashContent } from '../../cas/hash.js';
import { Skill, skillApplies } from '../../skills/contract.js';
import {
  Benchmark,
  BenchmarkCaseResult,
  BenchmarkResult,
  BenchmarkRunContext,
  BenchmarkStatus,
  mean,
  summarizeCaseStatus,
} from '../benchmark.js';
import { SkillWorkflowMemory } from '../../skills/workflow-memory.js';
import { createBenchmarkProvenance } from '../provenance.js';
import { Agent, OpenAiCompatibleAgent, OpenAiCompatibleAgentOptions, ScriptedAgent } from './agents.js';
import { AgentAction, ComposerTaskFixture } from './composer-environment.js';
import { Arm, ArmId, EpisodeResult, runEpisode } from './episode.js';
import { PathwayAgent } from './pathway-agent.js';
import { runPathwayCases, toRunReport } from './pathway-cases.js';
import { excludesZero, Interval, meanDifference, proportionDifference, wilson } from './statistics.js';

/**
 * Does a skill beat its own absence?
 *
 * The same tasks run in three arms: no skill, the skill's prose guidance as
 * it is injected today, and that prose with the skill's contract enforced by
 * the executor. A skill earns its place only if an arm with it succeeds more,
 * or as often with fewer steps and less harm, by a margin that clears the
 * run-to-run spread.
 *
 * Two profiles, two questions:
 *
 *   - Deterministic (ci): scripted trajectories check the instrument. Each
 *     replays a known mistake and asserts the environment, contract and
 *     scoring report it exactly. No model is involved, so ci says nothing
 *     about whether the skill helps.
 *   - Live (nightly): a real model runs every task in every arm, several
 *     times, and arms are compared with intervals.
 *
 * Applicability (does the skill fire on the right goals) is deterministic
 * and runs in both.
 */

export interface SkillBenchmarkTrajectoryExpectation {
  readonly success: boolean;
  readonly discardedDrafts: number;
  readonly duplicatePosts: number;
  readonly refusals: number;
  readonly falseRefusals: number;
  readonly invariantViolations: number;
  readonly harmfulActions: number;
}

export interface SkillBenchmarkCorpus {
  readonly id: string;
  readonly version: string;
  readonly skill: Skill & { readonly source: string };
  readonly tasks: readonly ComposerTaskFixture[];
  readonly applicability: readonly {
    readonly id: string;
    readonly goal: string;
    readonly shouldApply: boolean;
    readonly knownIssue?: string;
  }[];
  /**
   * Tasks rerun with renamed controls after the main runs, in the pathway arm
   * only: a learned workflow must notice the page changed.
   */
  readonly redesign?: { readonly taskIds: readonly string[]; readonly runs: number };
  readonly trajectories: readonly {
    readonly id: string;
    readonly taskId: string;
    readonly description: string;
    readonly actions: readonly AgentAction[];
    readonly expected: {
      readonly unenforced: SkillBenchmarkTrajectoryExpectation;
      readonly enforced: SkillBenchmarkTrajectoryExpectation;
    };
    /** A contract defect this trajectory pins down, so a fix shows up as a change. */
    readonly knownGap?: string;
  }[];
}

export interface SkillBenchmarkOptions {
  readonly corpusPath?: string;
  /** Episodes per task per arm in live runs. */
  readonly runs?: number;
  readonly maxSteps?: number;
  /** Overrides the live model, for tests. */
  readonly agentFactory?: () => Agent;
  readonly model?: Partial<OpenAiCompatibleAgentOptions>;
  /** Progress lines for long live runs. */
  readonly log?: (line: string) => void;
  /** Arms to run live; all by default. */
  readonly arms?: readonly ArmId[];
}

const benchmarkVersion = '1.0.0';
const ARM_ORDER: readonly ArmId[] = ['no-skill', 'prose', 'prose+contract', 'contract+pathway'];
export const SKILL_BENCHMARK_ARMS = ARM_ORDER;
const MAX_CONSECUTIVE_ERRORS = 5;

export class SkillBenchmark implements Benchmark {
  readonly id = 'peal.skills.v1';
  readonly subsystem = 'skills' as const;
  readonly category = 'agent' as const;

  constructor(private readonly options: SkillBenchmarkOptions = {}) {}

  async run(context: BenchmarkRunContext): Promise<BenchmarkResult> {
    const startedAt = new Date();
    const corpus = await loadSkillBenchmarkCorpus(this.options.corpusPath);
    const applicability = runApplicability(corpus);
    const live = Boolean(context.liveServices) || Boolean(this.options.agentFactory);

    let cases: BenchmarkCaseResult[];
    let metrics: Record<string, number>;
    let runtime: Record<string, unknown>;
    let modelId: string | undefined;
    if (live) {
      const agentOptions = resolveAgentOptions(this.options.model);
      const agent = this.options.agentFactory?.() ?? new OpenAiCompatibleAgent(agentOptions);
      modelId = agent.id;
      const outcome = await this.runLive(corpus, context, agent);
      cases = [...applicability.cases, ...outcome.cases];
      metrics = { ...applicability.metrics, ...outcome.metrics };
      runtime = {
        mode: 'live',
        runs: this.runs(),
        maxSteps: this.maxSteps(),
        baseUrl: this.options.agentFactory ? undefined : agentOptions.baseUrl,
        temperature: agentOptions.temperature,
      };
    } else {
      const outcome = await runTrajectories(corpus, this.maxSteps());
      const pathway = await runPathwayCases(corpus, this.maxSteps());
      cases = [...applicability.cases, ...outcome.cases, ...pathway.cases];
      metrics = { ...applicability.metrics, ...outcome.metrics, ...pathway.metrics };
      runtime = { mode: 'scripted' };
    }

    return {
      benchmarkId: this.id,
      subsystem: this.subsystem,
      category: this.category,
      status: summarizeCaseStatus(cases),
      metrics,
      cases,
      startedAt: startedAt.toISOString(),
      finishedAt: new Date().toISOString(),
      provenance: createBenchmarkProvenance({
        benchmarkVersion,
        corpusVersion: corpus.version,
        gitSha: context.gitSha,
        knowledgeSnapshotHash: hashContent(corpus),
        modelId,
        seed: context.seed,
        runtimeConfiguration: { profile: context.profile.id, skill: corpus.skill.id, ...runtime },
      }),
    };
  }

  private runs(): number {
    return this.options.runs ?? 5;
  }

  private maxSteps(): number {
    return this.options.maxSteps ?? 12;
  }

  private armOrder(): readonly ArmId[] {
    return this.options.arms?.length ? ARM_ORDER.filter(arm => this.options.arms!.includes(arm)) : ARM_ORDER;
  }

  private async runLive(
    corpus: SkillBenchmarkCorpus,
    context: BenchmarkRunContext,
    agent: Agent
  ): Promise<{ cases: BenchmarkCaseResult[]; metrics: Record<string, number> }> {
    const arms: Record<ArmId, Arm> = {
      'no-skill': { id: 'no-skill', enforce: false },
      prose: { id: 'prose', guidance: corpus.skill.guidance, enforce: false },
      'prose+contract': { id: 'prose+contract', guidance: corpus.skill.guidance, enforce: true },
      // The model sees plan guidance only; the workflow replaces the step prose.
      'contract+pathway': { id: 'contract+pathway', guidance: corpus.skill.guidance, enforce: true },
    };
    const armOrder = this.armOrder();
    const memory = new SkillWorkflowMemory();
    const log = this.options.log ?? (() => undefined);
    const episodes: EpisodeResult[] = [];
    const redesignEpisodes: EpisodeResult[] = [];
    const invalidationsByEpisode = new Map<EpisodeResult, number>();
    const errors: { taskId: string; arm: ArmId; run: number; message: string }[] = [];
    const baseSeed = context.seed ?? 1;
    const redesignTasks = redesignedTasks(corpus);
    const redesignRuns = armOrder.includes('contract+pathway') ? corpus.redesign?.runs ?? 0 : 0;
    const total = this.runs() * corpus.tasks.length * armOrder.length + redesignRuns * redesignTasks.length;
    let consecutiveErrors = 0;
    let stoppedEarly: string | undefined;

    const attempt = async (task: ComposerTaskFixture, armId: ArmId, run: number, into: EpisodeResult[]) => {
      const label = `${episodes.length + redesignEpisodes.length + errors.length + 1}/${total} ${task.id} ${armId} run ${run + 1}`;
      const pathwayAgent =
        armId === 'contract+pathway'
          ? new PathwayAgent(agent, { memory, skillId: corpus.skill.id, guidance: corpus.skill.guidance })
          : undefined;
      try {
        const episode = await runEpisode({
          task,
          agent: pathwayAgent ?? agent,
          arm: arms[armId],
          invariants: corpus.skill.contract.invariants,
          run,
          seed: baseSeed + run,
          maxSteps: this.maxSteps(),
        });
        into.push(episode);
        consecutiveErrors = 0;
        let learned = '';
        if (pathwayAgent) {
          invalidationsByEpisode.set(episode, pathwayAgent.invalidations);
          const retention = memory.learn(toRunReport(corpus.skill.id, task.goal, episode));
          learned =
            `, ${episode.pathwaySteps}/${episode.steps} steps from the workflow` +
            (pathwayAgent.invalidations ? `, invalidated ${pathwayAgent.invalidations}` : '') +
            (retention.retained ? `, retained (${retention.reason})` : '');
        }
        log(
          `${label}: ${episode.outcome.success ? 'success' : `failed (${episode.outcome.reasons.join('; ') || 'unfinished'})`}, ` +
            `${episode.steps} steps, ${(episode.wallClockMs / 1000).toFixed(1)}s${learned}`
        );
        return true;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        errors.push({ taskId: task.id, arm: armId, run, message });
        log(`${label}: error: ${message}`);
        if (episodes.length === 0 && errors.length >= 3) {
          throw new Error(`Skills benchmark could not reach the model: ${message}`);
        }
        // A model server that has failed this many times in a row has
        // usually wedged (a GPU out of memory stays out of memory), and
        // every further episode would only record the same error.
        if (++consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
          stoppedEarly = `stopped after ${consecutiveErrors} consecutive errors, the last: ${message}`;
          log(stoppedEarly);
          return false;
        }
        return true;
      }
    };

    // Arms are interleaved within each run so that drift over a long session
    // (thermal throttling, memory pressure, a model reload) lands on every arm
    // alike instead of on whichever ran last. Runs go in order, so the
    // pathway arm's run n has learned from runs 1..n-1.
    runs: for (let run = 0; run < this.runs(); run++) {
      for (const task of corpus.tasks) {
        for (const armId of armOrder) {
          if (!(await attempt(task, armId, run, episodes))) break runs;
        }
      }
    }

    // Then the page changes under the learned workflows.
    redesign: for (let run = 0; run < redesignRuns && !stoppedEarly; run++) {
      for (const task of redesignTasks) {
        if (!(await attempt(task, 'contract+pathway', run, redesignEpisodes))) break redesign;
      }
    }

    return summarizeLive(corpus, armOrder, episodes, redesignEpisodes, invalidationsByEpisode, errors, stoppedEarly);
  }
}

/** The corpus's redesign tasks: the same goals, with every control renamed. */
export function redesignedTasks(corpus: SkillBenchmarkCorpus): ComposerTaskFixture[] {
  const ids = new Set(corpus.redesign?.taskIds ?? []);
  return corpus.tasks
    .filter(task => ids.has(task.id))
    .map(task => ({ ...task, id: `${task.id}@redesign`, setup: { ...task.setup, labels: 'redesign' as const } }));
}

export async function loadSkillBenchmarkCorpus(
  corpusPath = defaultSkillBenchmarkCorpusPath()
): Promise<SkillBenchmarkCorpus> {
  return JSON.parse(await fs.readFile(corpusPath, 'utf-8')) as SkillBenchmarkCorpus;
}

export function defaultSkillBenchmarkCorpusPath(): string {
  return path.join(process.cwd(), 'benchmarks', 'skills', 'goldens', 'facebook-compose.json');
}

/**
 * Live model settings, from options then environment. The default endpoint is
 * where scripts/serve-avalon-model.sh serves an Avalon model.
 */
export function resolveAgentOptions(
  overrides: Partial<OpenAiCompatibleAgentOptions> = {}
): OpenAiCompatibleAgentOptions {
  const env = process.env;
  return {
    baseUrl: overrides.baseUrl ?? env.PATHWAY_SKILLS_BASE_URL ?? 'http://127.0.0.1:8790/v1',
    model: overrides.model ?? env.PATHWAY_SKILLS_MODEL ?? 'unsloth_Qwen3.5-4B-GGUF',
    apiKey: overrides.apiKey ?? env.PATHWAY_SKILLS_API_KEY,
    temperature: overrides.temperature ?? numberFromEnv(env.PATHWAY_SKILLS_TEMPERATURE, 0.7),
    maxTokens: overrides.maxTokens ?? numberFromEnv(env.PATHWAY_SKILLS_MAX_TOKENS, 300),
    timeoutMs: overrides.timeoutMs ?? numberFromEnv(env.PATHWAY_SKILLS_TIMEOUT_MS, 180_000),
    historyWindow: overrides.historyWindow ?? 8,
  };
}

function numberFromEnv(value: string | undefined, fallback: number): number {
  const parsed = value === undefined ? NaN : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function runApplicability(corpus: SkillBenchmarkCorpus): {
  cases: BenchmarkCaseResult[];
  metrics: Record<string, number>;
} {
  let truePositives = 0;
  let falsePositives = 0;
  let falseNegatives = 0;
  let trueNegatives = 0;
  const cases = corpus.applicability.map(item => {
    const startedAt = Date.now();
    const applied = skillApplies(corpus.skill, item.goal);
    if (applied && item.shouldApply) truePositives++;
    else if (applied) falsePositives++;
    else if (item.shouldApply) falseNegatives++;
    else trueNegatives++;

    const correct = applied === item.shouldApply;
    const status: BenchmarkStatus = correct ? 'passed' : item.knownIssue ? 'warning' : 'failed';
    return {
      id: `applicability/${item.id}`,
      status,
      metrics: { applied: applied ? 1 : 0 },
      expected: { shouldApply: item.shouldApply },
      actual: { applied, goal: item.goal },
      message: correct
        ? item.knownIssue
          ? 'known issue no longer reproduces'
          : undefined
        : `${applied ? 'false positive' : 'false negative'}${item.knownIssue ? ` (known: ${item.knownIssue})` : ''}`,
      durationMs: Date.now() - startedAt,
    };
  });

  const total = corpus.applicability.length;
  return {
    cases,
    metrics: {
      'applicability.accuracy': total ? (truePositives + trueNegatives) / total : 0,
      'applicability.precision': truePositives + falsePositives ? truePositives / (truePositives + falsePositives) : 0,
      'applicability.recall': truePositives + falseNegatives ? truePositives / (truePositives + falseNegatives) : 0,
      'applicability.falsePositives': falsePositives,
      'applicability.falseNegatives': falseNegatives,
    },
  };
}

async function runTrajectories(
  corpus: SkillBenchmarkCorpus,
  maxSteps: number
): Promise<{ cases: BenchmarkCaseResult[]; metrics: Record<string, number> }> {
  const tasks = new Map(corpus.tasks.map(task => [task.id, task]));
  const cases: BenchmarkCaseResult[] = [];
  let knownGaps = 0;

  for (const trajectory of corpus.trajectories) {
    const task = tasks.get(trajectory.taskId);
    if (!task) throw new Error(`Trajectory ${trajectory.id} names unknown task ${trajectory.taskId}.`);
    const startedAt = Date.now();

    const measured: Record<'unenforced' | 'enforced', SkillBenchmarkTrajectoryExpectation> = {
      unenforced: measure(
        await runEpisode({
          task,
          agent: new ScriptedAgent(trajectory.actions),
          arm: { id: 'prose', guidance: corpus.skill.guidance, enforce: false },
          invariants: corpus.skill.contract.invariants,
          run: 0,
          seed: 0,
          maxSteps,
        })
      ),
      enforced: measure(
        await runEpisode({
          task,
          agent: new ScriptedAgent(trajectory.actions),
          arm: { id: 'prose+contract', guidance: corpus.skill.guidance, enforce: true },
          invariants: corpus.skill.contract.invariants,
          run: 0,
          seed: 0,
          maxSteps,
        })
      ),
    };

    const mismatches = (['unenforced', 'enforced'] as const).flatMap(mode =>
      (Object.keys(trajectory.expected[mode]) as (keyof SkillBenchmarkTrajectoryExpectation)[])
        .filter(key => trajectory.expected[mode][key] !== measured[mode][key])
        .map(key => `${mode}.${key}: expected ${trajectory.expected[mode][key]}, measured ${measured[mode][key]}`)
    );
    if (trajectory.knownGap) knownGaps++;

    cases.push({
      id: `trajectory/${trajectory.id}`,
      status: mismatches.length ? 'failed' : 'passed',
      metrics: {
        enforcedSuccess: measured.enforced.success ? 1 : 0,
        unenforcedSuccess: measured.unenforced.success ? 1 : 0,
        falseRefusals: measured.enforced.falseRefusals,
      },
      expected: trajectory.expected,
      actual: measured,
      message: mismatches.length
        ? mismatches.join('; ')
        : trajectory.knownGap
          ? `known contract gap: ${trajectory.knownGap}`
          : trajectory.description,
      durationMs: Date.now() - startedAt,
    });
  }

  return {
    cases,
    metrics: {
      'trajectories.total': corpus.trajectories.length,
      'trajectories.measuredAsExpected': cases.filter(item => item.status === 'passed').length,
      'contract.knownGaps': knownGaps,
    },
  };
}

function measure(episode: EpisodeResult): SkillBenchmarkTrajectoryExpectation {
  return {
    success: episode.outcome.success,
    discardedDrafts: episode.outcome.discardedDrafts,
    duplicatePosts: episode.outcome.duplicatePosts,
    refusals: episode.refusals,
    falseRefusals: episode.falseRefusals,
    invariantViolations: episode.invariantViolations,
    harmfulActions: episode.harmfulActions,
  };
}

interface ArmSummary {
  readonly episodes: number;
  readonly successes: number;
  readonly success: Interval;
  readonly steps: readonly number[];
  readonly tokens: readonly number[];
  readonly modelCalls: readonly number[];
  readonly metrics: Record<string, number>;
}

function summarizeArm(episodes: readonly EpisodeResult[]): ArmSummary {
  const n = episodes.length;
  const successes = episodes.filter(episode => episode.outcome.success).length;
  const success = wilson(successes, n);
  const steps = episodes.map(episode => episode.steps);
  const tokens = episodes.map(episode => episode.promptTokens + episode.completionTokens);
  const modelCalls = episodes.map(episode => episode.modelCalls);
  const perEpisode = (pick: (episode: EpisodeResult) => number) => (n ? episodes.reduce((sum, e) => sum + pick(e), 0) / n : 0);
  return {
    episodes: n,
    successes,
    success,
    steps,
    tokens,
    modelCalls,
    metrics: {
      episodes: n,
      successRate: success.estimate,
      successRateLow: success.low,
      successRateHigh: success.high,
      meanSteps: mean(steps),
      finishedRate: perEpisode(e => (e.finished ? 1 : 0)),
      harmfulActionsPerEpisode: perEpisode(e => e.harmfulActions),
      invariantViolationsPerEpisode: perEpisode(e => e.invariantViolations),
      discardedDraftsPerEpisode: perEpisode(e => e.outcome.discardedDrafts),
      duplicatePostsPerEpisode: perEpisode(e => e.outcome.duplicatePosts),
      refusalsPerEpisode: perEpisode(e => e.refusals),
      falseRefusalsPerEpisode: perEpisode(e => e.falseRefusals),
      parseErrorsPerEpisode: perEpisode(e => e.parseErrors),
      modelCallsPerEpisode: perEpisode(e => e.modelCalls),
      pathwayStepsPerEpisode: perEpisode(e => e.pathwaySteps),
      stalePathwayStepsPerEpisode: perEpisode(e => e.stalePathwaySteps),
      tokensPerEpisode: mean(tokens),
      meanWallClockMs: perEpisode(e => e.wallClockMs),
    },
  };
}

function summarizeLive(
  corpus: SkillBenchmarkCorpus,
  armOrder: readonly ArmId[],
  episodes: readonly EpisodeResult[],
  redesignEpisodes: readonly EpisodeResult[],
  invalidationsByEpisode: ReadonlyMap<EpisodeResult, number>,
  errors: readonly { taskId: string; arm: ArmId; run: number; message: string }[],
  stoppedEarly?: string
): { cases: BenchmarkCaseResult[]; metrics: Record<string, number> } {
  const cases: BenchmarkCaseResult[] = [];
  const metrics: Record<string, number> = { 'live.episodes': episodes.length, 'live.errors': errors.length };
  const byArm = new Map<ArmId, ArmSummary>();

  for (const armId of armOrder) {
    const summary = summarizeArm(episodes.filter(episode => episode.arm === armId));
    byArm.set(armId, summary);
    for (const [key, value] of Object.entries(summary.metrics)) metrics[`${armId}.${key}`] = value;
  }

  for (const task of corpus.tasks) {
    for (const armId of armOrder) {
      const taskEpisodes = episodes.filter(episode => episode.taskId === task.id && episode.arm === armId);
      const summary = summarizeArm(taskEpisodes);
      cases.push({
        id: `live/${task.id}/${armId}`,
        status: 'passed',
        metrics: summary.metrics,
        actual: taskEpisodes.map(episode => ({
          run: episode.run,
          success: episode.outcome.success,
          reasons: episode.outcome.reasons,
          pathwaySteps: episode.pathwaySteps,
          trace: episode.trace,
        })),
        message: `${summary.successes}/${summary.episodes} succeeded, ${summary.metrics.meanSteps.toFixed(1)} steps on average`,
        durationMs: taskEpisodes.reduce((sum, episode) => sum + episode.wallClockMs, 0),
      });
    }
  }

  const comparisons: [ArmId, ArmId][] = (
    [
      ['prose', 'no-skill'],
      ['prose+contract', 'no-skill'],
      ['prose+contract', 'prose'],
      ['contract+pathway', 'no-skill'],
      ['contract+pathway', 'prose+contract'],
    ] as [ArmId, ArmId][]
  ).filter(([a, b]) => byArm.has(a) && byArm.has(b));
  for (const [treatment, baseline] of comparisons) {
    const a = byArm.get(treatment)!;
    const b = byArm.get(baseline)!;
    const success = proportionDifference(a.successes, a.episodes, b.successes, b.episodes);
    const steps = meanDifference(a.steps, b.steps);
    const tokens = meanDifference(a.tokens, b.tokens);
    const calls = meanDifference(a.modelCalls, b.modelCalls);
    const key = `delta.${treatment}_vs_${baseline}`;
    metrics[`${key}.modelCallsPerEpisode`] = calls.estimate;
    metrics[`${key}.successRate`] = success.estimate;
    metrics[`${key}.successRateLow`] = success.low;
    metrics[`${key}.successRateHigh`] = success.high;
    metrics[`${key}.meanSteps`] = steps.estimate;
    metrics[`${key}.tokensPerEpisode`] = tokens.estimate;
    metrics[`${key}.harmfulActionsPerEpisode`] =
      a.metrics.harmfulActionsPerEpisode - b.metrics.harmfulActionsPerEpisode;

    // Only a difference that clears the spread counts. A skill that is
    // significantly worse than its absence fails; no difference is a warning,
    // because it means the skill costs context and has not shown a benefit.
    const status: BenchmarkStatus = !excludesZero(success)
      ? 'warning'
      : success.estimate > 0
        ? 'passed'
        : 'failed';
    cases.push({
      id: `compare/${treatment}_vs_${baseline}`,
      status,
      metrics: {
        successDelta: success.estimate,
        successDeltaLow: success.low,
        successDeltaHigh: success.high,
        stepsDelta: steps.estimate,
        tokensDelta: tokens.estimate,
        modelCallsDelta: calls.estimate,
      },
      message:
        `success ${formatPercent(a.success.estimate)} vs ${formatPercent(b.success.estimate)}, ` +
        `delta ${formatSigned(success.estimate)} [95% CI ${formatSigned(success.low)}, ${formatSigned(success.high)}]` +
        (excludesZero(success) ? '' : ': not significant') +
        `; steps ${formatSigned(steps.estimate, 1)}; model calls ${formatSigned(calls.estimate, 1)}; ` +
        `tokens ${formatSigned(tokens.estimate, 0)} per episode`,
      durationMs: 0,
    });
  }

  const pathway = episodes.filter(episode => episode.arm === 'contract+pathway');
  if (pathway.length) {
    const learning = summarizeLearning(pathway);
    cases.push(learning.case);
    Object.assign(metrics, learning.metrics);
  }
  if (redesignEpisodes.length) {
    const redesign = summarizeRedesign(redesignEpisodes, invalidationsByEpisode);
    cases.push(redesign.case);
    Object.assign(metrics, redesign.metrics);
  }

  if (errors.length) {
    cases.push({
      id: 'live/errors',
      status: 'warning',
      metrics: { errors: errors.length },
      actual: errors,
      message:
        `${errors.length} episode(s) errored and were excluded from the statistics` +
        (stoppedEarly ? `; ${stoppedEarly}` : ''),
      durationMs: 0,
    });
  }

  return { cases, metrics };
}

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(0)}%`;
}

function formatSigned(value: number, digits = 2): string {
  const fixed = value.toFixed(digits);
  return value > 0 ? `+${fixed}` : fixed;
}

/**
 * Does repeated exposure make the skill better? Success, steps and model
 * calls by run: run 1 has nothing learned, run n has runs 1..n-1 behind it.
 */
function summarizeLearning(episodes: readonly EpisodeResult[]): {
  case: BenchmarkCaseResult;
  metrics: Record<string, number>;
} {
  const runs = [...new Set(episodes.map(episode => episode.run))].sort((a, b) => a - b);
  const curve = runs.map(run => {
    const inRun = episodes.filter(episode => episode.run === run);
    return {
      run: run + 1,
      successRate: mean(inRun.map(e => (e.outcome.success ? 1 : 0))),
      meanSteps: mean(inRun.map(e => e.steps)),
      meanModelCalls: mean(inRun.map(e => e.modelCalls)),
      pathwayShare: mean(inRun.map(e => (e.steps ? e.pathwaySteps / e.steps : 0))),
    };
  });
  const first = episodes.filter(episode => episode.run === runs[0]);
  const later = episodes.filter(episode => episode.run !== runs[0]);
  const calls = meanDifference(later.map(e => e.modelCalls), first.map(e => e.modelCalls));
  const steps = meanDifference(later.map(e => e.steps), first.map(e => e.steps));
  const improved = later.length > 0 && calls.high < 0;
  return {
    case: {
      id: 'learning/contract+pathway',
      status: improved ? 'passed' : 'warning',
      metrics: { modelCallsDelta: calls.estimate, stepsDelta: steps.estimate },
      actual: curve,
      message:
        `run 1: ${curve[0].meanModelCalls.toFixed(1)} model calls, ${curve[0].meanSteps.toFixed(1)} steps; ` +
        `later runs: ${mean(later.map(e => e.modelCalls)).toFixed(1)} model calls, ${mean(later.map(e => e.steps)).toFixed(1)} steps` +
        (improved ? '' : ': no significant reduction in model calls'),
      durationMs: 0,
    },
    metrics: {
      'learning.run1.successRate': curve[0].successRate,
      'learning.run1.meanModelCalls': curve[0].meanModelCalls,
      'learning.run1.meanSteps': curve[0].meanSteps,
      'learning.later.successRate': mean(later.map(e => (e.outcome.success ? 1 : 0))),
      'learning.later.meanModelCalls': mean(later.map(e => e.modelCalls)),
      'learning.later.meanSteps': mean(later.map(e => e.steps)),
      'learning.later.pathwayShare': mean(later.map(e => (e.steps ? e.pathwaySteps / e.steps : 0))),
    },
  };
}

/**
 * After the page is redesigned, a learned workflow must notice and hand back
 * to the model, never click at controls that are gone.
 */
function summarizeRedesign(
  episodes: readonly EpisodeResult[],
  invalidationsByEpisode: ReadonlyMap<EpisodeResult, number>
): { case: BenchmarkCaseResult; metrics: Record<string, number> } {
  const stale = episodes.reduce((sum, e) => sum + e.stalePathwaySteps, 0);
  const invalidations = episodes.reduce((sum, e) => sum + (invalidationsByEpisode.get(e) ?? 0), 0);
  const successRate = mean(episodes.map(e => (e.outcome.success ? 1 : 0)));
  return {
    case: {
      id: 'redesign/contract+pathway',
      status: stale === 0 ? 'passed' : 'failed',
      metrics: { stalePathwaySteps: stale, invalidations, successRate },
      actual: episodes.map(e => ({
        task: e.taskId,
        run: e.run + 1,
        success: e.outcome.success,
        invalidations: invalidationsByEpisode.get(e) ?? 0,
        pathwaySteps: e.pathwaySteps,
        stalePathwaySteps: e.stalePathwaySteps,
        modelCalls: e.modelCalls,
        trace: e.trace,
      })),
      message:
        `${invalidations} invalidation(s), ${stale} stale workflow step(s) executed, ` +
        `${formatPercent(successRate)} success on the redesigned page`,
      durationMs: episodes.reduce((sum, e) => sum + e.wallClockMs, 0),
    },
    metrics: {
      'redesign.episodes': episodes.length,
      'redesign.invalidations': invalidations,
      'redesign.stalePathwaySteps': stale,
      'redesign.successRate': successRate,
      'redesign.meanModelCalls': mean(episodes.map(e => e.modelCalls)),
    },
  };
}
