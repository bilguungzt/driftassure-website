import { CheckCircle, Sparkle } from "@phosphor-icons/react";
import { useState } from "react";

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for testing",
      features: [
        "1,000 requests/month",
        "All models supported",
        "Basic routing (no ML)",
        "7-day logs",
        "Community support",
      ],
      cta: "Start Free",
      highlight: null,
    },
    {
      name: "Starter",
      price: isAnnual ? "$79" : "$99",
      description: "For small teams",
      features: [
        "50,000 requests/month",
        "$0.80 per 1,000 after",
        "Smart Autopilot routing",
        "Schema enforcement + auto-retry",
        "Prompt caching (90% discount)",
        "Email + Slack alerts",
        "30-day logs",
        "10 seats, 5 projects",
      ],
      cta: "Start 14-Day Trial",
      popular: true,
      badge: "MOST POPULAR",
      highlight: {
        text: "Net savings: $850/mo",
        sub: "40% reduction",
      },
    },
    {
      name: "Pro",
      price: isAnnual ? "$249" : "$299",
      description: "For scaling businesses",
      features: [
        "500,000 requests/month",
        "$0.50 per 1,000 after",
        "ML-powered Autopilot",
        "Custom routing rules",
        "Advanced caching strategies",
        "PII detection (basic)",
        "Priority support (4hr SLA)",
        "90-day logs",
        "Unlimited seats & projects",
      ],
      cta: "Start 14-Day Trial",
      highlight: {
        text: "Net savings: $1,406/mo",
        sub: "4.7x ROI",
      },
    },
    {
      name: "Enterprise",
      price: "Starts at $999",
      description: "For regulated industries",
      features: [
        "10M+ requests/month",
        "Volume discounts",
        "SOC 2 + HIPAA + PCI compliance",
        "On-prem deployment option",
        "SSO/SCIM + RBAC",
        "Dedicated FinOps engineer",
        "99.9% SLA",
        "5-year audit logs",
      ],
      cta: "Book Demo",
      highlight: {
        text: "Net savings: $27,905/mo",
        sub: "27.9x ROI",
      },
    },
  ];

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
          <span className="text-xs text-slate-200/80">Pricing</span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Your Customer Savings Are Now BIGGER
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-200/80">
          Stop overpaying for OpenAI. Start automating your savings while
          keeping full control over vendor contracts.
        </p>
        <div className="mt-8 inline-flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/10 text-sm">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-full transition-all font-medium ${
              !isAnnual
                ? "bg-white text-slate-900"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-full transition-all font-medium ${
              isAnnual
                ? "bg-white text-slate-900"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Annual
            <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
              -20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-6 backdrop-blur transition-all duration-300 ${
              plan.popular
                ? "bg-slate-900/80 border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-[1.02] z-10"
                : "bg-slate-950/50 border-white/10 hover:border-white/20"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-slate-500 text-sm">/month</span>
                )}
              </div>
              <p className="text-sm text-slate-400 min-h-[40px]">
                {plan.description}
              </p>
            </div>

            {/* Feature List - Flex Grow to push CTA down */}
            <ul className="space-y-3 text-sm text-slate-300 mb-8 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      plan.popular ? "text-indigo-400" : "text-emerald-400"
                    }`}
                    weight="fill"
                  />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            {/* ROI Highlight Box */}
            {plan.highlight && (
              <div
                className={`mb-6 rounded-xl p-3 border text-center ${
                  plan.popular
                    ? "bg-indigo-500/10 border-indigo-500/20"
                    : "bg-emerald-500/5 border-emerald-500/10"
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Sparkle
                    className={`w-3.5 h-3.5 ${
                      plan.popular ? "text-indigo-400" : "text-emerald-400"
                    }`}
                    weight="fill"
                  />
                  <span
                    className={`text-xs font-semibold ${
                      plan.popular ? "text-indigo-200" : "text-emerald-200"
                    }`}
                  >
                    {plan.highlight.sub}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  {plan.highlight.text}
                </p>
              </div>
            )}

            <a
              href="#pricing"
              className={`w-full inline-flex justify-center items-center rounded-full py-2.5 text-sm font-semibold transition-all ${
                plan.popular
                  ? "bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
