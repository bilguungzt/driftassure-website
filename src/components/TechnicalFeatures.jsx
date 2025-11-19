import {
  ShieldCheck,
  Lock,
  Lightning,
  ChartLineUp,
  Globe,
  HardDrives,
  FileLock,
} from "@phosphor-icons/react";

function TechnicalFeatures() {
  const features = [
    {
      title: "Enterprise-grade Compliance",
      description:
        "Built for highly regulated environments with SOC2 controls, encryption in transit + at rest, and private VPC deployments.",
      icon: ShieldCheck,
      tag: "Compliance",
      visual: (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center">
            <p className="text-[10px] text-emerald-600 font-bold tracking-wider uppercase">
              Certified
            </p>
            <p className="text-lg font-semibold text-slate-900">SOC 2</p>
            <p className="text-[10px] text-slate-500">Type II Ready</p>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-3 text-center">
            <p className="text-[10px] text-indigo-600 font-bold tracking-wider uppercase">
              Pipeline
            </p>
            <p className="text-lg font-semibold text-slate-900">Redaction</p>
            <p className="text-[10px] text-slate-500">PII/PHI Safety</p>
          </div>
        </div>
      ),
    },
    {
      title: "Zero Data Retention",
      description:
        "We do not train on your data. Logs are optional, encrypted, and can be set to zero-retention for complete privacy.",
      icon: Lock,
      tag: "Security",
      visual: (
        <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <FileLock size={20} weight="fill" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Data Logging</p>
              <p className="text-[10px] text-slate-500">Encryption active</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-emerald-600">0 Days</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              Retention
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "<50ms Latency Overhead",
      description:
        "Regional edges, connection pooling, and autopilot caching keep P95 overhead under 50ms across all providers.",
      icon: Lightning,
      tag: "Performance",
      visual: (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white border border-slate-200 p-3">
            <p className="text-[10px] text-slate-500 mb-1">P50 Overhead</p>
            <p className="text-xl font-bold text-emerald-600">+18ms</p>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-3">
            <p className="text-[10px] text-slate-500 mb-1">P95 Overhead</p>
            <p className="text-xl font-bold text-slate-900">+44ms</p>
          </div>
        </div>
      ),
    },
    {
      title: "Multi-Cloud Infrastructure",
      description:
        "Deploy close to your workloads on AWS, Azure, or GCP. Automatic provider failover respects data residency rules.",
      icon: Globe,
      tag: "Infrastructure",
      visual: (
        <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          <div className="shrink-0 rounded-xl bg-white border border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-xs font-medium text-slate-900">12 Regions</p>
              <p className="text-[10px] text-slate-500">Global Edge</p>
            </div>
          </div>
          <div className="shrink-0 rounded-xl bg-white border border-slate-200 px-4 py-3">
            <p className="text-xs font-medium text-slate-900">99.9% SLA</p>
            <p className="text-[10px] text-slate-500">Auto-failover</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="infrastructure"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 mb-4 shadow-sm">
          Infrastructure
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Enterprise-grade by default
        </h2>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Cognitude is built for teams who ship to highly regulated
          environments. Keep your data safe while optimizing cost.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:bg-slate-50 hover:border-indigo-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] uppercase tracking-wider text-slate-600 font-medium">
                  <feature.icon className="w-3.5 h-3.5 text-indigo-600" />
                  {feature.tag}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed min-h-[40px]">
                {feature.description}
              </p>

              {feature.visual}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnicalFeatures;
