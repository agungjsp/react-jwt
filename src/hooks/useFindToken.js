import { useState, useEffect } from "react";

export default function useFindToken() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        function findToken() {
            localStorage.getItem("token") ? setToken(localStorage.getItem("token")) : setToken(null);
        }
        findToken();
    }, []);

    return {
        token,
        setToken,
    };
}
