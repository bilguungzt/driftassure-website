import { CheckCircle, Sparkle } from "@phosphor-icons/react";
import { useState } from "react";

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For developers & side projects",
      features: [
        "Up to $5k/mo LLM spend",
        "All models supported",
        "Basic routing",
        "Community support",
        "7-day logs",
      ],
      cta: "Start Free",
      highlight: null,
      buttonStyle: "outline",
    },
    {
      name: "Starter",
      price: isAnnual ? "$399" : "$499",
      description: "For growing startups",
      features: [
        "Up to $50k/mo LLM spend",
        "Smart Autopilot routing",
        "**Schema enforcement + auto-retry**",
        "Prompt caching (90% discount)",
        "Email + Slack alerts",
        "30-day logs",
      ],
      cta: "Start Trial",
      popular: true,
      badge: "MOST POPULAR",
      highlight: {
        text: "Pays for itself in < 3 days",
        sub: "ROI",
        color: "purple",
      },
      buttonStyle: "solid",
    },
    {
      name: "Pro",
      price: isAnnual ? "$1,599" : "$1,999",
      description: "For scale-ups",
      features: [
        "Unlimited spend",
        "$0.50 per 1k requests overage",
        "ML-powered Autopilot",
        "**Schema Enforcer™ (Zero-config)**",
        "Custom routing rules",
        "Priority support (4hr SLA)",
        "90-day logs",
      ],
      cta: "Start Trial",
      highlight: {
        text: "Pays for itself instantly",
        sub: "4.7x ROI",
        color: "green",
      },
      buttonStyle: "outline",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For regulated industries",
      features: [
        "Volume discounts",
        "SOC 2 + HIPAA + PCI compliance",
        "On-prem deployment",
        "SSO/SCIM + RBAC",
        "Dedicated FinOps engineer",
        "99.9% SLA",
        "5-year logs",
      ],
      cta: "Book Demo",
      highlight: {
        text: "Net savings: $27k+/mo",
        sub: "27.9x ROI",
        color: "green",
      },
      buttonStyle: "outline",
    },
  ];

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
          <span className="text-xs text-slate-600">Pricing</span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Enterprise infrastructure. Utility pricing.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Stop overpaying for OpenAI. Start automating your savings while
          keeping full control over vendor contracts.
        </p>
        <div className="mt-8 inline-flex items-center gap-1 p-1 bg-slate-100 rounded-full border border-slate-200 text-sm">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-full transition-all font-medium ${
              !isAnnual
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-full transition-all font-medium ${
              isAnnual
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Annual
            <span className="ml-2 text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full border border-emerald-200">
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
                ? "bg-white border-indigo-200 shadow-2xl shadow-indigo-200/40 scale-[1.02] z-10"
                : "bg-white border-slate-200 hover:border-indigo-100"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-slate-900">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-slate-500 text-sm">/month</span>
                )}
              </div>
              <p className="text-sm text-slate-500 min-h-[40px]">
                {plan.description}
              </p>
            </div>

            {/* Feature List - Flex Grow to push CTA down */}
            <ul className="space-y-3 text-sm text-slate-600 mb-8 flex-1">
              {plan.features.map((feature, idx) => {
                const isBold =
                  feature.startsWith("**") && feature.endsWith("**");
                const text = isBold ? feature.slice(2, -2) : feature;

                return (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.popular ? "text-indigo-600" : "text-emerald-600"
                      }`}
                      weight="fill"
                    />
                    <span
                      className={`leading-tight ${
                        isBold ? "font-bold text-slate-900" : ""
                      }`}
                    >
                      {text}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* ROI Highlight Box */}
            {plan.highlight && (
              <div
                className={`mb-6 rounded-xl p-3 border text-center ${
                  plan.highlight.color === "purple"
                    ? "bg-indigo-50 border-indigo-100"
                    : "bg-emerald-50 border-emerald-100"
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Sparkle
                    className={`w-3.5 h-3.5 ${
                      plan.highlight.color === "purple"
                        ? "text-indigo-500"
                        : "text-emerald-500"
                    }`}
                    weight="fill"
                  />
                  <span
                    className={`text-xs font-semibold ${
                      plan.highlight.color === "purple"
                        ? "text-indigo-700"
                        : "text-emerald-700"
                    }`}
                  >
                    {plan.highlight.sub}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  {plan.highlight.text}
                </p>
              </div>
            )}

            <a
              href="#pricing"
              className={`w-full inline-flex justify-center items-center rounded-full py-2.5 text-sm font-medium transition-all ${
                plan.buttonStyle === "solid"
                  ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-200"
                  : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100"
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
