import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Lightning,
  Globe,
  FileLock,
  CheckCircle,
} from "@phosphor-icons/react";

const features = [
  {
    title: "Enterprise-grade Compliance",
    description:
      "Built for highly regulated environments with SOC2 controls, encryption in transit + at rest, and private VPC deployments.",
    icon: ShieldCheck,
    tag: "Compliance",
    stats: [
      { label: "SOC 2", sublabel: "Type II Ready", status: "certified" },
      { label: "Redaction", sublabel: "PII/PHI Safety", status: "active" },
    ],
  },
  {
    title: "Zero Data Retention",
    description:
      "We do not train on your data. Logs are optional, encrypted, and can be set to zero-retention for complete privacy.",
    icon: Lock,
    tag: "Security",
    highlight: { value: "0 Days", label: "Retention", icon: FileLock },
  },
  {
    title: "<1ms Circuit Breaker + Async Analysis",
    description:
      "Tier 1: Instantly catches crashes, empty responses, and JSON failures in <1ms. Tier 2: Deep semantic analysis checks vocabulary drift asynchronously without slowing user requests.",
    icon: Lightning,
    tag: "Performance",
    metrics: [
      { label: "Circuit Breaker", value: "<1ms" },
      { label: "Semantic Scan", value: "Async" },
    ],
  },
  {
    title: "Multi-Cloud Infrastructure",
    description:
      "Deploy close to your workloads on AWS, Azure, or GCP. Automatic provider failover respects data residency rules.",
    icon: Globe,
    tag: "Infrastructure",
    badges: [
      { label: "12 Regions", sublabel: "Global Edge", pulse: true },
      { label: "99.9% SLA", sublabel: "Auto-failover" },
    ],
  },
];

export default function TechnicalFeatures() {
  return (
    <section id="infrastructure" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <ShieldCheck size={16} weight="fill" className="text-slate-400" />
            <span className="text-xs font-medium tracking-wide text-slate-400 uppercase">
              Infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Enterprise-grade by Default
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Cognitude is built for teams who ship to highly regulated
            environments. Keep your data safe while optimizing cost.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-colors"
              >
                {/* Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs uppercase tracking-wider text-slate-400 font-medium">
                    <Icon size={14} className="text-indigo-400" />
                    {feature.tag}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stats variant */}
                {feature.stats && (
                  <div className="grid grid-cols-2 gap-3">
                    {feature.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-slate-800/50 border border-slate-700 p-3 text-center"
                      >
                        <p
                          className={`text-[10px] font-bold tracking-wider uppercase mb-1 ${
                            stat.status === "certified"
                              ? "text-emerald-400"
                              : "text-indigo-400"
                          }`}
                        >
                          {stat.status === "certified" ? "Certified" : "Active"}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {stat.label}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {stat.sublabel}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlight variant */}
                {feature.highlight && (
                  <div className="rounded-xl bg-slate-800/50 border border-slate-700 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <feature.highlight.icon size={20} weight="fill" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          Data Logging
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Encryption active
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-emerald-400">
                        {feature.highlight.value}
                      </p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                        {feature.highlight.label}
                      </p>
                    </div>
                  </div>
                )}

                {/* Metrics variant */}
                {feature.metrics && (
                  <div className="grid grid-cols-2 gap-3">
                    {feature.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl bg-slate-800/50 border border-slate-700 p-3"
                      >
                        <p className="text-[10px] text-slate-500 mb-1">
                          {metric.label}
                        </p>
                        <p className="text-xl font-bold text-emerald-400">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Badges variant */}
                {feature.badges && (
                  <div className="flex items-center gap-3">
                    {feature.badges.map((badge) => (
                      <div
                        key={badge.label}
                        className="rounded-xl bg-slate-800/50 border border-slate-700 px-4 py-3 flex items-center gap-2"
                      >
                        {badge.pulse && (
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-white">
                            {badge.label}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {badge.sublabel}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
