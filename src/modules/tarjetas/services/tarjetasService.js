import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const obtenerTarjeta = async (usuarioId) => {
  const { data } = await axios.get(`${API_URL}/tarjetas_virtuales/cuenta/${usuarioId}`);

  console.log('Tarjeta obtenida:', data);
  return data;
};

export const recargarSaldo = async (usuarioId, monto) => {
  const { data } = await axios.post(`${API_URL}/cuentas/${usuarioId}/saldo`, { monto });
  return data;
};
