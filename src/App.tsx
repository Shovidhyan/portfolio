import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Stats from './components/Stats';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative font-sans bg-gray-50">
      <Navbar activeSection={activeSection} />
      <main className="relative">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        {/* <section id="stats" className="py-10">
          <Stats />
        </section> */}
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="services" className="py-20">
          <Services />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="contact" className="bg-navy-900 py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;