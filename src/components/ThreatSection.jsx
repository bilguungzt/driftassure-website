import { WarningCircle, CalendarBlank, TrendUp, XCircle } from "@phosphor-icons/react";

function ThreatSection({ onBookDemo = () => {} }) {
  return (
    <section className="relative py-20 sm:py-28 bg-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 mb-6">
            <CalendarBlank className="w-4 h-4 text-red-400" weight="fill" />
            <span className="text-xs font-semibold tracking-wider uppercase text-red-400">
              June 13, 2024
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            The Day Thousands of AI Products{" "}
            <span className="text-red-400">Broke Silently</span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            A silent model update spiked verbosity by 40% and broke JSON outputs across thousands of production applications. 
            No warning. No changelog. No way to roll back.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-6 hover:border-red-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
              <TrendUp className="w-6 h-6 text-red-400" weight="bold" />
            </div>
            <p className="text-3xl font-bold text-white mb-2">+40%</p>
            <p className="text-sm text-slate-400">Token verbosity increase overnight</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-6 hover:border-red-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
              <XCircle className="w-6 h-6 text-red-400" weight="bold" />
            </div>
            <p className="text-3xl font-bold text-white mb-2">72hrs</p>
            <p className="text-sm text-slate-400">Average time to detect the issue</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-6 hover:border-red-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
              <WarningCircle className="w-6 h-6 text-red-400" weight="bold" />
            </div>
            <p className="text-3xl font-bold text-white mb-2">$500K+</p>
            <p className="text-sm text-slate-400">Lost revenue per affected company</p>
          </div>
        </div>

        {/* Quote Box */}
        <div className="relative bg-gradient-to-r from-red-950/40 to-slate-900/40 rounded-2xl border border-red-500/20 p-8 sm:p-10">
          <div className="absolute top-6 left-8 text-6xl text-red-500/20 font-serif">"</div>
          
          <blockquote className="relative z-10 text-xl sm:text-2xl text-white font-medium leading-relaxed mb-6 pl-8">
            We lost $47,000 in a weekend because our customer support agent started returning malformed JSON. 
            No one knew until Monday when the on-call engineer noticed the error logs.
          </blockquote>
          
          <div className="pl-8">
            <p className="text-slate-300 font-semibold">— CTO, Series B Fintech</p>
            <p className="text-slate-500 text-sm">After the June 2024 incident</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-400 mb-6">
            <span className="text-white font-semibold">It will happen again.</span> Are you insured?
          </p>
          <button
            onClick={onBookDemo}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 text-white text-base font-semibold px-8 py-4 shadow-lg shadow-red-500/20 hover:bg-red-600 transition-all hover:scale-[1.02]"
          >
            <WarningCircle className="w-5 h-5" weight="bold" />
            Get Protected Before the Next Incident
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThreatSection;
