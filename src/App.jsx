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
import AgitationSection from "./components/AgitationSection";
import DefenseArchitecture from "./components/DefenseArchitecture";
import FireDrillProof from "./components/FireDrillProof";
import TrustBadges from "./components/TrustBadges";
import SocialProof from "./components/SocialProofNew";
import Features from "./components/FeaturesNew";
import Pricing from "./components/PricingNew";
import TechnicalFeatures from "./components/TechnicalFeaturesNew";
import FAQ from "./components/FAQDark";
import ContactModal from "./components/ContactModal";
import TrustedPartners from "./components/TrustedPartners";

// Navigation Links
const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#proof", label: "The Proof" },
  { href: "#pricing", label: "Pricing" },
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
    <section className="py-20 sm:py-28 bg-slate-950" id="cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Warning pulse */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
            <div className="relative w-4 h-4 rounded-full bg-red-500"></div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          The next silent model update is coming.
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Will you spend 2 weeks rewriting prompts, or will you let us fix it in
          15 seconds?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onTalkWithEngineer}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold text-lg px-8 py-4 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-400/30"
          >
            <PlayCircle size={22} weight="fill" />
            Get Protected Now
          </button>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          See your protection in action. No commitment required.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <img
              src="/logos/cognitude_logo.png"
              alt="Cognitude logo"
              className="h-8 w-8 rounded-full ring-1 ring-slate-700 object-cover"
            />
            <span className="text-sm font-medium tracking-tight text-white">
              Cognitude
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-xs">
            Stability Insurance for AI Infrastructure.
          </p>
          <p className="text-[0.7rem] text-slate-500">
            © {new Date().getFullYear()} Cognitude, Inc.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-[0.75rem] text-slate-400">
          <div className="space-y-2">
            <p className="text-slate-500 text-[0.7rem] uppercase tracking-[0.18em] font-medium">
              Product
            </p>
            <a
              href="#how-it-works"
              className="block hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#proof"
              className="block hover:text-white transition-colors"
            >
              The Proof
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-slate-500 text-[0.7rem] uppercase tracking-[0.18em] font-medium">
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
            <p className="text-slate-500 text-[0.7rem] uppercase tracking-[0.18em] font-medium">
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
    <div className="relative min-h-screen bg-slate-950 text-slate-900 font-sans">
      <Header onBookDemo={() => openContactModal("engineer")} />
      <main className="relative z-10">
        {/* Hero: New "Stability Insurance" positioning */}
        <Hero onBookDemo={() => openContactModal("engineer")} />

        {/* Trusted Partners: LLM provider integrations hub */}
        <TrustedPartners />

        {/* Section 2: Agitation - "The Era of Set and Forget AI is Over" */}
        <AgitationSection />

        {/* Section 3: Defense Architecture - "Active Protection. Non-Blocking." */}
        <DefenseArchitecture />

        {/* Section 4: Fire Drill Proof - "Don't Trust Promises. Trust the Fire Drill." */}
        <FireDrillProof onBookDemo={() => openContactModal("engineer")} />

        {/* Trust badges / Social Proof */}
        <TrustBadges />
        <SocialProof />

        {/* Features: Reordered Four-Layer Platform */}
        <Features onBookDemo={() => openContactModal("engineer")} />

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
