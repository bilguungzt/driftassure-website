const customerLogos = [
  {
    name: "Baixing Intelligence",
    note: "42% cost reduction",
    logo: "/proof/company1.png",
  },
  {
    name: "Wecaria",
    note: "Budget caps in 48h",
    logo: "/proof/company2.png",
  },
  {
    name: "Supernova",
    note: "Zero bill shocks",
    logo: "/proof/company3.png",
  },
  {
    name: "Toma",
    note: "Multi-provider routing",
    logo: "/proof/company4.png",
  },
];

function LogoStrip() {
  return (
    <section
      id="customers"
      className="py-12 bg-white border-y border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">
            Trusted by fast-moving AI teams
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customerLogos.map((logo) => (
            <div
              key={logo.name}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col items-center text-center gap-3 hover:bg-slate-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">
                  {logo.name}
                </p>
                <p className="text-xs text-slate-500">{logo.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;
