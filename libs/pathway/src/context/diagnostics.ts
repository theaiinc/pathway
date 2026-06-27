import { ContextNodeId } from './context-ir.js';

export type DiagnosticLevel = 'info' | 'warning' | 'error';

export interface ContextDiagnostic {
  readonly level: DiagnosticLevel;
  readonly code: string;
  readonly message: string;
  readonly nodeIds?: readonly ContextNodeId[];
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface PassMetrics {
  readonly inputNodes: number;
  readonly outputNodes: number;
  readonly inputTokens?: number;
  readonly outputTokens?: number;
  readonly latencyMs?: number;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface OptimizationProvenance {
  readonly pass: string;
  readonly action:
    | 'analyzed'
    | 'created'
    | 'dropped'
    | 'merged'
    | 'reduced'
    | 'reordered'
    | 'emitted';
  readonly inputNodeIds: readonly ContextNodeId[];
  readonly outputNodeIds: readonly ContextNodeId[];
  readonly reason: string;
  readonly savedCost?: Readonly<Record<string, number>>;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface PassResult<TOutput = unknown> {
  readonly ir: TOutput;
  readonly diagnostics: readonly ContextDiagnostic[];
  readonly metrics: PassMetrics;
  readonly provenance: readonly OptimizationProvenance[];
}

export function info(
  code: string,
  message: string,
  metadata?: Readonly<Record<string, unknown>>
): ContextDiagnostic {
  return { level: 'info', code, message, metadata };
}

export function error(
  code: string,
  message: string,
  metadata?: Readonly<Record<string, unknown>>
): ContextDiagnostic {
  return { level: 'error', code, message, metadata };
}
