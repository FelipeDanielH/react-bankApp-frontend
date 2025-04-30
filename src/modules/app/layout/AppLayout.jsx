// src/modules/app/layout/AppLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavbarApp from '../../../components/NavbarApp'; // Asegúrate de que el path sea correcto

//TODO: despues cambiar el color del fondo del sidebar a #6D28D9

const AppLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar superior de la app */}
      <NavbarApp />

  
      <div className="d-flex flex-grow-1 min-h-0">
        <Sidebar />

        {/* Contenido dinámico */}
        <main className="flex-grow-1 p-4 bg-light overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
