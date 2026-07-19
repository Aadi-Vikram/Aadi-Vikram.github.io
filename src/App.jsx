import React, { useEffect, useState } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Writing from "./sections/Writing";
import Toolkit from "./sections/Toolkit";
import Contact from "./sections/Contact";

export default function App() {
  const [dark, setDark] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full"
        style={{ background: "var(--ink)", color: "var(--bg)" }}
      >
        Skip to content
      </a>

      <Nav dark={dark} onToggleTheme={() => setDark((v) => !v)} />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Writing />
        <Toolkit />
        <Contact />
      </main>
    </div>
  );
}
