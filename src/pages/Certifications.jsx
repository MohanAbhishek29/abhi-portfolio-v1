import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

// Adding real logos for a more authentic and professional look
const certExtras = {
  "Social Networks": { 
    image: '/assets/images/social_networks.png', 
    logo: '/NPTEL_logo.png'
  },
  "ChatGPT Made Easy: AI Essentials for Beginners": {
    image: '/assets/images/chatgpt_ai.png',
    logo: '/Udemy_Logo.png'
  },
  "Build Generative AI Apps and Solutions": { 
    image: '/assets/images/genai_neural.png', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png'
  },
  "Master Generative AI & Tools": { 
    image: '/assets/images/master_gen_ai.png', 
    logo: '/Udemy_Logo.png'
  },
  "TCP/IP and Advanced Topics": {
    image: '/assets/images/tcp_ip.png',
    logo: '/University_of_colorado_logo.png'
  },
  "Packet Switching Networks and Algorithms": {
    image: '/assets/images/Packet_switching.png',
    logo: '/University_of_colorado_logo.png'
  },
  "Peer-to-Peer Protocols and Local Area Networks": {
    image: '/assets/images/networking_thematic.png',
    logo: '/University_of_colorado_logo.png'
  },
  "Fundamentals of Network Communication": {
    image: '/assets/images/fundamentals_of_networking.png',
    logo: '/University_of_colorado_logo.png'
  },
  "The Bits and bytes in networking": { 
    image: '/assets/images/networking_router.png', 
    logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg'
  }
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const { certifications } = portfolioData;

  const enhancedCerts = certifications.map(c => ({
    ...c,
    ...certExtras[c.title]
  }));

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Certifications
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Professional credentials that validate my technical expertise and continuous learning journey.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {enhancedCerts.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover="hover"
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="card"
            onClick={() => setSelectedCert(cert)}
            style={{ 
              display: 'flex', flexDirection: 'column', minHeight: '400px', height: '100%', padding: 0, overflow: 'hidden', 
              background: 'var(--bg-card)', textDecoration: 'none', position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)', cursor: 'pointer'
            }}
          >
            {/* Top Image Section */}
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
              <motion.img 
                variants={{
                  hover: { scale: 1.1 }
                }}
                src={cert.image} 
                alt={cert.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.5s ease'
                }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,12,0), rgba(10,10,12,0.7))' }}></div>
              
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>
                {cert.issuer}
              </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.4 }}>
                {cert.title}
              </h3>
              
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '30px', height: '30px', background: 'white', borderRadius: '6px', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={cert.logo} alt={cert.issuer} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{cert.issuer}</span>
                </div>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 500 }}>{cert.date}</span>
              </div>
            </div>

            {/* Hover details text */}
            <div style={{ 
              background: 'rgba(110,86,207,0.1)', 
              borderTop: '1px solid rgba(110,86,207,0.2)', padding: '0.8rem', textAlign: 'center',
              color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: 'auto'
            }}>
              <ExternalLink size={14} /> View Details & Archive
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
        subtitle={`${selectedCert?.issuer} Certified`}
        description={selectedCert?.modalContent || "Credential verification details and learning objectives achievement."}
        image={selectedCert?.image}
        demoLink={selectedCert?.link}
        demoLinkLabel="View Certificate"
        date={selectedCert?.date}
      />
    </div>
  );
};

export default Certifications;
