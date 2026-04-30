# My Portfolio

A personal portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features a dark/light theme toggle, scroll-triggered reveal animations, and a project showcase grid.

---

## 🔗 Links

| | |
|---|---|
| **GitHub** | <!-- TODO: paste your repo URL here, e.g. https://github.com/your-username/my-portfolio --> |
| **Live site** | <!-- TODO: paste your Vercel URL here, e.g. https://my-portfolio-tau.vercel.app --> |

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

<!-- TODO: take a screenshot of your homepage and add it here -->
<!-- Steps:
  1. Run `npm run dev` and open http://localhost:3000
  2. Take a screenshot (Mac: Cmd+Shift+4, Windows: Win+Shift+S)
  3. Save it as `screenshot.png` inside the public/ folder
  4. Replace this comment block with: ![Portfolio homepage](public/screenshot.png)
-->

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

## Component Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for a full breakdown of component structure and design decisions.

---

## Deployment

1. Push your code to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Click **Deploy** — zero config required for Next.js

For other platforms, run `npm run build` and serve the `.next/` output, or add `output: 'export'` to `next.config.mjs` for a fully static build.
