import { ContextTarget } from '../context/target.js';
import { ExecutionPlan } from '../execution/plan.js';
import { emptyExecutionTrace, ExecutionTrace } from '../execution/trace.js';

export interface SimulationEngine<TContextTarget extends ContextTarget = ContextTarget> {
  readonly name: string;
  readonly version: string;
  simulate(plan: ExecutionPlan, context: TContextTarget): Promise<ExecutionTrace> | ExecutionTrace;
}

export class NoopSimulationEngine<TContextTarget extends ContextTarget = ContextTarget>
  implements SimulationEngine<TContextTarget>
{
  readonly name = 'noop-simulation-engine';
  readonly version = '1.0.0';

  simulate(plan: ExecutionPlan, context: TContextTarget): ExecutionTrace {
    return {
      ...emptyExecutionTrace(`simulation:${plan.id}`),
      planId: plan.id,
      contextTargetId: context.ir.id,
      events: [
        {
          id: `simulation:${plan.id}:completed`,
          type: 'simulation-completed',
          at: Date.now(),
          metadata: { stepCount: plan.steps.length },
        },
      ],
    };
  }
}
