import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Python Full Stack Developer',
      company: 'PUMO Technovation India',
      location: 'Kanchipuram, Tamil Nadu',
      type: 'Apprenticeship • On-site',
      period: 'Oct 2025 — Dec 2025',
      color: 'cyan',
      logo: 'PT',
      gradient: 'from-cyan-500 to-blue-600',
      achievements: [
        'Developed full-stack Python applications as part of an on-site apprenticeship program',
        'Enhanced backend systems and improved overall development workflows',
        'Applied best practices in code organization and system design',
      ],
      skills: ['Python', 'FastAPI', 'PostgreSQL', 'Git'],
    },
    {
      role: 'Student Intern — Software Development',
      company: 'InLighnX Global Private Limited',
      location: 'Bengaluru, Karnataka',
      type: 'Internship • Remote',
      period: 'Nov 2025 — Dec 2025',
      color: 'purple',
      logo: 'IX',
      gradient: 'from-purple-500 to-pink-600',
      achievements: [
        'Contributed to software development tasks in a remote internship environment',
        'Applied problem-solving skills to real-world development challenges',
        'Collaborated with team members on full-stack development projects',
      ],
      skills: ['Python', 'React', 'REST API', 'GitHub'],
    },
  ];

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono text-neon-cyan tracking-[0.5em]">04 / JOURNEY</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent"></div>
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-3">
            <span className="text-white">PROFESSIONAL</span>{' '}
            <span className="gradient-text">JOURNEY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono text-sm">
            {'// '} Real-world experience building production systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.15 }}
              className={`relative mb-8 md:mb-12 ${idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'}`}
            >
              {/* Dot */}
              <div className={`absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} -translate-x-1/2 ring-4 ring-cyber-darker z-10`}>
                <div className="absolute inset-0 rounded-full animate-ping opacity-50"
                     style={{background: exp.color === 'cyan' ? '#00d4ff' : '#b300ff'}}></div>
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="glass-dark p-6 rounded-2xl border border-white/10 backdrop-blur-xl relative overflow-hidden hover:border-neon-cyan/40 transition-all group">
                  {/* Decorative gradient */}
                  <div className={`absolute -top-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} w-40 h-40 rounded-full bg-gradient-to-br ${exp.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}></div>

                  <div className="relative z-10">
                    {/* Top row */}
                    <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center font-orbitron font-black text-white text-sm shadow-lg flex-shrink-0`}>
                        {exp.logo}
                      </div>
                      <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                        <p className={`text-[10px] font-mono tracking-widest ${exp.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'}`}>
                          {exp.period}
                        </p>
                        <h3 className="font-orbitron font-bold text-base text-white mt-1">{exp.role}</h3>
                      </div>
                    </div>

                    <div className={`text-left ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="font-orbitron text-sm text-gray-300 mb-1">{exp.company}</p>
                      <p className="text-[10px] font-mono text-gray-500 mb-4">
                        {exp.location} • {exp.type}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className={`text-xs text-gray-400 leading-relaxed flex gap-2 ${idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            <span className={`${exp.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'} flex-shrink-0`}>▸</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-1.5 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill) => (
                          <span key={skill} className={`px-2 py-0.5 rounded-md bg-cyber-darker text-[10px] font-mono ${exp.color === 'cyan' ? 'text-neon-cyan border-neon-cyan/20' : 'text-neon-purple border-neon-purple/20'} border`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="relative md:pl-1/2"
          >
            <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 -translate-x-1/2 ring-4 ring-cyber-darker"></div>

            <div className="ml-16 md:ml-0 md:ml-12">
              <div className="glass-dark p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                      🎓
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-yellow-400">2024 — 2028</p>
                      <h3 className="font-orbitron font-bold text-base text-white mt-1">B.Tech — Computer Science</h3>
                    </div>
                  </div>

                  <p className="font-orbitron text-sm text-gray-300 mb-1">B.S. Abdur Rahman Crescent Institute of Science & Technology</p>
                  <p className="text-[10px] font-mono text-gray-500 mb-4">
                    Kanchipuram, Tamil Nadu • Pursuing Undergraduate
                  </p>

                  <p className="text-xs text-gray-400">
                    Specializing in AI, full-stack development, and building practical engineering skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
