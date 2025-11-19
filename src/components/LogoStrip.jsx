const customerLogos = [
  { name: "TensorWave", note: "42% cost reduction", initials: "TW" },
  { name: "Atlas Robotics", note: "Budget caps in 48h", initials: "AR" },
  { name: "NovaMind", note: "Zero bill shocks", initials: "NM" },
  { name: "Helix Labs", note: "Multi-provider routing", initials: "HL" },
];

function LogoStrip() {
  return (
    <section
      id="customers"
      className="py-16 bg-white border-y border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Trusted by fast-moving AI teams
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
            "Even anonymous logos beat no logos" — so here are ours until yours
            go live.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customerLogos.map((logo) => (
            <div
              key={logo.name}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col items-start gap-3 hover:border-indigo-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 font-semibold border border-white shadow-sm">
                {logo.initials}
              </div>
              <div>
                <p className="text-slate-900 font-semibold">{logo.name}</p>
                <p className="text-sm text-slate-500">{logo.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;
