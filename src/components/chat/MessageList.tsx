import { useChatStore } from "../../store/chat.store";

export function MessageList() {
    const { messages } = useChatStore();

    return (
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-8">
            {messages.length === 0 ? (
                <div className="flex flex-1 items-center justify-center">
                    <h2 className="text-2xl font-medium text-zinc-400">
                        Start a conversation
                    </h2>
                </div>
            ) : (
                messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                    >
                        <div
                            className={`max-w-3xl rounded-2xl px-4 py-3 text-sm leading-7 ${message.role === "user"
                                    ? "bg-white text-black"
                                    : "bg-zinc-800 text-white"
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}