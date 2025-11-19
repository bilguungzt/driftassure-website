function ProductShowcase() {
  return (
    <section className="py-24 bg-white border-b border-slate-100" id="product">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">
            Proof Over Promises
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Every claim backed by live dashboards
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Crop-in screenshots from real customer control rooms so finance,
            engineering, and CTOs see the savings instantly.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative glow behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-3xl rounded-full -z-20"></div>

          {/* Left Side - Autopilot */}
          <div className="hidden lg:block absolute top-1/2 -left-32 xl:-left-48 w-[800px] -translate-y-1/2 -z-10 opacity-40 scale-[0.85] hover:opacity-100 hover:scale-[0.9] hover:z-20 transition-all duration-700 ease-out origin-center -rotate-6 hover:rotate-0">
            <div className="rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
              <img
                src="/proof/autopilot.png"
                alt="Autopilot Configuration"
                className="rounded-xl w-full h-auto shadow-inner border border-slate-100"
              />
            </div>
          </div>

          {/* Right Side - Cache */}
          <div className="hidden lg:block absolute top-1/2 -right-32 xl:-right-48 w-[800px] -translate-y-1/2 -z-10 opacity-40 scale-[0.85] hover:opacity-100 hover:scale-[0.9] hover:z-20 transition-all duration-700 ease-out origin-center rotate-6 hover:rotate-0">
            <div className="rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
              <img
                src="/proof/cache.png"
                alt="Cache Analytics"
                className="rounded-xl w-full h-auto shadow-inner border border-slate-100"
              />
            </div>
          </div>

          {/* Center - Dashboard */}
          <div className="relative rounded-2xl bg-slate-950 p-2 shadow-2xl ring-1 ring-slate-900/5 transform transition-all duration-500 hover:scale-[1.01]">
            <div className="rounded-xl overflow-hidden bg-white">
              <img
                src="/proof/dashboard.png"
                alt="Cognitude Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
