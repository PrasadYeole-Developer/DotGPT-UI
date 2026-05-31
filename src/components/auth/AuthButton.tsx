interface AuthButtonProps {
  text: string;
  type?: "button" | "submit";
  isLoading?: boolean;
}

export function AuthButton({
  text,
  type = "submit",
  isLoading = false,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="w-full btn-primary-white py-3 text-base font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        text
      )}
    </button>
  );
}
