import { motion } from "framer-motion";
import {
  Fingerprint,
  Wrench,
  ArrowsClockwise,
  Lightning,
  Timer,
  Code,
  CheckCircle,
} from "@phosphor-icons/react";

const steps = [
  {
    id: 1,
    icon: Fingerprint,
    title: "Baseline Locking",
    subtitle: "The Insurance Policy",
    color: "indigo",
    howItWorks:
      "We don't just pass traffic. We create \"Stateful Fingerprints\" of your application's ideal behavior—analyzing semantic texture, JSON structure, and response patterns.",
    benefit:
      'You define what "working" looks like. We lock that baseline. If a provider\'s update deviates from your fingerprint, our hybrid detection system triggers an alert in 1-15 seconds.',
  },
  {
    id: 2,
    icon: Wrench,
    title: "Semantic Repair",
    subtitle: "The Agent Savior",
    color: "emerald",
    howItWorks:
      "When a model hallucinates a malformed tool call or broken JSON, we intercept the error before it reaches your app.",
    mechanics:
      "Our 3-tier repair engine (Algorithmic → Groq LPU → Gemini Flash) reconstructs the valid payload in under 200ms.",
    result: "A 99% repair success rate without a single slow retry loop.",
  },
  {
    id: 3,
    icon: ArrowsClockwise,
    title: "Auto-Failover",
    subtitle: "The Drift Killer",
    color: "amber",
    howItWorks:
      "If a provider suffers a critical outage or silent degradation (like the June 13 verbosity spike), we execute an emergency cross-provider failover.",
    mechanics:
      "We instantly reroute traffic to your pre-validated fallback model (e.g., GPT-4 → Claude 3.5 Sonnet).",
    result:
      'Your users see a working product. You see a Slack notification saying, "We fixed it."',
  },
];

const colorClasses = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    icon: "text-indigo-400",
    badge: "bg-indigo-500/20 text-indigo-300",
    gradient: "from-indigo-500/20 to-transparent",
    number: "bg-indigo-500 text-white",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-300",
    gradient: "from-emerald-500/20 to-transparent",
    number: "bg-emerald-500 text-white",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    icon: "text-amber-400",
    badge: "bg-amber-500/20 text-amber-300",
    gradient: "from-amber-500/20 to-transparent",
    number: "bg-amber-500 text-white",
  },
};

export default function DefenseArchitecture() {
  return (
    <section
      className="relative bg-slate-950 py-20 sm:py-28 overflow-hidden"
      id="how-it-works"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      {/* Connecting line for desktop */}
      <div className="hidden lg:block absolute left-1/2 top-64 bottom-48 w-px bg-gradient-to-b from-indigo-500/50 via-emerald-500/50 to-amber-500/50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Lightning size={16} weight="fill" className="text-indigo-400" />
            <span className="text-xs font-medium tracking-wide text-indigo-300 uppercase">
              The Intelligent Stability Layer
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Active Protection. Zero Latency Impact.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Cognitude sits between your application and your LLM providers.{" "}
            <span className="text-slate-300">
              We don't just log errors; we intercept and fix them in real-time.
            </span>
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-200">
            The 3-Step Defense Architecture
          </h3>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color];
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative lg:w-[calc(50%-2rem)] ${
                  isEven ? "lg:ml-auto" : ""
                }`}
              >
                {/* Step Number - Desktop only, on the connecting line */}
                <div
                  className={`hidden lg:flex absolute ${
                    isEven ? "-left-12" : "-right-12"
                  } top-8 w-8 h-8 rounded-full ${
                    colors.number
                  } items-center justify-center font-bold text-sm shadow-lg z-10`}
                >
                  {step.id}
                </div>

                {/* Card */}
                <div
                  className={`relative rounded-2xl ${colors.bg} border ${colors.border} p-6 sm:p-8 overflow-hidden`}
                >
                  {/* Gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`}
                  />

                  <div className="relative">
                    {/* Mobile step number */}
                    <div
                      className={`lg:hidden absolute -top-2 -left-2 w-7 h-7 rounded-full ${colors.number} flex items-center justify-center font-bold text-xs shadow-lg`}
                    >
                      {step.id}
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6 ml-6 lg:ml-0">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}
                      >
                        <Icon
                          size={24}
                          weight="duotone"
                          className={colors.icon}
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {step.title}
                        </h4>
                        <p className={`text-sm font-medium ${colors.icon}`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${colors.badge} mb-2`}
                        >
                          How it works
                        </span>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {step.howItWorks}
                        </p>
                      </div>

                      {step.benefit && (
                        <div>
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${colors.badge} mb-2`}
                          >
                            The Benefit
                          </span>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {step.benefit}
                          </p>
                        </div>
                      )}

                      {step.mechanics && (
                        <div>
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${colors.badge} mb-2`}
                          >
                            The Mechanics
                          </span>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {step.mechanics}
                          </p>
                        </div>
                      )}

                      {step.result && (
                        <div className="flex items-start gap-2 pt-2">
                          <CheckCircle
                            size={18}
                            weight="fill"
                            className={`flex-shrink-0 mt-0.5 ${colors.icon}`}
                          />
                          <p className="text-white font-medium text-sm">
                            {step.result}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 sm:p-10 overflow-hidden">
            {/* Decorative code lines */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-400 leading-relaxed">
                <div>client = OpenAI(</div>
                <div className="pl-4 text-emerald-400">
                  base_url="https://api.cognitude.io"
                </div>
                <div>)</div>
              </div>
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Code size={20} className="text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Zero Code Rewrites.
                  </h4>
                </div>
                <p className="text-slate-300 mb-6">
                  Cognitude works as a drop-in middleware. Point your{" "}
                  <code className="px-1.5 py-0.5 rounded bg-slate-700 text-emerald-300 text-sm font-mono">
                    base_url
                  </code>{" "}
                  to us, and we handle the rest using smart feature detection.
                </p>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                      <Timer size={16} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">
                        Setup Time
                      </p>
                      <p className="text-lg font-bold text-white">
                        &lt; 5 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <Lightning size={16} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">
                        Latency Impact
                      </p>
                      <p className="text-lg font-bold text-white">&lt; 0.1ms</p>
                      <p className="text-xs text-slate-500">
                        Redis-backed caching
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code snippet */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="rounded-xl bg-slate-950 border border-slate-700 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    <span className="ml-2 text-xs text-slate-500">python</span>
                  </div>
                  <pre className="p-4 text-sm font-mono overflow-x-auto">
                    <code>
                      <span className="text-slate-500"># Before</span>
                      {"\n"}
                      <span className="text-slate-400">client = OpenAI()</span>
                      {"\n\n"}
                      <span className="text-slate-500"># After</span>
                      {"\n"}
                      <span className="text-slate-400">client = OpenAI(</span>
                      {"\n"}
                      <span className="text-emerald-400"> base_url=</span>
                      <span className="text-amber-300">
                        "https://api.cognitude.io"
                      </span>
                      {"\n"}
                      <span className="text-slate-400">)</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
