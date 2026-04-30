import Image from "next/image";
import { ExternalLink, Github as GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export function Card({ project, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "reveal group overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow transition-all duration-500 hover:-translate-y-1 hover:border-primary",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col space-y-1.5 p-6">
        <p className="font-mono text-xs text-primary">
          Featured Project · {project.year}
        </p>
        <h3 className="font-display text-2xl font-semibold leading-none tracking-tight text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
      </div>

      <div className="space-y-4 p-6 pt-0">
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="flex gap-2 pt-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm">
                <GithubIcon /> Code
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink /> Live
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
