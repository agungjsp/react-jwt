import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth({ token });
            navigate("/", { replace: true });
        } else {
            navigate("/login", { replace: true });
        }
    }, []);

    return (
        <main className="App">
            <Outlet />
        </main>
    );
};

export default Layout;
