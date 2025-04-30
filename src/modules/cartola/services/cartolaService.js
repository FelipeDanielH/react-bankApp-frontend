// src/modules/cartola/services/cartolaService.js
import axios from 'axios';

export const fetchTransacciones = async (idUsuario, limite) => {
  const { data } = await axios.get(
    `http://localhost:8080/transacciones/${idUsuario}/ultimas?limite=${limite}`
  );
  return data;
};
