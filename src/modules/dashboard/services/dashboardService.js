// src/modules/dashboard/services/dashboardService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL // Puedes mover esto a un archivo de config si prefieres

// Obtiene los datos de la cuenta del usuario
export const getCuentaResumen = async (idUsuario) => {
  const { data } = await axios.get(`${API_URL}/cuentas/mia/${idUsuario}`);
  return data; // saldoDisponible, numeroCuenta, nombreTitular, tipoCuenta
};

// Obtiene las últimas transacciones del usuario
export const getUltimasTransacciones = async (idUsuario, limite = 5) => {
  const { data } = await axios.get(`${API_URL}/transacciones/${idUsuario}/ultimas?limite=${limite}`);
  return data; // Array de transacciones
};