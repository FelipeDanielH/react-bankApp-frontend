// src/routes/index.jsx

import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks/useAuth";

import LoginPage from '../modules/auth/pages/LoginPage';
import RegisterPage from '../modules/auth/pages/RegisterPage';
import MainLayout from '../components/MainLayout';

/* 
import DashboardPage from '../modules/dashboard/pages/DashboardPage';
import OperacionesPage from '../modules/operaciones/pages/OperacionesPage';
import CartolaPage from '../modules/cartola/pages/CartolaPage';
import CuentaPage from '../modules/cuenta/pages/CuentaPage';
import AjustesPage from '../modules/ajustes/pages/AjustesPage';
import TarjetasPage from '../modules/tarjetas/pages/TarjetasPage';
*/


const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
    <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas protegidas envueltas con MainLayout */}
        <Route
            path="/"
            element={
                <PrivateRoute>
                    <MainLayout />
                </PrivateRoute>
            }
        >
            {/*      <Route index element={<DashboardPage />} />
      <Route path="operaciones" element={<OperacionesPage />} />
      <Route path="cartola" element={<CartolaPage />} />
      <Route path="cuenta" element={<CuentaPage />} />
      <Route path="ajustes" element={<AjustesPage />} />
      <Route path="tarjetas" element={<TarjetasPage />} /> */}
        </Route>

        {/* Redireccion por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AppRoutes;
