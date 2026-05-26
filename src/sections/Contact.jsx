import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono text-neon-cyan tracking-[0.5em]">05 / CONTACT</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent"></div>
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-3">
            <span className="text-white">LET'S</span>{' '}
            <span className="gradient-text">CONNECT</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono text-sm">
            {'// '} Open to collaborations, internships, freelance projects & coffee chats
          </p>
        </motion.div>

        {/* BENTO CONTACT GRID */}
        <div className="grid grid-cols-12 gap-4">
          {/* Big CTA Card - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="col-span-12 lg:col-span-5 glass-dark p-8 rounded-3xl border border-neon-cyan/20 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <p className="text-[10px] font-mono text-neon-cyan tracking-[0.5em] mb-4">READY TO BUILD?</p>
              <h3 className="font-orbitron font-black text-3xl lg:text-4xl text-white leading-tight mb-4">
                Have a project in mind?
              </h3>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new opportunities, collaborations, or just talking about AI and code.
              </p>
            </div>

            <div className="relative z-10 space-y-3">
              <a
                href="mailto:s.shekirfan993@gmail.com"
                className="block w-full px-6 py-4 rounded-xl gradient-animated text-center font-orbitron font-bold text-white tracking-wider text-sm hover:scale-[1.02] transition-transform"
              >
                START A CONVERSATION →
              </a>
              <div className="flex items-center justify-center gap-3 mt-4">
                <SocialPill href="https://github.com/Irfan-del-droid" label="GitHub" />
                <SocialPill href="https://www.linkedin.com/in/shek-irfan-s-b7422133a" label="LinkedIn" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Info Bento */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
            {/* Email Card */}
            <motion.a
              href="mailto:s.shekirfan993@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="col-span-2 glass-dark p-6 rounded-2xl border border-neon-purple/20 backdrop-blur-xl hover:border-neon-purple/60 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Email</p>
                <span className="text-neon-purple group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="font-mono text-lg text-white break-all">s.shekirfan993@gmail.com</p>
              <p className="text-[10px] font-mono text-neon-purple mt-2">⚡ Average reply: 24 hours</p>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="glass-dark p-6 rounded-2xl border border-neon-cyan/20 backdrop-blur-xl"
            >
              <span className="text-3xl mb-3 block">📍</span>
              <p className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Location</p>
              <p className="font-orbitron font-bold text-sm text-neon-cyan mt-1">Tamil Nadu</p>
              <p className="text-[10px] text-gray-400 font-mono">India 🇮🇳 • IST (GMT+5:30)</p>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15 }}
              className="glass-dark p-6 rounded-2xl border border-green-500/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-[9px] font-mono text-green-400 tracking-widest uppercase">Status</p>
              </div>
              <p className="font-orbitron font-bold text-sm text-green-400">Available</p>
              <p className="text-[10px] text-gray-400 font-mono mt-1">For internships & freelance</p>
            </motion.div>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Irfan-del-droid"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="glass-dark p-6 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-white/40 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="font-orbitron font-bold text-sm text-white mt-2">GitHub</p>
              <p className="text-[10px] text-gray-400 font-mono">@Irfan-del-droid</p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/shek-irfan-s-b7422133a"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.25 }}
              className="glass-dark p-6 rounded-2xl border border-blue-500/20 backdrop-blur-xl hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="font-orbitron font-bold text-sm text-white mt-2">LinkedIn</p>
              <p className="text-[10px] text-gray-400 font-mono">Connect & Network</p>
            </motion.a>
          </div>

          {/* Quick Message Form - Full Width */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            onSubmit={handleSubmit}
            className="col-span-12 glass-dark p-8 rounded-3xl border border-neon-cyan/20 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] font-mono text-neon-cyan tracking-widest uppercase">Quick Message</p>
                <h4 className="font-orbitron font-bold text-xl text-white mt-1">Drop me a line directly</h4>
              </div>
              <span className="text-3xl">✉️</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your name"
                required
                className="bg-cyber-darker/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/60 transition-all font-mono text-sm"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Your email"
                required
                className="bg-cyber-darker/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/60 transition-all font-mono text-sm"
              />
            </div>

            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me about your project..."
              required
              rows="4"
              className="w-full bg-cyber-darker/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/60 transition-all resize-none font-mono text-sm mb-4"
            ></textarea>

            <button
              type="submit"
              disabled={submitted}
              className="px-8 py-3 rounded-xl gradient-animated font-orbitron font-bold text-white tracking-wider text-sm hover:scale-[1.02] transition-transform"
            >
              {submitted ? '✓ MESSAGE SENT' : 'SEND MESSAGE →'}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between flex-wrap gap-4"
        >
          <p className="text-[10px] font-mono text-gray-500">
            © 2026 Shek Irfan S. • Built with React + Three.js
          </p>
          <p className="text-[10px] font-mono text-gray-500">
            <span className="text-neon-cyan">{'<'}</span>code with passion{' '}
            <span className="text-neon-pink">♥</span>
            <span className="text-neon-cyan">{'/>'}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const SocialPill = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
     className="glass px-4 py-2 rounded-full text-xs font-mono text-white hover:border-neon-cyan/60 transition-all">
    {label}
  </a>
);

export default Contact;
