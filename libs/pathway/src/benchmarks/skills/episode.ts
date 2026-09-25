import {
  checkInvariants,
  ContractStep,
  Invariant,
  SkillGuidance,
} from '../../skills/contract.js';
import { goalSlots, screenHash } from '../../skills/workflow-memory.js';
import type { Agent, HistoryEntry } from './agents.js';
import {
  AgentAction,
  ComposerEnvironment,
  ComposerTaskFixture,
  EpisodeOutcome,
  ScreenElement,
} from './composer-environment.js';

export type ArmId = 'no-skill' | 'prose' | 'prose+contract' | 'contract+pathway' | 'contract+pathway+demo';

/** What differs between arms: the prose the model sees, and what the executor enforces. */
export interface Arm {
  readonly id: ArmId;
  readonly guidance?: SkillGuidance;
  readonly enforce: boolean;
}

export interface EpisodeTraceStep {
  readonly action: AgentAction | null;
  readonly output: string;
  readonly refused: boolean;
  readonly violation?: string;
  /** Structure hash of the screen the action was chosen on. */
  readonly screen: string;
  /** False for refused, unparseable and no-effect actions: not part of what worked. */
  readonly effective: boolean;
  readonly source: 'model' | 'pathway';
  /**
   * What actually ran, normalized: a click by index or partial label becomes
   * the control's label, with an anchor when the label is not unique on the
   * screen. This is what a workflow learns, so it replays on the same control.
   */
  readonly executed?: AgentAction;
}

export interface EpisodeResult {
  readonly taskId: string;
  readonly arm: ArmId;
  readonly run: number;
  readonly seed: number;
  readonly outcome: EpisodeOutcome;
  /** Whether the agent declared itself done within the step limit. */
  readonly finished: boolean;
  readonly steps: number;
  /** Actions the executor refused. */
  readonly refusals: number;
  /** Refusals of actions that would have destroyed input or duplicated a post. */
  readonly correctRefusals: number;
  /** Refusals of harmless actions: the contract being too strict. */
  readonly falseRefusals: number;
  /** Executed actions the skill's contract forbids. Zero whenever the contract is enforced. */
  readonly invariantViolations: number;
  /** Executed actions that destroyed input or published a duplicate. */
  readonly harmfulActions: number;
  readonly parseErrors: number;
  /** Steps taken from a learned workflow without asking the model. */
  readonly pathwaySteps: number;
  /** Workflow steps that had no effect: a workflow steering the agent at something not there. */
  readonly stalePathwaySteps: number;
  readonly modelCalls: number;
  readonly promptTokens: number;
  readonly completionTokens: number;
  readonly wallClockMs: number;
  readonly trace: readonly EpisodeTraceStep[];
}

export interface EpisodeOptions {
  readonly task: ComposerTaskFixture;
  readonly agent: Agent;
  readonly arm: Arm;
  /** The skill's invariants. Always checked, so compliance is measured in every arm; enforced only when the arm says so. */
  readonly invariants: readonly Invariant[];
  readonly run: number;
  readonly seed: number;
  readonly maxSteps: number;
}

const INVALID_REPLY =
  'Your reply was not a valid action. Reply with exactly one JSON object such as {"action":"click","target":"Post"}.';

