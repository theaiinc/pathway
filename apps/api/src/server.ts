import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PathwayManager, GraphStore, VectorStore } from '@theaiinc/pathway';
import path from 'path';

// Note: Assumes .env file is in the root of the `project-oasis` directory
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.PATHWAY_API_KEY;

// API Key Authentication Middleware
const apiKeyAuth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!API_KEY) {
    // If no API key is configured on the server, bypass the check.
    // This allows for local development without an API key.
    return next();
  }

  const providedApiKey = req.header('x-api-key');
  if (providedApiKey === API_KEY) {
    next();
  } else {
    res.status(401).send('Unauthorized: Invalid API Key');
  }
};

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

const IS_DEMO_MODE = process.env.DEMO_MODE === 'true';
const MAX_WORKFLOWS = 50; // Set a reasonable limit for the demo

// Initialize stores
const graphStore = new GraphStore();
const vectorStore = new VectorStore();
const pathwayManager = new PathwayManager(vectorStore, graphStore);

console.log('Graph and Vector Stores initialized.');

app.get('/graph', (req, res) => {
  const graphData = graphStore.getGraph().export();
  res.json(graphData);
});

app.post('/generate', apiKeyAuth, async (req, res) => {
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

      // In demo mode, check if we need to prune an old workflow
      if (IS_DEMO_MODE) {
        const uniqueWorkflowIds = await graphStore.getWorkflowIds();
        if (uniqueWorkflowIds.length >= MAX_WORKFLOWS) {
          // Find the oldest workflow (first one added) and delete it
          const oldestWorkflowId = await graphStore.getOldestWorkflowId();
          if (oldestWorkflowId) {
            console.log(
              `[DEMO MODE] Max workflows reached. Deleting oldest workflow: ${oldestWorkflowId}`
            );
            await pathwayManager.deleteWorkflow(oldestWorkflowId);
          }
        }
      }

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

app.post('/reset', apiKeyAuth, async (req, res) => {
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

app.delete('/workflow/:workflowId', apiKeyAuth, async (req, res) => {
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
