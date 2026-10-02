// All portfolio content lives here. Replace the placeholders with your own.

export const profile = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, accessible web apps with clean code and thoughtful design.",
  location: "City, Country",
  availability: "Open to full-time roles",
  email: "hello@example.com",
  siteUrl: "https://your-portfolio.vercel.app",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a developer who enjoys turning ideas into polished, reliable products. I care about performance, accessibility, and code that's easy for the next person to read.",
    "Outside of work I contribute to open source, write about what I learn, and look for small problems worth automating. Replace this text with your own story.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    summary: "A collaborative task manager with real-time updates.",
    description:
      "A placeholder case study. Describe the problem you set out to solve, who it was for, and what made the result useful.",
    role: "Full-stack developer",
    year: "2026",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    highlights: [
      "Real-time sync across clients",
      "Role-based access control",
      "Lighthouse score above 95",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/taskflow",
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    summary: "A privacy-friendly analytics dashboard for small sites.",
    description:
      "A placeholder case study. Explain your approach, the trade-offs you made, and how you measured success.",
    role: "Frontend developer",
    year: "2025",
    tags: ["React", "D3", "Node.js"],
    highlights: [
      "Handles 1M+ events per day",
      "Accessible charts with table fallbacks",
      "Cut page load time by 40%",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/pulse-analytics",
  },
  {
    slug: "shelf",
    title: "Shelf",
    summary: "A minimal reading list app with offline support.",
    description:
      "A placeholder case study. Cover the idea, your role, and the technical challenges you solved.",
    role: "Solo project",
    year: "2025",
    tags: ["Next.js", "PWA", "Supabase"],
    highlights: [
      "Installable and works offline",
      "Sync conflict resolution",
      "Keyboard-first interface",
    ],
    repoUrl: "https://github.com/your-username/shelf",
  },
  {
    slug: "ui-kit",
    title: "Minimal UI Kit",
    summary: "An open-source component library built on Radix and Tailwind.",
    description:
      "A placeholder case study. Describe the goals of the library, how you documented it, and who uses it.",
    role: "Maintainer",
    year: "2024",
    tags: ["React", "Radix UI", "Storybook"],
    highlights: [
      "30+ accessible components",
      "Full dark mode support",
      "Published on npm",
    ],
    repoUrl: "https://github.com/your-username/ui-kit",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility"],
  },
  {
    group: "Backend",
    items: ["Node.js", "PostgreSQL", "REST & GraphQL", "Prisma", "Auth"],
  },
  {
    group: "Tools",
    items: ["Git", "Docker", "Vercel", "CI/CD", "Testing"],
  },
];

export const experience: {
  title: string;
  org: string;
  period: string;
  summary: string;
}[] = [
  {
    title: "Software Engineer",
    org: "Company Name",
    period: "2024 – Present",
    summary:
      "Placeholder. Describe what you shipped and the impact it had, ideally with a number.",
  },
  {
    title: "Junior Developer",
    org: "Another Company",
    period: "2022 – 2024",
    summary:
      "Placeholder. Mention the stack, the team, and one thing you're proud of.",
  },
  {
    title: "B.S. in Computer Science",
    org: "University Name",
    period: "2018 – 2022",
    summary: "Placeholder. Add honors, relevant coursework, or activities.",
  },
];
