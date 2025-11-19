import { ShieldCheck, Check } from "@phosphor-icons/react";

function SchemaEnforcer() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-20 relative mb-6 mx-auto">
            <svg
              viewBox="0 0 64 80"
              className="w-full h-full text-slate-900 drop-shadow-lg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M32 2c0 0 26 7.5 26 22.5V38c0 16-12 30-26 36C18 68 6 54 6 38V24.5C6 9.5 32 2 32 2z"
              />
            </svg>
            <Check
              className="w-6 h-6 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              weight="bold"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            The Schema Enforcer™
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            We don't just validate responses.{" "}
            <span className="font-bold text-slate-900">We fix them.</span>
            <br className="hidden md:block" />
            If the LLM returns invalid JSON → we automatically retry with a
            corrective prompt until it's perfect.
            <br className="hidden md:block" />
            Your app never sees broken data. Ever.
          </p>
        </div>

        {/* Code Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="rounded-3xl border border-red-100 bg-red-50/30 p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
                Before Cognitude
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
              </div>
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
              <code className="text-slate-800">
                <span className="text-purple-600">try</span>:<br />
                {"  "}data = response.
                <span className="text-blue-600">parse</span>(JSONSchema)
                <br />
                <span className="text-purple-600">except</span> ValidationError:
                <br />
                {"  "}log.<span className="text-blue-600">error</span>(
                <span className="text-green-600">"LLM gave garbage again"</span>
                )<br />
                {"  "}
                <span className="text-slate-400 italic">
                  # Wasted 3 retries & $0.05
                </span>
                <br />
                {"  "}
                <span className="text-blue-600">retry_or_fail</span>()
              </code>
            </pre>
          </div>

          {/* After */}
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/30 p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
                After
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-200"></div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-center">
              <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                <code className="text-slate-800">
                  data = response.<span className="text-blue-600">parse</span>
                  (JSONSchema)
                  <br />
                  <span className="text-slate-400 italic">
                    # ← just works, every time
                  </span>
                </code>
              </pre>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100/50 rounded-bl-full -mr-10 -mt-10"></div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="text-center mb-16">
          <p className="text-slate-500 text-sm md:text-base">
            Average retry rate:{" "}
            <span className="font-bold text-slate-900">0.7%</span> – most
            customers see &lt;0.1% after first week as models learn from our
            corrective prompts.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {["SOC 2 Type II", "HIPAA Compliant", "GDPR Ready"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-slate-500 font-medium"
            >
              <ShieldCheck
                className="w-5 h-5 text-slate-400"
                weight="regular"
              />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SchemaEnforcer;
