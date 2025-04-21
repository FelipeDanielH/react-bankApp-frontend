// src\modules\auth\components\LoginForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import AuthFormWrapper from './AuthFormWrapper';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginRequest({ email, password });
      login(token); // ← guarda en localStorage y actualiza contexto
      navigate('/'); // ← redirige al dashboard
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales inválidas o servidor no disponible');
    }
  };

  return (
    <AuthFormWrapper title="Iniciar sesión">
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Correo electrónico</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
            <input type="email" className="form-control" id="loginEmail" value={email} placeholder="correo@ejemplo.com" onChange={e => setEmail(e.target.value)} required />
          </div>
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Contraseña</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
            <input type={showPassword ? 'text' : 'password'} className="form-control" id="loginPassword" value={password}
              placeholder="••••••••" onChange={e => setPassword(e.target.value)} required />
            <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword((v) => !v)} tabIndex={-1}>
              <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
            </button>
          </div>
        </div>

        <button type="submit" className="btn w-100" style={{ backgroundColor: '#6f22d2', borderColor: '#6f22d2' }}>
          Ingresar
        </button>

        <div className="text-center mt-3">
          <small>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></small>
        </div>
      </form>
    </AuthFormWrapper>
  );
};

export default LoginForm;
