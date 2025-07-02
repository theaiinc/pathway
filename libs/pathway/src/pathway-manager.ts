import { VectorStore } from './vector-store.js';
import { GraphStore } from './graph-store.js';
import { v4 as uuidv4 } from 'uuid';
import { MultiGraph } from 'graphology';
import { WorkflowExecutor } from './workflow-executor.js';

const azureOpenAIApiKey = process.env.AZURE_OPENAI_API_KEY;
const azureOpenAIApiEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureOpenAIApiVersion = process.env.AZURE_OPENAI_API_VERSION;
const azureOpenAIChatDeploymentName =
  process.env.AZURE_OPENAI_CHAT_DEPLOYMENT_NAME;

if (
  !azureOpenAIApiKey ||
  !azureOpenAIApiEndpoint ||
  !azureOpenAIApiVersion ||
  !azureOpenAIChatDeploymentName
) {
  throw new Error(
    'Azure OpenAI environment variables for chat are not set. Please check your .env file.'
  );
}

export class PathwayManager {
  private vectorStore: VectorStore;
  private graphStore: GraphStore;

  constructor(vectorStore: VectorStore, graphStore: GraphStore) {
    this.vectorStore = vectorStore;
    this.graphStore = graphStore;
  }

  /**
   * Finds the most similar workflow from the knowledge base.
   * This is the "Retrieve" phase of the CBR cycle.
   * @param query The user's query.
   * @returns A workflow subgraph or null if not found.
   */
  async findSimilarWorkflow(query: string): Promise<MultiGraph | null> {
    console.log(`\n[Manager] Retrieving similar workflow for: "${query}"`);

    const k = 3; // Retrieve top 3 candidates
    const similarIntentions = await this.vectorStore.findSimilarIntentions(
      query,
      k
    );

    if (!similarIntentions || similarIntentions.ids.length === 0) {
      console.log('[Manager] No similar intentions found in VectorStore.');
      return null;
    }

    // Score and rank the candidates
    let bestWorkflow: MultiGraph | null = null;
    let bestScore = -Infinity;

    console.log(
      `[Manager] Scoring ${similarIntentions.ids.length} candidates...`
    );
    for (let i = 0; i < similarIntentions.ids.length; i++) {
      const vectorId = similarIntentions.ids[i];
      const distance = similarIntentions.distances[i];
      const similarity = 1 - distance;

      console.log(
        `[Manager] Checking candidate ${i + 1} with vectorId: ${vectorId}`
      );
      const intentNode = this.graphStore.findIntentNodeByVectorId(vectorId);

      if (intentNode) {
        console.log(`[Manager]   ... found intent node: ${intentNode}`);
        const workflow = this.graphStore.getWorkflowByIntentNode(intentNode);
        const score = this.scoreWorkflow(workflow, similarity);
        console.log(
          `[Manager] -> Candidate ${i + 1}: score=${score.toFixed(
            4
          )} (sim: ${similarity.toFixed(4)}, complexity: ${
            workflow.order
          } nodes)`
        );

        if (score > bestScore) {
          bestScore = score;
          bestWorkflow = workflow;
        }
      } else {
        console.log(
          `[Manager]   ... could not find an intent node for this vectorId.`
        );
      }
    }

    const similarityThreshold = 0.75;
    if (bestWorkflow && bestScore >= similarityThreshold) {
      console.log(
        `[Manager] Selecting best workflow with score: ${bestScore.toFixed(4)}`
      );
      return bestWorkflow;
    } else {
      if (bestWorkflow) {
        console.log(
          `[Manager] Best candidate score (${bestScore.toFixed(
            4
          )}) is below threshold of ${similarityThreshold}. No suitable workflow found.`
        );
      }
      return null;
    }
  }

  /**
   * Adapts a retrieved workflow to a new query using an LLM.
   * This is the "Reuse" phase of the CBR cycle.
   * @param workflow The workflow to adapt.
   * @param query The new query to adapt to.
   * @returns A new, adapted workflow graph.
   */
  async adaptWorkflow(
    workflow: MultiGraph,
    query: string
  ): Promise<MultiGraph> {
    console.log(`\n[Manager] Adapting workflow...`);
    const newWorkflow = new MultiGraph();
    newWorkflow.import(workflow.export());
    // Placeholder for actual LLM-based adaptation logic
    console.log('[Manager] Placeholder adaptation complete (workflow cloned).');
    return newWorkflow;
  }

