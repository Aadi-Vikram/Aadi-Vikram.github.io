import React, { useEffect, useState } from "react";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { profile, sections } from "../data";
import { useActiveSection } from "../useReveal";

const ids = sections.map((s) => s.id);

export default function Nav({ dark, onToggleTheme }) {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bg-blur)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <span
            className="mono text-[11px] font-bold w-7 h-7 grid place-items-center rounded-sm"
            style={{ background: "var(--ink)", color: "var(--bg)" }}
          >
            AV
          </span>
          <span className="hidden sm:block text-[13px] font-semibold tracking-tight">
            {profile.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 text-[13px] rounded-full transition-colors"
              style={{
                color: active === s.id ? "var(--ink)" : "var(--muted)",
                background: active === s.id ? "var(--accent-soft)" : "transparent",
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-transform hover:-translate-y-px"
            style={{ background: "var(--ink)", color: "var(--bg)" }}
          >
            Résumé <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
          <button
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="w-8 h-8 grid place-items-center rounded-full transition-colors"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden w-8 h-8 grid place-items-center rounded-full"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
          >
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-0.5" style={{ background: "var(--bg)", borderBottom: "1px solid var(--line)" }}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm"
              style={{ color: active === s.id ? "var(--ink)" : "var(--muted)" }}
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="py-2.5 text-sm font-medium inline-flex items-center gap-1"
            style={{ color: "var(--accent)" }}
          >
            Résumé <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}
