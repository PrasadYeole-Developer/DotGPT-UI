interface GenerateButtonProps {
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export function GenerateButton({
  label = "Generate Chunks",
  isLoading = false,
  disabled = false,
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-full btn-primary-light py-2.5 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
        </svg>
      )}
      {isLoading ? "Generating..." : label}
    </button>
  );
}
