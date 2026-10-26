
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  GitBranch,
  ExternalLink,
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollHooks';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: 'blue',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: 'green',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/[your-profile]',
    href: personalInfo.linkedin,
    color: 'blue',
    placeholder: true,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/[your-username]',
    href: personalInfo.github,
    color: 'purple',
    placeholder: true,
  },
];

const colorMap = {
  cyan: {
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    text: 'text-cyan-400',
  },
  blue: {
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    text: 'text-blue-400',
  },
  green: {
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    text: 'text-green-400',
  },
  purple: {
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    text: 'text-purple-400',
  },
};

export default function Contact() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto">
            Open to entry-level Data Analyst opportunities,
            collaborations, or simply a conversation about data.
            Reach out anytime.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {contactItems.map((item) => {
              const colors = colorMap[item.color];

              const content = (
                <div
                  className={`glass glass-hover rounded-xl p-4 border ${colors.border} flex items-center gap-3`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon
                      size={18}
                      className={colors.text}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">
                      {item.label}
                    </p>

                    <p
                      className={`text-sm font-medium truncate ${
                        item.placeholder
                          ? 'text-slate-500 italic'
                          : 'text-white'
                      }`}
                    >
                      {item.value}
                    </p>

                    {item.placeholder && (
                      <p className="text-[10px] text-slate-600">
                        Update URL in portfolioData.js
                      </p>
                    )}
                  </div>

                  {item.href && (
                    <ExternalLink
                      size={12}
                      className="text-slate-600 ml-auto flex-shrink-0"
                    />
                  )}
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.placeholder ? '_blank' : undefined
                  }
                  rel={
                    item.placeholder
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
