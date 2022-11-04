import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setAuth({ token: null });
        navigate("/login", { replace: true });
    };

    return (
        <div>
            <h1>You're Logged In</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
