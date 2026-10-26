
import { Download, Mail, Briefcase, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useScrollHooks';

export default function Resume() {
  const [ref, inView] = useInView(0.15);

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="resume"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`relative glass rounded-3xl p-10 sm:p-16 text-center overflow-hidden border border-cyan-400/15 transition-all duration-700 ${
            inView
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5 pointer-events-none" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-6">
              <Briefcase
                size={32}
                className="text-cyan-400"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Interested in{' '}
              <span className="gradient-text">
                Working Together?
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              I'm looking for{' '}
              <strong className="text-white">
                entry-level Data Analyst opportunities
              </strong>{' '}
              where I can apply my analytical skills, technical
              knowledge, and problem-solving abilities to real
              business challenges.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Download Resume PDF */}
              <a
                href="/Data_Analyst.pdf"
                download="Sibichakkaravarthi_P_Resume.pdf"
                className="btn-primary group inline-flex items-center gap-2"
                aria-label="Download resume PDF"
              >
                <Download
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                <span>Download Resume</span>
                <span className="text-xs opacity-75">
                  (PDF)
                </span>
              </a>

              {/* Contact Button */}
              <button
                type="button"
                onClick={handleContact}
                className="btn-outline group inline-flex items-center gap-2"
              >
                <Mail size={18} />
                <span>Contact Me</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Download Information */}
            <p className="text-slate-500 text-xs mt-6">
              Download my resume in PDF format to learn more
              about my skills, projects, and qualifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
