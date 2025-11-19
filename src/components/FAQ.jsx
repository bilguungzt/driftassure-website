import { useState } from "react";
import { Plus, Minus, ChatCircleDots } from "@phosphor-icons/react";

const faqs = [
  {
    question: "How does Cognitude save money?",
    answer:
      "Autopilot routing (30-40%), caching (20-30%), multi-provider optimization (10-20%). Combined average savings: 30-50% reduction in LLM costs.",
  },
  {
    question: "Will this break my code?",
    answer:
      "No. It's a drop-in replacement for OpenAI. Just change the base_url and add your API key. The entire setup takes 60 seconds.",
  },
  {
    question: "What if Cognitude goes down?",
    answer:
      "We maintain 99.9% uptime with automatic failover to your provider. If our service is unavailable, requests route directly to your LLM provider with zero downtime.",
  },
  {
    question: "Do you store prompts/responses?",
    answer:
      "We store metadata only. Content is cached if you enable it (encrypted). You have complete control over retention policies.",
  },
  {
    question: "How is this different from Helicone?",
    answer:
      "Helicone shows you the problem (monitoring). We solve the problem (optimization + prevention). We actively reduce costs, not just track them.",
  },
  {
    question: "Which models and providers are supported?",
    answer:
      "OpenAI (all models), Anthropic (Claude), Google (Gemini), Groq. We add new providers monthly based on customer demand.",
  },
  {
    question: "Does this work with LangChain/LlamaIndex?",
    answer:
      "Yes. Any framework that uses the OpenAI API format works seamlessly with Cognitude.",
  },
  {
    question: "Do you offer migration help?",
    answer:
      "Yes. Free migration support including a 30-minute onboarding call. Most teams are fully migrated in under 30 minutes.",
  },
  {
    question: "How do budget caps work?",
    answer:
      "Set a monthly limit (e.g., $1,000). Get alerts at 50%, 75%, and 90%. At 100%, requests are blocked with a clear error message.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "Flat-rate monthly subscription. No hidden fees. For usage above plan limits: $0.20 per 100K tokens.",
  },
  {
    question: "Can I see actual savings?",
    answer:
      "Yes. Our dashboard shows actual spend vs. what you would have spent without routing, giving you real-time savings metrics.",
  },
  {
    question: "Are you SOC 2 compliant?",
    answer:
      "SOC 2 Type II in progress (Q2 2025). Today we enforce SOC 2 controls: private VPC, encrypted logs, SSO + SCIM, and audit trails.",
  },
  {
    question: "What's the latency overhead?",
    answer:
      "Cache hits add <80ms p95. When routing between providers we keep additional latency under 120ms with regional edges and connection pooling.",
  },
  {
    question: "Can we self-host Cognitude?",
    answer:
      "Enterprise tier includes private VPC or on-prem install with dedicated support, terraform modules, and 24/7 pager rotation.",
  },
  {
    question: "How does Cognitude handle prompt data?",
    answer:
      "We store metadata (timestamps, model, tokens). Full prompts/responses are optional and encrypted if caching is enabled. You can set TTL to 0 for zero retention.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section
      id="faq"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-24"
    >
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Header & Support */}
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200/80">
            FAQ
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Answers for engineering teams
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            If you’re building on OpenAI, Anthropic, Groq, or Mistral today,
            Cognitude can usually be added in under an hour.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <ChatCircleDots
                  className="w-5 h-5 text-emerald-400"
                  weight="fill"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Still unsure?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Drop us a line and we’ll walk through your architecture and
                  estimate savings for your exact workload.
                </p>
                <a
                  href="#contact"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  Contact Support &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-2 space-y-3">
          {visibleFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`group rounded-xl border transition-all duration-200 ${
                openIndex === index
                  ? "bg-slate-900 border-white/10 shadow-lg shadow-indigo-500/5"
                  : "bg-slate-950/30 border-white/5 hover:border-white/10 hover:bg-slate-900/50"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    openIndex === index
                      ? "text-white"
                      : "text-slate-300 group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <Plus
                    className={`w-4 h-4 ${
                      openIndex === index
                        ? "text-indigo-400"
                        : "text-slate-500 group-hover:text-slate-400"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-0 text-sm text-slate-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full mt-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors border border-white/5 hover:border-white/10 rounded-xl bg-slate-950/30 hover:bg-slate-900/50"
          >
            {showAll ? "Show less" : `Show ${faqs.length - 5} more questions`}
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
