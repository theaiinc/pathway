import { ContextDiagnostic } from '../context/diagnostics.js';
import { ContextTarget } from '../context/target.js';
import { ExecutionTrace } from '../execution/trace.js';

export type AuditFindingSeverity = 'info' | 'warning' | 'error';

export interface AuditFinding {
  readonly id: string;
  readonly severity: AuditFindingSeverity;
  readonly type: string;
  readonly recommendation?: string;
  readonly evidenceTraceId: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface CompilerFeedback {
  readonly pass: string;
  readonly outcome: 'success' | 'failure';
  readonly usefulness: number;
  readonly recommendation: string;
  readonly evidenceTraceId: string;
}

export interface AuditReport {
  readonly id: string;
  readonly traceId: string;
  readonly findings: readonly AuditFinding[];
  readonly compilerFeedback: readonly CompilerFeedback[];
  readonly diagnostics: readonly ContextDiagnostic[];
}

export interface Auditor<TContextTarget extends ContextTarget = ContextTarget> {
  readonly name: string;
  readonly version: string;
  audit(trace: ExecutionTrace, context: TContextTarget): Promise<AuditReport> | AuditReport;
}
