// src/modules/dashboard/components/CardBalance.jsx
import { useState } from 'react';

const CardBalance = ({ saldoDisponible, numeroCuenta, nombreTitular, tipoCuenta }) => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div
      className="card text-white mb-4"
      style={{
        background: 'linear-gradient(135deg, #6f22d2, #a76bff)',
        border: 'none',
        borderRadius: '16px',
      }}
    >
      <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: '180px' }}>
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{nombreTitular || "Mi cuenta"}</h5>
          <button className="btn btn-sm btn-light" onClick={() => setShowBalance(!showBalance)}>
            <i className={`bi ${showBalance ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
          </button>
        </div>
        <h2 className="fw-bold mt-2">
          {showBalance ? `$${saldoDisponible?.toLocaleString('es-CL', { minimumFractionDigits: 2 })}` : '••••••'}
        </h2>
        <p className="mb-0 small">
          {tipoCuenta?.toUpperCase()} - N° {numeroCuenta}
        </p>
      </div>
    </div>
  );
};

export default CardBalance;
