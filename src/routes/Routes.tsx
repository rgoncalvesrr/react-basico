import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, Login } from "../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
};