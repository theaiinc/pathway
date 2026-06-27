# PEAL Execution Model

Execution is modeled as a trace. Simulation and real execution must produce the same
trace shape so auditors and replay tools can evaluate both paths uniformly.

## Execution Plan

Execution Plans are created by planners, not by the Context Compiler.

The compiler emits typed context targets such as Planner Context. A planner may be
symbolic, LLM-backed, or hybrid, and turns that context into an Execution Plan.

## Execution Trace

An Execution Trace records:

- execution events
- state transitions
- tool invocations
- LLM invocations
- artifacts
- diagnostics

The runtime owns traces. Auditors evaluate traces and emit findings.

## Simulation

Simulation predicts outcomes from an Execution Plan and a context target. It returns an
Execution Trace with simulated events.

## Audit

Audit is not logging. Audit is a pass-like pipeline over Execution Traces.

Auditors may produce findings about constraints, safety, budget, performance, reasoning,
context, or failures. Findings flow to Learning as Candidate Knowledge proposals.

## Compiler Feedback

Audit may produce Compiler Feedback when an execution outcome appears related to a
compiler choice, such as dropping a node that later proved necessary.
