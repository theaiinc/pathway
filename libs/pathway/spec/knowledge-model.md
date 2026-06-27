# PEAL Knowledge Model

The Knowledge Runtime owns durable reasoning state. The Context Compiler only consumes
snapshots of that state.

## Knowledge Nodes

Knowledge nodes are immutable, versioned, and evidence-backed. A new observation or
optimization creates a new node version rather than mutating an existing version.

Required properties:

- stable id
- content fingerprint
- source
- version
- payload
- evidence references
- provenance metadata

## Candidate Knowledge

Audit findings and compiler feedback first become Candidate Knowledge.

Candidate Knowledge is not durable knowledge. It records a proposed write, the evidence
supporting it, confidence, and a validation status.

## Validation

Validation gates durable writes. Validation policies may use:

- confidence thresholds
- repeated observations
- human approval
- regression checks
- consensus across runs
- policy-specific allow or deny rules

## Evidence

Evidence may reference:

- execution traces
- tool invocations
- LLM invocations
- artifacts
- user instructions
- source documents
- prior knowledge nodes
- compiler diagnostics
- audit findings

No evidence means no durable write.
