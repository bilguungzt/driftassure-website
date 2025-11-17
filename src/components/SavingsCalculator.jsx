import { useState, useEffect } from "react";
import { DollarSign, TrendingDown, BarChart } from "lucide-react";

function SavingsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(5000);
  const [primaryModel, setPrimaryModel] = useState("gpt-4");
  const [simpleTasks, setSimpleTasks] = useState(40);
  const [mediumTasks, setMediumTasks] = useState(40);
  const [complexTasks, setComplexTasks] = useState(20);

  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [roi, setRoi] = useState(0);

  // Ensure percentages always add up to 100
  const adjustPercentages = (type, value) => {
    const newValue = Math.max(0, Math.min(100, value));

    if (type === "simple") {
      setSimpleTasks(newValue);
      const remaining = 100 - newValue;
      const ratio = mediumTasks / (mediumTasks + complexTasks);
      setMediumTasks(Math.round(remaining * ratio));
      setComplexTasks(remaining - Math.round(remaining * ratio));
    } else if (type === "medium") {
      setMediumTasks(newValue);
      const remaining = 100 - newValue;
      const ratio = simpleTasks / (simpleTasks + complexTasks);
      setSimpleTasks(Math.round(remaining * ratio));
      setComplexTasks(remaining - Math.round(remaining * ratio));
    } else if (type === "complex") {
      setComplexTasks(newValue);
      const remaining = 100 - newValue;
      const ratio = simpleTasks / (simpleTasks + mediumTasks);
      setSimpleTasks(Math.round(remaining * ratio));
      setMediumTasks(remaining - Math.round(remaining * ratio));
    }
  };

  useEffect(() => {
    const simpleSavings = monthlySpend * (simpleTasks / 100) * 0.7;
    const mediumSavings = monthlySpend * (mediumTasks / 100) * 0.4;
    const complexSavings = monthlySpend * (complexTasks / 100) * 0.1;
    const totalMonthlySavings = simpleSavings + mediumSavings + complexSavings;

    setMonthlySavings(totalMonthlySavings);
    setAnnualSavings(totalMonthlySavings * 12);
    setRoi(Math.round((totalMonthlySavings / 29) * 100) / 100);
  }, [monthlySpend, simpleTasks, mediumTasks, complexTasks]);

  const presets = {
    seed: { spend: 2000, simple: 50, medium: 35, complex: 15 },
    growth: { spend: 10000, simple: 40, medium: 40, complex: 20 },
    enterprise: { spend: 50000, simple: 30, medium: 45, complex: 25 },
  };

  const applyPreset = (preset) => {
    setMonthlySpend(preset.spend);
    setSimpleTasks(preset.simple);
    setMediumTasks(preset.medium);
    setComplexTasks(preset.complex);
  };

  return (
    <section
      id="calculator"
      className="py-24 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your Savings in 30 Seconds
          </h2>
          <p className="text-xl text-gray-300">
            See how much you could save with Cognitude's intelligent routing
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Preset Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => applyPreset(presets.seed)}
              className="px-4 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Seed Startup
            </button>
            <button
              onClick={() => applyPreset(presets.growth)}
              className="px-4 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Growth Stage
            </button>
            <button
              onClick={() => applyPreset(presets.enterprise)}
              className="px-4 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Enterprise
            </button>
          </div>

          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monthly LLM Spend: ${monthlySpend.toLocaleString()}
              </label>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
                className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #9333EA ${
                    (monthlySpend - 500) / 495
                  }%, #E5E7EB ${(monthlySpend - 500) / 495}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$500</span>
                <span>$50,000</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Primary Model
              </label>
              <select
                value={primaryModel}
                onChange={(e) => setPrimaryModel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="gpt-4">GPT-4 Codex</option>
                <option value="claude">Claude Sonnet</option>
                <option value="gemini">Gemini Pro</option>
              </select>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-semibold text-gray-700">
                Task Distribution (must = 100%)
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-gray-600">Simple tasks</label>
                  <span className="text-sm font-bold text-green-600">
                    {simpleTasks}% - 70% savings
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={simpleTasks}
                  onChange={(e) =>
                    adjustPercentages("simple", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-gray-600">Medium tasks</label>
                  <span className="text-sm font-bold text-yellow-600">
                    {mediumTasks}% - 40% savings
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={mediumTasks}
                  onChange={(e) =>
                    adjustPercentages("medium", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-gray-600">Complex tasks</label>
                  <span className="text-sm font-bold text-orange-600">
                    {complexTasks}% - 10% savings (cache only)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={complexTasks}
                  onChange={(e) =>
                    adjustPercentages("complex", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="text-center text-sm text-gray-500">
                Total: {simpleTasks + mediumTasks + complexTasks}%
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <div className="text-4xl font-bold text-green-600">
                ${Math.round(monthlySavings).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-1">Monthly Savings</div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <TrendingDown className="w-10 h-10 text-purple-600 mx-auto mb-2" />
              <div className="text-4xl font-bold text-purple-600">
                ${Math.round(annualSavings).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-1">Annual Savings</div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 text-center">
              <BarChart className="w-10 h-10 text-yellow-600 mx-auto mb-2" />
              <div className="text-4xl font-bold text-yellow-600">{roi}x</div>
              <div className="text-sm text-gray-600 mt-1">ROI</div>
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <div className="flex items-end justify-center gap-8">
              <div className="text-center">
                <div
                  className="bg-red-500 w-20 rounded-t"
                  style={{ height: "200px" }}
                ></div>
                <div className="text-sm mt-2">Current</div>
                <div className="font-bold">
                  ${monthlySpend.toLocaleString()}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="bg-green-500 w-20 rounded-t"
                  style={{
                    height: `${200 * (1 - monthlySavings / monthlySpend)}px`,
                  }}
                ></div>
                <div className="text-sm mt-2">With Cognitude</div>
                <div className="font-bold">
                  ${Math.round(monthlySpend - monthlySavings).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
              Start Saving Now →
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300">
              Email Me Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavingsCalculator;
