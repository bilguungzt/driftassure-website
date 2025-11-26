import { CheckCircle, Sparkle, ShieldCheck, Play, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";

function Pricing({ onBookDemo = () => {} }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Shadow Mode",
      price: "$0",
      description: "Open source drift detection for developers",
      features: [
        "Self-hosted deployment",
        "Basic drift detection",
        "Token usage monitoring",
        "Community support",
        "GitHub integration",
      ],
      cta: "Start Shadow Mode",
      ctaLink: "https://github.com/cognitude/shadow-mode",
      highlight: null,
      buttonStyle: "outline",
      target: "developer",
    },
    {
      name: "Stability Pro",
      price: isAnnual ? "$1,999" : "$2,499",
      description: "For teams running production AI",
      features: [
        "Up to $100k/mo LLM spend",
        "**Real-time drift detection**",
        "**Automatic failover**",
        "Schema enforcement + repair",
        "Slack/PagerDuty alerts",
        "30-day baseline history",
        "Email support (24hr SLA)",
      ],
      cta: "Start 14-Day Trial",
      popular: true,
      badge: "MOST POPULAR",
      highlight: {
        text: "Prevents $50k+ outages",
        sub: "ROI",
        color: "purple",
      },
      buttonStyle: "solid",
      target: "team",
    },
    {
      name: "Stability Insurance",
      price: isAnnual ? "$4,999" : "$5,999",
      description: "For mission-critical AI infrastructure",
      features: [
        "Unlimited LLM spend",
        "**99.9% uptime SLA**",
        "**Multi-provider auto-failover**",
        "Custom baseline fingerprinting",
        "Dedicated stability engineer",
        "4-hour response SLA",
        "Quarterly fire drills",
        "90-day baseline history",
      ],
      cta: "Book Fire Drill",
      highlight: {
        text: "Full outage protection",
        sub: "INSURANCE",
        color: "green",
      },
      buttonStyle: "outline",
      target: "enterprise",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For regulated industries & at-scale",
      features: [
        "Volume discounts on all tiers",
        "SOC 2 + HIPAA + PCI compliance",
        "On-prem / VPC deployment",
        "SSO/SCIM + RBAC",
        "Custom SLA (up to 99.99%)",
        "Dedicated account team",
        "Custom integrations",
        "Unlimited baseline history",
      ],
      cta: "Talk to Sales",
      highlight: {
        text: "White-glove onboarding",
        sub: "ENTERPRISE",
        color: "green",
      },
      buttonStyle: "outline",
      target: "enterprise",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-indigo-600" weight="fill" />
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-700">
              Stability Insurance Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Insurance for Your AI Infrastructure
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 mb-8">
            Choose the level of protection your mission-critical AI needs. 
            Every plan includes our core stability platform.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-slate-200 shadow-sm text-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                !isAnnual
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                isAnnual
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Annual
              <span className="ml-2 text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                plan.popular
                  ? "bg-white border-indigo-300 shadow-2xl shadow-indigo-200/40 scale-[1.02] z-10 ring-2 ring-indigo-500"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
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
                  {plan.price !== "Custom" && plan.price !== "$0" && (
                    <span className="text-slate-500 text-sm">/month</span>
                  )}
                </div>
                <p className="text-sm text-slate-500 min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* Feature List */}
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
                      ? "bg-indigo-50 border-indigo-200"
                      : "bg-emerald-50 border-emerald-200"
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

              {plan.ctaLink ? (
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full inline-flex justify-center items-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                    plan.buttonStyle === "solid"
                      ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-200"
                      : "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={plan.target === "enterprise" ? onBookDemo : undefined}
                  className={`w-full inline-flex justify-center items-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                    plan.buttonStyle === "solid"
                      ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-200"
                      : "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {plan.target === "enterprise" && <Play className="w-4 h-4" weight="fill" />}
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                See Stability Insurance in Action
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                We'll simulate a provider outage on your staging environment and show you 
                how Cognitude auto-failovers in under 15 seconds. No risk, pure proof.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition-all"
                >
                  <Play className="w-5 h-5" weight="fill" />
                  Book a Fire Drill Simulation
                </button>
                <a
                  href="https://github.com/cognitude/shadow-mode"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600 text-slate-200 px-6 py-3 font-medium hover:bg-slate-700 transition-all"
                >
                  Try Shadow Mode First
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
                <p className="text-slate-400 text-sm mb-2">Trusted by teams protecting</p>
                <p className="text-4xl font-bold text-white mb-2">$10M+</p>
                <p className="text-slate-400 text-sm">in annual AI spend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
