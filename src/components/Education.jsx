import { GraduationCap, MapPin, Calendar, Star, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollHooks';

export default function Education() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none -translate-x-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A strong Computer Science foundation that equipped me with analytical thinking and programming skills.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`glass glass-hover rounded-2xl p-8 border border-cyan-400/15 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-cyan-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-xl">{edu.institution}</h3>
                      <p className="text-cyan-400 font-semibold mt-1">{edu.degree}</p>
                    </div>
                    {/* GPA Badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/20">
                      <Star size={12} className="text-amber-400" />
                      <span className="text-amber-400 font-bold text-sm">{edu.gpa}</span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-500" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-500" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
