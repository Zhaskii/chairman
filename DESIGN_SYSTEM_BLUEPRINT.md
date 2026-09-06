# Arksh Group Executive Portal — Design System & Architectural Blueprint

This blueprint captures the full design system, animation physics, component architecture, and typography standards developed for the **Arksh Group Executive Portal**, ready to be replicated for the **CEO Portal**.

---

## 🎨 1. Visual Brand & Color Palette

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Arksh Navy** | `#1a3a6e` / `#16335f` | Primary dark headings, contrast titles, deep gradients |
| **Arksh Royal Blue** | `#0154A5` | Primary brand accent, CTA buttons, active state badges |
| **Deep Blue** | `#014182` / `#01356b` | Hero backdrops, sticky topbar, executive ribbons |
| **Sky / Ice Blue** | `#3498db` / `#93c5fd` | Subtitles, glowing counters, hover highlights |
| **Light Blue Canvas** | `#f0f6ff` / `#f8fbff` | Page background canvas, card fills, tag containers |
| **Pure White** | `#ffffff` | Executive cards, modals, button icons |

---

## 📐 2. Layout Structure & Responsive Hierarchy

### A. Navigation Layering
- **Top Contact Bar (Non-Sticky)**:
  - Background `#014182`, text white, `relative z-30`.
  - Holds email (`info@arkshgroup.com`), primary hotline (`+977 980-2074449`), and official status indicator.
  - Scrolls away naturally with the page.
- **Main Header (Fixed Pinned on Scroll `scrollY > 36`)**:
  - `fixed top-0 left-0 right-0 z-50` with `bg-white/95 backdrop-blur-md shadow-md`.
  - Zero-layout-jump placeholder div `<div className="h-[60px] sm:h-[68px]" />` when fixed.
  - Single-line brand identity (`ARKSH GROUP / CEO Office`).
  - Active section navigation pills with blue background highlight.
  - Mobile slide-out drawer with direct hotline buttons.

### B. Hero Banner (`HeroBanner.tsx`)
- Gradient background from `#01356b` $\rightarrow$ `#0154A5` $\rightarrow$ `#16335f`.
- Ambient floating glowing orbs (`.floating-orb-1`, `.floating-orb-2`) with smooth GSAP sine physics.
- Animated light shimmer sweep badge (`.animate-shimmer`).
- Staggered timeline entrance (`power3.out`).

### C. Executive Profile & Strategy Card (`ChairmanMessage.tsx` / `CeoMessage.tsx`)
- **Left Profile Column (`lg:w-[36%]` / `p-6 sm:p-8`)**:
  - Portrait image (`aspect-4/5`) with floating executive badge (`Years of Leadership` with shimmer sweep).
  - Executive name, corporate title, and primary credential badges.
- **Right Address Column (`lg:w-[64%]` / `p-6 sm:p-8 lg:p-11`)**:
  - Centered official address headline.
  - Formatted paragraphs (`space-y-3.5 sm:space-y-4 text-slate-600`).
  - Dual-bordered quote callout box (`border-x-2 border-[#0154A5] bg-linear-to-r from-[#f0f6ff] via-white to-[#f0f6ff]`).
  - Strategic 4-Pillar Grid (`grid-cols-1 sm:grid-cols-2 gap-3.5`) with hover elevation.
  - Executive signature footer with Honors CTA.
- **Integrated Milestone Ribbon**:
  - Embedded directly into the card bottom with royal blue gradient.
  - 4 key metrics with live GSAP counter rollups and glassmorphism icon holders.

### D. Awards & Honors Timeline (`AwardsTimeline.tsx`)
- Chronological timeline with search bar, category filter pills (*All, National, International, Leadership, Industry*).
- Interactive timeline line (`border-l-2 border-blue-200`) with glowing node markers (`group-hover:scale-140 group-hover:shadow-[0_0_16px_rgba(1,84,165,0.8)]`).

### E. Leadership Roles & Affiliations (`LeadershipSection.tsx`)
- Category filter tabs with instant `fromTo` staggered opacity transition.
- Executive position cards with term dates, organizations, and category tags.

### F. Video Speeches & Keynotes (`VideoSection.tsx`)
- 3-video simultaneous viewport (`itemsPerView = 3` on desktop, 2 on tablet, 1 on mobile).
- Synchronized chevron navigation (`translateX(-(index * (100 / itemsPerView))%)`).
- Play button with continuous **sonar wave pulse ring** (`@keyframes sonar-wave`).
- 16:9 responsive in-page YouTube modal with smooth zoom-in physics.

### G. Visual Gallery (`GallerySection.tsx`)
- 4-photo desktop carousel with smooth cubic-bezier sliding physics.
- Fullscreen Lightbox viewer with keyboard arrow navigation.

### H. Diversified Industry Footprint (`SectorsOverview.tsx`)
- 12+ conglomerate business verticals with category chips, descriptions, and direct brand tags (*e.g. Higer Buses, MacCoffee, Dami, Sulux Centre*).
- Filter tabs (*Consumer Goods, Mobility, Hospitality, Retail, Global Commerce*).

### I. Comprehensive Footer (`Footer.tsx`)
- 4-column responsive grid with Arksh Group corporate overview, quick links, copy-to-clipboard email, interactive Google Maps iframe, and live Facebook embed.

---

## ⚡ 3. Animation Presets & Keyframe Recipes

```css
/* Shimmer Sweep Animation */
@keyframes shimmer-sweep {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}

.animate-shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer-sweep 3.5s infinite ease-in-out;
  pointer-events: none;
}

/* Sonar Wave Pulse */
@keyframes sonar-wave {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.6); opacity: 0; }
}

.sonar-wave {
  position: absolute;
  inset: -4px;
  border-radius: 9999px;
  border: 2px solid rgba(52, 152, 219, 0.6);
  animation: sonar-wave 2.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  pointer-events: none;
}
```

---

## 🚀 4. Replicating for CEO Website

When creating the CEO website in the new folder:
1. Initialize with Next.js 16 + React 19 + Tailwind CSS + GSAP + Lucide-react.
2. Copy the design blueprint and `app/globals.css`.
3. Update dataset in `data/content.ts` with the CEO's specific bio, message, milestones, awards, affiliations, and videos.
4. Replace portrait and gallery assets with the CEO's official photography.
