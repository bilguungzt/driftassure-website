import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Lightning,
  Wrench,
  ArrowRight,
  Rocket,
  Buildings,
  Code,
  Fingerprint,
  ArrowsClockwise,
  Handshake,
  Clock,
} from "@phosphor-icons/react";

const tiers = [
  {
    id: "build",
    name: "Build",
    tagline: "For Startups & Dev Teams",
    price: "$499",
    period: "/month",
    description: "Stop debugging JSON errors. Start shipping features.",
    valueStatement: "Stop debugging JSON errors.",
    icon: Rocket,
    color: "indigo",
    features: [
      {
        text: "3-Tier Semantic Repair",
        description: "Fix malformed tool calls automatically",
        highlight: true,
      },
      {
        text: "Token Drift Detection",
        description: "Basic alerts when costs spike",
      },
      {
        text: "Shadow Mode",
        description: "Test changes safely in production",
        highlight: true,
      },
      {
        text: "Slack Notifications",
        description: "Real-time alerts to your team",
      },
      {
        text: "7-day baseline history",
        description: "Track behavioral changes over time",
      },
    ],
    cta: "Start Free Trial",
    ctaStyle: "outline",
  },
  {
    id: "insurance",
    name: "Stability Insurance",
    tagline: "For Mission-Critical AI Products",
    qualifier: "$100k+ LLM Spend",
    price: "$5,000",
    period: "/month",
    pricingNote: "Risk-Adjusted Pricing",
    description: "We guarantee your uptime. You sleep at night.",
    valueStatement: "We guarantee your uptime.",
    icon: ShieldCheck,
    color: "emerald",
    popular: true,
    features: [
      {
        text: "Baseline Locking",
        description: 'We fingerprint your "working" state and enforce it',
        highlight: true,
      },
      {
        text: "15-Second Auto-Failover",
        description: "Cross-provider redundancy (OpenAI ↔ Anthropic)",
        highlight: true,
      },
      {
        text: "Financial Guarantee",
        description: "SLA-backed stability performance",
        highlight: true,
      },
      {
        text: "Dedicated Stability Engineer",
        description: "We manage the fallback logic for you",
      },
      {
        text: "Quarterly Fire Drills",
        description: "Chaos testing to validate your protection",
      },
      {
        text: "90-day baseline history",
        description: "Deep historical analysis",
      },
      {
        text: "4-hour response SLA",
        description: "Priority support when it matters",
      },
    ],
    cta: "Book an Insurance Assessment",
    ctaStyle: "solid",
  },
];

const colorClasses = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    icon: "text-indigo-500",
    badge: "bg-indigo-100 text-indigo-700",
    button: "border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    check: "text-indigo-600",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: "text-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    button: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/25",
    check: "text-emerald-600",
  },
};

export default function Pricing({ onBookDemo = () => {} }) {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <ShieldCheck size={16} weight="fill" className="text-slate-600" />
            <span className="text-xs font-medium tracking-wide text-slate-600 uppercase">
              Pricing & Plans
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Scale with Confidence. Insure against Chaos.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're debugging your first agent or protecting $10M in ARR,
            we have the reliability layer you need.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {tiers.map((tier, index) => {
            const colors = colorClasses[tier.color];
            const Icon = tier.icon;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-3xl border-2 p-8 transition-all ${
                  tier.popular
                    ? "border-emerald-500 bg-gradient-to-b from-emerald-50/50 to-white shadow-xl shadow-emerald-100"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                      <Lightning size={14} weight="fill" />
                      Recommended
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <Icon size={24} weight="duotone" className={colors.icon} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                      <p className="text-sm text-slate-500">{tier.tagline}</p>
                    </div>
                  </div>

                  {tier.qualifier && (
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} mb-4`}>
                      {tier.qualifier}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-slate-900">
                      {tier.price}
                    </span>
                    <span className="text-slate-500 text-lg">{tier.period}</span>
                  </div>
                  
                  {tier.pricingNote && (
                    <p className="text-sm text-slate-500 italic">{tier.pricingNote}</p>
                  )}

                  <p className="text-slate-600 mt-3 font-medium">
                    {tier.valueStatement}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className={`flex-shrink-0 mt-0.5 ${colors.check}`}
                      />
                      <div>
                        <span className={`block text-sm ${feature.highlight ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                          {feature.text}
                        </span>
                        <span className="text-xs text-slate-500">
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={onBookDemo}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold px-6 py-3.5 transition-all ${
                    tier.ctaStyle === "solid"
                      ? colors.button
                      : `border-2 ${colors.button}`
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={18} weight="bold" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl bg-slate-900 p-8 sm:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Buildings size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Enterprise & Regulated Industries
                </h3>
                <p className="text-slate-400 text-sm max-w-xl">
                  Volume discounts, SOC 2 + HIPAA + PCI compliance, on-prem/VPC deployment,
                  SSO/SCIM, custom SLAs up to 99.99%, and dedicated account team.
                </p>
              </div>
            </div>
            <button
              onClick={onBookDemo}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-100 transition-colors flex-shrink-0"
            >
              Contact Sales
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid sm:grid-cols-3 gap-6 text-center"
        >
          <div className="p-6">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-3">
              <Code size={20} className="text-indigo-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">5-Minute Setup</h4>
            <p className="text-sm text-slate-500">Change one line of code. We handle the rest.</p>
          </div>
          <div className="p-6">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
              <Clock size={20} className="text-emerald-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">14-Day Free Trial</h4>
            <p className="text-sm text-slate-500">No credit card required. Full feature access.</p>
          </div>
          <div className="p-6">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
              <Handshake size={20} className="text-amber-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Money-Back Guarantee</h4>
            <p className="text-sm text-slate-500">If we don't save you money, you don't pay.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
