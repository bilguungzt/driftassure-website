import { motion } from "framer-motion";
import {
  Warning,
  MagnifyingGlass,
  Flask,
  ArrowsClockwise,
  CheckCircle,
  Lightning,
  ShieldCheck,
  CurrencyDollar,
  ChartLineUp,
  Heart,
} from "@phosphor-icons/react";

const timelineEvents = [
  {
    time: "14:05:00",
    label: "ATTACK",
    event: "Model update injected. Verbosity +40%. Logic degraded.",
    status: "danger",
    icon: Warning,
  },
  {
    time: "14:05:01",
    label: "DETECT",
    event: "Fast Signal: length_drift, structure_drift. Emergency scan.",
    latency: "1.0s",
    status: "warning",
    icon: MagnifyingGlass,
  },
  {
    time: "14:05:12",
    label: "TEST",
    event: "Claude 3.5 Sonnet matches baseline.",
    status: "warning",
    icon: Flask,
    logicScore: "96.8%",
  },
  {
    time: "14:05:15",
    label: "FAILOVER",
    event: "Traffic rerouted: gpt-4-turbo → claude-3-5-sonnet",
    mitigationTime: "15s",
    userImpact: "Zero",
    status: "success",
    icon: ArrowsClockwise,
    isMoneyShot: true,
  },
];

const roiStats = [
  {
    value: "10K+",
    label: "Crashes Prevented",
    icon: ShieldCheck,
    color: "emerald",
  },
  {
    value: "$17K",
    label: "Monthly Savings",
    icon: CurrencyDollar,
    color: "indigo",
  },
  {
    value: "593%",
    label: "ROI",
    icon: ChartLineUp,
    color: "amber",
  },
  {
    value: "100%",
    label: "Peace of Mind",
    icon: Heart,
    color: "rose",
  },
];

const statusClasses = {
  danger: {
    bg: "bg-red-500/10",
    border: "border-red-500/40",
    dot: "bg-red-500",
    text: "text-red-400",
    icon: "text-red-400",
    line: "from-red-500",
  },
  warning: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/40",
    dot: "bg-amber-500",
    text: "text-amber-400",
    icon: "text-amber-400",
    line: "from-amber-500",
  },
  success: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/40",
    dot: "bg-emerald-500",
    text: "text-emerald-400",
    icon: "text-emerald-400",
    line: "from-emerald-500",
  },
};

const colorClasses = {
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  rose: "text-rose-400 bg-rose-500/10 border-rose-500/30",
};

export default function FireDrillProof({ onBookDemo = () => {} }) {
  return (
    <section
      className="relative bg-slate-950 py-16 sm:py-20 overflow-hidden"
      id="proof"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.06),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Lightning size={16} weight="fill" className="text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-emerald-300 uppercase">
              Live Fire Drill Log
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
            Don't Trust Promises. Trust the Log.
          </h2>
        </motion.div>

        {/* Timeline - LARGE TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700 overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-900 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-4 text-sm text-slate-400 font-mono">
                cognitude-fire-drill.log
              </span>
            </div>

            {/* Timeline content - COMPACT LOG FORMAT */}
            <div className="p-6 sm:p-8 font-mono text-sm">
              <div className="space-y-4">
                {timelineEvents.map((event, index) => {
                  const colors = statusClasses[event.status];
                  const Icon = event.icon;

                  return (
                    <motion.div
                      key={event.time}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-start gap-4 p-4 rounded-lg ${
                        event.isMoneyShot
                          ? "bg-emerald-500/10 border border-emerald-500/40 ring-1 ring-emerald-500/30"
                          : colors.bg + " border " + colors.border
                      }`}
                    >
                      {/* Timestamp */}
                      <code
                        className={`flex-shrink-0 text-lg font-bold ${
                          event.isMoneyShot ? "text-emerald-400" : colors.text
                        }`}
                      >
                        {event.time}
                      </code>

                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          event.isMoneyShot ? "bg-emerald-500/20" : colors.bg
                        }`}
                      >
                        <Icon
                          size={18}
                          weight="fill"
                          className={
                            event.isMoneyShot ? "text-emerald-400" : colors.icon
                          }
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider ${
                              event.isMoneyShot
                                ? "text-emerald-400"
                                : colors.text
                            }`}
                          >
                            [{event.label}]
                          </span>
                          {event.latency && (
                            <span className="text-xs text-amber-400 font-bold">
                              {event.latency}
                            </span>
                          )}
                          {event.logicScore && (
                            <span className="text-xs text-emerald-400 font-bold">
                              Match: {event.logicScore}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-sm ${
                            event.isMoneyShot
                              ? "text-emerald-100"
                              : "text-slate-300"
                          }`}
                        >
                          {event.event}
                        </p>
                        {event.isMoneyShot && (
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-emerald-300 font-bold">
                              ✓ Time: {event.mitigationTime}
                            </span>
                            <span className="text-emerald-300 font-bold">
                              ✓ User Impact: {event.userImpact}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Stats - Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {roiStats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorClasses[stat.color];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="relative rounded-xl bg-slate-900/80 border border-slate-700 p-4 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${colors} border mb-2`}
                >
                  <Icon size={16} weight="duotone" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={onBookDemo}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-8 py-3 shadow-lg shadow-emerald-500/25 transition-all"
          >
            <Lightning size={18} weight="fill" />
            Book Your Fire Drill
          </button>
        </motion.div>
      </div>
    </section>
  );
}
