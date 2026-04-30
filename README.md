# My Portfolio

A personal portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features a dark/light theme toggle, scroll-triggered reveal animations, and a project showcase grid.

---

## 🔗 Links

| | |
|---|---|
| **GitHub** | https://github.com/Benz-byte/my-portfolio.git |
| **Live site** | https://my-portfolio-sepia-rho-53.vercel.app/ |

### How to add these (do this after setup):

**GitHub repo:**
1. Go to [github.com/new](https://github.com/new)
2. Name it `my-portfolio`, set it to **Public**
3. Don't initialise with a README (you already have one)
4. Copy the commands GitHub shows you under *"push an existing repository"* and run them in your project folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/your-username/my-portfolio.git
   git push -u origin main
   ```
5. Paste the repo URL into the table above

**Vercel URL:**
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub
2. Import your `my-portfolio` repo
3. Click **Deploy** — no config needed, Vercel auto-detects Next.js
4. Copy the `.vercel.app` URL it gives you and paste it into the table above

---

## 📸 Screenshot

<img width="1918" height="909" alt="homepage" src="https://github.com/user-attachments/assets/efb72c25-d913-4774-9d62-066fe0204ae3" />


---

## Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Customizing Your Portfolio

### Personal info
Edit the placeholder text directly in the section components inside `src/components/sections/`:

| File | What to update |
|---|---|
| `Hero.tsx` | Your name, tagline, and current company |
| `About.tsx` | Bio paragraphs and skills list |
| `Projects.tsx` | `PROJECTS` array — titles, descriptions, URLs, tech stack |
| `Contact.tsx` | Form submission logic (currently simulated) |
| `layout/Footer.tsx` | Social links and email address |
| `layout/Header.tsx` | Your name/logo and nav labels |

### Resume
The Resume button links to `/your-name-resume.pdf`. To activate it:
1. Export your resume as a PDF
2. Rename it `your-name-resume.pdf`
3. Drop it into the `public/` folder

Clicking the button on desktop opens the PDF in a new tab and triggers a download. On mobile it appears as a nav link.

### Replacing images
Drop replacement images into `public/` using the same filenames, or update the paths in the `PROJECTS` array and `About.tsx`:

- `public/profile.jpg` — your headshot (recommended ratio: 3:4)
- `public/project-1.jpg` through `project-4.jpg` — project screenshots (recommended ratio: 16:10)

### Connecting the contact form
`Contact.tsx` currently simulates a network request. To send real emails, replace the `await new Promise(...)` line with a fetch to a service like [Resend](https://resend.com) or [Formspree](https://formspree.io).

---

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Design tokens, base styles, animations
│   ├── layout.tsx            # Root layout — Header, Footer, RevealObserver
│   └── page.tsx              # Home page — composes all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Fixed nav with mobile menu + resume link
│   │   ├── Footer.tsx        # Social links
│   │   └── RevealObserver.tsx # Scroll-triggered reveal wiring
│   ├── sections/
│   │   ├── Hero.tsx          # Full-screen intro
│   │   ├── About.tsx         # Bio + skills + headshot
│   │   ├── Projects.tsx      # Project card grid
│   │   └── Contact.tsx       # Contact form
│   └── ui/
│       ├── Button.tsx        # Multi-variant button primitive
│       ├── Card.tsx          # Project card
│       └── ThemeToggle.tsx   # Dark/light toggle
├── lib/
│   ├── types.ts              # Shared TypeScript interfaces
│   └── utils.ts              # cn() class-merging helper
public/
├── your-name-resume.pdf      # ← drop your resume here
├── profile.jpg
└── project-1.jpg … project-4.jpg
```

---

# Component Architecture

This document explains the structural decisions behind the portfolio's component design.

---

## Directory Layout

Components are split into three layers with distinct responsibilities:

```
components/
├── layout/    # App chrome — always rendered, wrap everything
├── sections/  # Page content — one file per scroll section
└── ui/        # Primitives — stateless, reusable building blocks
```

This mirrors the mental model a visitor uses: the shell (layout), the story (sections), and the atoms that make up each story beat (ui).

---

## Layout Components

### `Header.tsx` — `"use client"`

The header is a client component because it drives two pieces of interactive state: a scroll listener that applies a frosted-glass background once the user has scrolled past 20px, and a boolean that opens/closes the mobile menu. Neither of these can run in a React Server Component.

The nav items are defined as a typed `NavigationItem[]` constant rather than JSX literals so they can be iterated for both the desktop row and the mobile drawer without duplication.

**Known placeholder:** the Resume link currently points to `#contact`. Replace it with `/resume.pdf` once a PDF is added to `public/`.

### `Footer.tsx` — Server Component

The footer has no interactivity, so it remains a Server Component. Social links are a typed array, making it easy to add or remove platforms in one place.

### `RevealObserver.tsx` — `"use client"`

The reveal animation is split deliberately between CSS and JS:

- **CSS** (`globals.css`) owns the visual transition — opacity and translateY with a smooth easing curve.
- **JS** (`RevealObserver`) owns only the trigger — an `IntersectionObserver` that adds the `in-view` class when an element crosses the 10% threshold.

This separation means the animation is purely declarative and requires zero inline styles. `RevealObserver` renders `null` and is placed at the bottom of `<body>` in `layout.tsx`, so it never contributes to layout or paint.

`observer.unobserve()` is called after each element reveals so the observer doesn't continue watching elements that have already animated.

---

## Section Components

All section components are **Server Components** by default. Client-side interactivity is only introduced where strictly necessary.

### `Hero.tsx` — Server Component

The full-screen intro uses CSS-only animations (`animate-fade-up`, `animate-blink`) rather than JS-driven ones. No state, no effects — safe to render on the server.

### `About.tsx` — Server Component

Skills are a plain string array rendered with `.map()`. The profile image uses `next/image` with explicit `width`/`height` to avoid layout shift (CLS).

### `Projects.tsx` — Server Component

The `PROJECTS` data array lives in the same file as the component. For a larger portfolio, this array could be moved to `src/lib/data.ts` or fetched from a CMS without changing the component's JSX.

Each project card is rendered by the `Card` UI component, keeping layout concerns (the grid) separate from display concerns (how a single card looks).

### `Contact.tsx` — `"use client"`

Contact is the only section that requires client-side state: controlled inputs, validation errors, a loading flag, and a sent confirmation. The form submission is currently a simulated async delay — swap the `await new Promise(...)` call for a real API call (e.g. `fetch('/api/contact')` or a third-party service like Resend) without touching the rest of the component.

---

## UI Primitives

### `Button.tsx`

Built with `React.forwardRef` so it can be composed inside other components that need a ref (e.g. radix-based dropdown triggers in the future). Variants (`primary`, `secondary`, `outline`) and sizes (`sm`, `md`, `lg`) are defined as record maps rather than a long ternary chain, making it easy to add a new variant in one line.

Uses the `cn()` utility for class merging, which means callers can pass a `className` prop to override or extend styles without fighting specificity.

### `Card.tsx`

The card has `reveal` applied directly to its root `div`, so each project card animates in independently as the grid scrolls into view. `githubUrl` and `liveUrl` are both optional on the `Project` type — the card conditionally renders each button only when the URL is present, so projects without a live demo or public repo don't show a broken link.

### `ThemeToggle.tsx` — `"use client"`

Theme state lives in `localStorage` under the key `"theme"` and is applied as a `light` class on `<html>`. The CSS in `globals.css` uses this class to switch CSS custom properties, which means the entire theme is controlled by a single class toggle — no context provider, no prop drilling.

Default theme is `"dark"`. The `useEffect` reads `localStorage` on mount to restore a previously saved preference before the first paint.

---

## Shared Types (`src/lib/types.ts`)

Three interfaces cover the entire data model:

| Interface | Used by |
|---|---|
| `Project` | `Projects.tsx`, `Card.tsx` |
| `NavigationItem` | `Header.tsx` |
| `SocialLink` | `Footer.tsx` |

Keeping them in one file means a type change (e.g. adding a `featured: boolean` field to `Project`) is made in one place and TypeScript surfaces every component that needs updating.

---

## Utilities (`src/lib/utils.ts`)

`cn()` is a thin wrapper around `clsx` + `tailwind-merge`. It lets components accept a `className` prop without worrying about conflicting Tailwind classes — `twMerge` resolves conflicts by keeping the last class in the chain.

---



