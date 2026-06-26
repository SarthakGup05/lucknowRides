# Lucknow Rides 🚖

A premium, highly-optimized, single-page landing page designed for **Lucknow Rides**—the premier local taxi booking, outstation cab, and Amausi Airport transfer service in Lucknow, Uttar Pradesh.

This codebase is engineered to deliver a stunning visual experience while remaining highly optimized for search engine crawlability (SEO) and Google Ads campaigns.

---

## 🎨 Design System & Aesthetics
* **Color Palette**: Rich Off-White (`#FAF8F5`), Warm Premium Orange (`#EA580C`), Amber (`#F59E0B`), and deep Charcoal (`#1C1917`).
* **Visual Decorators**: Drifting animated SVG gridlines background, hand-drawn vector underlines, and subtle radial gradient glows.
* **Layout**: Fully responsive mobile-first grid structures with fluid typography curves to accommodate compact mobile screens and wide desktop viewports.

---

## ⚡ Key Architectural Features & Utilities

### 1. Dynamic Canvas Transparency Cleaner (`TransparentCarImage.jsx`)
To maintain a high-end look without checkerboard grid patterns or heavy gray backgrounds on fleet pictures, this custom React component:
* Loads vehicle images onto a client-side HTML5 canvas.
* Executes a high-performance **Breadth-First Search (BFS) Flood-Fill** algorithm starting from the outer borders.
* Automatically turns white/gray grid pixels into 100% transparent alpha channels while keeping the car's gloss details and shadows untouched.

### 2. Scroll-Linked Interactive Timeline (`HowItWorks.jsx`)
* Tracks scroll depth relative *only* to the bounding rectangle of the "How it Works" section.
* Fills an elegant central gradient vertical line dynamically.
* Activates step cards with entrance transforms, scaling, and glows as viewport thresholds are crossed, using professional outline SVGs (no cartoon designs).

### 3. Smart Floating Navigation Capsule (`FloatingActions.jsx`)
* Stacks a persistent Call button, a WhatsApp dispatch link, and a smart scroll navigator at `fixed right-4 bottom-8`.
* tracks scroll height: displays a **Down Arrow** when in the top half of the page (scrolls to footer) and automatically transforms into an **Up Arrow** when in the bottom half of the page (scrolls to top).

---

## 🛠️ Technology Stack
* **Core**: React 19.2 + Vite 8.1
* **Styling**: Tailwind CSS v4 (using the `@import "tailwindcss";` compilation architecture)
* **Linter**: Oxlint (Oxc fast lint engine)
* **Fonts**: Google Fonts (`Plus Jakarta Sans` & `Playfair Display` serif accents)

---

## 📂 Repository Structure

```bash
lucknowRides/
├── public/                  # Public assets (icons, optimized car PNGs, travel landscapes)
│   ├── favicon.svg          # Custom brand logo favicon (Orange/Amber gradient with 'L')
│   └── ...
├── src/
│   ├── assets/              # Base system SVGs and defaults
│   ├── components/          # Modular React Section Components
│   │   ├── Header.jsx       # Sticky backdrop-blur header navigation
│   │   ├── Hero.jsx         # Responsive landing showcase with staggered animations
│   │   ├── Services.jsx     # Main local, airport, & rental packages grid
│   │   ├── Outstation.jsx   # Interactive destination cards with rates
│   │   ├── Fleet.jsx        # Premium fleet selector (Dzire, Ertiga, Fronx, Innova)
│   │   ├── HowItWorks.jsx   # Central vertical scrolling timeline
│   │   ├── Safety.jsx       # Driver checks and sanitization assurances
│   │   ├── Reviews.jsx      # Customer review cards grid
│   │   ├── Pricing.jsx      # Transparent flat pricing tables
│   │   ├── Coverage.jsx     # Interactive regional service map locations
│   │   ├── Footer.jsx       # Quicklinks, address, and designer links
│   │   ├── GridLines.jsx    # Drifting backdrop gridlines
│   │   ├── Underline.jsx    # Hand-drawn curved underline vector decorator
│   │   └── TransparentCarImage.jsx # Client-side image cleaner
│   ├── utils/
│   │   └── contact.js       # Global phone numbers and multi-line WhatsApp dispatch pre-fills
│   ├── App.jsx              # Main layout assembler
│   ├── main.jsx             # React DOM renderer
│   └── index.css            # Custom animations (@keyframes grid-drift, etc.) and utilities
├── index.html               # Main entry HTML with preconnects, SEO metadata, and JSON-LD schema
└── vite.config.js           # Vite dev configurations
```

---

## 🚀 Getting Started

### Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### Run Local Development Server
Launch the hot-reloading development server:
```bash
npm run dev
```

### Lint Checks
Run Oxlint checks to verify code health:
```bash
npm run lint
```

### Production Build
Generate an optimized production bundle inside the `dist/` folder:
```bash
npm run build
```

---

## 📈 SEO & Google Ads Optimizations
The copy across all sections is optimized for keywords:
* `taxi service in lucknow`, `cab booking`, `car booking lucknow`, `rent a car near me`, `cab in lucknow`
* Structural headers follow semantic hierarchy rules (`h1` -> `h2` -> `h3`).
* Structured Schema data (`TaxiService` & `LocalBusiness` JSON-LD) is embedded inside `index.html` to assist search crawlers in indexing business info and prices.
