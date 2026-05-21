import { useState } from "react";
import { usePerformanceMock } from "./use-performance-mock";
import StateTreeViewer from "./state-tree-viewer";
// Note: We will wire these two sub-components up next, but we scaffold them here
// import PerformanceScorecard from "./performance-scorecard";
// import StreamingCharts from "./streaming-charts";

export default function PerformanceDashboard() {
  const [activeMode, setActiveMode] = useState<
    "optimized" | "unoptimized" | "idle"
  >("idle");
  const streamData = usePerformanceMock(activeMode);

  const toggleMode = (mode: "optimized" | "unoptimized") => {
    setActiveMode((current) => (current === mode ? "idle" : mode));
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl text-slate-100 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-slate-800 gap-4">
        <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-slate-400">
          Performance Impact: State Update Optimization Dashboard
        </h3>
        <div className="flex gap-4 w-full sm:w-auto">
          <button
            onClick={() => toggleMode("unoptimized")}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
              activeMode === "unoptimized"
                ? "bg-red-500 border-red-600 text-white shadow-lg shadow-red-900/30"
                : "bg-slate-800/50 border-slate-700 hover:bg-slate-800 text-slate-300"
            }`}
          >
            {activeMode === "unoptimized"
              ? "Simulating Unoptimized..."
              : "Simulate Unoptimized"}
          </button>
          <button
            onClick={() => toggleMode("optimized")}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
              activeMode === "optimized"
                ? "bg-emerald-500 border-emerald-600 text-white shadow-lg shadow-emerald-900/30"
                : "bg-slate-800/50 border-slate-700 hover:bg-slate-800 text-slate-300"
            }`}
          >
            {activeMode === "optimized"
              ? "Simulating Optimized..."
              : "Simulate Optimized"}
          </button>
        </div>
      </div>

      {/* 2. Top-Level KPI Scorecards Panel (Spans full width across 3 columns) */}
      {/* <PerformanceScorecard mode={activeMode} liveData={streamData} /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* <StreamingCharts type="unoptimized" activeMode={activeMode} data={streamData} /> */}
        {/* <StreamingCharts type="optimized" activeMode={activeMode} data={streamData} /> */}
      </div>

      <StateTreeViewer mode={activeMode} />
    </div>
  );
}
