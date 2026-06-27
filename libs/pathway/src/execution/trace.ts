import { ContextDiagnostic } from '../context/diagnostics.js';

export type ExecutionEventType =
  | 'simulation-started'
  | 'simulation-completed'
  | 'execution-started'
  | 'execution-completed'
  | 'tool-called'
  | 'llm-called'
  | 'artifact-produced'
  | 'diagnostic-produced';

export interface ExecutionEvent {
  readonly id: string;
  readonly type: ExecutionEventType;
  readonly at: number;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface StateTransition {
  readonly id: string;
  readonly from: string;
  readonly to: string;
  readonly at: number;
  readonly reason?: string;
}

export interface ToolInvocation {
  readonly id: string;
  readonly tool: string;
  readonly input: unknown;
  readonly output?: unknown;
  readonly error?: string;
  readonly startedAt: number;
  readonly completedAt?: number;
}

export interface LLMInvocation {
  readonly id: string;
  readonly provider: string;
  readonly model: string;
  readonly input: unknown;
  readonly output?: unknown;
  readonly startedAt: number;
  readonly completedAt?: number;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface Artifact {
  readonly id: string;
  readonly type: string;
  readonly uri?: string;
  readonly content?: unknown;
  readonly fingerprint?: string;
}

export interface ExecutionTrace {
  readonly id: string;
  readonly version: string;
  readonly planId?: string;
  readonly contextTargetId?: string;
  readonly events: readonly ExecutionEvent[];
  readonly stateTransitions: readonly StateTransition[];
  readonly toolCalls: readonly ToolInvocation[];
  readonly llmCalls: readonly LLMInvocation[];
  readonly artifacts: readonly Artifact[];
  readonly diagnostics: readonly ContextDiagnostic[];
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export function emptyExecutionTrace(id: string, version = '1.0.0'): ExecutionTrace {
  return {
    id,
    version,
    events: [],
    stateTransitions: [],
    toolCalls: [],
    llmCalls: [],
    artifacts: [],
    diagnostics: [],
  };
}
