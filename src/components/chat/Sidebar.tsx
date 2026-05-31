export function Sidebar() {
    return (
        <aside className="flex w-72 flex-col border-r border-zinc-800 bg-zinc-900">
            <div className="border-b border-zinc-800 p-4">
                <button className="w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition-all hover:opacity-90">
                    + New Chat
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
                <div className="space-y-2">
                    <button className="w-full rounded-lg px-3 py-3 text-left text-sm text-zinc-300 transition-all hover:bg-zinc-800">
                        AI Chat About React
                    </button>

                    <button className="w-full rounded-lg px-3 py-3 text-left text-sm text-zinc-300 transition-all hover:bg-zinc-800">
                        Node.js Discussion
                    </button>

                    <button className="w-full rounded-lg px-3 py-3 text-left text-sm text-zinc-300 transition-all hover:bg-zinc-800">
                        Gemini API Learning
                    </button>
                </div>
            </div>

            <div className="border-t border-zinc-800 p-4">
                <div className="rounded-lg bg-zinc-800 p-3">
                    <p className="text-sm font-medium text-white">
                        Logged In User
                    </p>

                    <p className="mt-1 text-xs text-zinc-400">
                        user@email.com
                    </p>
                </div>
            </div>
        </aside>
    );
}