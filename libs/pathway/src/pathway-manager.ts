import { VectorStore } from './vector-store.js';
import { GraphStore } from './graph-store.js';
import { v4 as uuidv4 } from 'uuid';
import { MultiGraph } from 'graphology';
import { WorkflowExecutor } from './workflow-executor.js';
import { ExecutionRuntime } from './execution/execution-runtime.js';
import { generateWorkflowWithCache } from './cache/workflow-generation-cache.js';

export interface RetrievalAuditOptions {
  readonly k?: number;
  readonly similarityThreshold?: number;
  readonly complexityPenaltyPerNode?: number;
  readonly workflowEdgeTypes?: readonly string[];
}

export interface RetrievalCandidateAudit {
  readonly rank: number;
  readonly vectorId: string;
  readonly distance?: number;
  readonly similarity?: number;
  readonly score?: number;
  readonly intentNodeId?: string;
  readonly workflowNodeCount?: number;
  readonly rejectionReason?: string;
}

export interface RetrievalAuditResult {
  readonly query: string;
  readonly k: number;
  readonly similarityThreshold: number;
  readonly complexityPenaltyPerNode: number;
  readonly candidates: readonly RetrievalCandidateAudit[];
  readonly selectedCandidate?: RetrievalCandidateAudit;
  readonly selectedWorkflow: MultiGraph | null;
  readonly rejectionReason?: string;
  readonly durationMs: number;
}

export const DEFAULT_RETRIEVAL_AUDIT_OPTIONS = {
  k: 3,
  similarityThreshold: 0.75,
  complexityPenaltyPerNode: 0.05,
  workflowEdgeTypes: ['Flow', 'HAS_STEP', 'DEPENDS_ON', 'LEADS_TO'] as const,
};

export class PathwayManager {
  private vectorStore: VectorStore;
  private graphStore: GraphStore;
  private runtime?: ExecutionRuntime;

  constructor(
    vectorStore: VectorStore,
    graphStore: GraphStore,
    runtime?: ExecutionRuntime
  ) {
    this.vectorStore = vectorStore;
    this.graphStore = graphStore;
    this.runtime = runtime;
  }

  /**
   * Finds the most similar workflow from the knowledge base.
   * This is the "Retrieve" phase of the CBR cycle.
   * @param query The user's query.
   * @returns A workflow subgraph or null if not found.
   */
  async findSimilarWorkflow(query: string): Promise<MultiGraph | null> {
    const audit = await this.auditSimilarWorkflow(query);
    return audit.selectedWorkflow;
  }

