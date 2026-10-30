import { useChunkingStore } from "../store/chunking.store";
import { DocumentInput } from "../components/chunking/DocumentInput";
import { StrategyTabs } from "../components/chunking/StrategyTabs";
import { CharacterChunkConfigPanel } from "../components/chunking/CharacterChunkConfigPanel";
import { SemanticChunkConfigPanel } from "../components/chunking/SemanticChunkConfigPanel";
import { LlmChunkConfigPanel } from "../components/chunking/LlmChunkConfigPanel";
import { GenerateButton } from "../components/chunking/GenerateButton";
import { ChunkResultsList } from "../components/chunking/ChunkResultsList";
import { ComparisonView } from "../components/chunking/ComparisonView";

export function ChunkingLabPage() {
  const { activeTab, compareMode, character, semantic, llm, generate } =
    useChunkingStore();

  const activeSlice =
    activeTab === "character" ? character : activeTab === "semantic" ? semantic : llm;

  return (
    <div
      className="flex h-screen flex-col"
      style={{ backgroundColor: "#0B0D0F", color: "#F0F5F9" }}
    >
      {/* Header */}
      <header
        className="px-8 py-4 backdrop-blur-sm"
        style={{
          borderBottomColor: "rgba(82, 97, 107, 0.3)",
          borderBottomWidth: "1px",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#52616B" }}
          />
          <h1 className="text-lg font-semibold">Knowledge Lab</h1>
        </div>
        <p className="text-sm mt-1" style={{ color: "#52616B" }}>
          AI Chunking Lab — compare character, semantic, and LLM-based chunking strategies
        </p>
      </header>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Configuration panel */}
          <div className="flex flex-col gap-6 lg:w-[420px] lg:shrink-0">
            <StrategyTabs />
            <DocumentInput />

            {!compareMode && (
              <div
                className="rounded-xl p-4"
                style={{
                  backgroundColor: "rgba(30, 32, 34, 0.5)",
                  borderColor: "rgba(82, 97, 107, 0.3)",
                  borderWidth: "1px",
                }}
              >
                {activeTab === "character" && <CharacterChunkConfigPanel />}
                {activeTab === "semantic" && <SemanticChunkConfigPanel />}
                {activeTab === "llm" && <LlmChunkConfigPanel />}
              </div>
            )}

            {!compareMode && (
              <GenerateButton onClick={() => generate(activeTab)} />
            )}
          </div>

          {/* Results panel */}
          <div className="flex-1 min-w-0">
            {compareMode ? (
              <ComparisonView />
            ) : (
              <ChunkResultsList
                status={activeSlice.status}
                result={activeSlice.result}
                error={activeSlice.error}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
