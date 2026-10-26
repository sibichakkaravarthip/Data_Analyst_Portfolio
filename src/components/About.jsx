import { User, Target, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollHooks';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';

const radarData = [
  { skill: 'SQL', value: 78 },
  { skill: 'Power BI', value: 75 },
  { skill: 'Excel', value: 82 },
  { skill: 'Python', value: 55 },
  { skill: 'Data Cleaning', value: 80 },
  { skill: 'EDA', value: 73 },
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The <span className="gradient-text">Analyst</span> Behind the Data
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A Computer Science graduate passionate about turning complex data into clear, actionable business insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                  <User size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Professional Introduction</h3>
              </div>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
                <p>
                  I am a <span className="text-white font-medium">Computer Science graduate</span> with hands-on project experience in data cleaning, SQL querying, dashboard creation, KPI analysis, and business reporting.
                </p>
                <p>
                  I enjoy working with complex datasets to uncover patterns, trends, and insights that help organisations make better, <span className="text-cyan-400">data-driven decisions</span>. My analytical approach combines technical skill with business understanding — translating raw numbers into clear, actionable recommendations.
                </p>
                <p>
                  I am actively seeking <span className="text-white font-medium">entry-level Data Analyst opportunities</span> where I can apply my technical knowledge and problem-solving abilities to real business challenges.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: Mail,    label: 'Email',    value: 'sibichakkaravarthi2004@gmail.com', short: 'Send Email' },
                { icon: Phone,   label: 'Phone',    value: '+91 9345124532' },
                { icon: MapPin,  label: 'Location', value: 'Theni, Tamil Nadu, India' },
              ].map(item => (
                <div key={item.label} className="glass rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-2">
                    <item.icon size={14} className="text-cyan-400" />
                  </div>
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="text-white text-xs font-medium break-all">{item.short || item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Radar chart + Interests */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Radar Chart */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center">
                  <Target size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Skill Overview</h3>
                  <p className="text-slate-500 text-xs">Self-assessed proficiency levels</p>
                </div>
              </div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.06)" />
                    <PolarAngleAxis dataKey="skill" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Interests */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white font-semibold">Areas of Interest</h3>
              </div>
              <div className="space-y-2">
                {personalInfo.interests.map((interest, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.04] last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
