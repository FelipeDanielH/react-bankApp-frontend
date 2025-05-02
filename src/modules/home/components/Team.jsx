// src/modules/home/components/Team.jsx

const teamMembers = [
  {
    name: 'Felipe',
    role: 'Líder de Proyecto',
    photo: 'https://i.postimg.cc/XJnTMDWQ/Felipe-Henr-quez-C18-Java-Clase-0-1.jpg',
  },
  {
    name: 'Fran',
    role: 'Frontend Developer',
    photo: 'https://i.postimg.cc/ZRjXJFKZ/Francisca-Molina-C18-Java-Clase-0-1.jpg',
  },
  {
    name: 'Geraldine',
    role: 'UI/UX Designer',
    photo: 'https://i.postimg.cc/x8Ch8Jcm/Geraldine-M.jpg',
  },
  {
    name: 'Vicente',
    role: 'Backend Developer',
    photo: 'https://i.postimg.cc/K8MXtMQr/image.png',
  },
  {
    name: 'Nicolas Nuñez',
    role: 'QA & Testing',
    photo: 'https://i.postimg.cc/XvSRLYzM/Nicolas-N-ez-C18-Java-Clase-0.jpg',
  },
];

const Team = () => {
  return (
    <section id="equipo" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4" style={{ color: '#6f22d2' }}>Nuestro equipo</h2>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 col-lg-2">
              <img
                src={member.photo}
                alt={member.name}
                className="rounded-circle mb-2"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
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
