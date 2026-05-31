import { AuthInput } from "../../components/auth/AuthInput";
import { AuthRedirectLink } from "../../components/auth/AuthRedirectLink";

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
                    <AuthInput
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <AuthInput
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-white py-3 font-medium text-black transition-all hover:opacity-90"
                    >
                        Login
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