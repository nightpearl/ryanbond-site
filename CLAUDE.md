# ryanbond.co — notes for Claude

This is Ryan Bond's professional website, built with Astro and deployed to Cloudflare Pages.
Every push to `main` publishes the live site at https://ryanbond.co. Every other branch gets a preview URL.

## How to work on this site
- Make changes on a branch, not directly on `main`, so Ryan can check the preview URL first (often on his phone).
- Run `npm run build` before committing; the build must pass.
- Keep it a static site: no server code, no database, no paid services.
- Check every page at phone width (about 380px). Ryan often reviews on mobile.

## Structure
- `src/layouts/Base.astro`: header, footer, global styles and color tokens (light and dark mode).
- `src/pages/`: one file per page. `index.astro` is the home page.
- `src/components/`: reusable pieces (cards, sections).
- `src/content/work/`: one Markdown file per project (case studies). Frontmatter drives the cards and fact box; `group` is product, agency or community; `order` sets the sort.
- `src/copy/`: long-form copy for the Approach and Services pages.
- `src/content/posts/`: blog posts as Markdown (not wired up yet).
- `public/`: images, favicon, files served as-is.
- `public/_redirects`: keeps old WordPress URLs (e.g. /britannica-kids/) working. Add a line when a page moves.

## Images
- Project images currently load from the old WordPress media host (skillpointstation.wordpress.com). Before the WordPress site is retired, download them into `public/images/` and update the paths.

## Visual system (keep consistent)
- Motif: a trail map. `TopoMap.astro` draws contour lines (and an optional blazed route with waypoints) as build-time SVG. The hero map is the one bold element; keep everything else quiet.
- Colors (tokens in `Base.astro`): ink, paper, mist, pine (primary), blaze (trail-marker yellow, only for markers and small highlights), slate.
- Type: Schibsted Grotesk for headings and UI; Source Serif 4 for ledes and long-form reading (`.lede`, `.prose`, `.reading`).
- Other graphics: `LoopDiagram.astro` (insight → prototype → validate → ship), `CareerTimeline.astro` (career to scale; update dates there), `StoryRow.astro` (story list rows; stories without a cover get a topo map).
- Avoid: all-caps labels, "·" separators, "→" appended to links, identical card grids.
- Featured stories live in `src/content/stories/`; archive projects in `src/content/work/`.

## Voice and content
- Copy should sound like Ryan: human-centered, purpose-first, practical, warm but direct.
- Only use facts and numbers Ryan has confirmed. Don't invent clients, metrics or quotes.

## Don't touch
- DNS and email settings live in WordPress.com, not here. Never suggest changing MX records.
