import axios from 'axios';

const API = 'http://localhost:8080';

export const obtenerTarjeta = async (usuarioId) => {
  const { data } = await axios.get(`${API}/tarjetas_virtuales/cuenta/${usuarioId}`);

  console.log('Tarjeta obtenida:', data);
  return data;
};

export const recargarSaldo = async (usuarioId, monto) => {
  const { data } = await axios.post(`${API}/cuentas/${usuarioId}/saldo`, { monto });
  return data;
};
