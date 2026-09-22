import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="page-container" style={{
      minHeight: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '500px' }}
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          style={{ marginBottom: '2rem' }}
        >
          <AlertTriangle size={80} style={{ color: 'var(--accent-primary)', opacity: 0.8 }} />
        </motion.div>

        <h1 className="text-gradient" style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.04em'
        }}>
          404
        </h1>

        <h2 style={{
          fontSize: '1.5rem',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          fontWeight: 700
        }}>
          Page Not Found
        </h2>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          lineHeight: 1.6,
          marginBottom: '2.5rem'
        }}>
          Looks like this route doesn't exist in my cloud infrastructure. 
          Let's navigate you back to a working endpoint.
        </p>

        <Link to="/" className="btn btn-primary" style={{ 
          padding: '0.85rem 2rem',
          fontSize: '1rem'
        }}>
          <Home size={18} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
