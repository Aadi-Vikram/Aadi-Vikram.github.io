import React, { useState } from "react";
import Backdrop from "./sections/Backdrop";
import BackdropPicker from "./sections/BackdropPicker";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Writing from "./sections/Writing";
import Toolkit from "./sections/Toolkit";
import Contact from "./sections/Contact";
import { BACKDROP } from "./config";

export default function App() {
  const [backdrop, setBackdrop] = useState(BACKDROP);

  // ?bg in the URL opens the background picker. Visitors never see it.
  const showPicker =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).has("bg");

  return (
    <div className="min-h-screen">
      <Backdrop variant={backdrop} />

      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full"
        style={{ background: "var(--ink)", color: "var(--bg)" }}
      >
        Skip to content
      </a>

      <Nav />
      <main>
        <Hero />
        <div className="shell">
          <Marquee />
        </div>
        <Work />
        <Projects />
        <Writing />
        <Toolkit />
        <Contact />
      </main>

      {showPicker && <BackdropPicker value={backdrop} onChange={setBackdrop} />}
    </div>
  );
}
