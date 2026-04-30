"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { NavigationItem } from "@/lib/types";

interface NavigationProps {
  items: NavigationItem[];
  onItemClick?: () => void;
  resumeHref?: string;
}

export function Navigation({ items, onItemClick, resumeHref = "/your-name-resume.pdf" }: NavigationProps) {
  return (
    <nav className="hidden items-center gap-2 md:flex">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className="group flex items-center gap-1.5 rounded-md px-3 py-2 font-mono text-xs text-foreground transition-colors hover:text-primary"
        >
          <span className="text-primary">{item.num}.</span>
          <span className="link-underline">{item.label}</span>
        </a>
      ))}
      <a
        href={resumeHref}
        target="_blank"
        rel="noreferrer"
        download="ben-belga-resume.pdf"
        className="ml-3 rounded-md border border-primary px-4 py-2 font-mono text-xs text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/10"
      >
        Resume
      </a>
      <ThemeToggle />
    </nav>
  );
}