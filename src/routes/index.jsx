// src/routes/index.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../modules/auth/hooks/useAuth';
import LoginPage from '../modules/auth/pages/LoginPage';
import RegisterPage from '../modules/auth/pages/RegisterPage';
import MainLayout from '../components/MainLayout';
import HomePage from '../modules/home/pages/HomePage'; 


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
          <MainLayout />
        </PrivateRoute>
      }
    >
      {/* <Route index element={<DashboardPage />} /> */}
    </Route>

    {/* Catch-all: redirige a home */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
