# Pathway Execution & Context Runtime (PEAL) — Architecture & Design

> **Status:** Directional architecture for review. Early foundation modules exist, but
> the runtime/compiler architecture is not yet implemented end-to-end.
> **Scope decision:** This extends the existing `libs/pathway` package with internal
> modules. It does **not** require new packages or a new datastore. Existing CBR,
> graph, vector, cache, and provenance pieces become subsystems behind a broader
> runtime.

## 1. Context — why this exists

Today `libs/pathway` (~700 LOC, 4 files) is a **Case-Based Reasoning (CBR) workflow
engine**:

| Component | File | Role |
|---|---|---|
| `VectorStore` | `src/vector-store.ts` | ChromaDB + Azure OpenAI for intent embeddings, similarity search, LLM workflow generation |
| `GraphStore` | `src/graph-store.ts` | graphology `MultiGraph` of `Intent → Step` nodes, persisted to `data/workflow-graph.json` |
| `PathwayManager` | `src/pathway-manager.ts` | The Retrieve / Reuse / Revise / Retain CBR cycle |
| `WorkflowExecutor` | `src/workflow-executor.ts` | **Simulated** execution only (`simulateAction`) |

Consumed by `apps/api/src/server.ts` (`/generate`, `/graph`, `/reset`), `apps/demo`, and
`pathway-goggles` (3D viz). No tests exist.

**Thesis:** agents do not ultimately need "memory" or "retrieval"; they need the right
context at the right time, assembled from a changing execution world under explicit cost
constraints. PEAL should therefore evolve from a CBR workflow engine into an
**Execution Runtime with an optimizing Context Runtime/Compiler**.

Pathway still benefits from the original PEAL foundation: every artifact, tool result,
analysis, and workflow output should become a **content-addressed, reusable,
automatically-invalidated graph node**. The larger direction is that these nodes feed a
persistent Knowledge Graph, from which an ephemeral Context IR is compiled into
target-specific prompts or tool inputs.

## 2. Current direction — Execution Runtime + Context Runtime

The target architecture is layered:

```text
Execution Runtime
  ├─ Scheduler
  ├─ Context Runtime
  ├─ Tool Runtime
  ├─ State Runtime
  ├─ Event Bus
  └─ Observability

Context Runtime
  ├─ Providers
  ├─ Persistent Knowledge Graph
  ├─ Context Selection
  └─ Context Compiler

Context Compiler
  Knowledge Graph snapshot/patch
      ↓
  Context IR
      ↓
  Analysis / Transform / Optimization / Emission passes
      ↓
  Planner, Coder, Reviewer, Summarizer, Memory, or Tool-call output
```

The Execution Runtime owns coordination. The Context Runtime owns persistent context
state. The Context Compiler is ephemeral and deterministic: it answers "given this
objective and budget, what is the best context I can emit right now?"

The runtime is event-driven, not just request/response. Events such as `GitChanged`,
`ToolResultProduced`, `ExecutionFailed`, or `ArtifactUpdated` can update the Knowledge
Graph, invalidate caches, notify active agents, and trigger incremental context
recompilation.

## 3. Design principles

1. **Reuse, don't rebuild.** Provenance uses the *same* graphology machinery as
   `GraphStore`; the semantic cache is a *second ChromaDB collection* via the existing
   `VectorStore` embedder. No new infra.
2. **Content addressing is the spine.** Identity = `sha256(canonical(content))`. Equal
   content ⇒ same node ⇒ automatic dedup and cache reuse.
3. **Invalidation must be derivable, not manual.** A result is valid iff every input it
   was derived from still hashes to the same value (the Nx/Bazel model, applied to AI
   steps).
4. **Context is typed until emission.** Providers return typed objects, not prompt text.
   Only final emitters serialize typed context into Markdown, XML, JSON, ChatML, tool
   calls, or future byte-native representations.
5. **Compilation is ephemeral.** The persistent Knowledge Graph is never optimized or
   mutated directly. Context selection produces a temporary `ContextIR`; passes transform
   that IR; the IR can be emitted or discarded.
