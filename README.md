# Kural AI — Corporate Website

A modular, animated React site for Kural AI, themed around voice, waveforms and audio
feedback. Built with React + React Router + Tailwind CSS + Framer Motion, on Vite.

## Setup

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:5173)
npm run dev

# 3. Build for production → outputs to /dist
npm run build

# 4. Preview the production build locally
npm run preview
```

No environment variables or backend are required — the contact form currently simulates a
submission on the client. Wire `pages/Contact.jsx`'s `handleSubmit` to your form endpoint /
CRM of choice when ready.

## Folder structure

```
src/
  data/
    content.js            # ALL site copy lives here — edit this file to re-word or re-brand
  components/
    layout/
      Navbar.jsx           # Sticky nav, desktop dropdown + mobile drawer
      Footer.jsx
      Layout.jsx           # Wraps every page with Navbar + Footer + scroll-to-top
    ui/                    # Small, reusable, presentation-only building blocks
      Button.jsx           # primary / secondary / pulse / ghost variants
      Icon.jsx             # Inline SVG icon set (no external icon library)
      Reveal.jsx           # Scroll-reveal wrapper + RevealGroup stagger helper
      GlowCard.jsx         # Card with cursor-tracked glow on hover
      SectionHeading.jsx   # Eyebrow + title + body, used at the top of every section
      AnimatedWaveform.jsx # The signature animated equalizer visual + WaveformLine divider
    sections/              # Bigger composed blocks, each used on 1+ pages
      Hero.jsx
      Stats.jsx
      FeatureGrid.jsx
      ProductsOverview.jsx
      ZigzagBenefits.jsx   # The staggered zigzag benefit-card layout (see below)
      CTASection.jsx
  pages/
    Home.jsx
    About.jsx
    Products.jsx           # Products overview / hub page
    Kural1Way.jsx           # Kural 1-Way detail page (Enterprise + End-User zigzag benefits)
    Kural2Way.jsx           # Kural 2-Way detail page (capability grid + live transcript demo)
    Team.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx                  # Route table
  main.jsx                 # App entry, mounts BrowserRouter
  index.css                # Tailwind layers + a couple of global utilities
```

Everything is intentionally split small: a page composes sections, a section composes `ui/`
primitives. To reuse the zigzag layout elsewhere, import `ZigzagBenefits` and pass any
`{ title, body }[]` array — it's not hardcoded to the 1-Way page.

## Design system (Tailwind tokens)

Defined in `tailwind.config.js`:

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0A0E1B` | Page background |
| `surface` / `surface2` / `surface3` | `#121729` / `#1A2036` / `#232B47` | Card/panel layers |
| `signal` | `#2DE8CB` | Primary accent (the "waveform" color) — CTAs, links, glows |
| `pulse` | `#FF6A4D` | Secondary accent — used for Kural 2-Way and alternate CTAs |
| `mist` | `#A6ADC4` | Secondary/body text on dark backgrounds |
| `paper` | `#F6F7FB` | Primary text on dark backgrounds |

Fonts: **Space Grotesk** (display/headings), **Inter** (body), **Noto Sans Tamil** (for the
Tamil script accents used throughout, e.g. குரல்).

## Where the "voice" theme shows up

- `AnimatedWaveform` / `WaveformLine` — an equalizer-bar visual with randomized (but
  deterministic) heights and durations, used in the Hero, as section dividers, and in the
  footer.
- A pulsing "mic ring" (`animate-pulseRing`) around the mic glyph in the navbar and hero.
- Simulated call/transcript panels on the Home, Kural 1-Way and Kural 2-Way pages.
- `ZigzagBenefits` connects its cards with a dashed SVG path that literally traces a
  waveform shape down the page on desktop.

## Notes on content

The reference URL provided in the brief (`kural-landingpage-code.vercel.app`) could not be
reached from this environment, so the copy in `src/data/content.js` was written fresh from
the brief (product names, Tamil-only scope for both products, Enterprise/End-User benefit
split, etc.). Swap in the real copy by editing that one file — no component changes needed.

## Extending

- **Add a new page**: create `src/pages/NewPage.jsx`, wrap its content in `<Layout>`, add a
  `<Route>` in `App.jsx`, and add a nav entry in `src/data/content.js`.
- **Add a language beyond Tamil**: the copy is centralized in `content.js`; a straightforward
  next step is to key each string by locale and add a language switcher to `Navbar.jsx`.
- **Reduced motion**: `index.css` already disables/shortens animations under
  `prefers-reduced-motion: reduce`.
