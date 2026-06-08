import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({
    children,
}: ProtectedRouteProps) {
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

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}