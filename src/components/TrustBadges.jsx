import {
  Seal,
  Buildings,
  Globe,
  ShieldCheck,
  Flask,
} from "@phosphor-icons/react";

const WATERLOO_LOGO =
  "/logos/UniversityOfWaterloo_logo_vert_colour_rev/UniversityOfWaterloo_logo_vert_rev_rgb.png";

function TrustBadges() {
  // Academic badge is featured separately
  const academicBadge = {
    title: "University of Waterloo",
    subtitle: "Peer-reviewed research on LLM drift detection",
    featured: true,
  };

  const badges = [
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
        {/* Featured Academic Badge with UWaterloo Logo */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 p-2">
              <img
                src={WATERLOO_LOGO}
                alt="University of Waterloo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-base font-bold text-white">
                {academicBadge.title}
              </p>
              <p className="text-sm text-indigo-300">
                {academicBadge.subtitle}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30">
              <Flask className="w-4 h-4 text-indigo-400" weight="fill" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wide">
                Research-Backed
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
            Also trusted by
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                <badge.icon className="w-5 h-5 text-slate-400" weight="fill" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300">
                  {badge.title}
                </p>
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
