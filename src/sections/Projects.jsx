import React from 'react';
import portfolioData from '../data/portfolio.json';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projectEnhancements = {
  p1: { category: 'Frontend', image: '/assets/images/dosa_house.png' },
  p2: { category: 'Full Stack', image: '/assets/images/turnstile_access.png', objectPosition: 'top' },
  p3: { category: 'Full Stack', image: '/assets/images/quick_suggest.png' },
  p4: { category: 'Full Stack', image: '/assets/images/quick_serve.png', objectPosition: 'top' },
  p5: { category: 'Web App', image: '/assets/images/aws_class.png' },
  p6: { category: 'Full Stack', image: '/assets/images/infinity_library.png' }
};

const Projects = () => {
  const { projects } = portfolioData;
  const displayProjects = projects.slice(0, 4).map(p => ({
    ...p,
    ...projectEnhancements[p.id]
  }));

  return (
    <section id="projects" className="section relative bg-alt">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {displayProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card" 
                style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden' }}
              >
                <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', height: '100%', objectFit: 'cover', 
                      objectPosition: project.objectPosition || 'center' 
                    }} 
                  />
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                    <span style={{ 
                      padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600,
                      background: 'rgba(0,0,0,0.7)', color: 'white', backdropFilter: 'blur(4px)'
                    }}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                  
                  <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', flex: 1, lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} style={{
                        padding: '0.25rem 0.6rem', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 500,
                        background: 'var(--bg-main)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)'
                      }}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', flex: 1 }}>
                        <Github size={16} /> Source Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', flex: 1 }}>
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <Link to="/projects" className="btn btn-secondary">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
