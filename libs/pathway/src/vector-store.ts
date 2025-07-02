import {
  ChromaClient,
  IEmbeddingFunction,
  // DefaultEmbeddingFunction,
} from 'chromadb';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';
import { AzureOpenAI } from 'openai';

dotenv.config();

// Custom Embedding Function using a dedicated client
class AzureOpenAIEmbeddingFunction implements IEmbeddingFunction {
  private api: AzureOpenAI;
  private model: string;

  constructor() {
    this.api = new AzureOpenAI({
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      apiVersion: '2023-07-01-preview',
      deployment: process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME,
    });
    this.model =
      process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME ||
      'text-embedding-ada-002';
  }

  public async generate(texts: string[]): Promise<number[][]> {
    const response = await this.api.embeddings.create({
      model: this.model,
      input: texts,
    });
    return response.data.map(d => d.embedding);
  }
}

export class VectorStore {
  private client: ChromaClient;
  private chatApi: AzureOpenAI; // For chat completions
  private collection: any; // Type according to chromadb's Collection type if available
  private initialized: Promise<void>;
  private collectionName = 'intentions';

  constructor() {
    this.client = new ChromaClient();
    this.chatApi = new AzureOpenAI({
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      apiVersion: '2023-07-01-preview', // Use a specific, stable version
      deployment: process.env.AZURE_OPENAI_CHAT_DEPLOYMENT_NAME,
    });
    this.initialized = this.initialize();
  }

  private async initialize(): Promise<void> {
    const embedder = new AzureOpenAIEmbeddingFunction();
    try {
      this.collection = await this.client.getOrCreateCollection({
        name: this.collectionName,
        embeddingFunction: embedder,
        metadata: { 'hnsw:space': 'cosine' },
      });
      console.log(
        `ChromaDB collection '${this.collectionName}' is ready with cosine distance.`
      );
    } catch (error) {
      console.error('Error initializing ChromaDB collection:', error);
      throw error;
    }
  }

  async generateWorkflow(query: string): Promise<string | null> {
    const prompt = `
You are a helpful assistant that designs a sequence of steps (a workflow) to solve a user's query.
The user's query is: "${query}"

Please respond with a JSON object that represents this workflow. The JSON object should have a single root key "workflow" which contains two arrays: "nodes" and "edges".

- Each object in the "nodes" array should have an "id" (a unique string like "node1", "node2"), a "type" ("Intent" for the first node, "Step" for all others), and a "label" (a descriptive title).
- The "Intent" node represents the user's goal.
- Each "Step" node represents an action to be taken and should include an "action" and "parameters" object.
- Each object in the "edges" array should define a directed link between nodes, with "source" and "target" properties corresponding to the node "id"s, and a "type" of "Flow".

Example for a query "read a file in nodejs":
{
  "workflow": {
    "nodes": [
      {
        "id": "intent_node",
        "type": "Intent",
        "label": "Intent: Read a file in Node.js"
      },
      {
        "id": "step_1",
        "type": "Step",
        "label": "Import fs module",
        "action": "execute_shell_command",
        "parameters": {
          "command": "const fs = require('fs');"
        }
      }
    ],
    "edges": [
      {
        "source": "intent_node",
        "target": "step_1",
        "type": "Flow"
      }
    ]
  }
}`;

    try {
      const response = await this.chatApi.chat.completions.create({
        model: process.env.AZURE_OPENAI_CHAT_DEPLOYMENT_NAME || 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      });
      return response.choices[0].message?.content || null;
    } catch (error) {
      console.error(
        '[VectorStore] LLM call for workflow generation failed:',
        error
      );
      return null;
    }
  }

  async clearCollection(): Promise<void> {
    await this.initialized;
    try {
      await this.client.deleteCollection({ name: 'intentions' });
      // The collection needs to be re-created with the embedding function
      const embedder = new AzureOpenAIEmbeddingFunction();
      this.collection = await this.client.getOrCreateCollection({
        name: 'intentions',
        embeddingFunction: embedder,
        metadata: { 'hnsw:space': 'cosine' },
      });
      console.log(
        "ChromaDB collection 'intentions' cleared and recreated with cosine distance."
      );
    } catch (error) {
      console.error('Error clearing ChromaDB collection:', error);
    }
  }

  async addIntention(text: string, metadata: object = {}): Promise<string> {
    await this.initialized;
    const id = uuidv4();
    await this.collection.add({
      ids: [id],
      documents: [text],
      metadatas: [metadata],
    });
    console.log(`Added intention with id ${id} to collection.`);
    return id;
  }

  async findSimilarIntentions(
    queryText: string,
    k: number = 3
  ): Promise<{ ids: string[]; distances: number[] }> {
    await this.initialized;
    const results = await this.collection.query({
      queryTexts: [queryText],
      nResults: k,
    });
    // Ensure that results for distances are available before returning
    const distances =
      results.distances && results.distances.length > 0
        ? results.distances[0]
        : [];
    return { ids: results.ids[0], distances: distances };
  }
}
