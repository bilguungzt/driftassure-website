import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Brain,
  ArrowsSplit,
  CheckCircle,
  Receipt,
  ArrowRight,
  Cpu,
} from "@phosphor-icons/react";

export default function AutopilotFlow() {
  const [step, setStep] = useState(0);
  const TOTAL_STEPS = 5;
  const STEP_DURATION = 3000; // 3 seconds per step, 15s total cycle

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % TOTAL_STEPS);
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            How Autopilot saves you money
          </h2>
          <p className="text-slate-500 mt-2">
            Smart routing and validation in milliseconds
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block rounded-full" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-indigo-500 -translate-y-1/2 hidden md:block rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {/* Step 1: Request */}
            <FlowStep
              isActive={step >= 0}
              isCurrent={step === 0}
              icon={<User weight="fill" />}
              title="Request"
              subtitle="GPT-4 Input"
              detail="Complex query?"
            />

            {/* Step 2: Classify */}
            <FlowStep
              isActive={step >= 1}
              isCurrent={step === 1}
              icon={<Brain weight="fill" />}
              title="Classify"
              subtitle="Cognitude Engine"
              detail="Result: 'Simple Classification'"
              color="text-purple-600"
              bgColor="bg-purple-100"
              borderColor="border-purple-200"
            />

            {/* Step 3: Route */}
            <FlowStep
              isActive={step >= 2}
              isCurrent={step === 2}
              icon={<ArrowsSplit weight="fill" />}
              title="Route"
              subtitle="Downgrade Model"
              detail="Routing to GPT-4o-mini"
              color="text-blue-600"
              bgColor="bg-blue-100"
              borderColor="border-blue-200"
            />

            {/* Step 4: Validate */}
            <FlowStep
              isActive={step >= 3}
              isCurrent={step === 3}
              icon={<CheckCircle weight="fill" />}
              title="Validate"
              subtitle="JSON Check"
              detail="Output Validated: PASS"
              color="text-emerald-600"
              bgColor="bg-emerald-100"
              borderColor="border-emerald-200"
            />

            {/* Step 5: Savings */}
            <FlowStep
              isActive={step >= 4}
              isCurrent={step === 4}
              icon={<Receipt weight="fill" />}
              title="Response"
              subtitle="Identical Output"
              detail="$0.0008 (vs $0.03)"
              color="text-indigo-600"
              bgColor="bg-indigo-100"
              borderColor="border-indigo-200"
              isLast
            />
          </div>

          {/* Mobile connection lines */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 md:hidden -z-10" />
        </div>
      </div>
    </section>
  );
}

function FlowStep({
  isActive,
  isCurrent,
  icon,
  title,
  subtitle,
  detail,
  color = "text-slate-600",
  bgColor = "bg-white",
  borderColor = "border-slate-200",
  isLast = false,
}) {
  return (
    <div
      className={`relative flex md:flex-col items-center md:text-center gap-4 md:gap-3 transition-all duration-500 ${
        isActive ? "opacity-100" : "opacity-40"
      }`}
    >
      <div
        className={`
          w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-2xl shadow-sm transition-all duration-500
          ${
            isActive
              ? `${bgColor} ${borderColor} ${color} scale-110`
              : "bg-slate-50 border-slate-200 text-slate-300 scale-100"
          }
          ${isCurrent ? "ring-4 ring-indigo-500/20 shadow-lg" : ""}
        `}
      >
        {icon}
      </div>

      <div className="flex-1 md:flex-none">
        <h3
          className={`font-bold text-sm ${
            isActive ? "text-slate-900" : "text-slate-400"
          }`}
        >
          {title}
        </h3>
        <p className="text-xs text-slate-500 font-medium">{subtitle}</p>
        <AnimatePresence mode="wait">
          {isCurrent && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className={`text-xs mt-1 font-mono ${color}`}
            >
              {detail}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {!isLast && (
        <div className="md:hidden absolute left-8 top-16 h-full w-0.5 bg-slate-200 -z-10" />
      )}
    </div>
  );
}
