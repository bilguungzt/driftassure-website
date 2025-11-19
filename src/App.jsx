import { useState, useEffect, useCallback } from "react";
import {
  List,
  X,
  ArrowRight,
  PlayCircle,
  CheckCircle,
  WarningCircle,
  CaretDown,
  Calculator,
  ChartLineUp,
  Lightning,
  CurrencyDollarSimple,
} from "@phosphor-icons/react";

// Import all components
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactModal from "./components/ContactModal";
import AutopilotFlow from "./components/AutopilotFlow";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";

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
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200 bg-white/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#" className="inline-flex items-center gap-2">
          <img
            src="/logos/cognitude_logo.png"
            alt="Cognitude logo"
            className="h-9 w-9 rounded-full ring-1 ring-slate-200 shadow-sm object-cover"
          />
          <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900">
            Cognitude
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm text-slate-600 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-slate-900 transition-colors"
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
            className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-xs sm:text-sm font-medium px-4 py-2 shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition"
          >
            Try Cognitude
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="sm:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600"
        >
          {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col gap-4 px-6 py-4 text-slate-600 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.cognitude.io/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Log in
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white font-medium px-4 py-2"
            >
              Try Cognitude
            </a>
          </nav>
        </div>
      )}
    </header>
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
      cognitude: { text: "60 sec", color: "text-emerald-600" },
      helicone: { text: "60 sec", color: "text-emerald-600" },
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
          weight="bold"
        />
      ) : (
        <X className="w-5 h-5 text-rose-300 mx-auto" weight="bold" />
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
      <span className="text-slate-500 font-medium block text-center">
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
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-bold mb-2">
            Comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Cognitude vs DIY & other tools
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Don’t duct-tape spreadsheets, homegrown proxies, and dashboards.
            Replace them with a single autopilot designed for production
            workloads.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-xs sm:text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-700">
            <tr>
              <th className="text-left py-4 pl-6 pr-3 font-semibold w-1/3">
                Capability
              </th>
              <th className="text-center py-4 px-3 text-indigo-700 font-bold bg-indigo-50/50 w-1/6 border-l border-r border-indigo-100">
                Cognitude
              </th>
              <th className="text-center py-4 px-3 text-slate-500 font-medium w-1/6">
                Helicone
              </th>
              <th className="text-center py-4 px-3 text-slate-500 font-medium w-1/6">
                LangSmith
              </th>
              <th className="text-center py-4 px-3 text-slate-500 font-medium w-1/6">
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
                  className="group cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 pl-6 pr-3 text-slate-700 font-medium flex items-center gap-2">
                    <CaretDown
                      className={`w-3 h-3 text-slate-400 transition-transform ${
                        expandedRow === idx ? "rotate-180" : ""
                      }`}
                      weight="bold"
                    />
                    {feature.name}
                  </td>
                  <td className="py-4 px-3 text-center bg-indigo-50/30 border-l border-r border-indigo-50">
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
                  <tr className="bg-slate-50/50">
                    <td
                      colSpan="5"
                      className="py-3 px-6 text-slate-500 text-xs leading-relaxed border-t border-slate-100 shadow-inner"
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

function SavingsCalculator() {
  const [tokensPerMonth, setTokensPerMonth] = useState(200_000_000);
  const [callsPerMonth, setCallsPerMonth] = useState("250000");
  const [promptSize, setPromptSize] = useState("1500");
  const [projectedSavings, setProjectedSavings] = useState(0);
  const [projectedRate, setProjectedRate] = useState(0);
  const [currentCost, setCurrentCost] = useState(0);
  const [optimizedCost, setOptimizedCost] = useState(0);

  const formatTokens = (n) => {
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
    return n.toString();
  };

  const setStartupMode = () => {
    const tokens = 200_000_000;
    const prompt = 1500;
    const calls = Math.round(tokens / prompt);

    setTokensPerMonth(tokens);
    setPromptSize(prompt.toString());
    setCallsPerMonth(calls.toString());
  };

  const setEnterpriseMode = () => {
    const tokens = 10_000_000_000;
    const prompt = 2000;
    const calls = Math.round(tokens / prompt);

    setTokensPerMonth(tokens);
    setPromptSize(prompt.toString());
    setCallsPerMonth(calls.toString());
  };

  const handleTokenChange = (e) => {
    const newTokens = Number(e.target.value);
    setTokensPerMonth(newTokens);
    const prompt = Number(promptSize) || 1500;
    setCallsPerMonth(Math.round(newTokens / prompt).toString());
  };

  const handleCallsChange = (e) => {
    const newCalls = e.target.value;
    setCallsPerMonth(newCalls);
    const prompt = Number(promptSize) || 0;
    if (newCalls && prompt) {
      setTokensPerMonth(Number(newCalls) * prompt);
    }
  };

  const handlePromptChange = (e) => {
    const newPrompt = e.target.value;
    setPromptSize(newPrompt);
    const calls = Number(callsPerMonth) || 0;
    if (calls && newPrompt) {
      setTokensPerMonth(calls * Number(newPrompt));
    }
  };

  const calculate = useCallback(() => {
    const tokens = Number(tokensPerMonth) || 0;
    const costPer1k = 0.005;
    const current = (tokens / 1000) * costPer1k;

    let rate = 0.35;
    if (tokens > 1_000_000_000) rate = 0.5;
    else if (tokens > 500_000_000) rate = 0.45;
    else if (tokens > 100_000_000) rate = 0.4;

    const savings = current * rate;
    const optimized = Math.max(current - savings, 0);

    setCurrentCost(current);
    setOptimizedCost(optimized);
    setProjectedSavings(savings);
    setProjectedRate(Math.round(rate * 100));
  }, [tokensPerMonth]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <section
      id="calculator"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5">
          <Calculator className="w-4 h-4 text-indigo-600" />
          <span className="text-xs text-indigo-700 font-medium">
            Savings simulator
          </span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Model what Cognitude would save you
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-slate-600">
          Drop in your current traffic mix and see projected savings from
          routing, caching, and budget enforcement.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/50">
          <div className="flex gap-4 mb-8">
            <button
              onClick={setStartupMode}
              className="flex-1 py-2 px-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 transition-colors"
            >
              Startup
            </button>
            <button
              onClick={setEnterpriseMode}
              className="flex-1 py-2 px-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 text-sm font-medium text-indigo-700 transition-colors"
            >
              Enterprise
            </button>
          </div>

          <div className="mb-6">
            <label className="flex items-center justify-between text-xs text-slate-600 mb-2 font-medium">
              <span>Monthly tokens</span>
              <span className="text-slate-900 font-bold">
                {formatTokens(tokensPerMonth)}
              </span>
            </label>
            <input
              type="range"
              min={5_000_000}
              max={20_000_000_000}
              step={5_000_000}
              value={tokensPerMonth}
              onChange={handleTokenChange}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center justify-between text-xs text-slate-600 mb-1.5 font-medium">
                <span>Calls per month</span>
              </label>
              <input
                type="number"
                value={callsPerMonth}
                onChange={handleCallsChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                placeholder="e.g. 250000"
              />
            </div>
            <div>
              <label className="flex items-center justify-between text-xs text-slate-600 mb-1.5 font-medium">
                <span>Avg prompt size</span>
              </label>
              <input
                type="number"
                value={promptSize}
                onChange={handlePromptChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                placeholder="e.g. 1500"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={calculate}
            className="mt-8 w-full inline-flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold px-5 py-3 shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
          >
            <Lightning className="w-4 h-4 mr-2" weight="fill" /> Calculate
            savings
          </button>
        </div>

        <div className="rounded-3xl border border-indigo-100 bg-indigo-50 text-slate-900 p-6 sm:p-8 shadow-xl shadow-indigo-500/10 flex flex-col relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>

          <div className="text-center pt-2 pb-8 border-b border-indigo-200/50 mb-6 relative z-10">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">
              Avg. customer saves
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-5">
              <span className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight">
                $
                {Math.floor(projectedSavings).toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
              <span className="text-xl text-slate-500 font-medium">/mo</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-bold tracking-wide">
              <ChartLineUp className="w-4 h-4" weight="bold" />
              <span>{Math.floor(projectedRate / 4)}x ROI</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs mb-8 relative z-10">
            <div className="space-y-1">
              <p className="text-slate-500">Current cost</p>
              <p className="text-lg font-medium text-slate-700">
                $
                {currentCost.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-emerald-600 font-medium">New cost</p>
              <p className="text-lg font-bold text-emerald-600">
                $
                {optimizedCost.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-sm text-slate-600 mt-auto relative z-10">
            <div className="rounded-2xl bg-white border border-indigo-100 p-3 text-center flex flex-col items-center justify-center gap-2 shadow-sm">
              <CurrencyDollarSimple
                className="w-5 h-5 text-emerald-500"
                weight="bold"
              />
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide">
                  Budget
                </p>
                <p className="text-slate-900 font-semibold text-xs">Enforced</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-indigo-100 p-3 text-center flex flex-col items-center justify-center gap-2 shadow-sm">
              <ChartLineUp className="w-5 h-5 text-sky-500" weight="bold" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide">
                  Routing
                </p>
                <p className="text-slate-900 font-semibold text-xs">Active</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-indigo-100 p-3 text-center flex flex-col items-center justify-center gap-2 shadow-sm">
              <Lightning className="w-5 h-5 text-violet-500" weight="fill" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide">
                  Caching
                </p>
                <p className="text-slate-900 font-semibold text-xs">~38%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onTalkWithEngineer = () => {} }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24" id="cta">
      <div className="relative overflow-hidden rounded-3xl bg-[#F8FAFF] border border-slate-100 p-8 sm:p-12 shadow-xl text-center">
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Drop-in cost optimization for your LLM stack
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Point your SDKs at Cognitude, set your guardrails, and watch your
            LLM bill shrink. No prompt rewrites, no vendor lock-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold px-8 py-3.5 shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition"
            >
              Start Free in 2 Minutes
            </a>
            <button
              type="button"
              onClick={onTalkWithEngineer}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-base font-medium text-slate-700 px-8 py-3.5 hover:bg-slate-50 transition"
            >
              <PlayCircle size={20} className="mr-2 text-slate-500" /> Talk with
              an engineer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white text-slate-500 py-12 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img
            src="/logos/cognitude_logo.png"
            alt="Cognitude logo"
            className="h-8 w-8 rounded-full grayscale opacity-50"
          />
          <span className="text-slate-600 font-medium">Cognitude, Inc.</span>
        </div>
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Cognitude. All rights reserved.
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
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main>
        <Hero onBookDemo={() => openContactModal("engineer")} />
        <LogoStrip />
        <AutopilotFlow />
        <ProductShowcase />
        <ComparisonTable />
        <SavingsCalculator />
        <Testimonials />
        <Features />
        <Pricing />
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
