import { useState, useEffect } from "react";
import { Sparkle, CalendarDots, Cpu, TrendDown } from "@phosphor-icons/react";

function Hero() {
  const [liveMetrics, setLiveMetrics] = useState({
    cost: 34.6,
    cache: 32.1,
    latency: 17,
    savings: 35.6,
  });

  useEffect(() => {
    const jitter = (value, min, max, decimals = 1) => {
      const delta = (Math.random() - 0.5) * 4;
      const next = Math.min(max, Math.max(min, value + delta));
      return Number(next.toFixed(decimals));
    };

    const interval = setInterval(() => {
      setLiveMetrics((prev) => ({
        cost: jitter(prev.cost, 30, 55),
        cache: jitter(prev.cache, 24, 52),
        latency: jitter(prev.latency, 8, 28, 0),
        savings: jitter(prev.savings, 30, 50),
      }));
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-slate-950 to-[#020617]"></div>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.5) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="pointer-events-none absolute -top-64 -right-32 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.5),_transparent_60%)] blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-80 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.45),_transparent_60%)] blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-200/90 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
              <Sparkle className="w-4 h-4" />
              <span>LLM Cost Optimization</span>
              <span className="inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-[0.18em] text-indigo-100">
                Live
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Cut your LLM costs by{" "}
                <span className="text-indigo-300">30–50%</span> automatically
              </h1>
              <p className="text-base sm:text-lg text-slate-200/80 max-w-xl">
                Cognitude is a drop-in autopilot that reduces OpenAI, Anthropic,
                Groq, and Mistral spend without touching your prompts. Point
                your SDKs to our proxy and keep shipping.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <button className="inline-flex items-center rounded-full bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 transition">
                Start Free
                <span className="ml-2 rounded-full bg-indigo-400/30 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.18em]">
                  No card
                </span>
              </button>
              <a
                href="#product"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 text-sm text-slate-100 px-4 py-2.5 hover:bg-white/10 transition"
              >
                <CalendarDots className="w-4 h-4 mr-2" /> Book Demo
              </a>
              <div className="flex items-center gap-2 text-[0.7rem] text-slate-300/80">
                <div className="flex -space-x-2">
                  {[
                    "from-indigo-500 to-violet-500",
                    "from-fuchsia-500 to-rose-500",
                    "from-cyan-500 to-emerald-500",
                  ].map((gradient) => (
                    <span
                      key={gradient}
                      className={`h-6 w-6 rounded-full bg-gradient-to-br ${gradient} border border-slate-900`}
                    ></span>
                  ))}
                </div>
                <span>Trusted by AI teams shipping to production</span>
              </div>
            </div>

            {/* Trust/stat strip removed as requested */}
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur p-5 shadow-xl shadow-indigo-500/30">
              <div className="flex items-center justify-between text-[0.7rem] text-slate-300 mb-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Autopilot on
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  {"OpenAI • Anthropic • Groq • Mistral"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 text-[0.7rem] text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-400/80"></span>
                      <span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80"></span>
                    </div>
                    <span className="ml-1">index.ts · zero code change</span>
                  </div>
                  <span className="text-indigo-200/80 bg-indigo-500/10 border border-indigo-400/40 rounded-full px-2 py-0.5">
                    Savings simulation
                  </span>
                </div>
                <div className="p-4 space-y-3 font-mono text-xs">
                  <pre className="text-slate-400">{`// Point your SDKs to Cognitude`}</pre>
                  <pre className="text-indigo-200">{`const openai = new OpenAI({
  baseURL: "https://api.cognitude.io/v1",
  defaultHeaders: { "X-API-Key": "cog_..." }
})`}</pre>
                  <pre className="text-slate-400">{`// Existing code stays the same`}</pre>
                  <pre className="text-emerald-200">{`const completion = await openai.chat.completions.create({
  model: "gpt-5.1-codex",
  messages: [{ role: "user", content: "Classify this email" }]
})`}</pre>
                  <pre className="text-slate-400">{`// Autopilot routing + budget protection automatic + validation`}</pre>
                  <pre className="text-slate-300">{`/* smartRoute → gpt-5.1-mini | cacheHit ${liveMetrics.cache.toFixed(
                    1
                  )}% | totalSavings -${liveMetrics.cost.toFixed(1)}% */`}</pre>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-[0.75rem]">
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-400/40 px-3 py-2">
                  <div className="flex items-center justify-between text-slate-300/80 mb-1">
                    <span>Cost</span>
                    <TrendDown className="w-4 h-4 text-emerald-300" />
                  </div>
                  <p className="text-lg font-semibold text-emerald-200">
                    -{liveMetrics.cost.toFixed(1)}%
                  </p>
                </div>
                <div className="rounded-xl bg-sky-500/5 border border-sky-400/40 px-3 py-2">
                  <div className="flex items-center justify-between text-slate-300/80 mb-1">
                    <span>Cache hit</span>
                    <Sparkle className="w-4 h-4 text-sky-300" />
                  </div>
                  <p className="text-lg font-semibold text-sky-200">
                    {liveMetrics.cache.toFixed(1)}%
                  </p>
                </div>
                <div className="rounded-xl bg-violet-500/5 border border-violet-400/40 px-3 py-2">
                  <div className="flex items-center justify-between text-slate-300/80 mb-1">
                    <span>Latency</span>
                    <Cpu className="w-4 h-4 text-violet-300" />
                  </div>
                  <p className="text-lg font-semibold text-violet-200">
                    +{liveMetrics.latency.toFixed(0)}ms
                  </p>
                </div>
              </div>

              {/* <div className="absolute -bottom-8 -right-4 sm:-right-8 w-56">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-center">
                  <p className="text-3xl font-semibold text-indigo-100">
                    {liveMetrics.savings.toFixed(1)}%
                  </p>
                  <p className="text-xs text-slate-300/80">avg. cost savings</p>
                  <p className="mt-1 text-[0.65rem] text-slate-400">
                    on last 50k tokens
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Saved customers banner removed per request */}
      </div>
    </section>
  );
}

export default Hero;
