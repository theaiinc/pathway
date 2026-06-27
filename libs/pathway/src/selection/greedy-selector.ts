import { ContextSnapshot } from '../context/context-ir.js';
import { ContextSelectionRequest, ContextSelector } from './context-selector.js';
import { KnowledgeGraph } from '../knowledge/knowledge-graph.js';

export class GreedySelector implements ContextSelector {
  readonly name = 'greedy-selector';
  readonly version = '1.0.0';

  select(request: ContextSelectionRequest, graph: KnowledgeGraph): ContextSnapshot {
    return graph.snapshot(request.id, this.version, {
      target: request.target,
      objectiveVersion: request.objective.version,
    });
  }
}
