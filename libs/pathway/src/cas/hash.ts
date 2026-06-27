import { createHash } from 'node:crypto';

export type Hash = string; // "sha256:" + hex

/**
 * Deterministic, key-sorted JSON serialization so that logically-equal objects
 * serialize identically regardless of key insertion order. This canonical form
 * is the spine of content addressing — see spec/runtime-laws.md and
 * spec/knowledge-model.md.
 *
 * Rules (pinned so hashes are stable across runs/machines):
 * - Object keys are emitted in sorted order, recursively.
 * - `undefined` object properties are omitted (matching JSON.stringify).
 * - `undefined` array elements become `null` (matching JSON.stringify).
 * - Numbers use JS default formatting; NaN/Infinity are rejected.
 */
export function canonicalize(value: unknown): string {
  return serialize(value);
}

function serialize(value: unknown): string {
  if (value === null) return 'null';

  const t = typeof value;
  if (t === 'number') {
    if (!Number.isFinite(value as number)) {
      throw new Error(`Cannot hash non-finite number: ${String(value)}`);
    }
    return JSON.stringify(value);
  }
  if (t === 'boolean' || t === 'string') return JSON.stringify(value);
  if (t === 'undefined' || t === 'function') return 'null';

  if (Array.isArray(value)) {
    return `[${value.map(v => (v === undefined ? 'null' : serialize(v))).join(',')}]`;
  }

  // Plain object: sort keys, drop undefined-valued properties.
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj).filter(k => obj[k] !== undefined).sort();
  const body = keys.map(k => `${JSON.stringify(k)}:${serialize(obj[k])}`).join(',');
  return `{${body}}`;
}

/** Content address of any JSON-serializable value: "sha256:<hex>". */
export function hashContent(content: unknown): Hash {
  const digest = createHash('sha256').update(canonicalize(content)).digest('hex');
  return `sha256:${digest}`;
}
