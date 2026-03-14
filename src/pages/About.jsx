import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Zap, Coffee, Music, Palette, Globe, MonitorPlay, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>About Me</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Quick Facts */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="card" style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Zap className="text-primary" /> Quick Facts
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <MapPin className="text-primary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Base Camp:</strong> LPU, Punjab (But originally from Godavari—yes, the food hits different! 🍛)</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Target className="text-secondary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Mission:</strong> B.Tech CSE (3rd Year) & surviving hackathons on zero sleep.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Zap className="text-accent" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Superpower:</strong> Architecting cloud solutions (and fixing the backend before anyone notices 🤫).</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Coffee className="text-primary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Fuel:</strong> 100% Pure Vegetarian 🌱.</span>
              </li>
            </ul>
          </motion.div>

          {/* When I'm Not Coding */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="card" style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              When I'm Not Coding
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Music className="text-primary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Dropping Beats with Suno AI:</strong> Because why just listen to Spotify when you can generate your own custom tracks?</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Palette className="text-secondary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Prompting AI Art:</strong> Obsessed with generating high-aesthetic, dark/goth style digital art.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Globe className="text-accent" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Hablando Español:</strong> Currently learning Spanish. ¡Hola, amigos!</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <MonitorPlay className="text-primary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Chilling with Streams:</strong> Catching up on UNQ Gamer streams (Sai Ram! 🙏) & Tech podcasts.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Code className="text-secondary" style={{ shrink: 0, marginTop: '2px' }} size={20} />
                <span><strong>Vibe Coding:</strong> Why type 10,000 lines of code manually when you can just vibe, use smart tools, and architect a whole system effortlessly? 😎</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* My Journey */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="card" style={{ padding: '2rem', height: '100%' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              My Journey
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              My journey in tech didn't start with hardcore competitive programming, but rather with a deep curiosity about how massive applications run behind the scenes. I quickly realized my passion lies in the Cloud ecosystem.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              I spend my time exploring AWS services, figuring out how to architect reliable infrastructure, and connecting the dots between different technologies. My philosophy is simple: write smart logic, automate the boring stuff, and let the cloud handle the heavy lifting.
            </p>
          </motion.div>

          {/* My Approach */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="card" style={{ padding: '2rem', height: '100%' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              My Approach (System Design Mindset)
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              I believe in a 'think first, code later' philosophy. Before writing any logic, I zoom out and focus on the architecture. My goal is to connect the right tools—whether it's AWS services, databases, or modern frameworks—to build systems that are secure, scalable, and cost-effective.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              I don't just want to build applications that pass a test case; I focus on smart system design to ensure they don't crash when thousands of users log in. It's all about integrating the right pieces to solve real-world problems efficiently.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default About;
