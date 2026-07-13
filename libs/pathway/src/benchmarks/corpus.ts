import { hashContent } from '../cas/hash.js';

export interface Corpus<TFixture, TExpected> {
  readonly id: string;
  readonly version: string;
  readonly fixtures: readonly TFixture[];
  readonly expected: readonly TExpected[];
}

export interface CorpusCase<TFixture, TExpected> {
  readonly id: string;
  readonly fixture: TFixture;
  readonly expected: TExpected;
}

export function getCorpusHash<TFixture, TExpected>(
  corpus: Corpus<TFixture, TExpected>
): string {
  return hashContent(corpus);
}

export function pairCorpusCases<TFixture extends { readonly id: string }, TExpected extends { readonly id: string }>(
  corpus: Corpus<TFixture, TExpected>
): CorpusCase<TFixture, TExpected>[] {
  const expectedById = new Map(corpus.expected.map(expected => [expected.id, expected]));

  return corpus.fixtures.map(fixture => {
    const expected = expectedById.get(fixture.id);
    if (!expected) {
      throw new Error(`Corpus ${corpus.id} is missing expected result for fixture ${fixture.id}.`);
    }

    return { id: fixture.id, fixture, expected };
  });
}
