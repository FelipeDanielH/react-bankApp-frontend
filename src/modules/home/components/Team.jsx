// src/modules/home/components/Team.jsx

const teamMembers = [
    { name: 'Felipe', role: 'Líder de Proyecto', icon: 'bi-person-circle' },
    { name: 'Carlos', role: 'Frontend Developer', icon: 'bi-laptop' },
    { name: 'Ana', role: 'UI/UX Designer', icon: 'bi-palette' },
    { name: 'Sofía', role: 'Backend Developer', icon: 'bi-server' },
    { name: 'Diego', role: 'QA & Testing', icon: 'bi-bug' },
  ];
  
  const Team = () => {
    return (
      <section id="equipo" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4" style={{ color: '#6f22d2' }}>Nuestro equipo</h2>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4 col-lg-2">
                <i className={`bi ${member.icon} fs-1`} style={{ color: '#6f22d2' }}></i>
                <h5 className="mt-2">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  