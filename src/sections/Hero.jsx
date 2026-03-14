import React from 'react';
import portfolioData from '../data/portfolio.json';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section style={{ minHeight: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ 
              width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', 
              border: '4px solid var(--primary)', boxShadow: '0 0 20px rgba(110, 86, 207, 0.4)'
            }}
          >
            <img src="/Profile.jpeg" alt="Jayavarapu Mohan Abhishek Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h1 className="text-gradient" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.1
            }}>
              Hi, I'm Jayavarapu Mohan Abhishek Gupta
            </h1>
            
            <h2 style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--text-primary)', maxWidth: '800px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Aspiring Cloud Architect ☁️ | Turning Coffee & Chaos into Scalable AWS Systems ⚙️
            </h2>
            
            <p style={{ fontSize: '1.125rem', maxWidth: '750px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              I'm a B.Tech 3rd-year student at LPU with a cloud-first mindset. While writing clean code is essential, my true passion lies in architecting the infrastructure behind it. I focus on deploying, scaling, and ensuring the server doesn't break a sweat when 10,000 users hit 'refresh'. Specializing in AWS, backend logic, and smart system design.
            </p>

            <span style={{
                display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 600,
                background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)', whiteSpace: 'nowrap', marginBottom: '2.5rem'
              }}>
              Call me Abhi 👋
            </span>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/about" className="btn btn-primary">
                Read My Journey <ArrowRight size={18} />
              </Link>
              <a href={personal.resume} download="Mohan_Abhishek_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Download size={18} /> Download Resume
              </a>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: '48px', padding: 0 }}>
                  <Github size={20} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: '48px', padding: 0 }}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
