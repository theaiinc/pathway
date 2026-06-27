import { ContextSnapshot } from '../context/context-ir.js';
import { ContextObjective } from '../context/objective.js';
import { KnowledgeGraph } from '../knowledge/knowledge-graph.js';

export interface ContextSelectionRequest {
  readonly id: string;
  readonly target: string;
  readonly objective: ContextObjective;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface ContextSelector {
  readonly name: string;
  readonly version: string;
  select(request: ContextSelectionRequest, graph: KnowledgeGraph): ContextSnapshot;
}
