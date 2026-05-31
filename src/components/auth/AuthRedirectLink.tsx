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
    <p className="text-center text-sm text-slate-400 mt-6">
      {text}{" "}
      <Link
        to={to}
        className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
      >
        {linkText}
      </Link>
    </p>
  );
}
