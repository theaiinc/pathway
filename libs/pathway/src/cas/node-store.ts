import { hashContent, Hash } from './hash.js';

/** A content-addressed, immutable node. See PEAL-architecture.md §4.1. */
export interface CASNode {
  id: Hash; // = hashContent(content)
  type: string;
  content: unknown;
  createdAt: number;
  meta?: Record<string, unknown>;
}

/**
 * Content-addressable store. Identity is derived from content, so writing the
 * same content twice is a no-op (automatic dedup). In-memory here; persistence
 * would mirror GraphStore.saveGraph's fs JSON pattern (future work).
 */
export class NodeStore {
  private nodes = new Map<Hash, CASNode>();

  /** Store content, returning its (possibly pre-existing) node. */
  put(type: string, content: unknown, meta?: Record<string, unknown>): CASNode {
    const id = hashContent(content);
    const existing = this.nodes.get(id);
    if (existing) return existing; // dedup
    const node: CASNode = { id, type, content, createdAt: Date.now(), meta };
    this.nodes.set(id, node);
    return node;
  }

  get(id: Hash): CASNode | undefined {
    return this.nodes.get(id);
  }

  has(id: Hash): boolean {
    return this.nodes.has(id);
  }

  get size(): number {
    return this.nodes.size;
  }
}
