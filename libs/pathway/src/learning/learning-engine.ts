import { AuditFinding, CompilerFeedback } from '../audit/auditor.js';

export interface CandidateKnowledge {
  readonly id: string;
  readonly version: string;
  readonly type: string;
  readonly payload: unknown;
  readonly evidence: readonly string[];
  readonly confidence: number;
  readonly status: 'candidate' | 'validated' | 'rejected';
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface LearningEngine {
  readonly name: string;
  readonly version: string;
  propose(
    findings: readonly AuditFinding[],
    feedback: readonly CompilerFeedback[]
  ): readonly CandidateKnowledge[];
}

export class BasicLearningEngine implements LearningEngine {
  readonly name = 'basic-learning-engine';
  readonly version = '1.0.0';

  propose(
    findings: readonly AuditFinding[],
    feedback: readonly CompilerFeedback[]
  ): readonly CandidateKnowledge[] {
    const fromFindings = findings.map((finding, index) => ({
      id: `candidate:finding:${finding.id}`,
      version: '1.0.0',
      type: finding.type,
      payload: finding,
      evidence: [finding.evidenceTraceId],
      confidence: finding.severity === 'error' ? 0.9 : 0.7,
      status: 'candidate' as const,
      metadata: { index },
    }));

    const fromFeedback = feedback.map((item, index) => ({
      id: `candidate:compiler-feedback:${item.pass}:${index}`,
      version: '1.0.0',
      type: 'compiler-feedback',
      payload: item,
      evidence: [item.evidenceTraceId],
      confidence: Math.max(0, Math.min(1, item.usefulness)),
      status: 'candidate' as const,
      metadata: { index },
    }));

    return [...fromFindings, ...fromFeedback];
  }
}