6. **Caching is opt-in and observable.** A miss always falls back to today's behavior;
   every hit/miss is logged with a reason.
7. **Passes explain themselves.** Compiler passes return diagnostics and metrics so
   Pathway can explain why context was removed, compressed, or prioritized.
8. **Backward compatible.** Existing `workflow-graph.json`, the `/generate` API, and
   `pathway-goggles` must keep working untouched.
9. **Strict boundaries.** Knowledge Graph knows nothing about prompts; Context Runtime
   knows nothing about LLMs; Context Compiler knows nothing about execution; emitters know
   nothing about storage; LLM adapters know nothing about optimization.

## 4. Module layout (inside `libs/pathway/src`)

```
libs/pathway/src/
  execution/
    execution-runtime.ts
    scheduler.ts
    event-bus.ts
    observability.ts
  context/
    context-runtime.ts
    context-provider.ts
    knowledge-graph.ts
    context-ir.ts
    compiler.ts
    passes/
      analysis/
      transform/
      optimization/
      emission/
    emitters/
      markdown-emitter.ts
      json-emitter.ts
      chatml-emitter.ts
      tool-call-emitter.ts
  cas/
    hash.ts            canonicalize + sha256
    node-store.ts      NodeStore: put/get content-addressed nodes
  cache/
    execution-cache.ts ExecutionCache: hash(stepDef + inputs) -> outputNode
    tool-cache.ts      ToolResultCache: hash(tool + params) -> result, TTL
    semantic-cache.ts  SemanticCache: question embedding -> cached answer
  provenance/
    provenance-graph.ts  derivation edges + invalidation traversal
  index.ts            (extend existing barrel export)
```

`GraphStore`, `VectorStore`, `PathwayManager`, `WorkflowExecutor` are **extended, not
replaced**.

## 5. Core data model

### 5.1 Context identity and IR

Persistent knowledge and compiler state are separate.

```ts
type ContextNodeId = string; // stable UUID or logical id
type Fingerprint = string; // sha256 over canonical payload

interface ContextNode {
  id: ContextNodeId;
  fingerprint: Fingerprint;
  source: string;
  version: number;
  type: string;
  importance?: number;
  confidence?: number;
  cost?: ContextCost;
  parents?: ContextNodeId[];
  payload: unknown;
}

interface ContextEdge {
  source: ContextNodeId;
  target: ContextNodeId;
  type: string;
}

interface ContextCost {
  tokens?: number;
  latencyMs?: number;
  confidence?: number;
}

interface ContextObjective {
  maxTokens?: number;
  maxLatencyMs?: number;
  minConfidence?: number;
  prioritize?: string[];
}

type PromptTarget =
  | 'planner'
  | 'coder'
  | 'reviewer'
  | 'researcher'
  | 'summarizer'
  | 'memory'
  | 'tool-call';

interface ContextIR {
  nodes: ContextNode[];
  edges: ContextEdge[];
  tokenCost: number;
  objective: ContextObjective;
  target: PromptTarget;
}
```

Reducers and compressors preserve identity across versions instead of inventing unrelated
objects:

```text
Node A v17 ──FailureReducer──▶ Node A v18
```

This makes provenance, debugging, incremental recompilation, and "why did context change?"
diagnostics tractable.

### 5.2 Content-Addressable Node (Layer 1 — CAS)

```ts
type Hash = string; // "sha256:" + hex

interface CASNode {
  id: Hash;            // = hashContent(content)
  type: string;        // 'file' | 'tool-result' | 'analysis' | 'prompt' | 'answer' | ...
  content: unknown;    // JSON-serializable payload
  createdAt: number;
  meta?: Record<string, unknown>;
}

function hashContent(content: unknown): Hash;   // sha256 over canonical JSON
```

**Canonicalization** (`cas/hash.ts`): deterministic key-sorted JSON serialization so
logically-equal objects hash identically. This is the one piece with real subtlety — float
formatting, key order, and `undefined` handling must be pinned and tested (see §9.1).

