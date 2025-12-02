import { motion } from "framer-motion";
import {
  Fingerprint,
  Wrench,
  ArrowsClockwise,
  Lightning,
  Timer,
  Code,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";

const steps = [
  {
    id: 1,
    icon: Fingerprint,
    title: "Fingerprint Baseline",
    result: "Detect drift in 1-15s",
    color: "indigo",
  },
  {
    id: 2,
    icon: Wrench,
    title: "Semantic Repair",
    result: "99% JSON fix rate",
    color: "emerald",
  },
  {
    id: 3,
    icon: ArrowsClockwise,
    title: "Auto-Switch",
    result: "GPT-4 → Claude instantly",
    color: "amber",
  },
];

const colorClasses = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    icon: "text-indigo-400",
    number: "bg-indigo-500 text-white",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: "text-emerald-400",
    number: "bg-emerald-500 text-white",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    icon: "text-amber-400",
    number: "bg-amber-500 text-white",
  },
};

export default function DefenseArchitecture() {
  return (
    <section
      className="relative bg-slate-950 py-16 sm:py-20 overflow-hidden"
      id="how-it-works"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Lightning size={16} weight="fill" className="text-indigo-400" />
            <span className="text-xs font-medium tracking-wide text-indigo-300 uppercase">
              How It Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            Active Protection. Non-Blocking.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Intercept and fix errors without adding latency.
          </p>
        </motion.div>

        {/* Visual Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Flow Container */}
          <div className="relative rounded-2xl bg-slate-900/60 border border-slate-700 p-8 sm:p-10">
            {/* Flow Steps */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 border border-slate-600">
                <Code size={20} className="text-slate-400" />
                <span className="text-sm font-medium text-slate-300">
                  Your App
                </span>
              </div>

              <ArrowRight
                size={24}
                className="text-slate-600 hidden md:block"
              />
              <div className="md:hidden text-slate-600">↓</div>

              {/* Steps */}
              {steps.map((step, index) => {
                const colors = colorClasses[step.color];
                const Icon = step.icon;

                return (
                  <div key={step.id} className="contents">
                    <div
                      className={`relative flex flex-col items-center gap-2 px-6 py-4 rounded-xl ${colors.bg} border ${colors.border} min-w-[140px]`}
                    >
                      <div
                        className={`absolute -top-2 -left-2 w-6 h-6 rounded-full ${colors.number} flex items-center justify-center text-xs font-bold`}
                      >
                        {step.id}
                      </div>
                      <Icon
                        size={24}
                        weight="duotone"
                        className={colors.icon}
                      />
                      <span className="text-sm font-semibold text-white text-center">
                        {step.title}
                      </span>
                      <span className="text-xs text-slate-400 text-center">
                        {step.result}
                      </span>
                    </div>

                    {index < steps.length - 1 && (
                      <>
                        <ArrowRight
                          size={24}
                          className="text-slate-600 hidden md:block"
                        />
                        <div className="md:hidden text-slate-600">↓</div>
                      </>
                    )}
                  </div>
                );
              })}

              <ArrowRight
                size={24}
                className="text-slate-600 hidden md:block"
              />
              <div className="md:hidden text-slate-600">↓</div>

              {/* Output */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="text-emerald-400"
                />
                <span className="text-sm font-medium text-emerald-300">
                  Protected
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Kicker - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-6 sm:p-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Code size={20} className="text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    One Line. Full Protection.
                  </h4>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Timer size={16} className="text-indigo-400" />
                    <span className="text-sm text-slate-300">
                      <span className="font-bold text-white">&lt; 5 min</span>{" "}
                      setup
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightning size={16} className="text-emerald-400" />
                    <span className="text-sm text-slate-300">
                      <span className="font-bold text-white">&lt; 1ms</span>{" "}
                      overhead
                    </span>
                  </div>
                </div>
              </div>

              {/* Code snippet */}
              <div className="lg:w-72 flex-shrink-0">
                <div className="rounded-xl bg-slate-950 border border-slate-700 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-900 border-b border-slate-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <pre className="p-3 text-xs font-mono overflow-x-auto">
                    <code>
                      <span className="text-slate-400">client = OpenAI(</span>
                      {"\n"}
                      <span className="text-emerald-400"> base_url=</span>
                      <span className="text-amber-300">"api.cognitude.io"</span>
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
