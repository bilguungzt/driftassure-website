import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Cpu,
  Lightning,
  TrendDown,
  CheckCircle,
  Robot,
  CurrencyDollar,
} from "@phosphor-icons/react";

export default function HowItWorks() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Line Progress
  const lineProgress = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["0%", "100%"]
  );

  // Staggered Animations
  const step1Opacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const step1Y = useTransform(scrollYProgress, [0.05, 0.15], [40, 0]);

  const step2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const step2Y = useTransform(scrollYProgress, [0.35, 0.45], [40, 0]);

  const step3Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const step3Y = useTransform(scrollYProgress, [0.65, 0.75], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-auto md:h-[300vh] bg-white mb-20 sm:mb-32"
    >
      <div className="relative md:sticky md:top-0 md:h-screen block md:flex md:items-center md:overflow-hidden py-12 md:py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-semibold mb-3">
              Workflow
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Setup in minutes. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Save immediately.
              </span>
            </h2>
            <p className="text-slate-600 max-w-xl text-lg">
              Integration is seamless. Just change your base URL and let our
              intelligence layer handle the rest.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[290px] left-1/2 -translate-x-1/2 w-screen h-0.5 -z-10 overflow-visible">
              <motion.div
                style={{ width: lineProgress }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent rounded-full relative"
              >
                <div className="absolute right-0 top-1/2 h-5 w-16 -translate-y-1/2 bg-purple-400/40 blur-3xl" />
              </motion.div>
            </div>

            {/* STEP 1: CODE */}
            <motion.div
              style={{ opacity: step1Opacity, y: step1Y }}
              className="flex flex-col relative group"
            >
              {/* Card */}
              <div className="h-[420px] w-full bg-slate-50 border border-slate-200 rounded-2xl mb-8 relative overflow-hidden shadow-xl shadow-slate-200/50 group-hover:border-indigo-500/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />

                {/* MacOS Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-100/90 backdrop-blur">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-auto text-xs font-mono text-slate-400">
                    config.py
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-[13px] leading-relaxed overflow-hidden">
                  <div className="text-slate-700">
                    <span className="text-purple-600">from</span> openai{" "}
                    <span className="text-purple-600">import</span> OpenAI
                  </div>
                  <div className="text-slate-400 h-4" />
                  <div className="text-slate-700">client = OpenAI(</div>
                  <div className="text-slate-700 pl-4">
                    api_key=<span className="text-green-600">"sk-..."</span>,
                  </div>
                  {/* Highlighted Line */}
                  <div className="relative">
                    <div className="absolute -left-5 -right-5 top-0 bottom-0 bg-indigo-500/10 border-l-2 border-indigo-500 pointer-events-none" />
                    <div className="text-slate-700 pl-4 relative">
                      base_url=
                      <span className="text-green-600">
                        "https://api.cognitude.io/v1"
                      </span>
                      ,
                    </div>
                  </div>
                  <div className="text-slate-500 pl-4"># ^ One line change</div>
                  <div className="text-slate-700">)</div>
                  <div className="text-slate-400 h-4" />
                  <div className="text-slate-500 italic">
                    # Works with any provider
                  </div>
                  <div className="text-slate-700">
                    response = client.chat.completions.create(
                  </div>
                  <div className="text-slate-700 pl-4">
                    model=
                    <span className="text-green-600">"gpt-5.1-codex"</span>,
                  </div>
                  <div className="text-slate-700 pl-4">messages=[...]</div>
                  <div className="text-slate-700">)</div>
                </div>
              </div>

              {/* Description */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-sm border border-indigo-200">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Configure Gateway
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Simply replace your OpenAI{" "}
                  <code className="text-indigo-700 bg-indigo-50 px-1 py-0.5 rounded">
                    base_url
                  </code>{" "}
                  with our proxy endpoint. No SDK migration required.
                </p>
              </div>
            </motion.div>

            {/* STEP 2: INTELLIGENT ROUTING */}
            <motion.div
              style={{ opacity: step2Opacity, y: step2Y }}
              className="flex flex-col relative group"
            >
              <div className="h-[420px] w-full bg-slate-50 border border-slate-200 rounded-2xl mb-8 relative overflow-hidden shadow-xl shadow-slate-200/50 group-hover:border-purple-500/30 transition-colors duration-500 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

                {/* Visual representation of routing */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                  {/* Input */}
                  <div className="w-full max-w-[220px] bg-white border border-slate-200 rounded-lg p-3 mb-8 flex items-center gap-3 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    <div className="text-[10px] sm:text-[11px] text-slate-600 font-mono truncate">
                      Generate quarterly report...
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="absolute top-[34%] text-slate-600">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M12 19l-4-4M12 19l4-4" />
                    </svg>
                  </div>

                  {/* The Brain/Router */}
                  <div className="relative z-10 mb-8">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 border border-white/20 relative">
                      <Cpu
                        size={32}
                        color="white"
                        weight="duotone"
                        className="animate-pulse"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                    </div>
                  </div>

                  {/* Distribution Lines */}
                  <div className="w-full flex justify-between px-4 text-slate-600 mb-2 relative">
                    <svg
                      className="absolute top-0 left-0 w-full h-8 -mt-6 pointer-events-none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M150 0 C 150 15, 50 15, 50 30"
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="4 4"
                        strokeOpacity="0.3"
                      />
                      <path
                        d="M150 0 C 150 15, 250 15, 250 30"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.3"
                      />
                      <path
                        d="M150 0 L 150 30"
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="4 4"
                        strokeOpacity="0.3"
                      />
                    </svg>
                  </div>

                  {/* Options */}
                  <div className="w-full grid grid-cols-3 gap-2">
                    <div className="bg-white border border-slate-200 rounded p-2 text-center opacity-50 scale-90">
                      <div className="text-[10px] font-bold text-slate-500">
                        GPT-5.1
                      </div>
                      <div className="text-[9px] text-slate-400">$$$</div>
                    </div>
                    <div className="bg-gradient-to-b from-slate-50 to-white border border-indigo-500/40 rounded p-2 text-center relative shadow-lg shadow-indigo-200/50 transform scale-105">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                        BEST
                      </div>
                      <div className="text-[10px] font-bold text-slate-900">
                        Flash
                      </div>
                      <div className="text-[9px] text-green-600">$</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded p-2 text-center opacity-50 scale-90">
                      <div className="text-[10px] font-bold text-slate-500">
                        Opus
                      </div>
                      <div className="text-[9px] text-slate-400">$$</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50 text-purple-600 font-bold text-sm border border-purple-200">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Autopilot Engages
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">
                    Intelligent Routing
                  </span>{" "}
                  — The Task Classifier scores prompt complexity in real-time.
                  Simple queries route to cheaper models, while our{" "}
                  <span className="font-semibold">Schema Enforcer</span>{" "}
                  guarantees the output structure matches your JSON definitions
                  perfectly.
                </p>
              </div>
            </motion.div>

            {/* STEP 3: SAVINGS */}
            <motion.div
              style={{ opacity: step3Opacity, y: step3Y }}
              className="flex flex-col relative group"
            >
              <div className="h-[420px] w-full bg-slate-50 border border-slate-200 rounded-2xl mb-8 relative overflow-hidden shadow-xl shadow-slate-200/50 group-hover:border-emerald-500/30 transition-colors duration-500 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

                <div className="flex-1 p-6 flex flex-col justify-center">
                  {/* Stats Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                        Est. Savings
                      </p>
                      <h4 className="text-4xl font-bold text-slate-900 flex items-center gap-2">
                        $2,490
                        <span className="text-lg text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                          -42%
                        </span>
                      </h4>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <TrendDown className="text-emerald-500" size={20} />
                    </div>
                  </div>

                  {/* Graph Area */}
                  <div className="relative h-40 mt-4 w-full">
                    {/* Graph Container */}
                    <div className="absolute inset-0 flex items-end">
                      {/* SVG Graph */}
                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 100 50"
                        preserveAspectRatio="none"
                      >
                        {/* Defs for Gradient */}
                        <defs>
                          <linearGradient
                            id="graphGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#10B981"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="100%"
                              stopColor="#10B981"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        {/* Area Fill */}
                        <path
                          d="M0,10 Q20,10 30,25 T100,45 V50 H0 Z"
                          fill="url(#graphGradient)"
                        />

                        {/* Stroke Line */}
                        <path
                          d="M0,10 Q20,10 30,25 T100,45"
                          fill="none"
                          stroke="#34D399"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Points of Interest */}
                        <circle cx="0" cy="10" r="1.5" fill="#34D399" />
                        <circle
                          cx="100"
                          cy="45"
                          r="1.5"
                          fill="#34D399"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-0 left-0 text-[9px] text-slate-500 font-mono">
                      $0.06/req
                    </div>
                    <div className="absolute bottom-0 right-0 text-[9px] text-emerald-400 font-mono translate-y-4">
                      $0.01/req
                    </div>
                  </div>

                  {/* Bottom Status */}
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-emerald-500"
                      weight="fill"
                    />
                    <span className="text-sm text-slate-700">
                      Optimization active
                    </span>
                    <span className="ml-auto text-xs font-mono text-slate-400">
                      LIVE
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm border border-emerald-200">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    See Instant Savings
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Watch your costs drop immediately on the dashboard. No
                  contract commitments, pay only for what you use.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
