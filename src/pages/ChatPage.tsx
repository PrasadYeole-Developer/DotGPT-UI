import { useEffect } from "react";
import { ChatInput } from "../components/chat/ChatInput";
import { MessageList } from "../components/chat/MessageList";
import { Sidebar } from "../components/chat/Sidebar";
import { socket } from "../services/socket";
import { useChatStore } from "../store/chat.store";
import { getChats } from "../services/chat.service";
import { RiChatHistoryFill, RiChatHistoryLine } from "react-icons/ri";

export function ChatPage() {
  const {
    addMessage,
    setChats,
    setIsAiThinking,
    isTemporaryChat,
    setIsTemporaryChat,
    setActiveChat,
    setMessages,
  } = useChatStore();

  const handleTemporaryChatToggle = () => {
    if (!isTemporaryChat) {
      setActiveChat({
        id: `temp-${Date.now()}`,
        title: "Temporary Chat",
        lastActivity: new Date().toISOString(),
        userId: "",
        isTemporary: true,
      });

      setMessages([]);
      setIsTemporaryChat(true);
      return;
    }

    setActiveChat(null);
    setMessages([]);
    setIsTemporaryChat(false);
  };

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
    <div
      className="flex h-screen"
      style={{ backgroundColor: "#0B0D0F", color: "#F0F5F9" }}
    >
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header
          className="px-8 py-4 backdrop-blur-sm flex items-center justify-between"
          style={{
            borderBottomColor: "rgba(82, 97, 107, 0.3)",
            borderBottomWidth: "1px",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#52616B" }}
            />
            <h1 className="text-lg font-semibold">
              {isTemporaryChat
                ? "Temporary Chat"
                : "ChatGPT AI"}
            </h1>
          </div>
          <button
            onClick={handleTemporaryChatToggle}
            className="
    px-4
    py-2
    rounded-lg
    text-sm
    font-medium
    transition-all
    cursor-pointer
  "
            style={{
              backgroundColor: isTemporaryChat
                ? "#52616B"
                : "rgba(82, 97, 107, 0.15)",

              color: "#F0F5F9",

              border: "1px solid rgba(82,97,107,0.3)",
            }}
          >
            {isTemporaryChat ? <RiChatHistoryFill className="h-5 w-5" /> : <RiChatHistoryLine className="h-5 w-5" />}
          </button>
        </header>

        {/* Chat area */}
        <MessageList />
        <ChatInput />
      </div>
    </div>
  );
}
