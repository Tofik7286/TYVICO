# TYVICO

**BUILD • INNOVATE • SCALE**

Landing page for TYVICO — an AI-first IT services company offering website development, application development, custom software, SaaS development, AI solutions, and digital marketing.

🔗 **Live:** [tyvico.com](https://tyvico.com) · 📧 info@tyvico.com · 💬 [WhatsApp](https://wa.me/917048786234)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Font | Inter (Google Fonts) |
| Language | JavaScript (JSX) |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173/`.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav, mobile menu, theme toggle
│   ├── Hero.jsx            # Headline, subtext, CTA, browser-frame mockup
│   ├── TrustStrip.jsx      # Credibility markers strip
│   ├── Services.jsx        # AI Solutions featured + 5 services
│   ├── Process.jsx         # "How We Work" — 5-step timeline
│   ├── WhyAI.jsx           # AI-first positioning section
│   ├── Work.jsx            # Capability showcase (3 mockups)
│   ├── About.jsx           # Company description
│   ├── CTA.jsx             # Closing call-to-action
│   ├── Footer.jsx          # Nav, contact, copyright
│   ├── Logo.jsx            # Inline SVG brand mark + wordmark
│   ├── Button.jsx          # Reusable primary/secondary button
│   └── ThemeToggle.jsx     # Dark/light mode toggle
├── App.jsx                 # Section composition + scroll animations
├── main.jsx                # React entry point
└── index.css               # Tailwind v4 config + design tokens
public/
├── images/                 # Mockup images for hero + work sections
└── favicon.svg             # TYVICO favicon
```

## Design System

**Colors:**
- Primary dark: `#0A0E27` (navy)
- Accent gradient: `#F97316` → `#EF4444` (orange to red)
- Neutrals: Zinc-based gray scale

**Theme:** Dark mode default with light mode toggle. Respects `prefers-color-scheme` on first load, persists user choice to `localStorage`.

**Typography:** Inter — weights 400 (body), 500 (medium), 600 (semibold), 700–800 (headings).

## Features

- ⚡ Dark/light theme with system preference detection
- 📱 Fully responsive (tested at 375px, 390px, 768px, 1024px, 1440px)
- ♿ Accessible — semantic HTML, keyboard navigation, ARIA labels, WCAG AA contrast
- 🎯 "Book a Call" → WhatsApp redirect with pre-filled message
- 🎨 Scroll-triggered fade-in animations (Intersection Observer, no library)
- 🚫 Respects `prefers-reduced-motion`

## Contact

- **Email:** info@tyvico.com
- **WhatsApp:** +91 7048786234
- **Location:** Ahmedabad, India

---

© 2026 TYVICO. All rights reserved.