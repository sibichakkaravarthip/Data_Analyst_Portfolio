import {
  BarChart3, Database, PieChart, Table2, Code2, Layers,
  CheckCircle2,
} from 'lucide-react';
import { skills, additionalTech } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollHooks';

const iconMap = {
  BarChart3, Database, PieChart, Table2, Code2, Layers,
};

const colorMap = {
  cyan:   { bg: 'bg-cyan-400/10',   border: 'border-cyan-400/20',   text: 'text-cyan-400',   dot: 'bg-cyan-400',   badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' },
  blue:   { bg: 'bg-blue-400/10',   border: 'border-blue-400/20',   text: 'text-blue-400',   dot: 'bg-blue-400',   badge: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
  yellow: { bg: 'bg-yellow-400/10', border: 'border-yellow-400/20', text: 'text-yellow-400', dot: 'bg-yellow-400', badge: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' },
  green:  { bg: 'bg-green-400/10',  border: 'border-green-400/20',  text: 'text-green-400',  dot: 'bg-green-400',  badge: 'bg-green-400/10 text-green-400 border-green-400/20' },
  purple: { bg: 'bg-purple-400/10', border: 'border-purple-400/20', text: 'text-purple-400', dot: 'bg-purple-400', badge: 'bg-purple-400/10 text-purple-400 border-purple-400/20' },
};

function SkillCard({ skill, index, inView }) {
  const colors = colorMap[skill.color];
  const Icon = iconMap[skill.icon] || BarChart3;

  return (
    <div
      className={`glass glass-hover rounded-2xl p-6 transition-all duration-700 border ${colors.border}`}
      style={{ transitionDelay: `${index * 100}ms`, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center`}>
            <Icon size={22} className={colors.text} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base">{skill.label}</h3>
            <span className={`inline-block px-2 py-0.5 text-[10px] font-medium rounded-full border mt-1 ${colors.badge}`}>
              {skill.level}
            </span>
          </div>
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-2">
        {skill.items.map(item => (
          <div key={item} className="flex items-center gap-2.5 py-1">
            <CheckCircle2 size={13} className={`${colors.text} flex-shrink-0`} />
            <span className="text-slate-300 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Analytical Toolkit</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Proficient in the core tools used by modern Data Analysts — from data cleaning in Excel to interactive Power BI dashboards and SQL-based business analysis.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {Object.values(skills).map((skill, i) => (
            <SkillCard key={skill.label} skill={skill} index={i} inView={inView} />
          ))}
        </div>

        {/* Additional Technologies */}
        <div
          className={`glass rounded-2xl p-6 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-slate-400/10 flex items-center justify-center">
              <Layers size={18} className="text-slate-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Additional Technologies</h3>
              <p className="text-slate-500 text-xs">Secondary skills from Computer Science background</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {additionalTech.map(tech => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs font-medium hover:border-white/20 hover:text-slate-300 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
