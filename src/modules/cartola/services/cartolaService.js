// src/modules/cartola/services/cartolaService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

export const fetchTransacciones = async (idUsuario, limite) => {
  const { data } = await axios.get(
    `${API_URL}/transacciones/${idUsuario}/ultimas?limite=${limite}`
  );
  return data;
};
