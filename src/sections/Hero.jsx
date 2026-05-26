import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CyberBrain from '../components/CyberBrain';
import {
  PythonIcon, ReactIcon, FastAPIIcon, MongoIcon,
  PostgresIcon, DockerIcon, GitIcon, TypescriptIcon, JavaScriptIcon, ChromaIcon
} from '../components/TechIcons';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '$ initializing intelligent systems...';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-24 pb-12 px-6 lg:px-12">
      {/* 3D Brain - Glowing BEHIND the name as a halo/aura */}
      <div className="absolute top-0 left-0 w-full lg:w-[60%] h-full z-0 opacity-40 lg:opacity-60 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
          <color attach="background" args={['#050812']} />
          <fog attach="fog" args={['#050812', 6, 22]} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
          <pointLight position={[-10, -10, 10]} intensity={1.2} color="#b300ff" />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#ff006e" />
          <Suspense fallback={null}>
            <CyberBrain scale={1.4} position={[-0.5, 0.3, 0]} />
          </Suspense>
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Subtle vignette - keeps brain visible behind name but soft */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
           style={{background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(5,8,18,0.4) 0%, rgba(5,8,18,0.7) 50%, rgba(5,8,18,0.95) 100%)'}}></div>

      {/* MAIN BENTO LAYOUT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto min-h-[calc(100vh-7rem)] grid grid-cols-12 gap-4">

        {/* HERO TITLE BLOCK - Full Width */}
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
          {/* Top Tag Row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8 flex-wrap"
          >
            <div className="inline-flex items-center gap-2 glass-dark px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-[10px] font-mono text-green-400 tracking-widest font-bold">AVAILABLE FOR WORK</span>
            </div>
            <div className="inline-flex items-center gap-2 glass-dark px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-mono text-gray-400 tracking-widest">v2.0.26</span>
            </div>
          </motion.div>

          {/* MAIN NAME - SINGLE LINE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-xs font-mono text-neon-cyan tracking-[0.5em] mb-2">HELLO, I AM</p>
            <h1 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight whitespace-nowrap">
              <span className="gradient-text">SHEK IRFAN S</span>
            </h1>
          </motion.div>

          {/* Role with underline accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-neon-cyan"></div>
              <p className="font-orbitron font-bold text-base md:text-xl text-white tracking-[0.2em] uppercase">
                Python Full Stack <span className="text-neon-cyan">×</span> AI Engineer
              </p>
            </div>
            <p className="font-mono text-sm text-gray-400 ml-11">
              Building agentic systems, RAG pipelines & full-stack apps that scale.
            </p>
          </motion.div>

          {/* Terminal command */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-dark inline-flex items-center gap-3 px-5 py-3 rounded-lg mb-8 max-w-xl border border-neon-cyan/20"
          >
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
            </div>
            <p className="font-mono text-sm text-neon-cyan flex-1">
              {displayedText}
              <span className="animate-pulse">█</span>
            </p>
          </motion.div>

          {/* CTA + Quick Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group relative px-7 py-3 rounded-xl overflow-hidden inline-flex items-center gap-2"
            >
              <div className="absolute inset-0 gradient-animated"></div>
              <span className="relative font-orbitron font-bold text-white tracking-wider z-10 text-sm">VIEW PROJECTS</span>
              <span className="relative z-10 text-white transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="mailto:s.shekirfan993@gmail.com"
              className="glass px-7 py-3 rounded-xl font-orbitron font-bold text-white tracking-wider hover:border-neon-cyan/60 transition-all text-sm inline-flex items-center gap-2"
            >
              <span>HIRE ME</span>
            </a>

            <div className="flex items-center gap-3 ml-2">
              <SocialIcon href="https://github.com/Irfan-del-droid">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/shek-irfan-s-b7422133a">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </SocialIcon>
              <SocialIcon href="mailto:s.shekirfan993@gmail.com">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </SocialIcon>
            </div>
          </motion.div>

          {/* Bento Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-4 gap-3 max-w-2xl"
          >
            <BentoStat value="12+" label="Projects" accent="cyan" />
            <BentoStat value="5+" label="AI Builds" accent="purple" />
            <BentoStat value="10+" label="Tech Stack" accent="cyan" />
            <BentoStat value="∞" label="Learning" accent="purple" />
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Bento Cards */}
        <div className="hidden lg:flex col-span-4 flex-col gap-3 justify-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-dark p-5 rounded-2xl border border-neon-cyan/20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl gradient-animated flex items-center justify-center font-orbitron font-black text-white text-lg">
                SI
              </div>
              <div>
                <p className="font-orbitron font-bold text-sm text-white">Shek Irfan S</p>
                <p className="text-[10px] font-mono text-neon-cyan">@Irfan-del-droid</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <InfoRow icon="🎓" label="B.Tech CSE • 3rd Year" />
              <InfoRow icon="📍" label="Tamil Nadu, India" />
              <InfoRow icon="🏛️" label="Crescent Institute" />
            </div>
          </motion.div>

          {/* Now Playing - Spotify-style card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-dark p-4 rounded-2xl border border-neon-purple/20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Currently Building</p>
                <p className="font-orbitron font-bold text-xs text-white truncate">Agentic RAG System</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1 h-3 bg-neon-purple rounded-full animate-pulse"></span>
                  <span className="w-1 h-4 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></span>
                  <span className="w-1 h-2 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-1 h-5 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></span>
                  <span className="w-1 h-3 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass-dark p-4 rounded-2xl border border-neon-cyan/20 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Tech Arsenal</p>
              <span className="text-[10px] font-mono text-neon-cyan">10+</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              <TechBadge icon={<PythonIcon className="w-6 h-6" />} />
              <TechBadge icon={<ReactIcon className="w-6 h-6" />} />
              <TechBadge icon={<FastAPIIcon className="w-6 h-6" />} />
              <TechBadge icon={<MongoIcon className="w-6 h-6" />} />
              <TechBadge icon={<PostgresIcon className="w-6 h-6" />} />
              <TechBadge icon={<DockerIcon className="w-6 h-6" />} />
              <TechBadge icon={<GitIcon className="w-6 h-6" />} />
              <TechBadge icon={<TypescriptIcon className="w-6 h-6" />} />
              <TechBadge icon={<JavaScriptIcon className="w-6 h-6" />} />
              <TechBadge icon={<ChromaIcon className="w-6 h-6" />} />
            </div>
          </motion.div>

          {/* Status Snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-dark p-4 rounded-2xl border border-green-500/20 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Status</p>
              <span className="text-[10px] font-mono text-green-400">● ONLINE</span>
            </div>
            <div className="space-y-1.5 text-[10px] font-mono">
              <StatusLine label="LLM Pipelines" value="OPERATIONAL" />
              <StatusLine label="RAG Engine" value="ACTIVE" />
              <StatusLine label="Open Source" value="CONTRIBUTING" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-12 w-2 h-2 rounded-full bg-neon-cyan animate-pulse pointer-events-none hidden lg:block"></div>
      <div className="absolute bottom-40 left-1/3 w-1 h-1 rounded-full bg-neon-purple animate-pulse pointer-events-none hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse pointer-events-none hidden lg:block"></div>
    </section>
  );
};

const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
     className="w-9 h-9 rounded-full glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/60 transition-all">
    {children}
  </a>
);

const BentoStat = ({ value, label, accent }) => (
  <div className={`glass-dark p-3 rounded-xl border ${accent === 'cyan' ? 'border-neon-cyan/20' : 'border-neon-purple/20'} hover:scale-105 transition-transform`}>
    <p className={`font-orbitron font-black text-2xl ${accent === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'} mb-1`}>{value}</p>
    <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">{label}</p>
  </div>
);

const InfoRow = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-gray-300 font-mono text-[11px]">
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

const TechBadge = ({ icon }) => (
  <div className="aspect-square rounded-lg bg-cyber-darker/50 border border-white/5 flex items-center justify-center hover:border-neon-cyan/40 hover:scale-110 transition-all cursor-pointer">
    {icon}
  </div>
);

const StatusLine = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-400">{label}</span>
    <span className="text-green-400">{value}</span>
  </div>
);

export default Hero;
