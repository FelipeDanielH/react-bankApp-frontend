// src/modules/auth/services/authService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

export const loginRequest = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const registerRequest = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};
