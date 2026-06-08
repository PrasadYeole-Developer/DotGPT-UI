import { createPortal } from "react-dom";

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
    isLoading?: boolean;
}

export function ConfirmDialog({
    isOpen,
    title,
    description,
    onConfirm,
    onCancel,
    isLoading = false,
}: ConfirmDialogProps) {
    if (!isOpen) return null;

    return createPortal(
        <div
            className="
        fixed inset-0 z-9999
        bg-black/60 backdrop-blur-sm
        flex justify-center
        items-center
        md:items-start
        md:pt-10
      "
        >
            <div
                className="
          w-[90%]
          max-w-md
          rounded-2xl
          p-6
          shadow-2xl
        "
                style={{
                    backgroundColor: "#1E2022",
                    border: "1px solid rgba(82, 97, 107, 0.3)",
                }}
            >
                <h2
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#F0F5F9" }}
                >
                    {title}
                </h2>

                <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#C9D6DF" }}
                >
                    {description}
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        disabled={isLoading}
                        className="px-4 py-2 rounded-lg cursor-pointer"
                        style={{
                            backgroundColor: "rgba(82, 97, 107, 0.15)",
                            color: "#C9D6DF",
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="px-4 py-2 rounded-lg cursor-pointer disabled:opacity-50"
                        style={{
                            backgroundColor: "#D97373",
                            color: "#F0F5F9",
                        }}
                    >
                        {isLoading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}