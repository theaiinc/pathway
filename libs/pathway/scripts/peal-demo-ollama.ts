/**
 * PEAL execution-cache demo against a REAL local LLM (Ollama / gemma4:e2b).
 *
 * This is the "lowest-risk first win" from PEAL-architecture.md §5: wrap a real,
 * expensive LLM call (here, workflow generation) in the ExecutionCache so an
 * identical query is served from cache with no second model invocation.
 *
 * Prereqs: `ollama serve` running with the gemma4:e2b model pulled.
 * Run: npm run demo:peal:ollama   (from libs/pathway)
 */
import { NodeStore } from '../src/cas/node-store.js';
import { ProvenanceGraph } from '../src/provenance/provenance-graph.js';
import { ExecutionCache } from '../src/cache/execution-cache.js';

const OLLAMA_URL = process.env.OLLAMA_URL ?? 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL ?? 'gemma4:e2b';

let failures = 0;
function check(name: string, cond: boolean) {
  console.log(`  ${cond ? '✅' : '❌'} ${name}`);
  if (!cond) failures++;
}

/** Real LLM call — stands in for VectorStore.generateWorkflow. */
async function generateWorkflow(query: string): Promise<unknown> {
  const prompt =
    `Design a short step-by-step workflow to solve this task. ` +
    `Respond ONLY with JSON {"workflow":{"steps":["..."]}}. Task: ${query}`;
  const res = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ model: MODEL, prompt, stream: false, format: 'json' }),
  });
  if (!res.ok) throw new Error(`Ollama HTTP ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as {
    response: string;
    prompt_eval_count?: number;
    eval_count?: number;
  };
  return {
    raw: data.response,
    promptTokens: data.prompt_eval_count ?? 0,
    outputTokens: data.eval_count ?? 0,
  };
}

async function main() {
  console.log(`\nPEAL execution cache vs real LLM (${MODEL})\n`);

  const store = new NodeStore();
  const provenance = new ProvenanceGraph();
  const cache = new ExecutionCache(store, provenance, 'workflow');

  let modelCalls = 0;
  const compute = (q: string) => {
    modelCalls++;
    return generateWorkflow(q);
  };

  const stepDef = { kind: 'generateWorkflow', model: MODEL };
  const query = 'Add a login endpoint to an Express API';
  const queryNode = store.put('prompt', query);

  // --- First request: real model call (cache MISS) ---
  const t0 = Date.now();
  const first = await cache.run(stepDef, [queryNode.id], () => compute(query));
  const firstMs = Date.now() - t0;
  const tok = (first.node.content as { outputTokens: number }).outputTokens;
  console.log(`  [miss] generated in ${firstMs}ms, ~${tok} output tokens`);

  // --- Second identical request: served from cache (cache HIT) ---
  const t1 = Date.now();
  const second = await cache.run(stepDef, [queryNode.id], () => compute(query));
  const secondMs = Date.now() - t1;
  console.log(`  [hit ] served in ${secondMs}ms, 0 tokens, 0 model calls`);

  console.log('');
  check('first request was a cache miss', first.hit === false);
  check('second request was a cache hit', second.hit === true);
  check('gemma4:e2b was invoked exactly once', modelCalls === 1);
  check('hit returns the identical cached node', first.node.id === second.node.id);
  check(`cache hit is far faster (${firstMs}ms -> ${secondMs}ms)`, secondMs < firstMs / 10);

  const saved = Math.round((1 - secondMs / firstMs) * 100);
  console.log(`\n  → latency saved on repeat: ${saved}% (and ${tok} tokens avoided)`);
  console.log(`\n${failures === 0 ? '✅ ALL CHECKS PASSED' : `❌ ${failures} CHECK(S) FAILED`}`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch(err => {
  console.error('\nDemo failed:', err.message ?? err);
  console.error('Is `ollama serve` running with the model pulled? `ollama pull gemma4:e2b`');
  process.exit(1);
});
