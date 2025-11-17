import { Lock, Zap, BarChart, RefreshCw, Shield, Wrench } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "🔒 Security & Compliance",
    color: "blue",
    items: ["AES-256", "SOC 2 (Q2 2025)", "Tenant isolation", "Audit logs"],
  },
  {
    icon: Zap,
    title: "⚡ Performance",
    color: "yellow",
    items: ["<100ms latency", "99.9% uptime", "Global CDN", "Redis caching"],
  },
  {
    icon: BarChart,
    title: "📊 Analytics & Insights",
    color: "purple",
    items: [
      "Real-time dashboards",
      "Cost breakdown",
      "Latency tracking",
      "Forecasting",
    ],
  },
  {
    icon: RefreshCw,
    title: "🔄 Multi-Provider",
    color: "green",
    items: ["OpenAI", "Anthropic", "Google", "Groq", "Auto-failover"],
  },
  {
    icon: Shield,
    title: "🛡️ Reliability",
    color: "orange",
    items: [
      "Auto-failover",
      "Response validation",
      "Schema enforcement",
      "Zero-downtime",
    ],
  },
  {
    icon: Wrench,
    title: "🔧 Developer Experience",
    color: "cyan",
    items: [
      "1-line integration",
      "OpenAI-compatible",
      "Python/Node SDKs",
      "Docs",
    ],
  },
];

function TechnicalFeatures() {
  const colorStyles = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    green: "bg-green-500/10 text-green-400 border-green-500/30",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  };

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl text-gray-300">
            Built for production, trusted by CTOs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border ${
                  colorStyles[feature.color]
                } backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-400">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">847</div>
            <div className="text-sm">teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10M+</div>
            <div className="text-sm">requests/day</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-sm">regions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">SOC 2</div>
            <div className="text-sm">compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalFeatures;
