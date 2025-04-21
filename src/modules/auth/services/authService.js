// src/modules/auth/services/authService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/auth';

export const loginRequest = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/login`, credentials);
  return response.data;
};

export const registerRequest = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};
