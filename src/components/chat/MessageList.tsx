import { useEffect, useRef } from "react";
import { useChatStore } from "../../store/chat.store";

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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-2xl">
            <svg
              className="w-8 h-8 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-slate-300">
            Start a conversation
          </h2>
          <p className="text-slate-500 text-center max-w-xs">
            Ask me anything and I'll help you out
          </p>
        </div>
      ) : (
        messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-4 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "model" && (
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-600 to-cyan-700 flex items-center justify-center shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h12m-12 4v8m0-8l2-2m-2 2l-2-2" />
                </svg>
              </div>
            )}
            <div
              className={`max-w-2xl rounded-2xl px-6 py-4 text-base leading-relaxed ${
                message.role === "user"
                  ? "bg-linear-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-600/20 rounded-br-none"
                  : "bg-slate-800/50 border border-slate-700/50 text-slate-100 rounded-bl-none"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))
      )}

      {isAiThinking && (
        <div className="flex justify-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-600 to-cyan-700 flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h12m-12 4v8m0-8l2-2m-2 2l-2-2" />
            </svg>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl rounded-bl-none px-6 py-4 flex items-center gap-2">
            <div className="flex gap-1">
              <div
                className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
            <span className="text-slate-400 text-sm ml-1">AI is thinking</span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
