import { useChunkingStore } from "../../store/chunking.store";

export function DocumentInput() {
  const { document, setDocument } = useChunkingStore();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          className="text-sm font-semibold"
          style={{ color: "#F0F5F9" }}
        >
          Document
        </label>
        <span className="text-xs" style={{ color: "#52616B" }}>
          {document.length.toLocaleString()} characters
        </span>
      </div>

      <textarea
        rows={10}
        placeholder="Paste or type the document you want to chunk..."
        value={document}
        onChange={(e) => setDocument(e.target.value)}
        className="w-full resize-none rounded-xl p-4 text-sm leading-relaxed outline-none transition-colors duration-200"
        style={{
          backgroundColor: "rgba(82, 97, 107, 0.12)",
          borderColor: "rgba(82, 97, 107, 0.3)",
          borderWidth: "1px",
          color: "#F0F5F9",
        }}
      />
    </div>
  );
}
