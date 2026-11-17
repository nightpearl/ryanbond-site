# ryanbond.co

Ryan Bond's professional site. Astro static site, hosted free on Cloudflare Pages, edited with Claude Code.

## Local commands
- `npm install`: install dependencies
- `npm run dev`: run locally at http://localhost:4321
- `npm run build`: build the site into `dist/`

## Cloudflare Pages settings
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

## Pointing ryanbond.co here (do this last)
1. In Cloudflare Pages → the project → Custom domains, add `ryanbond.co` and `www.ryanbond.co`.
2. Cloudflare shows the DNS records to add.
3. In WordPress.com → Domains → ryanbond.co → DNS records, add those records.
4. Leave every MX and email-related record exactly as it is.
