import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  GitBranch,
  Terminal,
  CheckCircle,
  Copy,
  Check,
} from "@phosphor-icons/react";

// Code examples for different languages
const codeExamples = {
  typescript: {
    label: "TypeScript",
    extension: ".ts",
    code: `import { CognitudePolicy } from '@cognitude/sdk';

export const productionPolicy: CognitudePolicy = {
  name: "production-ai-policy",
  version: "1.0.0",
  
  // Define your quality baselines
  baselines: {
    verbosity: { min: 0.3, max: 0.7 },
    logicScore: { min: 0.85 },
    latencyMs: { max: 2000 }
  },

  // Configure automatic failover
  failover: {
    enabled: true,
    providers: ["openai", "anthropic", "google"],
    strategy: "best-match",
    maxLatencyMs: 15000
  },

  // Alert thresholds
  alerts: {
    slack: "#ai-ops",
    pagerduty: true,
    threshold: "critical"
  }
};`,
    highlights: [
      { line: 8, label: "Type-safe configs" },
      { line: 15, label: "Auto-failover" },
      { line: 22, label: "Real-time alerts" },
    ],
  },
  python: {
    label: "Python",
    extension: ".py",
    code: `from cognitude import Policy, Baseline, Failover

production_policy = Policy(
    name="production-ai-policy",
    version="1.0.0",
    
    # Define your quality baselines
    baselines=Baseline(
        verbosity={"min": 0.3, "max": 0.7},
        logic_score={"min": 0.85},
        latency_ms={"max": 2000}
    ),

    # Configure automatic failover
    failover=Failover(
        enabled=True,
        providers=["openai", "anthropic", "google"],
        strategy="best-match",
        max_latency_ms=15000
    ),

    # Alert thresholds
    alerts={
        "slack": "#ai-ops",
        "pagerduty": True,
        "threshold": "critical"
    }
)`,
    highlights: [
      { line: 7, label: "Baseline definitions" },
      { line: 14, label: "Provider rotation" },
      { line: 21, label: "Alert integrations" },
    ],
  },
  yaml: {
    label: "YAML",
    extension: ".yaml",
    code: `# cognitude.yaml - Infrastructure as Code
apiVersion: cognitude.io/v1
kind: StabilityPolicy
metadata:
  name: production-ai-policy
  version: "1.0.0"

spec:
  # Define your quality baselines
  baselines:
    verbosity:
      min: 0.3
      max: 0.7
    logicScore:
      min: 0.85
    latencyMs:
      max: 2000

  # Configure automatic failover
  failover:
    enabled: true
    providers:
      - openai
      - anthropic
      - google
    strategy: best-match
    maxLatencyMs: 15000

  # Alert thresholds
  alerts:
    slack: "#ai-ops"
    pagerduty: true
    threshold: critical`,
    highlights: [
      { line: 10, label: "Baseline rules" },
      { line: 19, label: "Multi-provider failover" },
      { line: 29, label: "Observability" },
    ],
  },
};

const features = [
  {
    icon: GitBranch,
    title: "Version Controlled",
    description:
      "Track every policy change with Git. Roll back instantly if needed.",
  },
  {
    icon: Terminal,
    title: "CI/CD Integration",
    description:
      "Validate policies in your pipeline. Block deploys that break SLAs.",
  },
  {
    icon: CheckCircle,
    title: "Type-Safe",
    description:
      "Catch config errors at build time with full TypeScript support.",
  },
];

function ConfigAsCode() {
  const [activeTab, setActiveTab] = useState("typescript");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5">
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Config as Code
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Define stability policies in{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  code you already know
                </span>
              </h2>
              <p className="text-lg text-slate-400">
                Version control your AI stability. Define policies in
                TypeScript, Python, or YAML. Integrate with Terraform, Pulumi,
                or your existing CI/CD pipeline.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Code Editor */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />

            {/* Code editor frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900 shadow-2xl">
              {/* Editor header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono ml-2">
                    cognitude.policy{codeExamples[activeTab].extension}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Language tabs */}
              <div className="flex border-b border-slate-700/50 bg-slate-800/40">
                {Object.entries(codeExamples).map(([key, { label }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                      activeTab === key
                        ? "text-purple-400"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {label}
                    {activeTab === key && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Code content */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 font-mono text-sm overflow-x-auto"
                    style={{ maxHeight: "450px" }}
                  >
                    <pre className="text-slate-300">
                      {codeExamples[activeTab].code
                        .split("\n")
                        .map((line, i) => (
                          <div
                            key={i}
                            className={`flex hover:bg-slate-800/50 -mx-4 px-4 ${
                              codeExamples[activeTab].highlights.some(
                                (h) => h.line === i + 1
                              )
                                ? "bg-purple-500/10 border-l-2 border-purple-500"
                                : ""
                            }`}
                          >
                            <span className="w-8 text-slate-600 select-none text-right mr-4 flex-shrink-0">
                              {i + 1}
                            </span>
                            <span className="flex-1">{line || " "}</span>
                          </div>
                        ))}
                    </pre>
                  </motion.div>
                </AnimatePresence>

                {/* Highlight labels */}
                <div className="absolute top-4 right-4 space-y-2">
                  {codeExamples[activeTab].highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      className="flex items-center gap-2 px-2 py-1 rounded bg-purple-500/20 border border-purple-500/30"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span className="text-xs text-purple-300">
                        {highlight.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-4 -left-4 px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-slate-400">
                  Terraform compatible
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-slate-400">GitOps ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ConfigAsCode;
