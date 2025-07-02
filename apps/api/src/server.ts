import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PathwayManager, GraphStore, VectorStore } from '@pathway';
import path from 'path';

// Note: Assumes .env file is in the root of the `project-oasis` directory
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const astraConfig = {
  token: process.env.ASTRA_DB_APPLICATION_TOKEN as string,
  endpoint: process.env.ASTRA_DB_ENDPOINT as string,
};

const azureOpenAIApiKey = process.env.AZURE_OPENAI_API_KEY as string;
const azureOpenAIApiEndpoint = process.env.AZURE_OPENAI_ENDPOINT as string;
const azureOpenAIApiVersion = process.env.AZURE_OPENAI_API_VERSION as string;
const azureOpenAIEmbeddingsDeploymentName = process.env
  .AZURE_OPENAI_EMBEDDINGS_DEPLOYMENT_NAME as string;
const azureOpenAIChatDeploymentName = process.env
  .AZURE_OPENAI_CHAT_DEPLOYMENT_NAME as string;

// Initialize stores
const graphStore = new GraphStore();
const vectorStore = new VectorStore();
const pathwayManager = new PathwayManager(vectorStore, graphStore);

console.log('Graph and Vector Stores initialized.');

app.get('/graph', (req, res) => {
  const graphData = graphStore.getGraph().export();
  res.json(graphData);
});

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).send('Prompt is required');
  }

  try {
    const existingWorkflow = await pathwayManager.findSimilarWorkflow(prompt);
    let highlightedNodeId: string | null = null;

    if (existingWorkflow) {
      console.log('[API] Found existing workflow. No retention needed.');
      // Find the intent node in the returned subgraph to highlight it
      const intentNode = existingWorkflow.findNode(
        node => existingWorkflow.getNodeAttribute(node, 'type') === 'Intent'
      );
      if (intentNode) {
        highlightedNodeId = intentNode;
      }
    } else {
      console.log('[API] No suitable workflow found. Generating a new one.');
      const newWorkflow = await pathwayManager.generateNewWorkflow(prompt);
      if (newWorkflow) {
        highlightedNodeId = await pathwayManager.retainWorkflow(
          newWorkflow,
          prompt
        );
      }
    }

    const updatedGraph = graphStore.getGraph().export();
    res.json({ graph: updatedGraph, highlightedNodeId });
  } catch (error) {
    console.error('Error generating workflow:', error);
    res.status(500).send('Failed to generate workflow');
  }
});

app.post('/reset', async (req, res) => {
  try {
    await graphStore.clearGraph();
    await vectorStore.clearCollection();
    console.log('Stores have been reset.');
    res.status(200).send('Graph and vector stores have been reset.');
  } catch (error) {
    console.error('Error resetting stores:', error);
    res.status(500).send('Failed to reset stores.');
  }
});

app.delete('/workflow/:workflowId', async (req, res) => {
  const { workflowId } = req.params;
  if (!workflowId) {
    return res.status(400).send('Workflow ID is required');
  }

  try {
    await pathwayManager.deleteWorkflow(workflowId);
    // Send back the updated graph so the frontend can sync
    const updatedGraph = graphStore.getGraph().export();
    res.json({ graph: updatedGraph });
  } catch (error) {
    console.error(`Error deleting workflow ${workflowId}:`, error);
    res.status(500).send('Failed to delete workflow');
  }
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
