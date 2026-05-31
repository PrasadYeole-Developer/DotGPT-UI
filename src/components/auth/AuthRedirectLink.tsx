import { Link } from "react-router-dom";

interface AuthRedirectLinkProps {
    text: string;

    linkText: string;

    to: string;
}

export function AuthRedirectLink({
    text,
    linkText,
    to,
}: AuthRedirectLinkProps) {
    return (
        <p className="mt-6 text-center text-sm text-zinc-400">
            {text}{" "}

            <Link
                to={to}
                className="font-medium text-white transition-all hover:opacity-80"
            >
                {linkText}
            </Link>
        </p>
    );
}