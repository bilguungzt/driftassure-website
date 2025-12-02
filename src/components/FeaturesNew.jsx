import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightning,
  ChartLineUp,
  Receipt,
  CheckCircle,
  ArrowRight,
  Fingerprint,
  Wrench,
  TrendDown,
  Database,
} from "@phosphor-icons/react";

const ChatGPTLogo = (props) => (
  <img
    src="/logos/chatgpt.svg"
    alt="ChatGPT"
    {...props}
    style={{ filter: "brightness(0) invert(1)", opacity: 0.6 }}
  />
);
const GeminiLogo = (props) => (
  <img
    src="/logos/gemini.svg"
    alt="Gemini"
    {...props}
    style={{ filter: "brightness(0) invert(1)", opacity: 0.6 }}
  />
);
const ClaudeLogo = (props) => (
  <img
    src="/logos/claude.svg"
    alt="Claude"
    {...props}
    style={{ filter: "brightness(0) invert(1)", opacity: 0.6 }}
  />
);
const DeepSeekLogo = (props) => (
  <img
    src="/logos/deepseek.svg"
    alt="DeepSeek"
    {...props}
    style={{ filter: "brightness(0) invert(1)", opacity: 0.6 }}
  />
);

function Features({ onBookDemo = () => {} }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "stability",
      icon: ShieldCheck,
      badge: "LAYER 1",
      badgeColor: "emerald",
      title: "Stability Insurance",
      subtitle: "15-second auto-failover when providers break",
      description:
        "We continuously fingerprint your application's expected behavior. When a provider update causes drift, we detect it in under 1 second and automatically failover to a pre-validated backup model.",
      stats: [
        { label: "Detection", value: "<1s" },
        { label: "Failover", value: "15s" },
        { label: "Uptime SLA", value: "99.9%" },
      ],
      visual: (
        <div className="space-y-3">
          {/* Primary Provider - Drifting */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">
                Primary Provider
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-medium text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Drift Detected
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">gpt-4-turbo</p>
                <p className="text-xs text-red-400">+40% verbosity spike</p>
              </div>
            </div>
          </div>

          {/* Safety Gate - The Decision Diamond */}
          <div className="flex items-center justify-center py-2">
            <div className="relative">
              {/* Diamond shape */}
              <div className="w-20 h-20 rotate-45 bg-amber-500/20 border-2 border-amber-500/50 rounded-lg flex items-center justify-center">
                <div className="-rotate-45 text-center">
                  <ShieldCheck
                    size={20}
                    className="text-amber-400 mx-auto mb-0.5"
                  />
                  <span className="text-[9px] font-bold text-amber-300 uppercase tracking-tight">
                    Verify
                  </span>
                </div>
              </div>
              {/* Reject path */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <div className="w-6 h-0.5 bg-red-500/50" />
                <span className="text-[8px] text-red-400 font-medium">
                  ✗ REJECT
                </span>
              </div>
              {/* Accept path */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-0.5 h-4 bg-emerald-500/50" />
                <span className="text-[8px] text-emerald-400 font-medium">
                  ✓ PASS
                </span>
              </div>
            </div>
          </div>

          {/* Fallback Provider - Verified */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">
                Verified Fallback
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-400">
                <CheckCircle size={12} weight="fill" />
                Logic Verified
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                <span className="text-lg">🟣</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  claude-3-5-sonnet
                </p>
                <p className="text-xs text-emerald-400">96.8% baseline match</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "repair",
      icon: Wrench,
      badge: "LAYER 2",
      badgeColor: "amber",
      title: "Semantic Repair",
      subtitle: "Fix broken JSON before it crashes your agents",
      description:
        "Our 3-tier repair engine intercepts malformed responses before they reach your application. Algorithmic fixes run in <10ms; complex repairs use Groq LPU for sub-200ms latency.",
      stats: [
        { label: "Repair Rate", value: "99%" },
        { label: "Latency", value: "<200ms" },
        { label: "False Positives", value: "0.01%" },
      ],
      visual: (
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-red-400">
                MALFORMED RESPONSE
              </span>
            </div>
            <pre className="text-xs font-mono text-red-300 overflow-x-auto">
              {`{ "action": "book_flight",
  "params": { city: "NYC"   // missing quote
  "date": "2024-03-15" }`}
            </pre>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-slate-500" />
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">
                REPAIRED IN 47ms
              </span>
            </div>
            <pre className="text-xs font-mono text-emerald-300 overflow-x-auto">
              {`{ "action": "book_flight",
  "params": { "city": "NYC" },
  "date": "2024-03-15" }`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "efficiency",
      icon: ChartLineUp,
      badge: "LAYER 3",
      badgeColor: "sky",
      title: "Token Efficiency",
      subtitle: "Stop the hidden 10-20% tax of token drift",
      description:
        "We audit your providers with z-score statistical confidence. Detect silent verbosity increases, model degradation, and billing anomalies in real-time.",
      stats: [
        { label: "Avg Savings", value: "18.4%" },
        { label: "Detection", value: "Real-time" },
        { label: "Confidence", value: "σ ≥ 2.5" },
      ],
      visual: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">
                Token Usage Trend
              </span>
              <span className="text-xs text-red-400 font-medium">
                +23% drift detected
              </span>
            </div>
            <div className="h-24 flex items-end gap-1">
              {[40, 42, 45, 48, 52, 58, 65, 72, 78, 85, 92, 98].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${
                    i >= 8 ? "bg-red-500/60" : "bg-indigo-500/60"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-slate-500">Jan</span>
              <span className="text-[10px] text-slate-500">Dec</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
            <TrendDown className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-300">
              Alert: Verbosity spike detected on gpt-4-turbo
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "attribution",
      icon: Receipt,
      badge: "LAYER 4",
      badgeColor: "indigo",
      title: "Cost Attribution",
      subtitle: "Know exactly where every dollar goes",
      description:
        "Tag every request by feature, customer, or team. Get real-time dashboards showing cost-per-feature, margin analysis, and budget alerts before you overspend.",
      stats: [
        { label: "Granularity", value: "Per-request" },
        { label: "Export", value: "CSV/API" },
        { label: "Retention", value: "Unlimited" },
      ],
      visual: (
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <p className="text-xs font-medium text-slate-400 mb-3">
              Cost by Feature (March 2024)
            </p>
            <div className="space-y-2">
              {[
                {
                  feature: "Customer Support",
                  cost: "$12,340",
                  pct: 45,
                  color: "bg-indigo-500",
                },
                {
                  feature: "Doc Processing",
                  cost: "$8,120",
                  pct: 30,
                  color: "bg-sky-500",
                },
                {
                  feature: "Code Review",
                  cost: "$4,200",
                  pct: 15,
                  color: "bg-amber-500",
                },
                {
                  feature: "Email Classifier",
                  cost: "$2,740",
                  pct: 10,
                  color: "bg-emerald-500",
                },
              ].map((item) => (
                <div key={item.feature} className="flex items-center gap-3">
                  <div className="w-24 text-xs text-slate-400 truncate">
                    {item.feature}
                  </div>
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <div className="w-16 text-xs font-medium text-white text-right">
                    {item.cost}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 mb-6">
            <Database className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Four-Layer Platform
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Complete AI Infrastructure Protection
          </h2>
          <p className="text-lg text-slate-400">
            From real-time stability monitoring to granular cost
            attribution—everything you need to run mission-critical AI in
            production.
          </p>
        </motion.div>

        {/* Provider Logos */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <ChatGPTLogo className="h-8 w-auto" />
          <ClaudeLogo className="h-6 w-auto" />
          <GeminiLogo className="h-8 w-auto" />
          <DeepSeekLogo className="h-8 w-auto" />
        </div>

        {/* Feature Tabs */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Tab Navigation */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`flex items-start gap-3 p-4 rounded-xl text-left transition-all min-w-[200px] lg:min-w-0 ${
                  activeFeature === index
                    ? "bg-indigo-500/20 border border-indigo-500/40 text-white"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700"
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 flex-shrink-0 ${
                    activeFeature === index
                      ? "text-indigo-400"
                      : "text-slate-500"
                  }`}
                  weight="bold"
                />
                <div>
                  <span
                    className={`text-[10px] font-bold tracking-wider ${
                      activeFeature === index
                        ? "text-indigo-400"
                        : "text-slate-600"
                    }`}
                  >
                    {feature.badge}
                  </span>
                  <p
                    className={`font-semibold ${
                      activeFeature === index ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {feature.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-lg text-indigo-400 font-medium">
                    {features[activeFeature].subtitle}
                  </p>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {features[activeFeature].description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {features[activeFeature].stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 rounded-xl bg-slate-800/50 border border-slate-700"
                    >
                      <p className="text-xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group"
                >
                  See it in action
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right: Visual */}
              <div>{features[activeFeature].visual}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;
