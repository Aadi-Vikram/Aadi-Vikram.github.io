import React from "react";

export default function SectionHead({ label, title, note }) {
  return (
    <div className="rule pt-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
      <div>
        <span className="eyebrow">{label}</span>
        <h2 className="display text-[clamp(1.75rem,4vw,2.6rem)] mt-2.5">{title}</h2>
      </div>
      {note && (
        <p className="m-0 text-[13px] max-w-[34ch] sm:text-right" style={{ color: "var(--muted)" }}>
          {note}
        </p>
      )}
    </div>
  );
}
