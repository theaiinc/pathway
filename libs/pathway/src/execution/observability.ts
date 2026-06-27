import { RuntimeEvent } from './event-bus.js';
import { ContextDiagnostic, OptimizationProvenance } from '../context/diagnostics.js';

export interface ObservabilityRecord {
  readonly events: readonly RuntimeEvent[];
  readonly diagnostics: readonly ContextDiagnostic[];
  readonly provenance: readonly OptimizationProvenance[];
}

export class ObservabilitySink {
  private readonly events: RuntimeEvent[] = [];
  private readonly diagnostics: ContextDiagnostic[] = [];
  private readonly provenance: OptimizationProvenance[] = [];

  recordEvent(event: RuntimeEvent): void {
    this.events.push(event);
  }

  recordDiagnostics(diagnostics: readonly ContextDiagnostic[]): void {
    this.diagnostics.push(...diagnostics);
  }

  recordProvenance(provenance: readonly OptimizationProvenance[]): void {
    this.provenance.push(...provenance);
  }

  snapshot(): ObservabilityRecord {
    return {
      events: [...this.events],
      diagnostics: [...this.diagnostics],
      provenance: [...this.provenance],
    };
  }
}
