import { useState } from "react";
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
import ThreatSection from "./components/ThreatSection";
import TrustBadges from "./components/TrustBadges";
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
  { href: "#features", label: "Platform" },
  { href: "#pricing", label: "Pricing" },
  { href: "#infrastructure", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

function Header({ onBookDemo = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/10 bg-slate-950/90">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#" className="inline-flex items-center gap-2">
          <img
            src="/logos/cognitude_logo.png"
            alt="Cognitude logo"
            className="h-9 w-9 rounded-full ring-1 ring-indigo-300/40 shadow-lg shadow-indigo-500/30 object-cover"
          />
          <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
            Cognitude
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
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

        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://app.cognitude.io/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-300 hover:text-white transition-colors"
          >
            Log in
          </a>
          <button
            onClick={onBookDemo}
            className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-semibold px-5 py-2.5 shadow-lg shadow-white/10 hover:bg-slate-100 transition"
          >
            Book a Fire Drill
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="sm:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white"
        >
          {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-slate-950/95">
          <nav className="flex flex-col gap-4 px-6 py-4 text-slate-300 text-sm">
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemo();
              }}
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-semibold px-4 py-2 mt-2"
            >
              Book a Fire Drill
            </button>
          </nav>
        </div>
      )}
    </header>
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
    <div className="relative min-h-screen bg-slate-950 text-slate-900 font-sans">
      <Header onBookDemo={() => openContactModal("engineer")} />
      <main className="relative z-10">
        {/* Hero: New "Stability Insurance" positioning */}
        <Hero onBookDemo={() => openContactModal("engineer")} />
        
        {/* Trust badges immediately after hero */}
        <TrustBadges />
        
        {/* The Threat: June 13 narrative to agitate pain */}
        <ThreatSection onBookDemo={() => openContactModal("engineer")} />
        
        {/* Features: Reordered Four-Layer Platform */}
        <Features onBookDemo={() => openContactModal("engineer")} />
        
        {/* Social Proof */}
        <SocialProof />
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Pricing: Enterprise-focused with bifurcated CTAs */}
        <Pricing onBookDemo={() => openContactModal("engineer")} />
        
        {/* Technical Features / Security */}
        <TechnicalFeatures />
        
        {/* FAQ */}
        <FAQ onContactSupport={() => openContactModal("support")} />
        
        {/* Final CTA */}
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
