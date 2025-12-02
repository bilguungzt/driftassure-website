import { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, Play } from "@phosphor-icons/react";

// NeonShield-style Radar Background Component
function RadarPulse() {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0 pointer-events-none select-none"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 50%, transparent 85%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 50%, transparent 85%)",
      }}
    >
      {/* Radar Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 1. The Sweep / Scanner */}
        <div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_8s_linear_infinite]">
          <div className="radar-sweep w-full h-full rounded-full" />
          {/* Leading edge glowing line */}
          <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-b from-cyan-300 via-cyan-500 to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_30px_rgba(34,211,238,1)]" />
        </div>

        {/* 2. Outer Ring Structure (Static + Slow Spin) */}
        {/* Outermost dashed ring */}
        <div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-cyan-500/10 opacity-30 animate-[spin_120s_linear_infinite]" />

        {/* Main Outer Circle */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-cyan-500/10 opacity-60" />

        {/* Decorative Arc Slices */}
        <svg
          className="absolute w-[80%] h-[80%] animate-[spin_60s_linear_infinite_reverse]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="rgba(34,211,238,0.1)"
            strokeWidth="0.2"
            strokeDasharray="20 40"
          />
        </svg>

        {/* 3. Inner Rings */}
        <div className="absolute w-[72%] h-[72%] rounded-full border border-cyan-500/5" />

        {/* 4. Grid Lines */}
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-400" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-400" />
          <div className="absolute top-[14.6%] left-[14.6%] w-[70.8%] h-[70.8%] border border-cyan-400 rounded-full" />
        </div>

        {/* 5. Central Glowing Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full animate-pulse" />
          <div className="w-[60%] h-[60%] border border-cyan-400/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_#22d3ee]" />
          </div>
        </div>

        {/* Floating Data Points on Radar */}
        <div className="absolute top-[20%] left-[75%] w-32 h-8 flex items-center gap-2 text-cyan-500/50 text-[10px] font-mono animate-pulse">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> TARGET_LOCKED
        </div>
        <div className="absolute bottom-[40%] left-[25%] w-32 h-8 flex items-center gap-2 text-blue-500/50 text-[10px] font-mono animate-pulse delay-700">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> SCANNING...
        </div>
      </div>
    </div>
  );
}