**Storage:** `NodeStore` persists nodes as a content-keyed map alongside the existing graph
JSON (same `fs` save/load pattern as `GraphStore.saveGraph`). Nodes are immutable; writing
an existing hash is a no-op (dedup).

### 5.3 Provenance edges

```ts
// "outputNode was produced by `step` from these inputNodes"
interface Derivation {
  output: Hash;
  step: { kind: string; defHash: Hash }; // hash of the step definition/code/prompt
  inputs: Hash[];
  at: number;
}
```

Stored as directed edges `input → output` (labeled `DERIVES`) in a graphology graph,
**reusing the same machinery as `GraphStore`**. **Recommendation: a sibling graph file
(`provenance-graph.json`)** to keep workflow CBR data and computation provenance cleanly
separable.

## 6. Layer 2 — Execution Cache

```ts
cacheKey = hashContent({ stepDef, inputNodeHashes })
hit  -> return cached output node, record a provenance edge, no LLM/tool call
miss -> execute, store output as CASNode, record Derivation(output, step, inputs)
```

```ts
interface ExecutionCache {
  lookup(stepDef: unknown, inputs: Hash[]): CASNode | undefined;
  record(stepDef: unknown, inputs: Hash[], output: unknown): CASNode;
}
```

**Integration point:** `WorkflowExecutor` is the natural seam, but it is currently
*simulated*, so a pure execution cache has little to bite on. **Lowest-risk first win: cache
`VectorStore.generateWorkflow` responses** keyed by query hash — a real, expensive,
already-wired LLM call.

## 7. Layer 3 — Tool Result Cache

```ts
key = hashContent({ tool, params })   // TTL-configurable
```

Covers GitHub/Jira/DB/web/MCP calls. Stored as CASNodes of `type: 'tool-result'` with a
`meta.expiresAt`. Pure read-only tools cache aggressively; mutating tools bypass.

## 8. Layer 4 — Semantic Cache

Reuses `VectorStore`'s Azure embedder against a **new ChromaDB collection**
`semantic-cache`:

```ts
interface SemanticCache {
  put(question: string, answer: unknown): Promise<void>;
  get(question: string): Promise<{ answer: unknown; similarity: number } | null>;
  // returns a hit only when cosine similarity >= threshold (default ~0.97)
}
```

Mirrors `findSimilarIntentions`; the only new logic is a high similarity gate and an answer
payload. **Smallest, highest-ROI** addition because the embedding path already exists.

## 9. Keystone — Computation Provenance Graph & invalidation

Every cached result records the input nodes it was derived from (see `Derivation`).

```
File A (hash h1) ──DERIVES──▶ Result X (hash hx)
File B (hash h2) ──DERIVES──▶ Result X
```

**Invalidation semantics:**

1. A `CASNode` is *content-addressed*, so it never "changes" — a new version of an input
   gets a **new hash** (e.g. `File A` edited ⇒ `h1'`).
2. A cached output `X` is **valid** iff there exists a `Derivation` whose `inputs` hashes
   all currently correspond to the *current* version of each logical input.
3. On input change, traverse `DERIVES` edges forward (graphology `bfsFromNode`, already
   used in `GraphStore.getWorkflowByIntentNode`) to find the transitively-affected outputs
   and recompute **only those**, not the whole graph.

```ts
interface ProvenanceGraph {
  recordDerivation(d: Derivation): void;
  affectedBy(changedInput: Hash): Hash[]; // outputs transitively derived from a changed input
  isValid(output: Hash, currentInputs: Map<string /*logicalId*/, Hash>): boolean;
}
```

### 9.1 Open question — logical vs content identity

CAS gives *content* identity; invalidation needs a stable *logical* id (e.g. a file path)
mapping to its *current* content hash. The design proposes a thin `logicalId → currentHash`
index maintained alongside the provenance graph.

### 9.2 Worked invalidation example

Initial state — analysis `X` derived from files `A` and `B`:

