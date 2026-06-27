import { ContextIR, ContextSnapshot } from '../context/context-ir.js';
import { ContextObjective, CostModel, combineCosts } from '../context/objective.js';
import { KnowledgeGraph } from '../knowledge/knowledge-graph.js';
import { ContextSelectionRequest, ContextSelector } from './context-selector.js';

export interface BuildIRInput {
  readonly snapshot: ContextSnapshot;
  readonly compilerVersion: string;
  readonly passSetVersion: string;
  readonly costModel: CostModel;
  readonly emitterVersion: string;
  readonly objective: ContextObjective;
  readonly target: string;
}

export class SelectionEngine {
  constructor(private readonly selector: ContextSelector) {}

  select(request: ContextSelectionRequest, graph: KnowledgeGraph): ContextSnapshot {
    return this.selector.select(request, graph);
  }

  buildIR(input: BuildIRInput): ContextIR {
    const costs = input.snapshot.nodes.map(node => input.costModel.estimate(node));
    const combined = combineCosts(costs);

    return {
      id: `${input.snapshot.id}:ir`,
      version: '1.0.0',
      snapshotVersion: input.snapshot.version,
      compilerVersion: input.compilerVersion,
      passSetVersion: input.passSetVersion,
      costModelVersion: input.costModel.version,
      emitterVersion: input.emitterVersion,
      objectiveVersion: input.objective.version,
      target: input.target,
      nodes: input.snapshot.nodes,
      edges: input.snapshot.edges,
      tokenCost: combined.tokens,
      objective: input.objective,
      metadata: {
        selectorVersion: input.snapshot.selectorVersion,
        unknownCost: combined.unknown,
      },
    };
  }
}
