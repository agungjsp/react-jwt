import { createBrowserRouter } from "react-router-dom";
//pages
import App from "./App";
import Login from "./pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "login",
        element: <Login />,
    },
]);
