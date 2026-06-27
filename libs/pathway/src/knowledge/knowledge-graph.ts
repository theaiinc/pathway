import { ContextEdge, ContextNode, ContextSnapshot } from '../context/context-ir.js';

export class KnowledgeGraph {
  private readonly nodes = new Map<string, ContextNode>();
  private readonly edges = new Map<string, ContextEdge>();

  addNode(node: ContextNode): void {
    if (this.nodes.has(node.id)) {
      throw new Error(`Knowledge node already exists: ${node.id}`);
    }
    this.nodes.set(node.id, node);
  }

  addEdge(edge: ContextEdge): void {
    if (!this.nodes.has(edge.source) || !this.nodes.has(edge.target)) {
      throw new Error(`Knowledge edge references missing nodes: ${edge.id}`);
    }
    if (this.edges.has(edge.id)) {
      throw new Error(`Knowledge edge already exists: ${edge.id}`);
    }
    this.edges.set(edge.id, edge);
  }

  getNode(id: string): ContextNode | undefined {
    return this.nodes.get(id);
  }

  allNodes(): ContextNode[] {
    return Array.from(this.nodes.values()).sort((a, b) => a.id.localeCompare(b.id));
  }

  allEdges(): ContextEdge[] {
    return Array.from(this.edges.values()).sort((a, b) => a.id.localeCompare(b.id));
  }

  snapshot(id: string, selectorVersion: string, metadata?: Readonly<Record<string, unknown>>): ContextSnapshot {
    return {
      id,
      version: `${this.nodes.size}:${this.edges.size}`,
      createdAt: Date.now(),
      selectorVersion,
      nodes: this.allNodes(),
      edges: this.allEdges(),
      metadata,
    };
  }
}
