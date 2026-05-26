import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            <span className="text-[10px] font-mono text-neon-cyan tracking-[0.5em]">01 / ABOUT</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent"></div>
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-3">
            <span className="gradient-text">WHO</span>{' '}
            <span className="text-white">I AM</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono text-sm">
            {'// '} Developer. AI Enthusiast. Builder of intelligent systems.
          </p>
        </motion.div>

        {/* BENTO ABOUT GRID */}
        <div className="grid grid-cols-12 gap-4">
          {/* Profile Card - Large */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="col-span-12 lg:col-span-7 glass-dark p-8 lg:p-10 rounded-3xl border border-neon-cyan/20 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-2xl gradient-animated flex items-center justify-center font-orbitron font-black text-white text-2xl shadow-2xl">
                  SI
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-2xl text-white">Shek Irfan S</h3>
                  <p className="font-mono text-sm text-neon-cyan">@Irfan-del-droid • Builder</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-mono text-green-400">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a <span className="text-neon-cyan font-semibold">Python Full Stack Developer</span> and AI enthusiast pursuing B.Tech in Computer Science at <span className="text-neon-purple font-semibold">B.S. Abdur Rahman Crescent Institute of Science and Technology</span>.
                </p>
                <p>
                  My focus is building real-world full-stack applications with <span className="text-neon-cyan">FastAPI, React, and modern databases</span> — with hands-on experience in <span className="text-neon-purple">LLM pipelines, RAG systems, and Agentic AI</span>.
                </p>
                <p className="text-sm text-gray-400">
                  I love turning complex ideas into elegant, production-ready software — and contributing to open source along the way.
                </p>
              </div>

              {/* Decorative quote */}
              <div className="mt-8 pl-4 border-l-2 border-neon-cyan/40">
                <p className="font-orbitron text-sm text-neon-cyan italic">
                  "Code. Innovate. Automate."
                </p>
                <p className="text-[10px] font-mono text-gray-500 mt-1">— Personal Philosophy</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Multiple Bento Cards */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="col-span-2 glass-dark p-5 rounded-2xl border border-neon-purple/20 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-pink/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Education</p>
                  <h4 className="font-orbitron font-bold text-sm text-white mt-1">B.Tech CSE</h4>
                  <p className="text-xs text-gray-400 mt-1">B.S. Abdur Rahman Crescent Institute</p>
                  <p className="text-[10px] font-mono text-neon-purple mt-1">2024 — 2028</p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="glass-dark p-5 rounded-2xl border border-neon-cyan/20 backdrop-blur-xl"
            >
              <p className="text-[9px] font-mono text-gray-500 tracking-widest uppercase mb-2">Based In</p>
              <p className="text-3xl mb-1">📍</p>
              <h4 className="font-orbitron font-bold text-sm text-neon-cyan">Tamil Nadu</h4>
              <p className="text-[10px] text-gray-400">India 🇮🇳</p>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15 }}
              className="glass-dark p-5 rounded-2xl border border-neon-purple/20 backdrop-blur-xl"
            >
              <p className="text-[9px] font-mono text-gray-500 tracking-widest uppercase mb-2">Languages</p>
              <div className="space-y-1.5 text-xs text-gray-300 font-mono">
                <p>🇮🇳 Tamil</p>
                <p>🇬🇧 English</p>
                <p>🇸🇦 Urdu</p>
                <p>🇮🇳 Hindi</p>
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="col-span-2 glass-dark p-5 rounded-2xl border border-neon-cyan/20 backdrop-blur-xl"
            >
              <p className="text-[9px] font-mono text-gray-500 tracking-widest uppercase mb-3">Current Focus</p>
              <div className="space-y-2">
                <FocusItem icon="🤖" title="Agentic AI Systems" desc="Multi-agent pipelines" />
                <FocusItem icon="🔍" title="RAG Engineering" desc="LangChain + ChromaDB" />
                <FocusItem icon="🌐" title="Open Source" desc="Contributing & building" />
              </div>
            </motion.div>
          </div>

          {/* Philosophy Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
          >
            <PhilosophyCard
              icon="💡"
              title="Build to Learn"
              desc="Every project is an opportunity to push boundaries."
              color="cyan"
            />
            <PhilosophyCard
              icon="🚀"
              title="Ship Fast"
              desc="Production-ready code that scales from day one."
              color="purple"
            />
            <PhilosophyCard
              icon="🌍"
              title="Stay Curious"
              desc="The best engineers never stop being students."
              color="cyan"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FocusItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-3">
    <span className="text-xl">{icon}</span>
    <div>
      <p className="font-orbitron text-xs font-bold text-white">{title}</p>
      <p className="text-[10px] text-gray-500 font-mono">{desc}</p>
    </div>
  </div>
);

const PhilosophyCard = ({ icon, title, desc, color }) => (
  <div className={`glass-dark p-5 rounded-2xl border ${color === 'cyan' ? 'border-neon-cyan/20' : 'border-neon-purple/20'} backdrop-blur-xl hover:scale-[1.02] transition-transform`}>
    <span className="text-3xl">{icon}</span>
    <h4 className={`font-orbitron font-bold text-base mt-3 ${color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'}`}>{title}</h4>
    <p className="text-xs text-gray-400 mt-1 font-mono">{desc}</p>
  </div>
);

export default About;
