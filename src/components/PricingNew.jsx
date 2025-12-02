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
    tagline: "Startups & Dev Teams",
    price: "$499",
    period: "/mo",
    valueStatement: "Stop debugging. Start shipping.",
    icon: Rocket,
    color: "indigo",
    features: [
      { text: "Semantic Repair", highlight: true },
      { text: "Token Drift Alerts" },
      { text: "Shadow Mode Testing", highlight: true },
      { text: "Slack Notifications" },
      { text: "7-day history" },
    ],
    cta: "Start Free Trial",
    ctaStyle: "outline",
  },
  {
    id: "insurance",
    name: "Stability Insurance",
    tagline: "Mission-Critical AI",
    qualifier: "$100k+ LLM Spend",
    price: "$5,000",
    period: "/mo",
    valueStatement: "We guarantee uptime.",
    icon: ShieldCheck,
    color: "emerald",
    popular: true,
    features: [
      { text: "Baseline Locking", highlight: true },
      { text: "15s Auto-Failover", highlight: true },
      { text: "Financial SLA", highlight: true },
      { text: "Dedicated Engineer" },
      { text: "Quarterly Fire Drills" },
      { text: "90-day history" },
      { text: "4-hour response" },
    ],
    cta: "Book Assessment",
    ctaStyle: "solid",
  },
];

const colorClasses = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    icon: "text-indigo-400",
    badge: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    button:
      "border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500",
    check: "text-indigo-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    button:
      "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/25",
    check: "text-emerald-400",
  },
};

export default function Pricing({ onBookDemo = () => {} }) {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-4">
            <ShieldCheck size={16} weight="fill" className="text-indigo-400" />
            <span className="text-xs font-medium tracking-wide text-slate-300 uppercase">
              Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Scale with Confidence.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            From first agent to enterprise protection.
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
                className={`relative rounded-3xl p-8 transition-all ${
                  tier.popular
                    ? "border-2 border-emerald-400/50 bg-gradient-to-b from-slate-800 via-slate-800 to-emerald-950/30 shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-500/20"
                    : "border border-slate-700 bg-slate-900 hover:border-slate-600"
                }`}
                style={
                  tier.popular
                    ? {
                        backgroundImage:
                          "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 50%, rgba(16, 185, 129, 0.02) 100%)",
                      }
                    : {}
                }
              >
                {/* Premium metallic shine effect for Insurance tier */}
                {tier.popular && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-shimmer"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                )}

                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/30 border border-emerald-400/50">
                      <Lightning size={14} weight="fill" />
                      Enterprise Protection
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        tier.popular
                          ? "bg-emerald-500/10 border border-emerald-500/30"
                          : colors.bg + " border " + colors.border
                      } flex items-center justify-center`}
                    >
                      <Icon
                        size={24}
                        weight="duotone"
                        className={
                          tier.popular ? "text-emerald-400" : colors.icon
                        }
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          tier.popular ? "text-white" : "text-white"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          tier.popular ? "text-slate-400" : "text-slate-400"
                        }`}
                      >
                        {tier.tagline}
                      </p>
                    </div>
                  </div>

                  {tier.qualifier && (
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        tier.popular
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : colors.badge
                      } mb-4`}
                    >
                      {tier.qualifier}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`text-4xl sm:text-5xl font-bold ${
                        tier.popular ? "text-white" : "text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-lg ${
                        tier.popular ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  {tier.pricingNote && (
                    <p
                      className={`text-sm italic ${
                        tier.popular ? "text-emerald-400/80" : "text-slate-400"
                      }`}
                    >
                      {tier.pricingNote}
                    </p>
                  )}

                  <p
                    className={`mt-3 font-medium ${
                      tier.popular ? "text-slate-300" : "text-slate-300"
                    }`}
                  >
                    {tier.valueStatement}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className={`flex-shrink-0 ${
                          tier.popular ? "text-emerald-400" : colors.check
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          feature.highlight
                            ? "font-semibold text-white"
                            : "text-slate-300"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={onBookDemo}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold px-6 py-3.5 transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500"
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

        {/* Enterprise Callout - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl bg-slate-900 p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Buildings size={24} className="text-slate-400" />
              <div>
                <h3 className="font-bold text-white">Enterprise</h3>
                <p className="text-sm text-slate-400">
                  SOC 2, HIPAA, on-prem, custom SLAs
                </p>
              </div>
            </div>
            <button
              onClick={onBookDemo}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 font-semibold px-5 py-2.5 text-sm hover:bg-slate-100 transition-colors"
            >
              Contact Sales
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>
        </motion.div>

        {/* Value Props - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-8 text-center text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Code size={16} className="text-indigo-400" />
            <span>5-min setup</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-emerald-400" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Handshake size={16} className="text-amber-400" />
            <span>Money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
