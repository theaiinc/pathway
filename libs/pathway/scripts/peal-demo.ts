/**
 * PEAL proof-of-concept demo (PEAL-architecture.md §12.4).
 *
 * Self-contained — no Azure/ChromaDB needed. It exercises the three core
 * modules and asserts their behavior:
 *   1. CAS hashing determinism (key-order independence + dedup)
 *   2. Execution cache hit/miss around an "expensive" op (stands in for
 *      VectorStore.generateWorkflow)
 *   3. Provenance-based incremental invalidation (edit File A -> only X recomputed)
 *
 * Run: npm run demo:peal   (from libs/pathway)
 */
import { hashContent } from '../src/cas/hash.js';
import { NodeStore } from '../src/cas/node-store.js';
import { ProvenanceGraph } from '../src/provenance/provenance-graph.js';
import { ExecutionCache } from '../src/cache/execution-cache.js';

let failures = 0;
function check(name: string, cond: boolean) {
  console.log(`  ${cond ? '✅' : '❌'} ${name}`);
  if (!cond) failures++;
}

async function main() {
  // --- 1. CAS hashing ----------------------------------------------------
  console.log('\n[1] Content-addressable hashing');
  const h1 = hashContent({ a: 1, b: 2 });
  const h2 = hashContent({ b: 2, a: 1 }); // different key order, same content
  check('key-order independent (same content -> same hash)', h1 === h2);
  check('different content -> different hash', h1 !== hashContent({ a: 1, b: 3 }));
  check('hash is sha256-prefixed', h1.startsWith('sha256:'));

  const store = new NodeStore();
  const n1 = store.put('file', { a: 1, b: 2 });
  const n2 = store.put('file', { b: 2, a: 1 });
  check('NodeStore dedups equal content', n1.id === n2.id && store.size === 1);

  // --- 2. Execution cache around an "expensive" op -----------------------
  console.log('\n[2] Execution cache (memoizes expensive work)');
  const provenance = new ProvenanceGraph();
  const execCache = new ExecutionCache(store, provenance, 'workflow');

  let calls = 0;
  // Stands in for VectorStore.generateWorkflow(query): real LLM cost.
  const expensiveGenerate = async (query: string) => {
    calls++;
    await new Promise(r => setTimeout(r, 150)); // simulate latency
    return { workflow: { nodes: [{ id: 'intent', label: query }] } };
  };

  const stepDef = { kind: 'generateWorkflow' };
  const query = 'How to read a file in Node.js?';
  const queryNode = store.put('prompt', query);

  const t0 = Date.now();
  const first = await execCache.run(stepDef, [queryNode.id], () => expensiveGenerate(query));
  const firstMs = Date.now() - t0;

  const t1 = Date.now();
  const second = await execCache.run(stepDef, [queryNode.id], () => expensiveGenerate(query));
  const secondMs = Date.now() - t1;

  check('first call is a miss', first.hit === false);
  check('second identical call is a hit', second.hit === true);
  check('expensive op ran exactly once', calls === 1);
  check('hit returns identical cached node', first.node.id === second.node.id);
  check(`hit is faster (${firstMs}ms -> ${secondMs}ms)`, secondMs < firstMs);

  // --- 3. Provenance-based incremental invalidation ----------------------
  console.log('\n[3] Provenance invalidation (edit A -> only X recomputed)');
  // logicalId -> current content hash
  const logicalIndex = new Map<string, string>();
  // input content hash -> logicalId it belonged to
  const inputLogicalIds = new Map<string, string>();

  const fileA_v1 = store.put('file', { path: 'src/A.ts', body: 'export const a = 1;' });
  const fileB = store.put('file', { path: 'src/B.ts', body: 'export const b = 2;' });
  logicalIndex.set('src/A.ts', fileA_v1.id);
  logicalIndex.set('src/B.ts', fileB.id);
  inputLogicalIds.set(fileA_v1.id, 'src/A.ts');
  inputLogicalIds.set(fileB.id, 'src/B.ts');

  const analyze = (a: string, b: string) => ({ kind: 'analysis', from: [a, b] });
  const analysisCache = new ExecutionCache(store, provenance, 'analysis');
  const xNode = analysisCache.record(
    { kind: 'dependency-analysis' },
    [fileA_v1.id, fileB.id],
    analyze(fileA_v1.id, fileB.id)
  );

  check(
    'X valid while inputs unchanged',
    provenance.isValid(xNode.id, logicalIndex, inputLogicalIds)
  );

  // Edit src/A.ts -> new content hash.
  const fileA_v2 = store.put('file', { path: 'src/A.ts', body: 'export const a = 99;' });
  logicalIndex.set('src/A.ts', fileA_v2.id);
  inputLogicalIds.set(fileA_v2.id, 'src/A.ts');

  const affected = provenance.affectedBy(fileA_v1.id);
  check('affectedBy(A) returns exactly [X]', affected.length === 1 && affected[0] === xNode.id);
  check('B is NOT affected', !affected.includes(fileB.id));
  check(
    'X now invalid (its input A changed)',
    provenance.isValid(xNode.id, logicalIndex, inputLogicalIds) === false
  );

  // Recompute only X against the new A.
  const xNode2 = analysisCache.record(
    { kind: 'dependency-analysis' },
    [fileA_v2.id, fileB.id],
    analyze(fileA_v2.id, fileB.id)
  );
  check('recomputed X has a new content hash', xNode2.id !== xNode.id);
  check(
    'recomputed X is valid',
    provenance.isValid(xNode2.id, logicalIndex, inputLogicalIds)
  );

  // --- summary -----------------------------------------------------------
  console.log(`\n${failures === 0 ? '✅ ALL CHECKS PASSED' : `❌ ${failures} CHECK(S) FAILED`}`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
