/**
 * The pathway half of a skill: workflows learned from runs the contract
 * approved, each tied to the screens it was learned on.
 *
 * A skill's prose tells the model what usually works. A workflow is what
 * actually worked, step by step, and it can be followed without asking the
 * model at all. Two things keep that safe:
 *
 *   - Retention is contract-aware. A run becomes a workflow only if it
 *     succeeded *and* honoured the contract: no invariant violated, nothing
 *     destroyed or duplicated. A run that passed by accident while breaking a
 *     rule would otherwise be reinforced.
 *   - Every step records the structure of the screen it was taken on, as a
 *     provenance derivation. A workflow applies only where its first screen
 *     matches the current one; the same intent can have one workflow per
 *     starting page. Following it checks each later step's screen first: a
 *     mismatch there means the page changed under it, and the workflow (and
 *     anything else derived from that screen) is invalidated instead of
 *     steering the agent at a button that is no longer there.
 *
 * Built from PEAL's pieces: content-addressed nodes (NodeStore), derivations
 * (ProvenanceGraph), and candidate knowledge through a validation engine.
 */
import { Hash, hashContent } from '../cas/hash.js';
import { NodeStore } from '../cas/node-store.js';
import { CandidateKnowledge } from '../learning/learning-engine.js';
import {
  ConfidenceValidationEngine,
  ValidationEngine,
  ValidationResult,
} from '../learning/validation-engine.js';
import { Derivation, ProvenanceGraph } from '../provenance/provenance-graph.js';

/**
 * One action, in whatever vocabulary the executor uses ('click', 'type',
 * 'navigate', 'click_scoped', ...). Typed text lives in `text`.
 */
export interface WorkflowStepAction {
  readonly action: string;
  readonly target?: string;
  readonly text?: string;
  readonly anchor?: string;
}

export interface WorkflowStep {
  /** Typed text is stored as `{{text}}` when it was the goal's quoted text, so the workflow generalizes. */
  readonly step: WorkflowStepAction;
  /** Content hash of the screen structure the step was taken on. */
  readonly screen: Hash;
}

export interface SkillWorkflow {
  readonly skillId: string;
  /** The goal with its quoted text abstracted: which task this workflow does. */
  readonly intent: string;
  readonly steps: readonly WorkflowStep[];
}

/** One step of a finished run, as the learner sees it. */
export interface ObservedStep {
  readonly step: WorkflowStepAction;
  readonly screen: Hash;
  /** Refused, skipped (no effect) and unparseable steps are not part of what worked. */
  readonly effective: boolean;
}

export interface RunReport {
  readonly skillId: string;
  readonly goal: string;
  readonly success: boolean;
  readonly invariantViolations: number;
  readonly harmfulActions: number;
  readonly steps: readonly ObservedStep[];
  /** Where the evidence lives, e.g. a trace hash. */
  readonly evidence: string;
}

/**
 * The contract as a validation policy: a candidate is admitted only if the
 * run it came from satisfied the success predicate and the invariants, and
 * then by confidence, through PEAL's ConfidenceValidationEngine.
 */
export class ContractValidationEngine implements ValidationEngine {
  readonly name = 'contract-validation-engine';
  readonly version = '1.0.0';

  constructor(private readonly confidence: ValidationEngine = new ConfidenceValidationEngine()) {}

  validate(candidates: readonly CandidateKnowledge[]): ValidationResult {
    const honoured = candidates.filter(candidate => honouredContract(candidate));
    const broken = candidates
      .filter(candidate => !honouredContract(candidate))
      .map(candidate => ({ ...candidate, status: 'rejected' as const }));
    const result = this.confidence.validate(honoured);
    return { accepted: result.accepted, rejected: [...broken, ...result.rejected] };
  }
}

function honouredContract(candidate: CandidateKnowledge): boolean {
  const run = candidate.metadata as { success?: boolean; invariantViolations?: number; harmfulActions?: number } | undefined;
  return Boolean(run?.success) && run?.invariantViolations === 0 && run?.harmfulActions === 0;
}

