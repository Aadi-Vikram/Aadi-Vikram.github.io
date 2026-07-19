// ─────────────────────────────────────────────────────────────
//  Background style. Change this one value to restyle the page.
//
//  "nodes"     a cluster drawn as a graph, live            (default)
//  "mesh"      static colour wash, calm and even
//  "aurora"    slow drifting colour fields, most alive
//  "spotlight" a single glow above the fold, understated
//  "grid"      technical: fine grid, no colour
//  "dots"      dot matrix, quiet and precise
//  "none"      flat background, nothing behind the content
//
//  Add ?bg to the site URL to open a picker and try them live.
// ─────────────────────────────────────────────────────────────
export const BACKDROP = "nodes";

export const BACKDROP_OPTIONS = [
  { id: "nodes", label: "Node mesh", hint: "Live cluster graph" },
  { id: "mesh", label: "Mesh", hint: "Static colour wash" },
  { id: "aurora", label: "Aurora", hint: "Drifting fields" },
  { id: "spotlight", label: "Spotlight", hint: "Single glow" },
  { id: "grid", label: "Grid", hint: "Technical, no colour" },
  { id: "dots", label: "Dots", hint: "Dot matrix" },
  { id: "none", label: "Flat", hint: "Nothing behind" },
];
