import { hashContent } from '../../cas/hash.js';
import { RunReport, screenHash, SkillWorkflowMemory, WorkflowStepAction } from '../../skills/workflow-memory.js';
import type { BenchmarkCaseResult } from '../benchmark.js';
import { ScriptedAgent } from './agents.js';
import { AgentAction, ComposerEnvironment, ComposerTaskFixture } from './composer-environment.js';
import { Arm, EpisodeResult, runEpisode } from './episode.js';
import { PathwayAgent } from './pathway-agent.js';
import type { SkillBenchmarkCorpus } from './skill-benchmark.js';

/** A finished episode, as the workflow learner sees it. */
export function toRunReport(skillId: string, goal: string, episode: EpisodeResult): RunReport {
  return {
    skillId,
    goal,
    success: episode.outcome.success,
    invariantViolations: episode.invariantViolations,
    harmfulActions: episode.harmfulActions,
    steps: episode.trace
      .filter((step): step is typeof step & { action: AgentAction } => step.action !== null)
      .map(step => ({ step: toWorkflowStep(step.executed ?? step.action), screen: step.screen, effective: step.effective })),
    evidence: hashContent(episode.trace),
  };
}

function toWorkflowStep(action: AgentAction): WorkflowStepAction {
  return action.action === 'done' ? { action: 'done' } : action;
}

const TRIGGER = "What's on your mind, Alex?";

/**
 * Deterministic checks of the pathway machinery with scripted agents: what is
 * retained, what is followed without the model, and what a changed page
 * invalidates. Like the trajectories, they check the instrument, not a model.
 */
