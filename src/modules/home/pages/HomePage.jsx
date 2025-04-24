// src/modules/home/pages/HomePage.jsx
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <Team />
      <ContactSection />
    </>
  );
};

export default HomePage;
