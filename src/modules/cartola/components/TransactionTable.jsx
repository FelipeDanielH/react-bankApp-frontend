// src/modules/cartola/components/TransactionTable.jsx

const TransactionTable = ({ transacciones }) => {
    return (
      <table className="table table-bordered table-hover mt-4">
        <thead className="table-light">
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th className="text-end">Monto</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((tx, idx) => {
            const fecha = new Date(tx.fecha).toLocaleDateString('es-CL');
            const esIngreso = tx.tipo === 'in';
            const clase = esIngreso ? 'text-success' : 'text-danger';
            const signo = esIngreso ? '+' : '-';
  
            return (
              <tr key={idx}>
                <td>{fecha}</td>
                <td>{tx.descripcion}</td>
                <td className={`text-end fw-bold ${clase}`}>
                  {signo} ${tx.monto.toLocaleString('es-CL')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default TransactionTable;
  