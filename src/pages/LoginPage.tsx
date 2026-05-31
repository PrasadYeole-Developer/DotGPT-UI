export function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
            <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8 shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-zinc-400">
                        Login to continue chatting with AI
                    </p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all focus:border-zinc-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all focus:border-zinc-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-white py-3 font-medium text-black transition-all hover:opacity-90"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}