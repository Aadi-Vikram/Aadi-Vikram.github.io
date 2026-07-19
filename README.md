# aadi-vikram.github.io

Personal site for Aaditya Vikram Saravana Bhavan. React + Vite + Tailwind, deployed to GitHub Pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/`
to GitHub Pages. Nothing else to do.

## Editing content

**Everything you'll want to change lives in `src/data.js`.** No component edits needed for
routine updates:

| What to update | Where in `src/data.js` |
| --- | --- |
| Name, headline, intro, email, links | `profile` |
| The animated hero chart | `throughput` (curve shape is `SERIES` in `src/sections/Throughput.jsx`) |
| The four numbers under the hero | `stats` |
| Jobs and internships | `experience` |
| Projects | `projects` |
| Papers | `publications` |
| Skills | `skills` |
| Degrees and coursework | `education` |
| Nav links | `sections` |
| The panel under the hero chart | `profile.glance` and `profile.shippedAt` |

Adding a job: copy an existing object in `experience` and change the fields. `mark` is the
two/three-letter monogram, `accent` its color, `current: true` adds the "Now" badge.

### Resume

Replace `public/Aaditya_Vikram_Saravana_Bhavan_Resume.pdf` with the new file, keeping the
same filename, and every resume link on the site updates.

### Background style

`src/config.js` holds one value, `BACKDROP`, with seven options: `nodes` (the default,
a live cluster graph on canvas), `mesh`, `aurora`, `spotlight`, `grid`, `dots`, `none`. To compare them, run the site and add `?bg` to the
URL (`http://localhost:5173/?bg`). A picker appears in the corner, and clicking through
swaps the background live. Set your favourite as `BACKDROP` and the picker stays hidden
for everyone else.

### Colors and fonts

The site is dark only. Design tokens are CSS variables in the `:root` block at the top of
`src/index.css`. Change `--accent` to re-skin everything, or `--grad-1/2/3` to change the
headline gradient and buttons. Fonts load in
`index.html` (Bricolage Grotesque for display, Inter for body, JetBrains Mono for data).

## Structure

```
src/
  data.js              all content
  App.jsx              layout + theme toggle
  index.css            design tokens, base styles, motion
  useReveal.js         scroll-reveal + active-nav-section hooks
  sections/
    Nav.jsx            sticky header
    NodeMesh.jsx       canvas cluster graph behind the page
    Hero.jsx           headline, stats
    Glance.jsx         availability panel and company logos
    Throughput.jsx     animated 200 -> 5,000 RPS chart
    Work.jsx           experience timeline + education
    Projects.jsx       expandable project cards
    Writing.jsx        publications
    Toolkit.jsx        skills
    Contact.jsx        contact + footer
```

## Logos

`public/logos/` holds white marks on transparent backgrounds, sized to sit on the dark
tiles. To add a company: normalise the artwork to a white silhouette on transparency,
drop it in that folder, and point the `logo` field of the relevant `experience` entry at
it. Any entry without a `logo` falls back to the `mark` wordmark tile.