  /**
   * Audits workflow retrieval while preserving the existing retrieval behavior.
   * Benchmarks consume this passive result instead of changing runtime code paths.
   * @param query The user's query.
   * @param options Retrieval scoring and traversal options.
   * @returns Candidate diagnostics and the selected workflow, if any.
   */
  async auditSimilarWorkflow(
    query: string,
    options: RetrievalAuditOptions = {}
  ): Promise<RetrievalAuditResult> {
    const startedAt = Date.now();
    console.log(`\n[Manager] Retrieving similar workflow for: "${query}"`);

    const k = options.k ?? DEFAULT_RETRIEVAL_AUDIT_OPTIONS.k;
    const similarityThreshold =
      options.similarityThreshold ??
      DEFAULT_RETRIEVAL_AUDIT_OPTIONS.similarityThreshold;
    const complexityPenaltyPerNode =
      options.complexityPenaltyPerNode ??
      DEFAULT_RETRIEVAL_AUDIT_OPTIONS.complexityPenaltyPerNode;
    const workflowEdgeTypes =
      options.workflowEdgeTypes ??
      DEFAULT_RETRIEVAL_AUDIT_OPTIONS.workflowEdgeTypes;
    const similarIntentions = await this.vectorStore.findSimilarIntentions(
      query,
      k
    );

    if (!similarIntentions || similarIntentions.ids.length === 0) {
      console.log('[Manager] No similar intentions found in VectorStore.');
      return {
        query,
        k,
        similarityThreshold,
        complexityPenaltyPerNode,
        candidates: [],
        selectedWorkflow: null,
        rejectionReason: 'no-candidates',
        durationMs: Date.now() - startedAt,
      };
    }

    // Score and rank the candidates
    let bestWorkflow: MultiGraph | null = null;
    let bestCandidate: RetrievalCandidateAudit | undefined;
    let bestScore = -Infinity;
    const candidates: RetrievalCandidateAudit[] = [];

    console.log(
      `[Manager] Scoring ${similarIntentions.ids.length} candidates...`
    );
    for (let i = 0; i < similarIntentions.ids.length; i++) {
      const vectorId = similarIntentions.ids[i];
      const distance = similarIntentions.distances[i];
      if (!Number.isFinite(distance)) {
        candidates.push({
          rank: i + 1,
          vectorId,
          rejectionReason: 'invalid-distance',
        });
        continue;
      }

      const similarity = 1 - distance;

      console.log(
        `[Manager] Checking candidate ${i + 1} with vectorId: ${vectorId}`
      );
      const intentNode = this.graphStore.findIntentNodeByVectorId(vectorId);

      if (intentNode) {
        console.log(`[Manager]   ... found intent node: ${intentNode}`);
        const workflow = this.graphStore.getWorkflowByIntentNode(intentNode, {
          edgeTypes: workflowEdgeTypes,
        });
        const score = this.scoreWorkflow(
          workflow,
          similarity,
          complexityPenaltyPerNode
        );
        const candidate: RetrievalCandidateAudit = {
          rank: i + 1,
          vectorId,
          distance,
          similarity,
          score,
          intentNodeId: intentNode,
          workflowNodeCount: workflow.order,
        };
        candidates.push(candidate);
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
          bestCandidate = candidate;
        }
      } else {
        candidates.push({
          rank: i + 1,
          vectorId,
          distance,
          similarity,
          rejectionReason: 'stale-vector-id',
        });
        console.log(
          `[Manager]   ... could not find an intent node for this vectorId.`
        );
      }
    }

