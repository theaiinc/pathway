import { VectorStore } from './vector-store.js';
import { GraphStore, StepNode } from './graph-store.js';
import { PathwayManager } from './pathway-manager.js';
import { v4 as uuidv4 } from 'uuid';

export { VectorStore, GraphStore, PathwayManager };

async function main() {
  console.log('--- Initializing Stores & Manager ---');
  const vectorStore = new VectorStore();
  await vectorStore.initialize();
  await vectorStore.clearCollection(); // Start fresh

  const graphStore = new GraphStore();
  const pathwayManager = new PathwayManager(vectorStore, graphStore);
  console.log('Stores and Manager initialized.');

  // --- Step 1: Create an initial workflow to populate the knowledge base ---
  console.log('\n--- Step 1: Create an initial workflow ---');
  const initialQuery = 'How do I read a file in node?';
  const vectorId = await vectorStore.addIntention(initialQuery);
  graphStore.createWorkflow(initialQuery, vectorId, [
    {
      id: uuidv4(),
      type: 'Step',
      label: 'Import fs promises',
      action: 'import_module',
      parameters: { module: 'fs/promises' },
    },
    {
      id: uuidv4(),
      type: 'Step',
      label: 'Use fs.readFile',
      action: 'call_function',
      parameters: {
        function: 'fs.readFile',
        args: ['/path/to/file.txt', 'utf8'],
      },
    },
  ]);
  console.log('Initial workflow created.');

  // --- Step 2: Test the "Retrieve" and "Adapt" cycle ---
  console.log('\n--- Step 2: Retrieve and Adapt ---');
  const secondQuery = 'How can I open a file using nodejs?';
  const retrievedWorkflow = await pathwayManager.findSimilarWorkflow(
    secondQuery
  );

  if (retrievedWorkflow) {
    const adaptedWorkflow = await pathwayManager.adaptWorkflow(
      retrievedWorkflow,
      secondQuery
    );
    console.log(
      `[Manager] Adaptation complete. Workflow has ${adaptedWorkflow.order} nodes.`
    );
  } else {
    console.log('❌ Retrieval failed.');
  }

  // --- Step 3: Test "Generate" for a completely new query ---
  console.log('\n--- Step 3: Generate a new workflow ---');
  const generationQuery =
    'How do I plot a sine wave using matplotlib in Python?';
  const newWorkflow = await pathwayManager.findSimilarWorkflow(generationQuery);

  if (newWorkflow) {
    console.log(
      `\n✅ Generation successful! New workflow has ${newWorkflow.order} nodes.`
    );
    newWorkflow.forEachNode((node, attrs) => {
      console.log(`- Node ${node} (${attrs.label}):`, attrs);
    });

    // --- Step 4: Execute the newly generated workflow ---
    console.log('\n--- Step 4: Execute the new workflow ---');
    await pathwayManager.executeAndReviseWorkflow(newWorkflow);
  } else {
    console.log('\n❌ Generation failed.');
  }
}

main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
