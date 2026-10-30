import type { ChunkingStrategy } from "../../types/chunking.types";
import { useChunkingStore } from "../../store/chunking.store";

const TABS: { id: ChunkingStrategy; label: string }[] = [
  { id: "character", label: "Character-based" },
  { id: "semantic", label: "Semantic" },
  { id: "llm", label: "LLM-based" },
];

export function StrategyTabs() {
  const { activeTab, setActiveTab, compareMode, setCompareMode } =
    useChunkingStore();

  return (
    <div
      className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl"
      style={{ backgroundColor: "rgba(82, 97, 107, 0.12)" }}
    >
      {TABS.map((tab) => {
        const isActive = !compareMode && activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setCompareMode(false);
              setActiveTab(tab.id);
            }}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
            style={
              isActive
                ? { backgroundColor: "#52616B", color: "#F0F5F9" }
                : { color: "#C9D6DF" }
            }
          >
            {tab.label}
          </button>
        );
      })}

      <div
        className="ml-auto h-6 w-px"
        style={{ backgroundColor: "rgba(82, 97, 107, 0.3)" }}
      />

      <button
        type="button"
        onClick={() => setCompareMode(!compareMode)}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
        style={
          compareMode
            ? { backgroundColor: "#52616B", color: "#F0F5F9" }
            : { color: "#C9D6DF" }
        }
      >
        Compare All
      </button>
    </div>
  );
}