    // Complexity is a ranking signal, not evidence that the semantic match is
    // invalid. Gate retrieval on the raw embedding similarity so large,
    // high-confidence workflows are not rejected solely for having more steps.
    const bestSimilarity = bestCandidate?.similarity ?? -Infinity;
    if (bestWorkflow && bestSimilarity >= similarityThreshold) {
      console.log(
        `[Manager] Selecting best workflow with score: ${bestScore.toFixed(
          4
        )} and similarity: ${bestSimilarity.toFixed(4)}`
      );
      return {
        query,
        k,
        similarityThreshold,
        complexityPenaltyPerNode,
        candidates,
        selectedCandidate: bestCandidate,
        selectedWorkflow: bestWorkflow,
        durationMs: Date.now() - startedAt,
      };
    } else {
      if (bestWorkflow) {
        console.log(
          `[Manager] Best candidate score (${bestScore.toFixed(
            4
          )}) is below threshold of ${similarityThreshold}. No suitable workflow found.`
        );
      }
      return {
        query,
        k,
        similarityThreshold,
        complexityPenaltyPerNode,
        candidates,
        selectedCandidate: bestCandidate,
        selectedWorkflow: null,
        rejectionReason: bestWorkflow ? 'below-threshold' : 'no-valid-candidates',
        durationMs: Date.now() - startedAt,
      };
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
  ): Promise<string | null> {
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
        edgeKey,
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
          const newEdgeKey = `${workflowId}__${edgeKey}`;
          remappedGraph.addDirectedEdgeWithKey(
            newEdgeKey,
            newSource,
            newTarget,
            attributes
          );
        }
      }
    );
    // --- End of fix ---

    const intentNodeId = Object.values(idMap).find(newId =>
      newId.includes('intent_node')
    );

    if (!intentNodeId) {
      console.error('[Manager] Cannot retain workflow: Intent node not found.');
      return null;
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

    // --- Start of new feature: Link similar workflows ---
    const SIMILARITY_THRESHOLD_FOR_LINKING = 0.7;
    const k = 5; // Check top 5 for potential links

    console.log(
      `[Manager] Searching for similar intents to link to "${originalQuery}"`
    );
    const similarIntents = await this.vectorStore.findSimilarIntentions(
      originalQuery,
      k
    );

    if (similarIntents && similarIntents.ids.length > 1) {
      // more than just the one we added
      for (let i = 0; i < similarIntents.ids.length; i++) {
        const similarVectorId = similarIntents.ids[i];
        const similarity = 1 - similarIntents.distances[i];

        // Don't link to itself
        if (similarVectorId === vectorId) continue;

        if (similarity >= SIMILARITY_THRESHOLD_FOR_LINKING) {
          const existingIntentNode =
            this.graphStore.findIntentNodeByVectorId(similarVectorId);
          if (existingIntentNode && intentNodeId) {
            console.log(
              `[Manager] Linking new workflow to existing one with similarity: ${similarity.toFixed(
                4
              )}`
            );
            this.graphStore
              .getGraph()
              .addDirectedEdge(intentNodeId, existingIntentNode, {
                type: 'Similarity',
              });
          }
        }
      }
    }
    // --- End of new feature ---

    await this.graphStore.saveGraph();

    console.log(`[Manager] Workflow retained with new vectorId: ${vectorId}`);
    return intentNodeId;
  }

  async deleteWorkflow(workflowId: string): Promise<void> {
    console.log(
      `[Manager] Attempting to delete workflow with ID: ${workflowId}`
    );

    const graph = this.graphStore.getGraph();
    const nodesToDelete: string[] = [];
    let vectorId: string | null = null;

    // Find all nodes belonging to the workflow and identify the intent's vectorId
    graph.forEachNode((nodeId, attributes) => {
      // The workflowId is the prefix of the node's ID
      if (nodeId.startsWith(workflowId)) {
        nodesToDelete.push(nodeId);
        if (attributes.type === 'Intent' && attributes.vectorId) {
          vectorId = attributes.vectorId as string;
        }
      }
    });

    if (nodesToDelete.length === 0) {
      console.warn(
        `[Manager] No nodes found for workflow ID: ${workflowId}. No action taken.`
      );
      return;
    }

    // 1. Delete the intention from the VectorStore
    if (vectorId) {
      await this.vectorStore.deleteIntention(vectorId);
    } else {
      console.warn(
        `[Manager] No intent node with a vectorId found for workflow ${workflowId}.`
      );
    }

    // 2. Delete the nodes from the GraphStore
    this.graphStore.deleteNodes(nodesToDelete);

    // 3. Save the updated graph
    await this.graphStore.saveGraph();

    console.log(`[Manager] Successfully deleted workflow ${workflowId}.`);
  }

  private scoreWorkflow(
    workflow: MultiGraph,
    similarity: number,
    complexityPenaltyPerNode: number
  ): number {
    const complexity = workflow.order; // Number of nodes
    const complexityPenalty = complexityPenaltyPerNode * complexity;

    // The final score is the similarity minus a penalty for complexity.
    // This favors simpler workflows, especially when similarity scores are close.
    const score = similarity - complexityPenalty;

    return score;
  }

  async generateNewWorkflow(query: string): Promise<MultiGraph | null> {
    console.log(`\n[Manager] Generating new workflow for query: "${query}"`);
    this.assertChatEnvironment();

    const llmResponse = this.runtime
      ? await generateWorkflowWithCache(this.vectorStore, this.runtime, query)
      : await this.vectorStore.generateWorkflow(query);

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

  private assertChatEnvironment(): void {
    const required = [
      'AZURE_OPENAI_API_KEY',
      'AZURE_OPENAI_ENDPOINT',
      'AZURE_OPENAI_API_VERSION',
      'AZURE_OPENAI_CHAT_DEPLOYMENT_NAME',
    ];
    const missing = required.filter(name => !process.env[name]);

    if (missing.length > 0) {
      throw new Error(
        `Azure OpenAI environment variables for chat are not set: ${missing.join(
          ', '
        )}. Please check your .env file.`
      );
    }
  }
}
