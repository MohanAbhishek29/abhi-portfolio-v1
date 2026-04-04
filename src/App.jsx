import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Trainings from './pages/Trainings';
import EducationPage from './pages/Education';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="bg-atmosphere">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
      </div>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
            <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
            <Route path="/trainings" element={<PageTransition><Trainings /></PageTransition>} />
            <Route path="/education" element={<PageTransition><EducationPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer style={{
        borderTop: '1px solid var(--border-color)', padding: '2rem 0',
        background: 'var(--bg-card)', backdropFilter: 'blur(10px)', color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center'
      }}>
        <div className="container">
          <p>&copy; 2026 Jayavarapu Mohan Abhishek Gupta. Designed with precision.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
