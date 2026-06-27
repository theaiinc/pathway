import { ContextNode } from './context-ir.js';

export interface ContextCost {
  readonly tokens: number;
  readonly latencyMs: number;
  readonly dollars: number;
  readonly confidence: number;
  readonly memoryBytes: number;
  readonly roundTrips: number;
  readonly unknown: boolean;
}

export interface ContextObjective {
  readonly version: string;
  readonly maxTokens?: number;
  readonly maxLatencyMs?: number;
  readonly maxDollars?: number;
  readonly minConfidence?: number;
  readonly maxMemoryBytes?: number;
  readonly maxRoundTrips?: number;
  readonly prioritize?: readonly string[];
}

export interface CostModel {
  readonly name: string;
  readonly version: string;
  estimate(node: ContextNode): ContextCost;
}

export const zeroCost: ContextCost = {
  tokens: 0,
  latencyMs: 0,
  dollars: 0,
  confidence: 1,
  memoryBytes: 0,
  roundTrips: 0,
  unknown: false,
};

export function combineCosts(costs: readonly ContextCost[]): ContextCost {
  if (costs.length === 0) return zeroCost;

  return costs.reduce<ContextCost>(
    (acc, cost) => ({
      tokens: acc.tokens + cost.tokens,
      latencyMs: acc.latencyMs + cost.latencyMs,
      dollars: acc.dollars + cost.dollars,
      confidence: Math.min(acc.confidence, cost.confidence),
      memoryBytes: acc.memoryBytes + cost.memoryBytes,
      roundTrips: acc.roundTrips + cost.roundTrips,
      unknown: acc.unknown || cost.unknown,
    }),
    { ...zeroCost }
  );
}

export class DefaultCostModel implements CostModel {
  readonly name = 'default-cost-model';
  readonly version = '1.0.0';

  estimate(node: ContextNode): ContextCost {
    const cost = node.cost;
    if (!cost) {
      return { ...zeroCost, unknown: true };
    }

    return {
      tokens: cost.tokens || 0,
      latencyMs: cost.latencyMs || 0,
      dollars: cost.dollars || 0,
      confidence: cost.confidence ?? node.confidence ?? 1,
      memoryBytes: cost.memoryBytes || 0,
      roundTrips: cost.roundTrips || 0,
      unknown: cost.unknown || false,
    };
  }
}
