import { ArrowRight, ShieldCheck, PlayCircle } from "@phosphor-icons/react";

function Hero({ onBookDemo = () => {} }) {
  return (
    <section className="relative bg-[#F8FAFF] text-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-[120px] leading-[0.9] font-['Inter_Tight',sans-serif] font-medium text-black tracking-tighter mb-8 sm:mb-12">
          Stop paying GPT-4 prices for&nbsp;grep.
        </h1>

        {/* Subhead */}
        <p className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.2] text-slate-900 tracking-tight max-w-6xl mx-auto mb-6">
          Cognitude Autopilot classifies every prompt in real-time, routes
          simple ones to 10× cheaper models, enforces your JSON schemas with
          automatic retries, and caches everything.
        </p>

        {/* Savings Stats */}
        <div className="text-sm sm:text-base text-slate-500 font-medium mb-8 max-w-2xl mx-auto space-y-1">
          <p>
            <span className="text-emerald-600 font-bold">$0 → $400/month</span>{" "}
            average savings for customers under 10k/month spend
          </p>
          <p>
            <span className="text-emerald-600 font-bold">$2k+/month</span> saved
            for customers over 100k/month spend
          </p>
        </div>

        {/* Third Line */}
        <p className="text-lg sm:text-2xl lg:text-3xl font-normal text-slate-600 mb-12">
          Average 43% savings · Zero code changes · Zero JSON parsing errors
          since launch
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-24">
          <button className="inline-flex items-center justify-center rounded-full bg-[#6366f1] text-white text-xl font-semibold px-10 py-5 shadow-xl shadow-indigo-600/20 hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-200 min-w-[280px]">
            Start Saving in 2 Minutes
          </button>
          <button
            type="button"
            onClick={onBookDemo}
            className="inline-flex items-center justify-center rounded-full text-xl font-medium text-slate-600 px-10 py-5 hover:text-slate-900 hover:bg-slate-50 transition-all group"
          >
            See Autopilot in Action{" "}
            <ArrowRight
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              weight="bold"
            />
          </button>
        </div>

        {/* Schema Enforcer Micro-Section */}
        <div className="max-w-5xl mx-auto mt-12 mb-20">
          <div className="flex flex-col items-center mb-10">
            <ShieldCheck
              className="w-20 h-20 text-slate-900 mb-6"
              weight="fill"
            />
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              The Schema Enforcer™
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed">
              We don’t just validate responses.{" "}
              <span className="font-bold text-slate-900">We fix them.</span>
              <br />
              If the LLM returns invalid JSON → we automatically retry with a
              corrective prompt until it’s perfect.
              <br />
              Your app never sees broken data. Ever.
            </p>
          </div>

          {/* Code Comparison */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Before */}
            <div className="rounded-2xl border border-red-100 bg-red-50/30 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
                  Before Cognitude
                </span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-200"></div>
                  <div className="w-3 h-3 rounded-full bg-red-200"></div>
                </div>
              </div>
              <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                <code className="block text-slate-700">
                  <span className="text-purple-600">try</span>:<br />
                  {"  "}data = response.
                  <span className="text-blue-600">parse</span>(JSONSchema)
                  <br />
                  <span className="text-purple-600">except</span>{" "}
                  ValidationError:
                  <br />
                  {"  "}log.<span className="text-blue-600">error</span>(
                  <span className="text-green-600">
                    "LLM gave garbage again"
                  </span>
                  )<br />
                  {"  "}
                  <span className="text-slate-500 italic">
                    # Wasted 3 retries & $0.05
                  </span>
                  <br />
                  {"  "}
                  <span className="text-blue-600">retry_or_fail</span>()
                </code>
              </pre>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
                  After
                </span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
                </div>
              </div>
              <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto flex flex-col justify-center h-full pb-8">
                <code className="block text-slate-900">
                  data = response.<span className="text-blue-600">parse</span>
                  (JSONSchema)
                  <br />
                  <span className="text-slate-400 italic">
                    # ← just works, every time
                  </span>
                </code>
              </pre>
            </div>
          </div>

          <p className="mt-6 text-center text-slate-500 text-sm sm:text-base font-medium">
            Average retry rate:{" "}
            <span className="text-slate-900 font-bold">0.7%</span> – most
            customers see &lt;0.1% after first week as models learn from our
            corrective prompts.
          </p>
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-semibold">SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-semibold">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-semibold">GDPR Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
