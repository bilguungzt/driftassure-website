import { Check, X } from "lucide-react";
import { useState } from "react";

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out Cognitude",
      features: [
        "100K tokens/month",
        "Basic monitoring",
        "7-day data retention",
      ],
      notIncluded: ["Autopilot routing", "Budget caps"],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Starter",
      price: isAnnual ? "$23" : "$29",
      description: "For seed-stage startups",
      features: [
        "1M tokens/month",
        "Autopilot routing",
        "Intelligent caching",
        "Schema enforcement",
        "Budget caps & alerts",
        "Email support",
      ],
      roi: "Avg savings $147/mo = 5x ROI",
      cta: "Start 14-Day Trial",
      popular: true,
    },
    {
      name: "Pro",
      price: isAnnual ? "$79" : "$99",
      description: "For growing teams",
      features: [
        "10M tokens/month",
        "All Starter features",
        "Multi-provider routing",
        "Public benchmarks access",
        "Audit-Grade billing",
        "Slack/Webhook alerts",
        "Priority support",
      ],
      roi: "Avg savings $1,470/mo = 15x ROI",
      cta: "Start Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited tokens",
        "All Pro features",
        "SSO authentication",
        "Dedicated support",
        "99.9% SLA",
        "On-premise option",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Average customer saves 15x their subscription cost
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md transition-all ${
                !isAnnual ? "bg-white shadow-sm" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md transition-all ${
                isAnnual ? "bg-white shadow-sm" : "text-gray-600"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl ${
                plan.popular
                  ? "border-2 border-purple-500 shadow-xl scale-105"
                  : "border border-gray-200"
              } p-6 hover:shadow-lg transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    ⭐ MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600 ml-2">/month</span>
                  )}
                </div>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                {plan.roi && (
                  <div className="mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {plan.roi}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded &&
                  plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 opacity-50">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
