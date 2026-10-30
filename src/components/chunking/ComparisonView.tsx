import type { ChunkingStatus } from "../../types/chunking.types";
import { useChunkingStore } from "../../store/chunking.store";
import { GenerateButton } from "./GenerateButton";
import { ChunkResultsList } from "./ChunkResultsList";

const STATUS_LABEL: Record<ChunkingStatus, string> = {
  idle: "Not generated",
  loading: "Generating...",
  success: "Success",
  error: "Error",
  "backend-pending": "Pending backend",
};

export function ComparisonView() {
  const { character, semantic, llm, generateAll } = useChunkingStore();

  const columns = [
    { label: "Character-based", slice: character },
    { label: "Semantic", slice: semantic },
    { label: "LLM-based", slice: llm },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-sm font-semibold" style={{ color: "#F0F5F9" }}>
          Strategy Comparison
        </h3>
        <div className="w-full sm:w-56">
          <GenerateButton label="Generate All" onClick={generateAll} />
        </div>
      </div>

      <div
        className="overflow-x-auto rounded-xl"
        style={{
          borderColor: "rgba(82, 97, 107, 0.3)",
          borderWidth: "1px",
        }}
      >
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: "rgba(82, 97, 107, 0.15)" }}>
              <th
                className="text-left px-4 py-3 font-semibold"
                style={{ color: "#C9D6DF" }}
              >
                Strategy
              </th>
              <th
                className="text-left px-4 py-3 font-semibold"
                style={{ color: "#C9D6DF" }}
              >
                Status
              </th>
              <th
                className="text-left px-4 py-3 font-semibold"
                style={{ color: "#C9D6DF" }}
              >
                Total Chunks
              </th>
              <th
                className="text-left px-4 py-3 font-semibold"
                style={{ color: "#C9D6DF" }}
              >
                Processing Time
              </th>
            </tr>
          </thead>
          <tbody>
            {columns.map((column) => (
              <tr
                key={column.label}
                style={{ borderTopColor: "rgba(82, 97, 107, 0.2)", borderTopWidth: "1px" }}
              >
                <td className="px-4 py-3 font-medium" style={{ color: "#F0F5F9" }}>
                  {column.label}
                </td>
                <td className="px-4 py-3" style={{ color: "#C9D6DF" }}>
                  {STATUS_LABEL[column.slice.status]}
                </td>
                <td className="px-4 py-3" style={{ color: "#C9D6DF" }}>
                  {column.slice.result?.totalChunks ?? "—"}
                </td>
                <td className="px-4 py-3" style={{ color: "#C9D6DF" }}>
                  {column.slice.result ? `${column.slice.result.processingTimeMs} ms` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {columns.map((column) => (
          <div
            key={column.label}
            className="rounded-xl p-4 space-y-3"
            style={{
              backgroundColor: "rgba(30, 32, 34, 0.5)",
              borderColor: "rgba(82, 97, 107, 0.3)",
              borderWidth: "1px",
            }}
          >
            <h4 className="text-sm font-semibold" style={{ color: "#F0F5F9" }}>
              {column.label}
            </h4>
            <ChunkResultsList
              status={column.slice.status}
              result={column.slice.result}
              error={column.slice.error}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
