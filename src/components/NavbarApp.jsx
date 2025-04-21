// src/components/NavbarApp.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../modules/auth/hooks/useAuth';

const NavbarApp = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand fw-bold" style={{ color: '#6f22d2' }}>
          BancoSimple
        </Link>
      </div>
    </nav>
  );
};

export default NavbarApp;
