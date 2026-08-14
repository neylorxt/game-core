# GameCore

Landing page for **GameCore**, a managed backend platform for multiplayer games: authentication, matchmaking, dedicated servers, cloud saves, analytics and more.

A responsive, developer-focused landing page built for teams using **Unreal Engine**, **Unity** or custom engines.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [lucide-react](https://lucide.dev) — icons
- [framer-motion](https://www.framer.com/motion/) — animations

## Features

The page is composed of the following sections:

| Section | Description |
| --- | --- |
| Navbar | Sticky navigation with mobile menu, CTA and GitHub icon |
| Hero | Headline, description, CTAs and a developer dashboard mock (stats, chart, matchmaking queue, activity feed) |
| Core Services | 10 services: authentication, profiles, matchmaking, leaderboards, achievements, statistics, cloud saves, inventory, friends, multiplayer sessions |
| Game Dashboard | Animated metrics: active players, concurrent sessions, API requests, average latency |
| Matchmaking | Visual flow Player → Queue → Matchmaking → Game Session with a terminal log |
| Player Management | Player table: username, player ID, platform, level, last online |
| Multiplayer Servers | Server table: region, server, players, ping, status |
| SDK | Interactive tabs for Unreal Engine, Unity, C++, C#, TypeScript |
| API | REST request example + endpoint list |
| Analytics | DAU / concurrent players / session duration / retention metrics with sparklines |
| Global Infrastructure | Network diagram (control plane + regions) and per-region latency list |
| Security | Authentication, rate limiting, encryption, server validation |
| Pricing | 3 plans: Indie, Studio, Enterprise |
| Docs CTA | Call-to-action banner with install example |
| Footer | Links, system status and navigation columns |

## Prerequisites

- Node.js **20** or newer
- npm (or pnpm / yarn / bun)

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/neylorxt/game-core.git
cd game-core

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build after `build` |
| `npm run lint` | ESLint check |

## Project structure

```
app/
├── layout.tsx            # Root layout + Geist fonts
├── page.tsx              # Section composition
├── globals.css           # Tailwind v4 theme
└── components/
    ├── navbar.tsx        # Navigation bar
    ├── hero.tsx          # Hero section + dashboard mock
    ├── core-services.tsx # Services grid
    ├── game-dashboard.tsx# Metrics + chart
    ├── matchmaking.tsx   # Matchmaking flow
    ├── player-management.tsx
    ├── multiplayer-servers.tsx
    ├── sdk.tsx           # Interactive SDK tabs
    ├── api.tsx           # REST API example
    ├── analytics.tsx     # Analytics + retention
    ├── global-infrastructure.tsx
    ├── security.tsx
    ├── pricing.tsx
    ├── docs-cta.tsx
    ├── footer.tsx
    ├── primitives.tsx    # Reveal, Counter, SectionHeading…
    ├── chart-utils.ts    # SVG helpers for charts
    └── icons.tsx         # Shared icons (GitHub)
```

## A note on animations

The scroll-reveal (`Reveal`) and animated counter (`Counter`) components rely on a custom hook built on the native `IntersectionObserver`. On some React 19 runtimes framer-motion's `whileInView` / `useInView` fail to fire; this hook guarantees reliable behavior.

## Deploy

The easiest way is to deploy on [Vercel](https://vercel.com/new) by connecting the GitHub repository. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
