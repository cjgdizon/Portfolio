// All portfolio content lives here. Replace the placeholders with your own.

export const profile = {
  name: "Christian James Dizon",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, accessible web apps with clean code and thoughtful design.",
  availability: "Open to full-time roles",
  email: "dizon.christianjames27@gmail.com",
  siteUrl: "https://portfolio-nine-coral-djuqwwvzib.vercel.app",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a developer who enjoys turning ideas into polished, reliable products. I care about performance, accessibility, and code that's easy for the next person to read.",
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
    repoUrl: "https://github.com/cjgdizon/perfume-store",
  },
  {
    slug: "brightsmile",
    title: "BrightSmile",
    summary: "Scheduling, dental charts and online booking for a three-branch dental practice.",
    description:
      "A full-stack practice system for a dental clinic with three branches in the Philippines (project name: DentaSync). Front desk staff manage appointments and chairs on a branch calendar, dentists chart treatment by tooth, and patients book online or fill in a patient form from a QR poster in the waiting room. Online requests arrive marked as Online and wait for the front desk to confirm them. Access is role-based, with an audit log, and the app is set up to run on Supabase Postgres and Vercel.",
    role: "Full-stack developer",
    year: "2026",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Playwright"],
    highlights: [
      "Branch calendar with chairs, visit lengths and cleaning time",
      "Online booking and QR patient forms with per-visitor rate limits",
      "Owner, manager and staff roles with an access log",
      "Unit and database tests plus an end-to-end run covering a full visit",
    ],
    liveUrl: "https://brightsmile.pro",
    repoUrl: "https://github.com/cjgdizon/BrightSmile",
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
    title: "B.S. in Information Technology",
    org: "Mapua University",
    period: "2024 – 2027",
    summary: "",
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
