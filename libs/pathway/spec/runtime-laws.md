# PEAL Runtime Laws

These laws are normative. If implementation and this document disagree, either fix the
implementation or intentionally revise the law.

## Law 1 — Immutability

Durable knowledge is immutable.

Optimizers, reducers, auditors, and learners create new versions or candidate knowledge.
They do not mutate existing durable knowledge nodes.

## Law 2 — Purity

The Context Compiler is pure.

Given the same Knowledge Snapshot, Context Objective, compiler version, pass set, cost
model, emitter version, and Context IR, compilation must produce identical output and
diagnostics.

## Law 3 — Separation

Each subsystem has one responsibility:

- Providers collect.
- Selectors choose.
- Compiler passes optimize context.
- Emitters produce typed context targets.
- Planners create execution plans.
- Executors execute plans.
- Auditors evaluate traces.
- Learners propose candidate knowledge.
- Validators accept or reject candidate knowledge.

No subsystem should silently perform another subsystem's responsibility.

## Law 4 — Evidence

Every durable knowledge node must have evidence provenance.

Evidence may point to execution traces, tool calls, source artifacts, user instructions,
external sources, compiler feedback, audit findings, or prior knowledge. No evidence means
no durable write.

## Law 5 — Skepticism

Findings do not become durable knowledge directly.

The only valid lifecycle is:

```text
Finding -> Candidate Knowledge -> Validation -> Durable Knowledge
```

Validation may use confidence thresholds, repeated observations, human approval,
regression checks, or consensus across runs.

## Law 6 — Replayability

Every execution should capture enough versioned inputs to replay:

- Knowledge Snapshot version
- Context Objective version
- selector version
- compiler version
- pass set version
- cost model version
- emitter version
- planner version
- validation policy version
- tool and model adapter metadata
- execution trace

## Law 7 — Optimization Safety

Optimization may reduce size, redundancy, latency, dollars, or other costs. It must not
intentionally change semantics.

When a pass cannot preserve semantics, it must declare the invariant it invalidates and
emit diagnostics.
