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
  const { setUser, setIsLoading, isLoading } = useAuthStore();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message ?? "Login failed");
      } else {
        setError("Something went wrong");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-8"
      style={{ backgroundColor: "#0B0D0F" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(82, 97, 107, 0.1), transparent)",
          }}
        />
      </div>

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="glass rounded-3xl p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl"
                style={{ backgroundColor: "#52616B" }}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#F0F5F9" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold" style={{ color: "#F0F5F9" }}>
              Welcome Back
            </h1>
            <p className="font-light" style={{ color: "#C9D6DF" }}>
              Login to continue your AI conversations
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <AuthInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <AuthInput
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            {error && (
              <div
                className="rounded-lg px-4 py-3"
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  borderColor: "rgba(239, 68, 68, 0.3)",
                  borderWidth: "1px",
                }}
              >
                <p className="text-sm font-medium" style={{ color: "#FF6B6B" }}>
                  {error}
                </p>
              </div>
            )}

            <AuthButton text="Sign In" isLoading={isLoading} />
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div
                className="w-full"
                style={{ borderTopColor: "#52616B", borderTopWidth: "1px" }}
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className="px-2"
                style={{
                  backgroundColor: "rgba(30, 32, 34, 0.8)",
                  color: "#52616B",
                }}
              >
                or
              </span>
            </div>
          </div>

          {/* Footer */}
          <AuthRedirectLink
            text="New to our platform?"
            linkText="Create an account"
            to="/register"
          />
        </div>

        {/* Trust indicator */}
        <div className="mt-8 text-center text-xs" style={{ color: "#52616B" }}>
          🔒 Your conversations are secure and encrypted
        </div>
      </div>
    </div>
  );
}
