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

Adding a job: copy an existing object in `experience` and change the fields. `mark` is the
two/three-letter monogram, `accent` its color, `current: true` adds the "Now" badge.

### Resume

Replace `public/Aaditya_Vikram_Saravana_Bhavan_Resume.pdf` with the new file, keeping the
same filename, and every resume link on the site updates.

### Colors and fonts

Design tokens are CSS variables at the top of `src/index.css` — one block for light mode,
one under `html.dark`. Change `--accent` to re-skin the whole site. Fonts load in
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
    Hero.jsx           headline, stats
    Throughput.jsx     animated 200 -> 5,000 RPS chart
    Work.jsx           experience timeline + education
    Projects.jsx       expandable project cards
    Writing.jsx        publications
    Toolkit.jsx        skills
    Contact.jsx        contact + footer
```
