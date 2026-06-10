# HermeΣ Design Elevation Pass — Prompt for Claude

You are doing a **design-only elevation pass** on the HermeΣ marketing site. The structure, copy, and information architecture are final — your job is to take a clean-but-flat design and make it feel like a top-tier product site: the restraint of Linear, the polish of Stripe, the material richness of a luxury print brand. Work in this repo on the `dev` branch.

## Context

- **Product:** HermeΣ — automation for Greek-life chapters. Reads meeting-minutes PDFs from Slack, posts AI summaries with per-member action items, syncs Google Calendar.
- **Stack:** Astro 5 + Tailwind CSS v4 (tokens in `src/styles/global.css` under `@theme`), static output, Netlify. `npm run dev` / `npm run build`. A preview launch config named `hermes-site` exists in `.claude/launch.json`.
- **Layout shell:** `src/layouts/BaseLayout.astro` (head/SEO/fonts/scroll-reveal script). Components in `src/components/`, pages in `src/pages/`.
- **Identity (do not change):** navy + gold luxury editorial.
  - Colors: gold `#C9A84C`, gold-light `#E8C97A`, gold-dim `#7A6230`, navy `#0A0E1A`, navy-mid `#111827`, navy-surface `#1A2235`, navy-card `#1F2D42`, cream `#F5F0E8`, cream-dim `#C8BFA8`.
  - Type: Bebas Neue (display), Cormorant Garamond (serif italic accents), DM Sans (body).
  - Existing motifs: gold blueprint grid (`.bg-grid`), radial gold glows (`.glow-gold`), gold top-border cards, pill CTAs, eyebrow labels with leading rule, scroll reveals (`.reveal` + IntersectionObserver).

## Hard constraints — breaking any of these fails the task

