import { TrendingDown, Zap, Shield, Blocks } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "80%",
    label: "Average Cost Reduction",
    description: "vs. flagship models",
    color: "green",
  },
  {
    icon: Zap,
    value: "< 100ms",
    label: "Added Latency",
    description: "Caching layer",
    color: "yellow",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise reliability",
    color: "blue",
  },
  {
    icon: Blocks,
    value: "4",
    label: "LLM Providers",
    description: "OpenAI, Anthropic, Google, Groq",
    color: "purple",
  },
];

function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const iconColorClass = {
              green: "bg-green-100 text-green-600",
              yellow: "bg-yellow-100 text-yellow-600",
              blue: "bg-blue-100 text-blue-600",
              purple: "bg-purple-100 text-purple-600",
            }[metric.color];

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 ${iconColorClass} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
