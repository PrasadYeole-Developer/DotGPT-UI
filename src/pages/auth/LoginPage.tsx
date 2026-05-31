import { useState } from "react";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthRedirectLink } from "../../components/auth/AuthRedirectLink";

export function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
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
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            })
                        }
                    />

                    <AuthInput
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />

                    <AuthButton text="Login" />
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