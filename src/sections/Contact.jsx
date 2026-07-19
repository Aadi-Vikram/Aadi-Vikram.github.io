import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, FileText, Code2 } from "lucide-react";
import { profile } from "../data";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "in/aaditya-vikrams", href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", value: "Aadi-Vikram", href: profile.links.github, icon: Github },
  { label: "LeetCode", value: "aaditya_vikram", href: profile.links.leetcode, icon: Code2 },
  { label: "Resume", value: "PDF, one page", href: profile.resume, icon: FileText },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="shell py-16 sm:py-24">
        <div className="rule pt-10">
          <img
            src={profile.photo}
            alt={profile.fullName}
            loading="lazy"
            className="w-20 h-20 rounded-full object-cover mb-6"
            style={{ border: "1px solid var(--line)" }}
          />
          <span className="eyebrow">Contact</span>
          <h2 className="display text-[clamp(2.2rem,6vw,3.75rem)] mt-3 max-w-[16ch]">
            Hiring for new grad? Let's talk.
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed max-w-[50ch]" style={{ color: "var(--muted)" }}>
            I graduate in December 2026 and I'm looking for backend, distributed systems, or
            infrastructure roles starting January 2027. The fastest way to reach me is email, and I reply the same day.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="card rounded-xl p-5 group"
              >
                <div className="flex items-center justify-between">
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                  <ArrowUpRight
                    size={14}
                    style={{ color: "var(--faint)" }}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <p className="eyebrow mt-4 mb-1">{label}</p>
                <p className="text-[14px] font-medium m-0 break-all">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="rule">
        <div className="shell py-8 flex flex-col sm:flex-row justify-between gap-3">
          <p className="mono text-[10.5px] m-0" style={{ color: "var(--faint)" }}>
            © {new Date().getFullYear()} {profile.fullName} · {profile.location}
          </p>
          <p className="mono text-[10.5px] m-0" style={{ color: "var(--faint)" }}>
            Built with React, Vite and Tailwind
          </p>
        </div>
      </footer>
    </>
  );
}
