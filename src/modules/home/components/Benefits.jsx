// src/modules/home/components/Benefits.jsx
const Benefits = () => {
    return (
      <section id="beneficios" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4" style={{ color: '#6f22d2' }}>Beneficios</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <i className="bi bi-shield-check fs-1 text-success"></i>
              <h5 className="mt-3">Seguro</h5>
              <p>Protección total con autenticación y encriptación.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightning-fill fs-1 text-warning"></i>
              <h5 className="mt-3">Rápido</h5>
              <p>Transacciones instantáneas dentro de la plataforma.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-phone fs-1 text-info"></i>
              <h5 className="mt-3">Accesible</h5>
              <p>Accede desde cualquier dispositivo, sin complicaciones.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Benefits;
  