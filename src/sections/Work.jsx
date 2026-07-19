import React from "react";
import { experience, education } from "../data";
import SectionHead from "./SectionHead";
import { useReveal } from "../useReveal";

function Role({ job }) {
  const [ref, visible] = useReveal();

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "in" : ""} grid md:grid-cols-[196px_1fr] gap-4 md:gap-10 py-11 rule first:border-t-0 first:pt-0`}
    >
      {/* Rail: logo + dates */}
      <div className="flex md:flex-col items-center md:items-start gap-3">
        {job.logo ? (
          <span className="logo-tile w-[76px] h-[76px] shrink-0 rounded-2xl overflow-hidden">
            <img src={job.logo} alt={`${job.company} logo`} loading="lazy" />
          </span>
        ) : (
          <span
            className="logo-tile mono text-[15px] font-bold w-[76px] h-[76px] shrink-0 grid place-items-center rounded-2xl"
            style={{ color: job.accent }}
          >
            {job.mark}
          </span>
        )}
        <div className="md:mt-3">
          <p className="mono text-[12px] m-0" style={{ color: "var(--muted)" }}>
            {job.period}
          </p>
          <p className="mono text-[10.5px] m-0 mt-0.5" style={{ color: "var(--faint)" }}>
            {job.place}
          </p>
        </div>
      </div>

      {/* Body */}
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="display text-[1.6rem] sm:text-[1.95rem] m-0">{job.company}</h3>
          {job.current && (
            <span
              className="mono text-[9.5px] uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ background: "var(--signal)", color: "#fff" }}
            >
              Now
            </span>
          )}
          <span className="text-[14px]" style={{ color: "var(--faint)" }}>
            {job.team}
          </span>
        </div>

        <p className="text-[14.5px] font-medium mt-2 mb-3.5" style={{ color: "var(--accent)" }}>
          {job.role}
        </p>

        <p className="text-[15.5px] leading-relaxed m-0 mb-5 max-w-[64ch]" style={{ color: "var(--muted)" }}>
          {job.summary}
        </p>

        <ul className="m-0 p-0 list-none space-y-2.5 max-w-[68ch]">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3.5 text-[15px] leading-relaxed">
              <span className="mono text-[10px] pt-1 shrink-0" style={{ color: "var(--faint)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {job.stack.map((t) => (
            <span
              key={t}
              className="mono text-[11.5px] px-2.5 py-1.5 rounded"
              style={{ background: "var(--bg-alt)", color: "var(--muted)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="shell py-16 sm:py-20">
      <SectionHead
        label="Experience"
        title="Where I've shipped"
        note="Four years of backend and infrastructure work, from security clouds to network telemetry to AWS."
      />

      <div>
        {experience.map((job) => (
          <Role key={job.company + job.period} job={job} />
        ))}
      </div>

      {/* Education */}
      <div className="rule pt-9 mt-2 grid sm:grid-cols-2 gap-4">
        {education.map((e) => (
          <div key={e.school} className="card rounded-lg p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[16.5px] font-semibold m-0">{e.school}</h3>
              <span className="mono text-[10.5px] shrink-0" style={{ color: "var(--faint)" }}>
                {e.period}
              </span>
            </div>
            <p className="text-[14.5px] m-0 mt-1" style={{ color: "var(--muted)" }}>
              {e.degree}
            </p>
            <p className="mono text-[11px] m-0 mt-1.5" style={{ color: "var(--accent)" }}>
              {e.grade}
            </p>
            <p className="text-[12.5px] leading-relaxed m-0 mt-3" style={{ color: "var(--faint)" }}>
              {e.courses.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
