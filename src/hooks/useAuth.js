import { useContext } from "react";
import axios from "../api/axios";
import { AuthContext } from "../context/AuthProvider";

export const useAuth = () => {
    return useContext(AuthContext);
};

export const login = async (data) => {
    const response = await axios
        .post("/login", data)
        .then((res) => res.data)
        .catch((err) => err.response.status);

    return response;
};
