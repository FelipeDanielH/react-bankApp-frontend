// src/components/NavbarPublic.jsx
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../modules/auth/hooks/useAuth';
const NavbarPublic = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm fixed-top">
      <div className="w-100 d-flex justify-content-between align-items-center px-4">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#6f22d2' }}>
          BancoSimple
        </Link>

        {/* Secciones visibles solo en home */}
        {isHome && (
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#como-funciona">Cómo funciona</a></li>
            <li className="nav-item"><a className="nav-link" href="#beneficios">Beneficios</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        )}

        <div className="d-flex gap-2">
          {!isAuthenticated && !isAuthPage ? (
            <>
              <Link to="/register" className="btn btn-outline-primary">Crear cuenta</Link>
              <Link to="/login" className="btn btn-primary" style={{ backgroundColor: '#6f22d2', borderColor: '#6f22d2' }}>
                Ingresar
              </Link>
            </>
          ) : isAuthenticated && (
            <Link to="/app" className="btn btn-success">Entrar a BancoSimple</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarPublic;
