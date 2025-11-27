import { motion } from "framer-motion";
import {
  CheckCircle,
  Buildings,
  Cpu,
  ChartLineUp,
} from "@phosphor-icons/react";

const logos = [
  { name: "YC Company", placeholder: true },
  { name: "Enterprise Client", placeholder: true },
  { name: "AI Startup", placeholder: true },
  { name: "FinTech Co", placeholder: true },
];

const stats = [
  {
    value: "$2.4M",
    label: "Saved for Customers",
    sublabel: "in LLM costs to date",
  },
  {
    value: "47%",
    label: "Average Cost Reduction",
    sublabel: "within first 30 days",
  },
  {
    value: "99.97%",
    label: "Uptime",
    sublabel: "across all production deployments",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-20 sm:py-24 bg-slate-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-8 sm:gap-12 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
            Trusted by AI-first teams
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="h-8 w-24 rounded bg-slate-800/50 border border-slate-700/50 flex items-center justify-center"
              >
                <span className="text-xs text-slate-500 font-medium">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
