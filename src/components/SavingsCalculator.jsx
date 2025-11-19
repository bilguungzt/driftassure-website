import { useCallback, useEffect, useState } from "react";
import {
  Calculator,
  CurrencyDollarSimple,
  ChartLineUp,
  Lightning,
} from "@phosphor-icons/react";

function SavingsCalculator() {
  const [tokensPerMonth, setTokensPerMonth] = useState(200_000_000);
  const [callsPerMonth, setCallsPerMonth] = useState("250000");
  const [promptSize, setPromptSize] = useState("1500");
  const [projectedSavings, setProjectedSavings] = useState(0);
  const [projectedRate, setProjectedRate] = useState(0);
  const [currentCost, setCurrentCost] = useState(0);
  const [optimizedCost, setOptimizedCost] = useState(0);

  const formatTokens = (n) => {
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
    return n.toString();
  };

  const setStartupMode = () => {
    const tokens = 200_000_000;
    const prompt = 1500;
    const calls = Math.round(tokens / prompt);

    setTokensPerMonth(tokens);
    setPromptSize(prompt.toString());
    setCallsPerMonth(calls.toString());
  };

  const setEnterpriseMode = () => {
    const tokens = 10_000_000_000;
    const prompt = 2000;
    const calls = Math.round(tokens / prompt);

    setTokensPerMonth(tokens);
    setPromptSize(prompt.toString());
    setCallsPerMonth(calls.toString());
  };

  const handleTokenChange = (e) => {
    const newTokens = Number(e.target.value);
    setTokensPerMonth(newTokens);
    const prompt = Number(promptSize) || 1500;
    setCallsPerMonth(Math.round(newTokens / prompt).toString());
  };

  const handleCallsChange = (e) => {
    const newCalls = e.target.value;
    setCallsPerMonth(newCalls);
    const prompt = Number(promptSize) || 0;
    if (newCalls && prompt) {
      setTokensPerMonth(Number(newCalls) * prompt);
    }
  };

  const handlePromptChange = (e) => {
    const newPrompt = e.target.value;
    setPromptSize(newPrompt);
    const calls = Number(callsPerMonth) || 0;
    if (calls && newPrompt) {
      setTokensPerMonth(calls * Number(newPrompt));
    }
  };

  const calculate = useCallback(() => {
    const tokens = Number(tokensPerMonth) || 0;

    // More realistic cost per 1k tokens (blended rate of GPT-4o, Claude 3.5, etc.)
    // Assuming average blended input/output cost around $5.00 / 1M tokens ($0.005 / 1k)
    const costPer1k = 0.005;
    const current = (tokens / 1000) * costPer1k;

    let rate = 0.35;
    if (tokens > 1_000_000_000) rate = 0.5;
    else if (tokens > 500_000_000) rate = 0.45;
    else if (tokens > 100_000_000) rate = 0.4;

    const savings = current * rate;
    const optimized = Math.max(current - savings, 0);

    setCurrentCost(current);
    setOptimizedCost(optimized);
    setProjectedSavings(savings);
    setProjectedRate(Math.round(rate * 100));
  }, [tokensPerMonth]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <section
      id="calculator"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
          <Calculator className="w-4 h-4 text-indigo-600" />
          <span className="text-xs text-indigo-700">Savings simulator</span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Model what Cognitude would save you
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-slate-600">
          Drop in your current traffic mix and see projected savings from
          routing, caching, and budget enforcement.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-indigo-200/20">
          <div className="flex gap-4 mb-8">
            <button
              onClick={setStartupMode}
              className="flex-1 py-2 px-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 transition-colors"
            >
              Startup
            </button>
            <button
              onClick={setEnterpriseMode}
              className="flex-1 py-2 px-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-sm font-medium text-indigo-700 transition-colors"
            >
              Enterprise
            </button>
          </div>

          <div className="mb-6">
            <label className="flex items-center justify-between text-xs text-slate-600 mb-2">
              <span>Monthly tokens</span>
              <span className="text-slate-500">
                {formatTokens(tokensPerMonth)}
              </span>
            </label>
            <input
              type="range"
              min={5_000_000}
              max={20_000_000_000}
              step={5_000_000}
              value={tokensPerMonth}
              onChange={handleTokenChange}
              className="w-full accent-indigo-600"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
                <span>Calls per month</span>
              </label>
              <input
                type="number"
                value={callsPerMonth}
                onChange={handleCallsChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-slate-900"
                placeholder="e.g. 250000"
              />
            </div>
            <div>
              <label className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
                <span>Avg prompt size (input + output)</span>
              </label>
              <input
                type="number"
                value={promptSize}
                onChange={handlePromptChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-slate-900"
                placeholder="e.g. 1500"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={calculate}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-medium px-5 py-2.5 shadow-lg shadow-indigo-500/40 hover:bg-indigo-500 transition"
          >
            <Lightning className="w-4 h-4 mr-2" /> Calculate savings
          </button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-indigo-200/20 flex flex-col">
          <div className="text-center pt-2 pb-8 border-b border-slate-100 mb-6">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">
              Avg. customer saves
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-5">
              <span className="text-5xl sm:text-6xl font-bold text-emerald-600 tracking-tight">
                $
                {Math.floor(projectedSavings).toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
              <span className="text-xl text-emerald-600 font-medium">/mo</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-bold tracking-wide">
              <ChartLineUp className="w-4 h-4" weight="bold" />
              <span>{Math.floor(projectedRate / 4)}x ROI</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs mb-8">
            <div className="space-y-1">
              <p className="text-slate-500">Current cost</p>
              <p className="text-lg font-medium text-slate-700">
                $
                {currentCost.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-slate-500">New cost</p>
              <p className="text-lg font-bold text-slate-900">
                $
                {optimizedCost.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-sm text-slate-600 mt-auto">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-center flex flex-col items-center justify-center gap-2">
              <CurrencyDollarSimple
                className="w-5 h-5 text-emerald-500"
                weight="bold"
              />
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                  Budget
                </p>
                <p className="text-slate-900 font-semibold text-xs">Enforced</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-center flex flex-col items-center justify-center gap-2">
              <ChartLineUp className="w-5 h-5 text-sky-500" weight="bold" />
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                  Routing
                </p>
                <p className="text-slate-900 font-semibold text-xs">Active</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-center flex flex-col items-center justify-center gap-2">
              <Lightning className="w-5 h-5 text-violet-500" weight="fill" />
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                  Caching
                </p>
                <p className="text-slate-900 font-semibold text-xs">~38%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavingsCalculator;
