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
- Brand: Ryan's own "Ryan" design system (claude.ai Design System artifact). Paper and ink, deep-purple `stage` for feature sections (`.on-stage` class re-points the color tokens), ONE hot-fuchsia `signal` moment per page (the hero's primary button), teal for markers and highlights.
- Type: Archivo 800 for headings, Instrument Sans for everything you read, Instrument Serif italic for pull quotes (`.pull`). Kickers are the only all-caps text.
- Logo: purple rounded square with a fuchsia dot (flips light in dark mode). 10px radius, hairlines, no shadows, 1.5px line icons in ink.
- Motif: a trail map. `TopoMap.astro` draws contours and a route as build-time SVG; the hero version animates once (respects reduced motion).
- Home sections: stage hero, brands, Range (`RangeExplorer.astro` + `src/data/range.ts`: hats x stories), How I'm wired (`WiredFor.astro`: Working Genius + Kolbe), loop (`LoopDiagram.astro`), principles, stories (`StoryRow.astro`), who's behind it, stage closing.
- About: `CareerTimeline.astro` draws the career to scale; update dates there.
- Keep results (numbers) off the home page; they live on story pages.
- Featured stories live in `src/content/stories/`; archive projects in `src/content/work/`.

## Voice and content
- Copy should sound like Ryan: human-centered, purpose-first, practical, warm but direct.
- Only use facts and numbers Ryan has confirmed. Don't invent clients, metrics or quotes.

## Don't touch
- DNS and email settings live in WordPress.com, not here. Never suggest changing MX records.
