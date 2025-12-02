import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChatCircleDots, Warning } from "@phosphor-icons/react";

const faqs = [
  {
    category: "Technical Objections",
    questions: [
      {
        question: "Why can't I just pin the model version (e.g., gpt-4-0613)?",
        answer:
          'You can, and you should. But providers silently update "pinned" models for safety and speed on the backend without changing the version number. Plus, old versions are deprecated and shutdown with little notice. Version pinning is a seatbelt; Cognitude is the airbag.',
        highlight: true,
      },
      {
        question: "What if the backup model gives the wrong answer?",
        answer:
          "We don't just route traffic blindly. We run a 'dry run' comparison against your locked baseline. If the backup model deviates more than 10% from your expected logic pattern, we block the failover and alert you immediately. We never auto-switch to a degraded state.",
        highlight: true,
      },
      {
        question: "Is this just a wrapper/proxy?",
        answer:
          "No. Proxies are passive—they just route traffic. Cognitude is Active Insurance. We intercept payloads, repair JSON in <200ms, and statefully fingerprint your application's behavior to detect drift that logs miss.",
      },
      {
        question: "What is the latency impact?",
        answer:
          'For the Insurance Tier, we use a hybrid "Fast+Slow" signal architecture. Fast signals (length/structure) are checked in <1ms via Redis. Deep semantic analysis happens asynchronously. Your user feels zero delay.',
      },
      {
        question: "Will this break my existing code?",
        answer:
          "No. It's a drop-in replacement for OpenAI. Just change the base_url and add your API key. The entire setup takes under 5 minutes. We use smart feature detection to support all SDK features automatically.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "Do you store prompts/responses?",
        answer:
          "We store metadata only (timestamps, model, tokens). Content is cached if you enable it (encrypted AES-256). You have complete control over retention policies, including zero-retention mode.",
      },
      {
        question: "Are you SOC 2 compliant?",
        answer:
          "SOC 2 Type II in progress (Q2 2025). Today we enforce SOC 2 controls: private VPC, encrypted logs, SSO + SCIM, and audit trails. Enterprise tier includes HIPAA and PCI compliance.",
      },
      {
        question: "What if Cognitude goes down?",
        answer:
          "We maintain 99.9% uptime with automatic failover. If our service is unavailable, requests route directly to your LLM provider with zero downtime. We're the safety net, not the single point of failure.",
      },
    ],
  },
  {
    category: "Pricing & ROI",
    questions: [
      {
        question: "How do you justify the $5,000/month price?",
        answer:
          "The Insurance tier is priced as risk mitigation, not hosting costs. A single production outage costs enterprises $50k-$500k in revenue and engineering time. We prevent that in 15 seconds. The math works out to roughly 10:1 ROI for mission-critical AI products.",
      },
      {
        question: "What's included in the free trial?",
        answer:
          "Full access to the Build tier for 14 days. No credit card required. You can run Shadow Mode to see exactly what we would have caught and repaired before committing.",
      },
      {
        question: "Can I see actual savings before I commit?",
        answer:
          "Yes. Shadow Mode shows you a real-time dashboard of: (1) JSON errors we would have repaired, (2) drift we would have detected, and (3) estimated cost savings. Make your decision based on data, not promises.",
      },
    ],
  },
  {
    category: "Integration",
    questions: [
      {
        question: "Which models and providers are supported?",
        answer:
          "OpenAI (all models), Anthropic (Claude 3.x), Google (Gemini), Groq, and Mistral. We add new providers monthly based on customer demand. Auto-failover works across any combination.",
      },
      {
        question: "Does this work with LangChain/LlamaIndex/CrewAI?",
        answer:
          "Yes. Any framework that uses the OpenAI API format works seamlessly with Cognitude. We've tested extensively with LangChain, LlamaIndex, CrewAI, AutoGen, and custom agent frameworks.",
      },
      {
        question: "Can we self-host Cognitude?",
        answer:
          "Enterprise tier includes private VPC or on-prem install with dedicated support, terraform modules, and 24/7 pager rotation. We can deploy in your AWS/GCP/Azure environment.",
      },
    ],
  },
];

export default function FAQ({ onContactSupport = () => {} }) {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIdx, questionIdx) => {
    const key = `${categoryIdx}-${questionIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 mb-6">
            <ChatCircleDots
              size={16}
              weight="fill"
              className="text-indigo-400"
            />
            <span className="text-xs font-medium tracking-wide text-slate-300 uppercase">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Questions Smart CTOs Ask
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We've anticipated the objections. Here are the answers.
          </p>
        </Motion.div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqs.map((category, categoryIdx) => (
            <Motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.questions.map((item, questionIdx) => {
                  const key = `${categoryIdx}-${questionIdx}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={questionIdx}
                      className={`rounded-xl border transition-all ${
                        item.highlight
                          ? "border-amber-500/30 bg-amber-500/10"
                          : "border-slate-700 bg-slate-900"
                      } ${
                        isOpen
                          ? "shadow-lg shadow-black/20"
                          : "hover:border-slate-600"
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(categoryIdx, questionIdx)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="font-medium text-white flex items-center gap-2">
                          {item.highlight && (
                            <Warning
                              size={18}
                              weight="fill"
                              className="text-amber-400"
                            />
                          )}
                          {item.question}
                        </span>
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            isOpen
                              ? "bg-indigo-500 text-white"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={14} weight="bold" />
                          ) : (
                            <Plus size={14} weight="bold" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <Motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              <p className="text-slate-400 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">
            Still have questions? Our engineers are happy to talk.
          </p>
          <button
            onClick={onContactSupport}
            className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
          >
            <ChatCircleDots size={20} weight="fill" />
            Talk to an Engineer
          </button>
        </Motion.div>
      </div>
    </section>
  );
}
