import React from "react";

export default function EngineeringCapabilities() {
  const capabilities = [
    {
      role: "Performance Engineering",
      paradigm: "Client-Side Runtimes & Render Loops",
      description:
        "Obsessed with the frame rate stability of highly interactive canvas systems. Highly experienced in isolating transient browser states from global state frameworks, decoupling heavy calculations from main-thread cycles using requestAnimationFrame, and eliminating garbage collection spikes.",
      metrics: "Target: Consistent 60 FPS / <3ms Mutation Latency",
      accent: "border-emerald-950/40 bg-emerald-950/5 text-emerald-400",
    },
    {
      role: "Systems & Data Architecture",
      paradigm: "Relational Mapping & Complex Schema Serialization",
      description:
        "Designing extensible, domain-driven data layouts built for long-term project longevity. Proven track record of transitioning bloated application models from costly O(N) recursive tree updates into lightning-fast, normalized O(1) dictionary maps linked by relational node IDs.",
      metrics: "Execution: Algorithmic Shift from O(N) to O(1)",
      accent: "border-cyan-950/40 bg-cyan-950/5 text-cyan-400",
    },
    {
      role: "Infrastructure & Platform Automation",
      paradigm: "Continuous Deployment Frameworks & SRE",
      description:
        "Designing guarded, self-healing continuous integration architectures. Experienced in building automated cross-platform test environments using headless browser orchestration (Playwright) to eliminate visual regression and secure live production builds on Vercel networks.",
      metrics: "Pipeline: Fully Automated E2E Regression Workflows",
      accent: "border-purple-950/40 bg-purple-950/5 text-purple-400",
    },
    {
      role: "Product & Scope Engineering",
      paradigm: "Iterative Development & Technical Debt Strategy",
      description:
        "Approaching codebases with product-driven leadership foresight. Capable of systematically building and maintaining comprehensive, enterprise-ready software ecosystems through sustained, highly structured, multi-commit version control lifecycles.",
      metrics: "Scale: 318+ Atomic & Documented Version Control Iterations",
      accent: "border-amber-950/40 bg-amber-950/5 text-amber-400",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto pb-24 px-6 border-t border-slate-800 pt-16">
      <div className="mb-10">
        <span className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">
          Core Competencies
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-slate-200 mt-1">
          Engineering Capabilities & Paradigms
        </h3>
        <p className="text-sm text-slate-400 mt-2 max-w-2xl">
          A breakdown of multi-disciplinary systems-thinking applied
          systematically across live, production-grade applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl border flex flex-col justify-between transition-all duration-300 hover:border-slate-700 bg-slate-900/30`}
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h4 className="text-base font-bold text-slate-200">
                    {cap.role}
                  </h4>
                  <span className="text-[11px] font-mono font-medium text-slate-500 block mt-0.5">
                    {cap.paradigm}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mt-2">
                {cap.description}
              </p>
            </div>

            <div
              className={`mt-6 p-2.5 rounded-lg border text-xs font-mono font-bold text-center ${cap.accent}`}
            >
              {cap.metrics}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
