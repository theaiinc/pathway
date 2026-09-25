/**
 * Intervals for comparing benchmark arms. A model is non-deterministic, so a
 * single paired run is not evidence: a difference counts only when its
 * interval excludes zero.
 */

export interface Interval {
  readonly estimate: number;
  readonly low: number;
  readonly high: number;
}

const Z_95 = 1.959964;

/** Wilson score interval for a proportion; well behaved at 0/n and n/n. */
export function wilson(successes: number, n: number, z = Z_95): Interval {
  if (n === 0) return { estimate: 0, low: 0, high: 1 };
  const p = successes / n;
  const denominator = 1 + (z * z) / n;
  const centre = (p + (z * z) / (2 * n)) / denominator;
  const margin = (z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) / denominator;
  return { estimate: p, low: Math.max(0, centre - margin), high: Math.min(1, centre + margin) };
}

/**
 * Newcombe's hybrid score interval for p1 - p2 (method 10), built from the
 * two Wilson intervals. Unlike the normal approximation it stays inside
 * [-1, 1] and does not collapse to zero width when both arms are all-or-none.
 */
export function proportionDifference(s1: number, n1: number, s2: number, n2: number): Interval {
  const a = wilson(s1, n1);
  const b = wilson(s2, n2);
  const diff = a.estimate - b.estimate;
  return {
    estimate: diff,
    low: diff - Math.sqrt((a.estimate - a.low) ** 2 + (b.high - b.estimate) ** 2),
    high: diff + Math.sqrt((a.high - a.estimate) ** 2 + (b.estimate - b.low) ** 2),
  };
}

/** Welch-style normal interval for mean(a) - mean(b). Infinite when either arm has fewer than two samples. */
export function meanDifference(a: readonly number[], b: readonly number[]): Interval {
  const diff = average(a) - average(b);
  if (a.length < 2 || b.length < 2) return { estimate: diff, low: -Infinity, high: Infinity };
  const se = Math.sqrt(variance(a) / a.length + variance(b) / b.length);
  return { estimate: diff, low: diff - Z_95 * se, high: diff + Z_95 * se };
}

export function excludesZero(interval: Interval): boolean {
  return interval.low > 0 || interval.high < 0;
}

function average(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function variance(values: readonly number[]): number {
  const mean = average(values);
  return values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (values.length - 1);
}
