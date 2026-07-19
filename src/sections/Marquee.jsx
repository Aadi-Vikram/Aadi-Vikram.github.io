import React from "react";
import { marquee } from "../data";

function Track({ ariaHidden }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden}>
      {marquee.map((item, i) => (
        <span key={`${item}-${i}`} className="mono text-[12.5px] whitespace-nowrap flex items-center gap-11" style={{ color: "var(--faint)" }}>
          {item}
          <span className="w-1 h-1 rounded-full" style={{ background: "var(--line)" }} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="rule py-5" role="presentation">
      <div className="marquee">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
