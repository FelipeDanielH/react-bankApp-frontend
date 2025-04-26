// src/components/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import NavbarPublic from './NavbarPublic';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarPublic />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
