import React, { useEffect, useMemo, useRef, useState } from "react";
import { throughput } from "../data";

// A load-test ramp: the shape of tuning a service from 200 to 5,000 RPS.
const SERIES = [
  200, 240, 310, 420, 560, 520, 700, 980, 1250, 1180, 1520, 1900, 2280, 2200,
  2650, 3100, 3450, 3380, 3800, 4200, 4550, 4900, 6000, 5150, 4980, 5060, 5000,
  5020, 4990, 5010,
];

const W = 660;
const H = 190;
const PAD = { t: 18, r: 8, b: 22, l: 8 };
const MAX = 6400;

export default function Throughput() {
  const ref = useRef(null);
  const [live, setLive] = useState(false);
  const [count, setCount] = useState(throughput.from);

  const { line, area, peak } = useMemo(() => {
    const innerW = W - PAD.l - PAD.r;
    const innerH = H - PAD.t - PAD.b;
    const pts = SERIES.map((v, i) => [
      PAD.l + (i / (SERIES.length - 1)) * innerW,
      PAD.t + innerH - (v / MAX) * innerH,
    ]);
    const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const peakIndex = SERIES.indexOf(Math.max(...SERIES));
    return {
      line: d,
      area: `${d} L${(W - PAD.r).toFixed(1)},${H - PAD.b} L${PAD.l},${H - PAD.b} Z`,
      peak: { x: pts[peakIndex][0], y: pts[peakIndex][1], value: SERIES[peakIndex] },
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return setLive(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!live) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return setCount(throughput.to);
    const start = performance.now();
    const dur = 1900;
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(throughput.from + (throughput.to - throughput.from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [live]);

  return (
    <figure ref={ref} className="card grid-paper rounded-lg overflow-hidden m-0">
      <figcaption className="flex items-baseline justify-between gap-4 px-4 sm:px-5 pt-4 pb-1">
        <div className="flex items-baseline gap-2.5">
          <span
            className="live-dot w-1.5 h-1.5 rounded-full translate-y-[-2px]"
            style={{ background: "var(--signal)" }}
            aria-hidden="true"
          />
          <span className="eyebrow">Load test · Sustained</span>
        </div>
        <div className="mono text-[10px]" style={{ color: "var(--faint)" }}>
          baseline {throughput.from.toLocaleString()} {throughput.unit}
        </div>
      </figcaption>

      <div className="px-4 sm:px-5 flex items-end gap-2">
        <span
          className="display text-[3.25rem] sm:text-[4.25rem] tabular-nums leading-none"
          style={{ color: "var(--ink)" }}
        >
          {count.toLocaleString()}
        </span>
        <span className="mono text-xs pb-2.5" style={{ color: "var(--muted)" }}>
          {throughput.unit}
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full block" role="img" aria-label={`Throughput ramp from ${throughput.from} to ${throughput.to} requests per second`}>
        <defs>
          <linearGradient id="rampFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <line x1={PAD.l} y1={H - PAD.b} x2={W - PAD.r} y2={H - PAD.b} stroke="var(--line)" strokeWidth="1" />

        <path
          d={area}
          fill="url(#rampFill)"
          style={{ opacity: live ? 1 : 0, transition: "opacity 1.4s ease 0.5s" }}
        />
        <path
          d={line}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{
            strokeDasharray: 2400,
            strokeDashoffset: live ? 0 : 2400,
            transition: "stroke-dashoffset 2s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />

        {/* Peak marker */}
        <g style={{ opacity: live ? 1 : 0, transition: "opacity 0.5s ease 1.6s" }}>
          <circle cx={peak.x} cy={peak.y} r="3.5" fill="var(--signal)" />
          <text x={peak.x - 9} y={peak.y + 3.5} textAnchor="end" className="mono" fontSize="10" fill="var(--signal)">
            peak {peak.value.toLocaleString()}
          </text>
        </g>
      </svg>

      <div className="px-4 sm:px-5 pb-4 -mt-1">
        <p className="text-[13px] leading-snug m-0" style={{ color: "var(--ink)" }}>
          {throughput.caption}
        </p>
        <p className="mono text-[10.5px] mt-1 m-0" style={{ color: "var(--faint)" }}>
          {throughput.detail}
        </p>
      </div>
    </figure>
  );
}
