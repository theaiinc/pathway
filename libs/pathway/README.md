# @theaiinc/pathway

A sophisticated Case-Based Reasoning (CBR) system that enables AI agents to learn, retrieve, and reuse workflows based on user intent. This library implements a vectorized intent representation system with graph-based workflow management, allowing agents to build persistent knowledge and solve problems more efficiently over time.

## 🎯 Overview

The `pathway` library implements a **dynamic mind map** system where:

- **Intentions** (user problems) are converted to vector embeddings for semantic similarity search
- **Workflows** (solution paths) are stored as interconnected graphs
- **Case-Based Reasoning** enables learning from past solutions
- **Persistent storage** maintains knowledge across sessions

## 🏗️ Architecture

### Core Components

#### 1. **PathwayManager** (`pathway-manager.ts`)

The central orchestrator that implements the CBR cycle:

- **Retrieve**: Find similar past workflows using vector similarity
- **Reuse**: Adapt existing workflows to new problems
- **Revise**: Execute and refine workflows based on results
- **Retain**: Store successful workflows for future use

#### 2. **VectorStore** (`vector-store.ts`)

Manages semantic memory using ChromaDB and Azure OpenAI:

- Converts text queries to vector embeddings
- Performs similarity search for intent matching
- Generates new workflows using LLM planning
- Maintains persistent vector storage

#### 3. **GraphStore** (`graph-store.ts`)

Manages workflow graphs using Graphology:

- Stores workflows as directed graphs with nodes and edges
- Supports workflow subgraph extraction and traversal
- Maintains persistent graph storage in JSON format
- Links intent nodes to vector embeddings

#### 4. **WorkflowExecutor** (`workflow-executor.ts`)

Executes workflow steps and manages execution state.

## 🚀 Quick Start

### Installation

```bash
npm install @theaiinc/pathway
```

### Environment Setup

Create a `.env` file with Azure OpenAI credentials:

```env
AZURE_OPENAI_API_KEY=your_api_key
AZURE_OPENAI_ENDPOINT=your_endpoint
AZURE_OPENAI_API_VERSION=2023-07-01-preview
AZURE_OPENAI_CHAT_DEPLOYMENT_NAME=your_chat_deployment
AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME=your_embedding_deployment
```

### Basic Usage

```typescript
import { PathwayManager, VectorStore, GraphStore } from '@theaiinc/pathway';

// Initialize components
const vectorStore = new VectorStore();
const graphStore = new GraphStore();
const pathwayManager = new PathwayManager(vectorStore, graphStore);

// Find or create a workflow for a user query
const query = 'How to read a file in Node.js?';
const workflow = await pathwayManager.findSimilarWorkflow(query);

if (workflow) {
  console.log('Found existing workflow, reusing...');
  // Execute the workflow
  const success = await pathwayManager.executeAndReviseWorkflow(workflow);
} else {
  console.log('No similar workflow found, generating new one...');
  const newWorkflow = await pathwayManager.generateNewWorkflow(query);
  if (newWorkflow) {
    await pathwayManager.retainWorkflow(newWorkflow, query);
  }
}
```

## 📊 Data Models

### Node Types

```typescript
type NodeType = 'Intent' | 'Step' | 'SubTask' | 'Decision';

interface IntentNode {
  id: string;
  type: 'Intent';
  label: string;
  vectorId: string; // Link to ChromaDB vector
  originalQuery: string;
}

interface StepNode {
  id: string;
  type: 'Step';
  label: string;
  action: string; // e.g., 'execute_command', 'read_file'
  parameters: object;
}
```

### Edge Types

```typescript
type EdgeType = 'HAS_STEP' | 'DEPENDS_ON' | 'LEADS_TO';
```

## 🔧 API Reference

### PathwayManager

#### `findSimilarWorkflow(query: string): Promise<MultiGraph | null>`

Retrieves the most similar workflow from the knowledge base using vector similarity search.

#### `adaptWorkflow(workflow: MultiGraph, query: string): Promise<MultiGraph>`

Adapts a retrieved workflow to a new query using LLM-based reasoning.

