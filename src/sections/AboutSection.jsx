import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-alt" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">About Me</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '700px' }}>
            A quick glimpse into my background, my methodology, and what fuels my passion for cloud architecture.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Quick Facts */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="card" style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Zap className="text-primary" /> Core Profile
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <MapPin className="text-primary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Base:</strong> LPU, Punjab (From Godavari 🍛)</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Target className="text-secondary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Mission:</strong> B.Tech CSE (3rd Year)</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Zap className="text-accent" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Focus:</strong> Architecting secure & scalable cloud systems.</span>
              </li>
            </ul>
          </motion.div>

          {/* Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                System Design Mindset
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                I believe in a 'think first, code later' philosophy. Before writing any logic, I zoom out and focus on the architecture. My goal is to connect the right tools—whether it's AWS services or clean APIs—to build robust systems.
              </p>
            </div>
            
            <Link to="/about" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
              Read Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
