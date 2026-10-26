import { Mail, Link2, GitBranch, BarChart3, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home',           id: 'hero' },
  { label: 'About',          id: 'about' },
  { label: 'Skills',         id: 'skills' },
  { label: 'Projects',       id: 'projects' },
  { label: 'Education',      id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact',        id: 'contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#040d21]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <BarChart3 size={18} className="text-white" />
              </div>
              <span className="font-bold text-white">
                Sibi<span className="gradient-text-cyan">Data</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Aspiring Data Analyst passionate about turning raw data into meaningful business insights.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Mail,      href: `mailto:${personalInfo.email}`,   label: 'Email' },
                { icon: Link2,     href: personalInfo.linkedin,             label: 'LinkedIn' },
                { icon: GitBranch, href: personalInfo.github,               label: 'GitHub' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <nav className="space-y-2" aria-label="Footer navigation">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-slate-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm text-slate-500">
              <a href={`mailto:${personalInfo.email}`} className="block hover:text-cyan-400 transition-colors break-all">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="block hover:text-cyan-400 transition-colors">
                {personalInfo.phone}
              </a>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © {year} <span className="text-slate-500 font-medium">Sibichakkaravarthi P</span> | Data Analyst Portfolio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-xs transition-colors group"
          >
            Back to top
            <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-all">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
