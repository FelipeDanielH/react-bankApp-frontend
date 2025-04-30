import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import { obtenerTarjeta, recargarSaldo } from '../services/tarjetasService';

const TarjetasPage = () => {
    const { user } = useAuth();
    const [tarjeta, setTarjeta] = useState(null);
    const [mostrarDatos, setMostrarDatos] = useState(false);
    const [contador, setContador] = useState(30);
    const [bloqueado, setBloqueado] = useState(false);
    const [montoRecarga, setMontoRecarga] = useState('');

    useEffect(() => {
        const fetchTarjeta = async () => {
            const data = await obtenerTarjeta(user.id);
            setTarjeta(data);
        };
        fetchTarjeta();
    }, [user.id]);

    useEffect(() => {
        let intervalo;
        if (mostrarDatos && contador > 0) {
            intervalo = setInterval(() => {
                setContador((c) => c - 1);
            }, 1000);
        } else if (contador === 0) {
            setMostrarDatos(false);
            setBloqueado(false);
            setContador(30);
        }
        return () => clearInterval(intervalo);
    }, [mostrarDatos, contador]);

    const handleMostrar = () => {
        if (!bloqueado) {
            setMostrarDatos(true);
            setBloqueado(true);
        }
    };

    const handleRecarga = async (e) => {
        e.preventDefault();
        const monto = parseFloat(montoRecarga);
        if (isNaN(monto) || monto <= 0) return alert('Ingresa un monto válido');
        try {
            await recargarSaldo(user.id, monto);
            setMontoRecarga('');
            mostrarToast('Recarga exitosa');
        } catch {
            alert('Error al recargar saldo');
        }
    };

    const mostrarToast = (mensaje) => {
        const toast = document.createElement('div');
        toast.className = 'toast position-fixed bottom-0 end-0 m-3 show';
        toast.style.zIndex = '9999';
        toast.innerHTML = `
      <div class="toast-header bg-success text-white">
        <strong class="me-auto">Éxito</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
      </div>
      <div class="toast-body">${mensaje}</div>
    `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

    const formatFecha = (isoDate) => {
        const d = new Date(isoDate);
        const mes = String(d.getMonth() + 1).padStart(2, '0');
        const anio = String(d.getFullYear()).slice(-2);
        return `${mes}/${anio}`;
      };
      

    return (
        <div className="d-flex flex-column align-items-center gap-4">
          {/* Card de información de la tarjeta */}
          <div className="card shadow p-4 w-100" style={{ maxWidth: '500px' }}>
            <h5 className="mb-2">Tarjeta de Débito</h5>
            <p className="text-muted mb-4">Tarjeta asociada a tu cuenta corriente</p>
            {tarjeta && (
              <>
                <div
                  className="text-white rounded p-4 mb-3 position-relative"
                  style={{
                    background: 'linear-gradient(90deg, #6f22d2, #8752f3)',
                    borderRadius: '12px',
                  }}
                >
                  <div className="position-absolute top-0 end-0 p-2">
                    <button
                      className="btn btn-sm text-white"
                      onClick={handleMostrar}
                      disabled={bloqueado}
                      style={{ background: 'transparent', border: 'none' }}
                    >
                      <i className="bi bi-eye-fill fs-5"></i>
                    </button>
                  </div>
                  <p className="fw-bold">BancoSimple</p>
                  <h6 className="mb-4">Débito</h6>
      
                  <div className="mb-3">
                    <span className="text-uppercase small">Número de tarjeta</span><br />
                    <span className="fs-5">
                      {mostrarDatos
                        ? tarjeta.numeroTarjeta.match(/.{1,4}/g).join(' ')
                        : `•••• •••• •••• ${tarjeta.numeroTarjeta.slice(-4)}`}
                    </span>
                  </div>
      
                  <div className="d-flex justify-content-between text-uppercase small">
                    <div>
                      <div className="text-muted">Titular</div>
                      <div className="fw-bold text-white">{user.nombre.toUpperCase()}</div>
                    </div>
                    <div>
                      <div className="text-muted">Vence</div>
                      <div>{mostrarDatos ? formatFecha(tarjeta.fechaExpiracion) : '••/••'}</div>
                    </div>
                    <div>
                      <div className="text-muted">CVV</div>
                      <div>{mostrarDatos ? tarjeta.cvv : '•••'}</div>
                    </div>
                  </div>
                </div>
      
                <div className="text-end text-muted fst-italic">
                  Estado: <span className="fw-semibold">{tarjeta.estado}</span>
                </div>
              </>
            )}
          </div>
      
          {/* Card de recarga */}
          <div className="card shadow p-4 w-100" style={{ maxWidth: '500px' }}>
            <h5 className="mb-3">Recargar saldo</h5>
            <form onSubmit={handleRecarga} className="d-flex gap-2">
              <input
                type="number"
                className="form-control"
                placeholder="Monto a recargar"
                value={montoRecarga}
                onChange={(e) => setMontoRecarga(e.target.value)}
              />
              <button
                type="submit"
                className="btn text-white"
                style={{ backgroundColor: '#6f22d2' }}
              >
                Recargar
              </button>
            </form>
          </div>
        </div>
      );
      
};

export default TarjetasPage;
