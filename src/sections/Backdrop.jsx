import React from "react";
import NodeMesh from "./NodeMesh";

/**
 * Ambient background layer. Variants are defined in src/index.css
 * and selected by BACKDROP in src/config.js.
 */
export default function Backdrop({ variant = "mesh" }) {
  return (
    <div className="backdrop" aria-hidden="true">
      {variant === "nodes" && (
        <>
          <NodeMesh />
          <div className="bd-vignette" />
        </>
      )}

      {variant === "aurora" && (
        <>
          <div className="bd-orb bd-orb--1" />
          <div className="bd-orb bd-orb--2" />
          <div className="bd-orb bd-orb--3" />
          <div className="bd-grid" />
        </>
      )}

      {variant === "mesh" && (
        <>
          <div className="bd-mesh" />
          <div className="bd-grid" />
          <div className="bd-vignette" />
        </>
      )}

      {variant === "spotlight" && (
        <>
          <div className="bd-spot" />
          <div className="bd-grid" />
          <div className="bd-vignette" />
        </>
      )}

      {variant === "grid" && (
        <>
          <div className="bd-grid" />
          <div className="bd-vignette" />
        </>
      )}

      {variant === "dots" && (
        <>
          <div className="bd-dots" />
          <div className="bd-vignette" />
        </>
      )}

      {variant !== "none" && <div className="bd-noise" />}
    </div>
  );
}
