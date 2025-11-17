import { Target, Shield, Zap, FileCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    color: "purple",
    badge: "Saves 30-40%",
    title: "🎯 Smart Model Routing",
    description:
      "Analyzes prompts, routes to optimal model. Simple tasks → Mini ($0.15/1M). Complex tasks → Codex ($3/1M).",
    benefits: ["7 task types", "4 providers", "Zero config"],
    code: `// Before: $3.00 per 1M tokens
response = openai.chat.completions.create(
  model="gpt-4",
  messages=[{"role": "user", "content": "Hello"}]
)

// After with Cognitude: $0.15 per 1M tokens
response = client.chat.completions.create(
  model="gpt-4",  # Cognitude auto-routes to gpt-3.5-mini
  messages=[{"role": "user", "content": "Hello"}]
)
// ✅ Saved 95% on this request`,
  },
  {
    icon: Shield,
    color: "red",
    badge: "Only Cognitude",
    title: "🛡️ Budget Enforcement & Alerts",
    unique: true,
    description:
      "Set monthly limits. Auto-block requests before overspend. Alerts at 50%, 75%, 90%, 100% via Email/Slack/Webhook.",
    benefits: ["Hard caps", "Multi-tier alerts", "Real-time tracking"],
    code: `// Set budget
cognitude.set_budget({
  monthly_limit: 1000,
  alerts: [50, 75, 90, 100],
  channels: ["email", "slack"]
})

// When limit reached:
Error: Budget exceeded for November 2025
Monthly limit: $1,000
Current spend: $1,000
Action: Request blocked`,
  },
  {
    icon: Zap,
    color: "yellow",
    badge: "Saves 20-30%",
    title: "⚡ Intelligent Caching",
    description:
      "Identical requests served instantly from cache. Zero cost, <100ms latency. Works across all providers.",
    benefits: ["42% avg hit rate", "<100ms vs 2000ms", "Cross-provider"],
    stats: {
      hitRate: "42%",
      latency: "<100ms",
      saved: "$2,847/mo",
    },
  },
  {
    icon: FileCheck,
    color: "blue",
    badge: "Sleep Better",
    title: "📊 Audit-Grade Billing",
    unique: true,
    description:
      "Upload invoices, auto-reconcile every dollar. >1% discrepancy triggers alert. Complete audit trail for finance teams.",
    benefits: ["CSV upload", "Variance detection", "Dispute support"],
    visual: {
      cognitude: "$9,847",
      provider: "$9,891",
      variance: "$44 (0.4%)",
    },
  },
  {
    icon: TrendingUp,
    color: "pink",
    badge: "Updated Hourly",
    title: "📈 Real-Time Public Benchmarks",
    unique: true,
    description:
      "Only platform publishing production LLM data. Compare providers/models. Updated hourly. No login required.",
    benefits: ["Real production data", "SEO traffic magnet", "Zero CAC growth"],
    stats: {
      signups: "847 signups from benchmarks last month",
      ranking: "#1 for 'gpt vs claude pricing'",
    },
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cognitude Autopilot: Your LLM Cost Reduction Engine
          </h2>
          <p className="text-xl text-gray-300">
            Set it and forget it. We optimize every request across 5 dimensions.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            const colorStyles = {
              purple: "bg-purple-100 text-purple-600 border-purple-200",
              red: "bg-red-100 text-red-600 border-red-200",
              yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
              blue: "bg-blue-100 text-blue-600 border-blue-200",
              pink: "bg-pink-100 text-pink-600 border-pink-200",
            };

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 ${
                        colorStyles[feature.color]
                      } rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <span
                      className={`px-3 py-1 ${
                        colorStyles[feature.color]
                      } rounded-full text-sm font-semibold border`}
                    >
                      {feature.badge}
                    </span>
                    {feature.unique && (
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold">
                        UNIQUE
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm"
                      >
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>

                  {feature.stats && (
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      {Object.entries(feature.stats).map(([key, value]) => (
                        <div key={key} className="text-sm text-gray-300">
                          <span className="text-white font-semibold">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Visual/Code */}
                <div className="flex-1">
                  {feature.code ? (
                    <div className="bg-slate-800 rounded-xl p-6 border border-purple-500/20">
                      <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                        <code>{feature.code}</code>
                      </pre>
                    </div>
                  ) : feature.visual ? (
                    <div className="bg-white rounded-xl p-8 shadow-xl">
                      <h4 className="text-sm font-semibold text-gray-600 mb-4">
                        Billing Reconciliation
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">
                            Cognitude Tracking
                          </span>
                          <span className="font-bold text-blue-600">
                            {feature.visual.cognitude}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Provider Invoice</span>
                          <span className="font-bold">
                            {feature.visual.provider}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-2 border-green-300">
                          <span className="font-medium">Variance</span>
                          <span className="font-bold text-green-600">
                            ✓ {feature.visual.variance}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 backdrop-blur-sm border border-purple-500/30">
                      <div className="text-center space-y-4">
                        <Icon className="w-24 h-24 text-white mx-auto opacity-50" />
                        <div className="text-2xl font-bold text-white">
                          {feature.badge}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
