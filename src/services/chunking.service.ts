import { axiosInstance } from "../lib/axios";
import type {
  CharacterChunkRequest,
  ChunkingResponse,
  LlmChunkRequest,
  SemanticChunkRequest,
} from "../types/chunking.types";

/**
 * Backend endpoints for these calls are not implemented yet.
 * These functions are wired for future integration and are
 * intentionally not invoked by the UI until the API is ready.
 */

export const chunkByCharacter = async (
  payload: CharacterChunkRequest,
): Promise<ChunkingResponse> => {
  const response = await axiosInstance.post("/chunking/character", payload);

  return response.data;
};

export const chunkBySemantic = async (
  payload: SemanticChunkRequest,
): Promise<ChunkingResponse> => {
  const response = await axiosInstance.post("/chunking/semantic", payload);

  return response.data;
};

export const chunkByLlm = async (
  payload: LlmChunkRequest,
): Promise<ChunkingResponse> => {
  const response = await axiosInstance.post("/chunking/llm", payload);

  return response.data;
};
