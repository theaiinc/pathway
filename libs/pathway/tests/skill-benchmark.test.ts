import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getBenchmarkProfile } from '../src/benchmarks/profiles.js';
import { Agent, AgentTurn, parseAction } from '../src/benchmarks/skills/agents.js';
import { ComposerEnvironment } from '../src/benchmarks/skills/composer-environment.js';
import {
  loadSkillBenchmarkCorpus,
  SkillBenchmark,
} from '../src/benchmarks/skills/skill-benchmark.js';
import { proportionDifference, wilson } from '../src/benchmarks/skills/statistics.js';

const ci = getBenchmarkProfile('ci');

describe('SkillBenchmark (deterministic)', () => {
  it('measures every scripted trajectory as expected', async () => {
    const result = await new SkillBenchmark().run({ profile: ci });

    expect(result.subsystem).toBe('skills');
    expect(result.category).toBe('agent');
    expect(result.cases.filter(item => item.status === 'failed')).toEqual([]);
    expect(result.metrics['trajectories.measuredAsExpected']).toBe(result.metrics['trajectories.total']);
    expect(result.provenance.knowledgeSnapshotHash).toMatch(/^sha256:/);
    expect(result.provenance.modelId).toBeUndefined();
  });

  it('fails when a trajectory is measured differently from its expectation', async () => {
    const corpus = await loadSkillBenchmarkCorpus();
    const [first, ...rest] = corpus.trajectories;
    const broken = {
      ...corpus,
      trajectories: [
        { ...first, expected: { ...first.expected, enforced: { ...first.expected.enforced, success: false } } },
        ...rest,
      ],
    };
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'skills-corpus-'));
    const corpusPath = path.join(dir, 'corpus.json');
    await fs.writeFile(corpusPath, JSON.stringify(broken));

    const result = await new SkillBenchmark({ corpusPath }).run({ profile: ci });
    const failed = result.cases.find(item => item.id === `trajectory/${first.id}`);

    expect(result.status).toBe('failed');
    expect(failed?.message).toContain('enforced.success: expected false, measured true');
  });
});

/**
 * Posts correctly when given guidance, and otherwise double-clicks Post, the
 * mistake the skill's prose warns against.
 */
class GuidanceSensitiveAgent implements Agent {
  readonly id = 'fake-guidance-sensitive';

  async decide(turn: AgentTurn) {
    const text = turn.goal.match(/"([^"]+)"/)?.[1] ?? '';
    const done = turn.history.map(entry => entry.action);
    const posts = done.filter(action => action?.action === 'click' && action.target === 'Post').length;
    const typedAlready = done.some(action => action?.action === 'type');
    const action = turn.screen.includes('Dialog: Create post')
      ? !typedAlready
        ? { action: 'type' as const, text }
        : posts === 0 || (!turn.guidance && posts === 1)
          ? { action: 'click' as const, target: 'Post' }
          : { action: 'done' as const }
      : posts
        ? { action: 'done' as const }
        : { action: 'click' as const, target: "What's on your mind, Alex?" };
    return { action, raw: JSON.stringify(action), modelCalls: 1, promptTokens: 10, completionTokens: 5 };
  }
}

describe('SkillBenchmark (live, with a fake model)', () => {
  it('reports a significant success delta when guidance prevents the mistake', async () => {
    const corpus = await loadSkillBenchmarkCorpus();
    const basicOnly = { ...corpus, tasks: corpus.tasks.filter(task => task.id === 'basic-post') };
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'skills-corpus-'));
    const corpusPath = path.join(dir, 'corpus.json');
    await fs.writeFile(corpusPath, JSON.stringify(basicOnly));

    const result = await new SkillBenchmark({
      corpusPath,
      runs: 8,
      agentFactory: () => new GuidanceSensitiveAgent(),
    }).run({ profile: getBenchmarkProfile('nightly'), liveServices: true });

    expect(result.provenance.modelId).toBe('fake-guidance-sensitive');
    expect(result.metrics['no-skill.successRate']).toBe(0);
    expect(result.metrics['no-skill.duplicatePostsPerEpisode']).toBe(1);
    expect(result.metrics['prose.successRate']).toBe(1);
    expect(result.cases.find(item => item.id === 'compare/prose_vs_no-skill')?.status).toBe('passed');
    // Prose already prevents the mistake, so the contract adds nothing measurable here.
    expect(result.cases.find(item => item.id === 'compare/prose+contract_vs_prose')?.status).toBe('warning');
  });
});

describe('ComposerEnvironment', () => {
  it('publishes twice when Post is clicked while posting', async () => {
    const corpus = await loadSkillBenchmarkCorpus();
    const env = new ComposerEnvironment(corpus.tasks[0]);
    env.step({ action: 'click', target: "What's on your mind, Alex?" });
    env.step({ action: 'type', text: corpus.tasks[0].success.text });
    env.step({ action: 'click', target: 'Post' });
    expect(env.render()).toContain('Posting…');
    expect(env.step({ action: 'click', target: 'Post' }).harmful).toBe(true);
    expect(env.outcome().duplicatePosts).toBe(1);
  });

  it('resolves targets by label, index or unique fragment', async () => {
    const corpus = await loadSkillBenchmarkCorpus();
    const env = new ComposerEnvironment(corpus.tasks[0]);
    expect(env.resolveTarget('"What\'s on your mind, Alex?"')).toBe("What's on your mind, Alex?");
    expect(env.resolveTarget('1')).toBe("What's on your mind, Alex?");
    expect(env.resolveTarget('[1]')).toBe("What's on your mind, Alex?");
    expect(env.resolveTarget('[4] "Marketplace"')).toBe('Marketplace');
    expect(env.resolveTarget('market')).toBe('Marketplace');
    expect(env.resolveTarget('Post')).toBeNull();
  });
});

describe('parseAction', () => {
  it('finds the action among prose and reasoning', () => {
    expect(parseAction('<think>{"action":"done"}</think>Sure: {"action":"click","target":"Post"}')).toEqual({
      action: 'click',
      target: 'Post',
    });
  });

  it('takes the answer after an echoed prompt', () => {
    expect(
      parseAction('Reply with {"action":"click","target":"<label>"}\n\n> ...\n{"action":"wait"}')
    ).toEqual({ action: 'wait' });
  });

  it('handles braces inside strings', () => {
    expect(parseAction('{"action":"type","text":"use {curly} braces"}')).toEqual({
      action: 'type',
      text: 'use {curly} braces',
    });
  });

  it('rejects replies without a valid action', () => {
    expect(parseAction('I will click Post now.')).toBeNull();
    expect(parseAction('{"action":"click"}')).toBeNull();
  });
});

describe('statistics', () => {
  it('keeps Wilson intervals inside [0, 1] at the extremes', () => {
    const none = wilson(0, 10);
    expect(none.low).toBe(0);
    expect(none.high).toBeGreaterThan(0.2);
  });

  it('does not call 3/5 vs 2/5 a difference', () => {
    const diff = proportionDifference(3, 5, 2, 5);
    expect(diff.low).toBeLessThan(0);
    expect(diff.high).toBeGreaterThan(0);
  });

  it('calls 15/15 vs 0/15 a difference', () => {
    expect(proportionDifference(15, 15, 0, 15).low).toBeGreaterThan(0);
  });
});
