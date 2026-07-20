import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Code2 } from "lucide-react";
import { profile, stats } from "../data";
import Throughput from "./Throughput";
import Glance from "./Glance";

const socials = [
  { href: profile.links.github, icon: Github, label: "GitHub" },
  { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.links.leetcode, icon: Code2, label: "LeetCode" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-14">
      <div className="shell">
        {/* Who this is */}
        <div className="fade-up flex items-center gap-4 mb-7" style={{ animationDelay: "0.05s" }}>
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="w-[58px] h-[58px] rounded-full object-cover shrink-0"
            style={{ border: "1px solid rgba(255,255,255,0.18)" }}
          />
          <div>
            <p className="m-0 text-[17px] font-semibold tracking-tight">{profile.fullName}</p>
            <p className="m-0 mono text-[11px] mt-1" style={{ color: "var(--faint)" }}>
              SOFTWARE ENGINEER · MCDS @ CARNEGIE MELLON · DEC 2026
            </p>
          </div>
        </div>

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
        </div>

        <div className="grid lg:grid-cols-[1.08fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Headline */}
          <div>
            <h1 className="display text-[clamp(3rem,7.6vw,5.9rem)]">
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

            <p
              className="fade-up mt-8 text-[21px] sm:text-[24px] font-medium leading-snug max-w-[36ch]"
              style={{ color: "var(--ink)", animationDelay: "0.58s" }}
            >
              {profile.lead}
            </p>

            <p
              className="fade-up mt-4 text-[15px] sm:text-[16px] leading-relaxed max-w-[58ch]"
              style={{ color: "var(--muted)", animationDelay: "0.66s" }}
            >
              {profile.intro}
            </p>

            <div className="fade-up mt-8 flex flex-wrap items-center gap-2.5" style={{ animationDelay: "0.72s" }}>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-[15px] font-medium transition-transform hover:-translate-y-px"
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
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-[15px] font-medium"
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
            <p className="mono text-[11px] mt-3 mb-5 text-center" style={{ color: "var(--faint)" }}>
              {profile.now}
            </p>
            <Glance />
          </div>
        </div>

        {/* Stat band */}
        <dl className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 rule pt-8 gap-y-8">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "md:pl-7" : ""}>
              <dt className="display text-[2rem] sm:text-[2.45rem]">{s.value}</dt>
              <dd className="m-0 mt-2 text-[14px] font-medium">{s.label}</dd>
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
