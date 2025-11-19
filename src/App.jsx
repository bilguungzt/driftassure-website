import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  X,
  PlayCircle,
  CheckCircle,
  WarningCircle,
  CaretDown,
} from "@phosphor-icons/react";

// Import all components
import Hero from "./components/Hero";
import SchemaEnforcer from "./components/SchemaEnforcer";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import SavingsCalculator from "./components/SavingsCalculator";
import Pricing from "./components/Pricing";
import TechnicalFeatures from "./components/TechnicalFeatures";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";
import ContactModal from "./components/ContactModal";

// Navigation Links
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#infrastructure", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/10 bg-slate-950/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#" className="inline-flex items-center gap-2">
          <img
            src="/logos/cognitude_logo.png"
            alt="Cognitude logo"
            className="h-9 w-9 rounded-full ring-1 ring-indigo-300/40 shadow-lg shadow-indigo-500/30 object-cover"
          />
          <span className="text-sm sm:text-base font-medium tracking-tight text-slate-100">
            Cognitude
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm text-slate-200/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://app.cognitude.io/"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm text-slate-200/80 hover:text-white transition-colors"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-xs sm:text-sm font-medium px-4 py-2 shadow-lg shadow-indigo-500/30 hover:bg-slate-100 transition"
          >
            Try Cognitude
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="sm:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white"
        >
          {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-slate-950/90">
          <nav className="flex flex-col gap-4 px-6 py-4 text-slate-200/80 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.cognitude.io/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Log in
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-medium px-4 py-2"
            >
              Try Cognitude
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function ProblemSection() {
  const problems = [
    "Unpredictable Monthly Bills",
    "Malicious JSON Errors",
    "Provider Outages",
    "High Latency on Simple Tasks",
    "Wasted Spend on Caching",
    "Lack of Budget Enforcement",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % problems.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [problems.length]);

  return (
    <section
      id="problem"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column (Static) */}
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-4 font-medium">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            The "Set-and-Forget"{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Reliability Layer.
            </span>
          </h2>
          <ul className="text-lg text-slate-600 space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <span><strong>One-line change:</strong> Drop-in replacement for OpenAI base URL.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <span><strong>Full Stack:</strong> We handle routing, caching, schema validation, and fallbacks.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <span><strong>The Result:</strong> Perfect JSON responses at the lowest possible price.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <span><strong>The Win:</strong> Finance sees lower bills. Engineers see zero downtime.</span>
            </li>
          </ul>
        </div>

        {/* Right Column (Carousel) */}
        <div className="relative h-[320px] w-full flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <AnimatePresence initial={false} mode="popLayout">
            {problems.map((problem, index) => {
              // Calculate relative position
              let position =
                (index - currentIndex + problems.length) % problems.length;
              if (position > problems.length / 2) position -= problems.length;

              // Only render visible items to prevent "fly-by" during wrapping
              if (Math.abs(position) > 2.5) return null;

              const isActive = position === 0;

              return (
                <motion.div
                  key={problem}
                  layout
                  initial={{ opacity: 0, y: 240 }}
                  animate={{
                    y: position * 80, // 80px spacing
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : 0.2,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                    zIndex: isActive ? 10 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.5 },
                  }}
                  className={`absolute w-full text-center font-bold tracking-tight transition-colors duration-500 ${
                    isActive
                      ? "text-3xl sm:text-4xl text-slate-900"
                      : "text-xl sm:text-2xl text-slate-400"
                  }`}
                >
                  {problem}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState(null);

  const features = [
    {
      name: "Cost optimizations",
      cognitude: "Autopilot, multi-vendor",
      helicone: "Limited",
      langsmith: "No",
      arize: "No",
      details:
        "Cognitude automatically routes to the cheapest model that meets quality requirements.",
    },
    {
      name: "Smart routing",
      cognitude: "Provider + model aware",
      helicone: "Rules only",
      langsmith: "No",
      arize: "No",
      details:
        "Intelligent routing based on real-time latency, error rates, and cost.",
    },
    {
      name: "Budget enforcement",
      cognitude: "Hard caps + alerts",
      helicone: "Usage alerts",
      langsmith: "No",
      arize: "No",
      details: "Set strict budget limits to prevent unexpected bills.",
    },
    {
      name: "Audit-grade billing",
      cognitude: "Variance + invoices",
      helicone: "No",
      langsmith: "No",
      arize: "No",
      details: "Detailed financial reporting and invoice reconciliation.",
    },
    {
      name: "Autopilot caching",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      details: "Smart caching strategies to reduce latency and costs.",
    },
    {
      name: "Schema enforcement",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      details: "Ensure all responses adhere to your defined JSON schemas.",
    },
    {
      name: "Multi-provider",
      cognitude: true,
      helicone: false,
      langsmith: true,
      arize: true,
      details: "Seamlessly switch between OpenAI, Anthropic, and others.",
    },
    {
      name: "Real-Time Benchmarks",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: "Limited",
      details: "Live performance benchmarking across models and providers.",
    },
    {
      name: "Response Validator",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      details: "Validate model outputs against predefined rules.",
    },
    {
      name: "Enterprise SSO",
      cognitude: true,
      helicone: false,
      langsmith: true,
      arize: true,
      details: "Single Sign-On integration for enterprise security.",
    },
    {
      name: "API Monitoring",
      cognitude: true,
      helicone: true,
      langsmith: true,
      arize: true,
      details: "Comprehensive monitoring of API usage and performance.",
    },
    {
      name: "Setup Time",
      cognitude: { text: "60 sec", color: "text-emerald-500" },
      helicone: { text: "60 sec", color: "text-emerald-500" },
      langsmith: { text: "10 min", color: "text-amber-500" },
      arize: { text: "30 min", color: "text-orange-500" },
      details: "Time required to integrate and start seeing value.",
    },
  ];

  const renderCell = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle
          className="w-5 h-5 text-emerald-500 mx-auto"
          weight="regular"
        />
      ) : (
        <X className="w-5 h-5 text-rose-400/60 mx-auto" weight="regular" />
      );
    }
    if (value === "Limited") {
      return (
        <div className="group relative inline-flex items-center justify-center cursor-help w-full">
          <WarningCircle
            className="w-5 h-5 text-amber-400 mx-auto"
            weight="regular"
          />
          <span className="absolute bottom-full mb-2 hidden group-hover:block w-max px-2 py-1 bg-slate-800 text-xs text-white rounded shadow-lg z-10">
            Limited functionality
          </span>
        </div>
      );
    }
    if (typeof value === "object" && value.text) {
      return (
        <span
          className={`font-medium ${value.color} block text-center text-xs`}
        >
          {value.text}
        </span>
      );
    }
    return (
      <span className="text-slate-600 font-medium block text-center text-xs">
        {value}
      </span>
    );
  };

  return (
    <section
      id="comparison"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-600 mb-3 font-medium">
            Comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Cognitude vs Other Tools
          </h2>
          <p className="mt-4 text-base text-slate-700 max-w-2xl leading-relaxed">
            Don’t duct-tape spreadsheets, homegrown proxies, and dashboards.
            Replace them with a single autopilot designed for production
            workloads.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200">
              <th className="text-left py-5 pl-8 pr-4 font-semibold text-slate-900 w-1/3">
                Capability
              </th>
              <th className="text-center py-5 px-4 text-indigo-600 font-bold bg-indigo-50/50 w-1/6 border-x border-indigo-100">
                Cognitude
              </th>
              <th className="text-center py-5 px-4 text-slate-500 font-medium w-1/6">
                Helicone
              </th>
              <th className="text-center py-5 px-4 text-slate-500 font-medium w-1/6">
                LangSmith
              </th>
              <th className="text-center py-5 px-4 text-slate-500 font-medium w-1/6">
                Arize
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {features.map((feature, idx) => (
              <>
                <tr
                  key={feature.name}
                  onClick={() =>
                    setExpandedRow(expandedRow === idx ? null : idx)
                  }
                  className="group cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-5 pl-8 pr-4 text-slate-700 font-medium flex items-center gap-3">
                    <CaretDown
                      className={`w-3 h-3 text-slate-400 transition-transform ${
                        expandedRow === idx ? "rotate-180" : "-rotate-90"
                      }`}
                      weight="bold"
                    />
                    {feature.name}
                  </td>
                  <td className="py-5 px-4 text-center bg-indigo-50/30 border-x border-indigo-50">
                    {renderCell(feature.cognitude)}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {renderCell(feature.helicone)}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {renderCell(feature.langsmith)}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {renderCell(feature.arize)}
                  </td>
                </tr>
                {expandedRow === idx && (
                  <tr className="bg-slate-50/30">
                    <td
                      colSpan="5"
                      className="py-4 px-8 text-slate-500 text-xs leading-relaxed border-t border-slate-100 shadow-inner"
                    >
                      <span className="font-semibold text-indigo-600">
                        Detail:
                      </span>{" "}
                      {feature.details}
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Testimonials() {
  const cards = [
    {
      quote:
        "Cognitude shaved ~42% off our OpenAI bill in under a week. We didn’t touch application code—just pointed our SDKs at their proxy.",
      name: "Lena Hoff",
      role: "Staff ML Engineer, QX Labs",
      score: "5.0",
    },
    {
      quote:
        "We plugged Cognitude in front of Anthropic and immediately saw latency drop while costs fell by ~35%. It’s now part of every new service we ship.",
      name: "Diego Ramos",
      role: "Head of Platform, LambdaFlow",
      score: "4.9",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2 font-medium">
          Featured reviews
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
          Engineers saving real money
        </h2>
      </div>

      <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
        {cards.map((card, idx) => (
          <div
            key={card.name}
            className={`relative w-full sm:w-72 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl ${
              idx === 0 ? "sm:-rotate-6" : "sm:rotate-6"
            }`}
          >
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {card.quote}
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-900">
                  {card.name}
                </p>
                <p className="text-xs text-slate-500">{card.role}</p>
              </div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                ★ {card.score}
              </div>
            </div>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onTalkWithEngineer = () => {} }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24" id="cta">
      <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-purple-50 p-6 sm:p-8 shadow-xl shadow-indigo-200/40">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl opacity-70"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-600 mb-2 font-medium">
              Get started
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 text-slate-900">
              Drop-in cost optimization for your LLM stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Point your SDKs at Cognitude, set your guardrails, and watch your
              LLM bill shrink. No prompt rewrites, no vendor lock-in, no big
              migration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center flex-1 sm:flex-none rounded-full bg-slate-900 text-white text-xs sm:text-sm font-medium px-5 py-2.5 shadow-lg hover:bg-slate-800 transition"
            >
              Start Free in 2 Minutes
            </a>
            <button
              type="button"
              onClick={onTalkWithEngineer}
              className="inline-flex items-center justify-center flex-1 sm:flex-none rounded-full border border-slate-200 bg-white text-xs sm:text-sm text-slate-700 px-5 py-2.5 hover:bg-slate-50 transition"
            >
              <PlayCircle size={18} className="mr-1.5" /> Talk with an engineer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <img
              src="/logos/cognitude_logo.png"
              alt="Cognitude logo"
              className="h-8 w-8 rounded-full ring-1 ring-slate-200 object-cover"
            />
            <span className="text-sm font-medium tracking-tight text-slate-900">
              Cognitude
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-xs">
            The LLM cost-optimization autopilot for teams that ship to
            production.
          </p>
          <p className="text-[0.7rem] text-slate-400">
            © {new Date().getFullYear()} Cognitude, Inc.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-[0.75rem] text-slate-600">
          <div className="space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.18em] font-medium">
              Product
            </p>
            <a
              href="#features"
              className="block hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#infrastructure"
              className="block hover:text-indigo-600 transition-colors"
            >
              Security
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.18em] font-medium">
              Company
            </p>
            <a
              href="#"
              className="block hover:text-indigo-600 transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="block hover:text-indigo-600 transition-colors"
            >
              Changelog
            </a>
            <a
              href="#"
              className="block hover:text-indigo-600 transition-colors"
            >
              Careers
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.18em] font-medium">
              Legal
            </p>
            <a
              href="#"
              className="block hover:text-indigo-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="block hover:text-indigo-600 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="block hover:text-indigo-600 transition-colors"
            >
              DPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [contactModalVariant, setContactModalVariant] = useState(null);

  const openContactModal = (variant) => setContactModalVariant(variant);
  const closeContactModal = () => setContactModalVariant(null);
  const isContactModalOpen = contactModalVariant !== null;

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-slate-50 to-white"></div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="pointer-events-none absolute -top-64 -right-32 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),_transparent_60%)] blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-[20rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(236,72,153,0.2),_transparent_60%)] blur-3xl"></div>

      <Header />
      <main className="relative z-10">
        <Hero onBookDemo={() => openContactModal("engineer")} />
        <SchemaEnforcer />
        <ProblemSection />
        <Features />
        <SocialProof />
        <HowItWorks />
        <ComparisonTable />
        <SavingsCalculator />
        <Pricing />
        <TechnicalFeatures />
        <Testimonials />
        <FAQ onContactSupport={() => openContactModal("support")} />
        <FinalCTA onTalkWithEngineer={() => openContactModal("engineer")} />
      </main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        variant={contactModalVariant || "support"}
        onClose={closeContactModal}
      />
    </div>
  );
}

export default App;
