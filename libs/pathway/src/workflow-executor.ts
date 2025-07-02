import { MultiGraph } from 'graphology';
import { bfsFromNode } from 'graphology-traversal';

export class WorkflowExecutor {
  public async execute(
    graph: MultiGraph,
    startNodeId: string
  ): Promise<boolean> {
    console.log(`\n--- Executing Workflow ---`);
    let success = true;

    // Get the execution path from the start node
    const executionPath: string[] = [];
    bfsFromNode(graph, startNodeId, (node: string) => {
      executionPath.push(node);
    });

    // The first node is the intent, so we skip it.
    for (let i = 1; i < executionPath.length; i++) {
      const nodeId = executionPath[i];
      const attrs = graph.getNodeAttributes(nodeId);

      console.log(
        `[Executor] Executing Step ${i}: ${attrs.label} (Action: ${attrs.action})`
      );

      try {
        // Simulate execution based on action type
        await this.simulateAction(attrs.action, attrs.parameters);
        console.log(`[Executor] -> Success`);
      } catch (error: any) {
        console.error(`[Executor] -> Failed: ${error.message}`);
        success = false;
        // In the future, this is where the "Revise" logic would be triggered.
        break; // Stop execution on failure
      }
    }

    console.log(
      `--- Workflow Execution ${success ? 'Finished' : 'Failed'} ---`
    );
    return success;
  }

  private async simulateAction(action: string, parameters: any): Promise<void> {
    // Simulate a delay to represent work being done
    await new Promise(resolve => setTimeout(resolve, 200));

    // Simulate potential failure for a specific action for testing purposes
    if (action === 'execute_code' && parameters.code.includes('Error')) {
      throw new Error("Simulated execution error in 'execute_code'");
    }

    // For now, all other actions are considered successful
    return Promise.resolve();
  }
}
