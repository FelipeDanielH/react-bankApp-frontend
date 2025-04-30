// src/modules/cuenta/pages/CuentaPage.jsx
import { useAuth } from '../../auth/hooks/useAuth';

const CuentaPage = () => {
  const { user } = useAuth();

  const formatearFecha = (fechaISO) => {
    return new Date(fechaISO).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container">
      <h2 className="mb-4 fw-bold">Mi Cuenta</h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <strong>Nombre:</strong>
              <span>{user?.nombre}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Email:</strong>
              <span>{user?.email}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Teléfono:</strong>
              <span>{user?.telefono}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Dirección:</strong>
              <span>{user?.direccion}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Fecha de registro:</strong>
              <span>{formatearFecha(user?.fecha_registro)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CuentaPage;
