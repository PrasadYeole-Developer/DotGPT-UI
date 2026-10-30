import { create } from "zustand";

import type {
  CharacterChunkConfig,
  ChunkingResult,
  ChunkingStatus,
  ChunkingStrategy,
  LlmChunkConfig,
  SemanticChunkConfig,
} from "../types/chunking.types";

interface StrategySlice<TConfig> {
  config: TConfig;
  status: ChunkingStatus;
  result: ChunkingResult | null;
  error: string | null;
}

interface ChunkingStore {
  document: string;
  activeTab: ChunkingStrategy;
  compareMode: boolean;

  character: StrategySlice<CharacterChunkConfig>;
  semantic: StrategySlice<SemanticChunkConfig>;
  llm: StrategySlice<LlmChunkConfig>;

  setDocument: (document: string) => void;
  setActiveTab: (tab: ChunkingStrategy) => void;
  setCompareMode: (value: boolean) => void;

  updateCharacterConfig: (patch: Partial<CharacterChunkConfig>) => void;
  updateSemanticConfig: (patch: Partial<SemanticChunkConfig>) => void;
  updateLlmConfig: (patch: Partial<LlmChunkConfig>) => void;

  generate: (strategy: ChunkingStrategy) => void;
  generateAll: () => void;
  resetStrategy: (strategy: ChunkingStrategy) => void;
}

const defaultCharacterConfig: CharacterChunkConfig = {
  chunkSize: 500,
  chunkOverlap: 50,
};

const defaultSemanticConfig: SemanticChunkConfig = {
  similarityThreshold: 0.75,
  minChunkSize: 100,
  maxChunkSize: 800,
};

const defaultLlmConfig: LlmChunkConfig = {
  model: "gemini-1.5-flash",
  instructions:
    "Split the document into semantically coherent chunks suitable for retrieval.",
  maxChunkSize: 1000,
};

const emptySlice = <TConfig>(config: TConfig): StrategySlice<TConfig> => ({
  config,
  status: "idle",
  result: null,
  error: null,
});

const BACKEND_PENDING_MESSAGE =
  "Backend integration pending — this strategy's API endpoint is not implemented yet.";

export const useChunkingStore = create<ChunkingStore>((set, get) => ({
  document: "",
  activeTab: "character",
  compareMode: false,

  character: emptySlice(defaultCharacterConfig),
  semantic: emptySlice(defaultSemanticConfig),
  llm: emptySlice(defaultLlmConfig),

  setDocument: (document) => {
    set({ document });
  },

  setActiveTab: (tab) => {
    set({ activeTab: tab });
  },

  setCompareMode: (value) => {
    set({ compareMode: value });
  },

  updateCharacterConfig: (patch) => {
    set((state) => ({
      character: {
        ...state.character,
        config: { ...state.character.config, ...patch },
      },
    }));
  },

  updateSemanticConfig: (patch) => {
    set((state) => ({
      semantic: {
        ...state.semantic,
        config: { ...state.semantic.config, ...patch },
      },
    }));
  },

  updateLlmConfig: (patch) => {
    set((state) => ({
      llm: {
        ...state.llm,
        config: { ...state.llm.config, ...patch },
      },
    }));
  },

  generate: (strategy) => {
    const { document } = get();

    const outcome: Pick<StrategySlice<unknown>, "status" | "result" | "error"> =
      !document.trim()
        ? {
          status: "error",
          result: null,
          error: "Please enter a document before generating chunks.",
        }
        : {
          status: "backend-pending",
          result: null,
          error: BACKEND_PENDING_MESSAGE,
        };

    if (strategy === "character") {
      set((state) => ({ character: { ...state.character, ...outcome } }));
    } else if (strategy === "semantic") {
      set((state) => ({ semantic: { ...state.semantic, ...outcome } }));
    } else {
      set((state) => ({ llm: { ...state.llm, ...outcome } }));
    }
  },

  generateAll: () => {
    const { generate } = get();

    generate("character");
    generate("semantic");
    generate("llm");
  },

  resetStrategy: (strategy) => {
    if (strategy === "character") {
      set({ character: emptySlice(defaultCharacterConfig) });
    } else if (strategy === "semantic") {
      set({ semantic: emptySlice(defaultSemanticConfig) });
    } else {
      set({ llm: emptySlice(defaultLlmConfig) });
    }
  },
}));
