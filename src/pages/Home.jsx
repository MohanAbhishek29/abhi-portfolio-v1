import React from 'react';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Certifications from '../sections/Certifications';
import AchievementsSection from '../sections/AchievementsSection';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Contact from '../pages/Contact';

const Home = () => {
  return (
    <div className="home-scroll-container">
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Certifications />
      <AchievementsSection />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