export async function runPathwayCases(
  corpus: SkillBenchmarkCorpus,
  maxSteps: number
): Promise<{ cases: BenchmarkCaseResult[]; metrics: Record<string, number> }> {
  const task = (id: string) => {
    const found = corpus.tasks.find(t => t.id === id);
    if (!found) throw new Error(`Pathway cases need task ${id} in the corpus.`);
    return found;
  };
  const basic = task('basic-post');
  const closeFriends = task('close-friends-post');
  const redesigned = (t: ComposerTaskFixture): ComposerTaskFixture => ({
    ...t,
    id: `${t.id}@redesign`,
    setup: { ...t.setup, labels: 'redesign' },
  });
  const otherText = 'Office closed on Friday for the holiday.';
  const basicOtherText: ComposerTaskFixture = {
    ...basic,
    id: `${basic.id}@other-text`,
    goal: basic.goal.replace(basic.success.text, otherText),
    success: { ...basic.success, text: otherText },
  };

  const skillId = corpus.skill.id;
  const enforced: Arm = { id: 'contract+pathway', guidance: corpus.skill.guidance, enforce: true };
  const run = (t: ComposerTaskFixture, agent: ScriptedAgent | PathwayAgent, arm = enforced) =>
    runEpisode({ task: t, agent, arm, invariants: corpus.skill.contract.invariants, run: 0, seed: 0, maxSteps });
  const follow = (memory: SkillWorkflowMemory, actions: AgentAction[] = [], verifyScreens = true) =>
    new PathwayAgent(new ScriptedAgent(actions), { memory, skillId, guidance: corpus.skill.guidance, verifyScreens });

  const post = (t: ComposerTaskFixture, trigger = TRIGGER, button = 'Post'): AgentAction[] => [
    { action: 'click', target: trigger },
    { action: 'type', text: t.success.text },
    { action: 'click', target: button },
    { action: 'wait' },
    { action: 'done' },
  ];
  const postToCloseFriends: AgentAction[] = [
    { action: 'click', target: TRIGGER },
    { action: 'type', text: closeFriends.success.text },
    { action: 'click', target: 'Audience: Friends' },
    { action: 'click', target: 'Close friends' },
    { action: 'click', target: 'Done' },
    { action: 'click', target: 'Post' },
    { action: 'wait' },
    { action: 'done' },
  ];

  const cases: BenchmarkCaseResult[] = [];
  const check = async (id: string, description: string, body: () => Promise<string[]>) => {
    const startedAt = Date.now();
    const failures = await body();
    cases.push({
      id: `pathway/${id}`,
      status: failures.length ? 'failed' : 'passed',
      metrics: {},
      message: failures.length ? failures.join('; ') : description,
      durationMs: Date.now() - startedAt,
    });
  };
  const expect = (failures: string[], label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected) failures.push(`${label}: expected ${expected}, measured ${actual}`);
  };

  await check(
    'learn-then-follow',
    'A contract-clean success is retained, then followed without the model, for new text too.',
    async () => {
      const failures: string[] = [];
      const memory = new SkillWorkflowMemory();
      const first = await run(basic, follow(memory, post(basic)));
      expect(failures, 'first run model steps', first.pathwaySteps, 0);
      expect(failures, 'retained', memory.learn(toRunReport(skillId, basic.goal, first)).retained, true);

      const second = await run(basicOtherText, follow(memory));
      expect(failures, 'second run success', second.outcome.success, true);
      expect(failures, 'second run steps from the workflow', second.pathwaySteps, second.steps);
      return failures;
    }
  );

  await check(
    'contract-rejects-lucky-run',
    'A run that succeeded while breaking an invariant is not retained.',
    async () => {
      const failures: string[] = [];
      const memory = new SkillWorkflowMemory();
      // Closes over the draft (a violation), backs out, then posts anyway.
      const lucky = await run(
        basic,
        new ScriptedAgent([
          { action: 'click', target: TRIGGER },
          { action: 'type', text: basic.success.text },
          { action: 'click', target: 'Close' },
          { action: 'click', target: 'Continue editing' },
          { action: 'click', target: 'Post' },
          { action: 'wait' },
          { action: 'done' },
        ]),
        { id: 'prose', guidance: corpus.skill.guidance, enforce: false }
      );
      expect(failures, 'success', lucky.outcome.success, true);
      expect(failures, 'violations', lucky.invariantViolations, 1);
      const retention = memory.learn(toRunReport(skillId, basic.goal, lucky));
      expect(failures, 'retained', retention.retained, false);
      expect(failures, 'reason', retention.reason, 'broke the contract');
      return failures;
    }
  );

  await check(
    'redesign-invalidates',
    'Renamed controls invalidate every workflow learned on the old screen, and the model takes over without a stale click.',
    async () => {
      const failures: string[] = [];
      const memory = new SkillWorkflowMemory();
      for (const [t, actions] of [[basic, post(basic)], [closeFriends, postToCloseFriends]] as const) {
        memory.learn(toRunReport(skillId, t.goal, await run(t, follow(memory, [...actions]))));
      }
      const pathway = follow(memory, post(basic, TRIGGER, 'Publish'));
      const after = await run(redesigned(basic), pathway);
      expect(failures, 'invalidations seen', pathway.invalidations, 1);
      expect(failures, 'workflows invalidated', memory.getStats().invalidated, 2);
      expect(failures, 'stale workflow steps', after.stalePathwaySteps, 0);
      expect(failures, 'success', after.outcome.success, true);
      const feed = screenHash(new ComposerEnvironment(closeFriends).render());
      expect(failures, 'close friends still recalled', memory.recall(skillId, closeFriends.goal, feed), null);
      return failures;
    }
  );

  await check(
    'plain-replay-is-stale',
    'The same workflow replayed without screen checks clicks at controls that are gone: what the provenance check prevents.',
    async () => {
      const failures: string[] = [];
      const memory = new SkillWorkflowMemory();
      memory.learn(toRunReport(skillId, basic.goal, await run(basic, follow(memory, post(basic)))));
      const replay = await run(redesigned(basic), follow(memory, [], false));
      if (replay.stalePathwaySteps < 1) failures.push(`stale workflow steps: expected at least 1, measured ${replay.stalePathwaySteps}`);
      expect(failures, 'success', replay.outcome.success, false);
      return failures;
    }
  );

  return {
    cases,
    metrics: {
      'pathway.cases': cases.length,
      'pathway.casesAsExpected': cases.filter(item => item.status === 'passed').length,
    },
  };
}
