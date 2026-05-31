import { useEffect } from "react";
import { ChatInput } from "../components/chat/ChatInput";
import { MessageList } from "../components/chat/MessageList";
import { Sidebar } from "../components/chat/Sidebar"
import { socket } from "../services/socket";
import { useChatStore } from "../store/chat.store";

export function ChatPage() {
    const { addMessage, setIsAiThinking } = useChatStore();
    useEffect(() => {
        socket.on(
            "ai-response",
            (message) => {
                setIsAiThinking(false);
                addMessage({
                    chat: message.chat,
                    content: message.content,
                    role: "model",
                });
            },
        );

        return () => {
            socket.off("ai-response");
        };
    }, [addMessage]);
    return (
        <div className="flex h-screen bg-zinc-950 text-white">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <header className="border-b border-zinc-800 px-6 py-4">
                    <h1 className="text-lg font-semibold">
                        ChatGPT AI
                    </h1>
                </header>
                <MessageList />
                <ChatInput />
            </div>
        </div>
    );
}