# PEAL Benchmark Specification

## Status

Normative measurement contract for PEAL benchmark suites.

## Purpose

PEAL benchmarks measure reasoning infrastructure, not model intelligence. The runtime,
selector, compiler, planner, simulator, auditor, learner, and replay subsystems must
emit enough artifacts for benchmarks to observe behavior without changing runtime code
paths.

## Benchmark Categories

### Infrastructure Benchmarks

Infrastructure benchmarks are deterministic and safe for CI. They measure the Knowledge
Runtime, Selection Engine, Context Compiler, Replay, Stability, Mutation handling, and
Context Quality when no LLM call is required.

Required properties:

- Same input corpus and seed must produce the same result hashes.
- Reports must include benchmark provenance.
- Failures must identify the violated invariant.

### Agent Benchmarks

Agent benchmarks may involve an LLM and are statistical. They measure planning,
execution, simulation, audit, learning, and quality outcomes over repeated runs.

Required properties:

- Reports must include model, planner, seed, corpus, and benchmark versions.
- Metrics must be interpreted with run counts and variance where applicable.
- Agent benchmarks must not block deterministic CI profiles.

## Benchmark Contract

Every benchmark must declare:

- The invariant being measured.
- The required runtime artifacts.
- The normative metrics.
- The regression criteria.
- The corpus version and expected result version.

Every result must include:

- Benchmark ID and version.
- Subsystem and category.
- Benchmark profile.
- Corpus version.
- Git SHA when available.
- Knowledge snapshot hash when available.
- Compiler version and pass set when relevant.
- Planner and model identifiers when relevant.
- Seed and runtime configuration when relevant.

## Corpus Contract

A benchmark corpus is versioned data:

```ts
interface Corpus<TFixture, TExpected> {
  readonly id: string;
  readonly version: string;
  readonly fixtures: readonly TFixture[];
  readonly expected: readonly TExpected[];
}
```

Fixtures are inputs. Expected entries are normative outputs or acceptance criteria. A
benchmark may emit diagnostics beyond the expected result, but the pass/fail decision
must trace back to the corpus expectation.

## Profiles

- `ci`: deterministic infrastructure checks only.
- `nightly`: full suite, including live services and statistical agent checks.
- `research`: experimental selectors, compiler passes, planners, and profiles.

## Retrieval Benchmark

Invariant: a query should retrieve the expected workflow, or no workflow when the corpus
marks the query as negative.

Required artifacts:

- Query.
- Candidate vector IDs.
- Candidate raw distances.
- Candidate raw similarities.
- Candidate final scores.
- Selected workflow ID or rejection reason.
- Timing.

Normative metrics:

- Top-1 accuracy.
- Recall@k.
- MRR.
- Precision.
- False positives.
- False negatives.
- Median and p95 latency.

Regression criteria:

- Any previously passing deterministic case fails.
- Aggregate deterministic status changes from `passed` to `warning` or `failed`.
- Candidate diagnostics become incomplete.

## Compilation Benchmark

Invariant: compilation preserves required semantics while reducing or organizing context
according to the objective.

Normative metrics:

- Token reduction.
- Node retention.
- Optimization ratio.
- Compile latency.
- Deterministic output hash.
- Semantic preservation score when an evaluator exists.

## Context Quality Benchmark

Invariant: compiled planner context should contain useful context and avoid unnecessary
waste.

Normative metrics:

- Useful context.
- Unused context.
- Missing context.
- Waste ratio.

## Mutation Benchmark

Invariant: selectors, compilers, and auditors must degrade predictably when graph
corruption appears.

Required mutation classes:

- Deleted provenance.
- Duplicate node.
- Cycle.
- Broken edge.
- Wrong fingerprint.
- Version mismatch.
- Dangling reference.

Regression criteria:

- Corruption causes an unhandled exception where a diagnostic is expected.
- A corrupted graph is accepted as valid without a warning.
- Mutation handling becomes nondeterministic.

## Skills Benchmark

Invariant: a skill must beat its own absence. A skill is a contract (rules the executor
enforces: when the skill applies, and what must never happen while it runs) joined with a
pathway (experience of how the task is done). Guidance prose that the model may ignore is
what a skill is before it has either.

The same tasks run in three arms, with the same seed at the same step in each:

- `no-skill`: the model alone.
- `prose`: the skill's plan and step guidance injected as Oasis Cognition injects it.
- `prose+contract`: that prose, with the skill's invariants enforced by the executor.

Tasks run against a local composer fixture (`src/benchmarks/skills/composer-environment.ts`),
never a live site, because a benchmark that posts to a real account on every run is
destructive and not reproducible. The fixture reproduces the traps agents fall into: a Close
button beside a pending draft, "Close friends" in the audience menu, a Post button that stays
on screen while posting, and a Messenger chat whose "Close chat" is harmless.

Four measurements, because a skill can fail in four independent ways:

- Applicability: does the contract's `appliesWhen` fire on the right goals? Accuracy,
  precision, recall, false positives and negatives over a labelled goal set.
- Compliance: invariant violations per episode (executed actions the contract forbids),
  harmful actions per episode (a discarded draft or a duplicate post), and false refusals per
  episode (harmless actions the contract refused, which measure over-strictness).
- Efficacy: success rate, steps, tokens, model calls and wall clock, each compared across
  arms.
- Learning: success and steps across repeated runs. Not measured until skills are backed by
  a pathway; prose and contracts do not change between runs.

Profiles:

- `ci` replays scripted trajectories, each a known mistake, and asserts the fixture, contract
  and scoring report it exactly. This checks the instrument, not the model, and says nothing
  about whether a skill helps. Trajectories marked `knownGap` pin a contract defect, so that
  fixing it shows up as an expectation to update.
- `nightly` runs a real model through every task in every arm, `--runs` times. Arms are
  interleaved within each run so drift lands on all of them alike.

Comparisons (`prose` and `prose+contract` against `no-skill`, and `prose+contract` against
`prose`) report the success-rate difference with a Newcombe 95% interval. A difference whose
interval contains zero is `warning`: the skill costs context and has not shown a benefit. A
significantly positive difference is `passed`; a significantly negative one is `failed`.

Model endpoint: any OpenAI-compatible chat completions API, from `--base-url` or
`PATHWAY_SKILLS_BASE_URL`, and `--model` or `PATHWAY_SKILLS_MODEL`. Reasoning models should
be served with thinking off, or each step spends its token budget thinking.
`scripts/serve-avalon-model.sh` serves a model downloaded by Avalon that way, on the default
endpoint.

Recorded baselines live in `benchmarks/skills/baselines/`, one file per model, as the full
`--json` output including every episode's trace.

Regression criteria:

- A scripted trajectory is measured differently from its expectation.
- A comparison that was `passed` becomes `warning` or `failed` for the same model and corpus.
- False refusals rise: the contract has become stricter than the task allows.
