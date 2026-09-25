# @theaiinc/pathway

Pathway is an additive reasoning runtime for autonomous agents. It preserves the original
Case-Based Reasoning (CBR) workflow engine while adding the first PEAL runtime spine:
immutable knowledge, deterministic context compilation, typed execution traces,
simulation/audit hooks, skeptical learning, and cache/provenance foundations.

## 🎯 Overview

The `pathway` library now has two compatible layers:

- **CBR workflow engine**: intentions are embedded, similar workflows are retrieved, and workflows are stored in a graph.
- **PEAL runtime spine**: providers collect typed knowledge, selectors build snapshots, the Context Compiler emits typed context targets, planners produce execution plans, and execution traces flow through audit, learning, validation, and replay.

## 🏗️ Architecture

### PEAL Runtime Spine

```text
Execution Runtime
  -> Knowledge Runtime
  -> Selection Engine
  -> Context IR
  -> Context Compiler
  -> PlannerContext
  -> Planner / LLM
  -> ExecutionPlan
  -> Simulation / Execution
  -> Audit
  -> Candidate Knowledge
  -> Validation
  -> Knowledge Graph
```

PEAL is governed by normative specs in `spec/`:

- `runtime-laws.md`
- `compiler-invariants.md`
- `knowledge-model.md`
- `execution-model.md`
- `replay-model.md`

The core laws are: durable knowledge is immutable, context compilation is pure, subsystem boundaries stay separate, durable knowledge requires evidence, learning is skeptical, replay inputs are versioned, and optimization must preserve semantics.

### Core Components

#### 1. **PathwayManager** (`pathway-manager.ts`)

The original orchestrator that implements the CBR cycle:

- **Retrieve**: Find similar past workflows using vector similarity
- **Reuse**: Adapt existing workflows to new problems
- **Revise**: Execute and refine workflows based on results
- **Retain**: Store successful workflows for future use

`PathwayManager` remains backward compatible. It can optionally receive an
`ExecutionRuntime` to cache expensive workflow generation via PEAL's content-addressed
execution cache.

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

#### 5. **Context Compiler** (`context/`, `compiler/`)

Builds and optimizes ephemeral `ContextIR` from selected knowledge snapshots. The compiler
is pure: it emits typed context targets such as `PlannerContext`; it does not plan,
execute, call tools, or mutate durable knowledge.

#### 6. **Knowledge and Selection** (`knowledge/`, `selection/`)

Providers collect typed knowledge into an immutable in-memory `KnowledgeGraph`.
Selectors choose the part of the graph to compile into a `ContextSnapshot`.

#### 7. **Execution, Audit, Learning, Replay**

`ExecutionTrace` is the shared format for simulation and real execution. Audit engines
evaluate traces and produce findings. Learning turns findings into `CandidateKnowledge`,
and validation gates durable writes. Replay records capture versioned inputs for
deterministic regression checks.

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

### PEAL Runtime Usage

```typescript
import {
  BudgetPass,
  ContextCompiler,
  DefaultCostModel,
  ExecutionRuntime,
  GreedySelector,
  IdentityAnalysisPass,
  KnowledgeRuntime,
  PlannerContextEmitter,
  SelectionEngine,
} from '@theaiinc/pathway';

const objective = {
  version: 'objective-v1',
  maxTokens: 4000,
  prioritize: ['execution', 'failures', 'artifacts'],
};

const costModel = new DefaultCostModel();
const compiler = new ContextCompiler([
  new IdentityAnalysisPass(),
  new BudgetPass(costModel, objective),
]);

const runtime = new ExecutionRuntime({
  knowledgeRuntime: new KnowledgeRuntime(),
  selectionEngine: new SelectionEngine(new GreedySelector()),
  compiler,
});

const result = await runtime.compileContext({
  providerRequest: { objective, target: 'planner' },
  selectionRequest: { id: 'task-context', objective, target: 'planner' },
  compilerVersion: '1.0.0',
  passSetVersion: 'identity-analysis@1.0.0|budget@1.0.0',
  costModel,
  emitter: new PlannerContextEmitter(),
});

const plannerContext = result.output;
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

Generates a completely new workflow using LLM planning. If `PathwayManager` is
constructed with an `ExecutionRuntime`, this call is cached through PEAL's
content-addressed `ExecutionCache`.

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

### PEAL Runtime APIs

#### `ExecutionRuntime`

Coordinates context compilation by composing `KnowledgeRuntime`, `SelectionEngine`,
`ContextCompiler`, `ExecutionCache`, `ProvenanceGraph`, and the event bus.

#### `ContextCompiler`

Runs deterministic pass pipelines over `ContextIR` and emits typed context targets. The
compiler is intentionally pure and does not create execution plans.

#### `KnowledgeRuntime`

Registers providers, ingests typed provider results, and owns the in-memory
`KnowledgeGraph`.

#### `SelectionEngine`

Uses a `ContextSelector` such as `GreedySelector` to produce a `ContextSnapshot`, then
builds a `ContextIR` for the compiler.

#### `AuditEngine`, `LearningEngine`, `ValidationEngine`

Provide the closed-loop audit path: traces become findings, findings become candidate
knowledge, and validation gates durable knowledge writes.

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

### PEAL Demo

```bash
npm run demo:peal
```

The demo validates content-addressed hashing, execution caching, provenance invalidation,
context compilation, audit findings, candidate knowledge validation, and replay.

### Skills Benchmark

Measures whether a skill beats its own absence: the same tasks run with no skill, with the
skill's guidance prose, and with that prose plus its contract enforced, against a local
composer fixture. See `spec/benchmark-spec.md`.

```bash
# Deterministic: checks the fixture, contract and scoring with scripted trajectories.
npm run benchmark:ci -- --subsystem skills

# Live: a real model through every arm. Any OpenAI-compatible endpoint works
# (--base-url); this serves a model downloaded by Avalon on the default one.
scripts/serve-avalon-model.sh unsloth_Qwen3.5-4B-GGUF &
npm run benchmark:nightly -- --subsystem skills --runs 10 --model unsloth_Qwen3.5-4B-GGUF
```

Recorded baselines are in `benchmarks/skills/baselines/`.

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

MIT

## 🔗 Related Projects

- **@theaiinc/pathway-goggles**: 3D visualization component for workflow graphs
- **ChromaDB**: Vector database for similarity search
- **Graphology**: Graph manipulation library
