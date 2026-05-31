import { useEffect } from "react";
import { ChatInput } from "../components/chat/ChatInput";
import { MessageList } from "../components/chat/MessageList";
import { Sidebar } from "../components/chat/Sidebar";
import { socket } from "../services/socket";
import { useChatStore } from "../store/chat.store";
import { getChats } from "../services/chat.service";

export function ChatPage() {
  const { addMessage, setChats, setIsAiThinking } = useChatStore();

  useEffect(() => {
    socket.on("ai-response", (message) => {
      setIsAiThinking(false);
      addMessage({
        chat: message.chat,
        content: message.content,
        role: "model",
      });
    });

    return () => {
      socket.off("ai-response");
    };
  }, [addMessage, setIsAiThinking]);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const response = await getChats();
        setChats(response.chats);
      } catch (error) {
        console.log(error);
      }
    };

    loadChats();
  }, [setChats]);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-50">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="border-b border-slate-800/50 px-8 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse" />
            <h1 className="text-lg font-semibold text-slate-50">ChatGPT AI</h1>
          </div>
        </header>

        {/* Chat area */}
        <MessageList />
        <ChatInput />
      </div>
    </div>
  );
}