1. **Don't touch copy, page structure, routes, or `src/config.ts`'s API.** Placeholder TODOs (testimonial, pricing, Calendly) stay as-is.
2. **Keep the Netlify form markup intact** in `src/pages/demo.astro`: `data-netlify`, `netlify-honeypot`, hidden `form-name` input, field names.
3. **Keep the `<noscript>` reveal fallback** in `BaseLayout.astro` working — content must be visible with JS off.
4. **Respect `prefers-reduced-motion`** for every new animation, including scroll-linked ones.
5. **Maintain WCAG AA contrast** for text (gold-on-navy passes at ~8.4:1; don't introduce gold-on-cream body text or low-opacity text below AA).
6. **Budget:** $0. No paid assets, fonts, stock, or services. No JS libraries — CSS-first, vanilla JS only, total *added* JS under ~5KB.
7. **Performance:** `npm run build` passes; Lighthouse Performance/A11y/Best-Practices/SEO stay ≥ 90.

## The work

Highest-impact first. Check items off as you go.

### 1. Product visualization (the single biggest gap)

The site *tells* but never *shows*. Build stylized product mockups in pure HTML/CSS (no images, no pixel-perfect clone of Slack's UI — an abstracted, gold-accented dark interpretation):

- [ ] **Slack-style mockup** for the hero or solution section: a `#chapter-minutes` channel frame → a member message with a PDF file card (`Chapter_Meeting_Minutes.pdf`) → a reply from "HermeΣ ⚡ APP" containing a structured summary block: "📋 Decisions", "✅ Action Items" with 3–4 rows of `@member` gold chips + task text, timestamp.
- [ ] **Calendar mockup** (smaller, can pair with the "calendar updates itself" flow step): a minimal week strip where two gold event pills exist and one slides/fades in.
- [ ] **Animate the story:** on scroll into view, the messages cascade in sequence (PDF → bot reply → summary rows stagger). One IntersectionObserver, CSS animation classes, reduced-motion = everything visible statically.
- Done when: a visitor who reads zero copy understands the product from the hero/solution visuals alone.

### 2. Hero depth & choreography

- [ ] Layered background: keep `.bg-grid`, add 2–3 radial gold glows at different depths with **very slow** drift (60s+ loops), plus a subtle grain/noise overlay (tiny inline SVG `feTurbulence` data-URI at 2–3% opacity) to kill gradient banding.
- [ ] Entrance choreography: eyebrow → headline lines → subtitle → CTAs → trust badge, staggered ~90ms apart, `cubic-bezier(0.16, 1, 0.3, 1)`, 600–700ms.
- [ ] Give the headline a **gold-foil treatment** on the gold line: `linear-gradient(135deg, #E8C97A, #C9A84C 45%, #8A6F33 70%, #E8C97A)` with `background-clip: text`; optional slow `background-position` shimmer (disabled under reduced motion).
- [ ] If the Slack mockup lives in the hero: asymmetric two-column composition on desktop (text left, mockup right with slight perspective tilt + floating shadow), stacked on mobile.

### 3. Iconography & ornament

- [ ] Replace all emoji icons (📄 ✅ 📅 ⚡ 🔌 📈 in feature cards, flow chips, god card) with a **consistent inline-SVG icon set**: 24px, 1.5px stroke, `currentColor` gold. Hand-draw simple ones (document, checklist, calendar, bolt, plug, chart) — no icon library dependency.
- [ ] Create a **Greek meander (key) pattern divider** component — an inline SVG strip, gold at 20–30% opacity — and use it as the section divider in 2–3 deliberate places (e.g., above the footer, under page heroes). Subtle, not theme-park.
- [ ] Add a faint **Σ watermark** (oversized, 3–4% opacity, clipped) to one or two dark sections for depth.

### 4. Micro-interactions

- [ ] Buttons: gold shimmer sweep on hover (pseudo-element gradient translate), 200ms; keep the existing lift.
- [ ] Cards: cursor-following **gold spotlight** on borders — one delegated `pointermove` listener writing `--mx`/`--my` custom props, `radial-gradient` on a masked pseudo-element. Desktop-only (`@media (hover: hover)`).
- [ ] Nav links: animated gold underline (scale-x from left, 200ms).
- [ ] Flow steps (`FlowStep.astro`): the vertical connector line **draws itself** (scale-y) as each step reveals.
- [ ] FAQ (`FaqItem.astro`): smooth open/close height animation (CSS `grid-template-rows` 0fr→1fr technique or `interpolate-size` with fallback), rotate the `+` you already have.
- [ ] Case-study stat cards: count-up only if trivially cheap; otherwise skip — don't add JS weight for it.

### 5. Section rhythm — break the all-dark monotony

- [ ] Convert **one** section per long page to a light "ivory editorial" treatment (`#F5F0E8` bg, navy text, gold accents) — best candidates: the case-study teaser on home, the testimonial block on case-study. This is the luxury-print moment; serif gets more room here.
- [ ] Vary section transitions: at least one angled or ornament-divided seam instead of flat color swaps.
- Watch contrast: navy text on cream ✓; do not put gold body text on cream.

### 6. Component polish

- [ ] **Pricing:** featured tier slightly scaled (`lg:scale-105`), warmer glow, gold-foil price treatment; add a per-card hover lift consistent with feature cards.
- [ ] **Forms (demo page):** focus state = gold ring glow (`box-shadow: 0 0 0 3px rgba(201,168,76,.25)` + border); style the `<select>` arrow (custom SVG chevron, `appearance-none`); style `::placeholder` consistently.
- [ ] **Testimonial:** add a portrait placeholder — gold-ringed circle with `Σ` monogram — sized so a real photo drops in later without layout shift.
- [ ] **Footer:** add a Greek-key divider on top, an oversized low-opacity wordmark, tighten column rhythm.
- [ ] **Scrollbar + selection:** thin navy scrollbar with gold thumb on WebKit; selection styling already exists.
- [ ] **404:** make the giant 404 use the gold-foil gradient; add the winged-sandal/bolt icon.

### 7. Brand assets

- [ ] Redesign `public/logo.svg` + `public/favicon.svg`: evolve beyond the plain "H" roundel — e.g., H with a subtle wing or bolt cut, or an H/Σ monogram. Keep it readable at 16px. Same gold-gradient-on-navy language. (Owner will eventually supply a final logo; yours should still be a real upgrade.)
- [ ] Create `public/og-image.png` (1200×630): navy field, grid texture, gold-foil "HermeΣ" wordmark + tagline "Chapter admin, automated." Generate it however works ($0): render an HTML file at 1200×630 in the preview tool and screenshot it, or SVG→PNG locally. Then **uncomment the `og:image` meta** in `BaseLayout.astro` and add `twitter:card` = `summary_large_image`.

### 8. Motion governance (apply to everything above)

- Entrances: `cubic-bezier(0.16, 1, 0.3, 1)`, 600–800ms, stagger 80–120ms.
- Hovers: 150–250ms ease-out. Ambient loops: 20s+, opacity/transform only.
- Never animate layout properties; `transform`/`opacity` only.
- Single global reduced-motion kill switch: extend the existing media query in `global.css` so ALL new animation classes neutralize there.

## Process

1. Read `src/styles/global.css`, `BaseLayout.astro`, and `index.astro` fully before changing anything.
2. Work top-down: hero + mockups first (item 1–2), then global systems (3–4), then rhythm/polish (5–6), then assets (7).
3. After each major item: `npm run build`, then screenshot at **375 / 768 / 1280px** via the preview server and visually compare against the previous state. Fix regressions before moving on.
4. Commit per work item with descriptive messages, on `dev`.

## Final verification checklist

- [ ] `npm run build` clean; all 10 pages render.
- [ ] Demo-page form markup unchanged (`grep data-netlify dist/demo/index.html`).
- [ ] No console errors/warnings on any page.
- [ ] Reduced-motion pass: emulate `prefers-reduced-motion` and confirm no movement, all content visible.
- [ ] No-JS pass: confirm `<noscript>` keeps everything visible (check built HTML).
- [ ] Keyboard pass: tab through nav (incl. mobile menu), FAQ, form — visible focus everywhere.
- [ ] Lighthouse ≥ 90 across the board on `/` and `/demo`.
- [ ] og-image renders correctly in a social-preview checker.

## Out of scope

Copy changes, new pages/routes, CMS, analytics, paid services, JS frameworks, restructuring `src/config.ts`, real customer data or invented metrics/testimonials.
