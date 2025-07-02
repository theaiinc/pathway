import pkg from 'graphology';
const { MultiGraph: Graph } = pkg;
import { v4 as uuidv4 } from 'uuid';
import { subgraph } from 'graphology-operators';

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
  private graph: import('graphology').MultiGraph;

  constructor() {
    this.graph = new Graph({ multi: true }); // Allow parallel edges
  }

  addNode(node: GraphNode): string {
    this.graph.addNode(node.id, { ...node });
    return node.id;
  }

  getNode(id: string): GraphNode | undefined {
    if (!this.graph.hasNode(id)) {
      return undefined;
    }
    return this.graph.getNodeAttributes(id) as GraphNode;
  }

  addEdge(
    sourceId: string,
    targetId: string,
    type: EdgeType,
    properties: object = {}
  ): string | null {
    if (!this.graph.hasNode(sourceId) || !this.graph.hasNode(targetId)) {
      console.error(
        'Cannot create edge: source or target node does not exist.'
      );
      return null;
    }
    // graphology edge keys are auto-generated, but we can add our own id
    const edgeId = uuidv4();
    this.graph.addEdge(sourceId, targetId, { id: edgeId, type, ...properties });
    return edgeId;
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

  getGraph(): import('graphology').MultiGraph {
    return this.graph;
  }

  // Example of linking to the vector store
  createWorkflow(
    intentQuery: string,
    vectorId: string,
    steps: StepNode[]
  ): void {
    const intentNode: IntentNode = {
      id: uuidv4(),
      type: 'Intent',
      label: `Intent: ${intentQuery.substring(0, 30)}...`,
      originalQuery: intentQuery,
      vectorId: vectorId,
    };
    this.addNode(intentNode);

    let previousNodeId = intentNode.id;
    for (const step of steps) {
      this.addNode(step);
      this.addEdge(previousNodeId, step.id, 'HAS_STEP');
      previousNodeId = step.id;
    }
    console.log(`Created new workflow for intent: ${intentQuery}`);
  }
}
