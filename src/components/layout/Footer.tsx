import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import type { SocialLink } from "@/lib/types";

const SOCIALS: (SocialLink & { Icon: React.ComponentType<{ className?: string }> })[] = [
  { platform: "GitHub",   url: "https://github.com/benbelga",                    icon: "github",   Icon: FaGithub   },
  { platform: "LinkedIn", url: "https://linkedin.com/in/benbelga",               icon: "linkedin", Icon: FaLinkedin },
  { platform: "X",        url: "https://twitter.com/benbelga",                   icon: "x",        Icon: FaXTwitter },
  { platform: "Email",    url: "mailto:benantonio.belga-23@cpu.edu.ph",          icon: "email",    Icon: FaEnvelope },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <div className="flex gap-5">
          {SOCIALS.map(({ platform, url, Icon }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={platform}
              className="text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Designed &amp; built with care · © {new Date().getFullYear()} Ben Antonio B. Belga
        </p>
      </div>
    </footer>
  );
}