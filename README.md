# My Portfolio

A personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
It features a dark/light theme toggle, scroll animations, and a project showcase.

---

## Screenshot

<img width="1918" height="909" alt="homepage" src="https://github.com/user-attachments/assets/5da40a00-4524-4c83-998c-141dd74c5af7" />


---

## Links

**GitHub Repository:**  
https://github.com/Benz-byte/my-portfolio.git  

**Live Website:**  
https://my-portfolio-sepia-rho-53.vercel.app/

---

## Installation Guide

### 1. Clone the repository

```bash
git clone https://github.com/Benz-byte/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Customization

Edit the following files to personalize the portfolio:

- `Hero.tsx` → Name and introduction  
- `About.tsx` → Bio and skills  
- `Projects.tsx` → Project details  
- `Contact.tsx` → Contact form logic  
- `Header.tsx` → Navigation  
- `Footer.tsx` → Social links  

To replace images:
- Update files inside the `public/` folder

To add your resume:
- Place `resume.pdf` inside the `public/` folder

---

## Project Structure

```text
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
├── resume.pdf
├── profile.jpg
└── project-1.jpg … project-4.jpg
```

---

# Component Architecture

This document explains the structural decisions behind the portfolio's component design.

---

## Directory Layout

Components are split into three layers with distinct responsibilities:

```text
components/
├── layout/    # App chrome — always rendered, wrap everything
├── sections/  # Page content — one file per scroll section
└── ui/        # Primitives — stateless, reusable building blocks
```

---

## Layout Components

### `Header.tsx`

Handles navigation, mobile menu toggle, and scroll-based header styling.

### `Footer.tsx`

Displays social links and footer content.

### `RevealObserver.tsx`

Controls scroll-triggered reveal animations using IntersectionObserver.

---

## Section Components

### `Hero.tsx`

Displays the main introduction section.

### `About.tsx`

Shows personal information, skills, and profile image.

### `Projects.tsx`

Displays project cards in a grid layout.

### `Contact.tsx`

Handles the contact form and user input.

---

## UI Components

### `Button.tsx`

Reusable button component with different styles.

### `Card.tsx`

Reusable card component for displaying project details.

### `ThemeToggle.tsx`

Handles dark/light theme switching.

---

## Shared Types (`src/lib/types.ts`)

Contains shared interfaces used across components.

---

## Utilities (`src/lib/utils.ts`)

Contains helper functions such as class merging utilities.

---

This project is organized for clean code, reusability, and easy maintenance.
