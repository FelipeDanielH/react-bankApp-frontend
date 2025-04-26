// src/modules/dashboard/pages/DashboardPage.jsx
import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import { getCuentaResumen, getUltimasTransacciones } from '../services/dashboardService';
import CardBalance from '../components/CardBalance';
import QuickTransfer from '../components/QuickTransfer';
import TransactionList from '../components/TransactionList';

const DashboardPage = () => {
  const { user } = useAuth();
  const [cuenta, setCuenta] = useState(null);
  const [transacciones, setTransacciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        if (!user) return;

        const cuentaData = await getCuentaResumen(user.id);
        const transaccionesData = await getUltimasTransacciones(user.id, 5);

        setCuenta(cuentaData);
        setTransacciones(transaccionesData);
      } catch (error) {
        console.error('Error cargando dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return <div className="text-center mt-5">Cargando...</div>;
  }

  return (
    <div className="container-fluid">
      <h2 className="fw-bold mb-4" style={{ color: '#6f22d2' }}>Panel principal</h2>

      {cuenta && (
        <CardBalance
          saldoDisponible={cuenta.saldoDisponible}
          numeroCuenta={cuenta.numeroCuenta}
          nombreTitular={cuenta.nombreTitular}
          tipoCuenta={cuenta.tipoCuenta}
        />
      )}

      <QuickTransfer />

      {/* Mostrar siempre la sección de transacciones */}
      <TransactionList transacciones={transacciones} />
    </div>
  );
};

export default DashboardPage;