function Hero({ onBookDemo = () => {} }) {
  const [alertPhase, setAlertPhase] = useState("detecting");

  // Animate through the failover sequence
  useEffect(() => {
    const phases = ["detecting", "failover", "resolved"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phases.length;
      setAlertPhase(phases[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#020204] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020204]/80 to-transparent blur-[80px]" />
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* NeonShield Radar/pulse animated background */}
      <RadarPulse />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" weight="fill" />
              <span className="text-xs font-semibold tracking-wider uppercase text-indigo-300">
                Mission-Critical AI Infrastructure
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Your AI Provider Will Break Your Product.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                We Fix It In 15 Seconds.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              The first{" "}
              <span className="text-white font-semibold">
                Stability Insurance Platform
              </span>{" "}
              for enterprise AI. We fingerprint your "working" baseline, detect
              silent model degradation in real-time, and auto-failover to stable
              providers before your users notice.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 text-base font-semibold px-8 py-4 shadow-lg shadow-white/10 hover:bg-slate-100 transition-all hover:scale-[1.02]"
              >
                <Play className="w-5 h-5" weight="fill" />
                Book a Fire Drill Simulation
              </button>
              <a
                href="https://github.com/cognitude/shadow-mode"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 text-slate-200 text-base font-medium px-8 py-4 hover:bg-slate-800 hover:border-slate-500 transition-all group"
              >
                Start Shadow Mode (Open Source)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Text */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Backed by peer-reviewed research from University of Waterloo
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Protecting $10M+ in annual AI spend
              </span>
            </div>
          </div>

          {/* Right Column - Split Screen Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-transparent to-emerald-500/20 rounded-3xl blur-3xl opacity-50" />

            <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2">
                  cognitude-monitor
                </span>
              </div>

              <div className="grid grid-cols-2 divide-x divide-slate-700/50">
                {/* Left Panel - Alert */}
                <div
                  className={`p-6 transition-all duration-500 ${
                    alertPhase === "detecting"
                      ? "bg-red-950/30"
                      : "bg-slate-900/50"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          alertPhase === "detecting"
                            ? "bg-red-500 animate-pulse"
                            : "bg-slate-600"
                        }`}
                      />
                      <span className="text-xs font-mono text-slate-400">
                        {alertPhase === "detecting" ? "14:05:01" : "14:05:01"}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p
                        className={`text-sm font-semibold ${
                          alertPhase === "detecting"
                            ? "text-red-400"
                            : "text-slate-500"
                        }`}
                      >
                        OpenAI Silent Update Detected
                      </p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Verbosity</span>
                          <span
                            className={
                              alertPhase === "detecting"
                                ? "text-red-400 font-semibold"
                                : "text-slate-500"
                            }
                          >
                            +40%
                          </span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              alertPhase === "detecting"
                                ? "w-[140%] bg-red-500"
                                : "w-full bg-slate-600"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Logic Score</span>
                          <span
                            className={
                              alertPhase === "detecting"
                                ? "text-red-400 font-semibold"
                                : "text-slate-500"
                            }
                          >
                            -18%
                          </span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              alertPhase === "detecting"
                                ? "w-[82%] bg-red-500"
                                : "w-full bg-slate-600"
                            }`}
                          />
                        </div>
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-semibold ${
                          alertPhase === "detecting"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : "bg-slate-700 text-slate-500"
                        }`}
                      >
                        {alertPhase === "detecting"
                          ? "⚠ CRITICAL DRIFT"
                          : "RESOLVED"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Resolution */}
                <div
                  className={`p-6 transition-all duration-500 ${
                    alertPhase === "resolved"
                      ? "bg-emerald-950/30"
                      : "bg-slate-900/50"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          alertPhase === "resolved"
                            ? "bg-emerald-500 animate-pulse"
                            : "bg-slate-600"
                        }`}
                      />
                      <span className="text-xs font-mono text-slate-400">
                        {alertPhase === "failover" || alertPhase === "resolved"
                          ? "14:05:16"
                          : "--:--:--"}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p
                        className={`text-sm font-semibold ${
                          alertPhase === "resolved"
                            ? "text-emerald-400"
                            : "text-slate-500"
                        }`}
                      >
                        Cognitude Auto-Failover
                      </p>

                      <div
                        className={`text-xs space-y-2 ${
                          alertPhase === "failover" || alertPhase === "resolved"
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3" />
                          <span>Rerouting to Claude 3.5 Sonnet</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Baseline match: 99.2%</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div
                          className={`rounded-lg p-2 text-center ${
                            alertPhase === "resolved"
                              ? "bg-emerald-500/20 border border-emerald-500/30"
                              : "bg-slate-800"
                          }`}
                        >
                          <p
                            className={`text-lg font-bold ${
                              alertPhase === "resolved"
                                ? "text-emerald-400"
                                : "text-slate-600"
                            }`}
                          >
                            0s
                          </p>
                          <p className="text-[10px] text-slate-500 uppercase">
                            User Impact
                          </p>
                        </div>
                        <div
                          className={`rounded-lg p-2 text-center ${
                            alertPhase === "resolved"
                              ? "bg-emerald-500/20 border border-emerald-500/30"
                              : "bg-slate-800"
                          }`}
                        >
                          <p
                            className={`text-lg font-bold ${
                              alertPhase === "resolved"
                                ? "text-emerald-400"
                                : "text-slate-600"
                            }`}
                          >
                            None
                          </p>
                          <p className="text-[10px] text-slate-500 uppercase">
                            Downtime
                          </p>
                        </div>
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-semibold ${
                          alertPhase === "resolved"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-slate-700 text-slate-500"
                        }`}
                      >
                        {alertPhase === "resolved" ? "✓ STABLE" : "STANDBY"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="px-6 py-4 bg-slate-800/30 border-t border-slate-700/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Time to Resolution</span>
                  <span
                    className={`font-mono font-semibold ${
                      alertPhase === "resolved"
                        ? "text-emerald-400"
                        : "text-slate-400"
                    }`}
                  >
                    {alertPhase === "resolved"
                      ? "15 seconds"
                      : alertPhase === "failover"
                      ? "calculating..."
                      : "monitoring..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
