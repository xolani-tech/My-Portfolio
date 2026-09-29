import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "church-website",
    title: "New Jerusalem of All Nations",
    description:
      "Developed the official digital home for New Jerusalem of All Nations, an international church organization led by General Overseer Prophet V. Dyani. The platform acts as a central hub for global members to access teachings, participate in ministry activities, and contribute to organizational initiatives.",
    features: [
      "Modular Architecture: Organized multi-departmental content into intuitive sub-sections for specialized groups (Youth, Children, Kings, Daughters of Zion).",
      "Interactive Campaign Showcase: Built a tailored interface for the sanctuary building project to drive community engagement and online contributions.",
      "Performance & SEO Optimization: Configured dynamic sitemaps, structured schema markup, and optimized media assets to achieve strong search visibility and rapid load times.",
      "Responsive UX/UI: Designed with a mobile-first approach to cater to a global audience accessing the site across diverse network speeds and devices.",
    ],
    tags: [],
    liveUrl: "https://njoan.org",
    image: "/images/projects/church-website.webp",
  },
  {
    id: "hr-management-system",
    title: "HR Management System",
    description:
      "A full-stack HR system for managing employee catalogues, leave requests, and absence tracking. Built with distinct admin and staff experiences so organisations can manage their teams efficiently without losing sight of day-to-day workflows.",
    features: [
      "User Management: Implemented a comprehensive user management system for administrators to create, update, and delete employee records.",
      "Leave Request Processing: Developed a streamlined process for submitting, approving, and rejecting leave requests with automated notifications.",
      "Absence Tracking: Created a robust system for monitoring and reporting employee absences with detailed analytics and reporting capabilities.",
    ],
    tags: ["Vue.js", "Node.js", "MySQL"],
    liveUrl: "https://moderntechhrsystem.vercel.app",
    githubUrl: "https://github.com/xolani-tech/HR-Management-System",
  },
  {
    id: "visio-site-replica",
    title: "Visio Site Replica",
    description:
      "A front-end replica of the official VISIO website, built as a challenge to demonstrate attention to detail and design accuracy. The focus was reproducing the original layout and design system responsively in HTML, CSS, and JavaScript.",
    features: [
      "Layout Reproduction: Accurately reproduced the original layout and design system.",
      "Responsive Design: Ensured the replica functions well across different screen sizes and devices.",
      "Attention to Detail: Focused on replicating the visual elements and interactions of the original site.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://visio-elemental-challenge-iota.vercel.app",
    githubUrl: "https://github.com/xolani-tech/Visio-Elemental-challenge",
    image: "/images/projects/visio-site-replica.webp",
  },
  {
    id: "blog-landing-page",
    title: "Blog Landing Page",
    description:
      "A blog landing page built to practise user experience and interface design. A study in typography, spacing, and content hierarchy that turned a static page into something readable and navigable.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://xolani-tech.github.io/Blog-Landing-Page/index.html",
    githubUrl: "https://github.com/xolani-tech/Blog-Landing-Page",
  },
  {
    id: "splitspark",
    title: "SplitSpark",
    description:
      "A multi-currency payment splitter built on Bitcoin Lightning. Groups contribute to a shared expense in their preferred currency, and the system converts the total to Bitcoin and transfers it to the recipient via the MavaPay API. Payments settle at high speed, before market fluctuations can erode the amount.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MavaPay API"],
    githubUrl: "https://github.com/Shaun-Adams/SplitSpark",
  },
];
