import { useNavigate } from "react-router-dom";
import { createChat } from "../../services/chat.service";
import { getMessagesByChat } from "../../services/message.service";
import { useAuthStore } from "../../store/auth.store";
import { useChatStore } from "../../store/chat.store";
import { socket } from "../../services/socket";
import { logoutUser } from "../../services/auth.service";

export function Sidebar() {
    const navigate = useNavigate();
    const {
        chats,
        activeChat,
        setChats,
        setActiveChat,
        setMessages,
    } = useChatStore();
    const { user, setUser } = useAuthStore();
    const handleCreateChat = async () => {
        try {
            const response = await createChat(
                "New Chat",
            );

            setChats([
                response.chat,
                ...chats,
            ]);

            setActiveChat(response.chat);
            setMessages([]);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

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

    return (
        <aside className="flex w-72 flex-col border-r border-zinc-800 bg-zinc-900">
            <div className="border-b border-zinc-800 p-4">
                <button
                    onClick={handleCreateChat}
                    className="w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition-all hover:opacity-90">
                    + New Chat
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
                <div className="space-y-2">
                    {chats.map((chat) => (
                        <button
                            key={chat.id}
                            onClick={async () => {
                                if (activeChat?.id === chat.id) {
                                    return;
                                }

                                try {
                                    setActiveChat(chat);

                                    const response =
                                        await getMessagesByChat(
                                            chat.id,
                                        );

                                    setMessages(response.messages);
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                            className={`w-full rounded-lg px-3 py-3 text-left text-sm transition-all hover:bg-zinc-800 ${activeChat?.id === chat.id
                                ? "bg-zinc-800 text-white"
                                : "text-zinc-300"
                                }`}                        >
                            {chat.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="border-t border-zinc-800 p-4">
                <div className="rounded-lg bg-zinc-800 p-3">
                    <p className="text-sm font-medium text-white">
                        {user?.name.firstName}{" "}
                        {user?.name.lastName}
                    </p>

                    <p className="mt-1 text-xs text-zinc-400">
                        {user?.email}
                    </p>

                    <button
                        onClick={handleLogout}
                        className="mt-4 w-full rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white transition-all hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </aside >
    );
}