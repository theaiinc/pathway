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
import { ProvenanceGraph } from '../provenance/provenance-graph.js';

export type WorkflowStepAction =
  | { readonly action: 'click'; readonly target: string }
  | { readonly action: 'type'; readonly text: string }
  | { readonly action: 'clear' }
  | { readonly action: 'wait' }
  | { readonly action: 'done' };

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

export function goalIntent(goal: string): string {
  return goal.replace(QUOTED, '"{{text}}"').trim();
}

function goalText(goal: string): string | undefined {
  return goal.match(QUOTED)?.[1];
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

export class SkillWorkflowMemory {
  private readonly store = new NodeStore();
  private readonly provenance = new ProvenanceGraph();
  /** `${skillId}\n${intent}\n${startScreen}` -> the workflow node currently trusted for it. */
  private readonly active = new Map<string, Hash>();
  private readonly invalid = new Set<Hash>();
  private stats = { proposed: 0, retained: 0, rejected: 0, invalidated: 0 };

  constructor(private readonly validator: ValidationEngine = new ContractValidationEngine()) {}

  /**
   * The trusted workflow for this skill and goal that starts on the current
   * screen, if one has been learned and not invalidated.
   */
  recall(skillId: string, goal: string, startScreen: Hash): { readonly id: Hash; readonly workflow: SkillWorkflow } | null {
    const id = this.active.get(key(skillId, goalIntent(goal), startScreen));
    if (!id || this.invalid.has(id)) return null;
    return { id, workflow: this.store.get(id)!.content as SkillWorkflow };
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
            ? { action: 'type', text: '{{text}}' }
            : observed.step,
      }));
    const workflow: SkillWorkflow = { skillId: run.skillId, intent: goalIntent(run.goal), steps };

    this.stats.proposed++;
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
    this.provenance.recordDerivation({
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
      step: step.action === 'type' ? { action: 'type', text: step.text.replace('{{text}}', text) } : step,
    };
  }

  getStats(): WorkflowMemoryStats {
    return { ...this.stats };
  }
}

function key(skillId: string, intent: string, startScreen: Hash): string {
  return `${skillId}\n${intent}\n${startScreen}`;
}
