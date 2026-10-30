export type ChunkingStrategy = "character" | "semantic" | "llm";

export type ChunkingStatus =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "backend-pending";

export interface CharacterChunkConfig {
  chunkSize: number;
  chunkOverlap: number;
}

export interface SemanticChunkConfig {
  similarityThreshold: number;
  minChunkSize: number;
  maxChunkSize: number;
}

export interface LlmChunkConfig {
  model: string;
  instructions: string;
  maxChunkSize: number;
}

export interface Chunk {
  index: number;
  content: string;
  characterCount: number;
}

export interface ChunkingResult {
  strategy: ChunkingStrategy;
  chunks: Chunk[];
  totalChunks: number;
  processingTimeMs: number;
}

export interface CharacterChunkRequest {
  document: string;
  chunkSize: number;
  chunkOverlap: number;
}

export interface SemanticChunkRequest {
  document: string;
  similarityThreshold: number;
  minChunkSize: number;
  maxChunkSize: number;
}

export interface LlmChunkRequest {
  document: string;
  model: string;
  instructions: string;
  maxChunkSize: number;
}

export interface ChunkingResponse {
  result: ChunkingResult;
}
