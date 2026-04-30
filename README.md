# My Portfolio

A personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
It includes a dark/light theme toggle, scroll animations, and a project showcase.

---

## Screenshot

<img width="1918" height="909" alt="homepage" src="https://github.com/user-attachments/assets/99536a16-710d-478c-b450-977182b7efb4" />


---

## Links

**GitHub Repository:**  
https://github.com/Benz-byte/my-portfolio.git  

**Live Website:**  
https://my-portfolio-sepia-rho-53.vercel.app/

---

# Setup Guide

## 1. Clone the repository

```bash
git clone https://github.com/Benz-byte/my-portfolio.git
cd my-portfolio
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run development server

```bash
npm run dev
```

Open: http://localhost:3000

## 4. Build for production

```bash
npm run build
npm start
```

---

# Customization Guide

You can edit the portfolio content in the following files:

- `Hero.tsx` → Name and introduction  
- `About.tsx` → Bio and skills  
- `Projects.tsx` → Project list  
- `Contact.tsx` → Contact form logic  
- `Header.tsx` → Navigation items  
- `Footer.tsx` → Social links  

### Assets
- Replace images inside the `public/` folder  
- Add resume as `resume.pdf` inside `public/`

---

# Component Design Decisions

This section explains how the system is structured and why it is designed this way.

---

## Directory Structure Decision

The project is divided into three main layers:

```text
components/
├── layout/    → Global structure (Header, Footer, Observer)
├── sections/  → Page content sections
└── ui/        → Reusable UI components
```

### Reasoning:
This separation improves:
- Code organization
- Reusability
- Maintainability
- Scalability for future features

---

## Layout Components

### Header.tsx
- Handles navigation
- Manages mobile menu state
- Changes style on scroll

### Footer.tsx
- Displays social links
- Static and server-rendered

### RevealObserver.tsx
- Uses IntersectionObserver
- Triggers scroll animations
- Keeps animation logic separate from UI

---

## Section Components

### Hero.tsx
- Landing introduction
- Fully server-rendered
- Uses CSS animations only

### About.tsx
- Displays personal bio and skills
- Uses static data rendering

### Projects.tsx
- Renders project list dynamically
- Uses reusable Card component

### Contact.tsx
- Client-side form handling
- Handles input state and submission

---

## UI Components

### Button.tsx
- Reusable button system
- Supports variants and sizes
- Uses class merging utility

### Card.tsx
- Displays project information
- Conditionally renders links

### ThemeToggle.tsx
- Controls dark/light mode
- Stores preference in localStorage

---

## Shared Logic

### types.ts
Keeps all shared data shapes in one place so components stay consistent and you don’t have to repeat type definitions everywhere.

### utils.ts
Holds small helper functions that make the code cleaner and easier to manage, like combining Tailwind classes without messy repetition.

---

## Summary

The architecture follows a clear separation of:
- Layout (global structure)
- Sections (page content)
- UI (reusable components)

This makes the project modular, scalable, and easy to maintain.
