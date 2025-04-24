// src/modules/home/components/Hero.jsx
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-5 text-center bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold" style={{ color: '#6f22d2' }}>
          Bienvenido a BancoSimple
        </h1>
        <p className="lead">Tu banca digital simple, segura y efectiva.</p>
      </div>
    </section>
  );
};

export default Hero;
