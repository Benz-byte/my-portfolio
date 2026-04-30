"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Navigation } from "@/components/layout/Navigation";
import type { NavigationItem } from "@/lib/types";

const NAV: NavigationItem[] = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Work", href: "#work" },
  { num: "03", label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 py-3 backdrop-blur-lg shadow-card"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {}
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-tight text-primary"
        >
          ◆
        </a>

        {}
        <Navigation items={NAV} resumeHref="/your-name-resume.pdf" />

        {}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-primary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} animate-fade-in border-t border-border bg-background/95 backdrop-blur-lg`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-3 font-mono text-sm text-foreground hover:text-primary"
            >
              <span className="text-primary">{item.num}.</span> {item.label}
            </a>
          ))}
          <a
            href="/your-name-resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="ben-belga-resume.pdf"
            className="flex items-center gap-2 rounded-md px-3 py-3 font-mono text-sm text-primary"
          >
            <span className="text-primary">04.</span> Resume
          </a>
        </nav>
      </div>
    </header>
  );
}