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
            className="w-full rounded-lg bg-white py-3 font-medium text-black transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
            {isLoading ? "Loading..." : text}
        </button>
    );
}