import { ContextIR } from '../../context/context-ir.js';
import { EmitResult, Emitter } from '../../context/emitter.js';
import { PlannerContext } from '../../context/target.js';

export class PlannerContextEmitter implements Emitter<PlannerContext> {
  readonly name = 'planner-context-emitter';
  readonly version = '1.0.0';
  readonly targetKind = 'planner' as const;

  emit(ir: ContextIR): EmitResult<PlannerContext> {
    const constraints = ir.nodes.filter(node => node.type === 'constraint');
    const objectives = readObjectives(ir.objective);

    return {
      target: {
        kind: 'planner',
        version: this.version,
        ir,
        nodes: ir.nodes,
        objectives,
        constraints,
      },
      diagnostics: [],
      provenance: [
        {
          pass: this.name,
          action: 'emitted',
          inputNodeIds: ir.nodes.map(node => node.id),
          outputNodeIds: [],
          reason: 'Emitted typed PlannerContext from optimized ContextIR.',
        },
      ],
    };
  }
}

function readObjectives(objective: unknown): string[] {
  if (
    objective &&
    typeof objective === 'object' &&
    'prioritize' in objective &&
    Array.isArray((objective as { prioritize?: unknown }).prioritize)
  ) {
    return ((objective as { prioritize: unknown[] }).prioritize || []).map(String);
  }
  return [];
}
