export type SocialKey = "github" | "linkedin" | "instagram" | "email";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  oneLiner: string;
  location: string;
  email: string;
  emailSubject: string;
  resumeUrl: string;
  formspreeId: string;
  socials: SocialLink[];
  nav: NavItem[];
}

export interface AboutConfig {
  paragraphs: string[];
}

export interface ExperienceEntry {
  period: string;
  role: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features?: string[];
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}
