import { VectorStore } from './vector-store.js';
import { GraphStore, IntentNode } from './graph-store.js';

export class PathwayManager {
  private vectorStore: VectorStore;
  private graphStore: GraphStore;

  constructor(vectorStore: VectorStore, graphStore: GraphStore) {
    this.vectorStore = vectorStore;
    this.graphStore = graphStore;
  }

  /**
   * Finds the most similar workflow for a given query.
   * This implements the "Retrieve" phase of the CBR cycle.
   * @param queryText The new problem or query.
   * @returns The workflow graph of the most similar past solution, or null if no suitable match is found.
   */
  async findSimilarWorkflow(queryText: string): Promise<any | null> {
    console.log(`\n[Manager] Retrieving similar workflow for: "${queryText}"`);

    const searchResults = await this.vectorStore.searchSimilarIntentions(
      queryText,
      1
    );

    if (!searchResults.ids || searchResults.ids[0].length === 0) {
      console.log('[Manager] No similar intentions found in VectorStore.');
      return null;
    }

    const topMatchId = searchResults.ids[0][0];
    console.log(`[Manager] Found top match with vectorId: ${topMatchId}`);

    // This is a placeholder for finding the graph node.
    // In a real scenario, we'd search the graph for the node with this vectorId.
    // For now, we'll assume a direct mapping, which our current test setup provides.
    const graph = this.graphStore.getGraph();
    let foundWorkflow: any = null;

    graph.forEachNode((node, attributes) => {
      if (attributes.type === 'Intent' && attributes.vectorId === topMatchId) {
        const intentNode = attributes as IntentNode;
        console.log(
          `[Manager] Found corresponding IntentNode in GraphStore: ${intentNode.label}`
        );
        // In a real implementation, we would return the subgraph for this workflow.
        // For now, returning the node is sufficient to prove the link.
        foundWorkflow = intentNode;
        return; // Exit loop early
      }
    });

    if (foundWorkflow) {
      return foundWorkflow;
    }

    console.log(
      `[Manager] Could not find a corresponding IntentNode in the graph for vectorId: ${topMatchId}`
    );
    return null;
  }
}
