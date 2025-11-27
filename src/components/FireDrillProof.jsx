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
    label: "The Attack",
    event:
      'Simulated "Model Update" injected. Response verbosity increased by 40%. Logic degraded.',
    status: "danger",
    statusText: "User Experience At Risk",
    icon: Warning,
  },
  {
    time: "14:05:01",
    label: "The Detection",
    event:
      "Cognitude Fast Signal detects length_drift and structure_drift. Emergency Scan triggered immediately.",
    latency: "1.0s",
    status: "warning",
    icon: MagnifyingGlass,
  },
  {
    time: "14:05:12",
    label: "The Test",
    event:
      "System tests fallback models against your locked fingerprint. Claude 3.5 Sonnet matches baseline with only 3.2% drift (vs 18% current).",
    status: "warning",
    icon: Flask,
  },
  {
    time: "14:05:15",
    label: "The Failover",
    event:
      "AUTO-FAILOVER EXECUTED. Traffic rerouted from gpt-4-turbo → claude-3-5-sonnet.",
    mitigationTime: "15 Seconds",
    userImpact: "Zero. Requests were queued and served successfully.",
    status: "success",
    icon: ArrowsClockwise,
    isMoneyShot: true,
  },
];

const roiStats = [
  {
    value: "10,000+",
    label: "Agent Crashes Prevented",
    sublabel: "via Semantic Repair",
    icon: ShieldCheck,
    color: "emerald",
  },
  {
    value: "$17,333",
    label: "Monthly Waste Recovered",
    sublabel: "per $100k of LLM spend",
    icon: CurrencyDollar,
    color: "indigo",
  },
  {
    value: "593%",
    label: "ROI",
    sublabel: "on Monitoring Infrastructure",
    icon: ChartLineUp,
    color: "amber",
  },
  {
    value: "100%",
    label: "Peace of Mind",
    sublabel: "during the next provider update",
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
      className="relative bg-slate-950 py-20 sm:py-28 overflow-hidden"
      id="proof"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.06),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Lightning size={16} weight="fill" className="text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-emerald-300 uppercase">
              The Evidence
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Don't Trust Promises. Trust the Fire Drill.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            We run Chaos Monkey simulations in production.{" "}
            <span className="text-slate-300">
              Here is the actual log from a simulated OpenAI silent update.
            </span>
          </p>
        </motion.div>

        {/* Timeline - ZOOMED IN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl bg-slate-900/80 border border-slate-700 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-6 py-4 bg-slate-900 border-b border-slate-700">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/70" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-500/70" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/70" />
              <span className="ml-4 text-sm text-slate-400 font-mono">
                cognitude-fire-drill.log — Live Chaos Simulation
              </span>
            </div>

            {/* Timeline content - LARGER */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[110px] sm:left-[130px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-amber-500 to-emerald-500 hidden sm:block" />

                {/* Events */}
                <div className="space-y-8">
                  {timelineEvents.map((event, index) => {
                    const colors = statusClasses[event.status];
                    const Icon = event.icon;

                    return (
                      <motion.div
                        key={event.time}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        className={`relative flex gap-5 sm:gap-8 ${
                          event.isMoneyShot ? "z-20" : ""
                        }`}
                      >
                        {/* Timestamp - LARGER */}
                        <div className="flex-shrink-0 w-24 sm:w-32 text-right">
                          <code
                            className={`text-lg sm:text-xl font-mono font-bold ${
                              event.isMoneyShot
                                ? "text-emerald-400"
                                : "text-slate-300"
                            }`}
                          >
                            {event.time}
                          </code>
                        </div>

                        {/* Dot indicator - desktop */}
                        <div className="hidden sm:flex flex-shrink-0 w-4 items-start justify-center pt-2 relative z-10">
                          <div
                            className={`w-4 h-4 rounded-full ${
                              colors.dot
                            } ring-4 ring-slate-900 ${
                              event.isMoneyShot ? "animate-pulse w-5 h-5" : ""
                            }`}
                          />
                        </div>

                        {/* Content - LARGER */}
                        <div
                          className={`flex-1 rounded-xl ${colors.bg} border ${
                            colors.border
                          } p-5 sm:p-6 lg:p-8 ${
                            event.isMoneyShot
                              ? "ring-2 ring-emerald-500/50 shadow-xl shadow-emerald-500/30"
                              : ""
                          }`}
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${
                                colors.bg
                              } border ${
                                colors.border
                              } flex items-center justify-center ${
                                event.isMoneyShot ? "animate-pulse" : ""
                              }`}
                            >
                              <Icon
                                size={24}
                                weight="fill"
                                className={colors.icon}
                              />
                            </div>
                            <div>
                              <h4
                                className={`text-lg sm:text-xl font-bold ${
                                  event.isMoneyShot
                                    ? "text-emerald-400"
                                    : "text-white"
                                }`}
                              >
                                {event.isMoneyShot ? "✓ " : ""}
                                {event.label}
                              </h4>
                              {event.statusText && (
                                <span
                                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.text}`}
                                >
                                  <span className="relative flex h-2.5 w-2.5">
                                    <span
                                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.dot} opacity-75`}
                                    ></span>
                                    <span
                                      className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colors.dot}`}
                                    ></span>
                                  </span>
                                  {event.statusText}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <p
                              className={`text-base leading-relaxed ${
                                event.isMoneyShot
                                  ? "text-emerald-100 font-medium"
                                  : "text-slate-200"
                              }`}
                            >
                              <span
                                className={`font-medium ${
                                  event.isMoneyShot
                                    ? "text-emerald-300"
                                    : "text-slate-400"
                                }`}
                              >
                                Event:{" "}
                              </span>
                              {event.event}
                            </p>

                            {event.latency && (
                              <p className="text-base">
                                <span className="text-slate-400 font-medium">
                                  Latency:{" "}
                                </span>
                                <span className="text-amber-300 font-mono text-lg font-bold">
                                  {event.latency}
                                </span>
                              </p>
                            )}

                            {event.mitigationTime && (
                              <p className="text-base">
                                <span className="text-slate-400 font-medium">
                                  Total Mitigation Time:{" "}
                                </span>
                                <span className="text-emerald-300 font-bold text-xl">
                                  {event.mitigationTime}
                                </span>
                              </p>
                            )}

                            {event.userImpact && (
                              <div className="flex items-center gap-2 pt-2">
                                <CheckCircle
                                  size={20}
                                  weight="fill"
                                  className="text-emerald-400"
                                />
                                <p className="text-base">
                                  <span className="text-slate-400 font-medium">
                                    User Impact:{" "}
                                  </span>
                                  <span className="text-emerald-300 font-semibold">
                                    {event.userImpact}
                                  </span>
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              The ROI Dashboard
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Translating technical uptime into financial wins
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {roiStats.map((stat, index) => {
              const Icon = stat.icon;
              const colors = colorClasses[stat.color];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative rounded-2xl bg-slate-900/80 border border-slate-700 p-5 sm:p-6 text-center hover:border-slate-600 transition-colors"
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${colors} border mb-4`}
                  >
                    <Icon size={20} weight="duotone" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-300 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500">{stat.sublabel}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={onBookDemo}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-8 py-3.5 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-400/30"
          >
            <Lightning size={20} weight="fill" />
            Book Your Fire Drill Simulation
          </button>
          <p className="text-sm text-slate-500 mt-3">
            See how we protect your stack in real-time
          </p>
        </motion.div>
      </div>
    </section>
  );
}
