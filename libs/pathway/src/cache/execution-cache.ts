import { hashContent, Hash } from '../cas/hash.js';
import { CASNode, NodeStore } from '../cas/node-store.js';
import { ProvenanceGraph } from '../provenance/provenance-graph.js';

export interface CacheLookupResult {
  hit: boolean;
  node: CASNode;
}

/**
 * Execution cache: hash(stepDef + inputs) -> output node. On a hit, no LLM/tool
 * call is made and a provenance edge is still recorded. See §5.
 *
 * `outputType` tags produced CASNodes (e.g. 'workflow', 'analysis').
 */
export class ExecutionCache {
  // cacheKey (hash of {stepDef, inputs}) -> output content hash
  private index = new Map<Hash, Hash>();

  constructor(
    private store: NodeStore,
    private provenance: ProvenanceGraph,
    private outputType = 'execution-output'
  ) {}

  private cacheKey(stepDef: unknown, inputs: Hash[]): Hash {
    return hashContent({ stepDef, inputs: [...inputs].sort() });
  }

  lookup(stepDef: unknown, inputs: Hash[]): CASNode | undefined {
    const outputId = this.index.get(this.cacheKey(stepDef, inputs));
    return outputId ? this.store.get(outputId) : undefined;
  }

  record(stepDef: unknown, inputs: Hash[], output: unknown): CASNode {
    const node = this.store.put(this.outputType, output);
    this.index.set(this.cacheKey(stepDef, inputs), node.id);
    this.provenance.recordDerivation({
      output: node.id,
      step: { kind: this.outputType, defHash: hashContent(stepDef) },
      inputs,
      at: Date.now(),
    });
    return node;
  }

  /**
   * Memoizing wrapper: run `compute` only on a miss. Returns the cached/fresh
   * node plus whether it was a hit. This is the seam where, e.g.,
   * VectorStore.generateWorkflow would be passed as `compute`.
   */
  async run(
    stepDef: unknown,
    inputs: Hash[],
    compute: () => Promise<unknown> | unknown
  ): Promise<CacheLookupResult> {
    const cached = this.lookup(stepDef, inputs);
    if (cached) return { hit: true, node: cached };
    const output = await compute();
    return { hit: false, node: this.record(stepDef, inputs, output) };
  }
}
