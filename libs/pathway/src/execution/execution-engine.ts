import { ContextTarget } from '../context/target.js';
import { ExecutionPlan } from './plan.js';
import { emptyExecutionTrace, ExecutionTrace } from './trace.js';

export interface ExecutionEngine<TContextTarget extends ContextTarget = ContextTarget> {
  readonly name: string;
  readonly version: string;
  execute(plan: ExecutionPlan, context: TContextTarget): Promise<ExecutionTrace> | ExecutionTrace;
}

export class NoopExecutionEngine<TContextTarget extends ContextTarget = ContextTarget>
  implements ExecutionEngine<TContextTarget>
{
  readonly name = 'noop-execution-engine';
  readonly version = '1.0.0';

  execute(plan: ExecutionPlan, context: TContextTarget): ExecutionTrace {
    return {
      ...emptyExecutionTrace(`execution:${plan.id}`),
      planId: plan.id,
      contextTargetId: context.ir.id,
      events: [
        {
          id: `execution:${plan.id}:completed`,
          type: 'execution-completed',
          at: Date.now(),
          metadata: { stepCount: plan.steps.length },
        },
      ],
    };
  }
}
