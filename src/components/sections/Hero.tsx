import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-32 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-5 font-mono text-sm text-primary animate-fade-up">
          Hi, my name is
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground animate-fade-up sm:text-6xl md:text-7xl lg:text-8xl">
          Ben Belga<span className="animate-blink text-primary">.</span>
        </h1>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-muted-foreground animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl">
          I build things for the web.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up">
          I&apos;m a Full Stack Developer from Iloilo City specializing in crafting
          exceptional digital experiences. Currently building performant,
          accessible, and human-centered products at{" "}
          <span className="text-primary">Brightwave Digital</span>.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up">
          <a href="#work">
            <Button size="lg" variant="primary">
              View my work
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline">
              Get in touch
            </Button>
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute inset-x-0 bottom-10 mx-auto flex w-fit flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}