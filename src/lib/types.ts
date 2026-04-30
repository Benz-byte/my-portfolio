export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  year?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  num: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}