import { Sparkle, CalendarDots } from "@phosphor-icons/react";

function Hero({ onBookDemo = () => {} }) {
  const companyLogos = [
    { src: "/proof/company1.png", alt: "Company 1 logo" },
    { src: "/proof/company2.png", alt: "Company 2 logo" },
    { src: "/proof/company3.png", alt: "Company 3 logo" },
    { src: "/proof/company4.png", alt: "Company 4 logo" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-slate-950 to-[#020617]"></div>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.5) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="pointer-events-none absolute -top-64 -right-32 h-64 w-64 sm:h-[36rem] sm:w-[36rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.5),_transparent_60%)] blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-80 -left-40 h-72 w-72 sm:h-[40rem] sm:w-[40rem] rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.45),_transparent_60%)] blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-200/90 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
              <Sparkle className="w-4 h-4" />
              <span>LLM Cost Optimization</span>
              <span className="inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-[0.18em] text-indigo-100">
                Live
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Cut your LLM costs by{" "}
                <span className="text-indigo-300">30–50%</span> automatically
              </h1>
              <p className="text-base sm:text-lg text-slate-200/80 max-w-xl mx-auto">
                Cognitude is a drop-in autopilot that reduces OpenAI, Anthropic,
                Groq, and Mistral spend without touching your prompts. Point
                your SDKs to our proxy and keep shipping.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="inline-flex items-center rounded-full bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 transition">
                Join today
              </button>
              <button
                type="button"
                onClick={onBookDemo}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 text-sm text-slate-100 px-4 py-2.5 hover:bg-white/10 transition"
              >
                <CalendarDots className="w-4 h-4 mr-2" /> Book Demo
              </button>
              <div className="flex items-center gap-2 text-[0.7rem] text-slate-300/80">
                <div className="flex -space-x-2">
                  {companyLogos.map(({ src, alt }) => (
                    <span
                      key={src}
                      className="h-6 w-6 rounded-full border border-slate-900 bg-slate-900 overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                      />
                    </span>
                  ))}
                </div>
                <span>Trusted by AI teams shipping to production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
