import { ContextIR } from './context-ir.js';
import { ContextDiagnostic, OptimizationProvenance } from './diagnostics.js';
import { ContextTarget } from './target.js';

export interface EmitResult<TContextTarget extends ContextTarget = ContextTarget> {
  readonly target: TContextTarget;
  readonly diagnostics: readonly ContextDiagnostic[];
  readonly provenance: readonly OptimizationProvenance[];
}

export interface Emitter<TContextTarget extends ContextTarget = ContextTarget> {
  readonly name: string;
  readonly version: string;
  readonly targetKind: TContextTarget['kind'];
  emit(ir: ContextIR): Promise<EmitResult<TContextTarget>> | EmitResult<TContextTarget>;
}
