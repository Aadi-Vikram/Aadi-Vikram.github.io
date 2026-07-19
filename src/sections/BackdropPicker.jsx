import React from "react";
import { BACKDROP_OPTIONS } from "../config";

/**
 * Preview panel for background variants. Only rendered when the URL
 * contains ?bg, so it never appears for visitors.
 */
export default function BackdropPicker({ value, onChange }) {
  return (
    <div
      className="fixed bottom-5 right-5 z-[60] rounded-xl p-3 w-56"
      style={{
        background: "var(--bg-blur)",
        backdropFilter: "blur(14px)",
        border: "1px solid var(--line)",
        boxShadow: "var(--shadow)",
      }}
    >
      <p className="eyebrow m-0 mb-2.5">Background</p>
      <div className="flex flex-col gap-1">
        {BACKDROP_OPTIONS.map((o) => (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            className="text-left px-2.5 py-1.5 rounded-lg transition-colors"
            style={{
              background: value === o.id ? "var(--accent-soft)" : "transparent",
              color: value === o.id ? "var(--ink)" : "var(--muted)",
            }}
          >
            <span className="block text-[13px] font-medium">{o.label}</span>
            <span className="block mono text-[9.5px]" style={{ color: "var(--faint)" }}>
              {o.hint}
            </span>
          </button>
        ))}
      </div>
      <p className="mono text-[9.5px] mt-3 mb-0 leading-snug" style={{ color: "var(--faint)" }}>
        Set your pick as BACKDROP in src/config.js
      </p>
    </div>
  );
}
