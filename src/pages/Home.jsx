import React from 'react';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Certifications from '../sections/Certifications';
import Contact from '../pages/Contact'; // Use the real Contact page component

const Home = () => {
  return (
    <div className="home-scroll-container">
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;
