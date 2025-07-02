import { PathwayManager } from './pathway-manager.js';
import { VectorStore } from './vector-store.js';
import { GraphStore } from './graph-store.js';

async function main() {
  console.log('--- Initializing Stores & Manager ---');
  // Initialize stores. The GraphStore will now automatically load the graph if it exists.
  const vectorStore = new VectorStore();
  const graphStore = new GraphStore();
  const pathwayManager = new PathwayManager(vectorStore, graphStore);

  console.log('Stores and Manager initialized.');

  // --- Check existing workflows and add a new one if needed ---
  console.log('\n--- Checking for a "file writing" workflow ---');

  const query = 'How to write to a file in Node.js?';
  const existingWorkflow = await pathwayManager.findSimilarWorkflow(query);

  if (existingWorkflow) {
    console.log(
      '\n✅ A suitable workflow already exists in the graph. Run complete.'
    );
    const intentLabel = existingWorkflow.getNodeAttribute(
      existingWorkflow.findNode(
        node => existingWorkflow.getNodeAttribute(node, 'type') === 'Intent'
      ),
      'label'
    );
    console.log(`-> Found workflow with intent: "${intentLabel}"`);
    console.log(
      'To test adding a new workflow, delete data/workflow-graph.json and run again.'
    );
  } else {
    console.log(
      '\n"File writing" workflow not found. Creating and retaining a new one.'
    );

    // Use the generate and retain mechanism
    const newWorkflow = await pathwayManager.generateNewWorkflow(query);
    if (newWorkflow) {
      await pathwayManager.retainWorkflow(newWorkflow, query);
      console.log(
        '\n✅ New "file writing" workflow created and retained successfully.'
      );
    } else {
      console.log('\n❌ Failed to generate a new workflow.');
    }
  }
}

main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