```
logicalIndex = { "src/A.ts": h1, "src/B.ts": h2 }
provenance:    A(h1) ─DERIVES─▶ X(hx)
               B(h2) ─DERIVES─▶ X(hx)
```

`X` is valid: its `Derivation.inputs = [h1, h2]` match `logicalIndex` for both files.

Now `src/A.ts` is edited. Re-hash ⇒ `h1'`. Update `logicalIndex["src/A.ts"] = h1'`.

```
affectedBy(h1)  // bfsFromNode over DERIVES, starting at the node for h1
  -> [hx]        // X is the only transitively-affected output
```

`isValid(hx, logicalIndex)` now returns **false** (X's recorded input `h1 ≠ h1'`), so only
`X` is recomputed: `X' = analyze(h1', h2)`, producing a new node `hx'` and a new
`Derivation([h1', h2] → hx')`. Files `B` and any unrelated outputs are never touched — this
is the Nx/Bazel "minimal rebuild" applied to AI steps.

## 10. Context Runtime and Context Compiler

The Context Runtime is long-lived. It owns providers, indexes, memory stores, the
Knowledge Graph, provenance, cached computation, event subscriptions, and feedback from
execution.

The Context Compiler is short-lived. It takes a snapshot or patch from the runtime, builds
a `ContextIR`, applies passes, emits one or more target representations, and returns
diagnostics. It does not mutate the Knowledge Graph.

### 10.1 Providers

Providers collect typed objects:

| Provider | Example output |
|---|---|
| `MemoryProvider` | episodic, semantic, procedural, pattern, and provenance memories |
| `ExecutionProvider` | current step, active plan, failures, retries |
| `ArtifactProvider` | files, manifests, generated outputs, screenshots |
| `GitProvider` | branch, diff, changed files, commit metadata |
| `RuntimeProvider` | environment, SDK versions, feature flags |
| `ToolProvider` | recent tool results and cached computation |
| `UserProvider` | durable instructions, constraints, preferences |
| `ExternalKnowledgeProvider` | docs, API references, retrieved knowledge |

Providers should not assemble prompt strings. They should return structured payloads with
stable identities, source metadata, versions, confidence, and cost estimates where known.

### 10.2 Pass categories

Passes operate over `ContextIR` and should declare both invariants and diagnostics:

```ts
type ContextInvariant =
  | 'semantics'
  | 'dependencies'
  | 'identity'
  | 'ordering'
  | 'formatting'
  | 'cost';

interface ContextDiagnostic {
  level: 'info' | 'warning' | 'error';
  code: string;
  message: string;
  nodeIds?: ContextNodeId[];
}

interface PassMetrics {
  inputNodes: number;
  outputNodes: number;
  inputTokens?: number;
  outputTokens?: number;
  latencyMs?: number;
}

interface PassResult {
  ir: ContextIR;
  diagnostics: ContextDiagnostic[];
  metrics: PassMetrics;
}

interface ContextPass {
  name: string;
  kind: 'analysis' | 'transform' | 'optimization' | 'emission';
  preserves: ContextInvariant[];
  invalidates: ContextInvariant[];
  run(ir: ContextIR): Promise<PassResult> | PassResult;
}
```

Pass categories:

| Category | Examples | Purpose |
|---|---|---|
| Analysis | `ReferenceResolver`, `ImportanceScorer`, `DependencyAnalyzer`, `CycleDetector` | Annotate or validate IR without changing semantics |
| Transform | `MergeFailures`, `CollapseLogs`, `ReduceJson`, `HeadroomCompression` | Change shape or representation while preserving intent |
| Optimization | `Budget`, `Rank`, `DeadContextElimination`, `ContextHoisting`, `Inlining`, `CommonSubcontextElimination` | Improve objective score under cost constraints |
| Emission | `Markdown`, `XML`, `JSON`, `ChatML`, `ToolCalls` | Produce target-specific output |

Compiler-style optimizations are first-class:

- **Dead Context Elimination:** remove unreachable, stale, environment-invalid, or
  target-irrelevant branches.
