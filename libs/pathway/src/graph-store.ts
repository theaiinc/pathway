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
export type EdgeType = 'HAS_STEP' | 'DEPENDS_ON' | 'LEADS_TO';

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

  constructor() {
    this.graph = new MultiGraph();
    this.loadGraph().catch(err => {
      // If the file doesn't exist, it's okay. We'll start with a new graph.
      if (err instanceof Error && 'code' in err && err.code !== 'ENOENT') {
        console.error('Error loading graph on initialization:', err);
      }
    });
  }

  async saveGraph(): Promise<void> {
    try {
      const serializedGraph = this.graph.export();
      const data = JSON.stringify(serializedGraph, null, 2);
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
      const serializedGraph = JSON.parse(data);
      this.graph.import(serializedGraph);
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

  getWorkflowByIntentNode(startNodeId: string): MultiGraph {
    const nodesInWorkflow: string[] = [];
    bfsFromNode(
      this.graph,
      startNodeId,
      (node: string, attributes: any, depth: number) => {
        nodesInWorkflow.push(node);
      }
    );
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
  ): void {
    const intentNodeId = uuidv4();
    this.graph.addNode(intentNodeId, {
      type: 'Intent',
      label: intent,
      vectorId,
    });

    let previousNodeId = intentNodeId;
    steps.forEach((step, index) => {
      const stepNodeId = step.id;
      this.graph.addNode(stepNodeId, { ...step });
      this.graph.addDirectedEdge(previousNodeId, stepNodeId, { type: 'Flow' });
      previousNodeId = stepNodeId;
    });
    console.log(`[GraphStore] Created new workflow for intent: ${intent}`);
    this.saveGraph(); // Auto-save after creating a workflow
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
}
