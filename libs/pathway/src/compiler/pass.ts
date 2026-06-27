import { ContextIR } from '../context/context-ir.js';
import { PassResult } from '../context/diagnostics.js';

export type ContextInvariant =
  | 'semantics'
  | 'dependencies'
  | 'identity'
  | 'ordering'
  | 'formatting'
  | 'cost';

export type ContextPassKind = 'analysis' | 'transform' | 'optimization' | 'emission';

export interface ContextPass {
  readonly name: string;
  readonly version: string;
  readonly kind: ContextPassKind;
  readonly dependencies: readonly string[];
  readonly preserves: readonly ContextInvariant[];
  readonly invalidates: readonly ContextInvariant[];
  run(ir: ContextIR): Promise<PassResult<ContextIR>> | PassResult<ContextIR>;
}

export function passId(pass: Pick<ContextPass, 'name' | 'version'>): string {
  return `${pass.name}@${pass.version}`;
}
