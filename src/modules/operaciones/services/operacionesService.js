import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

export const transferirDinero = async (data) => {
  const response = await axios.post(`${API_URL}/transacciones/procesar`, data);
  return response.data;
};
