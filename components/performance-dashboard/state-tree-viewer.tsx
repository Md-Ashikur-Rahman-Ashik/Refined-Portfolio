import React from "react";

export default function StateTreeViewer({
  mode,
}: {
  mode: "optimized" | "unoptimized" | "idle";
}) {
  const unoptimizedJSON = {
    canvas: {
      id: "root-section",
      type: "section",
      children: [
        {
          id: "row-1",
          type: "row",
          children: [
            {
              id: "col-1",
              type: "column",
              children: [
                {
                  id: "text-element-89",
                  type: "text",
                  props: { content: "Hello World", color: "#ffffff" },
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const optimizedJSON = {
    rootNodeId: "root-section",
    nodes: {
      "root-section": {
        id: "root-section",
        type: "section",
        children: ["row-1"],
      },
      "row-1": {
        id: "row-1",
        type: "row",
        parentId: "root-section",
        children: ["col-1"],
      },
      "col-1": {
        id: "col-1",
        type: "column",
        parentId: "row-1",
        children: ["text-element-89"],
      },
      "text-element-89": {
        id: "text-element-89",
        type: "text",
        parentId: "col-1",
        props: { content: "Hello World", color: "#ffffff" },
      },
    },
  };

  return (
    <div className="mt-8 border-t border-slate-800 pt-6">
      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
        Interactive Performance Diagnostics: State Memory Layout
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-lg border transition-all ${mode === "unoptimized" ? "bg-red-950/20 border-red-900/50" : "bg-slate-950 border-slate-800"}`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-red-400 font-mono">
              Approach A: Deeply Nested Tree Array
            </span>
            <span className="text-[10px] bg-red-900/30 text-red-400 px-2 py-0.5 rounded font-mono">
              Complexity: O(N) mutation
            </span>
          </div>
          <pre className="text-xs font-mono text-slate-300 overflow-x-auto p-3 bg-slate-950/60 rounded max-h-64 scrollbar-thin">
            {JSON.stringify(unoptimizedJSON, null, 2)}
          </pre>
          <p className="text-[11px] text-slate-400 mt-2 italic">
            *Critique: Mutating a deeply nested element requires cloning the
            entire parent chain to maintain immutability. This forces React to
            evaluate re-renders for every single parent node wrapper down to the
            modified child element.*
          </p>
        </div>

        <div
          className={`p-4 rounded-lg border transition-all ${mode === "optimized" ? "bg-emerald-950/20 border-emerald-900/50" : "bg-slate-950 border-slate-800"}`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-emerald-400 font-mono">
              Approach B: Normalized Adjacency List Map
            </span>
            <span className="text-[10px] bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded font-mono">
              Complexity: O(1) mutation
            </span>
          </div>
          <pre className="text-xs font-mono text-slate-300 overflow-x-auto p-3 bg-slate-950/60 rounded max-h-64 scrollbar-thin">
            {JSON.stringify(optimizedJSON, null, 2)}
          </pre>
          <p className="text-[11px] text-slate-400 mt-2 italic">
            *Advantage: The canvas renders elements by subscribing strictly to
            their individual IDs. Updating properties on `text-element-89` is a
            direct `O(1)` dictionary mutation. Parents and adjacent elements are
            completely bypassed, saving computational cycles.*
          </p>
        </div>
      </div>
    </div>
  );
}
