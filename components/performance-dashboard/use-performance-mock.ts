"use client"
import { useState, useEffect } from "react";

export interface MetricTick {
  timestamp: number;
  latency: number;
  fps: number;
  memory: number;
}

export function usePerformanceMock(mode: "optimized" | "unoptimized" | "idle") {
  const [dataHistory, setDataHistory] = useState<MetricTick[]>([]);

  useEffect(() => {
    if (mode === "idle") {
      setDataHistory([]);
      return;
    }

    const interval = setInterval(() => {
      setDataHistory((prev) => {
        const currentWindow = prev.length > 30 ? prev.slice(1) : prev;

        const newTick: MetricTick = {
          timestamp: Date.now(),
          latency:
            mode === "unoptimized"
              ? Math.floor(Math.random() * 15) +
                10 +
                (Math.random() > 0.85 ? 150 : 0)
              : Math.floor(Math.random() * 2) + 1.5,

          fps:
            mode === "unoptimized"
              ? Math.max(30, Math.floor(55 - Math.random() * 25))
              : Math.floor(60 - Math.random() * 2),

          memory:
            mode === "unoptimized"
              ? Math.min(
                  90,
                  45 + currentWindow.length * 1.5 + Math.random() * 5,
                )
              : 24 + Math.random() * 0.5,
        };

        return [...currentWindow, newTick];
      });
    }, 300);

    return () => clearInterval(interval);
  }, [mode]);

  return dataHistory;
}
