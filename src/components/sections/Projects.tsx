import { Card } from "@/components/ui/Card";
import type { Project } from "@/lib/types";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TaskFlow",
    description:
      "A full-stack kanban board with real-time collaboration, drag-and-drop task management, and team workspaces. Features WebSocket-powered live updates and OAuth 2.0 authentication via Google and GitHub.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Prisma"],
    imageUrl: "/project-1.jpg",
    githubUrl: "https://github.com/benbelga/taskflow",
    liveUrl: "https://taskflow.benbelga.dev",
    year: "2024",
  },
  {
    id: 2,
    title: "ShopEase",
    description:
      "A full-featured e-commerce platform with product management, cart, Stripe checkout, and an admin dashboard. Built with Next.js App Router and server components for fast, SEO-friendly pages.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/project-2.jpg",
    githubUrl: "https://github.com/benbelga/shopease",
    liveUrl: "https://shopease.benbelga.dev",
    year: "2024",
  },
  {
    id: 3,
    title: "DataPulse",
    description:
      "An interactive analytics dashboard for visualizing business KPIs and metrics. Queries data via GraphQL, renders interactive charts, and supports date-range filtering with CSV export.",
    technologies: ["React", "GraphQL", "PostgreSQL", "Recharts", "Redux"],
    imageUrl: "/project-3.jpg",
    githubUrl: "https://github.com/benbelga/datapulse",
    year: "2023",
  },
  {
    id: 4,
    title: "This Portfolio",
    description:
      "My personal portfolio site built from scratch with Next.js 14, TypeScript, and Tailwind CSS. Features a dark/light theme toggle, scroll-triggered reveal animations, and a validated contact form.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: "/project-4.jpg",
    githubUrl: "https://github.com/benbelga/my-portfolio",
    liveUrl: "https://benbelga.vercel.app",
    year: "2025",
  },
];

export function Projects() {
  return (
    <section id="work" className="px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal mb-16 flex items-center gap-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          <span className="font-mono text-base text-primary">02.</span>
          Selected Work
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}