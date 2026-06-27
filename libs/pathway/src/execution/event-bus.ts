export type RuntimeEventName =
  | 'ContextSelected'
  | 'PassStarted'
  | 'PassCompleted'
  | 'BudgetExceeded'
  | 'NodeDropped'
  | 'NodeMerged'
  | 'EmissionCompleted'
  | 'WorkflowGenerated'
  | 'WorkflowGenerationFailed'
  | 'ExecutionCacheHit'
  | 'ExecutionCacheMiss'
  | 'SimulationStarted'
  | 'SimulationCompleted'
  | 'ExecutionStarted'
  | 'ExecutionCompleted'
  | 'AuditStarted'
  | 'AuditCompleted'
  | 'FindingProduced'
  | 'CompilerFeedbackProduced'
  | 'ReplayStarted';

export interface RuntimeEvent {
  readonly id: string;
  readonly name: RuntimeEventName | string;
  readonly at: number;
  readonly payload: Readonly<Record<string, unknown>>;
}

export type RuntimeEventHandler = (event: RuntimeEvent) => void;

export class EventBus {
  private readonly handlers = new Map<string, Set<RuntimeEventHandler>>();
  private sequence = 0;

  on(name: RuntimeEventName | string, handler: RuntimeEventHandler): () => void {
    const handlers = this.handlers.get(name) || new Set<RuntimeEventHandler>();
    handlers.add(handler);
    this.handlers.set(name, handlers);
    return () => handlers.delete(handler);
  }

  emit(name: RuntimeEventName | string, payload: Readonly<Record<string, unknown>> = {}): RuntimeEvent {
    const event: RuntimeEvent = {
      id: `${name}:${this.sequence++}`,
      name,
      at: Date.now(),
      payload,
    };

    for (const handler of this.handlers.get(name) || []) {
      handler(event);
    }
    for (const handler of this.handlers.get('*') || []) {
      handler(event);
    }
    return event;
  }
}
