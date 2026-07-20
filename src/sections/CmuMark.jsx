import React from "react";

/**
 * Carnegie Mellon's official "CMU" lettermark in cardinal red. Their visual
 * identity rules require it to sit alongside another CMU reference, which the
 * adjacent "Carnegie Mellon University" text provides.
 */
export default function CmuMark({ size = 62, radius = "rounded-2xl", text = 18 }) {
  return (
    <span
      className={`logo-tile ${radius} shrink-0`}
      style={{ width: size, height: size }}
      aria-label="Carnegie Mellon University"
    >
      <span
        className="display leading-none"
        style={{ color: "#e8323f", fontSize: text, letterSpacing: "-0.025em" }}
      >
        CMU
      </span>
    </span>
  );
}
