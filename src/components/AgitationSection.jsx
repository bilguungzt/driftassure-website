import { motion } from "framer-motion";
import {
  Warning,
  CurrencyDollar,
  Robot,
} from "@phosphor-icons/react";

const risks = [
  {
    id: 1,
    icon: Warning,
    title: 'The Silent Update Crisis',
    subtitle: 'The "June 13" Problem',
    color: "red",
    points: [
      {
        label: "The Reality",
        text: "LLM providers update models continuously for safety and cost—without warning or changelogs.",
      },
      {
        label: "The Impact",
        text: "On June 13, 2024, GPT-4-Turbo's verbosity silently spiked 40%, shattering JSON schemas and agent logic.",
        highlight: true,
      },
      {
        label: "The Risk",
        text: "You have zero SLAs on behavior consistency. When they update, you break.",
      },
    ],
  },
  {
    id: 2,
    icon: CurrencyDollar,
    title: "The Hidden 20% Tax",
    subtitle: "Token Drift",
    color: "amber",
    points: [
      {
        label: "The Reality",
        text: 'Tokenizer version mismatches and input shifts create a silent "inflation" on your API bill.',
      },
      {
        label: "The Impact",
        text: "A 1-2% baseline inefficiency compounds into $200k+ of annual waste for enterprise workloads.",
        highlight: true,
      },
      {
        label: "The Risk",
        text: 'Traditional FinOps tools see "traffic growth." We see the waste hiding in the tokenizer.',
      },
    ],
  },
  {
    id: 3,
    icon: Robot,
    title: "Agent Fragility at Scale",
    subtitle: "Compound Failure",
    color: "purple",
    points: [
      {
        label: "The Reality",
        text: "Autonomous agents are exponentially fragile. A 95% reliable model in a 10-step workflow succeeds only 60% of the time.",
        math: "0.95¹⁰ ≈ 0.60",
      },
      {
        label: "The Impact",
        text: "One malformed tool call crashes the entire chain.",
        highlight: true,
      },
      {
        label: "The Risk",
        text: "Your engineering team spends 15 hours a week debugging JSON errors instead of building features.",
      },
    ],
  },
];

const colorClasses = {
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    icon: "text-red-400",
    badge: "bg-red-500/20 text-red-300",
    highlight: "text-red-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    icon: "text-amber-400",
    badge: "bg-amber-500/20 text-amber-300",
    highlight: "text-amber-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    icon: "text-purple-400",
    badge: "bg-purple-500/20 text-purple-300",
    highlight: "text-purple-400",
  },
};

export default function AgitationSection() {
  return (
    <section className="relative bg-slate-950 py-20 sm:py-28 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Warning size={16} weight="fill" className="text-red-400" />
            <span className="text-xs font-medium tracking-wide text-red-300 uppercase">
              Critical Infrastructure Risk
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            The Era of "Set and Forget" AI is Over.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            On June 13, 2024, a silent model update broke thousands of products overnight.{" "}
            <span className="text-slate-300">It wasn't a bug. It's the new normal.</span>
          </p>
        </motion.div>

        {/* Section Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-2">
            The Three Existential Risks Your Infrastructure Ignores
          </h3>
        </motion.div>

        {/* Risk Cards */}
        <div className="grid gap-8 lg:gap-6">
          {risks.map((risk, index) => {
            const colors = colorClasses[risk.color];
            const Icon = risk.icon;
            
            return (
              <motion.div
                key={risk.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-2xl ${colors.bg} border ${colors.border} p-6 sm:p-8`}
              >
                {/* Risk Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{risk.id}</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Title */}
                  <div className="flex-shrink-0 lg:w-64">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} mb-4`}>
                      <Icon size={24} weight="duotone" className={colors.icon} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{risk.title}</h4>
                    <p className={`text-sm font-medium ${colors.highlight}`}>{risk.subtitle}</p>
                  </div>

                  {/* Points */}
                  <div className="flex-1 grid gap-4 sm:grid-cols-3">
                    {risk.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="space-y-2">
                        <div className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${colors.badge}`}>
                          {point.label}
                        </div>
                        <p className={`text-sm leading-relaxed ${point.highlight ? 'text-white font-medium' : 'text-slate-400'}`}>
                          {point.text}
                        </p>
                        {point.math && (
                          <code className="inline-block mt-1 px-2 py-1 rounded bg-slate-800 text-purple-300 text-xs font-mono">
                            {point.math}
                          </code>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
            </div>
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">Right now,</span> your LLM stack is one silent update away from breaking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
