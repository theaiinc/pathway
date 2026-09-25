import { describe, expect, it } from 'vitest';
import { hashContent } from '../src/cas/hash.js';
import { goalIntent, goalSlots, RunReport, screenHash, SkillWorkflowMemory } from '../src/skills/workflow-memory.js';

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
      { action: 'type', text: '{{1}}' },
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

describe('SkillWorkflowMemory for live executors', () => {
  it('survives a snapshot round trip, provenance included', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run());
    memory.learn(run({ goal: 'Post "Hello there, everyone" on Facebook, to Close friends.' }));
    const restored = SkillWorkflowMemory.restore(JSON.parse(JSON.stringify(memory.snapshot())));

    const { id } = restored.recall('compose', GOAL, FEED)!;
    // The derivations came back too: one changed screen still invalidates both.
    expect(restored.check(id, 1, hashContent('redesigned composer'), GOAL)).toMatchObject({ invalidated: 2 });
    expect(SkillWorkflowMemory.restore(restored.snapshot()).recall('compose', GOAL, FEED)).toBeNull();
  });

  it('lists candidates for a goal regardless of start screen', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run());
    memory.learn(run({ steps: run().steps.map(step => (step.screen === FEED ? { ...step, screen: hashContent('other feed') } : step)) }));
    expect(memory.candidates('compose', 'Post "Anything at all here" on Facebook.')).toHaveLength(2);
    expect(memory.candidates('compose', 'Delete my last post on Facebook.')).toHaveLength(0);
  });

  it('refuses a workflow that types text the goal did not ask for', () => {
    const memory = new SkillWorkflowMemory();
    const stale = run({
      steps: [
        { step: { action: 'click', target: 'Open composer' }, screen: FEED, effective: true },
        { step: { action: 'type', text: 'Yesterday\'s announcement text' }, screen: COMPOSER, effective: true },
      ],
    });
    expect(memory.learn(stale)).toEqual({ retained: false, reason: 'types text the goal did not ask for' });
  });

  it('templates text after a colon when the goal has no quotes', () => {
    const memory = new SkillWorkflowMemory();
    const goal = 'Post on Facebook: see you all tonight';
    memory.learn(run({
      goal,
      steps: [
        { step: { action: 'click', target: 'Open composer' }, screen: FEED, effective: true },
        { step: { action: 'type', text: 'see you all tonight' }, screen: COMPOSER, effective: true },
      ],
    }));
    const [candidate] = memory.candidates('compose', 'Post on Facebook: lunch is at noon');
    expect(memory.check(candidate.id, 1, COMPOSER, 'Post on Facebook: lunch is at noon')).toEqual({
      kind: 'follow',
      step: { action: 'type', text: 'lunch is at noon' },
    });
  });

  it('can be told to stop trusting a workflow', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run());
    const { id } = memory.recall('compose', GOAL, FEED)!;
    expect(memory.invalidate(id)).toBe(true);
    expect(memory.recall('compose', GOAL, FEED)).toBeNull();
  });
});

describe('goal slots', () => {
  const EDIT = 'Edit my Facebook post that starts with "Shipping v2.3" so it says "Shipping v2.4 today"';

  it('abstracts every quoted value, in order', () => {
    expect(goalSlots(EDIT)).toEqual(['Shipping v2.3', 'Shipping v2.4 today']);
    expect(goalIntent(EDIT)).toBe('Edit my Facebook post that starts with "{{1}}" so it says "{{2}}"');
  });

  it('templates anchors as well as typed text, and fills both for a new goal', () => {
    const memory = new SkillWorkflowMemory();
    memory.learn(run({
      goal: EDIT,
      steps: [
        { step: { action: 'click', target: 'Actions for this post', anchor: 'Shipping v2.3' }, screen: FEED, effective: true },
        { step: { action: 'type', text: 'Shipping v2.4 today' }, screen: COMPOSER, effective: true },
      ],
    }));
    const other = 'Edit my Facebook post that starts with "Team lunch" so it says "Lunch is on Friday"';
    const { id } = memory.recall('compose', other, FEED)!;
    expect(memory.check(id, 0, FEED, other)).toEqual({ kind: 'follow', step: { action: 'click', target: 'Actions for this post', anchor: 'Team lunch' } });
    expect(memory.check(id, 1, COMPOSER, other)).toEqual({ kind: 'follow', step: { action: 'type', text: 'Lunch is on Friday' } });
    // A goal that supplies fewer values than the workflow needs gets nothing.
    expect(memory.recall('compose', 'Edit my Facebook post that starts with "Team lunch"', FEED)).toBeNull();
  });

  it('still fills {{text}} from workflows saved before slots were numbered', () => {
    // A 0.1 snapshot: the workflow says {{text}}, and its id is its own hash.
    const workflow = {
      skillId: 'compose',
      intent: 'Post "{{text}}" on Facebook',
      steps: [
        { step: { action: 'click', target: 'Open composer' }, screen: FEED },
        { step: { action: 'type', text: '{{text}}' }, screen: COMPOSER },
      ],
    };
    const id = hashContent(workflow);
    const restored = SkillWorkflowMemory.restore({
      version: 1,
      workflows: [workflow],
      derivations: [{ output: id, step: { kind: 'learn-skill-workflow', defHash: hashContent('v') }, inputs: [FEED, COMPOSER], at: 0 }],
      active: [[`compose\nPost "{{text}}" on Facebook\n${FEED}`, id]],
      invalid: [],
      stats: { proposed: 1, retained: 1, rejected: 0, invalidated: 0 },
    });
    const goal = 'Post "Something new to say" on Facebook';
    const [candidate] = restored.candidates('compose', goal);
    expect(restored.check(candidate.id, 1, COMPOSER, goal)).toEqual({
      kind: 'follow',
      step: { action: 'type', text: 'Something new to say' },
    });
  });
});
