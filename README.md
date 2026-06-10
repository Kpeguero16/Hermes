# HermeΣ — usehermes.online

HermeΣ is your chapter's messenger god: it reads meeting-minutes PDFs the moment they hit Slack, posts clean summaries with action items organized by member, and keeps the chapter's Google Calendar in sync — automatically.

First live chapter: **The Theta Delta Chapter of Sigma Lambda Beta International Fraternity Inc. at Florida International University.**

## This repo

The marketing site for HermeΣ, built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed on Netlify.

```bash
npm install     # install dependencies
npm run dev     # local dev server at localhost:4321
npm run build   # production build to dist/
npm run preview # preview the production build
```

## Structure

- `src/pages/` — one file per route (home, pricing, about, case-study, faq, demo, thanks, privacy, terms, 404)
- `src/components/` — shared UI (nav, footer, cards, pricing, FAQ accordion, Calendly embed)
- `src/layouts/BaseLayout.astro` — head/SEO, fonts, nav/footer shell, scroll-reveal script
- `src/config.ts` — **central site config: contact email, Calendly link, pricing tiers.** All launch TODOs live here and in page-level `TODO` comments.
- `src/styles/global.css` — design tokens (navy + gold identity) and animations
- `netlify.toml` — build settings and security headers

## Before launch (TODOs)

Search the repo for `TODO:` — the big ones:

1. Paste your Calendly link into `src/config.ts` (`calendlyUrl`).
2. Confirm pricing tiers/numbers in `src/config.ts`.
3. Replace the placeholder testimonial + metrics in `src/pages/case-study.astro`.
4. Replace `public/logo.svg` / `public/favicon.svg` with the real logo.
5. Founder bio in `src/pages/about.astro`; legal entity + contact email in `src/config.ts`.
6. Review `privacy.astro` / `terms.astro` drafts.

## License

The code in this repo is MIT-licensed (see [LICENSE](LICENSE)). The HermeΣ name, logo, and site copy are brand content and are not granted under the code license.
