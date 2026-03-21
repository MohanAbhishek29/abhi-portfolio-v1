import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Code, Zap, ExternalLink } from 'lucide-react';
import Modal from '../components/Modal';

const achievementImages = {
  'Solved 200+ LeetCode Problems': '/assets/images/leetcode.png',
  'AWS Cloud Architecture Badge': '/assets/images/aws_badge.png',
  'Web-A-Thon 2.0': '/assets/images/web_a_thon.png',
  'Binary Blitz Hackathon': '/assets/images/binary_blitz.png',
  'Cambridge Lingual Skill Exam': '/assets/images/cambridge.png'
};

const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { achievements, hackathons } = portfolioData;

  // Combine achievements into a single list
  const allAchievements = achievements.map((ach, idx) => {
    // Custom icons based on keywords or index
    let icon = <Award className="text-primary" size={24} />;
    if (ach.title.toLowerCase().includes('hackathon') || ach.title.toLowerCase().includes('web-a-thon')) {
      icon = <Zap className="text-accent" size={24} />;
    } else if (ach.title.toLowerCase().includes('cambridge')) {
      icon = <Star className="text-primary" size={24} />;
    } else if (ach.title.toLowerCase().includes('code') || ach.title.toLowerCase().includes('blitz')) {
      icon = <Code className="text-secondary" size={24} />;
    }

    return {
      ...ach,
      description: ach.modalContent?.split('.')[0] + '.' || ach.description, // Use first sentence of modal content as preview
      icon: icon
    };
  });

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '900px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Achievements
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
          {hackathons.summary.replace(/"/g, '')}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {allAchievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="card"
            onClick={() => setSelectedItem(item)}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem', 
              background: 'var(--bg-card)', position: 'relative', overflow: 'hidden', cursor: 'pointer'
            }}
          >
            {/* Left Icon Circle */}
            <div style={{ 
              width: '4rem', height: '4rem', borderRadius: '50%', background: 'var(--bg-main)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              border: '1px solid var(--border-color)', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)'
            }}>
              {item.icon}
            </div>

            {/* Content Mid */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
                {item.description}
              </p>
            </div>

            {/* Right Date Bubble & CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ 
                color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600, padding: '0.3rem 0.8rem', 
                background: 'rgba(110,86,207,0.1)', border: '1px solid rgba(110,86,207,0.2)', borderRadius: '99px'
              }}>
                {item.date}
              </span>
              
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', marginTop: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Details <ExternalLink size={12} />
              </span>
            </div>
            
            {/* Subtle left border accent */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--primary)', opacity: index % 2 === 0 ? 1 : 0.5 }}></div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
        subtitle="Achievement"
        description={selectedItem?.modalContent || selectedItem?.description}
        image={selectedItem ? achievementImages[selectedItem.title] : ''}
        demoLink={selectedItem?.link}
        demoLinkLabel="View Credential"
        date={selectedItem?.date}
      />
    </div>
  );
};

export default Achievements;
