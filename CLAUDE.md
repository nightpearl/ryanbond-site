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
- `src/content/posts/`: blog posts as Markdown (not wired up yet).
- `public/`: images, favicon, files served as-is.

## Voice and content
- Copy should sound like Ryan: human-centered, purpose-first, practical, warm but direct.
- Only use facts and numbers Ryan has confirmed. Don't invent clients, metrics or quotes.

## Don't touch
- DNS and email settings live in WordPress.com, not here. Never suggest changing MX records.
