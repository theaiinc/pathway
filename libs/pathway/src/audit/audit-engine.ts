import { ContextTarget } from '../context/target.js';
import { ExecutionTrace } from '../execution/trace.js';
import { AuditFinding, AuditReport, Auditor, CompilerFeedback } from './auditor.js';

export interface AuditEngine<TContextTarget extends ContextTarget = ContextTarget> {
  readonly name: string;
  readonly version: string;
  audit(trace: ExecutionTrace, context: TContextTarget): Promise<AuditReport> | AuditReport;
}

export class PipelineAuditEngine<TContextTarget extends ContextTarget = ContextTarget>
  implements AuditEngine<TContextTarget>
{
  readonly name = 'pipeline-audit-engine';
  readonly version = '1.0.0';

  constructor(private readonly auditors: readonly Auditor<TContextTarget>[]) {}

  async audit(trace: ExecutionTrace, context: TContextTarget): Promise<AuditReport> {
    const findings: AuditFinding[] = [];
    const compilerFeedback: CompilerFeedback[] = [];

    for (const auditor of this.auditors) {
      const report = await auditor.audit(trace, context);
      findings.push(...report.findings);
      compilerFeedback.push(...report.compilerFeedback);
    }

    return {
      id: `audit:${trace.id}`,
      traceId: trace.id,
      findings,
      compilerFeedback,
      diagnostics: [],
    };
  }
}
