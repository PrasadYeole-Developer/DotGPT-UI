import { useNavigate } from "react-router-dom";
import { createChat } from "../../services/chat.service";
import { getMessagesByChat } from "../../services/message.service";
import { useAuthStore } from "../../store/auth.store";
import { useChatStore } from "../../store/chat.store";
import { socket } from "../../services/socket";
import { logoutUser } from "../../services/auth.service";
import { useState } from "react";

export function Sidebar() {
  const navigate = useNavigate();
  const [isCreatingChat, setIsCreatingChat] = useState<boolean>(false);
  const [chatTitle, setChatTitle] = useState<string>("");
  const { chats, activeChat, setChats, setActiveChat, setMessages } =
    useChatStore();
  const { user, setUser } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logoutUser();
      socket.disconnect();
      setUser(null);
      setChats([]);
      setMessages([]);
      setActiveChat(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateNewChat = async () => {
    if (!chatTitle.trim()) {
      return;
    }

    try {
      const response = await createChat(chatTitle);
      setChats([response.chat, ...chats]);
      setActiveChat(response.chat);
      setMessages([]);
      setChatTitle("");
      setIsCreatingChat(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChat = async (chatId: string) => {
    if (activeChat?.id === chatId) {
      return;
    }

    try {
      const chat = chats.find((c) => c.id === chatId);
      if (chat) {
        setActiveChat(chat);
        const response = await getMessagesByChat(chatId);
        setMessages(response.messages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="flex w-72 flex-col border-r border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
      {/* Header */}
      <div className="border-b border-slate-800/50 p-4 space-y-3">
        <div className="flex items-center gap-3 px-1">
          <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full" />
          <h2 className="text-sm font-semibold text-slate-300">ChatGPT</h2>
        </div>

        {isCreatingChat ? (
          <div className="flex gap-2">
            <input
              autoFocus
              type="text"
              placeholder="Enter chat title..."
              value={chatTitle}
              onChange={(e) => setChatTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCreateNewChat();
                } else if (e.key === "Escape") {
                  setIsCreatingChat(false);
                  setChatTitle("");
                }
              }}
              className="flex-1 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
            />
            <button
              onClick={handleCreateNewChat}
              className="px-3 py-2 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition-colors"
            >
              ✓
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsCreatingChat(true)}
            className="w-full btn-primary-white py-2.5 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h12m-12 4v8m0-8l2-2m-2 2l-2-2" />
            </svg>
            New Chat
          </button>
        )}
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {chats.length === 0 ? (
          <div className="text-center py-8 text-slate-500 text-sm">
            <p>No chats yet</p>
            <p className="text-xs mt-1">Create one to get started</p>
          </div>
        ) : (
          chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleSelectChat(chat.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 truncate ${
                activeChat?.id === chat.id
                  ? "bg-cyan-600/20 border border-cyan-500/30 text-cyan-300"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-300"
              }`}
              title={chat.title}
            >
              <span className="block truncate">{chat.title}</span>
            </button>
          ))
        )}
      </div>

      {/* User profile */}
      <div className="border-t border-slate-800/50 p-4 space-y-3">
        <div className="glass rounded-xl p-4 space-y-3">
          <div>
            <p className="text-sm font-semibold text-slate-50">
              {user?.name.firstName} {user?.name.lastName}
            </p>
            <p className="text-xs text-slate-500 mt-1 truncate">
              {user?.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-600/30 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
