import { useState } from "react";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthRedirectLink } from "../../components/auth/AuthRedirectLink";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { socket } from "../../services/socket";
import { registerUser } from "../../services/auth.service";

export function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError("");
      const response = await registerUser({
        email: formData.email,
        password: formData.password,
        fullName: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      });

      setUser(response.user);
      socket.connect();
      navigate("/chat");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-linear-to-t from-cyan-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="glass border-slate-800/50 rounded-3xl p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-cyan-600 to-cyan-700 rounded-2xl">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white">Create Account</h1>
            <p className="text-slate-400 font-light">
              Join and start chatting with AI today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <AuthInput
                label="First Name"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />

              <AuthInput
                label="Last Name"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>

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
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
                <p className="text-sm text-red-400 font-medium">{error}</p>
              </div>
            )}

            <AuthButton text="Create Account" />
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-900/50 text-slate-500">or</span>
            </div>
          </div>

          {/* Footer */}
          <AuthRedirectLink
            text="Already have an account?"
            linkText="Sign in"
            to="/login"
          />
        </div>

        {/* Trust indicator */}
        <div className="mt-8 text-center text-xs text-slate-500">
          🔒 Your data is secure and will never be shared
        </div>
      </div>
    </div>
  );
}
