import { CandidateKnowledge } from './learning-engine.js';

export interface ValidationPolicy {
  readonly name: string;
  readonly version: string;
  readonly minConfidence: number;
}

export interface ValidationResult {
  readonly accepted: readonly CandidateKnowledge[];
  readonly rejected: readonly CandidateKnowledge[];
}

export interface ValidationEngine {
  readonly name: string;
  readonly version: string;
  validate(candidates: readonly CandidateKnowledge[]): ValidationResult;
}

export class ConfidenceValidationEngine implements ValidationEngine {
  readonly name = 'confidence-validation-engine';
  readonly version = '1.0.0';

  constructor(private readonly policy: ValidationPolicy = {
    name: 'default-confidence-policy',
    version: '1.0.0',
    minConfidence: 0.8,
  }) {}

  validate(candidates: readonly CandidateKnowledge[]): ValidationResult {
    const accepted: CandidateKnowledge[] = [];
    const rejected: CandidateKnowledge[] = [];

    for (const candidate of candidates) {
      const next: CandidateKnowledge = {
        ...candidate,
        status:
          candidate.confidence >= this.policy.minConfidence && candidate.evidence.length > 0
            ? 'validated'
            : 'rejected',
      };
      if (next.status === 'validated') {
        accepted.push(next);
      } else {
        rejected.push(next);
      }
    }

    return { accepted, rejected };
  }
}
