import {
  checkInvariants,
  ContractStep,
  Invariant,
  SkillGuidance,
} from '../../skills/contract.js';
import type { Agent, HistoryEntry } from './agents.js';
import {
  AgentAction,
  ComposerEnvironment,
  ComposerTaskFixture,
  EpisodeOutcome,
} from './composer-environment.js';

export type ArmId = 'no-skill' | 'prose' | 'prose+contract';

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
  let modelCalls = 0;
  let promptTokens = 0;
  let completionTokens = 0;

  for (let step = 0; step < options.maxSteps; step++) {
    const decision = await agent.decide({
      goal: task.goal,
      screen: env.render(),
      history,
      guidance: arm.guidance,
      // Same seed at the same step in every arm, so arms differ only by treatment.
      seed: options.seed * 1000 + step,
    });
    modelCalls += decision.modelCalls;
    promptTokens += decision.promptTokens;
    completionTokens += decision.completionTokens;

    const action = decision.action;
    if (!action) {
      parseErrors++;
      history.push({ action: null, output: INVALID_REPLY, refused: false });
      trace.push({ action: null, output: `${INVALID_REPLY} Raw: ${decision.raw.slice(0, 200)}`, refused: false });
      continue;
    }
    if (action.action === 'done') {
      finished = true;
      trace.push({ action, output: 'Finished.', refused: false });
      break;
    }

    // The executor knows what it is about to click, so the contract judges the
    // resolved element rather than however the model spelled it. A click on
    // nothing is a no-op the contract has no reason to judge.
    const resolved = action.action === 'click' ? env.resolveTarget(action.target) : null;
    const target = resolved ?? (action.action === 'click' ? action.target : '');
    const violation =
      action.action === 'click' && !resolved
        ? null
        : checkInvariants(invariants, {
            action: action.action,
            target,
            recentSteps: contractSteps.slice(-10),
          });

    if (violation && arm.enforce) {
      refusals++;
      if (env.wouldHarm(action)) correctRefusals++;
      else falseRefusals++;
      history.push({ action, output: violation.message, refused: true });
      contractSteps.push(toContractStep(action, target, 'refused'));
      trace.push({ action, output: violation.message, refused: true, violation: violation.invariant });
      continue;
    }

    const result = env.step(action);
    if (violation) invariantViolations++;
    if (result.harmful) harmfulActions++;
    history.push({ action, output: result.output, refused: false });
    contractSteps.push(toContractStep(action, target, result.applied === false ? 'skipped' : 'completed'));
    trace.push({ action, output: result.output, refused: false, violation: violation?.invariant });
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
    modelCalls,
    promptTokens,
    completionTokens,
    wallClockMs: Date.now() - startedAt,
    trace,
  };
}

function toContractStep(action: AgentAction, target: string, status: ContractStep['status']): ContractStep {
  return {
    action: action.action,
    target: action.action === 'click' ? target : undefined,
    text: action.action === 'type' ? action.text : undefined,
    status,
  };
}
