import { describe, expect, it } from 'vitest';
import { checkInvariants, ContractStep, Invariant } from '../src/skills/contract.js';

const ALL: readonly Invariant[] = [{ kind: 'protect_uncommitted_input' }, { kind: 'submit_once' }];
const typed = (text: string): ContractStep => ({ action: 'type', text, status: 'completed' });
const clicked = (target: string, status: ContractStep['status'] = 'completed'): ContractStep => ({
  action: 'click',
  target,
  status,
});
const check = (target: string, recentSteps: ContractStep[]) =>
  checkInvariants(ALL, { action: 'click', target, recentSteps });

describe('protect_uncommitted_input', () => {
  const draft = [clicked("What's on your mind?"), typed('A draft worth keeping')];

  it('refuses a dismissal over a pending draft and says why', () => {
    const violation = check('Close', draft);
    expect(violation?.invariant).toBe('protect_uncommitted_input');
    expect(violation?.message).toContain('A draft worth keeping');
  });

  it('allows the Close friends audience, which is not a dismissal', () => {
    expect(check('Close friends', draft)).toBeNull();
  });

  it('allows closing once the draft is committed', () => {
    expect(check('Close', [...draft, clicked('Post')])).toBeNull();
  });

  it('ignores drafts too short to be real work', () => {
    expect(check('Close', [typed('ok')])).toBeNull();
  });

  it('does not treat a refused submit as a commit', () => {
    expect(check('Close', [...draft, clicked('Post', 'refused')])?.invariant).toBe(
      'protect_uncommitted_input'
    );
  });
});

describe('submit_once', () => {
  it('refuses publishing the same input twice', () => {
    expect(check('Post', [typed('Hello everyone out there'), clicked('Post')])?.invariant).toBe('submit_once');
  });

  it('allows a submit for new input', () => {
    expect(
      check('Post', [typed('First post of the day'), clicked('Post'), typed('Second post of the day')])
    ).toBeNull();
  });

  it('allows the first submit', () => {
    expect(check('Post', [typed('Hello everyone out there')])).toBeNull();
  });

  it('does not count a submit made before anything was typed', () => {
    // An empty draft's Post button is disabled; clicking it published nothing.
    expect(check('Post', [clicked('Post'), typed('Hello everyone out there')])).toBeNull();
    expect(check('Post', [clicked('Post'), clicked('Post')])).toBeNull();
  });

  it('refuses publishing the same text again after retyping it', () => {
    expect(
      check('Post', [typed('Hello everyone out there'), clicked('Post'), typed('hello  everyone out there')])
        ?.invariant
    ).toBe('submit_once');
  });
});
