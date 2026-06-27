import { ContextDiagnostic, error } from './diagnostics.js';
import { ContextIR } from './context-ir.js';

export interface ContextIRValidationResult {
  readonly valid: boolean;
  readonly diagnostics: readonly ContextDiagnostic[];
}

export function validateContextIR(ir: ContextIR): ContextIRValidationResult {
  const diagnostics: ContextDiagnostic[] = [];
  const nodeIds = new Set(ir.nodes.map(node => node.id));

  if (!ir.snapshotVersion) {
    diagnostics.push(error('IR_MISSING_SNAPSHOT_VERSION', 'ContextIR is missing snapshotVersion.'));
  }
  if (!ir.compilerVersion) {
    diagnostics.push(error('IR_MISSING_COMPILER_VERSION', 'ContextIR is missing compilerVersion.'));
  }
  if (!ir.passSetVersion) {
    diagnostics.push(error('IR_MISSING_PASS_SET_VERSION', 'ContextIR is missing passSetVersion.'));
  }
  if (!ir.costModelVersion) {
    diagnostics.push(error('IR_MISSING_COST_MODEL_VERSION', 'ContextIR is missing costModelVersion.'));
  }
  if (!ir.emitterVersion) {
    diagnostics.push(error('IR_MISSING_EMITTER_VERSION', 'ContextIR is missing emitterVersion.'));
  }

  for (const node of ir.nodes) {
    if (!node.id || !node.fingerprint || !node.source || !node.version) {
      diagnostics.push(
        error('IR_INVALID_NODE_IDENTITY', 'Context node is missing required identity fields.', {
          nodeId: node.id,
        })
      );
    }

    for (const evidenceId of node.evidence || []) {
      if (!nodeIds.has(evidenceId)) {
        diagnostics.push(
          error('IR_DANGLING_EVIDENCE', 'Context node references missing evidence.', {
            nodeId: node.id,
            evidenceId,
          })
        );
      }
    }
  }

  for (const edge of ir.edges) {
    if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) {
      diagnostics.push(
        error('IR_DANGLING_EDGE', 'Context edge references a missing node.', {
          edgeId: edge.id,
          source: edge.source,
          target: edge.target,
        })
      );
    }
  }

  if (ir.tokenCost < 0) {
    diagnostics.push(error('IR_INVALID_COST', 'ContextIR tokenCost cannot be negative.'));
  }

  return {
    valid: diagnostics.every(diagnostic => diagnostic.level !== 'error'),
    diagnostics,
  };
}
