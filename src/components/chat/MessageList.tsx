import { useEffect, useRef } from "react";
import { useChatStore } from "../../store/chat.store";
import { MarkdownMessage } from "./MarkdownMessage";

export function MessageList() {
  const { messages, isAiThinking } = useChatStore();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isAiThinking]);

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-8 py-8 scroll-smooth">
      {messages.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl"
            style={{ backgroundColor: "rgba(82, 97, 107, 0.2)" }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#52616B" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold" style={{ color: "#C9D6DF" }}>
            Start a conversation
          </h2>
          <p className="text-center max-w-xs" style={{ color: "#52616B" }}>
            Ask me anything and I'll help you out
          </p>
        </div>
      ) : (
        messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"
              }`}
          >
            {message.role === "model" && (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1"
                style={{ backgroundColor: "#52616B" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#F0F5F9" }}
                >
                  <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h12m-12 4v8m0-8l2-2m-2 2l-2-2" />
                </svg>
              </div>
            )}
            <div
              className={`prose prose-invert max-w-2xl rounded-2xl px-6 py-4 text-base leading-relaxed ${message.role === "user" ? "rounded-br-none" : "rounded-bl-none"
                }`}
              style={
                message.role === "user"
                  ? {
                    backgroundColor: "#52616B",
                    color: "#F0F5F9",
                    boxShadow: "0 4px 12px rgba(82, 97, 107, 0.15)",
                  }
                  : {
                    backgroundColor: "rgba(82, 97, 107, 0.15)",
                    color: "#F0F5F9",
                    borderColor: "rgba(82, 97, 107, 0.3)",
                    borderWidth: "1px",
                  }
              }
            >
              <MarkdownMessage
                content={message.content}
              />
            </div>
          </div>
        ))
      )}

      {isAiThinking && (
        <div className="flex justify-start gap-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#52616B" }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: "#F0F5F9" }}
            >
              <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h12m-12 4v8m0-8l2-2m-2 2l-2-2" />
            </svg>
          </div>
          <div
            className="rounded-2xl rounded-bl-none px-6 py-4 flex items-center gap-2"
            style={{
              backgroundColor: "rgba(82, 97, 107, 0.15)",
              borderColor: "rgba(82, 97, 107, 0.3)",
              borderWidth: "1px",
            }}
          >
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
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
