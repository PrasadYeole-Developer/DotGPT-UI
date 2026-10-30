import { useChunkingStore } from "../../store/chunking.store";

export function CharacterChunkConfigPanel() {
  const { character, updateCharacterConfig } = useChunkingStore();
  const { config } = character;

  const overlapTooLarge = config.chunkOverlap >= config.chunkSize;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold" style={{ color: "#F0F5F9" }}>
        Character Chunking Configuration
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium" style={{ color: "#C9D6DF" }}>
            Chunk size (characters)
          </label>
          <input
            type="number"
            min={1}
            value={config.chunkSize}
            onChange={(e) =>
              updateCharacterConfig({ chunkSize: Number(e.target.value) })
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
            Chunk overlap (characters)
          </label>
          <input
            type="number"
            min={0}
            value={config.chunkOverlap}
            onChange={(e) =>
              updateCharacterConfig({ chunkOverlap: Number(e.target.value) })
            }
            className="w-full px-3 py-2 rounded-lg text-sm outline-none"
            style={{
              backgroundColor: "rgba(82, 97, 107, 0.2)",
              borderColor: overlapTooLarge ? "#D97373" : "#52616B",
              borderWidth: "1px",
              color: "#F0F5F9",
            }}
          />
        </div>
      </div>

      {overlapTooLarge && (
        <p className="text-xs" style={{ color: "#D97373" }}>
          Overlap should be smaller than the chunk size.
        </p>
      )}
    </div>
  );
}
