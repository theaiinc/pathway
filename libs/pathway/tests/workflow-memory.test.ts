import { describe, expect, it } from 'vitest';
import { hashContent } from '../src/cas/hash.js';
import { RunReport, screenHash, SkillWorkflowMemory } from '../src/skills/workflow-memory.js';

const FEED = hashContent('feed');
const COMPOSER = hashContent('composer');
const GOAL = 'Post "Hello there, everyone" on Facebook.';

function run(overrides: Partial<RunReport> = {}): RunReport {
  return {
    skillId: 'compose',
    goal: GOAL,
    success: true,
    invariantViolations: 0,
    harmfulActions: 0,
    evidence: 'trace:1',
    steps: [
      { step: { action: 'click', target: 'Open composer' }, screen: FEED, effective: true },
      { step: { action: 'click', target: 'Nothing here' }, screen: COMPOSER, effective: false },
      { step: { action: 'type', text: 'Hello there, everyone' }, screen: COMPOSER, effective: true },
      { step: { action: 'click', target: 'Post' }, screen: COMPOSER, effective: true },
    ],
    ...overrides,
  };
}

describe('SkillWorkflowMemory', () => {
  it('retains only what worked, with the typed text abstracted', () => {
    const memory = new SkillWorkflowMemory();
    expect(memory.learn(run()).retained).toBe(true);
    const recalled = memory.recall('compose', 'Post "Something else entirely" on Facebook.', FEED);
    expect(recalled?.workflow.steps.map(step => step.step)).toEqual([
      { action: 'click', target: 'Open composer' },
      { action: 'type', text: '{{text}}' },
      { action: 'click', target: 'Post' },
    ]);
  });

  it('fills the text back in from the goal it is followed for', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run());
    const { id } = memory.recall('compose', GOAL, FEED)!;
    expect(memory.check(id, 1, COMPOSER, 'Post "New words here" on Facebook.')).toEqual({
      kind: 'follow',
      step: { action: 'type', text: 'New words here' },
    });
  });

  it('rejects runs that failed or broke the contract', () => {
    const memory = new SkillWorkflowMemory();
    expect(memory.learn(run({ success: false })).reason).toBe('did not succeed');
    expect(memory.learn(run({ invariantViolations: 1 })).reason).toBe('broke the contract');
    expect(memory.learn(run({ harmfulActions: 1 })).reason).toBe('broke the contract');
    expect(memory.getStats()).toMatchObject({ proposed: 3, retained: 0, rejected: 3 });
  });

  it('applies a workflow only where its first screen matches', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run());
    expect(memory.recall('compose', GOAL, hashContent('another feed'))).toBeNull();
  });

  it('keeps the shorter of two workflows for the same start', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run());
    const longer = run({ steps: [...run().steps, { step: { action: 'wait' }, screen: COMPOSER, effective: true }] });
    expect(memory.learn(longer).retained).toBe(false);
  });

  it('invalidates every workflow derived from a screen that changed', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run());
    memory.learn(run({ goal: 'Post "Hello there, everyone" on Facebook, to Close friends.' }));
    const { id } = memory.recall('compose', GOAL, FEED)!;
    const check = memory.check(id, 1, hashContent('redesigned composer'), GOAL);
    expect(check).toMatchObject({ kind: 'invalidated', invalidated: 2 });
    expect(memory.recall('compose', GOAL, FEED)).toBeNull();
  });

  it('fingerprints structure, not content', () => {
    const screen = (draft: string) => `Dialog: Create post\nText field contains: "${draft}"\nElements:\n  [1] "Close"\n  [2] "Post"`;
    expect(screenHash(screen('one'))).toBe(screenHash(screen('two')));
    expect(screenHash(screen('one'))).not.toBe(screenHash(screen('one').replace('"Post"', '"Publish"')));
  });
});
