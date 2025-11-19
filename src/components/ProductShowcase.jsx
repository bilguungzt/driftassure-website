function ProductShowcase() {
  const cards = [
    {
      label: "Live Savings Dashboard",
      headline: "$27,910 actual vs $48,317 projected",
      description:
        "Every request is tagged with model, provider, latency, and blended cost so finance + eng see where the money went.",
      items: ["Per-model heatmap", "Budget guardrails", "Variance alerts"],
    },
    {
      label: "Instant Budget Alerts",
      headline: "Slack + email warnings before overruns",
      description:
        "When a runaway job spikes usage, Cognitude blocks it and notifies the on-call channel with remediation tips.",
      items: [
        "50/75/90/100% alert ladder",
        "Webhook + PagerDuty",
        "Custom spending policies",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-950/80" id="product">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-300/80">
            Product tour
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Show, don't tell: here's what Cognitude actually looks like
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Screenshots from our internal demo tenant. No marketing fluff—just
            the dashboards engineers stare at when the bill matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {cards.map((card) => (
            <article
              key={card.label}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl shadow-[0_40px_120px_-60px_rgba(0,0,0,1)] overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <span className="text-xs tracking-[0.3em] uppercase text-purple-200/70">
                  {card.label}
                </span>
                <h3 className="text-2xl text-white font-semibold">
                  {card.headline}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900/90 border-t border-white/5 p-6 h-64 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle_at_top,#c084fc33,transparent_55%),linear-gradient(135deg,#0f172a,#111827)] border border-white/10 flex flex-col justify-between p-5 text-left text-white">
                  <p className="text-sm text-slate-300">
                    Screenshot placeholder — swap with actual UI when ready.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">GPT-4 Turbo</span>
                      <span className="font-semibold text-green-300">
                        $12,947 → $6,584
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Claude Sonnet</span>
                      <span className="font-semibold text-green-300">
                        $8,420 → $4,110
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Groq Mixtral</span>
                      <span className="font-semibold text-green-300">
                        $4,118 → $3,180
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
