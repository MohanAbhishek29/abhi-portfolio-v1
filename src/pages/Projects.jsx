import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

// Mocking additional data that isn't in JSON but needed for the design
const projectEnhancements = {
  p1: { category: 'Frontend', image: '/assets/images/dosa_house.png' },
  p2: { category: 'Cloud', image: '/assets/images/turnstile_access.png', objectPosition: 'top' },
  p3: { category: 'Full Stack', image: '/assets/images/quick_suggest.png' },
  p4: { category: 'Full Stack', image: '/assets/images/quick_serve.png', objectPosition: 'top' },
  p5: { category: 'Web App', image: '/assets/images/aws_class.png' },
  p6: { category: 'Full Stack', image: '/assets/images/infinity_library.png' }
};

const categories = ['All Projects', 'Full Stack', 'Frontend', 'Web App', 'Cloud'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  const enhancedProjects = projects.map(p => ({
    ...p,
    ...projectEnhancements[p.id]
  }));

  const filteredProjects = activeTab === 'All Projects'
    ? enhancedProjects
    : enhancedProjects.filter(p => p.category === activeTab || p.tags.includes(activeTab));

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Featured Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          A showcase of my work spanning web applications, APIs, and responsive interfaces.
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

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover="hover"
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="card"
                onClick={() => setSelectedProject(project)}
                style={{ 
                  overflow: 'hidden', display: 'flex', flexDirection: 'column', 
                  padding: 0, background: 'var(--bg-card)', cursor: 'pointer' 
                }}
              >
                <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative', overflow: 'hidden' }}>
                  <motion.img 
                    variants={{
                      hover: { scale: 1.1 }
                    }}
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: project.objectPosition || 'center',
                      transition: 'transform 0.5s ease'
                    }} 
                  />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600,
                    background: 'rgba(0,0,0,0.7)', color: 'white', backdropFilter: 'blur(4px)'
                  }}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 500,
                      background: 'var(--bg-main)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Read More <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        subtitle={selectedProject?.category}
        description={selectedProject?.modalContent || selectedProject?.description}
        tags={selectedProject?.tags}
        image={selectedProject?.image}
        objectPosition={selectedProject?.objectPosition}
        githubLink={selectedProject?.githubLink}
        demoLink={selectedProject?.demoLink}
      />
    </div>
  );
};

export default Projects;
