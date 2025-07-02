import { ChromaClient, IEmbeddingFunction } from 'chromadb';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import path from 'path';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the root directory
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const azureOpenAIApiKey = process.env.AZURE_OPENAI_API_KEY;
const azureOpenAIApiEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureOpenAIApiDeploymentName =
  process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME;
const azureOpenAIApiVersion = process.env.AZURE_OPENAI_API_VERSION;

if (
  !azureOpenAIApiKey ||
  !azureOpenAIApiEndpoint ||
  !azureOpenAIApiDeploymentName ||
  !azureOpenAIApiVersion
) {
  throw new Error(
    'Azure OpenAI environment variables are not set. Please check your .env file.'
  );
}

class AzureOpenAIEmbeddingFunction implements IEmbeddingFunction {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: azureOpenAIApiKey,
      baseURL: `${azureOpenAIApiEndpoint}openai/deployments/${azureOpenAIApiDeploymentName}`,
      defaultQuery: { 'api-version': azureOpenAIApiVersion },
      defaultHeaders: { 'api-key': azureOpenAIApiKey },
    });
  }

  public async generate(texts: string[]): Promise<number[][]> {
    const response = await this.openai.embeddings.create({
      model: 'text-embedding-ada-002', // This model name is ignored by the Azure API but is required by the SDK
      input: texts,
    });

    return response.data.map(d => d.embedding);
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

  async searchSimilarIntentions(queryText: string, k: number = 3) {
    const results = await this.collection.query({
      queryTexts: [queryText],
      nResults: k,
    });
    return results;
  }
}
