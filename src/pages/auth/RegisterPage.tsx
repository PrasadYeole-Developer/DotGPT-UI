import { AuthRedirectLink } from "../../components/auth/AuthRedirectLink";

export function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
            <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8 shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="mt-2 text-sm text-zinc-400">
                        Start chatting with AI today
                    </p>
                </div>

                <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-2 block text-sm text-zinc-300">
                                First Name
                            </label>

                            <input
                                type="text"
                                placeholder="John"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all focus:border-zinc-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-zinc-300">
                                Last Name
                            </label>

                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all focus:border-zinc-500"
                            />
                        </div>
                    </div>

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
                            placeholder="Create a password"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all focus:border-zinc-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-white py-3 font-medium text-black transition-all hover:opacity-90"
                    >
                        Register
                    </button>
                </form>
                <AuthRedirectLink
                    text="Don't have an account?"
                    linkText="Register"
                    to="/register"
                />
            </div>
        </div>
    );
}