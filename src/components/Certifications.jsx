import { Award, Cloud, BarChart2, Calendar, Building2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollHooks';

const iconMap = { Award, Cloud, BarChart2 };

const colorMap = {
  blue:   { bg: 'bg-blue-400/10',   border: 'border-blue-400/20',   text: 'text-blue-400',   glow: 'shadow-blue-400/10' },
  orange: { bg: 'bg-orange-400/10', border: 'border-orange-400/20', text: 'text-orange-400', glow: 'shadow-orange-400/10' },
  cyan:   { bg: 'bg-cyan-400/10',   border: 'border-cyan-400/20',   text: 'text-cyan-400',   glow: 'shadow-cyan-400/10' },
};

export default function Certifications() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Industry-recognised certifications validating technical expertise across data analytics, cloud computing, and full-stack development.
          </p>
        </div>

        {/* Cert Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const colors = colorMap[cert.color];
            const Icon = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.title}
                className={`glass glass-hover rounded-2xl p-6 border ${colors.border} shadow-xl ${colors.glow} transition-all duration-700`}
                style={{ transitionDelay: `${i * 150}ms`, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
              >
                {/* Icon + Year */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                    <Icon size={28} className={colors.text} />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    <Calendar size={11} className="text-slate-400" />
                    <span className="text-slate-300 text-xs font-medium">{cert.year}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{cert.title}</h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <Building2 size={12} className="text-slate-500" />
                  <span className={`text-xs font-semibold ${colors.text}`}>{cert.issuer}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>

                {/* Verified placeholder note */}
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <span className="text-xs text-slate-600 italic">
                    ℹ Verification link will be added once certificate credential ID is provided.
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
