import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "Xolani Sodam",
  title: "Full-Stack Web Developer",
  oneLiner: "I build responsive, user-centered web applications from Cape Town.",
  location: "Cape Town, South Africa",
  email: "jonathanmicah23@gmail.com",
  emailSubject: "Hello from your portfolio",
  resumeUrl: "/resume.pdf",
  formspreeId: import.meta.env.VITE_FORMSPREE_ID ?? "xbdrrwzq",
  socials: [
    {
      key: "github",
      label: "GitHub",
      href: "https://github.com/xolani-tech",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/xolanisodam/",
    },
    {
      key: "instagram",
      label: "Instagram",
      href: "https://instagram.com/your-handle",
    },
    {
      key: "email",
      label: "Email",
      href: "mailto:jonathanmicah23@gmail.com",
    },
  ],
  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
};
