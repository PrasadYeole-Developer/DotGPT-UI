interface AuthButtonProps {
    text: string;

    type?: "button" | "submit";
}

export function AuthButton({
    text,
    type = "submit",
}: AuthButtonProps) {
    return (
        <button
            type={type}
            className="w-full rounded-lg bg-white py-3 font-medium text-black transition-all hover:opacity-90"
        >
            {text}
        </button>
    );
}