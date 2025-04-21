// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1 fw-bold" style={{ color: '#ffffffcc' }}>
          © {new Date().getFullYear()} BancoSimple. Todos los derechos reservados.
        </p>
        <p className="mb-0 small">
          Hecho con ❤️ por desarrolladores que aman el código limpio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
