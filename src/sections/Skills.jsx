import React from 'react';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';
import { Github, Code } from 'lucide-react';

const Skills = () => {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, items, isSoft }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <h3 style={{ 
        fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)', 
        borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' 
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {isSoft ? 
          items.map((skill, idx) => (
            <div key={idx} style={{
              display: 'inline-flex', alignItems: 'center', fontSize: '0.875rem', padding: '0.375rem 0.75rem',
              background: 'transparent', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-sm)',
              color: 'var(--text-secondary)'
            }}>
              {skill}
            </div>
          ))
        : 
          items.map((skill, idx) => (
            <div key={idx} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', padding: '0.375rem 0.75rem',
              background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)',
              color: 'var(--text-secondary)', transition: 'var(--transition)', cursor: 'default'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {skill.name === 'GitHub' ? (
                <Github size={18} color="currentColor" />
              ) : skill.name === 'Data Structures & Algorithms' ? (
                <Code size={18} color="currentColor" />
              ) : (
                <i className={`${skill.icon} colored`} style={{ fontSize: '1.125rem' }}></i>
              )}
              {skill.name}
            </div>
          ))
        }
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <SkillCategory title="Programming Languages" items={skills.languages} />
          <SkillCategory title="Cloud & DevOps" items={skills.cloud} />
          <SkillCategory title="Tools & Knowledge Areas" items={skills.tools} />
          <SkillCategory title="Soft Skills" items={skills.soft} isSoft={true} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
