import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Navigation from './components/Navigation';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="relative w-full min-h-screen bg-cyber-darker text-white overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

      {/* Atmospheric glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
             style={{background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full"
             style={{background: 'radial-gradient(circle, rgba(179,0,255,0.12) 0%, transparent 70%)'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
             style={{background: 'radial-gradient(circle, rgba(255,0,110,0.08) 0%, transparent 70%)'}}></div>
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {activeSection === 'hero' && <Hero />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>
  );
}
