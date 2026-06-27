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
import { ContextCompiler } from '../src/compiler/compiler.js';
import { PlannerContextEmitter } from '../src/compiler/emitters/planner-context-emitter.js';
import { BudgetPass } from '../src/compiler/passes/budget-pass.js';
import { IdentityAnalysisPass } from '../src/compiler/passes/identity-analysis-pass.js';
import { ContextNode } from '../src/context/context-ir.js';
import { DefaultCostModel, ContextObjective } from '../src/context/objective.js';
import { ContextProvider } from '../src/context/provider.js';
import { PlannerContext } from '../src/context/target.js';
import { PipelineAuditEngine } from '../src/audit/audit-engine.js';
import { AuditReport, Auditor } from '../src/audit/auditor.js';
import { ExecutionRuntime } from '../src/execution/execution-runtime.js';
import { ExecutionPlan } from '../src/execution/plan.js';
import { ExecutionTrace } from '../src/execution/trace.js';
import { KnowledgeRuntime } from '../src/knowledge/knowledge-runtime.js';
import { BasicLearningEngine } from '../src/learning/learning-engine.js';
import { ConfidenceValidationEngine } from '../src/learning/validation-engine.js';
import { Planner } from '../src/planning/planner.js';
import { IdentityReplayEngine } from '../src/replay/replay.js';
import { GreedySelector } from '../src/selection/greedy-selector.js';
import { SelectionEngine } from '../src/selection/selection-engine.js';
import { NoopSimulationEngine } from '../src/simulation/simulation-engine.js';

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

  // --- 4. Context runtime/compiler spine ---------------------------------
  console.log('\n[4] Context runtime/compiler spine');

  const objective: ContextObjective = {
    version: 'objective-v1',
    maxTokens: 50,
    minConfidence: 0.8,
    prioritize: ['execution', 'failures', 'artifacts'],
  };
  const costModel = new DefaultCostModel();
  const nodes: ContextNode[] = [
    {
      id: 'constraint:oauth',
      fingerprint: hashContent({ kind: 'constraint', value: 'OAuth redirect must match manifest' }),
      source: 'demo',
      version: 'v1',
      type: 'constraint',
      payload: { value: 'OAuth redirect must match manifest' },
      importance: 10,
      confidence: 0.95,
      cost: { tokens: 12 },
    },
    {
      id: 'failure:oauth-android',
      fingerprint: hashContent({ kind: 'failure', rootCause: 'Missing Android intent filter' }),
      source: 'demo',
      version: 'v1',
      type: 'failure',
      payload: { rootCause: 'Missing Android intent filter' },
      evidence: ['constraint:oauth'],
      importance: 9,
      confidence: 0.9,
      cost: { tokens: 24 },
    },
    {
      id: 'log:verbose',
      fingerprint: hashContent({ kind: 'log', value: 'verbose unrelated log' }),
      source: 'demo',
      version: 'v1',
      type: 'log',
      payload: { value: 'verbose unrelated log' },
      importance: 1,
      confidence: 0.5,
      cost: { tokens: 40 },
    },
  ];
  const provider: ContextProvider = {
    name: 'demo-provider',
    version: '1.0.0',
    collect: () => ({
      provider: 'demo-provider',
      version: '1.0.0',
      nodes,
      edges: [
        {
          id: 'edge:failure-constraint',
          source: 'failure:oauth-android',
          target: 'constraint:oauth',
          type: 'depends-on',
        },
      ],
    }),
  };

  const knowledgeRuntime = new KnowledgeRuntime();
  knowledgeRuntime.registerProvider(provider);
  const selectionEngine = new SelectionEngine(new GreedySelector());
  const compiler = new ContextCompiler([
    new IdentityAnalysisPass(),
    new BudgetPass(costModel, objective),
  ]);
  const runtime = new ExecutionRuntime({
    knowledgeRuntime,
    selectionEngine,
    compiler,
  });
  const emitter = new PlannerContextEmitter();
  const compiled = await runtime.compileContext({
    providerRequest: { objective, target: 'planner' },
    selectionRequest: { id: 'oauth-selection', objective, target: 'planner' },
    compilerVersion: '1.0.0',
    passSetVersion: 'identity-analysis@1.0.0|budget@1.0.0',
    costModel,
    emitter,
    validate: true,
  });

  check('compiler emits PlannerContext', compiled.output.kind === 'planner');
  check('budget pass drops low-importance log', compiled.ir.nodes.length === 2);
  check(
    'optimization provenance records dropped node',
    compiled.provenance.some(p => p.action === 'dropped')
  );
  check(
    'compiler events recorded',
    runtime.observability.snapshot().events.some(event => event.name === 'PassCompleted')
  );

  // --- 5. Plan, simulate, audit, learn, validate, replay ------------------
  console.log('\n[5] Closed-loop execution trace, audit, learning, replay');

  const planner: Planner<PlannerContext> = {
    name: 'demo-planner',
    version: '1.0.0',
    plan: (context: PlannerContext): ExecutionPlan => ({
      id: 'plan:oauth',
      version: '1.0.0',
      plannerVersion: 'demo-planner@1.0.0',
      contextTargetId: context.ir.id,
      steps: [
        {
          id: 'step:check-manifest',
          type: 'inspect-artifact',
          description: 'Check AndroidManifest intent filter for OAuth redirect.',
          contextNodeIds: context.nodes.map(node => node.id),
        },
      ],
    }),
  };
  const plan = await planner.plan(compiled.output);
  const simulation = new NoopSimulationEngine<PlannerContext>();
  const trace = simulation.simulate(plan, compiled.output);
  const auditor: Auditor<PlannerContext> = {
    name: 'demo-budget-auditor',
    version: '1.0.0',
    audit: (executionTrace: ExecutionTrace): AuditReport => ({
      id: `audit:${executionTrace.id}`,
      traceId: executionTrace.id,
      findings: [
        {
          id: 'finding:use-cached-artifact',
          severity: 'warning',
          type: 'BudgetExceeded',
          recommendation: 'Use cached artifact before another tool call.',
          evidenceTraceId: executionTrace.id,
        },
      ],
      compilerFeedback: [
        {
          pass: 'budget',
          outcome: 'success',
          usefulness: 0.9,
          recommendation: 'Current budget retained required OAuth context.',
          evidenceTraceId: executionTrace.id,
        },
      ],
      diagnostics: [],
    }),
  };
  const auditEngine = new PipelineAuditEngine([auditor]);
  const report = await auditEngine.audit(trace, compiled.output);
  const candidates = new BasicLearningEngine().propose(
    report.findings,
    report.compilerFeedback
  );
  const validation = new ConfidenceValidationEngine().validate(candidates);
  const replayed = new IdentityReplayEngine().replay({
    id: 'replay:oauth',
    knowledgeSnapshotVersion: compiled.ir.snapshotVersion,
    objectiveVersion: objective.version,
    selectorVersion: '1.0.0',
    compilerVersion: compiled.ir.compilerVersion,
    passSetVersion: compiled.ir.passSetVersion,
    costModelVersion: costModel.version,
    emitterVersion: emitter.version,
    plannerVersion: 'demo-planner@1.0.0',
    validationPolicyVersion: 'default-confidence-policy@1.0.0',
    adapterMetadata: {},
    context: compiled.output,
    plan,
    trace,
  });

  check('planner creates execution plan outside compiler', plan.steps.length === 1);
  check('simulation produces execution trace', trace.events.length > 0);
  check('audit produces findings', report.findings.length === 1);
  check('learning creates candidate knowledge', candidates.length === 2);
  check('validation gates durable knowledge', validation.accepted.length >= 1);
  check('replay preserves trace identity', replayed.trace.id === trace.id);

  // --- summary -----------------------------------------------------------
  console.log(`\n${failures === 0 ? '✅ ALL CHECKS PASSED' : `❌ ${failures} CHECK(S) FAILED`}`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
