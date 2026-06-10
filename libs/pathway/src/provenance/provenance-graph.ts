import { MultiGraph } from 'graphology';
import { bfsFromNode } from 'graphology-traversal';
import { Hash } from '../cas/hash.js';

/** "outputNode was produced by `step` from these inputNodes". §4.2 */
export interface Derivation {
  output: Hash;
  step: { kind: string; defHash: Hash };
  inputs: Hash[];
  at: number;
}

/**
 * Computation provenance graph. Reuses the same graphology machinery as
 * GraphStore (sibling graph, per PEAL-architecture.md §4.2). Directed edges
 * point input -> output, labeled DERIVES, so forward traversal from a changed
 * input yields exactly the transitively-affected outputs (§8).
 */
export class ProvenanceGraph {
  private graph = new MultiGraph();
  private derivations = new Map<Hash, Derivation>(); // output -> how it was made

  private ensureNode(id: Hash): void {
    if (!this.graph.hasNode(id)) this.graph.addNode(id);
  }

  recordDerivation(d: Derivation): void {
    this.ensureNode(d.output);
    for (const input of d.inputs) {
      this.ensureNode(input);
      // input -> output (DERIVES). Skip duplicate edges between same pair.
      if (!this.graph.hasDirectedEdge(input, d.output)) {
        this.graph.addDirectedEdge(input, d.output, { type: 'DERIVES' });
      }
    }
    this.derivations.set(d.output, d);
  }

  /** Outputs transitively derived from a changed input hash (excludes the input itself). */
  affectedBy(changedInput: Hash): Hash[] {
    if (!this.graph.hasNode(changedInput)) return [];
    const affected: Hash[] = [];
    bfsFromNode(this.graph, changedInput, (node: string) => {
      if (node !== changedInput) affected.push(node);
    });
    return affected;
  }

  /**
   * An output is valid iff every input it was derived from still matches the
   * current content hash for that input's logical id.
   * @param currentInputs map of logicalId -> current content hash
   * @param inputLogicalIds map of input content hash -> the logicalId it belonged to
   */
  isValid(
    output: Hash,
    currentInputs: Map<string, Hash>,
    inputLogicalIds: Map<Hash, string>
  ): boolean {
    const d = this.derivations.get(output);
    if (!d) return false;
    return d.inputs.every(input => {
      const logicalId = inputLogicalIds.get(input);
      if (!logicalId) return false;
      return currentInputs.get(logicalId) === input;
    });
  }
}
