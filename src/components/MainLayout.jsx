// src/components/MainLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import NavbarPublic from './NavbarPublic';
import NavbarApp from './NavbarApp';
import Footer from './Footer';

const MainLayout = () => {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app') || location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="d-flex flex-column min-vh-100">

      {isAppRoute ? <NavbarApp /> : <NavbarPublic />}


      {/* Main crece pero no envuelve al navbar/footer */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {!isAppRoute && <Footer />}
    </div>
  );
};

export default MainLayout;

