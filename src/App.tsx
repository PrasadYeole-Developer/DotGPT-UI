export function App() {
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{ backgroundColor: "#0B0D0F" }}
    >
      <div className="text-center space-y-3">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ backgroundColor: "rgba(82, 97, 107, 0.15)" }}
        >
          <div
            className="w-12 h-12 rounded-xl"
            style={{ backgroundColor: "#52616B" }}
          />
        </div>
        <h1 className="text-5xl font-bold" style={{ color: "#F0F5F9" }}>
          ChatGPT UI
        </h1>
        <p className="text-lg font-light" style={{ color: "#C9D6DF" }}>
          Modern AI Chat Interface
        </p>
      </div>
    </div>
  );
}
