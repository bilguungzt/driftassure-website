import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  X,
  ArrowRight,
  PlayCircle,
  CheckCircle,
  WarningCircle,
  CaretDown,
} from "@phosphor-icons/react";

// Import all components
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import LogoStrip from "./components/LogoStrip";
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
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-4">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Cut Your LLM Costs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              in Half. Automatically.
            </span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            The only intelligent gateway that guarantees cost reduction and
            response reliability.
          </p>
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
                      ? "text-3xl sm:text-4xl text-white"
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
      cognitude: { text: "60 sec", color: "text-emerald-400" },
      helicone: { text: "60 sec", color: "text-emerald-400" },
      langsmith: { text: "10 min", color: "text-amber-300" },
      arize: { text: "30 min", color: "text-orange-400" },
      details: "Time required to integrate and start seeing value.",
    },
  ];

  const renderCell = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle
          className="w-5 h-5 text-emerald-400 mx-auto"
          weight="bold"
        />
      ) : (
        <X className="w-5 h-5 text-rose-500/40 mx-auto" weight="bold" />
      );
    }
    if (value === "Limited") {
      return (
        <div className="group relative inline-flex items-center justify-center cursor-help w-full">
          <WarningCircle
            className="w-5 h-5 text-amber-400 mx-auto"
            weight="bold"
          />
          <span className="absolute bottom-full mb-2 hidden group-hover:block w-max px-2 py-1 bg-slate-800 text-xs text-white rounded shadow-lg z-10">
            Limited functionality
          </span>
        </div>
      );
    }
    if (typeof value === "object" && value.text) {
      return (
        <span className={`font-medium ${value.color} block text-center`}>
          {value.text}
        </span>
      );
    }
    return (
      <span className="text-slate-300 font-medium block text-center">
        {value}
      </span>
    );
  };

  return (
    <section
      id="comparison"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
            Comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Cognitude vs DIY & other tools
          </h2>
          <p className="mt-3 text-base text-slate-200/80 max-w-2xl">
            Don’t duct-tape spreadsheets, homegrown proxies, and dashboards.
            Replace them with a single autopilot designed for production
            workloads.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur">
        <table className="min-w-full text-xs sm:text-sm">
          <thead className="border-b border-white/10 bg-white/5 text-slate-200">
            <tr>
              <th className="text-left py-4 pl-6 pr-3 font-medium w-1/3">
                Capability
              </th>
              <th className="text-center py-4 px-3 text-indigo-300 font-semibold bg-indigo-500/5 w-1/6">
                Cognitude
              </th>
              <th className="text-center py-4 px-3 text-slate-400 w-1/6">
                Helicone
              </th>
              <th className="text-center py-4 px-3 text-slate-400 w-1/6">
                LangSmith
              </th>
              <th className="text-center py-4 px-3 text-slate-400 w-1/6">
                Arize
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {features.map((feature, idx) => (
              <>
                <tr
                  key={feature.name}
                  onClick={() =>
                    setExpandedRow(expandedRow === idx ? null : idx)
                  }
                  className="group cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 pl-6 pr-3 text-slate-200 font-medium flex items-center gap-2">
                    <CaretDown
                      className={`w-3 h-3 text-slate-500 transition-transform ${
                        expandedRow === idx ? "rotate-180" : ""
                      }`}
                      weight="bold"
                    />
                    {feature.name}
                  </td>
                  <td className="py-4 px-3 text-center bg-indigo-500/5 shadow-[inset_0_0_20px_rgba(99,102,241,0.03)]">
                    {renderCell(feature.cognitude)}
                  </td>
                  <td className="py-4 px-3 text-center">
                    {renderCell(feature.helicone)}
                  </td>
                  <td className="py-4 px-3 text-center">
                    {renderCell(feature.langsmith)}
                  </td>
                  <td className="py-4 px-3 text-center">
                    {renderCell(feature.arize)}
                  </td>
                </tr>
                {expandedRow === idx && (
                  <tr className="bg-white/[0.02]">
                    <td
                      colSpan="5"
                      className="py-3 px-6 text-slate-400 text-xs leading-relaxed border-t border-white/5 shadow-inner"
                    >
                      <span className="font-semibold text-indigo-300">
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
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
          Featured reviews
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Engineers saving real money
        </h2>
      </div>

      <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
        {cards.map((card, idx) => (
          <div
            key={card.name}
            className={`relative w-full sm:w-72 rounded-2xl border border-white/20 bg-slate-950/90 p-6 shadow-2xl backdrop-blur ${
              idx === 0 ? "sm:-rotate-6" : "sm:rotate-6"
            }`}
          >
            <p className="text-sm text-slate-100 leading-relaxed mb-4">
              {card.quote}
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-100">
                  {card.name}
                </p>
                <p className="text-xs text-slate-400">{card.role}</p>
              </div>
              <div className="flex items-center gap-1 text-amber-300 text-xs">
                ★ {card.score}
              </div>
            </div>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onTalkWithEngineer = () => {} }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24" id="cta">
      <div className="relative overflow-hidden rounded-3xl border border-indigo-400/40 bg-gradient-to-r from-indigo-600/40 via-slate-950 to-fuchsia-600/40 p-6 sm:p-8 shadow-xl shadow-indigo-500/40">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/40 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/40 blur-3xl opacity-70"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-100/90 mb-2">
              Get started
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
              Drop-in cost optimization for your LLM stack
            </h2>
            <p className="text-sm sm:text-base text-slate-100/90 max-w-xl">
              Point your SDKs at Cognitude, set your guardrails, and watch your
              LLM bill shrink. No prompt rewrites, no vendor lock-in, no big
              migration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center flex-1 sm:flex-none rounded-full bg-white text-slate-900 text-xs sm:text-sm font-medium px-5 py-2.5 shadow-lg shadow-slate-900/40 hover:bg-slate-100 transition"
            >
              Start Free in 2 Minutes
            </a>
            <button
              type="button"
              onClick={onTalkWithEngineer}
              className="inline-flex items-center justify-center flex-1 sm:flex-none rounded-full border border-white/20 bg-white/5 text-xs sm:text-sm text-slate-50 px-5 py-2.5 hover:bg-white/10 transition"
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
    <footer className="border-t border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <img
              src="/logos/cognitude_logo.png"
              alt="Cognitude logo"
              className="h-8 w-8 rounded-full ring-1 ring-indigo-300/40 object-cover"
            />
            <span className="text-sm font-medium tracking-tight text-slate-100">
              Cognitude
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-xs">
            The LLM cost-optimization autopilot for teams that ship to
            production.
          </p>
          <p className="text-[0.7rem] text-slate-500">
            © {new Date().getFullYear()} Cognitude, Inc.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-[0.75rem] text-slate-300/85">
          <div className="space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.18em]">
              Product
            </p>
            <a
              href="#features"
              className="block hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#infrastructure"
              className="block hover:text-white transition-colors"
            >
              Security
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.18em]">
              Company
            </p>
            <a href="#" className="block hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Changelog
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Careers
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.18em]">
              Legal
            </p>
            <a href="#" className="block hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="block hover:text-white transition-colors">
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
    <div className="relative min-h-screen bg-[#020617] text-white font-sans">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#020617] via-slate-950 to-[#020617]"></div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.5) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="pointer-events-none absolute -top-64 -right-32 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.5),_transparent_60%)] blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-[20rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(236,72,153,0.35),_transparent_60%)] blur-3xl"></div>

      <Header />
      <main className="relative z-10">
        <Hero onBookDemo={() => openContactModal("engineer")} />
        <LogoStrip />
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
