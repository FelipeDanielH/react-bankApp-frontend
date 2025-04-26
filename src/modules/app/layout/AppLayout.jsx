// src/modules/app/layout/AppLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavbarApp from '../../../components/NavbarApp'; // Asegúrate de que el path sea correcto

const AppLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar superior de la app */}
      <NavbarApp />

      <div className="d-flex flex-grow-1">
        <Sidebar />

        {/* Contenido dinámico */}
        <main className="flex-grow-1 p-4 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
