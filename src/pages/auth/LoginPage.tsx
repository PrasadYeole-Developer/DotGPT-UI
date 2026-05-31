import { useState } from "react";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthRedirectLink } from "../../components/auth/AuthRedirectLink";
import { useAuthStore } from "../../store/auth.store";
import { loginUser } from "../../services/auth.service";
import type { LoginPayload } from "../../types/auth.types";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { socket } from "../../services/socket";

export function LoginPage() {
    const [formData, setFormData] = useState<LoginPayload>({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault();

        try {
            setError("");
            setIsLoading(true);

            const response = await loginUser({
                email: formData.email,
                password: formData.password,
            });

            setUser(response.user);
            socket.connect();
            navigate("/chat");

            console.log(response);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(
                    error.response?.data?.message ||
                    "Login failed",
                );
            } else {
                setError("Something went wrong");
            }
        } finally {
            setIsLoading(false);
        }
    };
    const {
        setUser,
        setIsLoading,
        isLoading,
    } = useAuthStore();
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

                <form
                    onSubmit={handleLogin}
                    className="space-y-5"
                >
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
                    {error && (
                        <p className="text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    <AuthButton
                        text="Login"
                        isLoading={isLoading}
                    />
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