export async function runEpisode(options: EpisodeOptions): Promise<EpisodeResult> {
  const { task, agent, arm, invariants } = options;
  const env = new ComposerEnvironment(task);
  const history: HistoryEntry[] = [];
  const contractSteps: ContractStep[] = [];
  const trace: EpisodeTraceStep[] = [];
  const startedAt = Date.now();
  let finished = false;
  let refusals = 0;
  let correctRefusals = 0;
  let falseRefusals = 0;
  let invariantViolations = 0;
  let harmfulActions = 0;
  let parseErrors = 0;
  let pathwaySteps = 0;
  let stalePathwaySteps = 0;
  let modelCalls = 0;
  let promptTokens = 0;
  let completionTokens = 0;

  for (let step = 0; step < options.maxSteps; step++) {
    const rendered = env.render();
    const screen = screenHash(rendered);
    const decision = await agent.decide({
      goal: task.goal,
      screen: rendered,
      history,
      guidance: arm.guidance,
      // Same seed at the same step in every arm, so arms differ only by treatment.
      seed: options.seed * 1000 + step,
    });
    modelCalls += decision.modelCalls;
    promptTokens += decision.promptTokens;
    completionTokens += decision.completionTokens;
    const source = decision.source ?? 'model';
    if (source === 'pathway') pathwaySteps++;

    const action = decision.action;
    if (!action) {
      parseErrors++;
      history.push({ action: null, output: INVALID_REPLY, refused: false });
      trace.push({
        action: null, output: `${INVALID_REPLY} Raw: ${decision.raw.slice(0, 200)}`, refused: false,
        screen, effective: false, source,
      });
      continue;
    }
    if (action.action === 'done') {
      finished = true;
      trace.push({ action, output: 'Finished.', refused: false, screen, effective: true, source });
      break;
    }

    // The executor knows what it is about to click, so the contract judges the
    // resolved element rather than however the model spelled it. A click on
    // nothing is a no-op the contract has no reason to judge.
    const entry = action.action === 'click' ? env.resolveEntry(action.target, action.anchor) : null;
    const resolved = entry?.label ?? null;
    const target = resolved ?? (action.action === 'click' ? action.target : '');
    const executed = normalizeAction(action, entry, env, task.goal);
    const violation =
      action.action === 'click' && !resolved
        ? null
        : checkInvariants(invariants, {
            action: action.action,
            target,
            recentSteps: contractSteps.slice(-10),
            goal: task.goal,
          });

    if (violation && arm.enforce) {
      refusals++;
      if (env.wouldHarm(action)) correctRefusals++;
      else falseRefusals++;
      history.push({ action, output: violation.message, refused: true });
      contractSteps.push(toContractStep(action, target, 'refused'));
      trace.push({
        action, output: violation.message, refused: true, violation: violation.invariant,
        screen, effective: false, source, executed,
      });
      continue;
    }

    const result = env.step(action);
    if (violation) invariantViolations++;
    if (result.harmful) harmfulActions++;
    history.push({ action, output: result.output, refused: false });
    contractSteps.push(toContractStep(action, target, result.applied === false ? 'skipped' : 'completed'));
    const effective = result.applied !== false;
    if (source === 'pathway' && !effective) stalePathwaySteps++;
    trace.push({
      action, output: result.output, refused: false, violation: violation?.invariant,
      screen, effective, source, executed,
    });
  }

  return {
    taskId: task.id,
    arm: arm.id,
    run: options.run,
    seed: options.seed,
    outcome: env.outcome(),
    finished,
    steps: trace.length,
    refusals,
    correctRefusals,
    falseRefusals,
    invariantViolations,
    harmfulActions,
    parseErrors,
    pathwaySteps,
    stalePathwaySteps,
    modelCalls,
    promptTokens,
    completionTokens,
    wallClockMs: Date.now() - startedAt,
    trace,
  };
}

/**
 * The action as the executor carried it out. For a click on a control whose
 * label repeats on screen, the anchor is the goal's own words for that post
 * when they appear in it (so a learned workflow generalizes), otherwise the
 * start of the post.
 */
function normalizeAction(
  action: AgentAction,
  entry: ScreenElement | null,
  env: ComposerEnvironment,
  goal: string
): AgentAction {
  if (action.action !== 'click' || !entry) return action;
  const shared = env.entries().filter(other => other.label === entry.label).length > 1;
  if (!shared || !entry.context) return { action: 'click', target: entry.label };
  const context = entry.context.toLowerCase();
  const slot = goalSlots(goal).find(value => context.includes(value.toLowerCase()));
  return { action: 'click', target: entry.label, anchor: slot ?? entry.context.slice(0, 40) };
}

function toContractStep(action: AgentAction, target: string, status: ContractStep['status']): ContractStep {
  return {
    action: action.action,
    target: action.action === 'click' ? target : undefined,
    text: action.action === 'type' ? action.text : undefined,
    status,
  };
}
