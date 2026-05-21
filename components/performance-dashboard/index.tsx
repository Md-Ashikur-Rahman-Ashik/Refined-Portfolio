import { useState } from "react";
import { usePerformanceMock } from "./use-performance-mock";

export default function PerformanceDashboard() {
  const [activeMode, setActiveMode] = useState<
    "optimized" | "unoptimized" | "idle"
  >("idle");
  const streamData = usePerformanceMock(activeMode);

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl text-slate-100">
      <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-slate-800 gap-4">
        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-400">
          Performance Impact: State Update Optimization Dashboard
        </h3>
        <div className="flex gap-4">
          <button
            onClick={() =>
              setActiveMode(
                activeMode === "unoptimized" ? "idle" : "unoptimized",
              )
            }
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeMode === "unoptimized" ? "bg-red-500 text-white" : "bg-slate-850 border border-slate-700 hover:bg-slate-800"}`}
          >
            {activeMode === "unoptimized"
              ? "Simulating Unoptimized..."
              : "Simulate Unoptimized"}
          </button>
          <button
            onClick={() =>
              setActiveMode(activeMode === "optimized" ? "idle" : "optimized")
            }
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeMode === "optimized" ? "bg-emerald-500 text-white" : "bg-slate-850 border border-slate-700 hover:bg-slate-800"}`}
          >
            {activeMode === "optimized"
              ? "Simulating Optimized..."
              : "Simulate Optimized"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"></div>
    </div>
  );
}
