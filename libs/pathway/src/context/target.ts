import { ContextIR, ContextNode } from './context-ir.js';

export type ContextTargetKind =
  | 'planner'
  | 'reviewer'
  | 'coder'
  | 'simulation'
  | 'audit'
  | 'memory-update'
  | 'generic';

export interface ContextTarget {
  readonly kind: ContextTargetKind;
  readonly version: string;
  readonly ir: ContextIR;
  readonly nodes: readonly ContextNode[];
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface PlannerContext extends ContextTarget {
  readonly kind: 'planner';
  readonly objectives: readonly string[];
  readonly constraints: readonly ContextNode[];
}

export interface ReviewerContext extends ContextTarget {
  readonly kind: 'reviewer';
}

export interface CoderContext extends ContextTarget {
  readonly kind: 'coder';
}

export interface SimulationContext extends ContextTarget {
  readonly kind: 'simulation';
}

export interface AuditContext extends ContextTarget {
  readonly kind: 'audit';
}

export interface MemoryUpdateContext extends ContextTarget {
  readonly kind: 'memory-update';
}

export type AnyContextTarget =
  | PlannerContext
  | ReviewerContext
  | CoderContext
  | SimulationContext
  | AuditContext
  | MemoryUpdateContext
  | ContextTarget;
