import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

interface CopyMessageButtonProps {
    content: string;
}

export function CopyMessageButton({
    content,
}: CopyMessageButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="
        flex items-center gap-1
        text-xs
        cursor-pointer
        transition-opacity
        hover:opacity-80
      "
            style={{
                color: "#C9D6DF",
            }}
        >
            {copied ? (
                <>
                    <MdCheck />
                    Copied
                </>
            ) : (
                <>
                    <MdContentCopy />
                    Copy
                </>
            )}
        </button>
    );
}