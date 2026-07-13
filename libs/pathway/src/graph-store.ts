import { MultiGraph } from 'graphology';
import { bfsFromNode } from 'graphology-traversal';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs/promises';
import * as path from 'path';
import { subgraph } from 'graphology-operators';

const GRAPH_DATA_DIR = path.join(process.cwd(), 'libs/pathway/data');
const GRAPH_FILE_PATH = path.join(GRAPH_DATA_DIR, 'workflow-graph.json');

// --- Graph Schema Definitions ---

export type NodeType = 'Intent' | 'Step' | 'SubTask' | 'Decision';
export type EdgeType = 'HAS_STEP' | 'DEPENDS_ON' | 'LEADS_TO' | 'Flow' | 'Similarity';

export interface BaseNode {
  id: string;
  type: NodeType;
  label: string;
}

export interface IntentNode extends BaseNode {
  type: 'Intent';
  vectorId: string; // Link to ChromaDB vector
  originalQuery: string;
}

export interface StepNode extends BaseNode {
  type: 'Step';
  action: string; // e.g., 'execute_command', 'read_file'
  parameters: object;
}

export type GraphNode = IntentNode | StepNode; // Will expand with SubTask, Decision

// --- GraphStore Service ---

export class GraphStore {
  private graph: MultiGraph;
  // Map to store workflow creation order
  private workflowCreationTimes: Map<string, number> = new Map();

  constructor() {
    this.graph = new MultiGraph();
    this.loadGraph().catch(err => {
      // If the file doesn't exist, it's okay. We'll start with a new graph.
      if (err instanceof Error && 'code' in err && err.code !== 'ENOENT') {
        console.error('Error loading graph on initialization:', err);
      }
    });
  }

  // Helper to extract workflow ID from a node ID
  private getWorkflowId(nodeId: string): string | null {
    // Assuming a consistent prefix for all nodes in a workflow, e.g., "workflowId_nodeName"
    // This part is crucial and needs to be implemented based on your ID schema.
    // For now, let's assume the part before the first underscore is the workflow ID.
    const match = nodeId.match(/^([a-f0-9-]+)/);
    return match ? match[1] : null;
  }

  async getWorkflowIds(): Promise<string[]> {
    const intentNodes = this.graph.filterNodes(
      (node, attrs) => attrs.type === 'Intent'
    );
    const workflowIds = new Set<string>();
    intentNodes.forEach(nodeId => {
      const wfId = this.getWorkflowId(nodeId);
      if (wfId) {
        workflowIds.add(wfId);
      }
    });
    return Array.from(workflowIds);
  }

  async getOldestWorkflowId(): Promise<string | null> {
    if (this.workflowCreationTimes.size === 0) {
      // Fallback for graphs loaded from old format without timestamps,
      // assuming the first "Intent" node encountered is the oldest.
      console.warn(
        '[GraphStore] No workflow timestamps found. Falling back to insertion order for finding oldest workflow. This may be inaccurate.'
      );
      for (const node of this.graph.nodes()) {
        if (this.graph.getNodeAttribute(node, 'type') === 'Intent') {
          const wfId = this.getWorkflowId(node);
          if (wfId) return wfId;
        }
      }
      return null;
    }

    let oldestId: string | null = null;
    let oldestTime = Infinity;

    for (const [id, time] of this.workflowCreationTimes.entries()) {
      if (time < oldestTime) {
        oldestTime = time;
        oldestId = id;
      }
    }
    return oldestId;
  }

  async saveGraph(): Promise<void> {
    try {
      const serializedGraph = this.graph.export();
      // Let's also save the creation times
      const exportData = {
        graph: serializedGraph,
        workflowCreationTimes: Object.fromEntries(this.workflowCreationTimes),
      };
      const data = JSON.stringify(exportData, null, 2);
      // Ensure the directory exists before writing
      await fs.mkdir(GRAPH_DATA_DIR, { recursive: true });
      await fs.writeFile(GRAPH_FILE_PATH, data, 'utf-8');
      console.log(`[GraphStore] Graph saved to ${GRAPH_FILE_PATH}`);
    } catch (error) {
      console.error('[GraphStore] Error saving graph:', error);
    }
  }

