// src/modules/app/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/hooks/useAuth';

const Sidebar = () => {
  const location = useLocation();
  const { logout, user } = useAuth();

  const links = [
    { path: '/app', label: 'Inicio', icon: 'bi-house-door' },
    { path: '/app/operaciones', label: 'Operaciones', icon: 'bi-arrow-left-right' },
    { path: '/app/historial', label: 'Cartola', icon: 'bi-receipt' },
    { path: '/app/cuenta', label: 'Cuenta', icon: 'bi-person' },
    { path: '/app/tarjetas', label: 'Tarjetas', icon: 'bi-credit-card' },
  ];

  return (
    <aside
      className="d-flex flex-column p-3 bg-white border-end h-100 shadow-sm"
      style={{ width: '240px' }}
    >
      {/* Logo o título */}
      <Link
        to="/"
        className="mb-4 fs-4 fw-bold text-decoration-none"
        style={{ color: '#6f22d2' }}
      >
        Inicio
      </Link>

      {/* Bloque scrollable para los enlaces */}
      <div className="flex-grow-1 overflow-auto">
        <ul className="nav nav-pills flex-column mb-0">
          {links.map(({ path, label, icon }) => (
            <li className="nav-item" key={path}>
              <Link
                to={path}
                className={`nav-link d-flex align-items-center ${
                  location.pathname === path ? 'active' : 'text-dark'
                }`}
                style={{ gap: '8px' }}
              >
                <i className={`bi ${icon}`}></i> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón de cerrar sesión siempre al pie */}
      <div className="px-3 py-3">
        <button
          onClick={logout}
          className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <i className="bi bi-box-arrow-right"></i> Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
