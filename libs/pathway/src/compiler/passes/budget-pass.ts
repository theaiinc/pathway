import { ContextEdge, ContextIR, ContextNode } from '../../context/context-ir.js';
import { info, OptimizationProvenance, PassResult } from '../../context/diagnostics.js';
import { combineCosts, ContextObjective, CostModel } from '../../context/objective.js';
import { ContextPass } from '../pass.js';

export class BudgetPass implements ContextPass {
  readonly name = 'budget';
  readonly version = '1.0.0';
  readonly kind = 'optimization' as const;
  readonly dependencies = ['identity-analysis'] as const;
  readonly preserves = ['semantics', 'identity'] as const;
  readonly invalidates = ['ordering', 'cost'] as const;

  constructor(
    private readonly costModel: CostModel,
    private readonly objective: ContextObjective
  ) {}

  run(ir: ContextIR): PassResult<ContextIR> {
    const maxTokens = this.objective.maxTokens;
    if (!maxTokens) {
      return {
        ir,
        diagnostics: [info('BUDGET_SKIPPED', 'BudgetPass skipped because maxTokens is not set.')],
        metrics: {
          inputNodes: ir.nodes.length,
          outputNodes: ir.nodes.length,
          inputTokens: ir.tokenCost,
          outputTokens: ir.tokenCost,
        },
        provenance: [],
      };
    }

    const kept: ContextNode[] = [];
    const dropped: ContextNode[] = [];
    let runningTokens = 0;

    for (const node of [...ir.nodes].sort(compareNodes)) {
      const cost = this.costModel.estimate(node);
      if (runningTokens + cost.tokens <= maxTokens) {
        kept.push(node);
        runningTokens += cost.tokens;
      } else {
        dropped.push(node);
      }
    }

    const keptIds = new Set(kept.map(node => node.id));
    const edges: ContextEdge[] = ir.edges.filter(
      edge => keptIds.has(edge.source) && keptIds.has(edge.target)
    );
    const outputTokens = combineCosts(kept.map(node => this.costModel.estimate(node))).tokens;
    const provenance: OptimizationProvenance[] =
      dropped.length === 0
        ? []
        : [
            {
              pass: this.name,
              action: 'dropped',
              inputNodeIds: dropped.map(node => node.id),
              outputNodeIds: kept.map(node => node.id),
              reason: `Dropped nodes to satisfy maxTokens=${maxTokens}.`,
              savedCost: { tokens: ir.tokenCost - outputTokens },
            },
          ];

    return {
      ir: {
        ...ir,
        nodes: kept,
        edges,
        tokenCost: outputTokens,
        costModelVersion: this.costModel.version,
        objective: this.objective,
        objectiveVersion: this.objective.version,
      },
      diagnostics: [
        info('BUDGET_APPLIED', `BudgetPass kept ${kept.length} nodes and dropped ${dropped.length}.`),
      ],
      metrics: {
        inputNodes: ir.nodes.length,
        outputNodes: kept.length,
        inputTokens: ir.tokenCost,
        outputTokens,
      },
      provenance,
    };
  }
}

function compareNodes(a: ContextNode, b: ContextNode): number {
  const importance = (b.importance || 0) - (a.importance || 0);
  if (importance !== 0) return importance;
  return a.id.localeCompare(b.id);
}