  async loadGraph(): Promise<void> {
    try {
      const data = await fs.readFile(GRAPH_FILE_PATH, 'utf-8');
      const jsonData = JSON.parse(data);

      // Check for new format vs old format for backward compatibility
      if (jsonData.graph && jsonData.hasOwnProperty('workflowCreationTimes')) {
        // New format with metadata
        this.graph.import(jsonData.graph);
        this.workflowCreationTimes = new Map(
          Object.entries(jsonData.workflowCreationTimes || {})
        );
      } else {
        // Old format (just the graph object)
        console.log(
          '[GraphStore] Loading graph from old format. Timestamps will not be available for existing workflows.'
        );
        this.graph.import(jsonData);
        this.workflowCreationTimes = new Map();
      }

      console.log(`[GraphStore] Graph loaded from ${GRAPH_FILE_PATH}`);
    } catch (error) {
      if (
        error instanceof Error &&
        'code' in error &&
        error.code === 'ENOENT'
      ) {
        console.log(
          `[GraphStore] No existing graph file found at ${GRAPH_FILE_PATH}. Starting fresh.`
        );
      } else {
        console.error('[GraphStore] Error loading graph:', error);
        throw error;
      }
    }
  }

  addNode(node: GraphNode): void {
    this.graph.addNode(node.id, { ...node });
  }

  getNode(id: string): GraphNode | undefined {
    if (!this.graph.hasNode(id)) {
      return undefined;
    }
    return this.graph.getNodeAttributes(id) as GraphNode;
  }

  addEdge(source: string, target: string, type: string): void {
    this.graph.addDirectedEdge(source, target, { type });
  }

  getWorkflowSubgraph(
    startNodeId: string
  ): import('graphology').MultiGraph | null {
    if (!this.graph.hasNode(startNodeId)) {
      console.error('Cannot get subgraph: start node does not exist.');
      return null;
    }

    const nodesToVisit: string[] = [startNodeId];
    const visited = new Set<string>();

    while (nodesToVisit.length > 0) {
      const currentNode = nodesToVisit.shift()!;
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        const neighbors = this.graph.outNeighbors(currentNode);
        nodesToVisit.push(...neighbors);
      }
    }

    return subgraph(this.graph, Array.from(visited));
  }

  getGraph(): MultiGraph {
    return this.graph;
  }

  async clearGraph(): Promise<void> {
    this.graph.clear();
    await this.saveGraph();
    console.log('[GraphStore] Graph has been cleared.');
  }

  findIntentNodeByVectorId(vectorId: string): string | null {
    return (
      this.graph.findNode(
        (node: string, attrs: any) => attrs.vectorId === vectorId
      ) || null
    );
  }

  getWorkflowByIntentNode(
    startNodeId: string,
    options: { edgeTypes?: readonly string[] } = {}
  ): MultiGraph {
    const nodesInWorkflow: string[] = [];
    const allowedEdgeTypes = options.edgeTypes
      ? new Set(options.edgeTypes)
      : undefined;
    const queue = [startNodeId];
    const visited = new Set<string>();

    while (queue.length > 0) {
      const node = queue.shift()!;
      if (visited.has(node)) continue;
      visited.add(node);
      nodesInWorkflow.push(node);

      for (const edge of this.graph.outEdges(node)) {
        const edgeType = this.graph.getEdgeAttribute(edge, 'type');
        if (allowedEdgeTypes && !allowedEdgeTypes.has(edgeType)) {
          continue;
        }

        const target = this.graph.target(edge);
        if (!visited.has(target)) {
          queue.push(target);
        }
      }
    }

    return subgraph(this.graph, nodesInWorkflow);
  }

  createWorkflow(
    intent: string,
    vectorId: string,
    steps: Array<{
      id: string;
      type: 'Step';
      label: string;
      action: string;
      parameters: object;
    }>
  ): string {
    const workflowId = uuidv4();
    const intentNodeId = `${workflowId}_intent`;

    this.graph.addNode(intentNodeId, {
      type: 'Intent',
      label: intent,
      vectorId,
      originalQuery: intent, // Store original query
    });
    this.workflowCreationTimes.set(workflowId, Date.now());

    let previousNodeId = intentNodeId;
    steps.forEach((step, index) => {
      const stepNodeId = `${workflowId}_${step.action}_${index}`;
      this.graph.addNode(stepNodeId, { ...step });
      this.graph.addDirectedEdge(previousNodeId, stepNodeId, { type: 'Flow' });
      previousNodeId = stepNodeId;
    });
    console.log(`[GraphStore] Created new workflow for intent: ${intent}`);
    this.saveGraph(); // Auto-save after creating a workflow
    return intentNodeId;
  }

  // Helper to find an intent node by its original query
  findIntentNodeByQuery(query: string): string | null {
    for (const node of this.graph.nodes()) {
      const attrs = this.graph.getNodeAttributes(node);
      if (attrs.type === 'Intent' && attrs.originalQuery === query) {
        return node;
      }
    }
    return null;
  }

  deleteNodes(nodeIds: string[]): void {
    nodeIds.forEach(nodeId => {
      if (this.graph.hasNode(nodeId)) {
        this.graph.dropNode(nodeId);
      }
    });
    console.log(`[GraphStore] Deleted ${nodeIds.length} nodes.`);
  }
}
