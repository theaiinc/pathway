import { VectorStore } from './vector-store.js';
import { GraphStore, IntentNode, StepNode } from './graph-store.js';

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

    const graph = this.graphStore.getGraph();
    let workflowSubgraph: import('graphology').MultiGraph | null = null;

    for (const node of graph.nodes()) {
      const attributes = graph.getNodeAttributes(node);
      if (attributes.type === 'Intent' && attributes.vectorId === topMatchId) {
        console.log(
          `[Manager] Found corresponding IntentNode in GraphStore: ${attributes.label}`
        );
        workflowSubgraph = this.graphStore.getWorkflowSubgraph(attributes.id);
        break; // Exit loop once found
      }
    }

    if (workflowSubgraph) {
      return workflowSubgraph;
    } else {
      console.log(
        `[Manager] Could not find a corresponding IntentNode in the graph for vectorId: ${topMatchId}`
      );
      return null;
    }
  }

  /**
   * Adapts a retrieved workflow to a new context.
   * This is a placeholder for the "Reuse" phase of the CBR cycle.
   * @param workflow The subgraph of the workflow to adapt.
   * @param newContext An object describing the necessary adaptations.
   * @returns A new, adapted workflow subgraph.
   */
  adaptWorkflow(
    workflow: import('graphology').MultiGraph,
    newContext: any
  ): import('graphology').MultiGraph {
    console.log('\n[Manager] Adapting workflow...');
    // For now, just return a clone of the workflow without changes.
    const newWorkflow = workflow.copy();
    console.log('[Manager] Placeholder adaptation complete (workflow cloned).');
    return newWorkflow;
  }
}
