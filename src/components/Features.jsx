import { useState, useEffect } from "react";
import {
  Target,
  ShieldCheck,
  Lightning,
  TrendUp,
  TrendDown,
  ChartBar,
  Receipt,
  CheckCircle,
  XCircle,
  Users,
  Flask,
  Sparkle,
  Cpu,
} from "@phosphor-icons/react";

const ChatGPTLogo = (props) => (
  <img
    src="/logos/chatgpt.svg"
    alt="ChatGPT"
    {...props}
    className={`${props.className} brightness-0 invert`}
  />
);
const GeminiLogo = (props) => (
  <img
    src="/logos/gemini.svg"
    alt="Gemini"
    {...props}
    className={`${props.className} brightness-0 invert`}
  />
);
const GrokLogo = (props) => (
  <img
    src="/logos/grok.svg"
    alt="Grok"
    {...props}
    className={`${props.className} brightness-0 invert`}
  />
);
const ClaudeLogo = (props) => (
  <img
    src="/logos/claude.svg"
    alt="Claude"
    {...props}
    className={`${props.className} brightness-0 invert`}
  />
);
const DeepSeekLogo = (props) => (
  <img
    src="/logos/deepseek.svg"
    alt="DeepSeek"
    {...props}
    className={`${props.className} brightness-0 invert`}
  />
);
const OpenRouterLogo = (props) => (
  <img
    src="/logos/openrouter.svg"
    alt="OpenRouter"
    {...props}
    className={`${props.className} brightness-0 invert`}
  />
);

