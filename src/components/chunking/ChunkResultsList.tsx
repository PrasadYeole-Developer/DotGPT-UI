import { MdInfoOutline } from "react-icons/md";
import type { ChunkingResult, ChunkingStatus } from "../../types/chunking.types";
import { ChunkResultCard } from "./ChunkResultCard";

interface ChunkResultsListProps {
  status: ChunkingStatus;
  result: ChunkingResult | null;
  error: string | null;
}

export function ChunkResultsList({
  status,
  result,
  error,
}: ChunkResultsListProps) {
  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16">
        <div className="flex gap-1">
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#52616B", animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#52616B", animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#52616B", animationDelay: "300ms" }}
          />
        </div>
        <p className="text-sm" style={{ color: "#C9D6DF" }}>
          Generating chunks...
        </p>
      </div>
    );
  }

  if (status === "backend-pending") {
    return (
      <div
        className="flex items-start gap-3 rounded-xl p-4"
        style={{
          backgroundColor: "rgba(82, 97, 107, 0.15)",
          borderColor: "rgba(82, 97, 107, 0.3)",
          borderWidth: "1px",
        }}
      >
        <MdInfoOutline className="shrink-0 mt-0.5" style={{ color: "#C9D6DF" }} />
        <p className="text-sm leading-relaxed" style={{ color: "#C9D6DF" }}>
          {error ?? "Backend integration pending."}
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        className="flex items-start gap-3 rounded-xl p-4"
        style={{
          backgroundColor: "rgba(159, 86, 86, 0.15)",
          borderColor: "rgba(159, 86, 86, 0.3)",
          borderWidth: "1px",
        }}
      >
        <MdInfoOutline className="shrink-0 mt-0.5" style={{ color: "#D97373" }} />
        <p className="text-sm leading-relaxed" style={{ color: "#D97373" }}>
          {error ?? "Something went wrong."}
        </p>
      </div>
    );
  }

  if (status === "success" && result) {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <span
            className="px-3 py-1.5 rounded-lg font-medium"
            style={{ backgroundColor: "rgba(82, 97, 107, 0.2)", color: "#F0F5F9" }}
          >
            {result.totalChunks} chunks
          </span>
          <span
            className="px-3 py-1.5 rounded-lg font-medium"
            style={{ backgroundColor: "rgba(82, 97, 107, 0.2)", color: "#F0F5F9" }}
          >
            {result.processingTimeMs} ms
          </span>
        </div>

        <div className="space-y-3">
          {result.chunks.map((chunk) => (
            <ChunkResultCard key={chunk.index} chunk={chunk} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl"
        style={{ backgroundColor: "rgba(82, 97, 107, 0.2)" }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "#52616B" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <p className="text-sm font-medium" style={{ color: "#C9D6DF" }}>
        No chunks generated yet
      </p>
      <p className="text-xs max-w-xs" style={{ color: "#52616B" }}>
        Enter a document, adjust the configuration, and click Generate.
      </p>
    </div>
  );
}
