# My Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.  
It includes a dark/light theme toggle, scroll animations, and a project showcase.

---

## Screenshot

<img width="1918" height="909" alt="homepage" src="https://github.com/user-attachments/assets/5c5745f2-2557-4340-8a3b-e2f2bdb45870" />


---

## Links

GitHub Repository:  
https://github.com/Benz-byte/my-portfolio.git

Live Website:  
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

Open http://localhost:3000 in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Customization

Edit these files to update your portfolio:

- Hero.tsx → Name and introduction
- About.tsx → About me and skills
- Projects.tsx → Project list
- Contact.tsx → Contact form
- Header.tsx → Navigation
- Footer.tsx → Social links

To update images:
- Replace files inside the `public/` folder

To add your resume:
- Add `resume.pdf` inside the `public/` folder

---

## Project Structure

src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── lib/
└── public/

---

## Component Architecture

### Layout Components
- Header → Navigation bar
- Footer → Social links
- RevealObserver → Scroll animations

### Section Components
- Hero → Introduction section
- About → About and skills section
- Projects → Project showcase
- Contact → Contact form

### UI Components
- Button → Reusable button
- Card → Project card
- ThemeToggle → Theme switcher

---

## Shared Files

- types.ts → Shared interfaces
- utils.ts → Helper functions

This project is organized to make it reusable, clean, and easy to maintain.
