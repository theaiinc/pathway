# PEAL Replay Model

Replay exists to make runtime behavior debuggable and regression-testable.

## Replay Inputs

Replay records should capture:

- Knowledge Snapshot version
- Context Objective
- selector version
- compiler version
- pass set version
- cost model version
- emitter version
- planner version
- validation policy version
- tool and LLM adapter metadata
- emitted context target
- execution plan
- execution trace

## Deterministic Boundary

The compiler should be deterministic. The intended non-deterministic boundary is the
planner/model or external tool. Replay must isolate that boundary by recording adapter
metadata and invocations.

## Regression Use

Golden replay fixtures should allow PEAL to compare compiler output, diagnostics,
selected context, emitted targets, plans, traces, audit findings, and candidate knowledge
across implementation changes.
