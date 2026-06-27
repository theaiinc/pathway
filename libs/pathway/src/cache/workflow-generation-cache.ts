import { VectorStore } from '../vector-store.js';
import { ExecutionRuntime } from '../execution/execution-runtime.js';

export async function generateWorkflowWithCache(
  vectorStore: VectorStore,
  runtime: ExecutionRuntime,
  query: string
): Promise<string | null> {
  const stepDef = { kind: 'VectorStore.generateWorkflow', version: '1.0.0' };
  const queryNode = runtime.nodeStore.put('prompt', query, {
    source: 'PathwayManager.generateNewWorkflow',
  });

  try {
    const result = await runtime.executionCache.run(stepDef, [queryNode.id], async () => {
      const workflow = await vectorStore.generateWorkflow(query);
      if (!workflow) {
        throw new Error('VectorStore.generateWorkflow returned no workflow.');
      }
      return workflow;
    });

    runtime.eventBus.emit(result.hit ? 'ExecutionCacheHit' : 'ExecutionCacheMiss', {
      step: stepDef.kind,
      queryHash: queryNode.id,
      outputHash: result.node.id,
    });
    if (!result.hit) {
      runtime.eventBus.emit('WorkflowGenerated', {
        queryHash: queryNode.id,
        outputHash: result.node.id,
      });
    }

    return typeof result.node.content === 'string' ? result.node.content : null;
  } catch (error) {
    runtime.eventBus.emit('WorkflowGenerationFailed', {
      queryHash: queryNode.id,
      message: error instanceof Error ? error.message : String(error),
    });
    return null;
  }
}
