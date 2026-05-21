import React from "react";
import { MetricTick } from "./use-performance-mock";

interface StreamingChartsProps {
  type: "optimized" | "unoptimized";
  activeMode: "optimized" | "unoptimized" | "idle";
  data: MetricTick[];
}

export default function StreamingCharts({
  type,
  activeMode,
  data,
}: StreamingChartsProps) {
  const isCurrentlySimulating = activeMode === type;

  const width = 500;
  const height = 120;
  const padding = 10;

  const getBaselinePoints = () => {
    if (type === "unoptimized") {
      return [
        20, 45, 15, 85, 30, 40, 95, 25, 35, 110, 40, 60, 85, 30, 50, 90, 20,
      ];
    } else {
      return [
        15, 18, 14, 16, 15, 17, 14, 15, 16, 14, 17, 15, 14, 16, 15, 14, 16,
      ];
    }
  };

  const generateSvgPath = (values: number[], maxVal: number) => {
    if (values.length === 0) return "";

    const pointsCount = values.length;
    return values
      .map((val, index) => {
        const x = padding + (index / (pointsCount - 1)) * (width - padding * 2);

        const y = height - padding - (val / maxVal) * (height - padding * 2);
        return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  };

  const getChartPathData = () => {
    let latencyPoints: number[];
    let fpsPoints: number[];

    if (isCurrentlySimulating && data.length > 1) {
      latencyPoints = data.map((t) => t.latency);
      fpsPoints = data.map((t) => t.fps);
    } else {
      latencyPoints = getBaselinePoints();
      fpsPoints =
        type === "unoptimized"
          ? [55, 42, 38, 52, 45, 31, 48, 50, 35, 42, 55]
          : [60, 59, 60, 59, 60, 60, 59, 60, 59, 60, 60];
    }

    return {
      latencyPath: generateSvgPath(latencyPoints, 180),
      fpsPath: generateSvgPath(fpsPoints, 65),
    };
  };

  const { latencyPath, fpsPath } = getChartPathData();

  const themeStyles =
    type === "unoptimized"
      ? {
          border: "border-red-950/40 bg-red-950/5",
          text: "text-red-400",
          fill: "stroke-red-500",
        }
      : {
          border: "border-emerald-950/40 bg-emerald-950/5",
          text: "text-emerald-400",
          fill: "stroke-emerald-400",
        };

  return (
    <div
      className={`p-5 rounded-xl border ${themeStyles.border} transition-all duration-300`}
    >
      <h4
        className={`text-xs font-bold uppercase tracking-widest mb-4 ${themeStyles.text}`}
      >
        {type === "unoptimized"
          ? "⚠️ Unoptimized Engine State"
          : "⚡ Optimized Engine State"}
      </h4>

      <div className="mb-4">
        <div className="flex justify-between text-[11px] text-slate-500 font-mono mb-1">
          <span>Render Latency (ms)</span>
          {isCurrentlySimulating && (
            <span className="animate-pulse text-slate-400">● LIVE</span>
          )}
        </div>
        <div className="w-full bg-slate-950/80 rounded-lg p-2 border border-slate-850">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible"
          >
            <line
              x1="0"
              y1={height / 2}
              x2={width}
              y2={height / 2}
              stroke="#334155"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <path
              d={latencyPath}
              fill="none"
              className={`${themeStyles.fill} transition-all duration-150`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[11px] text-slate-500 font-mono mb-1">
          <span>FPS Target Lock</span>
        </div>
        <div className="w-full bg-slate-950/80 rounded-lg p-2 border border-slate-850">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible"
          >
            <line
              x1="0"
              y1={height - padding}
              x2={width}
              y2={height - padding}
              stroke="#1e293b"
              strokeWidth="1"
            />
            <path
              d={fpsPath}
              fill="none"
              className={`${themeStyles.fill} transition-all duration-150`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
