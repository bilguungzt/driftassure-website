import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Cognitude cut our o1 bill by 61% with zero code changes and zero failed requests.",
    author: "Alex Chen",
    role: "Founder, Wecaria (Series B)",
    image:
      "https://ui-avatars.com/api/?name=Alex+Chen&background=0D8ABC&color=fff",
  },
  {
    quote:
      "We were burning $20k/mo on embeddings. Cognitude's caching cut that to $4k overnight.",
    author: "Sarah Miller",
    role: "CTO, Supernova",
    image:
      "https://ui-avatars.com/api/?name=Sarah+Miller&background=6366f1&color=fff",
  },
  {
    quote:
      "The budget enforcement is the only reason we let our interns use the production keys. It's a safety net that actually works.",
    author: "James Wilson",
    role: "VP Engineering, Toma",
    image:
      "https://ui-avatars.com/api/?name=James+Wilson&background=10b981&color=fff",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Trusted by engineering teams at scale
          </h2>
          <p className="text-slate-500 text-lg">
            Join 40+ devtool and AI infra companies saving money today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <Quotes
                weight="fill"
                className="text-indigo-200 w-10 h-10 absolute top-6 left-6 -z-10"
              />

              <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-slate-200/50 pt-6">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
