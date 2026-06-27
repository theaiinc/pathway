import { ContextTarget } from '../context/target.js';
import { ExecutionPlan } from '../execution/plan.js';

export interface Planner<TContextTarget extends ContextTarget = ContextTarget> {
  readonly name: string;
  readonly version: string;
  plan(context: TContextTarget): Promise<ExecutionPlan> | ExecutionPlan;
}
