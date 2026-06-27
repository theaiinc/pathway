import { ContextEdge, ContextNode } from './context-ir.js';

export interface ContextRequest {
  readonly objective: unknown;
  readonly target: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface ProviderResult {
  readonly provider: string;
  readonly version: string;
  readonly nodes: readonly ContextNode[];
  readonly edges: readonly ContextEdge[];
  readonly metadata?: Readonly<Record<string, unknown>>;
}

export interface ContextProvider {
  readonly name: string;
  readonly version: string;
  collect(request: ContextRequest): Promise<ProviderResult> | ProviderResult;
}
