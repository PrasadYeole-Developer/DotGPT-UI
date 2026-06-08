import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

interface MarkdownMessageProps {
    content: string;
}

export function MarkdownMessage({
    content,
}: MarkdownMessageProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code(props) {
                    const { children, className } = props;

                    const match = /language-(\w+)/.exec(
                        className || "",
                    );

                    const code = String(children).replace(/\n$/, "");

                    if (!match) {
                        return (
                            <code
                                className="px-1.5 py-0.5 rounded bg-white/10"
                            >
                                {children}
                            </code>
                        );
                    }

                    return (
                        <CodeBlock
                            language={match[1]}
                            code={code}
                        />
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}

interface CodeBlockProps {
    language: string;
    code: string;
}

function CodeBlock({
    language,
    code,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="relative my-4 overflow-hidden rounded-xl">
            <div
                className="flex items-center justify-between px-4 py-2 text-xs"
                style={{
                    backgroundColor: "#111827",
                    color: "#C9D6DF",
                }}
            >
                <span>{language}</span>

                <button
                    onClick={handleCopy}
                    className="cursor-pointer hover:opacity-80"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>

            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    borderRadius: 0,
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}