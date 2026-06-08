import { useEffect } from "react";
import { getCurrentUser } from "../../services/auth.service";
import { useAuthStore } from "../../store/auth.store";
import { socket } from "../../services/socket";

export function AuthInitializer() {
    const {
        setUser,
        setIsAuthChecked,
    } = useAuthStore();

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const response = await getCurrentUser();

                setUser(response.user);

                if (!socket.connected) {
                    socket.connect();
                }
            } catch (error) {
                setUser(null);
            } finally {
                setIsAuthChecked(true);
            }
        };

        initializeAuth();
    }, [setUser, setIsAuthChecked]);

    return null;
}