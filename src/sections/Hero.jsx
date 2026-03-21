import React from 'react';
import portfolioData from '../data/portfolio.json';
import { Github, Linkedin, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" style={{ position: 'relative', minHeight: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        <div className="responsive-grid">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hero-text-content"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <h1 className="text-gradient" style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.1
            }}>
              Hi, I'm Jayavarapu Mohan Abhishek Gupta
            </h1>
            
            <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', maxWidth: '800px', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              Aspiring Cloud Architect ☁️ | Turning Coffee & Chaos into Scalable AWS Systems ⚙️
            </h2>
            
            <p style={{ fontSize: '1rem', maxWidth: '750px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              I'm a B.Tech 3rd-year student at LPU with a cloud-first mindset. While writing clean code is essential, my true passion lies in architecting the infrastructure behind it. I focus on deploying, scaling, and ensuring the server doesn't break a sweat when 10,000 users hit 'refresh'. Specializing in AWS, backend logic, and smart system design.
            </p>

            <span style={{
                display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 600,
                background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)', whiteSpace: 'nowrap', marginBottom: '2.5rem'
              }}>
              Call me Abhi 👋
            </span>
            
            <div className="hero-btn-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <Link to="/about" className="btn btn-primary">
                Read My Journey <ArrowRight size={18} />
              </Link>
              <a href={personal.resume} download="Mohan_Abhishek_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Download size={18} /> Download Resume
              </a>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: '48px', height: '48px', padding: 0, minWidth: '48px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Github size={20} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: '48px', height: '48px', padding: 0, minWidth: '48px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Medium Rectangular Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="profile-img-container"
          >
            <img src="/Profile.png" alt="Jayavarapu Mohan Abhishek Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', transform: 'scale(1.25)' }} />
          </motion.div>
        
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', color: 'var(--text-secondary)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}
        onClick={() => {
          const nextSection = document.getElementById('about');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Scroll Down</span>
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
