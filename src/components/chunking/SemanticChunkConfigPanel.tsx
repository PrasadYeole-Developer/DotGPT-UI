import { useChunkingStore } from "../../store/chunking.store";

export function SemanticChunkConfigPanel() {
  const { semantic, updateSemanticConfig } = useChunkingStore();
  const { config } = semantic;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold" style={{ color: "#F0F5F9" }}>
        Semantic Chunking Configuration
      </h3>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium" style={{ color: "#C9D6DF" }}>
            Similarity threshold
          </label>
          <span className="text-xs font-semibold" style={{ color: "#F0F5F9" }}>
            {config.similarityThreshold.toFixed(2)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={config.similarityThreshold}
          onChange={(e) =>
            updateSemanticConfig({
              similarityThreshold: Number(e.target.value),
            })
          }
          className="w-full cursor-pointer"
          style={{ accentColor: "#52616B" }}
        />
        <p className="text-xs" style={{ color: "#52616B" }}>
          Higher values require stronger embedding similarity to keep
          sentences in the same chunk.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium" style={{ color: "#C9D6DF" }}>
            Min chunk size (characters)
          </label>
          <input
            type="number"
            min={1}
            value={config.minChunkSize}
            onChange={(e) =>
              updateSemanticConfig({ minChunkSize: Number(e.target.value) })
            }
            className="w-full px-3 py-2 rounded-lg text-sm outline-none"
            style={{
              backgroundColor: "rgba(82, 97, 107, 0.2)",
              borderColor: "#52616B",
              borderWidth: "1px",
              color: "#F0F5F9",
            }}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium" style={{ color: "#C9D6DF" }}>
            Max chunk size (characters)
          </label>
          <input
            type="number"
            min={1}
            value={config.maxChunkSize}
            onChange={(e) =>
              updateSemanticConfig({ maxChunkSize: Number(e.target.value) })
            }
            className="w-full px-3 py-2 rounded-lg text-sm outline-none"
            style={{
              backgroundColor: "rgba(82, 97, 107, 0.2)",
              borderColor: "#52616B",
              borderWidth: "1px",
              color: "#F0F5F9",
            }}
          />
        </div>
      </div>
    </div>
  );
}
