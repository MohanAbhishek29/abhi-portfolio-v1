import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, subtitle, description, tags, image, githubLink, demoLink, demoLinkLabel, date, objectPosition }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        style={{
          position: 'fixed', inset: 0, zIndex: 2000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem', background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'var(--bg-card)', border: '1px solid var(--border-color)',
            borderRadius: '20px', maxWidth: '800px', width: '100%', maxHeight: '90vh',
            overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 10,
              background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
              borderRadius: '50%', width: '36px', height: '36px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>

          {/* Hero Image Section */}
          <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: objectPosition || 'center' }} />
            <div style={{ 
              position: 'absolute', inset: 0, 
              background: 'linear-gradient(to bottom, transparent, var(--bg-card))' 
            }}></div>
          </div>

          {/* Content Area */}
          <div style={{ padding: '2rem', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h2>
                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}>{subtitle}</p>
                {date && <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{date}</p>}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {demoLink && (
                  <a href={demoLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
                    {demoLinkLabel || 'Live Demo'} <ExternalLink size={16} />
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>
                    Source <Github size={16} />
                  </a>
                )}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Description & Learnings</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', whiteSpace: 'pre-line' }}>
                {description}
              </p>
            </div>

            {tags && (
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Technologies / Skills</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.4rem 1rem', borderRadius: '99px', background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.85rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