- **Context Hoisting:** extract shared facts such as a common root cause from repeated
  failures and reference them once.
- **Common Subcontext Elimination:** deduplicate equivalent facts from multiple providers
  while preserving references.
- **Inlining:** expand small referenced context when it is cheaper than preserving the
  reference chain.

### 10.3 Objectives and cost models

Budgets are one objective, not the whole objective:

```ts
const objective = {
  maxTokens: 4000,
  maxLatencyMs: 300,
  minConfidence: 0.85,
  prioritize: ['execution', 'failures', 'artifacts'],
};
```

The compiler optimizes against the objective. Token count, latency, confidence, freshness,
dependency completeness, and target relevance should all be representable in diagnostics
and metrics.

### 10.4 Incremental and multi-target compilation

The compiler should support both full builds and incremental builds:

```text
ContextIR + GitChanged patch
  -> patch affected nodes
  -> re-run affected passes
  -> emit updated target
```

This matters because agent loops often change only a small fraction of the world between
iterations.

One `ContextIR` can feed multiple emitters:

| Target | Likely context |
|---|---|
| Planner | objectives, constraints, patterns, open decisions |
| Coder | artifacts, diffs, APIs, runtime state |
| Reviewer | decisions, failures, tests, risk signals |
| Researcher | external knowledge, unresolved questions, source confidence |
| Summarizer | completed work, outcomes, durable facts |
| Memory writer | reusable patterns, failures, decisions, provenance |

## 11. Software Knowledge Graph

The software Knowledge Graph is no longer a separate late phase; it is one major provider
and index inside the Context Runtime:

- **Symbol Graph** — classes/functions/APIs as nodes; `calls`/`imports`/`depends_on` edges.
  Same graphology substrate.
- **AST Cache** — parsed trees keyed by file content hash (CAS Layer 1 already provides the
  key).
- **Execution Snapshot** — `{ repositoryHash, symbolGraphHash, embeddingsHash }`; incremental
  update on file change via §9 invalidation.
- **Context selection input** — emit "3 files + 2 interfaces + 1 schema" instead of N files by
  traversing the symbol graph and producing typed `ContextNode`s for the compiler.

These reuse Layer 1 and the provenance engine, which is why the computation acceleration
work remains the foundation for the broader runtime.

## 12. Explicit non-goals

- **No 9 new packages.** All modules live inside `libs/pathway`; one published package.
- **No replacement** of `GraphStore` / `VectorStore` / `PathwayManager` — additive only.
- **No new datastore.** Persistence reuses the existing JSON-on-disk pattern and ChromaDB; a
  pluggable store interface is noted as future work.

## 13. Risks / open decisions

1. **Canonical hashing correctness** — the entire system's determinism rests on
   `cas/hash.ts`. Needs a pinned spec + test vectors.
2. **Simulated executor** — execution cache delivers little until steps do real work;
   mitigate by caching `generateWorkflow` (real LLM cost) first.
3. **Provenance graph: shared vs sibling** to the workflow graph. Recommendation: sibling
   file.
4. **Tool-result invalidation: TTL vs provenance** — time-based vs derivation-based; pick per
   tool.
5. **CAS growth** — append-only store needs a GC/eviction policy (LRU by `createdAt` +
   reachability from live workflows).

## 14. Review checklist

1. **Interface completeness** — every runtime/compiler layer maps to at least one
   interface here and to a concrete file under `libs/pathway/src` (§4).
2. **Invalidation walk-through** — §9.2 traces `File A edited → only Result X recomputed`
   against the real `bfsFromNode` traversal already in `GraphStore`.
3. **Backward-compat** — `/generate`, `workflow-graph.json`, and `pathway-goggles` are
   untouched by this additive design.
4. **Optional thin PoC (separate follow-up)** — a ~50-line spike: hash two queries, cache
   `generateWorkflow` output, show a cache hit on the second identical call — to validate the
   hashing + execution-cache seam before committing to the full build.
