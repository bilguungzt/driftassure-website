import { motion as Motion } from "framer-motion";

const DASHBOARD_IMAGE = "/proof/dashboard.png";

/**
 * ProductShowcase - "Device Frame with Purple Glow"
 *
 * Follows the "Theatre vs. Lab" rule:
 * - Dark background = Theatre (emotional, cinematic)
 * - White screenshot = Lab (detail, clarity)
 * - Browser frame = Portal that separates the two
 * - Purple glow = Ties the light asset back into dark theme
 */
function ProductShowcase() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400 mb-4">
            The Control Room
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            See Everything. Miss Nothing.
          </h2>
          <p className="text-lg text-slate-400">
            Real-time drift detection, cost attribution, and failover status—all
            in one dashboard your team will actually use.
          </p>
        </Motion.div>

        {/* Browser Frame with Purple Glow */}
        <Motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Purple glow backlight - THE KEY to tying light into dark */}
          <div
            className="absolute inset-0 blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.5) 0%, rgba(99, 102, 241, 0.3) 40%, transparent 70%)",
              transform: "translateY(10%) scale(1.1)",
            }}
          />

          {/* Browser Window Frame */}
          <div className="relative mx-auto max-w-5xl">
            {/* Browser Chrome */}
            <div className="bg-slate-800 rounded-t-2xl border border-slate-700 border-b-0 px-4 py-3">
              <div className="flex items-center gap-6">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* URL bar */}
                <div className="flex-1 max-w-md">
                  <div className="flex items-center gap-2 bg-slate-900/80 rounded-lg px-3 py-1.5 border border-slate-600/50">
                    <svg
                      className="w-3.5 h-3.5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-xs text-slate-400 font-medium">
                      app.cognitu.de/dashboard
                    </span>
                  </div>
                </div>

                {/* Window controls placeholder */}
                <div className="hidden sm:flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-slate-700" />
                  <div className="w-4 h-4 rounded bg-slate-700" />
                </div>
              </div>
            </div>

            {/* Screenshot Container with heavy shadow */}
            <div
              className="relative bg-slate-800 rounded-b-2xl border border-slate-700 border-t-0 p-1 sm:p-1.5"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -15px rgba(139, 92, 246, 0.3)",
              }}
            >
              <img
                src={DASHBOARD_IMAGE}
                alt="Cognitude real-time monitoring dashboard"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </Motion.div>

        {/* Bottom stats - the proof points */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { value: "<1s", label: "Drift Detection" },
            { value: "15s", label: "Auto-Failover" },
            { value: "99.97%", label: "Uptime SLA" },
            { value: "$0", label: "Incident Cost" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

export default ProductShowcase;
