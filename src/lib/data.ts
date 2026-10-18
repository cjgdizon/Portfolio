// All portfolio content lives here. Replace the placeholders with your own.

export const profile = {
  name: "Christian James Dizon",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, accessible web apps with clean code and thoughtful design.",
  location: "City, Country",
  availability: "Open to full-time roles",
  email: "dizon.christianjames27@gmail.com",
  siteUrl: "https://portfolio-nine-coral-djuqwwvzib.vercel.app",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a developer who enjoys turning ideas into polished, reliable products. I care about performance, accessibility, and code that's easy for the next person to read.",
    "Outside of work I contribute to open source, write about what I learn, and look for small problems worth automating. Replace this text with your own story.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/cjgdizon" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/christian-james-dizon-b731b82a0" },
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
    slug: "amira",
    title: "AMIRA",
    summary: "An online perfume store with real inventory tracking.",
    description:
      "A full-stack store built from a business proposal. Customers browse the catalog, add perfumes to a cart, and check out. The owner manages perfumes, sizes, batches, stock and orders from a separate area. Stock is reserved when an order is placed, deducted when it's paid, and restored if it's cancelled, with database locks so two buyers can't take the last bottle. The live site is a demo that runs entirely in your browser with sample data. Sign in as the owner to see the stock, orders and reports.",
    role: "Full-stack developer",
    year: "2026",
    tags: ["Angular", "Spring Boot", "Java", "MySQL", "Docker"],
    highlights: [
      "Owner reports for expiring, low-stock and slow-moving batches",
      "Customer and owner roles with BCrypt passwords and one-time password-reset links",
      "Integration test covering the full order, payment and cancel flow",
      "Full stack starts with one command (docker compose up); the live demo needs no server",
    ],
    liveUrl: "https://amira-perfume-store.vercel.app",
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
    title: "B.S. in Information Technology",
    org: "Mapua University",
    period: "2024 – 2027",
    summary: "Placeholder. Add honors, relevant coursework, or activities.",
  },
];

// Newest first. Each link is the certificate's public Coursera verification page.
// The Certifications section stays hidden if this list is empty.
export const certifications: {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}[] = [
  {
    title: "User Experience: Research & Prototyping",
    issuer: "University of California San Diego · Coursera",
    date: "Oct 2026",
    url: "https://coursera.org/verify/BIO0FUFPTJKI",
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI · Coursera",
    date: "Sep 2026",
    url: "https://coursera.org/verify/6HJJAWC5GLW6",
  },
  {
    title: "Information Security Fundamentals",
    issuer: "EC-Council · Coursera",
    date: "Sep 2026",
    url: "https://coursera.org/verify/V0S6MRLC563B",
  },
  {
    title: "Data Warehouse Concepts, Design, and Data Integration",
    issuer: "University of Colorado System · Coursera",
    date: "Jun 2026",
    url: "https://coursera.org/verify/BSVOSA3WP7IF",
  },
  {
    title: "Visual Elements of User Interface Design",
    issuer: "California Institute of the Arts · Coursera",
    date: "Jun 2026",
    url: "https://coursera.org/verify/4YNZ38PWXHLM",
  },
  {
    title: "Version Control with Git",
    issuer: "Atlassian · Coursera",
    date: "Jun 2026",
    url: "https://coursera.org/verify/4ANW4DOAZH86",
  },
  {
    title: "Essential Tools for Application Development",
    issuer: "LearnQuest · Coursera",
    date: "Jun 2026",
    url: "https://coursera.org/verify/TNVLO3BTDW1I",
  },
  {
    title: "An Introduction to Interactive Programming in Python (Part 1)",
    issuer: "Rice University · Coursera",
    date: "Oct 2025",
    url: "https://coursera.org/verify/931ELMD8HUPE",
  },
  {
    title: "Object Oriented Programming in Java",
    issuer: "University of California San Diego · Coursera",
    date: "Mar 2025",
    url: "https://coursera.org/verify/27BKH0UFWE9V",
  },
  {
    title: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan · Coursera",
    date: "Feb 2025",
    url: "https://coursera.org/verify/O13O9HIBQS82",
  },
];
