import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Code2 } from "lucide-react";
import { profile, stats } from "../data";
import Throughput from "./Throughput";

const socials = [
  { href: profile.links.github, icon: Github, label: "GitHub" },
  { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.links.leetcode, icon: Code2, label: "LeetCode" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Availability */}
        <div className="fade-up flex flex-wrap items-center gap-x-4 gap-y-2 mb-9" style={{ animationDelay: "0.1s" }}>
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium"
            style={{
              border: "1px solid var(--line)",
              color: "var(--ink)",
              background: "var(--bg-blur)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="live-dot w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} />
            {profile.seeking}
          </span>
          <span className="eyebrow inline-flex items-center gap-1.5">
            <MapPin size={11} /> {profile.location}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Headline */}
          <div>
            <h1 className="display text-[clamp(2.9rem,8.2vw,5.4rem)]">
              <span className="line-mask">
                <span className="line-inner" style={{ animationDelay: "0.15s" }}>
                  {profile.thesis.line1}
                </span>
              </span>
              <span className="line-mask">
                <span className="line-inner" style={{ animationDelay: "0.3s" }}>
                  <span className="gradient-text">{profile.thesis.line2}</span>
                </span>
              </span>
            </h1>

            <p className="fade-up mono text-[11px] mt-6 tracking-wide" style={{ color: "var(--faint)", animationDelay: "0.5s" }}>
              SOFTWARE ENGINEER · MCDS @ CARNEGIE MELLON · DEC 2026
            </p>

            <p
              className="fade-up mt-6 text-[15px] sm:text-[15.5px] leading-relaxed max-w-[54ch]"
              style={{ color: "var(--muted)", animationDelay: "0.6s" }}
            >
              {profile.intro}
            </p>

            <div className="fade-up mt-8 flex flex-wrap items-center gap-2.5" style={{ animationDelay: "0.72s" }}>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:-translate-y-px"
                style={{
                  background: "linear-gradient(100deg, var(--grad-1), var(--grad-2))",
                  color: "#fff",
                  boxShadow: "0 8px 24px -10px var(--grad-2)",
                }}
              >
                Read the resume <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ border: "1px solid var(--line)", color: "var(--ink)", background: "var(--surface)" }}
              >
                <Mail size={15} /> Get in touch
              </a>
              <div className="flex items-center gap-1 ml-1">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-9 h-9 grid place-items-center rounded-full transition-opacity hover:opacity-60"
                    style={{ color: "var(--muted)" }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Signature chart */}
          <div className="fade-up panel-glow lg:pt-3" style={{ animationDelay: "0.85s" }}>
            <Throughput />
            <p className="mono text-[10.5px] mt-3 text-center" style={{ color: "var(--faint)" }}>
              {profile.now}
            </p>
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