/** Quoted text in a goal: what the user wants typed. */
const QUOTED = /["“]([^"”]+)["”]/;
/** Otherwise, what follows the first colon: "Post on Facebook: see you tonight". */
const AFTER_COLON = /^[^:]{3,80}:\s*(\S[\s\S]*)$/;

/** The text a goal asks to be typed, if it names one. */
export function goalText(goal: string): string | undefined {
  return goal.match(QUOTED)?.[1] ?? goal.match(AFTER_COLON)?.[1]?.trim();
}

/** The goal with the text it asks for abstracted: which task a workflow does. */
export function goalIntent(goal: string): string {
  const text = goalText(goal);
  return (text === undefined ? goal : goal.replace(text, '{{text}}')).trim();
}

/** The structure of a screen as an agent reads it: its title and the labels it can act on, not their contents. */
export function screenStructure(rendered: string): { readonly title: string; readonly elements: readonly string[] } {
  const lines = rendered.split('\n');
  const elements = lines
    .map(line => line.match(/^\s*\[\d+\]\s*"(.*)"\s*$/)?.[1])
    .filter((label): label is string => label !== undefined);
  return { title: lines[0]?.trim() ?? '', elements };
}

export function screenHash(rendered: string): Hash {
  return hashContent(screenStructure(rendered));
}

export type StepCheck =
  | { readonly kind: 'follow'; readonly step: WorkflowStepAction }
  | { readonly kind: 'invalidated'; readonly reason: string; readonly invalidated: number }
  | { readonly kind: 'finished' };

export interface WorkflowMemoryStats {
  readonly proposed: number;
  readonly retained: number;
  readonly rejected: number;
  readonly invalidated: number;
}

/** Everything a memory knows, as plain JSON, for persisting between processes. */
export interface WorkflowMemorySnapshot {
  readonly version: 1;
  readonly workflows: readonly SkillWorkflow[];
  readonly derivations: readonly Derivation[];
  readonly active: readonly (readonly [string, Hash])[];
  readonly invalid: readonly Hash[];
  readonly stats: WorkflowMemoryStats;
}

export interface RecalledWorkflow {
  readonly id: Hash;
  readonly workflow: SkillWorkflow;
}

export class SkillWorkflowMemory {
  private readonly store = new NodeStore();
  private readonly provenance = new ProvenanceGraph();
  private readonly derivations: Derivation[] = [];
  /** `${skillId}\n${intent}\n${startScreen}` -> the workflow node currently trusted for it. */
  private readonly active = new Map<string, Hash>();
  private readonly invalid = new Set<Hash>();
  private stats = { proposed: 0, retained: 0, rejected: 0, invalidated: 0 };

  constructor(private readonly validator: ValidationEngine = new ContractValidationEngine()) {}

  /**
   * The trusted workflow for this skill and goal that starts on the current
   * screen, if one has been learned and not invalidated.
   */
  recall(skillId: string, goal: string, startScreen: Hash): RecalledWorkflow | null {
    const id = this.active.get(key(skillId, goalIntent(goal), startScreen));
    if (!id || this.invalid.has(id)) return null;
    const workflow = this.store.get(id)!.content as SkillWorkflow;
    return appliesTo(workflow, goal) ? { id, workflow } : null;
  }

  /**
   * Every trusted workflow for this skill and goal, whatever screen it starts
   * on. For executors whose screen fingerprint depends on the step being
   * checked, so the caller tests each first step against the page itself.
   */
  candidates(skillId: string, goal: string): RecalledWorkflow[] {
    const prefix = `${skillId}\n${goalIntent(goal)}\n`;
    return [...this.active.entries()]
      .filter(([slot, id]) => slot.startsWith(prefix) && !this.invalid.has(id))
      .map(([, id]) => ({ id, workflow: this.store.get(id)!.content as SkillWorkflow }))
      .filter(({ workflow }) => appliesTo(workflow, goal));
  }

  /** Stop trusting a workflow, e.g. after following it ended in failure. */
  invalidate(id: Hash): boolean {
    if (this.invalid.has(id) || !this.store.has(id)) return false;
    this.invalid.add(id);
    this.stats.invalidated++;
    return true;
  }

  snapshot(): WorkflowMemorySnapshot {
    const ids = new Set([...this.active.values(), ...this.invalid]);
    return {
      version: 1,
      workflows: [...ids].map(id => this.store.get(id)?.content as SkillWorkflow).filter(Boolean),
      derivations: this.derivations.filter(d => ids.has(d.output)),
      active: [...this.active.entries()],
      invalid: [...this.invalid],
      stats: { ...this.stats },
    };
  }

  static restore(
    snapshot: WorkflowMemorySnapshot,
    validator: ValidationEngine = new ContractValidationEngine()
  ): SkillWorkflowMemory {
    if (snapshot.version !== 1) throw new Error(`Unsupported workflow memory snapshot version ${snapshot.version}`);
    const memory = new SkillWorkflowMemory(validator);
    for (const workflow of snapshot.workflows) memory.store.put('skill-workflow', workflow);
    for (const derivation of snapshot.derivations) memory.record(derivation);
    for (const [slot, id] of snapshot.active) if (memory.store.has(id)) memory.active.set(slot, id);
    for (const id of snapshot.invalid) memory.invalid.add(id);
    memory.stats = { ...snapshot.stats };
    return memory;
  }

  private record(derivation: Derivation): void {
    this.provenance.recordDerivation(derivation);
    this.derivations.push(derivation);
  }

  /**
   * Offer a finished run as a workflow. Retained only if the contract admits
   * it, and only if it is shorter than the workflow already trusted.
   */
  learn(run: RunReport): { readonly retained: boolean; readonly reason: string } {
    const text = goalText(run.goal);
    const steps: WorkflowStep[] = run.steps
      .filter(observed => observed.effective)
      .map(observed => ({
        screen: observed.screen,
        step:
          observed.step.action === 'type' && text !== undefined && observed.step.text === text
            ? { ...observed.step, text: '{{text}}' }
            : observed.step,
      }));
    const workflow: SkillWorkflow = { skillId: run.skillId, intent: goalIntent(run.goal), steps };

    this.stats.proposed++;
    // Replaying a workflow that types words the goal never asked for would
    // publish an old post's text under a new request. Typed text must come
    // from the goal, templated or verbatim.
    const foreign = steps.find(({ step }) => step.action === 'type' && step.text !== '{{text}}' && !run.goal.includes(step.text ?? ''));
    if (foreign) {
      this.stats.rejected++;
      return { retained: false, reason: 'types text the goal did not ask for' };
    }

    const candidate: CandidateKnowledge = {
      id: `candidate:workflow:${hashContent(workflow)}`,
      version: '1.0.0',
      type: 'skill-workflow',
      payload: workflow,
      evidence: [run.evidence],
      confidence: 1,
      status: 'candidate',
      metadata: {
        success: run.success,
        invariantViolations: run.invariantViolations,
        harmfulActions: run.harmfulActions,
      },
    };
    const { accepted } = this.validator.validate([candidate]);
    if (!accepted.length) {
      this.stats.rejected++;
      return { retained: false, reason: run.success ? 'broke the contract' : 'did not succeed' };
    }

    if (!steps.length) {
      this.stats.rejected++;
      return { retained: false, reason: 'no effective steps' };
    }
    const slot = key(workflow.skillId, workflow.intent, steps[0].screen);
    const current = this.recall(workflow.skillId, run.goal, steps[0].screen);
    if (current && current.workflow.steps.length <= steps.length) {
      return { retained: false, reason: 'not shorter than the trusted workflow' };
    }

    const node = this.store.put('skill-workflow', workflow, { evidence: run.evidence });
    this.record({
      output: node.id,
      step: { kind: 'learn-skill-workflow', defHash: hashContent({ skill: workflow.skillId, version: this.validator.version }) },
      inputs: [...new Set(steps.map(step => step.screen))],
      at: Date.now(),
    });
    this.invalid.delete(node.id);
    this.active.set(slot, node.id);
    this.stats.retained++;
    return { retained: true, reason: current ? 'shorter than the trusted workflow' : 'first workflow for this intent' };
  }

  /**
   * Check the next step of a workflow against the screen actually showing.
   * A mismatch invalidates every workflow derived from the screen the step
   * was learned on, since that version of the page is gone.
   */
  check(id: Hash, index: number, currentScreen: Hash, goal: string, verifyScreen = true): StepCheck {
    if (this.invalid.has(id)) return { kind: 'invalidated', reason: 'already invalidated', invalidated: 0 };
    const workflow = this.store.get(id)?.content as SkillWorkflow | undefined;
    if (!workflow || index >= workflow.steps.length) return { kind: 'finished' };

    const expected = workflow.steps[index];
    // verifyScreen=false is plain replay, kept only so the benchmark can show
    // what the provenance check prevents.
    if (verifyScreen && expected.screen !== currentScreen) {
      const stale = [...new Set([id, ...this.provenance.affectedBy(expected.screen)])].filter(hash => !this.invalid.has(hash));
      for (const hash of stale) this.invalid.add(hash);
      this.stats.invalidated += stale.length;
      return {
        kind: 'invalidated',
        reason: `step ${index + 1} was learned on a screen that no longer matches`,
        invalidated: stale.length,
      };
    }

    const text = goalText(goal) ?? '';
    const step = expected.step;
    return {
      kind: 'follow',
      step: step.action === 'type' ? { ...step, text: (step.text ?? '').replace('{{text}}', text) } : step,
    };
  }

  getStats(): WorkflowMemoryStats {
    return { ...this.stats };
  }
}

/** Whether a workflow's typed text can be produced for this goal. */
function appliesTo(workflow: SkillWorkflow, goal: string): boolean {
  return workflow.steps.every(({ step }) => {
    if (step.action !== 'type') return true;
    return step.text === '{{text}}' ? goalText(goal) !== undefined : goal.includes(step.text ?? '');
  });
}

function key(skillId: string, intent: string, startScreen: Hash): string {
  return `${skillId}\n${intent}\n${startScreen}`;
}
