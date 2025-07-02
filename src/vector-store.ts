import { ChromaClient, IEmbeddingFunction } from 'chromadb';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the root directory
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const azureOpenAIApiKey = process.env.AZURE_OPENAI_API_KEY;
const azureOpenAIApiEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureOpenAIApiVersion = process.env.AZURE_OPENAI_API_VERSION;
const azureOpenAIEmbeddingDeploymentName =
  process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME;

if (!azureOpenAIApiKey || !azureOpenAIApiEndpoint || !azureOpenAIApiVersion) {
  throw new Error(
    'Azure OpenAI environment variables are not set. Please check your .env file.'
  );
}

class AzureOpenAIEmbeddingFunction implements IEmbeddingFunction {
  public async generate(texts: string[]): Promise<number[][]> {
    // Bypassing the OpenAI SDK due to a persistent and inexplicable 404 error
    // when using the SDK with Azure. A direct fetch call works reliably.
    const url = `${azureOpenAIApiEndpoint}openai/deployments/${azureOpenAIEmbeddingDeploymentName}/embeddings?api-version=${azureOpenAIApiVersion}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': azureOpenAIApiKey!,
      },
      body: JSON.stringify({ input: texts }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Embeddings fetch failed with status ${response.status}:`,
        errorBody
      );
      throw new Error(`Embeddings fetch failed: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData.data.map((d: any) => d.embedding);
  }
}

const embedder = new AzureOpenAIEmbeddingFunction();

export interface IIntention {
  id: string;
  text: string;
  metadata: object;
}

export class VectorStore {
  private client: ChromaClient;
  private collection: any; // Type properly later
  private collectionName = 'intentions';

  constructor() {
    this.client = new ChromaClient();
  }

  async initialize() {
    try {
      this.collection = await this.client.getOrCreateCollection({
        name: this.collectionName,
        embeddingFunction: embedder,
      });
      console.log(`ChromaDB collection '${this.collectionName}' is ready.`);
    } catch (error) {
      console.error('Failed to initialize ChromaDB collection:', error);
      throw error;
    }
  }

  async clearCollection(): Promise<void> {
    if (this.collection) {
      await this.client.deleteCollection({ name: this.collectionName });
      this.collection = await this.client.createCollection({
        name: this.collectionName,
        embeddingFunction: embedder,
      });
      console.log(
        `ChromaDB collection '${this.collectionName}' cleared and recreated.`
      );
    }
  }

  async addIntention(text: string, metadata: object = {}): Promise<string> {
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
