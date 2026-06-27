import { ExecutionCache } from '../cache/execution-cache.js';
import { NodeStore } from '../cas/node-store.js';
import { ContextCompiler, CompileResult } from '../compiler/compiler.js';
import { Emitter } from '../context/emitter.js';
import { ContextRequest } from '../context/provider.js';
import { ContextTarget } from '../context/target.js';
import { CostModel } from '../context/objective.js';
import { KnowledgeRuntime } from '../knowledge/knowledge-runtime.js';
import { ProvenanceGraph } from '../provenance/provenance-graph.js';
import { ContextSelectionRequest } from '../selection/context-selector.js';
import { SelectionEngine } from '../selection/selection-engine.js';
import { EventBus } from './event-bus.js';
import { ObservabilitySink } from './observability.js';

export interface CompileContextInput<TContextTarget extends ContextTarget> {
  readonly providerRequest: ContextRequest;
  readonly selectionRequest: ContextSelectionRequest;
  readonly compilerVersion: string;
  readonly passSetVersion: string;
  readonly costModel: CostModel;
  readonly emitter: Emitter<TContextTarget>;
  readonly validate?: boolean;
}

export interface ExecutionRuntimeOptions {
  readonly eventBus?: EventBus;
  readonly observability?: ObservabilitySink;
  readonly knowledgeRuntime: KnowledgeRuntime;
  readonly selectionEngine: SelectionEngine;
  readonly compiler: ContextCompiler;
  readonly nodeStore?: NodeStore;
  readonly provenanceGraph?: ProvenanceGraph;
  readonly executionCache?: ExecutionCache;
}

export class ExecutionRuntime {
  readonly eventBus: EventBus;
  readonly observability: ObservabilitySink;
  readonly nodeStore: NodeStore;
  readonly provenanceGraph: ProvenanceGraph;
  readonly executionCache: ExecutionCache;

  constructor(private readonly options: ExecutionRuntimeOptions) {
    this.eventBus = options.eventBus || new EventBus();
    this.observability = options.observability || new ObservabilitySink();
    this.nodeStore = options.nodeStore || new NodeStore();
    this.provenanceGraph = options.provenanceGraph || new ProvenanceGraph();
    this.executionCache =
      options.executionCache || new ExecutionCache(this.nodeStore, this.provenanceGraph);

    this.eventBus.on('*', event => this.observability.recordEvent(event));
  }

  async compileContext<TContextTarget extends ContextTarget>(
    input: CompileContextInput<TContextTarget>
  ): Promise<CompileResult<TContextTarget>> {
    await this.options.knowledgeRuntime.collect(input.providerRequest);
    const snapshot = this.options.selectionEngine.select(
      input.selectionRequest,
      this.options.knowledgeRuntime.graph
    );
    this.eventBus.emit('ContextSelected', {
      snapshotVersion: snapshot.version,
      nodeCount: snapshot.nodes.length,
    });

    const ir = this.options.selectionEngine.buildIR({
      snapshot,
      compilerVersion: input.compilerVersion,
      passSetVersion: input.passSetVersion,
      costModel: input.costModel,
      emitterVersion: input.emitter.version,
      objective: input.selectionRequest.objective,
      target: input.selectionRequest.target,
    });

    const result = await this.options.compiler.compile(ir, input.emitter, {
      validate: input.validate,
      eventSink: this.eventBus,
    });
    this.observability.recordDiagnostics(result.diagnostics);
    this.observability.recordProvenance(result.provenance);
    return result;
  }
}
