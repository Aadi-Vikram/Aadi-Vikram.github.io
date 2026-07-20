import React from "react";

/**
 * Carnegie Mellon's official "CMU" lettermark, set in cardinal red with a
 * tartan band, per their visual identity rules for lettermark usage.
 */
export default function CmuMark({ size = 62, radius = "rounded-2xl", text = 16 }) {
  return (
    <span
      className={`logo-tile ${radius} relative overflow-hidden shrink-0`}
      style={{ width: size, height: size }}
      aria-label="Carnegie Mellon University"
    >
      <span
        className="display leading-none"
        style={{ color: "#e8323f", fontSize: text, letterSpacing: "-0.02em" }}
      >
        CMU
      </span>
      <span
        className="tartan-band absolute inset-x-0 bottom-0"
        style={{ height: Math.max(4, Math.round(size * 0.11)), opacity: 0.9 }}
        aria-hidden="true"
      />
    </span>
  );
}
