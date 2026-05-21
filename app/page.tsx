import React from "react";
import PerformanceDashboard from "@/components/performance-dashboard";
import EngineeringCapabilities from "@/components/engineering-capabilities";

export default function PortfolioHome() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-505/20 selection:text-emerald-300">
      <section className="max-w-5xl mx-auto pt-24 pb-16 px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
              Systems Engineer Portfolio
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-2 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Engineering High-Performance Interactive Web Architectures.
            </h1>
            <p className="mt-4 text-base text-slate-400 leading-relaxed font-mono">
              Specializing in localized state management engines, dynamic event
              loop optimizations, and highly scalable data serialization
              layouts.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-400 self-start md:self-auto min-w-[240px]">
            <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
              <span>ENGINE INFRA:</span>
              <span className="text-emerald-400 font-bold">ONLINE</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>CORE PROJECT:</span>
              <span className="text-slate-200">Site Builder Engine</span>
            </div>
            <div className="flex justify-between">
              <span>VCS STATUS:</span>
              <span className="text-slate-200">317 Commits</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-slate-200 uppercase font-mono text-xs text-slate-400">
            Case Study: Deep-Dive Observability
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-3xl">
            Building complex canvas drag-and-drop systems requires managing
            thousands of interactive mutations. Below is a live telemetry
            simulator demonstrating how shifting architectural models completely
            resolved browser layout jank.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto pb-24 px-6">
        <PerformanceDashboard />
      </section>

      <EngineeringCapabilities />
    </main>
  );
}
