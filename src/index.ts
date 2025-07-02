import { VectorStore } from './vector-store.js';
import { GraphStore, StepNode } from './graph-store.js';
import { v4 as uuidv4 } from 'uuid';

export { VectorStore, GraphStore };

async function main() {
  console.log('--- Initializing Stores ---');
  const vectorStore = new VectorStore();
  await vectorStore.initialize();
  const graphStore = new GraphStore();
  console.log('VectorStore and GraphStore initialized.');

  console.log('\n--- Step 1: Add a new intention to the VectorStore ---');
  const sampleIntention = 'How to read a file in TypeScript?';
  const vectorId = await vectorStore.addIntention(sampleIntention, {
    area: 'File System',
    language: 'TypeScript',
  });
  console.log(`Added intention to VectorStore with vectorId: ${vectorId}`);

  console.log(
    '\n--- Step 2: Create a corresponding workflow in the GraphStore ---'
  );
  const steps: StepNode[] = [
    {
      id: uuidv4(),
      type: 'Step',
      label: 'Import fs module',
      action: 'import_module',
      parameters: { module: 'fs' },
    },
    {
      id: uuidv4(),
      type: 'Step',
      label: 'Use fs.readFileSync',
      action: 'call_function',
      parameters: {
        function: 'fs.readFileSync',
        args: ['/path/to/file.txt', 'utf8'],
      },
    },
  ];
  graphStore.createWorkflow(sampleIntention, vectorId, steps);

  console.log('\n--- Step 3: Verify Graph Content ---');
  const graph = graphStore.getGraph();
  console.log(`Graph contains ${graph.order} nodes and ${graph.size} edges.`);
  graph.forEachNode((node, attributes) => {
    console.log(`Node: ${node} (${attributes.type}) - ${attributes.label}`);
  });

  console.log('\n--- Step 4: Search for a similar intention ---');
  const searchQuery = 'How do I open a file in TS?';
  console.log(`Searching for intentions similar to: "${searchQuery}"`);
  const searchResult = await vectorStore.searchSimilarIntentions(searchQuery);
  console.log('Search results:', searchResult);
}

main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
