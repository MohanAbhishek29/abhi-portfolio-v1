import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Environment variables for security
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      // For demo purposes, if keys aren't set, simulate success after 1.5s
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'from_name') {
      setFormData({ ...formData, name: value });
    } else if (name === 'from_email') {
      setFormData({ ...formData, email: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section id="contact" className="page-container section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Initialize Connection
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Establish a secure uplink to architect your next cloud-scale project.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        {/* Contact Info - Console Style */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card" style={{ padding: '2rem', background: '#0f172a', border: '1px solid #1e293b', boxShadow: '0 0 40px rgba(56, 189, 248, 0.1)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fbbf24' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', marginLeft: '0.5rem', fontFamily: 'monospace' }}>abhishek@cloud-console: ~</span>
            </div>

            <h3 style={{ color: '#f8fafc', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contact <span style={{ color: '#38bdf8' }}>•</span> EndPoints</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</p>
                  <p style={{ margin: 0, color: '#f8fafc', fontWeight: 500 }}>mohanabhishek269@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Channel</p>
                  <p style={{ margin: 0, color: '#f8fafc', fontWeight: 500 }}>+91-9392421941</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ec4899' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Base Region</p>
                  <p style={{ margin: 0, color: '#f8fafc', fontWeight: 500 }}>LPU, Punjab, India</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Social Clusters</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[
                  { icon: <Github size={20} />, link: 'https://github.com/MohanAbhishek29', color: '#38bdf8' },
                  { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/mohan-abhishek-978825296', color: '#8b5cf6' },
                  { icon: <Mail size={20} />, link: 'mailto:mohanabhishek269@gmail.com', color: '#ec4899' }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" style={{ 
                    width: '44px', height: '44px', borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: social.color, transition: 'all 0.3s ease', textDecoration: 'none'
                  }}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  style={{
                    padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  style={{
                    padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>What is your query?</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What are we discussing?"
                required
                style={{
                  padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Description</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me more about your project or query..."
                required
                style={{
                  padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              ></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={status === 'sending'}
                style={{ 
                  padding: '1rem 2.5rem',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  minWidth: '200px'
                }}
              >
                {status === 'sending' ? (
                  <>Sending Payload <Loader2 size={18} className="animate-spin" /></>
                ) : status === 'success' ? (
                  <>Payload Delivered <CheckCircle size={18} /></>
                ) : (
                  <>Push Updates <Send size={18} /></>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ color: '#22c55e', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    Uplink Established! Expect a response soon.
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <AlertCircle size={16} /> Link Failed. Please try again.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
