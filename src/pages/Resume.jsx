import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Code, User, ChevronRight, Calendar, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('Education');
  const { education, experience, skills, personal } = portfolioData;

  const tabs = [
    { id: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'Training', icon: <Briefcase size={18} /> },
    { id: 'Skills Summary', icon: <Code size={18} /> },
    { id: 'About Info', icon: <User size={18} /> }
  ];

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1000px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          My Resume
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          My formal educational and professional background snapshot.
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
            
            {activeTab === 'Education' && (
              <motion.div key="Education" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>My Education</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {education.map(edu => (
                    <motion.div 
                      key={edu.id} 
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="card" 
                      style={{ padding: '2rem', background: 'var(--bg-card)' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <h4 style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                          <p style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500, margin: 0 }}>{edu.institution}</p>
                        </div>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', background: 'var(--bg-main)', borderRadius: '99px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <Calendar size={14} /> {edu.duration}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
                        {edu.metricLabel}: <strong style={{ color: 'var(--text-primary)' }}>{edu.metricValue}</strong>
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Training' && (
              <motion.div key="Training" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>My Training</h3>
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

            {activeTab === 'Skills Summary' && (
              <motion.div key="Skills" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>Professional Skills</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  
                  <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.2 }} className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Programming Languages</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {skills.languages.map(l => l.name).join(', ')}
                    </p>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.2 }} className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Cloud & DevOps</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {skills.cloud.map(c => c.name).join(', ')}
                    </p>
                  </motion.div>

                  <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.2 }} className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Tools & Workflows</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {skills.tools.map(t => t.name).join(', ')}
                    </p>
                  </motion.div>

                  <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.2 }} className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Soft Skills</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {skills.soft.join(', ')}
                    </p>
                  </motion.div>

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
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Resume</span>
                    <a href={personal.resume} download="Mohan_Abhishek_Resume.pdf" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 500 }}>
                      Download PDF
                    </a>
                  </div>

                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Resume;