function NetworkAnimation() {
  const techIcons = [
    {
      Icon: ChatGPTLogo,
      label: "ChatGPT",
      url: "https://chatgpt.com",
      sizeClass: "h-10 w-10",
    },
    {
      Icon: GeminiLogo,
      label: "Gemini",
      url: "https://gemini.google.com",
      sizeClass: "w-20 h-auto",
    },
    {
      Icon: GrokLogo,
      label: "Grok",
      url: "https://grok.x.ai",
      sizeClass: "w-20 h-auto",
    },
    {
      Icon: ClaudeLogo,
      label: "Claude",
      url: "https://claude.ai",
      sizeClass: "w-20 h-auto",
    },
    {
      Icon: DeepSeekLogo,
      label: "DeepSeek",
      url: "https://www.deepseek.com",
      sizeClass: "w-20 h-auto",
    },
    {
      Icon: OpenRouterLogo,
      label: "OpenRouter",
      url: "https://openrouter.ai",
      sizeClass: "h-10 w-10",
    },
  ];

  const features = [
    { Icon: TrendDown, label: "Automatic Cost Reduction" },
    { Icon: ShieldCheck, label: "Schema Enforcement" },
    { Icon: ChartBar, label: "Real-Time Benchmarks" },
    { Icon: Receipt, label: "Audit-Grade FinOps" },
  ];

  const connectionPoints = [150, 270, 390, 510, 630, 750];
  const paths = [
    { d: "M150 95 C 300 130, 450 200, 450 275", delay: "0s", length: 600 },
    { d: "M270 95 C 360 140, 450 210, 450 275", delay: "0.2s", length: 520 },
    { d: "M390 95 C 420 140, 450 200, 450 275", delay: "0.4s", length: 450 },
    { d: "M510 95 C 480 140, 450 200, 450 275", delay: "0.6s", length: 450 },
    { d: "M630 95 C 540 140, 450 210, 450 275", delay: "0.8s", length: 520 },
    { d: "M750 95 C 600 130, 450 200, 450 275", delay: "1s", length: 600 },
  ];

  return (
    <div className="relative h-96 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-6">
        {techIcons.map(({ Icon: IconComponent, label, url, sizeClass }) => {
          const IconRender = IconComponent;
          return (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div className="flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <IconRender
                  className={`${sizeClass} opacity-90 transition-opacity group-hover:opacity-100`}
                />
              </div>
            </a>
          );
        })}
      </div>

      <svg
        viewBox="0 0 900 360"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connectionPoints.map((cx) => (
          <circle
            key={cx}
            cx={cx}
            cy="95"
            r="3"
            fill="#a855f7"
            filter="url(#glow)"
            opacity="0.8"
          />
        ))}

        {paths.map((path) => (
          <path
            key={path.d}
            d={path.d}
            stroke="#a855f7"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={path.length}
            strokeDashoffset={path.length}
          >
            <animate
              attributeName="stroke-dashoffset"
              values={`${path.length};0;${path.length}`}
              dur="3s"
              begin={path.delay}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-200 ring-2 ring-indigo-400/40 shadow-[0_0_20px_rgba(99,102,241,0.6)]">
          <img
            src="/logos/cognitude_logo.png"
            alt="Cognitude core"
            className="h-8 w-8 rounded-full object-cover"
          />
        </span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-nowrap items-center justify-center gap-4 whitespace-nowrap">
        {features.map(({ Icon: FeatureIcon, label }, idx) => {
          const FeatureRender = FeatureIcon;
          return (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-slate-200/80"
            >
              <FeatureRender className="h-4 w-4 text-indigo-300" />
              <span>{label}</span>
              {idx < features.length - 1 && (
                <svg width="60" height="2" className="text-indigo-400/40">
                  <line
                    x1="0"
                    y1="1"
                    x2="60"
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Features() {
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
    <section
      id="features"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <ShieldCheck className="w-4 h-4 text-sky-300" />
          <span className="text-xs text-sky-100/90">Autopilot Engine</span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Turn your LLM stack into a self-optimizing system
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-200/80">
          Cognitude sits as a smart proxy in front of OpenAI, Anthropic, Groq,
          and Mistral, continuously routing, caching, and fine-tuning calls for
          cost, latency, and quality.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <div className="text-center text-sm text-slate-200/80 max-w-3xl mx-auto">
          <NetworkAnimation />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pb-10 sm:pb-14">
        {/* Card 1: Schema Enforcement */}
        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>

          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
              <ShieldCheck className="w-4 h-4 text-indigo-300" />
              <span className="font-medium">Guaranteed Valid Responses</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-indigo-200/80">
                Only on Cognitude
              </span>
            </div>
            <div className="space-y-3 text-[0.75rem] text-slate-200/80">
              {/* Before Panel */}
              <div className="rounded-xl bg-slate-900/80 border border-rose-500/20 p-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1.5">
                  <XCircle className="w-4 h-4 text-rose-400" />
                </div>
                <p className="text-slate-400 mb-1 text-xs uppercase tracking-wider">
                  Before
                </p>
                <div className="space-y-1 font-mono text-[0.7rem]">
                  <p className="text-slate-300">
                    <span className="text-blue-300">User:</span> "Extract
                    invoice..."
                  </p>
                  <p className="text-slate-300">
                    <span className="text-green-300">GPT-4:</span> "Sure! Here
                    is JSON: ```json..."
                  </p>
                  <p className="text-rose-300">Error: JSONDecodeError ❌</p>
                </div>
              </div>

              {/* After Panel */}
              <div className="rounded-xl bg-slate-900/80 border border-emerald-500/20 p-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-slate-400 mb-1 text-xs uppercase tracking-wider">
                  With Cognitude
                </p>
                <div className="space-y-1 font-mono text-[0.7rem]">
                  <p className="text-slate-300">
                    <span className="text-purple-300">Cognitude:</span>
                  </p>
                  <ul className="list-none pl-2 space-y-0.5">
                    <li className="flex items-center gap-1.5 text-emerald-300/90">
                      ✓ Injects schema
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-300/90">
                      ✓ Validates response
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-300/90">
                      ✓ Auto-retries if invalid
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
            Schema Enforcement
          </h3>
          <p className="mt-1.5 text-sm text-slate-200/80">
            Guaranteed valid JSON outputs. Cognitude validates, fixes, and
            retries responses automatically before they hit your code.
          </p>
        </section>

        {/* Card 2: Smart Model Routing */}
        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>

          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
              <Target className="w-4 h-4 text-sky-300" />
              <span className="font-medium">Smart Model Routing</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-sky-200/80">
                Multi-vendor
              </span>
            </div>
            <div className="space-y-3 text-[0.75rem] text-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>Cost-optimized</span>
                <span className="h-[1px] flex-1 bg-slate-600/60 mx-2"></span>
                <span className="text-emerald-300 font-medium">
                  -67% savings
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-900/80 border border-slate-700/80 p-3">
                  <p className="text-slate-400 mb-1 text-xs">Before</p>
                  <p className="text-sm text-white">Model: gpt-5</p>
                  <p className="text-xs text-slate-400">Task: Classify email</p>
                  <p className="text-sm text-rose-300 mt-1">$0.00350/req</p>
                </div>
                <div className="rounded-xl bg-slate-900/80 border border-emerald-500/50 p-3">
                  <p className="text-slate-400 mb-1 text-xs">After</p>
                  <p className="text-sm text-white">Model: gemini-2.5</p>
                  <p className="text-xs text-emerald-300">Same quality ✓</p>
                  <p className="text-sm text-emerald-300 mt-1">$0.00040/req</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
            Smart Model Routing
          </h3>
          <p className="mt-1.5 text-sm text-slate-200/80">
            Auto-route each request to the cheapest model that still hits your
            quality and latency SLOs across OpenAI, Anthropic, Google, and
            DeepSeek.
          </p>
        </section>

        {/* Card 3: Intelligent Team Caching */}
        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>

          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
              <Lightning className="w-4 h-4 text-emerald-300" />
              <span className="font-medium">Intelligent Team Caching</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-emerald-200/80">
                Deduped
              </span>
            </div>

            <div className="space-y-2.5 text-[0.75rem]">
              {/* Alice */}
              <div className="rounded-lg bg-slate-900/60 p-2.5 border border-white/5">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-blue-300" />
                    <span className="text-slate-200">Alice (10am)</span>
                  </div>
                  <span className="text-slate-500 text-[0.65rem]">$0.003</span>
                </div>
                <p className="text-slate-400 italic">"Translate 'Hello'..."</p>
              </div>

              {/* Bob */}
              <div className="rounded-lg bg-emerald-900/20 p-2.5 border border-emerald-500/20">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-emerald-300" />
                    <span className="text-slate-200">Bob (11am)</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[0.65rem]">
                    $0.00 ✨
                  </span>
                </div>
                <p className="text-emerald-200/70 italic">
                  Gets Alice's cached result
                </p>
              </div>

              {/* Carol */}
              <div className="rounded-lg bg-emerald-900/20 p-2.5 border border-emerald-500/20">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-emerald-300" />
                    <span className="text-slate-200">Carol (2pm)</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[0.65rem]">
                    $0.00 ✨
                  </span>
                </div>
                <p className="text-emerald-200/70 italic">
                  "Traducir 'Hello'..." (Semantic Match)
                </p>
              </div>
            </div>
          </div>

          <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
            Intelligent Team Caching
          </h3>
          <p className="mt-1.5 text-sm text-slate-200/80">
            Share a semantic cache across your entire team. If one person
            requests it, everyone else gets the result instantly for free.
          </p>
        </section>

        {/* Card 4: Automatic Optimization */}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
