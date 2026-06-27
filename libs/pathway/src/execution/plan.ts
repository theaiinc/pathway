import { ContextNodeId } from '../context/context-ir.js';

export interface PlanStep {
  readonly id: string;
  readonly type: string;
  readonly description: string;
  readonly dependsOn?: readonly string[];
  readonly contextNodeIds?: readonly ContextNodeId[];
  readonly parameters?: Readonly<Record<string, unknown>>;
}

export interface ExecutionPlan {
  readonly id: string;
  readonly version: string;
  readonly plannerVersion: string;
  readonly contextTargetId: string;
  readonly steps: readonly PlanStep[];
  readonly metadata?: Readonly<Record<string, unknown>>;
}
