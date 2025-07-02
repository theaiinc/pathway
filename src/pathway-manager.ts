import { VectorStore } from './vector-store.js';
import { GraphStore, IntentNode, StepNode } from './graph-store.js';

const azureOpenAIApiKey = process.env.AZURE_OPENAI_API_KEY;
const azureOpenAIApiEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureOpenAIApiVersion = process.env.AZURE_OPENAI_API_VERSION;
const azureOpenAIChatDeploymentName =
  process.env.AZURE_OPENAI_CHAT_DEPLOYMENT_NAME;

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
   * @param newQuery The new query or problem.
   * @returns A new, adapted workflow subgraph.
   */
  async adaptWorkflow(
    workflow: import('graphology').MultiGraph,
    newQuery: string
  ): Promise<import('graphology').MultiGraph> {
    console.log('\n[Manager] Adapting workflow...');

    // 1. Serialize workflow for the LLM
    const simplifiedWorkflow: {
      intent: { originalQuery?: string };
      steps: any[];
    } = {
      intent: {},
      steps: [],
    };
    workflow.forEachNode((node, attributes) => {
      if (attributes.type === 'Intent') {
        simplifiedWorkflow.intent = { originalQuery: attributes.originalQuery };
      } else if (attributes.type === 'Step') {
        simplifiedWorkflow.steps.push({
          label: attributes.label,
          action: attributes.action,
          parameters: attributes.parameters,
        });
      }
    });

    // 2. Construct the prompt
    const prompt = `Given an existing workflow for the query "${
      simplifiedWorkflow.intent.originalQuery
    }", what changes are needed to adapt it for the new query "${newQuery}"?
    
    Existing workflow steps:
    ${JSON.stringify(simplifiedWorkflow.steps, null, 2)}

    Respond with a JSON object containing the suggested adaptations for the parameters. For example: { "steps_to_change": [ { "label": "step_label", "new_parameters": { ... } } ] }`;

    console.log('[Manager] Prompting LLM for adaptation suggestions...');

    // 3. Call the LLM (Manual Fetch)
    // Bypassing the OpenAI SDK due to a persistent and inexplicable 404 error.
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
        `Chat fetch failed with status ${response.status}:`,
        errorBody
      );
      throw new Error(`Chat fetch failed: ${response.statusText}`);
    }

    const responseData = await response.json();
    const suggestion = responseData.choices[0].message?.content;
    console.log('[Manager] LLM suggestion received:', suggestion);

    // 4. (Placeholder) Apply adaptations
    const newWorkflow = workflow.copy();
    console.log('[Manager] Placeholder adaptation complete (workflow cloned).');
    return newWorkflow;
  }
}
