import { useRoutes } from "react-router-dom";
import AuthRoute from "./middlewares/auth-only";

export default function AppRoutes() {
   return useRoutes([
    {
        path: "/",
        element: <AuthRoute component={<div>Delcio</div>} />
    },
    {
        path: "/signin",
        element: <div>FAZ O LOGIN</div>
    },
   ]);
};
