# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tidal Realty Services — a full-stack real estate brokerage website built on a V8 App Template. React 19 frontend with TypeScript, Vite, Tailwind CSS, and shadcn/ui. Node.js backend with Express, Drizzle ORM (MySQL), and file-based API routing via `vite-plugin-api-routes`.

## Commands

| Task | Command |
|---|---|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview prod build | `npm run preview` |
| Run all tests | `npm run test` |
| Run single test | `npx vitest run src/path/to/file.test.ts` |
| Tests with UI | `npm run test:ui` |
| Test coverage | `npm run test:coverage` |
| Lint | `npm run lint` |
| Lint + autofix | `npm run lint:fix` |
| Type check | `npm run type-check` |
| Format code | `npm run format` |
| Generate DB migration | `npm run db:generate` |
| Apply DB migration | `npm run db:migrate` |
| Add shadcn component | `npx shadcn-ui@latest add <component-name>` |

## Architecture

### Routing & Layouts

- `src/App.tsx` — Creates `BrowserRouter`, wraps all routes in `RootLayout` with `Suspense` and (in dev) `AiroErrorBoundary`.
- `src/routes.tsx` — Defines all `RouteObject[]` entries. HomePage is eagerly loaded; all other pages are lazy-loaded via `React.lazy()`.
- `src/layouts/RootLayout.tsx` — Centralized layout wrapper that applies Header and Footer to all pages. Pages are pure content components.
- `src/layouts/parts/Header.tsx` and `Footer.tsx` — Shared navigation and footer.
- Type-safe navigation: `Path` and `Params` types exported from `routes.tsx`, custom wrappers in `router.ts`.

### Pages

All in `src/pages/`. Each page is a self-contained content component (no layout concerns):
`index.tsx` (home), `services.tsx`, `listings.tsx`, `asset-management.tsx`, `the-nest.tsx`, `contact.tsx`, `_404.tsx`.

### Backend API

File-based routing under `src/server/api/`. Each file is named by HTTP method:
- `src/server/api/health/GET.ts` — Health check
- `src/server/api/commerce/create-checkout-session/POST.ts` — GoDaddy Commerce checkout

Express middleware configured in `src/server/configure.js` (JSON parsing, error handling, SPA fallback, graceful shutdown with DB cleanup).

### Database

- Drizzle ORM with MySQL2 driver (`src/server/db/`)
- `schema.ts` — Table definitions
- `client.ts` — Connection pool (10 connections, SSL enabled)
- `config.ts` — Reads DB config from `/alloc/config.json` or `NOMAD_ALLOC_DIR` env var
- Migrations output to `./drizzle/`

### State Management

- **Zustand** for global client state
- **TanStack React Query** for server/async state (stale: 5min, cache: 10min, retry: 1 query / 0 mutation)
- **React Hook Form** + **Zod** for form state and validation

### Commerce

GoDaddy Commerce API integration in `src/lib/commerce-client.ts`. Supports checkout session creation with line items or draft orders, configurable shipping/billing/tax options.

## Path Aliases

Configured in `tsconfig.json` and mirrored in `vite.config.ts` / `vitest.config.ts`:

- `@/*` → `./src/*`
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/api` → `./src/server/api`
- `@/db` → `./src/server/db`
- `@/layouts` → `./src/layouts`
- `@/pages` → `./src/pages`
- `@/hooks` → `./src/hooks`
- `@/styles` → `./src/styles`

## UI Components

45+ shadcn/ui components live in `src/components/ui/`. They use Radix UI primitives, Tailwind CSS, and CSS custom properties (HSL variables defined in `src/styles/globals.css`). Tailwind theme extensions (colors, fonts, animations) are in `tailwind.config.js`.

## Build Pipeline

1. `vite build` compiles the React frontend to `dist/`
2. `node bundle.js` uses esbuild to bundle the server into `dist/server.bundle.cjs` (CommonJS, all dependencies inlined)

## Testing

Vitest with JSDOM environment, React Testing Library, and jest-dom matchers. Test setup in `src/test/setup.ts` (includes matchMedia and ResizeObserver mocks). Uses `forks` pool with process isolation to prevent memory issues.

## Environment

Copy `env.example` to `.env`. Key variables: `VITE_APP_NAME`, `VITE_PUBLIC_URL`, `VITE_API_URL`, `NODE_ENV`, `PORT`. Vite-prefixed vars are exposed to the client.

## Dev Tools

In development mode only: source-mapper plugin adds `data-source-*` attributes to DOM elements for AI tool introspection. Dev tools from `../dev-tools/` provide element selection, live editing, and a custom 404 page with navigation helpers.
