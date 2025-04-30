import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/hooks/useAuth';
import { transferirDinero } from '../services/operacionesService';

const TransferForm = () => {
  const [formData, setFormData] = useState({
    nombreDestinatario: '',
    rutDestinatario: '',
    numeroCuenta: '',
    monto: '',
    descripcion: '',
  });

  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  const { user, saldoDisponible } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showAlert = (message, type = 'success') => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.monto <= 0) {
      showAlert('El monto debe ser mayor a $0', 'danger');
      return;
    }

    if (parseFloat(formData.monto) > parseFloat(saldoDisponible)) {
      showAlert('Saldo insuficiente para realizar esta transferencia', 'danger');
      return;
    }

    try {
      await transferirDinero({
        idUsuarioOrigen: user?.id,
        nombreDestinatario: formData.nombreDestinatario,
        rutDestinatario: formData.rutDestinatario,
        numeroCuenta: formData.numeroCuenta,
        monto: parseFloat(formData.monto),
        descripcion: formData.descripcion,
      });

      showAlert('Transferencia realizada exitosamente', 'success');

      setFormData({
        nombreDestinatario: '',
        rutDestinatario: '',
        numeroCuenta: '',
        monto: '',
        descripcion: '',
      });

      setTimeout(() => {
        navigate('/app/historial');
      }, 1500);

    } catch (error) {
      console.error('Error en transferencia:', error);
      showAlert('Hubo un problema realizando la transferencia', 'danger');
    }
  };

  return (
    <div className="card shadow-sm p-4">
      <h4 className="mb-3" style={{ color: '#6f22d2' }}>Realizar transferencia</h4>
      <p className="text-muted">Transfiere dinero a otras cuentas de forma segura.</p>

      {/* ALERTA Bootstrap */}
      {alert.show && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Nombre del destinatario */}
        <div className="mb-3">
          <label className="form-label">Nombre del destinatario</label>
          <input
            type="text"
            className="form-control"
            name="nombreDestinatario"
            value={formData.nombreDestinatario}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
          />
        </div>

        {/* RUT del destinatario */}
        <div className="mb-3">
          <label className="form-label">RUT del destinatario</label>
          <input
            type="text"
            className="form-control"
            name="rutDestinatario"
            value={formData.rutDestinatario}
            onChange={handleChange}
            placeholder="12.345.678-9"
            required
          />
        </div>

        {/* Número de cuenta */}
        <div className="mb-3">
          <label className="form-label">Número de cuenta</label>
          <input
            type="text"
            className="form-control"
            name="numeroCuenta"
            value={formData.numeroCuenta}
            onChange={handleChange}
            placeholder="Número de cuenta"
            required
          />
        </div>

        {/* Monto */}
        <div className="mb-3">
          <label className="form-label">Monto a transferir</label>
          <input
            type="number"
            min="1"
            className="form-control"
            name="monto"
            value={formData.monto}
            onChange={handleChange}
            placeholder="$0"
            required
          />
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <label className="form-label">Descripción (opcional)</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Motivo de la transferencia"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="btn w-100"
          style={{ backgroundColor: '#6f22d2', borderColor: '#6f22d2', color: 'white' }}
        >
          Transferir
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
