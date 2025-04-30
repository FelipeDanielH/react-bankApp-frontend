// src/modules/cartola/pages/CartolaPage.jsx
import { useEffect, useState } from 'react';
import { fetchTransacciones } from '../services/cartolaService';
import TransactionTable from '../components/TransactionTable';
import { useAuth } from '../../auth/hooks/useAuth';

const CartolaPage = () => {
  const { user } = useAuth();
  const [transacciones, setTransacciones] = useState([]);
  const [limite, setLimite] = useState(10);
  const [hayMas, setHayMas] = useState(true);
  const [loading, setLoading] = useState(false);

  const cargarTransacciones = async () => {
    setLoading(true);
    try {
      const nuevas = await fetchTransacciones(user.id, limite);
      setTransacciones(nuevas);
      setHayMas(nuevas.length === limite);
    } catch (error) {
      console.error('Error al cargar transacciones', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarTransacciones();
  }, [limite]);

  const mostrarMas = () => {
    setLimite((prev) => prev + 10);
  };

  return (
    <div>
      <h2 className="mb-4 fw-bold">Cartola de movimientos</h2>

      <TransactionTable transacciones={transacciones} />

      {transacciones.length === 0 && !loading && (
        <p className="text-muted">Aún no tienes movimientos registrados.</p>
      )}

      {hayMas && (
        <div className="text-center">
          <button
            className="btn mt-2"
            style={{ backgroundColor: '#6f22d2', color: 'white' }}
            onClick={mostrarMas}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Mostrar más'}
          </button>
        </div>
      )}

      {!hayMas && transacciones.length > 0 && (
        <p className="text-center text-muted mt-3">No hay más movimientos.</p>
      )}
    </div>
  );
};

export default CartolaPage;
