import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const mapSkillsFromData = () => {
  const { skills } = portfolioData;
  const mapped = [];
  skills.languages.forEach(s => mapped.push({ ...s, category: 'Programming Languages' }));
  skills.cloud.forEach(s => mapped.push({ ...s, category: 'Cloud & DevOps' }));
  skills.tools.forEach(s => mapped.push({ ...s, category: 'Tools & Knowledge' }));
  return mapped;
};

const allSkills = mapSkillsFromData();
const categories = ['All Skills', 'Programming Languages', 'Cloud & DevOps', 'Tools & Knowledge'];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All Skills');

  const filteredSkills = activeTab === 'All Skills' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab);

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Technical Arsenal
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          A showcase of technologies I've mastered on my journey as a developer.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              background: activeTab === category ? 'var(--primary)' : 'var(--bg-card)',
              color: activeTab === category ? '#ffffff' : 'var(--text-secondary)',
              boxShadow: activeTab === category ? '0 4px 15px rgba(110, 86, 207, 0.4)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid - Clean Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5, borderColor: 'var(--primary)' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card"
              style={{ 
                padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', 
                gap: '1rem', background: 'var(--bg-card)', alignItems: 'center', 
                textAlign: 'center', border: '1px solid var(--border-color)',
                cursor: 'default'
              }}
            >
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '16px', background: 'var(--bg-main)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem',
                marginBottom: '0.5rem', color: 'var(--text-primary)', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <i className={`${skill.icon} colored`}></i>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 0.75rem 0', fontWeight: 600 }}>{skill.name}</h3>
                <span style={{ 
                  display: 'inline-block', whiteSpace: 'nowrap',
                  fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, 
                  padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid var(--border-color)', borderRadius: '99px' 
                }}>
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Skills;
