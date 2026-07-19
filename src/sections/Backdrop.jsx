import React from "react";

/** Ambient layer: drifting color fields, a faded grid, and film grain. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="backdrop-grid" />
      <div className="backdrop-noise" />
    </div>
  );
}
