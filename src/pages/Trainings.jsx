import React, { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, User, FileText, ChevronRight, Calendar, ExternalLink, Download } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Trainings = () => {
  const [activeTab, setActiveTab] = useState('Trainings');
  const { experience, personal } = portfolioData;
  const location = useLocation();

  useEffect(() => {
    // If navigated with state, e.g., from hero "Check my CV"
    if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location]);

  const tabs = [
    { id: 'My CV', icon: <FileText size={18} /> },
    { id: 'Trainings', icon: <Briefcase size={18} /> },
    { id: 'About Info', icon: <User size={18} /> }
  ];

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1000px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Trainings & Info
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          My professional background, certifications, and personal CV index.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Side: Tabs Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '100px' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.2rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                textAlign: 'left',
                transition: 'all 0.3s ease',
                background: activeTab === tab.id ? 'var(--primary)' : 'var(--bg-card)',
                color: activeTab === tab.id ? '#fff' : 'var(--text-secondary)',
                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(110, 86, 207, 0.4)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {tab.icon}
                {tab.id}
              </div>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>

        {/* Right Side: Tab Content */}
        <div style={{ minHeight: '400px' }}>
          <AnimatePresence mode="wait">
            
            {activeTab === 'My CV' && (
              <motion.div key="CV" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', margin: 0 }}>My CV Documentation</h3>
                  <a href={personal.resume} download="Mohan_Abhishek_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                    <Download size={18} /> Download Full PDF
                  </a>
                </div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card cv-preview-container" 
                  style={{ 
                    position: 'relative', background: '#f8fafc', borderRadius: '12px', overflow: 'hidden', 
                    height: '400px', cursor: 'pointer', border: '1px solid var(--border-color)',
                    boxShadow: '0 10px 30px -5px rgba(0,0,0,0.3)'
                  }}
                  onClick={() => window.open(personal.resume, '_blank')}
                >
                  <div style={{ padding: '2.5rem', color: '#1e293b', fontFamily: 'system-ui, sans-serif' }}>
                    <h1 style={{ textAlign: 'center', margin: '0 0 0.5rem 0', fontSize: '2rem', color: '#0f172a', fontWeight: 800 }}>{personal.name}</h1>
                    <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#475569', fontWeight: 500 }}>{personal.email}  |  {personal.phone}</p>
                    <hr style={{ margin: '1.5rem 0', borderColor: '#cbd5e1' }} />
                    <h2 style={{ fontSize: '1.1rem', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Professional Summary</h2>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#475569' }}>{personal.bio}</p>
                    <h2 style={{ fontSize: '1.1rem', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '1.5rem' }}>Cloud Infrastructure</h2>
                    <p style={{ fontSize: '0.95rem', color: '#475569' }}>AWS EC2, S3, RDS, Lambda, IAM, Terraform, Docker, Kubernetes.</p>
                  </div>
                  
                  {/* Faded overlay */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%', height: '200px',
                    background: 'linear-gradient(to bottom, rgba(15,23,42,0), rgba(15,23,42,1))',
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '2.5rem'
                  }}>
                    <span style={{ 
                      background: 'var(--primary)', color: '#fff', padding: '0.8rem 2rem', 
                      borderRadius: '99px', fontSize: '0.95rem', fontWeight: 600,
                      display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 15px rgba(110, 86, 207, 0.5)',
                      transition: 'transform 0.2s', transform: 'scale(1.05)'
                    }}>
                      <ExternalLink size={18} /> Click to View Full Document
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'Trainings' && (
              <motion.div key="Training" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>My Trainings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="card" 
                      style={{ padding: '2rem', background: 'var(--bg-card)' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <h4 style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{exp.role}</h4>
                          <p style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500, margin: 0 }}>{exp.organization}</p>
                        </div>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', background: 'var(--bg-main)', borderRadius: '99px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <Calendar size={14} /> {exp.duration}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                        {exp.description}
                      </p>
                      {exp.certificateLink && (
                        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                          <a 
                            href={exp.certificateLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gradient"
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem', 
                              fontSize: '0.9rem', 
                              fontWeight: 600,
                              textDecoration: 'none'
                            }}
                          >
                            <ExternalLink size={14} /> View Training Certificate
                          </a>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'About Info' && (
              <motion.div key="About" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>Personal Info</h3>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.01 }} 
                  transition={{ duration: 0.2 }}
                  className="card" 
                  style={{ padding: '2.5rem', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Name</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{personal.name}</strong>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Title</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{personal.title}</strong>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Email</span>
                    <a href={`mailto:${personal.email}`} style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 500 }}>{personal.email}</a>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Phone</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{personal.phone}</strong>
                  </div>
                  {/* Removed Download Resume from here as per user request */}

                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Trainings;
