/**
 * A skill is the conjunction of two things:
 *
 *   - a contract: hard rules the executor enforces (when the skill applies,
 *     and what must never happen while it runs), and
 *   - a pathway: experience of how the task is done, which is retrieved,
 *     reused and retained by Pathway.
 *
 * Guidance prose is what a skill is today: advice injected into a prompt,
 * which the model may disregard. The contract is the part that cannot be
 * disregarded, because the executor checks it before an action runs.
 *
 * The invariant logic here is ported from Oasis Cognition
 * (apps/api-gateway/src/computer-use/skill-contract.ts), which enforces
 * `protect_uncommitted_input` in production. It is ported unchanged, gaps
 * included, so that the skills benchmark measures the rule that actually
 * runs rather than an improved one.
 */

export type Invariant =
  /**
   * Refuse an action that would throw away input the user has not committed.
   * Looks back over recent steps for typed content with no submit after it.
   */
  | { readonly kind: 'protect_uncommitted_input'; readonly minDraftLength?: number }
  /**
   * Refuse a second submit of the same input. A submit that has not visibly
   * finished yet tempts an agent to click it again, which publishes twice.
   */
  | { readonly kind: 'submit_once' };

export type InvariantKind = Invariant['kind'];

export interface SkillContract {
  /** Regex source, tested case-insensitively against the goal. */
  readonly appliesWhen: string;
  readonly invariants: readonly Invariant[];
}

export interface SkillGuidance {
  /** Injected into the planning prompt. */
  readonly plan: string;
  /** Injected into each step's prompt. */
  readonly react: string;
}

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly contract: SkillContract;
  readonly guidance: SkillGuidance;
  /** Pathway workflow backing the skill. Absent until a skill is learned. */
  readonly workflowRef?: string;
}

/** One action the agent has taken, as the invariants see it. */
export interface ContractStep {
  readonly action: string;
  readonly target?: string;
  readonly text?: string;
  /**
   * Refused steps never ran, and skipped steps ran without effect (typing
   * with nothing focused, a disabled button); neither commits nor creates input.
   */
  readonly status: 'completed' | 'refused' | 'skipped';
}

export interface InvariantContext {
  /** The action about to run, lowercased (e.g. 'click'). */
  readonly action: string;
  /** Its target, stripped of surrounding quotes. Empty for non-click actions. */
  readonly target: string;
  /** Recent steps, oldest first. */
  readonly recentSteps: readonly ContractStep[];
}

export interface InvariantViolation {
  readonly invariant: InvariantKind;
  /** Shown to the agent: what was refused, why, and what to do instead. */
  readonly message: string;
}

/**
 * Targets that dismiss a dialog rather than committing it. "Close friends" is
 * an audience selector, not a dismissal, and is excluded explicitly.
 */
export const DISCARD_TARGET =
  /^(close|cancel|discard|dismiss|exit|back|×|x)$|^(close|cancel|discard|dismiss)\s(?!friends\b)|discard.*draft|close.*without.*saving|cancel.*post|leave.*page|exit.*editor/i;

/** Verbs that commit input. Deliberately broad, as in Oasis. */
export const SUBMIT_TARGET =
  /\b(post|publish|share|send|submit|tweet|insert|^add\b|ok|done|save|confirm|apply)\b/i;

/** Verbs that publish, the subset of submits a duplicate of which is visible to others. */
const PUBLISH_TARGET = /^(post|publish|share|send|submit|tweet)$/i;

const DEFAULT_MIN_DRAFT_LENGTH = 10;

export function skillApplies(skill: Skill, goal: string): boolean {
  if (!skill.contract.appliesWhen) return false;
  return new RegExp(skill.contract.appliesWhen, 'i').test(goal);
}

function lastUncommittedDraft(
  steps: readonly ContractStep[],
  minLength: number
): string | null {
  for (let i = steps.length - 1; i >= 0; i--) {
    const step = steps[i];
    if (step.status !== 'completed' || step.action !== 'type') continue;
    const text = (step.text || '').trim();
    if (text.length < minLength) continue;

    const committed = steps
      .slice(i + 1)
      .some(
        later =>
          later.status === 'completed' &&
          later.action === 'click' &&
          SUBMIT_TARGET.test(later.target || '')
      );
    return committed ? null : text;
  }
  return null;
}

function checkProtectUncommittedInput(
  invariant: Extract<Invariant, { kind: 'protect_uncommitted_input' }>,
  context: InvariantContext
): InvariantViolation | null {
  if (context.action !== 'click' || !DISCARD_TARGET.test(context.target)) return null;

  const draft = lastUncommittedDraft(
    context.recentSteps,
    invariant.minDraftLength ?? DEFAULT_MIN_DRAFT_LENGTH
  );
  if (!draft) return null;

  return {
    invariant: 'protect_uncommitted_input',
    message:
      `REFUSED to click "${context.target}": it would discard your uncommitted input ` +
      `("${draft.slice(0, 80)}"). You have not clicked a submit button since typing it. ` +
      `Click the submit for this context instead, such as "Post" in a composer or "Save" in a dialog.`,
  };
}

/**
 * Replays recent steps to find what is pending and what was already
 * published. A submit with nothing typed before it published nothing (the
 * button is disabled on an empty draft), so it does not count; and retyping
 * text that was already published is the same input, not new input.
 */
function checkSubmitOnce(context: InvariantContext): InvariantViolation | null {
  if (context.action !== 'click' || !PUBLISH_TARGET.test(context.target)) return null;

  let pending = '';
  const published: string[] = [];
  for (const step of context.recentSteps) {
    if (step.status !== 'completed') continue;
    if (step.action === 'type') pending += step.text || '';
    else if (step.action === 'clear') pending = '';
    else if (step.action === 'click' && PUBLISH_TARGET.test(step.target || '') && pending.trim()) {
      published.push(normalizeInput(pending));
      pending = '';
    }
  }

  if (!published.length) return null;
  if (!pending.trim()) {
    return {
      invariant: 'submit_once',
      message:
        `REFUSED to click "${context.target}": your input was already submitted and nothing new has been typed since. ` +
        `Submitting again creates a duplicate. Wait and read the screen to confirm it was published.`,
    };
  }
  if (published.includes(normalizeInput(pending))) {
    return {
      invariant: 'submit_once',
      message:
        `REFUSED to click "${context.target}": "${pending.trim().slice(0, 80)}" was already submitted. ` +
        `Publishing it again creates a duplicate. If the goal is done, reply done.`,
    };
  }
  return null;
}

function normalizeInput(text: string): string {
  return text.trim().replace(/\s+/g, ' ').toLowerCase();
}

/**
 * The first invariant the action violates, or null to proceed. Returns rather
 * than throws: the agent should see the refusal and choose differently.
 */
export function checkInvariants(
  invariants: readonly Invariant[],
  context: InvariantContext
): InvariantViolation | null {
  for (const invariant of invariants) {
    const violation =
      invariant.kind === 'protect_uncommitted_input'
        ? checkProtectUncommittedInput(invariant, context)
        : checkSubmitOnce(context);
    if (violation) return violation;
  }
  return null;
}
