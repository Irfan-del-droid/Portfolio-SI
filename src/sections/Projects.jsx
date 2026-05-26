import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Zoho FlowIQ',
      subtitle: 'AI-Powered Productivity',
      category: 'AI / Productivity',
      description: 'AI-powered productivity platform that detects repetitive workflows across Zoho apps, predicts automation opportunities, and enables safe, ROI-driven optimization through simulation and approval systems.',
      tech: ['React', 'Tailwind', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'LLM + RAG'],
      features: ['Workflow Detection', 'Automation Prediction', 'ROI Calculation', 'Simulation System', 'Approval Workflows'],
      gradient: 'from-purple-600 via-pink-500 to-orange-400',
      bgGradient: 'from-purple-900/40 via-pink-900/20 to-transparent',
      icon: '⚡',
      featured: true,
    },
    {
      id: 2,
      title: 'Codebase Memory',
      subtitle: 'GitHub Knowledge Graph',
      category: 'Full Stack + AI',
      description: 'Built a tool that transforms GitHub repositories into queryable knowledge graphs using a three-agent AI pipeline.',
      tech: ['FastAPI', 'MongoDB', 'React', 'LangChain'],
      features: ['Repository Parsing', 'Knowledge Graph Generation', 'Multi-agent AI System', 'Semantic Search'],
      gradient: 'from-cyan-500 via-blue-500 to-purple-600',
      bgGradient: 'from-cyan-900/40 via-blue-900/20 to-transparent',
      icon: '◈',
    },
    {
      id: 3,
      title: 'ZohoFit',
      subtitle: 'AI Partner Intelligence Bot',
      category: 'AI / Chatbot',
      description: 'Built an AI partner intelligence bot for the Zoho CliqTrix competition with live OAuth integrations and a custom landing page.',
      tech: ['Zoho SalesIQ', 'Deluge Scripting', 'OAuth'],
      features: ['Live OAuth Integration', 'Custom Landing Page', 'Real-time Communication', 'Partner Intelligence'],
      gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
      bgGradient: 'from-emerald-900/40 via-cyan-900/20 to-transparent',
      icon: '◉',
    },
    {
      id: 4,
      title: 'Conversation Truth Layer',
      subtitle: 'AI Communication Coach',
      category: 'Full Stack + AI',
      description: 'Developed a full-stack communication coaching app with AI-powered real-time analysis.',
      tech: ['FastAPI', 'React', 'MongoDB'],
      features: ['Real-time Analysis', 'Communication Coaching', 'AI-powered Feedback', 'Performance Tracking'],
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      bgGradient: 'from-pink-900/40 via-rose-900/20 to-transparent',
      icon: '◆',
    },
  ];

  const featured = projects[0];
  const others = projects.slice(1);

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
            <span className="text-[10px] font-mono text-neon-cyan tracking-[0.5em]">03 / WORK</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent"></div>
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-3">
            <span className="text-white">SELECTED</span>{' '}
            <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono text-sm">
            {'// '} Real-world applications shipped with AI, full-stack, and modern architecture
          </p>
        </motion.div>

        {/* BENTO PROJECT GRID */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* FEATURED PROJECT - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            onClick={() => setSelectedProject(featured)}
            className="col-span-12 lg:col-span-8 row-span-2 group cursor-pointer relative overflow-hidden rounded-3xl glass-dark border border-white/10 hover:border-neon-cyan/40 transition-all"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${featured.bgGradient}`}></div>
            <div className="absolute inset-0 opacity-50"
                 style={{background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)'}}></div>

            {/* Animated gradient orb */}
            <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br ${featured.gradient} opacity-30 blur-3xl group-hover:opacity-50 transition-opacity`}></div>

            <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col min-h-[500px]">
              {/* Top metadata */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono text-white tracking-wider uppercase">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono text-white">
                    {featured.category}
                  </span>
                </div>
                <span className="text-5xl opacity-50">{featured.icon}</span>
              </div>

              {/* Title block */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-orbitron font-black text-4xl lg:text-6xl text-white mb-3 leading-none">
                  {featured.title}
                </h3>
                <p className="font-orbitron text-lg lg:text-xl text-white/80 mb-4 tracking-wide">
                  {featured.subtitle}
                </p>
                <p className="text-white/70 max-w-xl text-sm lg:text-base leading-relaxed mb-6">
                  {featured.description}
                </p>
              </div>

              {/* Bottom row */}
              <div className="flex items-end justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {featured.tech.slice(0, 5).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-black/30 backdrop-blur text-[10px] font-mono text-white/90 border border-white/10">
                      {t}
                    </span>
                  ))}
                  {featured.tech.length > 5 && (
                    <span className="px-2.5 py-1 text-[10px] font-mono text-white/60">
                      +{featured.tech.length - 5}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-white font-mono text-sm group-hover:gap-3 transition-all">
                  <span>VIEW DETAILS</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* OTHER PROJECTS */}
          {others.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer relative overflow-hidden rounded-3xl glass-dark border border-white/10 hover:border-neon-cyan/40 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-60`}></div>
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}></div>

              <div className="relative z-10 p-6 h-full flex flex-col min-h-[240px]">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur text-[9px] font-mono text-white/90 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="text-2xl opacity-50">{project.icon}</span>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-orbitron font-bold text-xl lg:text-2xl text-white mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-white/60 mb-3">{project.subtitle}</p>
                  <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-end justify-between gap-2 mt-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-black/30 text-[9px] font-mono text-white/80 border border-white/10">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-0.5 text-[9px] font-mono text-white/60">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                  <span className="text-white/80 text-xs group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <StatBox icon="🚀" value="4+" label="Major Projects" />
          <StatBox icon="🧠" value="3" label="AI / RAG Systems" />
          <StatBox icon="⚡" value="100%" label="Production Ready" />
          <StatBox icon="🌐" value="2025" label="Latest Builds" />
        </motion.div>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-dark rounded-3xl border border-neon-cyan/20 overflow-hidden my-8"
            >
              {/* Modal Hero */}
              <div className={`relative h-48 bg-gradient-to-br ${selectedProject.bgGradient}`}>
                <div className={`absolute -top-10 -right-10 w-60 h-60 rounded-full bg-gradient-to-br ${selectedProject.gradient} opacity-30 blur-3xl`}></div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition"
                >✕</button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-[10px] font-mono text-white uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-orbitron font-black text-3xl md:text-4xl text-white mt-3 leading-none">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-sm text-white/70 mt-1">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-[10px] font-mono text-neon-cyan tracking-widest mb-3">TECH STACK</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-cyber-darker border border-neon-cyan/20 text-xs font-mono text-neon-cyan">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-neon-purple tracking-widest mb-3">KEY FEATURES</h4>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((f) => (
                        <li key={f} className="text-xs text-gray-300 font-mono flex items-center gap-2">
                          <span className="text-neon-purple">▸</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const StatBox = ({ icon, value, label }) => (
  <div className="glass-dark p-5 rounded-2xl border border-neon-cyan/10 backdrop-blur-xl text-center hover:border-neon-cyan/30 transition-all">
    <div className="text-3xl mb-2">{icon}</div>
    <p className="font-orbitron font-black text-2xl gradient-text">{value}</p>
    <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1">{label}</p>
  </div>
);

export default Projects;
