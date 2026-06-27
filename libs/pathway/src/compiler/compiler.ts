import { ContextIR } from '../context/context-ir.js';
import { ContextDiagnostic, OptimizationProvenance } from '../context/diagnostics.js';
import { Emitter, EmitResult } from '../context/emitter.js';
import { ContextTarget } from '../context/target.js';
import { validateContextIR } from '../context/validate-ir.js';
import { ContextPass } from './pass.js';
import { PassPlanner } from './pass-planner.js';

export interface CompilerEventSink {
  emit(event: string, payload: Readonly<Record<string, unknown>>): void;
}

export interface CompileOptions {
  readonly validate?: boolean;
  readonly allowDegradedOutput?: boolean;
  readonly eventSink?: CompilerEventSink;
}

export interface CompileResult<TContextTarget extends ContextTarget = ContextTarget> {
  readonly ir: ContextIR;
  readonly output: TContextTarget;
  readonly diagnostics: readonly ContextDiagnostic[];
  readonly provenance: readonly OptimizationProvenance[];
}

export class ContextCompiler {
  constructor(
    private readonly passes: readonly ContextPass[],
    private readonly planner = new PassPlanner()
  ) {}

  async compile<TContextTarget extends ContextTarget>(
    input: ContextIR,
    emitter: Emitter<TContextTarget>,
    options: CompileOptions = {}
  ): Promise<CompileResult<TContextTarget>> {
    const validate = options.validate ?? true;
    const diagnostics: ContextDiagnostic[] = [];
    const provenance: OptimizationProvenance[] = [];
    let ir = input;
    const planned = this.planner.plan(this.passes);

    for (const pass of planned.passes) {
      if (validate) {
        const before = validateContextIR(ir);
        diagnostics.push(...before.diagnostics);
        if (!before.valid && !options.allowDegradedOutput) {
          throw new Error(`ContextIR invalid before pass ${pass.name}`);
        }
      }

      options.eventSink?.emit('PassStarted', { pass: pass.name, version: pass.version });
      const result = await pass.run(ir);
      ir = result.ir;
      diagnostics.push(...result.diagnostics);
      provenance.push(...result.provenance);
      options.eventSink?.emit('PassCompleted', {
        pass: pass.name,
        version: pass.version,
        metrics: result.metrics,
      });

      if (validate) {
        const after = validateContextIR(ir);
        diagnostics.push(...after.diagnostics);
        if (!after.valid && !options.allowDegradedOutput) {
          throw new Error(`ContextIR invalid after pass ${pass.name}`);
        }
      }
    }

    const emitted: EmitResult<TContextTarget> = await emitter.emit(ir);
    diagnostics.push(...emitted.diagnostics);
    provenance.push(...emitted.provenance);
    options.eventSink?.emit('EmissionCompleted', {
      emitter: emitter.name,
      version: emitter.version,
      targetKind: emitter.targetKind,
    });

    return {
      ir,
      output: emitted.target,
      diagnostics,
      provenance,
    };
  }
}
