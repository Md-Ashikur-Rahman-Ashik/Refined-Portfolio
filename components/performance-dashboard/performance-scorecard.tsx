import React from "react";
import { MetricTick } from "./use-performance-mock";

interface ScorecardProps {
  mode: "optimized" | "unoptimized" | "idle";
  liveData: MetricTick[];
}

export default function PerformanceScorecard({
  mode,
  liveData,
}: ScorecardProps) {
  const latestTick = liveData[liveData.length - 1];

  const getDisplayMetrics = () => {
    if (mode === "unoptimized" && latestTick) {
      return {
        latencyUnopt: `${latestTick.latency.toFixed(1)} ms`,
        latencyOpt: "2.1 ms",
        fpsUnopt: `${latestTick.fps} FPS`,
        fpsOpt: "59 FPS",
        memUnopt: `${latestTick.memory.toFixed(0)} MB`,
        memOpt: "24 MB",
      };
    }
    if (mode === "optimized" && latestTick) {
      return {
        latencyUnopt: "14.2 ms",
        latencyOpt: `${latestTick.latency.toFixed(1)} ms`,
        fpsUnopt: "42 FPS",
        fpsOpt: `${latestTick.fps} FPS`,
        memUnopt: "85 MB",
        memOpt: `${latestTick.memory.toFixed(0)} MB`,
      };
    }

    return {
      latencyUnopt: "14.2 ms",
      latencyOpt: "2.1 ms",
      fpsUnopt: "42 FPS",
      fpsOpt: "59 FPS",
      memUnopt: "85 MB",
      memOpt: "24 MB",
    };
  };

  const metrics = getDisplayMetrics();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
      <div
        className={`p-4 rounded-xl border bg-slate-950/40 transition-all duration-300 ${
          mode === "unoptimized"
            ? "border-red-900/40 shadow-inner shadow-red-950/10"
            : mode === "optimized"
              ? "border-emerald-900/40 shadow-inner shadow-emerald-950/10"
              : "border-slate-800"
        }`}
      >
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex justify-between">
          <span>Avg Render Latency</span>
          <span className="text-[10px] lowercase text-slate-600 font-mono">
            lower is better
          </span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <div>
            <div
              className={`text-2xl font-extrabold font-mono transition-colors ${mode === "unoptimized" ? "text-red-500 animate-pulse" : "text-red-700/70"}`}
            >
              {metrics.latencyUnopt}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Unoptimized
            </div>
          </div>
          <div className="text-slate-600 font-light text-sm">vs</div>
          <div className="text-right">
            <div
              className={`text-2xl font-extrabold font-mono transition-colors ${mode === "optimized" ? "text-emerald-500 animate-pulse" : "text-emerald-400"}`}
            >
              {metrics.latencyOpt}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Optimized
            </div>
          </div>
        </div>
      </div>

      <div
        className={`p-4 rounded-xl border bg-slate-950/40 transition-all duration-300 ${
          mode === "unoptimized"
            ? "border-red-900/40"
            : mode === "optimized"
              ? "border-emerald-900/40"
              : "border-slate-800"
        }`}
      >
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex justify-between">
          <span>Avg FPS Stability</span>
          <span className="text-[10px] lowercase text-slate-600 font-mono">
            higher is better
          </span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <div>
            <div
              className={`text-2xl font-extrabold font-mono transition-colors ${mode === "unoptimized" ? "text-red-400 animate-pulse" : "text-red-700/70"}`}
            >
              {metrics.fpsUnopt}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Unoptimized
            </div>
          </div>
          <div className="text-slate-600 font-light text-sm">vs</div>
          <div className="text-right">
            <div
              className={`text-2xl font-extrabold font-mono transition-colors ${mode === "optimized" ? "text-emerald-400 animate-pulse" : "text-emerald-400"}`}
            >
              {metrics.fpsOpt}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Optimized
            </div>
          </div>
        </div>
      </div>

      <div
        className={`p-4 rounded-xl border bg-slate-950/40 transition-all duration-300 ${
          mode === "unoptimized"
            ? "border-red-900/40"
            : mode === "optimized"
              ? "border-emerald-900/40"
              : "border-slate-800"
        }`}
      >
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex justify-between">
          <span>Heap Memory Allocation</span>
          <span className="text-[10px] lowercase text-slate-600 font-mono">
            lower is better
          </span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <div>
            <div
              className={`text-2xl font-extrabold font-mono transition-colors ${mode === "unoptimized" ? "text-red-400 animate-pulse" : "text-red-700/70"}`}
            >
              {metrics.memUnopt}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Unoptimized
            </div>
          </div>
          <div className="text-slate-600 font-light text-sm">vs</div>
          <div className="text-right">
            <div
              className={`text-2xl font-extrabold font-mono transition-colors ${mode === "optimized" ? "text-emerald-400 animate-pulse" : "text-emerald-400"}`}
            >
              {metrics.memOpt}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Optimized
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
