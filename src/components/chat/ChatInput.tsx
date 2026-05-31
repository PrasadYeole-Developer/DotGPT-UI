import { useState } from "react";
import { useChatStore } from "../../store/chat.store";
import { socket } from "../../services/socket";

export function ChatInput() {
    const [message, setMessage] = useState<string>("");
    const {
        activeChat,
        addMessage,
    } = useChatStore();

    const handleSendMessage = (
        e: React.FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault();

        if (!message.trim()) {
            return;
        }
        console.log(activeChat);

        if (!activeChat) {
            return;
        }
        const messagePayload = {
            chat: activeChat.id,
            content: message,
        };

        addMessage({
            ...messagePayload,
            role: "user",
        });

        socket.emit(
            "ai-message",
            messagePayload,
        );

        setMessage("");
    };

    return (
        <form
            onSubmit={handleSendMessage}
            className="border-t border-zinc-800 p-4"
        >
            <div className="flex items-end gap-3 rounded-2xl border border-zinc-700 bg-zinc-900 p-3">
                <textarea
                    rows={1}
                    placeholder="Message AI..."
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    className="max-h-40 flex-1 resize-none bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                />

                <button
                    type="submit"
                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:opacity-90"
                >
                    Send
                </button>
            </div>
        </form>
    );
}