import type { SkillGuidance } from '../../skills/contract.js';
import type { AgentAction } from './composer-environment.js';

export interface HistoryEntry {
  /** Null when the agent's reply was not a valid action. */
  readonly action: AgentAction | null;
  readonly output: string;
  readonly refused: boolean;
}

export interface AgentTurn {
  readonly goal: string;
  readonly screen: string;
  readonly history: readonly HistoryEntry[];
  /** Prose guidance for this arm, or undefined for the no-skill arm. */
  readonly guidance?: SkillGuidance;
  /** Paired runs share a seed across arms. */
  readonly seed: number;
}

export interface AgentDecision {
  /** Null when the reply could not be parsed into an action. */
  readonly action: AgentAction | null;
  readonly raw: string;
  readonly modelCalls: number;
  readonly promptTokens: number;
  readonly completionTokens: number;
  /** Who chose the action: the model, or a learned workflow followed without it. */
  readonly source?: 'model' | 'pathway';
}

export interface Agent {
  readonly id: string;
  decide(turn: AgentTurn): Promise<AgentDecision>;
}

/**
 * Replays a fixed trajectory. Used by the deterministic profile to check the
 * instrument (environment, contract and scoring), not the model.
 */
export class ScriptedAgent implements Agent {
  readonly id = 'scripted';
  private index = 0;

  constructor(private readonly actions: readonly AgentAction[]) {}

  async decide(): Promise<AgentDecision> {
    const action = this.actions[this.index++] ?? { action: 'done' as const };
    return { action, raw: JSON.stringify(action), modelCalls: 0, promptTokens: 0, completionTokens: 0 };
  }
}

export interface OpenAiCompatibleAgentOptions {
  /** e.g. http://127.0.0.1:8787/v1 for a local Avalon gateway. */
  readonly baseUrl: string;
  readonly model: string;
  readonly apiKey?: string;
  readonly temperature: number;
  readonly maxTokens: number;
  readonly timeoutMs: number;
  /** Most recent actions shown to the model. */
  readonly historyWindow: number;
}

const SYSTEM_PROMPT = `You operate a web browser for the user. Each turn you see the goal, your recent actions and the current screen.

Reply with exactly one JSON object and nothing else, one of:
{"action":"click","target":"<element label exactly as listed>"}
{"action":"click","target":"<label>","anchor":"<text of the post it belongs to>"}  (when several elements share a label)
{"action":"type","text":"<text to type into the focused field>"}
{"action":"clear"}
{"action":"wait"}
{"action":"done","summary":"<what you accomplished>"}

Rules: one action per reply. Typing goes into the text field that is open on screen. Reply "done" once the goal is complete.`;

/** Drives an OpenAI-compatible chat completions endpoint, such as Avalon or LM Studio. */
export class OpenAiCompatibleAgent implements Agent {
  readonly id: string;

  constructor(private readonly options: OpenAiCompatibleAgentOptions) {
    this.id = options.model;
  }

  async decide(turn: AgentTurn): Promise<AgentDecision> {
    const system = turn.guidance ? `${SYSTEM_PROMPT}\n\n${turn.guidance.plan}` : SYSTEM_PROMPT;
    const response = await fetch(`${this.options.baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.options.apiKey ? { Authorization: `Bearer ${this.options.apiKey}` } : {}),
      },
      body: JSON.stringify({
        model: this.options.model,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: renderTurn(turn, this.options.historyWindow) },
        ],
        temperature: this.options.temperature,
        max_tokens: this.options.maxTokens,
        seed: turn.seed,
      }),
      signal: AbortSignal.timeout(this.options.timeoutMs),
    });

    const body = (await response.json().catch(() => ({}))) as {
      choices?: { message?: { content?: string } }[];
      usage?: { prompt_tokens?: number; completion_tokens?: number };
      error?: { message?: string };
      detail?: string;
    };
    if (!response.ok || !body.choices?.length) {
      const reason = body.error?.message || body.detail || `HTTP ${response.status}`;
      throw new Error(`Model ${this.options.model} at ${this.options.baseUrl} failed: ${reason}`);
    }

    const raw = body.choices[0].message?.content ?? '';
    return {
      action: parseAction(raw),
      raw,
      modelCalls: 1,
      promptTokens: body.usage?.prompt_tokens ?? 0,
      completionTokens: body.usage?.completion_tokens ?? 0,
    };
  }
}

export function renderTurn(turn: AgentTurn, historyWindow: number): string {
  const lines = [`Goal: ${turn.goal}`];
  if (turn.guidance?.react) lines.push('', turn.guidance.react);

  const recent = turn.history.slice(-historyWindow);
  lines.push('', 'Recent actions:');
  if (!recent.length) lines.push('  (none yet)');
  const offset = turn.history.length - recent.length;
  recent.forEach((entry, index) =>
    lines.push(`  ${offset + index + 1}. ${describeAction(entry.action)} -> ${entry.output}`)
  );

  lines.push('', 'Current screen:', turn.screen, '', 'Your next action as JSON:');
  return lines.join('\n');
}

export function describeAction(action: AgentAction | null): string {
  if (!action) return 'invalid reply';
  switch (action.action) {
    case 'click':
      return action.anchor ? `click "${action.target}" on the post "${action.anchor}"` : `click "${action.target}"`;
    case 'type':
      return `type "${action.text}"`;
    default:
      return action.action;
  }
}

/**
 * The last well-formed action in a model reply. Last, not first: servers that
 * echo the prompt put its example actions ahead of the answer, and a model
 * that drafts before answering puts its final choice at the end.
 */
export function parseAction(raw: string): AgentAction | null {
  const text = raw.replace(/<think>[\s\S]*?<\/think>/g, '');
  let found: AgentAction | null = null;
  for (let start = text.indexOf('{'); start !== -1; start = text.indexOf('{', start + 1)) {
    let depth = 0;
    let inString = false;
    for (let i = start; i < text.length; i++) {
      const ch = text[i];
      if (inString) {
        if (ch === '\\') i++;
        else if (ch === '"') inString = false;
      } else if (ch === '"') inString = true;
      else if (ch === '{') depth++;
      else if (ch === '}' && --depth === 0) {
        found = toAction(text.slice(start, i + 1)) ?? found;
        break;
      }
    }
  }
  return found;
}

function toAction(json: string): AgentAction | null {
  let value: Record<string, unknown>;
  try {
    value = JSON.parse(json);
  } catch {
    return null;
  }
  const kind = typeof value.action === 'string' ? value.action.toLowerCase() : '';
  if (kind === 'click' && typeof value.target === 'string' && value.target.trim()) {
    return typeof value.anchor === 'string' && value.anchor.trim()
      ? { action: 'click', target: value.target, anchor: value.anchor }
      : { action: 'click', target: value.target };
  }
  if (kind === 'type' && typeof value.text === 'string') return { action: 'type', text: value.text };
  if (kind === 'clear' || kind === 'wait') return { action: kind };
  if (kind === 'done') {
    return { action: 'done', summary: typeof value.summary === 'string' ? value.summary : undefined };
  }
  return null;
}
