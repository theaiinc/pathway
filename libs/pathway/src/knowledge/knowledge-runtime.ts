import { ContextRequest, ContextProvider } from '../context/provider.js';
import { KnowledgeGraph } from './knowledge-graph.js';

export class KnowledgeRuntime {
  private readonly providers: ContextProvider[] = [];

  constructor(readonly graph = new KnowledgeGraph()) {}

  registerProvider(provider: ContextProvider): void {
    this.providers.push(provider);
  }

  async collect(request: ContextRequest): Promise<void> {
    for (const provider of [...this.providers].sort((a, b) => a.name.localeCompare(b.name))) {
      const result = await provider.collect(request);
      for (const node of result.nodes) {
        if (!this.graph.getNode(node.id)) {
          this.graph.addNode(node);
        }
      }
      for (const edge of result.edges) {
        this.graph.addEdge(edge);
      }
    }
  }
}
