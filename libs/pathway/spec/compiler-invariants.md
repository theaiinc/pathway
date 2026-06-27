# PEAL Compiler Invariants

The Context Compiler transforms ephemeral Context IR. It does not mutate the Knowledge
Graph, execute plans, call tools, or write durable knowledge.

## Context IR Validity

A valid Context IR satisfies:

- It is a DAG unless a pass explicitly declares and resolves cycles.
- Every node has stable identity, fingerprint, source, version, and payload.
- Every edge references existing nodes.
- No provenance reference points to missing evidence.
- Cost is computed or explicitly marked unknown by the active Cost Model.
- Objective, snapshot version, compiler version, pass set version, cost model version, and
  emitter version are attached.

## Pass Requirements

Every pass declares:

- name
- version
- kind: analysis, transform, optimization, or emission
- dependencies
- invariants it preserves
- invariants it invalidates

Every pass returns diagnostics and metrics. Transforming passes also return optimization
provenance that explains what changed and why.

## Determinism

Pass ordering must be deterministic for the same registered pass set and dependencies.

No pass may depend on wall-clock time, random numbers, network calls, process state, or
LLM output unless that dependency is explicitly captured in the Context IR or pass
configuration.

## Validation

Implementations should validate Context IR before and after passes in debug and demo
modes. Invalid IR should stop compilation unless the caller explicitly allows degraded
output.
