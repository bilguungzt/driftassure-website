import {
  Target,
  ShieldCheck,
  Lightning,
  TrendUp,
  TrendDown,
  ChartBar,
  Receipt,
  ArrowClockwise,
  Clock,
  Sparkle,
  Binoculars,
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
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200 ring-2 ring-indigo-400/40 shadow-[0_0_20px_rgba(99,102,241,0.6)]">
          <Lightning className="h-6 w-6" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>

          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
              <Target className="w-4 h-4 text-indigo-300" />
              <span className="font-medium">Smart Model Routing</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-indigo-200/80">
                Multi-vendor
              </span>
            </div>
            <div className="space-y-3 text-[0.75rem] text-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>Cost-optimized</span>
                <span className="h-[1px] flex-1 bg-slate-600/60 mx-2"></span>
                <span className="text-emerald-300 font-medium">-42.3%</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-900/80 border border-slate-700/80 p-3">
                  <p className="text-slate-400 mb-1 text-xs">Before</p>
                  <p className="text-sm text-white">Vendor: OpenAI</p>
                  <p className="text-sm text-white">Model: gpt-4.1</p>
                  <p className="text-sm text-rose-300">$0.0028/token</p>
                </div>
                <div className="rounded-xl bg-slate-900/80 border border-emerald-500/50 p-3">
                  <p className="text-slate-400 mb-1 text-xs">After</p>
                  <p className="text-sm text-white">Vendor: Anthropic</p>
                  <p className="text-sm text-white">Model: claude-3.5-sonnet</p>
                  <p className="text-sm text-emerald-300">$0.0015/token</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
            Smart Model Routing
          </h3>
          <p className="mt-1.5 text-sm text-slate-200/80">
            Auto-route each request to the cheapest model that still hits your
            quality and latency SLOs across OpenAI, Anthropic, Groq, and
            Mistral.
          </p>
        </section>

        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>

          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
              <Lightning className="w-4 h-4 text-sky-300" />
              <span className="font-medium">Real-time Reinforcement & A/B</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-sky-200/80">
                Continuous
              </span>
            </div>
            <div className="space-y-3 text-[0.75rem] text-slate-200/80">
              <div className="flex items-center justify-between">
                <span>Exploring variants</span>
                <span className="text-emerald-300 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>{" "}
                  live
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["45.9%", "63.6%", "50.0%"].map((val, idx) => (
                  <div
                    key={val}
                    className={`rounded-lg p-2 ${
                      idx === 1
                        ? "bg-emerald-500/10 border border-emerald-400/40"
                        : "bg-white/5"
                    }`}
                  >
                    <p className="text-slate-300/80 mb-1">
                      Variant {String.fromCharCode(65 + idx)}
                    </p>
                    <p
                      className={`text-sm font-semibold tracking-tight ${
                        idx === 1 ? "text-emerald-200" : "text-slate-100"
                      }`}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[0.7rem] text-slate-300/80">
                Reward models tune towards lower cost / higher quality prompts
                automatically.
              </p>
            </div>
          </div>

          <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
            Real-time Reinforcement & A/B Testing
          </h3>
          <p className="mt-1.5 text-sm text-slate-200/80">
            Automatically explore prompt and model variants, allocate traffic to
            winners, and learn from user feedback without manual
            experimentation.
          </p>
        </section>

        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>

          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span className="font-medium">Multi-agent Caching</span>
              <span className="ml-auto text-[0.65rem] uppercase tracking-[0.15em] text-emerald-200/80">
                Deduped
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[0.75rem]">
              {["66.2%", "49.2%", "45.0%"].map((val, idx) => (
                <div
                  key={val}
                  className={`rounded-xl bg-slate-900/80 border border-white/10 p-2 ${
                    idx === 2 ? "border-emerald-400/40" : ""
                  }`}
                >
                  <p className="text-slate-300/80 mb-1">
                    {idx === 2 ? "Global" : `Agent ${idx + 1}`}
                  </p>
                  <p className="text-emerald-300 font-semibold tracking-tight">
                    {val}
                  </p>
                  <p className="text-[0.65rem] text-slate-400">
                    {idx === 2 ? "deduped" : "cache hit"}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[0.7rem] text-slate-200/80">
              <span className="flex items-center gap-1.5">
                <Lightning className="w-3.5 h-3.5 text-emerald-300" />{" "}
                Auto-fallback routing
              </span>
              <span>0.42% fallbacks</span>
            </div>
          </div>

          <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
            Multi-agent Caching & Auto-fallback
          </h3>
          <p className="mt-1.5 text-sm text-slate-200/80">
            Deduplicate semantically similar calls across agents and
            automatically fall back between vendors on rate limits, timeouts,
            and errors.
          </p>
        </section>

        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <TrendUp className="w-4 h-4 text-fuchsia-300" />
                <span className="font-medium">
                  Real-time Performance Dashboard
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[0.65rem] text-fuchsia-200/90 bg-fuchsia-500/15 border border-fuchsia-400/40 rounded-full px-2 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[0.7rem]">
              {[
                {
                  label: "Spend / min",
                  value: "$16.28",
                  color: "text-emerald-300",
                },
                { label: "Tokens / s", value: "12.2k", color: "text-sky-300" },
                { label: "GPU util", value: "70%", color: "text-emerald-300" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg bg-slate-900/80 border border-white/10 p-2"
                >
                  <p className="text-slate-300/80 mb-0.5">{metric.label}</p>
                  <p
                    className={`text-sm font-semibold tracking-tight ${metric.color}`}
                  >
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.7rem] text-slate-300/80">
              GPU-level optimizations automatically batch, stream, and schedule
              traffic across regions.
            </p>
          </div>

          <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
            GPU-level Optimizations & Live Observability
          </h3>
          <p className="mt-1.5 text-sm text-slate-200/80">
            Inspect every call with token-level traces, GPU utilization, and
            real-time cost curves. Squeeze more throughput from the same
            hardware.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Features;
