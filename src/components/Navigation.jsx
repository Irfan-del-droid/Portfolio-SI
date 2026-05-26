import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: '◉' },
    { id: 'about', label: 'About', icon: '◈' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '◆' },
    { id: 'experience', label: 'Experience', icon: '▶' },
    { id: 'contact', label: 'Contact', icon: '✉' },
  ];

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg gradient-animated flex items-center justify-center">
              <span className="font-orbitron font-black text-white text-lg">SI</span>
            </div>
            <div className="hidden md:block">
              <p className="font-orbitron font-bold text-sm gradient-text">SHEK IRFAN</p>
              <p className="font-mono text-[10px] text-gray-500 tracking-wider">AI DEVELOPER v2.0</p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 glass-dark px-2 py-2 rounded-full">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                data-section={item.id}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-mono text-sm tracking-wide transition-all ${
                  activeSection === item.id
                    ? 'gradient-animated text-white font-bold'
                    : 'text-gray-400 hover:text-neon-cyan'
                }`}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass-dark p-2 rounded-lg text-neon-cyan"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-dark mx-6 p-4 rounded-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setIsOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-mono text-sm mb-1 ${
                  activeSection === item.id
                    ? 'gradient-animated text-white font-bold'
                    : 'text-gray-400'
                }`}
              >
                <span className="mr-2">{item.icon}</span>{item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Bottom Floating Dock - Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex glass-dark px-4 py-2 rounded-2xl gap-3"
      >
        <a href="https://github.com/Irfan-del-droid" target="_blank" rel="noopener noreferrer"
           className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/shek-irfan-s-b7422133a" target="_blank" rel="noopener noreferrer"
           className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="mailto:s.shekirfan993@gmail.com"
           className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-neon-purple hover:bg-neon-purple/10 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
        </a>
        <div className="w-px bg-neon-cyan/20"></div>
        <a href="/Shek_Irfan_CV.pdf" download="Shek_Irfan_S_CV.pdf" className="px-3 h-10 rounded-xl flex items-center text-xs font-mono text-neon-cyan hover:bg-neon-cyan/10 transition-all">
          Download CV ↓
        </a>
      </motion.div>
    </>
  );
};

export default Navigation;
