import { useChunkingStore } from "../../store/chunking.store";

const GEMINI_MODELS = [
  { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
];

export function LlmChunkConfigPanel() {
  const { llm, updateLlmConfig } = useChunkingStore();
  const { config } = llm;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold" style={{ color: "#F0F5F9" }}>
        LLM Chunking Configuration (Gemini)
      </h3>

      <div className="space-y-1.5">
        <label className="text-xs font-medium" style={{ color: "#C9D6DF" }}>
          Model
        </label>
        <select
          value={config.model}
          onChange={(e) => updateLlmConfig({ model: e.target.value })}
          className="w-full px-3 py-2 rounded-lg text-sm outline-none cursor-pointer"
          style={{
            backgroundColor: "rgba(82, 97, 107, 0.2)",
            borderColor: "#52616B",
            borderWidth: "1px",
            color: "#F0F5F9",
          }}
        >
          {GEMINI_MODELS.map((model) => (
            <option key={model.id} value={model.id} style={{ color: "#0B0D0F" }}>
              {model.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium" style={{ color: "#C9D6DF" }}>
          Chunking instructions
        </label>
        <textarea
          rows={3}
          value={config.instructions}
          onChange={(e) => updateLlmConfig({ instructions: e.target.value })}
          placeholder="Describe how the model should split the document..."
          className="w-full resize-none px-3 py-2 rounded-lg text-sm outline-none"
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
            updateLlmConfig({ maxChunkSize: Number(e.target.value) })
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
  );
}
