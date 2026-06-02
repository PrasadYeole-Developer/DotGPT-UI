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
    <p className="text-center text-sm mt-6" style={{ color: "#C9D6DF" }}>
      {text}{" "}
      <Link
        to={to}
        className="font-semibold transition-colors duration-200 cursor-pointer"
        style={{ color: "#52616B" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#6B7D8A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#52616B";
        }}
      >
        {linkText}
      </Link>
    </p>
  );
}
