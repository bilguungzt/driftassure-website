import { ArrowRight } from "@phosphor-icons/react";

function Hero({ onBookDemo = () => {} }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#F8FAFF] text-slate-900">
      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 flex flex-col items-center text-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <h1 className="text-[clamp(64px,6vw,110px)] font-bold tracking-tight leading-[0.95] text-black font-sans max-w-[920px] mx-auto">
                  Stop paying GPT-5.1 prices for{" "}
                  <span className="whitespace-nowrap">grep.</span>
                </h1>
                <p className="text-[clamp(18px,3.4vw,36px)] font-semibold text-slate-900 max-w-4xl mx-auto leading-tight tracking-tight mt-3">
                  Cognitude Autopilot classifies every prompt in real-time,
                  routes simple ones to 10× cheaper models, enforces your JSON
                  schemas with automatic retries, and caches everything.
                </p>
                <p className="text-[clamp(14px,2.6vw,20px)] font-normal text-slate-600 max-w-3xl mx-auto leading-normal mt-2">
                  Average 43% savings · Zero code changes · Zero JSON parsing
                  errors since launch
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-4">
              <button
                className="inline-flex items-center justify-center rounded-full bg-primary text-white text-base font-semibold px-8 py-3 shadow-lg shadow-primary/20 hover:bg-primary/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 transition-transform"
                aria-label="Start saving in two minutes"
              >
                Start Saving in 2 Minutes
              </button>
              <button
                type="button"
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full text-base font-medium text-slate-700 px-6 py-3 hover:text-primary transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              >
                See Autopilot in Action{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
