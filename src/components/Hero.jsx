
import {
  ArrowDown,
  Download,
  ExternalLink,
  TrendingUp,
  Database,
  BarChart2,
  Code2,
  Table2,
} from 'lucide-react';

import { personalInfo, heroStats } from '../data/portfolioData';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const revenueData = [
  { m: 'Jan', v: 42 },
  { m: 'Feb', v: 55 },
  { m: 'Mar', v: 48 },
  { m: 'Apr', v: 71 },
  { m: 'May', v: 63 },
  { m: 'Jun', v: 88 },
  { m: 'Jul', v: 76 },
  { m: 'Aug', v: 95 },
  { m: 'Sep', v: 82 },
  { m: 'Oct', v: 110 },
  { m: 'Nov', v: 98 },
  { m: 'Dec', v: 125 },
];

const skillBadges = [
  {
    label: 'SQL',
    icon: Database,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    label: 'Power BI',
    icon: BarChart2,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10 border-yellow-400/20',
  },
  {
    label: 'Excel',
    icon: Table2,
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
  {
    label: 'Python',
    icon: Code2,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
  {
    label: 'MySQL',
    icon: Database,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
  },
];

// Floating animated particles
function Particle({ style }) {
  return (
    <div
      className="particle"
      style={{
        width: style.size,
        height: style.size,
        background: style.color,
        left: style.x,
        top: style.y,
        animationDuration: style.duration,
        animationDelay: style.delay,
        opacity: 0.4,
      }}
    />
  );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  size: `${Math.random() * 4 + 2}px`,
  color:
    i % 2 === 0
      ? 'rgba(6,182,212,0.6)'
      : 'rgba(59,130,246,0.6)',
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  duration: `${Math.random() * 10 + 8}s`,
  delay: `${Math.random() * 5}s`,
}));

export default function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl animate-pulse-slow" />

      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />

      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl animate-pulse-slow"
        style={{ animationDelay: '4s' }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-24">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Entry-Level Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Turning Data into{' '}
              <span className="gradient-text">Meaningful</span>
              <br />
              Business Insights
            </h1>

            <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              {personalInfo.heroSubtext}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${badge.bg} ${badge.color}`}
                >
                  <badge.icon size={12} />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                type="button"
                onClick={scrollToProjects}
                className="btn-primary"
              >
                <ExternalLink size={16} />
                View My Projects
              </button>

              {/* FIXED: Correct PDF filename */}
              <a
                href="/Data_Analyst.pdf"
                download="Sibichakkaravarthi_P_Resume.pdf"
                className="btn-outline"
                aria-label="Download Data Analyst resume PDF"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="text-xl font-bold gradient-text-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Data Visualization Card */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Main card */}
              <div className="glass rounded-2xl p-6 glow-cyan">
                {/* Card header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      Revenue Dashboard
                    </p>
                    <p className="text-white font-semibold">
                      Monthly Performance
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20">
                    <TrendingUp
                      size={12}
                      className="text-green-400"
                    />
                    <span className="text-green-400 text-xs font-medium">
                      +24.5%
                    </span>
                  </div>
                </div>

                {/* Area chart */}
                <div className="h-48 -mx-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient
                          id="heroGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#06b6d4"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#06b6d4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <XAxis
                        dataKey="m"
                        tick={{ fill: '#64748b', fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />

                      <YAxis hide />

                      <Tooltip
                        contentStyle={{
                          background: '#0a1628',
                          border: '1px solid rgba(6,182,212,0.3)',
                          borderRadius: 8,
                          fontSize: 12,
                        }}
                        itemStyle={{ color: '#22d3ee' }}
                        labelStyle={{ color: '#94a3b8' }}
                      />

                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke="#06b6d4"
                        strokeWidth={2}
                        fill="url(#heroGrad)"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    {
                      label: 'Total Revenue',
                      value: '$2.4M',
                      up: true,
                    },
                    {
                      label: 'Profit Margin',
                      value: '32.1%',
                      up: true,
                    },
                    {
                      label: 'Orders',
                      value: '1,847',
                      up: false,
                    },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06]"
                    >
                      <p className="text-xs text-slate-500">
                        {kpi.label}
                      </p>
                      <p className="text-white font-bold text-sm mt-1">
                        {kpi.value}
                      </p>
                      <p
                        className={`text-xs mt-0.5 ${
                          kpi.up
                            ? 'text-green-400'
                            : 'text-slate-400'
                        }`}
                      >
                        {kpi.up ? '↑' : '↓'} vs last month
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating mini card 1 */}
              <div className="absolute -top-8 -right-8 glass rounded-xl p-3 border border-cyan-400/20 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <Database
                      size={14}
                      className="text-cyan-400"
                    />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      SQL Queries
                    </p>
                    <p className="text-cyan-400 text-xs">
                      50+ written
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating mini card 2 */}
              <div
                className="absolute -bottom-6 -left-6 glass rounded-xl p-3 border border-blue-400/20 animate-float"
                style={{ animationDelay: '3s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center">
                    <BarChart2
                      size={14}
                      className="text-blue-400"
                    />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      Dashboards
                    </p>
                    <p className="text-blue-400 text-xs">
                      3+ built
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating mini card 3 */}
              <div
                className="absolute top-1/2 -left-12 glass rounded-xl p-3 border border-purple-400/20 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-400/10 flex items-center justify-center">
                    <Code2
                      size={14}
                      className="text-purple-400"
                    />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      Python
                    </p>
                    <p className="text-purple-400 text-xs">
                      Pandas • NumPy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() =>
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
