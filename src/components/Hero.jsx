import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

function Hero() {
  const [savedAmount, setSavedAmount] = useState(127847);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavedAmount((prev) => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
              <span className="text-purple-400 font-medium">
                💰 LLM Cost Automation & FinOps Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Cut Your LLM Costs by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                30-50%
              </span>{" "}
              Automatically
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Drop-in OpenAI replacement that automatically routes to cheapest
              model AND enforces spending limits. No code changes required.
            </p>

            <div className="flex flex-wrap gap-4 text-green-400">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-300">1-line integration</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-300">Budget enforcement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-300">Multi-provider</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-300">Enterprise security</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                See Live Demo
              </button>
            </div>
          </div>

          {/* Code Visual */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="space-y-6">
              <div>
                <div className="text-red-400 font-mono text-sm mb-3">
                  ❌ BEFORE:
                </div>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <span className="text-blue-400">client</span> ={" "}
                  <span className="text-yellow-400">OpenAI</span>(
                  <span className="text-green-400">api_key</span>=
                  <span className="text-red-400">"sk-..."</span>)
                </div>
              </div>

              <div>
                <div className="text-green-400 font-mono text-sm mb-3">
                  ✅ AFTER:
                </div>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div>
                    <span className="text-blue-400">client</span> ={" "}
                    <span className="text-yellow-400">OpenAI</span>(
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">api_key</span>=
                    <span className="text-red-400">"sk-..."</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">base_url</span>=
                    <span className="text-red-400">
                      "https://api.cognitude.io/v1"
                    </span>
                  </div>
                  <div>)</div>
                  <div className="text-gray-500 mt-4">
                    # ✨ Now saving 30-50% + budget protected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="mt-20 flex justify-center">
          <div className="bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 flex items-center gap-3">
            <span className="text-green-400">💸</span>
            <span className="text-white font-semibold">
              Saved customers ${savedAmount.toLocaleString()} this month
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
