import type { Hash } from '../../cas/hash.js';
import type { SkillGuidance } from '../../skills/contract.js';
import { screenHash, SkillWorkflowMemory } from '../../skills/workflow-memory.js';
import type { Agent, AgentDecision, AgentTurn } from './agents.js';
import type { AgentAction } from './composer-environment.js';

export interface PathwayAgentOptions {
  readonly memory: SkillWorkflowMemory;
  readonly skillId: string;
  /**
   * What the model sees when it is asked: the skill's plan guidance only. The
   * step prose (react guidance) is what the workflow replaces.
   */
  readonly guidance?: SkillGuidance;
  /** Check each step's screen before following it. Off only to show what that prevents. */
  readonly verifyScreens?: boolean;
}

/**
 * Follows the skill's learned workflow while the screens match the ones it
 * was learned on, without calling the model; asks the model otherwise. One
 * instance per episode.
 */
export class PathwayAgent implements Agent {
  readonly id: string;
  private following: { id: Hash; index: number } | null = null;
  private started = false;
  invalidations = 0;

  constructor(
    private readonly inner: Agent,
    private readonly options: PathwayAgentOptions
  ) {
    this.id = inner.id;
  }

  async decide(turn: AgentTurn): Promise<AgentDecision> {
    if (!this.started) {
      this.started = true;
      const recalled = this.options.memory.recall(this.options.skillId, turn.goal, screenHash(turn.screen));
      this.following = recalled ? { id: recalled.id, index: 0 } : null;
    }

    // A refusal means the executor would not take the workflow's step: stop
    // following and let the model work from here.
    if (this.following && turn.history.at(-1)?.refused) this.following = null;

    if (this.following) {
      const check = this.options.memory.check(
        this.following.id,
        this.following.index,
        screenHash(turn.screen),
        turn.goal,
        this.options.verifyScreens ?? true
      );
      if (check.kind === 'follow') {
        this.following.index++;
        return {
          // Workflows learned here hold this benchmark's own actions.
          action: check.step as AgentAction,
          raw: '[pathway]',
          modelCalls: 0,
          promptTokens: 0,
          completionTokens: 0,
          source: 'pathway',
        };
      }
      if (check.kind === 'invalidated') this.invalidations++;
      this.following = null;
    }

    const planOnly = this.options.guidance ? { plan: this.options.guidance.plan, react: '' } : undefined;
    const decision = await this.inner.decide({ ...turn, guidance: planOnly });
    return { ...decision, source: 'model' };
  }
}
