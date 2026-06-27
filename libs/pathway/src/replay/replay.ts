import { AnyContextTarget } from '../context/target.js';
import { ExecutionPlan } from '../execution/plan.js';
import { ExecutionTrace } from '../execution/trace.js';

export interface ReplayRecord {
  readonly id: string;
  readonly knowledgeSnapshotVersion: string;
  readonly objectiveVersion: string;
  readonly selectorVersion: string;
  readonly compilerVersion: string;
  readonly passSetVersion: string;
  readonly costModelVersion: string;
  readonly emitterVersion: string;
  readonly plannerVersion: string;
  readonly validationPolicyVersion: string;
  readonly adapterMetadata: Readonly<Record<string, unknown>>;
  readonly context: AnyContextTarget;
  readonly plan: ExecutionPlan;
  readonly trace: ExecutionTrace;
}

export interface ReplayEngine {
  readonly name: string;
  readonly version: string;
  replay(record: ReplayRecord): Promise<ReplayRecord> | ReplayRecord;
}

export class IdentityReplayEngine implements ReplayEngine {
  readonly name = 'identity-replay-engine';
  readonly version = '1.0.0';

  replay(record: ReplayRecord): ReplayRecord {
    return record;
  }
}
