import React from "react";

export default function SectionHead({ label, title, note }) {
  return (
    <div className="rule pt-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
      <div>
        <span className="eyebrow">{label}</span>
        <h2 className="display text-[clamp(2.1rem,4.4vw,3.15rem)] mt-2.5">{title}</h2>
      </div>
      {note && (
        <p className="m-0 text-[14px] max-w-[36ch] sm:text-right" style={{ color: "var(--muted)" }}>
          {note}
        </p>
      )}
    </div>
  );
}
