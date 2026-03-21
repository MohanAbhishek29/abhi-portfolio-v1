import React from 'react';
import portfolioData from '../data/portfolio.json';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const certExtras = {
  "Social Networks": { image: '/assets/images/social_networks.png', logo: '/NPTEL_logo.png' },
  "ChatGPT Made Easy: AI Essentials for Beginners": { image: '/assets/images/chatgpt_ai.png', logo: '/Udemy_Logo.png' },
  "Build Generative AI Apps and Solutions": { image: '/assets/images/genai_neural.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png' },
  "Master Generative AI & Tools": { image: '/assets/images/master_gen_ai.png', logo: '/Udemy_Logo.png' },
  "TCP/IP and Advanced Topics": { image: '/assets/images/tcp_ip.png', logo: '/University_of_colorado_logo.png' },
  "Packet Switching Networks and Algorithms": { image: '/assets/images/Packet_switching.png', logo: '/University_of_colorado_logo.png' },
  "Peer-to-Peer Protocols and Local Area Networks": { image: '/assets/images/networking_thematic.png', logo: '/University_of_colorado_logo.png' },
  "Fundamentals of Network Communication": { image: '/assets/images/fundamentals_of_networking.png', logo: '/University_of_colorado_logo.png' },
  "The Bits and bytes in networking": { image: '/assets/images/networking_router.png', logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' }
};

const Certifications = () => {
  const { certifications } = portfolioData;
  const displayCerts = certifications.slice(0, 3).map(c => ({
    ...c,
    ...certExtras[c.title]
  }));

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title text-center" style={{ width: '100%', textAlign: 'center' }}>Certifications</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {displayCerts.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden' }}
              >
                <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative', overflow: 'hidden' }}>
                  <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>
                    {cert.issuer}
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{cert.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '1.5rem', flex: 1 }}>{cert.date}</p>
                  
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto', display: 'flex' }}>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: '100%' }}>
                        <ExternalLink size={16} /> View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <Link to="/certifications" className="btn btn-secondary">
            View All Certifications <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
