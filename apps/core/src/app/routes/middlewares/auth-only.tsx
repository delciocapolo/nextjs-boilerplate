import { type ReactNode, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { ForbiddenPage, LoadingComponent, LayoutPage  } from "@medicare.core.frontend/ui-components";
import { useUserStore } from "../../providers/user-store";

type Props = {
    code?: string;
    component: ReactNode;
};

export default function AuthRoute ({ component, code }: Props) {
    const { user, isAuthenticated, isLoading } = useUserStore();

    if (isLoading) {
        return (
            <Backdrop open sx={{ color: "red", backgroundColor: "white", zIndex: (theme) => theme.zIndex.drawer + 1, }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    const hasAccess = !code || user?.menus.some((menu) => menu.page_code === code);

    if (!hasAccess) {
        return (
            <LayoutPage>
                <Suspense fallback={<LoadingComponent />}>
                    <ForbiddenPage />
                </Suspense>
            </LayoutPage>
        );
    }

    return (
        <LayoutPage>
            <Suspense fallback={<LoadingComponent />}>
                {component}
            </Suspense>
        </LayoutPage>
    );
};
