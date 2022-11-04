import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoutes = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return auth.token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};
