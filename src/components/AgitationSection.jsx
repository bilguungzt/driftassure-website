import { motion } from "framer-motion";
import { Warning, CurrencyDollar, Robot } from "@phosphor-icons/react";

const risks = [
  {
    id: 1,
    icon: Warning,
    title: "Silent Model Updates",
    stat: "June 13, 2024",
    statLabel: "GPT-4 broke thousands of apps. No warning.",
    color: "red",
  },
  {
    id: 2,
    icon: CurrencyDollar,
    title: "Hidden Token Tax",
    stat: "20%",
    statLabel: "Wasted spend from tokenizer drift.",
    color: "amber",
  },
  {
    id: 3,
    icon: Robot,
    title: "Agent Fragility",
    stat: "0.95¹⁰ = 60%",
    statLabel: "10-step agents fail 40% of the time.",
    color: "purple",
  },
];

const colorClasses = {
  red: {
    bg: "bg-red-950/80",
    border: "border-red-500/50",
    icon: "text-red-400",
    stat: "text-red-400",
  },
  amber: {
    bg: "bg-amber-950/80",
    border: "border-amber-500/50",
    icon: "text-amber-400",
    stat: "text-amber-400",
  },
  purple: {
    bg: "bg-purple-950/80",
    border: "border-purple-500/50",
    icon: "text-purple-400",
    stat: "text-purple-400",
  },
};

export default function AgitationSection() {
  return (
    <section className="relative bg-slate-950 py-16 sm:py-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <Warning size={16} weight="fill" className="text-red-400" />
            <span className="text-xs font-medium tracking-wide text-red-300 uppercase">
              Infrastructure Risk
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            "Set and Forget" AI is Over.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Silent updates. Broken pipelines. No warning.
          </p>
        </motion.div>

        {/* Compact Risk Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {risks.map((risk, index) => {
            const colors = colorClasses[risk.color];
            const Icon = risk.icon;

            return (
              <motion.div
                key={risk.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl ${colors.bg} border ${colors.border} p-6`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}
                  >
                    <Icon size={20} weight="duotone" className={colors.icon} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {risk.title}
                    </h4>
                    <p className={`text-2xl font-bold ${colors.stat} mb-1`}>
                      {risk.stat}
                    </p>
                    <p className="text-sm text-slate-300">{risk.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Warning - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">Right now:</span> one
              silent update away from breaking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
