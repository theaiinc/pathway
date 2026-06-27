export type ContextNodeId = string;
export type ContextEdgeId = string;
export type Fingerprint = string;
export type Version = string;

export interface ContextNodeCost {
  readonly tokens?: number;
  readonly latencyMs?: number;
  readonly dollars?: number;
  readonly confidence?: number;
  readonly memoryBytes?: number;
  readonly roundTrips?: number;
  readonly unknown?: boolean;
}

export interface ContextNode {
  readonly id: ContextNodeId;
  readonly fingerprint: Fingerprint;
  readonly source: string;
  readonly version: Version;
  readonly type: string;
  readonly payload: unknown;
  readonly parents?: readonly ContextNodeId[];
  readonly evidence?: readonly ContextNodeId[];
  readonly importance?: number;
  readonly confidence?: number;
  readonly cost?: ContextNodeCost;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface ContextEdge {
  readonly id: ContextEdgeId;
  readonly source: ContextNodeId;
  readonly target: ContextNodeId;
  readonly type: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface ContextSnapshot {
  readonly id: string;
  readonly version: Version;
  readonly createdAt: number;
  readonly selectorVersion: Version;
  readonly nodes: readonly ContextNode[];
  readonly edges: readonly ContextEdge[];
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface ContextIR {
  readonly id: string;
  readonly version: Version;
  readonly snapshotVersion: Version;
  readonly compilerVersion: Version;
  readonly passSetVersion: Version;
  readonly costModelVersion: Version;
  readonly emitterVersion: Version;
  readonly objectiveVersion: Version;
  readonly target: string;
  readonly nodes: readonly ContextNode[];
  readonly edges: readonly ContextEdge[];
  readonly tokenCost: number;
  readonly objective: unknown;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export function withContextNodeVersion(
  node: ContextNode,
  nextVersion: Version,
  payload: unknown,
  fingerprint: Fingerprint,
  metadata?: Readonly<Record<string, unknown>>
): ContextNode {
  return {
    ...node,
    version: nextVersion,
    payload,
    fingerprint,
    parents: [...(node.parents || []), node.id],
    metadata: { ...(node.metadata || {}), ...(metadata || {}) },
  };
}
