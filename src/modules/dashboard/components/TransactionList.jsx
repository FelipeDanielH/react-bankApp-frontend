// src/modules/dashboard/components/TransactionList.jsx

const TransactionList = ({ transacciones }) => {
  const noTransactions = !transacciones || transacciones.length === 0;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-4">Últimas transacciones</h5>

        {noTransactions ? (
          <div className="text-center text-muted py-5">
            <i className="bi bi-receipt fs-1 mb-3"></i>
            <p className="mb-0 fw-bold">Aún no tienes transacciones registradas.</p>
            <small>¡Realiza tu primera transferencia para verla aquí!</small>
          </div>
        ) : (
          <ul className="list-group list-group-flush">
            {transacciones.map((tx, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">{tx.descripcion}</div>
                  <small className="text-muted">{new Date(tx.fecha).toLocaleString('es-CL')}</small>
                </div>
                <span className={`fw-bold ${tx.tipo === 'in' ? 'text-success' : 'text-danger'}`}>
                  {tx.tipo === 'in' ? '+' : '-'}${tx.monto.toLocaleString('es-CL')}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
