import { useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";
import type { Chunk } from "../../types/chunking.types";

interface ChunkResultCardProps {
  chunk: Chunk;
}

const COLLAPSE_THRESHOLD = 280;

export function ChunkResultCard({ chunk }: ChunkResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const isLong = chunk.content.length > COLLAPSE_THRESHOLD;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(chunk.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-xl p-4 space-y-3"
      style={{
        backgroundColor: "rgba(82, 97, 107, 0.12)",
        borderColor: "rgba(82, 97, 107, 0.3)",
        borderWidth: "1px",
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="px-2.5 py-1 rounded-lg text-xs font-semibold"
          style={{ backgroundColor: "#52616B", color: "#F0F5F9" }}
        >
          Chunk {chunk.index + 1}
        </span>

        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: "#52616B" }}>
            {chunk.characterCount.toLocaleString()} chars
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs cursor-pointer transition-opacity hover:opacity-80"
            style={{ color: "#C9D6DF" }}
          >
            {copied ? (
              <>
                <MdCheck />
                Copied
              </>
            ) : (
              <>
                <MdContentCopy />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      <p
        className="text-sm leading-relaxed whitespace-pre-wrap"
        style={{
          color: "#F0F5F9",
          maxHeight: isLong && !isExpanded ? "6.5rem" : undefined,
          overflow: isLong && !isExpanded ? "hidden" : undefined,
        }}
      >
        {chunk.content}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-medium cursor-pointer"
          style={{ color: "#C9D6DF" }}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
