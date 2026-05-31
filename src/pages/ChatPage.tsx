import { useEffect } from "react";
import { ChatInput } from "../components/chat/ChatInput";
import { MessageList } from "../components/chat/MessageList";
import { Sidebar } from "../components/chat/Sidebar"
import { socket } from "../services/socket";
import { useChatStore } from "../store/chat.store";
import { getChats } from "../services/chat.service";

export function ChatPage() {
    const { addMessage, setChats, setIsAiThinking } = useChatStore();
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
    useEffect(() => {
        const loadChats = async () => {
            try {
                const response =
                    await getChats();

                setChats(response.chats);
            } catch (error) {
                console.log(error);
            }
        };

        loadChats();
    }, [setChats]);
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