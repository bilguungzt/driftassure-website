import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

// Import all components
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import SavingsCalculator from "./components/SavingsCalculator";
import Pricing from "./components/Pricing";
import TechnicalFeatures from "./components/TechnicalFeatures";
import FAQ from "./components/FAQ";

// Navigation Links
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#calculator", label: "Calculator" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Cognitude
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Log in
              </a>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function ProblemSection() {
  const painPoints = [
    {
      emoji: "💸",
      title: "Wasted Spend",
      description: "Using GPT-4-Codex for simple tasks wastes 70% of budget",
      stat: "70% wasted",
    },
    {
      emoji: "🔒",
      title: "Vendor Lock-in",
      description: "One provider = no leverage when prices spike",
      stat: "1 provider = Risk",
    },
    {
      emoji: "🎲",
      title: "No Visibility",
      description: "Track costs after the fact, can't prevent waste",
      stat: "Reactive not proactive",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your LLM Bill Is{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Out of Control
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-red-900/20 hover:border-red-500/40 rounded-xl p-6 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{pain.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {pain.title}
              </h3>
              <p className="text-gray-400 mb-4">{pain.description}</p>
              <div className="text-red-400 font-semibold">{pain.stat}</div>
            </div>
          ))}
        </div>

        <div className="text-center bg-red-900/10 border border-red-900/20 rounded-xl p-8">
          <p className="text-xl text-gray-300 mb-6">
            "Every AI startup: LLM bill doubled last quarter, no idea how to
            optimize it"
          </p>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
            Sound familiar?
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const features = [
    {
      name: "⭐ Autopilot Routing",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "Auto saves 30-40%",
    },
    {
      name: "⭐ Budget Enforcement",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "Prevents bill shock",
    },
    {
      name: "⭐ Audit-Grade Billing",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "Trust your invoices",
    },
    {
      name: "⭐ Public Benchmarks",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "Real production data",
    },
    {
      name: "⭐ Schema Enforcement",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "No parsing errors",
    },
    {
      name: "Basic Monitoring",
      cognitude: true,
      helicone: true,
      langsmith: true,
      arize: true,
      note: "",
    },
    {
      name: "Usage Analytics",
      cognitude: true,
      helicone: true,
      langsmith: true,
      arize: true,
      note: "",
    },
    {
      name: "Request Logging",
      cognitude: true,
      helicone: true,
      langsmith: true,
      arize: false,
      note: "",
    },
    {
      name: "Multi-Provider",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "",
    },
    {
      name: "Intelligent Caching",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "",
    },
    {
      name: "Response Validation",
      cognitude: true,
      helicone: false,
      langsmith: false,
      arize: false,
      note: "",
    },
    {
      name: "Rate Limiting",
      cognitude: true,
      helicone: true,
      langsmith: false,
      arize: false,
      note: "",
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Engineering Teams Choose Cognitude
          </h2>
          <p className="text-xl text-gray-600">
            We're the optimization + prevention + transparency layer, not just
            monitoring.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 bg-purple-50 font-semibold text-purple-600">
                  Cognitude
                </th>
                <th className="text-center py-4 px-4 font-semibold">
                  Helicone
                </th>
                <th className="text-center py-4 px-4 font-semibold">
                  LangSmith
                </th>
                <th className="text-center py-4 px-4 font-semibold">Arize</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    feature.name.startsWith("⭐") ? "bg-purple-50/30" : ""
                  }`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{feature.name}</span>
                      {feature.note && (
                        <span className="text-xs text-purple-600 ml-2">
                          {feature.note}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-center py-3 px-4 bg-purple-50/50">
                    {feature.cognitude ? (
                      <span className="text-green-500 text-2xl">✅</span>
                    ) : (
                      <span className="text-red-500 text-2xl">❌</span>
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
                    {feature.helicone ? (
                      <span className="text-green-500 text-2xl">✅</span>
                    ) : (
                      <span className="text-red-500 text-2xl">❌</span>
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
                    {feature.langsmith ? (
                      <span className="text-green-500 text-2xl">✅</span>
                    ) : (
                      <span className="text-red-500 text-2xl">❌</span>
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
                    {feature.arize ? (
                      <span className="text-green-500 text-2xl">✅</span>
                    ) : (
                      <span className="text-red-500 text-2xl">❌</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center bg-purple-100 rounded-xl p-6">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Helicone = monitoring.</span> We
            built optimization + prevention. Use both for maximum results.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Cut OpenAI bill by $1,200 first week. Autopilot just works. Best ROI tool this year.",
      author: "Sarah Chen",
      role: "CTO, TechFlow AI",
    },
    {
      quote:
        "PREVENTS overspending vs just showing damage. Budget caps saved us from $3K bug bill. Instant ROI.",
      author: "Marcus Rodriguez",
      role: "Founder, DataStream Analytics",
    },
    {
      quote:
        "Schema enforcement = game-changer. Used to lose 15% responses to parsing. Now zero. Auto-fixes everything.",
      author: "Priya Patel",
      role: "VP Engineering, InsightBot",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by AI Engineering Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-gray-600 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center gap-8 mb-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-12 bg-gray-200 rounded opacity-50 hover:opacity-100 transition-opacity"
              ></div>
            ))}
          </div>
          <div className="flex justify-center gap-12 text-gray-600">
            <div>
              <span className="text-3xl font-bold text-gray-900">847</span>{" "}
              teams
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-900">$2.4M</span>{" "}
              saved
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-900">4.9/5</span>{" "}
              rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Start Saving in 60 Seconds
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Join 847 teams cutting LLM costs 30-50% automatically
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <div className="text-3xl mb-4">👤</div>
            <h3 className="text-white font-semibold mb-2">1. Sign Up</h3>
            <p className="text-gray-300">
              Get API key instantly. No card required.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-white font-semibold mb-2">2. Replace URL</h3>
            <p className="text-gray-300">One line change. 60 seconds.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <div className="text-3xl mb-4">📉</div>
            <h3 className="text-white font-semibold mb-2">3. Save Money</h3>
            <p className="text-gray-300">Watch costs drop automatically.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 text-lg">
            Start Free Trial →
          </button>
          <button className="px-8 py-4 border-2 border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 text-lg">
            Book a Demo
          </button>
        </div>

        <div className="text-gray-400">
          No credit card • Cancel anytime • 14-day guarantee
        </div>
        <div className="mt-4 text-gray-300">
          <span className="inline-block mr-6">⚡ Avg setup: 2 min</span>
          <span className="inline-block">💰 Avg savings: $1,847/mo</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Cognitude
            </div>
            <p className="text-gray-400 mb-4">
              LLM Cost Automation & FinOps Platform
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  System Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Public Benchmarks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2025 Cognitude. Built to save you money on LLMs.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <Features />
        <ComparisonTable />
        <SavingsCalculator />
        <Pricing />
        <TechnicalFeatures />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
