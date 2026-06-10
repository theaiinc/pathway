# Pathway Execution Acceleration Layer (PEAL) — Architecture & Design

> **Status:** Design spec for review. No implementation has started.
> **Scope decision:** This extends the existing `libs/pathway` package with internal
> modules. It does **not** introduce new packages, replace existing components, or add
> new infrastructure.

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

**Thesis:** the largest cost/perf win is not smarter agents — it is agents that
**remember work already done.** Pathway already stores *what to do* (workflows). It does
not yet store *the results of doing it*, nor does it know when a stored result is stale.

PEAL turns every artifact, tool result, and analysis into a **content-addressed,
reusable, automatically-invalidated graph node**, built inside `libs/pathway` and reusing
`GraphStore` and `VectorStore`. The software-knowledge-graph direction (symbol/AST) is
**Phase 2**, described at lower fidelity in §9.

## 2. Design principles

1. **Reuse, don't rebuild.** Provenance uses the *same* graphology machinery as
   `GraphStore`; the semantic cache is a *second ChromaDB collection* via the existing
   `VectorStore` embedder. No new infra.
2. **Content addressing is the spine.** Identity = `sha256(canonical(content))`. Equal
   content ⇒ same node ⇒ automatic dedup and cache reuse.
3. **Invalidation must be derivable, not manual.** A result is valid iff every input it
   was derived from still hashes to the same value (the Nx/Bazel model, applied to AI
   steps).
4. **Caching is opt-in and observable.** A miss always falls back to today's behavior;
   every hit/miss is logged with a reason.
5. **Backward compatible.** Existing `workflow-graph.json`, the `/generate` API, and
   `pathway-goggles` must keep working untouched.

## 3. Module layout (inside `libs/pathway/src`)

```
libs/pathway/src/
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

## 4. Core data model

### 4.1 Content-Addressable Node (Layer 1 — CAS)

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
formatting, key order, and `undefined` handling must be pinned and tested (see §8.1).

**Storage:** `NodeStore` persists nodes as a content-keyed map alongside the existing graph
JSON (same `fs` save/load pattern as `GraphStore.saveGraph`). Nodes are immutable; writing
an existing hash is a no-op (dedup).

### 4.2 Provenance edges

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

## 5. Layer 2 — Execution Cache

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

## 6. Layer 3 — Tool Result Cache

```ts
key = hashContent({ tool, params })   // TTL-configurable
```

Covers GitHub/Jira/DB/web/MCP calls. Stored as CASNodes of `type: 'tool-result'` with a
`meta.expiresAt`. Pure read-only tools cache aggressively; mutating tools bypass.

## 7. Layer 4 — Semantic Cache

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

## 8. Keystone — Computation Provenance Graph & invalidation

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

### 8.1 Open question — logical vs content identity

CAS gives *content* identity; invalidation needs a stable *logical* id (e.g. a file path)
mapping to its *current* content hash. The design proposes a thin `logicalId → currentHash`
index maintained alongside the provenance graph.

### 8.2 Worked invalidation example

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

## 9. Phase 2 (documented, not designed in depth) — Software Knowledge Graph

Lower-priority direction, recorded for completeness:

- **Symbol Graph** — classes/functions/APIs as nodes; `calls`/`imports`/`depends_on` edges.
  Same graphology substrate.
- **AST Cache** — parsed trees keyed by file content hash (CAS Layer 1 already provides the
  key).
- **Execution Snapshot** — `{ repositoryHash, symbolGraphHash, embeddingsHash }`; incremental
  update on file change via §8 invalidation.
- **Context Compiler (full)** — emit "3 files + 2 interfaces + 1 schema" instead of N files by
  traversing the symbol graph. (In Phase 1 the Context Compiler is only a thin consumer of
  the caches above — an interface, not new infra.)

These reuse Layer 1 and the provenance engine, which is *why* computation acceleration is
sequenced first.

## 10. Explicit non-goals

- **No 9 new packages.** All modules live inside `libs/pathway`; one published package.
- **No replacement** of `GraphStore` / `VectorStore` / `PathwayManager` — additive only.
- **No new datastore.** Persistence reuses the existing JSON-on-disk pattern and ChromaDB; a
  pluggable store interface is noted as future work.

## 11. Risks / open decisions

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

## 12. Review checklist

1. **Interface completeness** — every PRD layer maps to exactly one interface here (CAS,
   Execution, Tool, Semantic, Provenance, Context Compiler) and to a concrete file under
   `libs/pathway/src` (§3).
2. **Invalidation walk-through** — §8.2 traces `File A edited → only Result X recomputed`
   against the real `bfsFromNode` traversal already in `GraphStore`.
3. **Backward-compat** — `/generate`, `workflow-graph.json`, and `pathway-goggles` are
   untouched by this additive design.
4. **Optional thin PoC (separate follow-up)** — a ~50-line spike: hash two queries, cache
   `generateWorkflow` output, show a cache hit on the second identical call — to validate the
   hashing + execution-cache seam before committing to the full build.
