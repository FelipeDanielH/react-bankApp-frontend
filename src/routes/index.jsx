// src/routes/index.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../modules/auth/hooks/useAuth';
import LoginPage from '../modules/auth/pages/LoginPage';
import RegisterPage from '../modules/auth/pages/RegisterPage';
import MainLayout from '../components/MainLayout';
import HomePage from '../modules/home/pages/HomePage';
import AppLayout from '../modules/app/layout/AppLayout';

// Importa tus páginas de módulo
import DashboardPage from '../modules/dashboard/pages/DashboardPage';
import OperacionesPage from '../modules/operaciones/pages/OperacionesPage';
import CartolaPage from '../modules/cartola/pages/CartolaPage';
import CuentaPage from '../modules/cuenta/pages/CuentaPage';
import TarjetasPage from '../modules/tarjetas/pages/TarjetasPage';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => (
  <Routes>
    {/* Layout Público */}
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>

    {/* Layout Protegido: /app */}
    <Route
      path="/app"
      element={
        <PrivateRoute>
          <AppLayout />
        </PrivateRoute>
      }
    >
      {/* Ruta /app exact */}
      <Route index element={<DashboardPage />} />

      {/* Rutas hijas */}
      <Route path="operaciones" element={<OperacionesPage />} />
      <Route path="historial" element={<CartolaPage />} />
      <Route path="cuenta" element={<CuentaPage />} />
      <Route path="tarjetas" element={<TarjetasPage />} />
    </Route>

    {/* Catch-all */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
