import { useState } from "react";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthRedirectLink } from "../../components/auth/AuthRedirectLink";

export function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
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
                        <AuthInput
                            label="First Name"
                            type="text"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    firstName: e.target.value,
                                })
                            }
                        />

                        <AuthInput
                            label="Last Name"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    lastName: e.target.value,
                                })
                            }
                        />
                    </div>

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
                        placeholder="Create a password"
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