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
 * The invariant logic mirrors Oasis Cognition
 * (apps/api-gateway/src/computer-use/skill-contract.ts), which enforces both
 * invariants in production. Keep the two in step, so that the skills
 * benchmark measures the rule that actually runs rather than a better one.
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
  | { readonly kind: 'submit_once'; readonly minInputLength?: number }
  /**
   * Refuse deleting anything the goal did not ask to delete. Deletion is the
   * one action a skill's prose ("never click Delete") guarded that nothing
   * could undo.
   */
  | { readonly kind: 'no_unrequested_deletion' };

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
  /**
   * The user's goal. Discarding input is refused unless the goal itself asks
   * for it: the user can authorize throwing their work away, the agent cannot.
   */
  readonly goal?: string;
}

export interface InvariantViolation {
  readonly invariant: InvariantKind;
  /** Shown to the agent: what was refused, why, and what to do instead. */
  readonly message: string;
}

/** Dismissals that need no object: the button closes whatever is open. */
const BARE_DISMISS = /^(close|cancel|discard|dismiss|exit|×|x)$/i;

/**
 * "Close …" and friends discard input only when they name the thing the input
 * lives in. "Close dialog" and "Cancel post" do; "Close chat" closes an
 * unrelated window and "Close friends" is an audience selector.
 */
const DISMISS_CONTAINER =
  /^(close|cancel|discard|dismiss|exit)\s.*\b(dialog|modal|pop-?up|window|tab|post|draft|composer|editor|form|sheet|panel|page)\b/i;

const DISCARD_PHRASE = /discard.*draft|close.*without.*saving|cancel.*post|leave.*page|exit.*editor/i;

/**
 * "Back" leaves whatever was opened last: the editor straight after typing,
 * only a sub-menu if the agent has opened one since.
 */
const BACK = /^(back|go back|←)$/i;

/** Clicks that publish or save what was typed, wherever they come. */
export const COMMIT_TARGET = /\b(post|publish|share|send|submit|tweet|insert|^add\b|save)\b/i;

/**
 * Confirmations that commit typed input only as the first click after it. The
 * same words close sub-menus ("Done" on an audience picker).
 */
export const CONFIRM_TARGET = /\b(ok|done|confirm|apply)\b/i;

/** Clicks that put something out into the world, a repeat of which is a duplicate. */
const PUBLISH_TARGET = /^(post|publish|share|send|submit|tweet)(\s+(now|button|post|it))?$/i;

/** A goal that asks for the input to be thrown away. */
const GOAL_REQUESTS_DISCARD =
  /\b(discard|throw away|delete|cancel|abandon|scrap)\b.{0,40}\b(draft|post|message|input|changes|text)\b|\bwithout (posting|publishing|sending|saving)\b|\bdon'?t (post|publish|send|save)\b/i;

/** Controls that delete: "Delete", "Delete post", "Move to trash", "Xóa bài viết". */
const DELETE_TARGET = /^(delete|remove|trash|xóa|xoá)(\s|$)|\bmove to (trash|bin)\b/i;

/** A goal that asks for something to be deleted. */
const GOAL_REQUESTS_DELETION = /\b(delete|remove|trash|erase)\b|xóa|xoá/i;

const DEFAULT_MIN_DRAFT_LENGTH = 10;

export function skillApplies(skill: Skill, goal: string): boolean {
  if (!skill.contract.appliesWhen) return false;
  return new RegExp(skill.contract.appliesWhen, 'i').test(goal);
}

const isClick = (step: ContractStep) => step.status === 'completed' && step.action === 'click';

function typedText(step: ContractStep): string | null {
  return step.status === 'completed' && step.action === 'type' ? (step.text || '').trim() : null;
}

function lastUncommittedDraft(
  steps: readonly ContractStep[],
  minLength: number
): { index: number; text: string } | null {
  for (let i = steps.length - 1; i >= 0; i--) {
    const text = typedText(steps[i]);
    if (text === null || text.length < minLength) continue;

    const committed = steps
      .slice(i + 1)
      .filter(isClick)
      .some(
        (click, n) =>
          COMMIT_TARGET.test(click.target || '') || (n === 0 && CONFIRM_TARGET.test(click.target || ''))
      );
    return committed ? null : { index: i, text };
  }
  return null;
}

function isDiscard(target: string, steps: readonly ContractStep[], draftIndex: number): boolean {
  if (BARE_DISMISS.test(target) || DISMISS_CONTAINER.test(target) || DISCARD_PHRASE.test(target)) return true;
  if (BACK.test(target)) return !steps.slice(draftIndex + 1).some(isClick);
  return false;
}

function checkProtectUncommittedInput(
  invariant: Extract<Invariant, { kind: 'protect_uncommitted_input' }>,
  context: InvariantContext
): InvariantViolation | null {
  if (context.action !== 'click') return null;

  const draft = lastUncommittedDraft(
    context.recentSteps,
    invariant.minDraftLength ?? DEFAULT_MIN_DRAFT_LENGTH
  );
  if (!draft || !isDiscard(context.target, context.recentSteps, draft.index)) return null;
  if (context.goal && GOAL_REQUESTS_DISCARD.test(context.goal)) return null;

  return {
    invariant: 'protect_uncommitted_input',
    message:
      `REFUSED to click "${context.target}": it would discard your uncommitted input ` +
      `("${draft.text.slice(0, 80)}"). You have not clicked a submit button since typing it. ` +
      `Click the submit for this context instead, such as "Post" in a composer or "Save" in a dialog.`,
  };
}

/**
 * Replays recent steps to find what is pending and what was already
 * published. A submit with nothing typed before it published nothing (the
 * button is disabled on an empty draft), so it does not count; and retyping
 * text that was already published is the same input, not new input.
 */
function checkSubmitOnce(
  invariant: Extract<Invariant, { kind: 'submit_once' }>,
  context: InvariantContext
): InvariantViolation | null {
  if (context.action !== 'click' || !PUBLISH_TARGET.test(context.target)) return null;

  const minLength = invariant.minInputLength ?? DEFAULT_MIN_DRAFT_LENGTH;
  let pending = '';
  const published: string[] = [];
  for (const step of context.recentSteps) {
    if (step.status !== 'completed') continue;
    if (step.action === 'type') pending += step.text || '';
    else if (step.action === 'clear') pending = '';
    else if (isClick(step) && PUBLISH_TARGET.test(step.target || '') && pending.trim().length >= minLength) {
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

function checkNoUnrequestedDeletion(context: InvariantContext): InvariantViolation | null {
  if (context.action !== 'click' || !DELETE_TARGET.test(context.target.trim())) return null;
  if (context.goal && GOAL_REQUESTS_DELETION.test(context.goal)) return null;
  return {
    invariant: 'no_unrequested_deletion',
    message:
      `REFUSED to click "${context.target}": it deletes something, and the goal does not ask for a deletion. ` +
      `Deleting cannot be undone. Choose the control that does what the goal asks, such as "Edit post".`,
  };
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
        : invariant.kind === 'submit_once'
          ? checkSubmitOnce(invariant, context)
          : checkNoUnrequestedDeletion(context);
    if (violation) return violation;
  }
  return null;
}
