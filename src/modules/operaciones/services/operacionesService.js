import axios from 'axios';

export const transferirDinero = async (data) => {
  const response = await axios.post('http://localhost:8080/transacciones/procesar', data);
  return response.data;
};
