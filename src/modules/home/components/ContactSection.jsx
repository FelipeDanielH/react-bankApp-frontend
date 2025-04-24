// src/modules/home/components/ContactSection.jsx
const ContactSection = () => {
    return (
      <section id="contacto" className="py-5 text-center bg-white">
        <div className="container">
          <h2 className="mb-3" style={{ color: '#6f22d2' }}>¿Tienes dudas?</h2>
          <p className="mb-3">Escríbenos y con gusto responderemos tu consulta.</p>
          <a href="mailto:soporte@bancosimple.cl" className="btn btn-outline-primary">
            soporte@bancosimple.cl
          </a>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  