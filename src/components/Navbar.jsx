import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Trainings & Info', path: '/trainings' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Theme setup logic
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        background: 'var(--nav-bg)', backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'var(--nav-shadow)',
        zIndex: 1000, display: 'flex', alignItems: 'center', transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="nav-logo-link" aria-label="Home" onClick={handleHomeClick}>
            <div className="logo-gradient-mask nav-logo-mask"></div>
          </Link>

          {/* Desktop Links */}
          <div style={{ gap: '1.5rem', display: 'none' }} className="nav-links">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={(e) => link.path === '/' && handleHomeClick(e)}
                className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                style={{ 
                  color: isActive(link.path) ? 'var(--accent-primary)' : 'var(--text-secondary)', 
                  fontSize: '0.875rem', 
                  fontWeight: isActive(link.path) ? 700 : 500, 
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.25rem 0',
                  transition: 'color 0.3s ease'
                }}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="nav-active-indicator"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--accent-gradient)',
                      borderRadius: '1px'
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleTheme} style={{
              background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem'
            }} aria-label="Toggle Theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href={portfolioData.personal.resume} 
              download="Mohan_Abhishek_Resume.pdf"
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary" 
              style={{ display: 'none' }} 
              id="nav-dl"
            >
              Download Resume
            </a>
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
              background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem',
              position: 'relative', zIndex: 1010
            }} className="mobile-only">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(4px)',
                zIndex: 998
              }}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                position: 'fixed', top: '70px', left: 0, width: '100%',
                background: 'var(--bg-card)', 
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex', flexDirection: 'column', padding: '0.5rem 1rem',
                boxShadow: 'var(--shadow-md)',
                zIndex: 999,
                maxHeight: 'calc(100vh - 70px)',
                overflowY: 'auto'
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (link.path === '/') handleHomeClick(e);
                    }} 
                    style={{
                      color: isActive(link.path) ? 'var(--accent-primary)' : 'var(--text-primary)', 
                      padding: '0.85rem 0.5rem', 
                      fontWeight: isActive(link.path) ? 700 : 500, 
                      borderBottom: '1px solid var(--border-color)', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      borderLeft: isActive(link.path) ? '3px solid var(--accent-primary)' : '3px solid transparent',
                      paddingLeft: '1rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
