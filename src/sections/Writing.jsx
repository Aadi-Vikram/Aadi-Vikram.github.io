import React from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { publications, profile } from "../data";
import SectionHead from "./SectionHead";
import { useReveal } from "../useReveal";

function Entry({ pub }) {
  const [ref, visible] = useReveal();
  return (
    <a
      ref={ref}
      href={pub.link}
      target="_blank"
      rel="noreferrer"
      className={`reveal ${visible ? "in" : ""} group block rule py-6 first:border-t-0 first:pt-0`}
    >
      <div className="grid md:grid-cols-[60px_1fr_auto] gap-2 md:gap-6 items-baseline">
        <span className="mono text-[11px]" style={{ color: "var(--faint)" }}>
          {pub.year}
        </span>
        <div>
          <h3 className="text-[15.5px] sm:text-[17px] font-semibold leading-snug m-0 max-w-[58ch] transition-colors group-hover:opacity-70">
            {pub.title}
          </h3>
          <p className="text-[12.5px] m-0 mt-1.5" style={{ color: "var(--muted)" }}>
            {pub.venue}
          </p>
          <p className="mono text-[10.5px] m-0 mt-1" style={{ color: "var(--faint)" }}>
            {pub.authors}
          </p>
          {pub.award && (
            <span
              className="inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-widest mt-2.5 px-2 py-1 rounded"
              style={{ background: "var(--signal)", color: "#fff" }}
            >
              <Award size={11} /> {pub.award}
            </span>
          )}
        </div>
        <span
          className="inline-flex items-center gap-1 text-[12.5px] font-medium shrink-0"
          style={{ color: "var(--accent)" }}
        >
          Paper <ArrowUpRight size={13} strokeWidth={2.5} />
        </span>
      </div>
    </a>
  );
}

export default function Writing() {
  return (
    <section id="writing" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <SectionHead
        label="Publications"
        title="Research I've written"
        note={
          <>
            Three peer-reviewed papers, one Best Paper award.{" "}
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              Google Scholar
            </a>{" "}
            has the current list.
          </>
        }
      />
      <div>
        {publications.map((p) => (
          <Entry key={p.title} pub={p} />
        ))}
      </div>
    </section>
  );
}
