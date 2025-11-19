import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HowItWorks() {
  // We need a ref for the tall container that creates the scroll distance
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start start": When top of container hits top of viewport
    // "end end": When bottom of container hits bottom of viewport
    offset: ["start start", "end end"],
  });

  // 1. Line Progress: Grows as we scroll through the whole section
  const lineProgress = useTransform(
    scrollYProgress,
    [0.2, 0.8], // Starts at 20% scroll, ends at 80%
    ["0%", "100%"]
  );

  // 2. Step Opacity: Staggered based on scroll percentage
  // Step 1 appears immediately (0% to 15%)
  const step1Opacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const step1Y = useTransform(scrollYProgress, [0.05, 0.15], [20, 0]); // Slide up slightly

  // Step 2 appears midway (35% to 45%)
  const step2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const step2Y = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

  // Step 3 appears at the end (65% to 75%)
  const step3Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const step3Y = useTransform(scrollYProgress, [0.65, 0.75], [20, 0]);

  const steps = [
    {
      id: 1,
      title: "Configure Gateway",
      description:
        "Replace your OpenAI base_url with the Cognitude proxy endpoint.",
      opacity: step1Opacity,
      y: step1Y,
    },
    {
      id: 2,
      title: "Autopilot Engages",
      description:
        "The system automatically classifies the task and selects the cheapest model.",
      opacity: step2Opacity,
      y: step2Y,
    },
    {
      id: 3,
      title: "See Instant Savings",
      description:
        "Monitor your real-time ROI dashboard and see immediate cost reduction.",
      opacity: step3Opacity,
      y: step3Y,
    },
  ];

  return (
    // 1. THE TRACK: High height (300vh) to allow scrolling time
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      {/* 2. THE STICKY VIEW: Stays fixed while you scroll the track */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Setup in minutes. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Save immediately.
              </span>
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Connecting Line (Behind items) */}
            {/* Adjusted 'top' to align with the badges */}
            <div className="hidden md:block absolute top-[265px] left-1/2 -translate-x-1/2 w-screen h-0.5 bg-slate-800/30 -z-10">
              <motion.div
                style={{ width: lineProgress }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent origin-left"
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                style={{ opacity: step.opacity, y: step.y }}
                className="flex flex-col relative"
              >
                {/* Image Card */}
                <div className="h-48 w-full bg-slate-900/80 border border-white/10 rounded-2xl mb-6 relative overflow-hidden backdrop-blur-sm z-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-50" />
                  {/* Visuals */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {index === 0 && (
                      <span className="text-xs font-mono text-slate-500">
                        {"<Code />"}
                      </span>
                    )}
                    {index === 1 && (
                      <div className="w-8 h-8 rounded-full border border-indigo-500/30 animate-pulse"></div>
                    )}
                    {index === 2 && (
                      <span className="text-emerald-400 font-bold">-40%</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start z-20">
                  {/* Number Badge */}
                  <div className="flex items-center justify-center w-10 h-10 rounded bg-indigo-600 text-white font-bold text-lg mb-4 shadow-lg shadow-indigo-500/25">
                    {step.id}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
