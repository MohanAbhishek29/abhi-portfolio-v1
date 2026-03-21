import React from 'react';
import portfolioData from '../data/portfolio.json';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" style={{ minHeight: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center', gap: '4rem' }}>
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
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
            style={{ 
              width: '100%', maxWidth: '380px', height: '400px', borderRadius: '24px', overflow: 'hidden', 
              border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              margin: '0 auto'
            }}
          >
            <img src="/Profile.jpeg" alt="Jayavarapu Mohan Abhishek Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
