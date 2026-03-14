import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allSkills = [
  // Programming Languages
  { name: 'C', percentage: 70, category: 'Programming Languages', icon: 'devicon-c-plain colored' },
  { name: 'C++', percentage: 70, category: 'Programming Languages', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Java', percentage: 65, category: 'Programming Languages', icon: 'devicon-java-plain colored' },
  { name: 'Python', percentage: 60, category: 'Programming Languages', icon: 'devicon-python-plain colored' },
  { name: 'HTML', percentage: 80, category: 'Programming Languages', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', percentage: 75, category: 'Programming Languages', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', percentage: 70, category: 'Programming Languages', icon: 'devicon-javascript-plain colored' },

  // Cloud & DevOps
  { name: 'AWS', percentage: 95, category: 'Cloud & DevOps', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
  { name: 'Microsoft Azure', percentage: 85, category: 'Cloud & DevOps', icon: 'devicon-azure-plain colored' },
  { name: 'Docker', percentage: 85, category: 'Cloud & DevOps', icon: 'devicon-docker-plain colored' },
  { name: 'Kubernetes', percentage: 80, category: 'Cloud & DevOps', icon: 'devicon-kubernetes-plain colored' },
  { name: 'Terraform', percentage: 75, category: 'Cloud & DevOps', icon: 'devicon-terraform-plain colored' },

  // Tools & Knowledge
  { name: 'Git', percentage: 85, category: 'Tools & Knowledge', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', percentage: 90, category: 'Tools & Knowledge', icon: 'devicon-github-original' },
  { name: 'Data Structures & Algorithms', percentage: 85, category: 'Tools & Knowledge', icon: 'devicon-cplusplus-plain colored' }
];

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

      {/* Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--bg-card)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '50px', height: '50px', borderRadius: '12px', background: 'var(--bg-main)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem'
                  }}>
                    <i className={skill.icon}></i>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>{skill.name}</h3>
                </div>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{skill.percentage}%</span>
              </div>
              
              <div style={{ width: '100%', height: '6px', background: 'var(--bg-main)', borderRadius: '99px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '99px' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
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
