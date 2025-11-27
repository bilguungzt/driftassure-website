import { useState } from "react";
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

function Features({ onBookDemo = () => {} }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "stability",
      icon: ShieldCheck,
      badge: "LAYER 1",
      badgeColor: "indigo",
      title: "Stability Insurance",
      subtitle: "Never suffer an outage due to provider updates",
      description:
        "We fingerprint your 'working' state and lock it in. When a provider silently degrades, we auto-failover to a stable alternative in under 15 seconds.",
      stats: [
        { label: "Detection Time", value: "<500ms" },
        { label: "Failover Time", value: "15 sec" },
        { label: "Uptime SLA", value: "99.9%" },
      ],
      visual: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-indigo-50 border border-indigo-200">
            <Fingerprint className="w-8 h-8 text-indigo-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Baseline Fingerprinted
              </p>
              <p className="text-xs text-slate-600">
                GPT-4o @ June 10, 2024 • 847 test cases passed
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-xs text-red-600 font-medium mb-1">
                Drift Detected
              </p>
              <p className="text-lg font-bold text-red-700">-18% logic score</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <p className="text-xs text-emerald-600 font-medium mb-1">
                Auto-Failover
              </p>
              <p className="text-lg font-bold text-emerald-700">→ Claude 3.5</p>
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
      subtitle: "We fix 99% of broken JSON and tool calls in <200ms",
      description:
        "Don't let fragile agents crash. Our semantic repair engine validates, fixes, and retries malformed responses before they reach your application.",
      stats: [
        { label: "Repair Rate", value: "99.2%" },
        { label: "Repair Time", value: "<200ms" },
        { label: "False Positives", value: "0.01%" },
      ],
      visual: (
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-red-600">
                MALFORMED RESPONSE
              </span>
            </div>
            <pre className="text-xs font-mono text-red-700 overflow-x-auto">
              {`{ "action": "book_flight",
  "params": { city: "NYC"   // missing quote
  "date": "2024-03-15" }`}
            </pre>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-medium text-emerald-600">
                REPAIRED IN 47ms
              </span>
            </div>
            <pre className="text-xs font-mono text-emerald-700 overflow-x-auto">
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
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-600">
                Token Usage Trend
              </span>
              <span className="text-xs text-red-500 font-medium">
                +23% drift detected
              </span>
            </div>
            <div className="h-16 flex items-end gap-1">
              {[40, 42, 41, 45, 52, 58, 65, 72].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${
                    i >= 5 ? "bg-red-400" : "bg-sky-400"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-slate-500">
              <span>June 1</span>
              <span className="text-red-500 font-medium">← Silent Update</span>
              <span>June 15</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "attribution",
      icon: Receipt,
      badge: "LAYER 4",
      badgeColor: "emerald",
      title: "Cost Attribution",
      subtitle: "Know exactly which feature is burning your budget",
      description:
        "Tag every API call by feature, team, or customer. Get audit-grade billing breakdowns that make your CFO happy and your budget meetings short.",
      stats: [
        { label: "Granularity", value: "Per-request" },
        { label: "Export", value: "CSV/API" },
        { label: "Retention", value: "Unlimited" },
      ],
      visual: (
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <p className="text-xs font-medium text-slate-600 mb-3">
              Cost by Feature (March 2024)
            </p>
            <div className="space-y-2">
              {[
                {
                  feature: "Customer Support Agent",
                  cost: "$12,340",
                  pct: 45,
                  color: "bg-indigo-500",
                },
                {
                  feature: "Document Processing",
                  cost: "$8,120",
                  pct: 30,
                  color: "bg-sky-500",
                },
                {
                  feature: "Code Review Bot",
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
                  <div className="w-24 text-xs text-slate-600 truncate">
                    {item.feature}
                  </div>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <div className="w-16 text-xs font-medium text-slate-900 text-right">
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
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 mb-6">
            <Database className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-700">
              Four-Layer Platform
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Complete AI Infrastructure Protection
          </h2>
          <p className="text-lg text-slate-600">
            From real-time stability monitoring to granular cost
            attribution—everything you need to run mission-critical AI in
            production.
          </p>
        </div>

        {/* Provider Logos */}
        <div className="flex items-center justify-center gap-8 mb-16 opacity-60">
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
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 flex-shrink-0 ${
                    activeFeature === index ? "text-white" : "text-slate-400"
                  }`}
                  weight="bold"
                />
                <div>
                  <span
                    className={`text-[10px] font-bold tracking-wider ${
                      activeFeature === index
                        ? "text-slate-400"
                        : "text-slate-400"
                    }`}
                  >
                    {feature.badge}
                  </span>
                  <p
                    className={`font-semibold ${
                      activeFeature === index ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {feature.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-lg text-indigo-600 font-medium">
                    {features[activeFeature].subtitle}
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {features[activeFeature].description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {features[activeFeature].stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 rounded-xl bg-white border border-slate-200"
                    >
                      <p className="text-xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group"
                >
                  See it in action
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right: Visual */}
              <div>{features[activeFeature].visual}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
