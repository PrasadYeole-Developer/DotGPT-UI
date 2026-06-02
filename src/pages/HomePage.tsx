import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#0B0D0F" }}
    >
      {/* Hero Section */}
      <div className="max-w-2xl space-y-8 text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl shadow-lg"
            style={{ backgroundColor: "#52616B" }}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#F0F5F9" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight"
            style={{ color: "#F0F5F9" }}
          >
            Chat with AI
          </h1>
          <p
            className="text-xl sm:text-2xl font-light leading-relaxed"
            style={{ color: "#C9D6DF" }}
          >
            Experience intelligent conversations with our modern AI chat
            interface
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-4 py-8">
          {[
            { icon: "⚡", title: "Fast", desc: "Real-time responses" },
            { icon: "🔒", title: "Secure", desc: "Your data is safe" },
            { icon: "✨", title: "Modern", desc: "Beautiful UI" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-4 space-y-2"
            >
              <div className="text-2xl">{feature.icon}</div>
              <h3 className="font-semibold" style={{ color: "#F0F5F9" }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: "#C9D6DF" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => navigate("/register")}
            className="btn-primary-light px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="btn-primary-accent px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(82, 97, 107, 0.1), transparent)",
        }}
      />
    </div>
  );
};
