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
