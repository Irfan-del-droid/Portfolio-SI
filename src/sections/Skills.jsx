import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PythonIcon, ReactIcon, FastAPIIcon, FlaskIcon, MongoIcon,
  PostgresIcon, DockerIcon, GitIcon, TypescriptIcon, JavaScriptIcon,
  ChromaIcon, RedisIcon, TailwindIcon, LangChainIcon
} from '../components/TechIcons';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState({
    name: 'Python',
    icon: <PythonIcon className="w-16 h-16" />,
    description: 'Core language for backend & AI development',
    category: 'Languages',
    level: 95,
    color: '#FFD43B',
  });

  const techStack = [
    { name: 'Python', icon: <PythonIcon />, category: 'Languages', level: 95, color: '#FFD43B' },
    { name: 'JavaScript', icon: <JavaScriptIcon />, category: 'Languages', level: 88, color: '#F0DB4F' },
    { name: 'TypeScript', icon: <TypescriptIcon />, category: 'Languages', level: 82, color: '#3178C6' },
    { name: 'React', icon: <ReactIcon />, category: 'Frontend', level: 90, color: '#61DAFB' },
    { name: 'Tailwind', icon: <TailwindIcon />, category: 'Frontend', level: 92, color: '#38B2AC' },
    { name: 'FastAPI', icon: <FastAPIIcon />, category: 'Backend', level: 93, color: '#009688' },
    { name: 'Flask', icon: <FlaskIcon />, category: 'Backend', level: 85, color: '#000000' },
    { name: 'MongoDB', icon: <MongoIcon />, category: 'Database', level: 88, color: '#10AA50' },
    { name: 'PostgreSQL', icon: <PostgresIcon />, category: 'Database', level: 85, color: '#336791' },
    { name: 'Redis', icon: <RedisIcon />, category: 'Database', level: 75, color: '#D82C20' },
    { name: 'LangChain', icon: <LangChainIcon />, category: 'AI / ML', level: 90, color: '#10A37F' },
    { name: 'ChromaDB', icon: <ChromaIcon />, category: 'AI / ML', level: 88, color: '#327EFF' },
    { name: 'Docker', icon: <DockerIcon />, category: 'DevOps', level: 80, color: '#1488C6' },
    { name: 'Git', icon: <GitIcon />, category: 'Tools', level: 92, color: '#F34F29' },
  ];

  const categories = [
    { name: 'AI / ML', color: 'cyan', items: ['Generative AI', 'Agentic AI', 'LLM', 'SLM', 'RAG', 'Prompt Engineering'] },
    { name: 'Backend', color: 'purple', items: ['FastAPI', 'Flask', 'REST API', 'OAuth', 'WebSockets'] },
    { name: 'Frontend', color: 'cyan', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { name: 'Cloud', color: 'purple', items: ['Google Cloud Run', 'Docker', 'Cloud Computing'] },
  ];

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
            <span className="text-[10px] font-mono text-neon-cyan tracking-[0.5em]">02 / SKILLS</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent"></div>
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-3">
            <span className="gradient-text">TECH</span>{' '}
            <span className="text-white">ARSENAL</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono text-sm">
            {'// '} A curated toolkit of technologies powering modern AI & full-stack development
          </p>
        </motion.div>

        {/* MAIN BENTO GRID */}
        <div className="grid grid-cols-12 gap-4">
          {/* LARGE SHOWCASE - Featured Tech (Python style like reference) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="col-span-12 lg:col-span-6 row-span-2 glass-dark p-8 rounded-3xl border border-neon-cyan/20 backdrop-blur-xl relative overflow-hidden group"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-20"
                 style={{background: `radial-gradient(circle at 30% 50%, ${selectedSkill.color}40 0%, transparent 60%)`}}></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Featured</span>
                <span className="text-[10px] font-mono text-neon-cyan">{selectedSkill.category}</span>
              </div>

              {/* Big Icon */}
              <motion.div
                key={selectedSkill.name}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex justify-center my-12"
              >
                <div className="relative">
                  <div className="absolute inset-0 blur-3xl opacity-40"
                       style={{background: selectedSkill.color}}></div>
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                    {React.cloneElement(selectedSkill.icon, { className: 'w-32 h-32 lg:w-40 lg:h-40' })}
                  </div>
                </div>
              </motion.div>

              <div className="text-center">
                <h3 className="font-orbitron font-black text-3xl lg:text-5xl text-white mb-2">{selectedSkill.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{selectedSkill.description || `${selectedSkill.category} expertise`}</p>

                {/* Proficiency bar */}
                <div className="max-w-xs mx-auto">
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-gray-500">PROFICIENCY</span>
                    <span className="text-neon-cyan">{selectedSkill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-cyber-darker rounded-full overflow-hidden">
                    <motion.div
                      key={selectedSkill.name}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating corner decoration */}
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-600">
              {'<'}stack.featured{'/>'}
            </div>
          </motion.div>

          {/* CATEGORY CARDS - Right side */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-dark p-5 rounded-2xl border ${cat.color === 'cyan' ? 'border-neon-cyan/20' : 'border-neon-purple/20'} backdrop-blur-xl hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`font-orbitron font-bold text-sm ${cat.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'}`}>
                    {cat.name}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-500">{cat.items.length}</span>
                </div>
                <div className="space-y-1.5">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                      <span className={cat.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'}>▸</span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECH STACK GRID - Selectable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-6 glass-dark p-6 lg:p-8 rounded-3xl border border-neon-cyan/10 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Click to explore</p>
              <h4 className="font-orbitron font-bold text-lg text-white">Technology Stack</h4>
            </div>
            <div className="text-[10px] font-mono text-neon-cyan">{techStack.length} Technologies</div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-7 gap-3">
            {techStack.map((tech, idx) => (
              <motion.button
                key={tech.name}
                onClick={() => setSelectedSkill({...tech, description: `${tech.category} expertise`})}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.03 }}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-3 transition-all ${
                  selectedSkill.name === tech.name
                    ? 'glass border-neon-cyan/60 shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                    : 'bg-cyber-darker/60 border border-white/5 hover:border-neon-cyan/30'
                }`}
              >
                {React.cloneElement(tech.icon, { className: 'w-7 h-7 lg:w-9 lg:h-9' })}
                <span className="text-[9px] font-mono text-gray-400 mt-1.5 truncate w-full text-center">{tech.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