#### `retainWorkflow(workflow: MultiGraph, originalQuery: string): Promise<string | null>`

Stores a new workflow in the knowledge base for future reuse.

#### `generateNewWorkflow(query: string): Promise<MultiGraph | null>`

Generates a completely new workflow using LLM planning.

#### `executeAndReviseWorkflow(workflow: MultiGraph): Promise<boolean>`

Executes a workflow and revises it based on execution results.

### VectorStore

#### `addIntention(text: string, metadata?: object): Promise<string>`

Adds a new intention to the vector store and returns its ID.

#### `findSimilarIntentions(queryText: string, k?: number): Promise<{ids: string[], distances: number[]}>`

Finds the k most similar intentions to a query.

#### `generateWorkflow(query: string): Promise<string | null>`

Generates a new workflow JSON using LLM planning.

### GraphStore

#### `createWorkflow(intent: string, vectorId: string, steps: Step[]): string`

Creates a new workflow graph from intent and steps.

#### `getWorkflowByIntentNode(startNodeId: string): MultiGraph`

Extracts a workflow subgraph starting from an intent node.

#### `findIntentNodeByVectorId(vectorId: string): string | null`

Finds an intent node by its associated vector ID.

## 🎨 Workflow Generation

The system can generate workflows in JSON format:

```json
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
      }
    ],
    "edges": [
      {
        "source": "intent_node",
        "target": "step_1",
        "type": "Flow"
      }
    ]
  }
}
```

## 🔄 CBR Cycle Implementation

### 1. Retrieve Phase

- Converts user query to vector embedding
- Searches ChromaDB for similar intentions
- Scores candidates based on similarity and complexity
- Returns best matching workflow if score ≥ 0.75

### 2. Reuse Phase

- Adapts retrieved workflow to new context
- Uses LLM for complex adaptations
- Maintains workflow structure while updating parameters

### 3. Revise Phase

- Executes workflow in sandboxed environment
- Monitors for errors and failures
- Uses LLM to analyze and propose fixes
- Implements self-correction loops

### 4. Retain Phase

- Stores successful workflows in graph database
- Links intent nodes to vector embeddings
- Maintains creation timestamps for workflow management

## 🗄️ Persistence

### Graph Storage

- Workflows are persisted to `libs/pathway/data/workflow-graph.json`
- Automatic saving on graph modifications
- Backward compatibility with old formats

### Vector Storage

- Intentions stored in ChromaDB collection
- Cosine distance for similarity search
- Automatic initialization and connection management

## 🎯 Use Cases

### 1. **Code Generation**

```typescript
const query = 'Create a REST API endpoint for user authentication';
const workflow = await pathwayManager.findSimilarWorkflow(query);
```

### 2. **Task Automation**

```typescript
const query = 'Set up a CI/CD pipeline for a Node.js project';
const workflow = await pathwayManager.findSimilarWorkflow(query);
```

### 3. **Problem Solving**

```typescript
const query = 'Debug a memory leak in a React application';
const workflow = await pathwayManager.findSimilarWorkflow(query);
```

## 🔧 Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

### Publishing

```bash
npm run publish
```

## 📈 Performance Considerations

- **Vector Search**: ChromaDB provides fast similarity search with cosine distance
- **Graph Operations**: Graphology library optimized for large workflow graphs
- **LLM Calls**: Cached embeddings reduce repeated API calls
- **Persistence**: Efficient JSON serialization for graph storage

## 🔒 Security

- **Sandboxed Execution**: Workflows execute in isolated environments
- **Parameter Validation**: All workflow parameters are validated before execution
- **Error Handling**: Comprehensive error handling prevents system failures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

**The AI INC @ 2025** - All rights reserved.

This software is proprietary and confidential. While it is provided free of charge, usage is subject to subscription plans and terms of service. Redistribution, modification, or commercial use without proper licensing is prohibited.

For licensing inquiries, please contact The AI INC.

## 🔗 Related Projects

- **@theaiinc/pathway-goggles**: 3D visualization component for workflow graphs
- **ChromaDB**: Vector database for similarity search
- **Graphology**: Graph manipulation library
