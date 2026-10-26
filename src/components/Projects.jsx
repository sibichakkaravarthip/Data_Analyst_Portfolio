import { useState } from 'react';
import {
  ExternalLink, GitBranch, ChevronDown, ChevronUp,
  Briefcase, Target, Database, Wrench, Search, Code2,
  BarChart2, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollHooks';

const techColors = {
  Excel:    'bg-green-400/10 text-green-400 border-green-400/20',
  SQL:      'bg-blue-400/10 text-blue-400 border-blue-400/20',
  'Power BI': 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
  MySQL:    'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  'Sakila DB': 'bg-purple-400/10 text-purple-400 border-purple-400/20',
};
const defaultTech = 'bg-slate-400/10 text-slate-400 border-slate-400/20';

function TechBadge({ tech }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-[11px] font-medium ${techColors[tech] || defaultTech}`}>
      {tech}
    </span>
  );
}

function ProjectDetail({ project }) {
  const d = project.details;
  return (
    <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-6 animate-fade-in">

      {/* Overview Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { icon: Briefcase, label: 'Business Problem', content: d.problem, color: 'cyan' },
          { icon: Target,    label: 'Dataset Overview', content: d.dataset,  color: 'blue' },
        ].map(item => (
          <div key={item.label} className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <item.icon size={14} className={`text-${item.color}-400`} />
              <span className={`text-${item.color}-400 text-xs font-semibold uppercase tracking-wider`}>{item.label}</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Objectives */}
      <div className="glass rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Target size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Project Objectives</span>
        </div>
        <div className="space-y-2">
          {d.objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <ArrowRight size={12} className="text-cyan-400 mt-1 flex-shrink-0" />
              <p className="text-slate-300 text-sm">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Workflow */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Wrench size={14} className="text-green-400" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Tools Used</span>
          </div>
          <div className="space-y-1.5">
            {d.tools.map((tool, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-green-400" />
                <span className="text-slate-300 text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Search size={14} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">Workflow Steps</span>
          </div>
          <div className="space-y-1.5">
            {d.workflow.map((step, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-purple-400 text-xs font-bold mt-0.5 flex-shrink-0">{i + 1}.</span>
                <span className="text-slate-300 text-xs leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SQL Query */}
      {d.sqlExample && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Code2 size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">SQL Example</span>
          </div>
          <pre className="code-block overflow-x-auto text-xs leading-relaxed whitespace-pre-wrap">
            <code>{d.sqlExample}</code>
          </pre>
        </div>
      )}

      {/* DAX Example */}
      {d.daxExample && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 size={14} className="text-yellow-400" />
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">DAX Measures (Power BI)</span>
          </div>
          <pre className="code-block overflow-x-auto text-xs leading-relaxed whitespace-pre-wrap">
            <code>{d.daxExample}</code>
          </pre>
        </div>
      )}

      {/* Key Findings */}
      <div className="glass rounded-xl p-4 border border-cyan-400/10">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Key Findings & Insights</span>
        </div>
        <div className="space-y-2">
          {d.findings.map((finding, i) => (
            <div key={i} className="flex items-start gap-2.5 py-1 border-b border-white/[0.04] last:border-0">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
              <p className="text-slate-300 text-sm">{finding}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note on data */}
      <div className="rounded-xl p-3 bg-amber-400/5 border border-amber-400/15 flex items-start gap-2">
        <span className="text-amber-400 text-xs">⚠</span>
        <p className="text-amber-400/80 text-xs">
          <strong>Disclaimer:</strong> Findings above are based on illustrative/sample datasets used for project practice. They are not real business results.
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`project-card glass rounded-2xl overflow-hidden border border-white/[0.07] hover:border-cyan-400/20 transition-all duration-700`}
      style={{ transitionDelay: `${index * 150}ms`, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)' }}
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d21] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs text-slate-300 font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => <TechBadge key={tech} tech={tech} />)}
        </div>

        <h3 className="text-white font-bold text-lg leading-tight mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

        {/* Key highlights */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.highlights.map(h => (
            <div key={h} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
              <span className="text-slate-400 text-xs">{h}</span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-all"
          >
            {expanded ? <><ChevronUp size={15} /> Hide Details</> : <><ChevronDown size={15} /> View Details</>}
          </button>
          <a
            href={project.details.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <GitBranch size={15} /> Code
          </a>
        </div>

        {/* Expandable Detail */}
        {expanded && <ProjectDetail project={project} />}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Data Analytics <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Three end-to-end analytics projects demonstrating SQL querying, data cleaning, Power BI dashboard design, and business insight generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
