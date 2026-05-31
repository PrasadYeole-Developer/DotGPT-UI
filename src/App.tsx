export function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-2xl mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          ChatGPT UI
        </h1>
        <p className="text-slate-400 text-lg font-light">
          Modern AI Chat Interface
        </p>
      </div>
    </div>
  );
}
