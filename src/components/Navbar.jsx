import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
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
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Skills', path: '/skills' },
            { name: 'Projects', path: '/projects' },
            { name: 'Certifications', path: '/certifications' },
            { name: 'Achievements', path: '/achievements' },
            { name: 'Resume', path: '/resume' },
            { name: 'Contact', path: '/contact' }
          ].map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={(e) => link.path === '/' && handleHomeClick(e)}
              style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}
            >
              {link.name}
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
            background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem'
          }} className="mobile-only">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute', top: '70px', left: 0, width: '100%',
          background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)',
          display: 'flex', flexDirection: 'column', padding: '1rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Skills', path: '/skills' },
            { name: 'Projects', path: '/projects' },
            { name: 'Certifications', path: '/certifications' },
            { name: 'Achievements', path: '/achievements' },
            { name: 'Resume', path: '/resume' },
            { name: 'Contact', path: '/contact' }
          ].map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={(e) => {
                setIsMenuOpen(false);
                if (link.path === '/') handleHomeClick(e);
              }} 
              style={{
                color: 'var(--text-primary)', padding: '0.75rem 0', fontWeight: 500, borderBottom: '1px solid var(--border-color)', textDecoration: 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
