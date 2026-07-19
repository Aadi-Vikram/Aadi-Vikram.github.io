import React from "react";
import { skills } from "../data";
import SectionHead from "./SectionHead";
import { useReveal } from "../useReveal";

function Group({ group, items }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "in" : ""} rule py-8 grid md:grid-cols-[196px_1fr] gap-3 md:gap-10`}>
      <span className="eyebrow md:pt-1">{group}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="mono text-[13px] px-3.5 py-2 rounded-md transition-colors"
            style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--ink)" }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="shell py-16 sm:py-20">
      <SectionHead
        label="Toolkit"
        title="What I work with"
        note="Listed only where I've shipped something real with it."
      />
      <div>
        {skills.map((s) => (
          <Group key={s.group} {...s} />
        ))}
      </div>
    </section>
  );
}
