import { useState, useEffect } from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Education      from './components/Education';
import Certifications from './components/Certifications';
import Resume         from './components/Resume';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

export default function App() {
  // Default to dark mode (matches the portfolio aesthetic)
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.style.background = '#040d21';
    } else {
      root.classList.remove('dark');
      document.body.style.background = '#f8fafc';
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#040d21] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
