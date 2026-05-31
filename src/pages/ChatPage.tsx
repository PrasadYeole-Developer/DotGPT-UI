export function ChatPage() {
    return (
        <div className="flex h-screen bg-zinc-950 text-white">
            <div className="flex flex-1 flex-col">
                <header className="border-b border-zinc-800 px-6 py-4">
                    <h1 className="text-lg font-semibold">
                        ChatGPT AI
                    </h1>
                </header>

                <main className="flex flex-1 items-center justify-center">
                    <h2 className="text-2xl font-medium text-zinc-400">
                        Start a conversation
                    </h2>
                </main>
            </div>
        </div>
    );
}