import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { profile, stats } from "../data";
import Throughput from "./Throughput";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Availability line */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11.5px] font-medium"
            style={{ border: "1px solid var(--line)", color: "var(--ink)", background: "var(--surface)" }}
          >
            <span className="live-dot w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} />
            {profile.seeking}
          </span>
          <span className="eyebrow inline-flex items-center gap-1.5">
            <MapPin size={11} /> {profile.location}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Left: thesis */}
          <div>
            <h1 className="display text-[clamp(2.6rem,7.5vw,4.75rem)]">
              {profile.thesis[0]}
              <br />
              <span style={{ color: "var(--accent)" }}>{profile.thesis[1]}</span>
            </h1>

            <p
              className="mt-7 text-[15px] sm:text-base leading-relaxed max-w-[52ch]"
              style={{ color: "var(--muted)" }}
            >
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:-translate-y-px"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Read the résumé <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                style={{ border: "1px solid var(--line)", color: "var(--ink)" }}
              >
                <Mail size={15} /> Get in touch
              </a>
              <div className="flex items-center gap-1 ml-1">
                {[
                  { href: profile.links.github, icon: Github, label: "GitHub" },
                  { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 grid place-items-center rounded-full transition-colors hover:opacity-70"
                    style={{ color: "var(--muted)" }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: the signature chart */}
          <div className="lg:pt-2">
            <Throughput />
          </div>
        </div>

        {/* Stat band */}
        <dl className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 rule pt-8 gap-y-8">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "md:pl-7" : ""}>
              <dt className="display text-[1.75rem] sm:text-[2.1rem]">{s.value}</dt>
              <dd className="m-0 mt-1.5 text-[13px] font-medium">{s.label}</dd>
              <dd className="m-0 mono text-[10.5px] mt-0.5" style={{ color: "var(--faint)" }}>
                {s.sub}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
