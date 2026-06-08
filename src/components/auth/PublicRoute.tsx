import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

interface PublicRouteProps {
    children: React.ReactNode;
}

export function PublicRoute({
    children,
}: PublicRouteProps) {
    const {
        user,
        isAuthChecked,
    } = useAuthStore();

    if (!isAuthChecked) {
        return (
            <div
                className="flex h-screen items-center justify-center"
                style={{
                    backgroundColor: "#0B0D0F",
                    color: "#F0F5F9",
                }}
            >
                Loading...
            </div>
        );
    }

    if (user) {
        return <Navigate to="/chat" replace />;
    }

    return <>{children}</>;
}