  async retainWorkflow(
    workflow: MultiGraph,
    originalQuery: string
  ): Promise<void> {
    console.log(
      `[Manager] Retaining new workflow for query: "${originalQuery}"`
    );
    const vectorId = await this.vectorStore.addIntention(originalQuery);

    // --- Start of fix: Make node IDs unique before merging ---
    const workflowId = uuidv4();
    const remappedGraph = new MultiGraph();
    const idMap: { [oldId: string]: string } = {};

    // Remap nodes
    workflow.forEachNode((node, attributes) => {
      const newId = `${workflowId}__${node}`;
      idMap[node] = newId;
      remappedGraph.addNode(newId, { ...attributes, id: newId });
    });

    // Remap edges
    workflow.forEachEdge(
      (
        edge,
        attributes,
        source,
        target,
        sourceAttributes,
        targetAttributes,
        undirected
      ) => {
        const newSource = idMap[source];
        const newTarget = idMap[target];
        if (newSource && newTarget) {
          remappedGraph.addDirectedEdge(newSource, newTarget, attributes);
        }
      }
    );
    // --- End of fix ---

    const intentNodeId = Object.values(idMap).find(newId =>
      newId.includes('intent_node')
    );

    if (!intentNodeId) {
      console.error('[Manager] Cannot retain workflow: Intent node not found.');
      return;
    }

    // Update the intent node with the new vectorId and the original query
    remappedGraph.setNodeAttribute(intentNodeId, 'vectorId', vectorId);
    remappedGraph.setNodeAttribute(intentNodeId, 'label', originalQuery);

    // This is a simplified "retain" step. We're assuming the new workflow
    // is being added to the graph store. In a real system, you might merge it.
    // For now, let's assume `generateNewWorkflow` created a detached graph
    // and we need to add its components to the main graph.

    // The GraphStore's `createWorkflow` (or a new `addWorkflow` method)
    // would be responsible for serializing this. Let's ensure the graph store handles it.
    // For this implementation, we will merge the new workflow into the main graph.

    this.graphStore.getGraph().import(remappedGraph.export(), true);
    await this.graphStore.saveGraph();

    console.log(`[Manager] Workflow retained with new vectorId: ${vectorId}`);
  }

  private scoreWorkflow(workflow: MultiGraph, similarity: number): number {
    const complexity = workflow.order; // Number of nodes
    const complexityPenalty = 0.05 * complexity; // Penalize by 0.05 for each node

    // The final score is the similarity minus a penalty for complexity.
    // This favors simpler workflows, especially when similarity scores are close.
    const score = similarity - complexityPenalty;

    return score;
  }

  async generateNewWorkflow(query: string): Promise<MultiGraph | null> {
    console.log(`\n[Manager] Generating new workflow for query: "${query}"`);

    const llmResponse = await this.vectorStore.generateWorkflow(query);

    if (!llmResponse) {
      console.error('[Manager] Failed to get a response from the LLM.');
      return null;
    }

    try {
      const workflowData = JSON.parse(llmResponse).workflow;
      const newGraph = new MultiGraph();

      // Add nodes
      workflowData.nodes.forEach((node: any) => {
        newGraph.addNode(node.id, { ...node });
      });

      // Add edges
      workflowData.edges.forEach((edge: any) => {
        newGraph.addDirectedEdge(edge.source, edge.target, { type: 'Flow' });
      });

      console.log(
        `[Manager] Successfully parsed and created new workflow graph with ${newGraph.order} nodes.`
      );
      return newGraph;
    } catch (error) {
      console.error(
        '[Manager] Error parsing LLM response for new workflow:',
        error
      );
      console.log('[Manager] Raw LLM Response:', llmResponse);
      return null;
    }
  }

  async executeAndReviseWorkflow(workflow: MultiGraph): Promise<boolean> {
    const executor = new WorkflowExecutor();

    const startNode = workflow.findNode(
      node => workflow.getNodeAttribute(node, 'type') === 'Intent'
    );
    if (!startNode) {
      console.error(
        '[Manager] Cannot execute workflow: Intent node not found.'
      );
      return false;
    }

    let successful = await executor.execute(workflow, startNode);

    if (!successful) {
      console.log(
        '[Manager] Workflow execution failed. Beginning revision process...'
      );
      // TODO: Implement revision logic
      // 1. Get the error details from the executor.
      // 2. Prompt LLM with workflow + error, asking for a fix.
      // 3. Parse the suggested fix.
      // 4. Apply the fix to the workflow graph.
      // 5. Retry execution.
      console.log('[Manager] Revision logic not yet implemented.');
    }

    return successful;
  }
}
