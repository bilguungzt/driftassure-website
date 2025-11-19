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
    className={`${props.className}`}
  />
);
const GeminiLogo = (props) => (
  <img
    src="/logos/gemini.svg"
    alt="Gemini"
    {...props}
    className={`${props.className}`}
  />
);
const GrokLogo = (props) => (
  <img
    src="/logos/grok.svg"
    alt="Grok"
    {...props}
    className={`${props.className}`}
  />
);
const ClaudeLogo = (props) => (
  <img
    src="/logos/claude.svg"
    alt="Claude"
    {...props}
    className={`${props.className}`}
  />
);
const DeepSeekLogo = (props) => (
  <img
    src="/logos/deepseek.svg"
    alt="DeepSeek"
    {...props}
    className={`${props.className}`}
  />
);
const OpenRouterLogo = (props) => (
  <img
    src="/logos/openrouter.svg"
    alt="OpenRouter"
    {...props}
    className={`${props.className}`}
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
                  className={`${sizeClass} opacity-90 transition-opacity group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300`}
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
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 border border-indigo-100 shadow-lg ring-4 ring-white">
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
              className="flex items-center gap-2 text-sm text-slate-500 font-medium"
            >
              <FeatureRender className="h-4 w-4 text-indigo-600" />
              <span>{label}</span>
              {idx < features.length - 1 && (
                <svg width="60" height="2" className="text-slate-200">
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
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-24 bg-slate-50/50"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5">
          <ShieldCheck className="w-4 h-4 text-indigo-600" />
          <span className="text-xs text-indigo-700 font-medium">
            Autopilot Engine
          </span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Turn your LLM stack into a self-optimizing system
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Cognitude sits as a smart proxy in front of OpenAI, Anthropic, Groq,
          and Mistral, continuously routing, caching, and fine-tuning calls for
          cost, latency, and quality.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <div className="hidden md:block text-center text-sm text-slate-600 max-w-3xl mx-auto">
          <NetworkAnimation />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1: Schema Enforcement */}
        <section className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-5 md:p-6 hover:shadow-md transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-transparent pointer-events-none opacity-50"></div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mb-6">
            <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span className="font-medium">Guaranteed Valid Responses</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-indigo-600 font-medium">
                Only on Cognitude
              </span>
            </div>
            <div className="space-y-3 text-[0.75rem]">
              {/* Before Panel */}
              <div className="rounded-xl bg-white border border-rose-200 p-3 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 p-1.5">
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <p className="text-slate-400 mb-1 text-xs uppercase tracking-wider">
                  Before
                </p>
                <div className="space-y-1 font-mono text-[0.7rem]">
                  <p className="text-slate-600">
                    <span className="text-blue-600">User:</span> "Extract
                    invoice..."
                  </p>
                  <p className="text-slate-600">
                    <span className="text-green-600">GPT-4:</span> "Sure! Here
                    is JSON: ```json..."
                  </p>
                  <p className="text-rose-600 font-medium">
                    Error: JSONDecodeError ❌
                  </p>
                </div>
              </div>

              {/* After Panel */}
              <div className="rounded-xl bg-white border border-emerald-200 p-3 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 p-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-slate-400 mb-1 text-xs uppercase tracking-wider">
                  With Cognitude
                </p>
                <div className="space-y-1 font-mono text-[0.7rem]">
                  <p className="text-slate-600">
                    <span className="text-purple-600">Cognitude:</span>
                  </p>
                  <ul className="list-none pl-2 space-y-0.5">
                    <li className="flex items-center gap-1.5 text-emerald-700">
                      ✓ Injects schema
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-700">
                      ✓ Validates response
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-700">
                      ✓ Auto-retries if invalid
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Schema Enforcement
          </h3>
          <p className="mt-1.5 text-sm text-slate-500">
            Guaranteed valid JSON outputs. Cognitude validates, fixes, and
            retries responses automatically before they hit your code.
          </p>
        </section>

        {/* Card 2: Smart Model Routing */}
        <section className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-5 md:p-6 hover:shadow-md transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-transparent pointer-events-none opacity-50"></div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mb-6">
            <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
              <Target className="w-4 h-4 text-sky-600" />
              <span className="font-medium">Smart Model Routing</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-sky-600 font-medium">
                Multi-vendor
              </span>
            </div>
            <div className="space-y-3 text-[0.75rem]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span className="text-slate-700 font-medium">
                  Cost-optimized
                </span>
                <span className="h-[1px] flex-1 bg-slate-200 mx-2"></span>
                <span className="text-emerald-600 font-bold">-67% savings</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white border border-slate-200 p-3 shadow-sm">
                  <p className="text-slate-400 mb-1 text-xs">Before</p>
                  <p className="text-sm text-slate-900">Model: gpt-5</p>
                  <p className="text-xs text-slate-500">Task: Classify email</p>
                  <p className="text-sm text-rose-500 font-medium mt-1">
                    $0.00350/req
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-emerald-200 p-3 shadow-sm">
                  <p className="text-slate-400 mb-1 text-xs">After</p>
                  <p className="text-sm text-slate-900">Model: gemini-2.5</p>
                  <p className="text-xs text-emerald-600 font-medium">
                    Same quality ✓
                  </p>
                  <p className="text-sm text-emerald-600 font-bold mt-1">
                    $0.00040/req
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Smart Model Routing
          </h3>
          <p className="mt-1.5 text-sm text-slate-500">
            Auto-route each request to the cheapest model that still hits your
            quality and latency SLOs across OpenAI, Anthropic, Google, and
            DeepSeek.
          </p>
        </section>

        {/* Card 3: Intelligent Team Caching */}
        <section className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-5 md:p-6 hover:shadow-md transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-transparent pointer-events-none opacity-50"></div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mb-6">
            <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
              <Lightning className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">Intelligent Team Caching</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-emerald-600 font-medium">
                Deduped
              </span>
            </div>

            <div className="space-y-2.5 text-[0.75rem]">
              {/* Alice */}
              <div className="rounded-lg bg-white p-2.5 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-blue-500" />
                    <span className="text-slate-700 font-medium">
                      Alice (10am)
                    </span>
                  </div>
                  <span className="text-slate-500 text-[0.65rem]">$0.003</span>
                </div>
                <p className="text-slate-500 italic">"Translate 'Hello'..."</p>
              </div>

              {/* Bob */}
              <div className="rounded-lg bg-emerald-50 p-2.5 border border-emerald-100 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-emerald-600" />
                    <span className="text-slate-900 font-medium">
                      Bob (11am)
                    </span>
                  </div>
                  <span className="text-emerald-600 font-bold text-[0.65rem]">
                    $0.00 ✨
                  </span>
                </div>
                <p className="text-emerald-700/70 italic">
                  Gets Alice's cached result
                </p>
              </div>

              {/* Carol */}
              <div className="rounded-lg bg-emerald-50 p-2.5 border border-emerald-100 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-emerald-600" />
                    <span className="text-slate-900 font-medium">
                      Carol (2pm)
                    </span>
                  </div>
                  <span className="text-emerald-600 font-bold text-[0.65rem]">
                    $0.00 ✨
                  </span>
                </div>
                <p className="text-emerald-700/70 italic">
                  "Traducir 'Hello'..." (Semantic Match)
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Intelligent Team Caching
          </h3>
          <p className="mt-1.5 text-sm text-slate-500">
            Share a semantic cache across your entire team. If one person
            requests it, everyone else gets the result instantly for free.
          </p>
        </section>

        {/* Card 4: Automatic Optimization */}
        <div className="relative">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
            <div className="flex items-center justify-between text-[0.7rem] text-slate-500 mb-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-2 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-medium text-slate-700">Autopilot on</span>
              </div>
              <div className="flex items-center gap-1 text-slate-400">
                {"OpenAI • Anthropic • Groq • Mistral"}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden mb-4">
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 text-[0.7rem] text-slate-500 bg-slate-100/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400"></span>
                    <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="ml-1 font-mono">index.ts</span>
                </div>
                <span className="text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-2 py-0.5 font-medium">
                  Savings simulation
                </span>
              </div>
              <div className="p-4 space-y-3 font-mono text-xs bg-white">
                <pre className="text-slate-500">{`// Point your SDKs to Cognitude`}</pre>
                <pre className="text-purple-600">{`const openai = new OpenAI({
  baseURL: "https://api.cognitude.io/v1",
  defaultHeaders: { "X-API-Key": "cog_..." }
})`}</pre>
                <pre className="text-slate-500">{`// Existing code stays the same`}</pre>
                <pre className="text-emerald-600">{`const completion = await openai.chat.completions.create({
  model: "gpt-5.1-codex",
  messages: [{ role: "user", content: "Classify this email" }]
})`}</pre>
                <pre className="text-slate-400">{`// Autopilot routing + budget protection automatic + validation`}</pre>
                <pre className="text-slate-600">{`/* smartRoute → gpt-5.1-mini | cacheHit ${liveMetrics.cache.toFixed(
                  1
                )}% | totalSavings -${liveMetrics.cost.toFixed(1)}% */`}</pre>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-[0.75rem]">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span>Cost</span>
                  <TrendDown className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-lg font-bold text-emerald-600">
                  -{liveMetrics.cost.toFixed(1)}%
                </p>
              </div>
              <div className="rounded-xl bg-sky-50 border border-sky-100 px-3 py-2">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span>Cache hit</span>
                  <Sparkle className="w-4 h-4 text-sky-600" />
                </div>
                <p className="text-lg font-bold text-sky-600">
                  {liveMetrics.cache.toFixed(1)}%
                </p>
              </div>
              <div className="rounded-xl bg-violet-50 border border-violet-100 px-3 py-2">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span>Latency</span>
                  <Cpu className="w-4 h-4 text-violet-600" />
                </div>
                <p className="text-lg font-bold text-violet-600">
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
