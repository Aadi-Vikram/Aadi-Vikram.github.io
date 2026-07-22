import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus, ChevronDown } from "lucide-react";
import { projects } from "../data";
import SectionHead from "./SectionHead";
import { useReveal } from "../useReveal";

function Metrics({ items, large }) {
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-3">
      {items.map((m) => (
        <div key={m.v}>
          <div className={`display ${large ? "text-[2.15rem]" : "text-[1.5rem]"} leading-none`}>{m.k}</div>
          <div className="mono text-[10px] mt-1.5" style={{ color: "var(--faint)" }}>
            {m.v}
          </div>
        </div>
      ))}
    </div>
  );
}

function Card({ p, flagship }) {
  const [open, setOpen] = useState(false);
  const [ref, visible] = useReveal();
  const bodyId = `proj-${p.name.replace(/\W+/g, "-")}`;

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "in" : ""} card rounded-xl p-7 sm:p-8 flex flex-col ${
        flagship ? "grid-paper" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow">{p.tag}</span>
        <span className="mono text-[10px] shrink-0" style={{ color: "var(--faint)" }}>
          {p.period}
        </span>
      </div>

      <h3 className={`display ${flagship ? "text-[clamp(1.8rem,3.8vw,2.6rem)]" : "text-[1.45rem]"} mt-3 mb-0`}>
        {p.name}
      </h3>

      <p className="mono text-[11.5px] mt-2 mb-0" style={{ color: "var(--faint)" }}>
        {p.org}
      </p>

      <p
        className={`${flagship ? "text-[16.5px]" : "text-[15px]"} leading-relaxed mt-4 mb-6 max-w-[60ch]`}
        style={{ color: "var(--muted)" }}
      >
        <strong className="font-semibold" style={{ color: "var(--ink)" }}>
          {p.headline}.
        </strong>{" "}
        {p.summary}
      </p>

      {p.metrics && (
        <div className="mb-5">
          <Metrics items={p.metrics} large={flagship} />
        </div>
      )}

      {open && (
        <p
          id={bodyId}
          className="text-[14.5px] leading-relaxed mb-5 pl-5 max-w-[66ch]"
          style={{ color: "var(--muted)", borderLeft: "2px solid var(--accent)" }}
        >
          {p.detail}
        </p>
      )}

      <div className="mt-auto pt-1 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span
              key={t}
              className="mono text-[11.5px] px-2.5 py-1.5 rounded"
              style={{ background: "var(--bg-alt)", color: "var(--muted)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[13.5px] font-medium"
              style={{ color: "var(--accent)" }}
            >
              {p.linkLabel || "Link"} <ArrowUpRight size={13} strokeWidth={2.5} />
            </a>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={bodyId}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium"
            style={{ color: "var(--ink)" }}
          >
            {open ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
            {open ? "Less" : "How it works"}
          </button>
        </div>
      </div>
    </article>
  );
}

const SHOWN = 3; // alongside the flagship, so four are visible at first

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [flagship, ...rest] = projects;
  const visible = showAll ? rest : rest.slice(0, SHOWN);
  const hidden = rest.length - SHOWN;

  return (
    <section id="projects" className="shell py-16 sm:py-20">
      <SectionHead
        label="Selected projects"
        title="Things I built"
        note="Systems work first. Every number here was measured, not estimated."
      />

      <div className="grid gap-4">
        <Card p={flagship} flagship />
        <div className="grid md:grid-cols-2 gap-4">
          {visible.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>

      {hidden > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium transition-colors"
            style={{ border: "1px solid var(--line)", background: "var(--surface)", color: "var(--ink)" }}
          >
            {showAll ? "Show fewer" : `Show ${hidden} more project${hidden > 1 ? "s" : ""}`}
            <ChevronDown
              size={15}
              strokeWidth={2.5}
              style={{
                transform: showAll ? "rotate(180deg)" : "none",
                transition: "transform 0.25s ease",
              }}
            />
          </button>
        </div>
      )}
    </section>
  );
}
