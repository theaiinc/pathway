import { VectorStore } from './vector-store.js';
import { GraphStore, StepNode } from './graph-store.js';
import { PathwayManager } from './pathway-manager.js';
import { v4 as uuidv4 } from 'uuid';

export { VectorStore, GraphStore, PathwayManager };

async function main() {
  console.log('--- Initializing Stores & Manager ---');
  const vectorStore = new VectorStore();
  await vectorStore.initialize();
  const graphStore = new GraphStore();
  const pathwayManager = new PathwayManager(vectorStore, graphStore);
  console.log('Stores and Manager initialized.');

  console.log('\n--- Step 1: Create an initial workflow ---');
  const initialQuery = 'How do I read a file in node?';
  const vectorId = await vectorStore.addIntention(initialQuery, {
    area: 'File System',
    language: 'Node.js',
  });
  const steps: StepNode[] = [
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
  ];
  graphStore.createWorkflow(initialQuery, vectorId, steps);
  console.log('Initial workflow created.');

  console.log(
    "\n--- Step 2: Use Manager to 'Retrieve' the workflow with a similar query ---"
  );
  const newQuery = 'How can I open a file using nodejs?';
  const retrievedWorkflow = await pathwayManager.findSimilarWorkflow(newQuery);

  if (retrievedWorkflow) {
    console.log(
      '[Manager] Successfully retrieved workflow intent:',
      retrievedWorkflow.label
    );
  } else {
    console.log('[Manager] Failed to retrieve a similar workflow.');
  }
}

main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
