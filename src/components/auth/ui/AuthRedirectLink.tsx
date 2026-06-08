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
        className="font-semibold transition-colors duration-200 cursor-pointer text-[#52616B] hover:text-[#6B7D8A]"
      >
        {linkText}
      </Link>
 
    </p>
  );
}
