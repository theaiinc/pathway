import { VectorStore } from './vector-store.js';
import { GraphStore } from './graph-store.js';
import { v4 as uuidv4 } from 'uuid';
import pkg from 'graphology';
import { WorkflowExecutor } from './workflow-executor.js';
const { MultiGraph } = pkg;

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
  async findSimilarWorkflow(
    query: string
  ): Promise<import('graphology').MultiGraph | null> {
    console.log(`\n[Manager] Retrieving similar workflow for: "${query}"`);

    const similarIntentions = await this.vectorStore.findSimilarIntentions(
      query,
      1
    );

    if (!similarIntentions || similarIntentions.ids.length === 0) {
      console.log('[Manager] No similar intentions found in VectorStore.');
      return this.generateNewWorkflow(query);
    }

    const topVectorId = similarIntentions.ids[0];
    const topDistance = similarIntentions.distances[0];
    const similarity = 1 - topDistance; // Convert distance to similarity
    const similarityThreshold = 0.75;

    console.log(
      `[Manager] Found top match with vectorId: ${topVectorId} (Similarity: ${similarity.toFixed(
        4
      )})`
    );

    if (similarity < similarityThreshold) {
      console.log(
        `[Manager] Similarity is below threshold of ${similarityThreshold}. Generating new workflow.`
      );
      return this.generateNewWorkflow(query);
    }

    const intentNode = this.graphStore.findIntentNodeByVectorId(topVectorId);
    if (intentNode) {
      console.log(
        `[Manager] Found corresponding IntentNode in GraphStore: ${this.graphStore
          .getGraph()
          .getNodeAttribute(intentNode, 'label')}`
      );
      const workflow = this.graphStore.getWorkflowByIntentNode(intentNode);
      console.log(
        `[Manager] Successfully retrieved workflow with ${workflow.order} nodes.`
      );
      return workflow;
    } else {
      console.log(
        `[Manager] Could not find a workflow in GraphStore for vectorId: ${topVectorId}`
      );
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
    workflow: import('graphology').MultiGraph,
    query: string
  ): Promise<import('graphology').MultiGraph> {
    console.log(`\n[Manager] Adapting workflow...`);
    const newWorkflow = workflow.copy();
    console.log('[Manager] Placeholder adaptation complete (workflow cloned).');
    return newWorkflow;
  }

  async generateNewWorkflow(
    query: string
  ): Promise<import('graphology').MultiGraph | null> {
    console.log(`\n[Manager] Generating new workflow for query: "${query}"`);

    const prompt = `
You are a helpful assistant that designs a sequence of steps (a workflow) to solve a user's query.
The user's query is: "${query}"

Please respond with a JSON object that represents this workflow. The JSON object should have a single root key "workflow" which contains two arrays: "nodes" and "edges".

- Each object in the "nodes" array should have an "id" (a unique string like "node1", "node2"), a "type" ("Intent" for the first node, "Step" for all others), and a "label" (a descriptive title).
- The "Intent" node represents the user's goal.
- Each "Step" node represents an action to be taken and should include an "action" and "parameters" object.
- Each object in the "edges" array should define a directed link between nodes, with "source" and "target" properties corresponding to the node "id"s, and a "type" of "HAS_STEP".

Example for a query "read a file in nodejs":
{
  "workflow": {
    "nodes": [
      {
        "id": "intent_node",
        "type": "Intent",
        "label": "Intent: Read a file in Node.js"
      },
      {
        "id": "step_1",
        "type": "Step",
        "label": "Import fs module",
        "action": "execute_shell_command",
        "parameters": {
          "command": "const fs = require('fs');"
        }
      },
      {
        "id": "step_2",
        "type": "Step",
        "label": "Use fs.readFile",
        "action": "execute_shell_command",
        "parameters": {
          "command": "fs.readFile('/path/to/file.txt', 'utf8', (err, data) => { if (err) throw err; console.log(data); });"
        }
      }
    ],
    "edges": [
      {
        "source": "intent_node",
        "target": "step_1",
        "type": "HAS_STEP"
      },
      {
        "source": "step_1",
        "target": "step_2",
        "type": "HAS_STEP"
      }
    ]
  }
}
`;

    console.log('[Manager] Prompting LLM for new workflow...');
    const url = `${azureOpenAIApiEndpoint}openai/deployments/${azureOpenAIChatDeploymentName}/chat/completions?api-version=${azureOpenAIApiVersion}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': azureOpenAIApiKey!,
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `[Manager] LLM call failed with status ${response.status}:`,
        errorBody
      );
      return null;
    }

    const responseData = await response.json();
    const llmResponse = responseData.choices[0].message?.content;
    console.log('[Manager] LLM response received.');

    try {
      const workflowData = JSON.parse(llmResponse).workflow;
      const newGraph = new MultiGraph();

      // Add nodes
      for (const node of workflowData.nodes) {
        newGraph.addNode(node.id, {
          type: node.type,
          label: node.label,
          action: node.action,
          parameters: node.parameters,
          id: node.id, // Storing id inside attributes as well
        });
      }

      // Add edges
      for (const edge of workflowData.edges) {
        newGraph.addEdge(edge.source, edge.target, { type: edge.type });
      }

      console.log(
        `[Manager] Successfully parsed and created new workflow graph with ${newGraph.order} nodes.`
      );

      // Optional: Retain this new workflow for future use.
      // For now, we just return it. The caller can decide to retain it.

      return newGraph;
    } catch (error) {
      console.error(
        '[Manager] Failed to parse LLM response or build graph:',
        error
      );
      console.log('LLM Response was:', llmResponse);
      return null;
    }
  }

  async executeAndReviseWorkflow(
    workflow: import('graphology').MultiGraph
  ): Promise<boolean> {
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
