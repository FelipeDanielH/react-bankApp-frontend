// src/modules/home/components/HowItWorks.jsx
const HowItWorks = () => {
    return (
      <section id="como-funciona" className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="mb-4" style={{ color: '#6f22d2' }}>¿Cómo funciona?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <i className="bi bi-person-plus-fill fs-1 text-primary"></i>
              <h5 className="mt-3">1. Regístrate</h5>
              <p>Crea tu cuenta en minutos con tus datos personales.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-credit-card-2-front-fill fs-1 text-primary"></i>
              <h5 className="mt-3">2. Tarjeta Digital</h5>
              <p>Accede a tu cuenta y tarjeta bancaria virtual.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-arrow-left-right fs-1 text-primary"></i>
              <h5 className="mt-3">3. Transfiere</h5>
              <p>Realiza transferencias internas y recargas simuladas.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  