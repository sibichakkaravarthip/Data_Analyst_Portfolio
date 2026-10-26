
import { useState } from 'react';
import { Menu, X, BarChart3, Sun, Moon } from 'lucide-react';
import {
  useScrollPosition,
  useActiveSection,
} from '../hooks/useScrollHooks';

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(sectionIds);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' });

    setMenuOpen(false);
  };

  const isScrolled = scrollY > 30;

  // Correct PDF path: public/Data_Analyst.pdf
  const resumePath = '/Data_Analyst.pdf';
  const resumeFilename = 'Sibichakkaravarthi_P_Resume.pdf';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040d21]/95 backdrop-blur-lg border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <BarChart3 size={18} className="text-white" />
            </div>

            <span className="font-bold text-white text-sm lg:text-base hidden sm:block">
              Sibi<span className="gradient-text-cyan">Data</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Dark / Light Theme Toggle */}
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
              </button>

            {/* Desktop Resume Download */}
            <a
              href={resumePath}
              download={resumeFilename}
              className="hidden sm:flex btn-primary py-2 px-4 text-sm items-center gap-2"
              aria-label="Download resume PDF"
            >
              <DownloadIcon />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#070f2b]/98 backdrop-blur-xl border-t border-white/[0.06] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Resume Download */}
          <a
            href={resumePath}
            download={resumeFilename}
            className="flex btn-primary mt-3 justify-center items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function DownloadIcon() {
  return <BarChart3 size={16} aria-hidden="true" />;
}
