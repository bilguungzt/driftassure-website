const DASHBOARD_IMAGE = "/proof/dashboard.png";

function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f3f5f9] via-white to-[#eef1f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
            Proof over promises
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Every claim backed by live dashboards
          </h2>
          <p className="text-base text-slate-500">
            Crop-in screenshots from real customer control rooms so finance,
            engineering, and CTOs see the savings instantly.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Background Image */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[900px] w-[600px] opacity-50 scale-90 blur-[1px] select-none pointer-events-none">
            <img
              src="/proof/autopilot.png"
              alt="Background dashboard"
              className="rounded-2xl shadow-2xl border border-slate-200"
            />
          </div>

          {/* Right Background Image */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[300px] w-[600px] opacity-50 scale-90 blur-[1px] select-none pointer-events-none">
            <img
              src="/proof/cache.png"
              alt="Background dashboard"
              className="rounded-2xl shadow-2xl border border-slate-200"
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl">
            <div className="rounded-[2rem] bg-slate-950 p-2 shadow-2xl ring-1 ring-white/10 sm:rounded-[3rem] sm:p-4">
              <img
                src={DASHBOARD_IMAGE}
                alt="Live routing dashboard"
                className="block h-auto w-full rounded-[1.5rem] bg-slate-900 shadow-inner sm:rounded-[2.5rem]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
