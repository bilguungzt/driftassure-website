import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
      "In progress (Q2 2025). We currently follow all SOC 2 controls and security best practices.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about optimizing LLM costs with
            Cognitude
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border-2 transition-all duration-300 ${
                openIndex === index
                  ? "border-purple-500 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-100 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you optimize your LLM costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Book a Demo
            </button>
            <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
              Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
