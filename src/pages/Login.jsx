import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { login, useAuth } from "../hooks/useAuth";
import useForm from "../hooks/useForm";

export default function Login() {
    const { setAuth } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const { values, handleChange } = useForm({
        initialValues: {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        },
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await login(values);
        const { token } = response;

        if (token) {
            localStorage.setItem("token", token);
            setAuth({ token });
            navigate(from, { replace: true });
        } else {
            setLoading(false);
            setError(response);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 300 }}>
                    <Input
                        name={"email"}
                        type={"email"}
                        value={"eve.holt@reqres.in"}
                        placeholder={"Email"}
                        handleChange={handleChange}
                    />
                    <br />
                    <Input
                        name={"password"}
                        type={"password"}
                        value={"cityslicka"}
                        placeholder={"Password"}
                        handleChange={handleChange}
                    />
                    <br />
                    {error && (
                        <small style={{ marginBottom: 16 }}>Something went wrong. Please try again.</small>
                    )}
                    <button type="submit" disabled={loading}>
                        {loading ? <i>Loading...</i> : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}
