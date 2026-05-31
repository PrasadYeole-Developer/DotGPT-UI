import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-2xl space-y-8 text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-3xl shadow-lg shadow-cyan-600/20">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Chat with AI
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 font-light leading-relaxed">
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
              <h3 className="font-semibold text-slate-50">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => navigate("/register")}
            className="btn-primary-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="btn-primary-cyan px-8 py-3 text-lg shadow-lg shadow-cyan-600/20 hover:shadow-xl transition-all duration-300"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-cyan-600/10 to-transparent rounded-full blur-3xl -z-10" />
    </div>
  );
};
