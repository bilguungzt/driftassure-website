import { GraduationCap, Seal, Buildings, Globe, ShieldCheck } from "@phosphor-icons/react";

function TrustBadges() {
  const badges = [
    {
      icon: GraduationCap,
      title: "University of Waterloo",
      subtitle: "Peer-reviewed research",
    },
    {
      icon: Seal,
      title: "TokDrift Protocol",
      subtitle: "Published methodology",
    },
    {
      icon: Buildings,
      title: "$10M+ Protected",
      subtitle: "Annual AI spend",
    },
    {
      icon: Globe,
      title: "99.9% Uptime",
      subtitle: "Platform SLA",
    },
    {
      icon: ShieldCheck,
      title: "SOC 2 Type II",
      subtitle: "Compliance ready",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">
            Trusted by Engineering Teams at
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                <badge.icon className="w-5 h-5 text-indigo-400" weight="fill" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{badge.title}</p>
                <p className="text-xs text-slate-500">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;
