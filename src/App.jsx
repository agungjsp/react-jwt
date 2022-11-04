import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import Layout from "./components/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Public Routes */}
                <Route element={<Login />} path="/login" />

                {/* Protected Routes */}
                <Route element={<PrivateRoutes />}>
                    <Route element={<Home />} path="/" exact />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
