import React from 'react';
import portfolioData from '../data/portfolio.json';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const achievementImages = {
  'Solved 200+ LeetCode Problems': '/assets/images/leetcode.png',
  'AWS Cloud Architecture Badge': '/assets/images/aws_badge.png',
  'Web-A-Thon 2.0': '/assets/images/web_a_thon.png',
  'Binary Blitz Hackathon': '/assets/images/binary_blitz.png',
  'Cambridge Lingual Skill Exam': '/assets/images/cambridge.png'
};

const AchievementsSection = () => {
  const { achievements } = portfolioData;
  
  // Explicitly requested Home Page achievements
  const homeAchievements = ['Web-A-Thon 2.0', 'AWS Cloud Architecture Badge', 'Cambridge Lingual Skill Exam'];
  
  const displayAchievements = achievements
    .filter(ach => homeAchievements.includes(ach.title))
    .slice(0, 3) // Failsafe
    .map(ach => ({
      ...ach,
      image: achievementImages[ach.title] || ''
    }));

  return (
    <section id="achievements" className="section bg-alt">
      <div className="container">
        <h2 className="section-title text-center" style={{ width: '100%', textAlign: 'center' }}>Key Achievements</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {displayAchievements.map((ach, index) => (
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
                {ach.image && (
                  <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative', overflow: 'hidden' }}>
                    <img src={ach.image} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                )}
                
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{ach.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{ach.issuer}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '1.5rem', flex: 1 }}>{ach.date}</p>
                  
                  {ach.link && (
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto', display: 'flex' }}>
                      <a href={ach.link} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: '100%' }}>
                        <ExternalLink size={16} /> View Details
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <Link to="/achievements" className="btn btn-secondary">
            View All Achievements <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
