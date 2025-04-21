import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// Creamos el contexto
export const AuthContext = createContext();

// Proveedor
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
  });

  // Inicializar desde localStorage si existe un JWT
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAuth({
          isAuthenticated: true,
          token,
          user: decoded,
        });
      } catch (error) {
        console.error('Token inválido o expirado');
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    setAuth({
      isAuthenticated: true,
      token,
      user: decoded,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      isAuthenticated: false,
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
