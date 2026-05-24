import React from "react";
import PerformanceDashboard from "@/components/performance-dashboard";
import EngineeringCapabilities from "@/components/engineering-capabilities";

export default function PortfolioHome() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      <nav className="w-full max-w-5xl mx-auto pt-6 px-6 flex justify-between items-center border-b border-slate-900/50 pb-4">
        <div className="flex items-center gap-2 group font-mono selection:bg-transparent">
          <svg
            className="h-5 w-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="text-sm font-bold tracking-tight text-slate-200">
            ashik<span className="text-emerald-500">.</span>
            <span className="text-slate-500 font-normal">engine</span>
          </span>
        </div>

        <div className="text-[10px] font-mono text-slate-500 bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-full flex items-center gap-1.5 select-none">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          NODE_LOC :: DEPLOYED_EDGE
        </div>
      </nav>
      <section className="max-w-5xl mx-auto pt-24 pb-16 px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-12">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
              <span className="text-sm font-bold tracking-tight text-slate-200">
                Md Ashikur Rahman Ashik
              </span>
              <span className="text-slate-700 text-xs">•</span>
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
                // Core Focus: Interactive Runtime Systems
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-2 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Engineering High-Performance Interactive Web Architectures.
            </h1>
            <p className="mt-4 text-base text-slate-400 leading-relaxed font-mono">
              Specializing in localized state management engines, dynamic event
              loop optimizations, and highly scalable data serialization
              layouts.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 font-mono text-xs text-slate-400 self-start md:self-auto min-w-[280px] shadow-xl shadow-slate-950/50">
            <div className="flex justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-slate-500 font-bold">OPERATOR_ID:</span>
              <span className="text-emerald-400 font-bold tracking-wide uppercase">
                M.A.R. ASHIK
              </span>
            </div>

            <div className="space-y-2 border-b border-slate-800 pb-3 mb-3">
              <div className="flex justify-between">
                <span className="text-slate-500">CORE_PROJECT:</span>
                <span className="text-slate-200 font-medium">CanvasEngine</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">VCS_STATUS:</span>
                <span className="text-slate-200">318 Commits</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CI_PIPELINE:</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  PASSING
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Network Handshakes
              </span>

              <a
                href="https://github.com/Md-Ashikur-Rahman-Ashik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center group text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>lnk://github</span>
                <span className="text-slate-600 group-hover:text-emerald-400 transition-colors font-sans">
                  ↗
                </span>
              </a>

              <a
                href="https://linkedin.com/in/ashik2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center group text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>lnk://linkedin</span>
                <span className="text-slate-600 group-hover:text-emerald-400 transition-colors font-sans">
                  ↗
                </span>
              </a>

              <a
                href="mailto:md.ashikur.upwork@gmail.com"
                className="flex justify-between items-center group text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>rpc://email</span>
                <span className="text-slate-600 group-hover:text-emerald-400 transition-colors font-sans">
                  ↗
                </span>
              </a>
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

      <footer className="w-full max-w-5xl mx-auto border-t border-slate-900 mt-12 pb-12 pt-8 px-6 text-xs font-mono text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} — Engineered by{" "}
          <span className="text-slate-300 font-sans font-semibold">
            Md Ashikur Rahman Ashik
          </span>
        </div>
        <div className="flex gap-6">
          <span className="text-slate-700">|</span>
          <span className="text-slate-600">sys_status: deployment_nominal</span>
        </div>
      </footer>
    </main>
  );
}
