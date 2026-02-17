import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { useUserStore } from "../../providers/user-store";

const GuestRoute = ({ component }: { component: ReactNode }) => {
    const { isAuthenticated, isLoading } = useUserStore();

    if (isLoading) {
        return (
            <Backdrop
                open
                sx={{
                    color: "red",
                    backgroundColor: "white",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return component;
};

export default GuestRoute;
