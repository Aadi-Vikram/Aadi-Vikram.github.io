import React, { useEffect, useRef } from "react";

/**
 * A cluster drawn as a graph. Nodes drift on independent slow paths,
 * edges connect nearest neighbours, and packets travel the edges.
 * Rendered to canvas so it stays cheap at any viewport size.
 */

const DENSITY = 26000; // one node per this many square pixels
const MAX_NODES = 90;
const MIN_NODES = 26;
const NEIGHBOURS = 2;
const MAX_EDGE = 230; // px, longer pairs are not connected
const PACKET_COUNT = 10;
const FRAME_MS = 1000 / 30;

const EDGE = "125, 149, 255";
const NODE = "150, 165, 255";
const PACKET = "200, 214, 255";

function buildGraph(w, h) {
  const target = Math.round((w * h) / DENSITY);
  const count = Math.max(MIN_NODES, Math.min(MAX_NODES, target));

  // Jittered grid keeps spacing even without clumps.
  const cols = Math.ceil(Math.sqrt((count * w) / h));
  const rows = Math.ceil(count / cols);
  const nodes = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (nodes.length >= count) break;
      const cellW = w / cols;
      const cellH = h / rows;
      nodes.push({
        hx: (c + 0.5) * cellW + (Math.random() - 0.5) * cellW * 0.72,
        hy: (r + 0.5) * cellH + (Math.random() - 0.5) * cellH * 0.72,
        x: 0,
        y: 0,
        amp: 6 + Math.random() * 12,
        speed: 0.00007 + Math.random() * 0.00013,
        phase: Math.random() * Math.PI * 2,
        hub: Math.random() < 0.16,
      });
    }
  }

  nodes.forEach((n) => {
    n.x = n.hx;
    n.y = n.hy;
  });

  const seen = new Set();
  const edges = [];
  nodes.forEach((n, i) => {
    const near = nodes
      .map((m, j) => ({ j, d: Math.hypot(m.hx - n.hx, m.hy - n.hy) }))
      .filter((o) => o.j !== i && o.d < MAX_EDGE)
      .sort((a, b) => a.d - b.d)
      .slice(0, NEIGHBOURS);

    near.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) return;
      seen.add(key);
      edges.push([i, j]);
    });
  });

  const packets = Array.from({ length: Math.min(PACKET_COUNT, edges.length) }, () => ({
    edge: Math.floor(Math.random() * edges.length),
    t: Math.random(),
    speed: 0.0016 + Math.random() * 0.0028,
  }));

  return { nodes, edges, packets };
}

export default function NodeMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let graph = null;
    let raf = 0;
    let last = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      graph = buildGraph(width, height);
      draw(0);
    };

    const draw = (time) => {
      if (!graph) return;
      const { nodes, edges, packets } = graph;
      ctx.clearRect(0, 0, width, height);

      if (!reduced) {
        nodes.forEach((n) => {
          n.x = n.hx + Math.sin(time * n.speed + n.phase) * n.amp;
          n.y = n.hy + Math.cos(time * n.speed * 0.82 + n.phase) * n.amp * 0.72;
        });
      }

      ctx.lineWidth = 0.8;
      edges.forEach(([a, b]) => {
        const n = nodes[a];
        const m = nodes[b];
        const d = Math.hypot(m.x - n.x, m.y - n.y);
        const fade = 1 - Math.min(1, d / MAX_EDGE);
        ctx.strokeStyle = `rgba(${EDGE}, ${(0.05 + fade * 0.16).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      });

      nodes.forEach((n) => {
        const r = n.hub ? 2.4 : 1.5;
        ctx.fillStyle = `rgba(${NODE}, ${n.hub ? 0.5 : 0.32})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (n.hub) {
          ctx.strokeStyle = `rgba(${NODE}, 0.14)`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 4.5, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      if (!reduced) {
        packets.forEach((p) => {
          const [a, b] = edges[p.edge];
          const n = nodes[a];
          const m = nodes[b];
          const x = n.x + (m.x - n.x) * p.t;
          const y = n.y + (m.y - n.y) * p.t;
          ctx.fillStyle = `rgba(${PACKET}, ${(0.5 * Math.sin(p.t * Math.PI)).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    };

    const tick = (time) => {
      raf = requestAnimationFrame(tick);
      if (time - last < FRAME_MS) return;
      last = time;

      if (graph) {
        graph.packets.forEach((p) => {
          p.t += p.speed * (FRAME_MS / 16.7);
          if (p.t >= 1) {
            p.t = 0;
            p.edge = Math.floor(Math.random() * graph.edges.length);
          }
        });
      }
      draw(time);
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 180);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf && !reduced) {
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    if (!reduced) raf = requestAnimationFrame(tick);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="node-mesh" aria-hidden="true" />;
}
