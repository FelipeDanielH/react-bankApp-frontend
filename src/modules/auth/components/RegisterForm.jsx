// src\modules\auth\components\RegisterForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerRequest } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import AuthFormWrapper from './AuthFormWrapper';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { token } = await registerRequest({
        nombre,
        email,
        password,
        telefono,
        direccion,
      });

      login(token); // guarda token y usuario
      navigate('/'); // redirige al dashboard
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar. Verifica los datos o intenta con otro email.');
    }
  };

  return (
    <AuthFormWrapper title="Crear cuenta">
      <form onSubmit={handleSubmit}>
        {/* Nombre completo */}
        <div className="mb-3">
          <label htmlFor="registerName" className="form-label">Nombre completo</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
            <input type="text" className="form-control" id="registerName" value={nombre} placeholder="Juan Pérez" onChange={(e) => setNombre(e.target.value)} required />
          </div>
        </div>

        {/* Correo electrónico */}
        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">Correo electrónico</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
            <input type="email" className="form-control" id="registerEmail" value={email} placeholder="correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>

        {/* Número de teléfono */}
        <div className="mb-3">
          <label htmlFor="registerPhone" className="form-label">Número de teléfono</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-telephone-fill"></i></span>
            <input type="tel" className="form-control" id="registerPhone" value={telefono}  placeholder="+56 9 1234 5678" onChange={(e) => setTelefono(e.target.value)} required />
          </div>
        </div>

        {/* Dirección */}
        <div className="mb-3">
          <label htmlFor="registerAddress" className="form-label">Dirección</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-geo-alt-fill"></i></span>
            <input type="text" className="form-control" id="registerAddress" value={direccion}  placeholder="Av. Siempre Viva 123" onChange={(e) => setDireccion(e.target.value)} required />
          </div>
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">Contraseña</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
            <input type={showPassword ? 'text' : 'password'} className="form-control" id="registerPassword" value={password} placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} required />
            <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword((v) => !v)} tabIndex={-1}>
              <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
            </button>
          </div>
        </div>

        <button type="submit" className="btn w-100" style={{ backgroundColor: '#6f22d2', borderColor: '#6f22d2' }}>
          Registrarse
        </button>

        <div className="text-center mt-3">
          <small>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></small>
        </div>
      </form>
    </AuthFormWrapper>
  );
};

export default RegisterForm;
