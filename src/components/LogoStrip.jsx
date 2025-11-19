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
      className="py-16 bg-slate-950/80 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Trusted by fast-moving AI teams
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            "Even anonymous logos beat no logos" — so here are ours until yours
            go live.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customerLogos.map((logo) => (
            <div
              key={logo.name}
              className="p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur flex flex-col items-start gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/50 to-pink-500/70 flex items-center justify-center text-white font-semibold">
                {logo.initials}
              </div>
              <div>
                <p className="text-white font-semibold">{logo.name}</p>
                <p className="text-sm text-slate-400">{logo.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;
