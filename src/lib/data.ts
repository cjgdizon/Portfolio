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
    "I'm an Information Technology student at Mapúa University who enjoys building complete, working software, from the database to the interface. I've built and deployed web projects including an online store with inventory tracking and a booking system for a dental clinic, and I take part in hackathons. I'm a fast learner, I write code that other people can read, and I back up my learning with Coursera certificates in programming, databases and design. I'm looking for an internship where I can contribute, learn from experienced engineers, and grow as a developer.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/cjgdizon" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/christian-james-dizon-b731b82a0" },
    { label: "Instagram", href: "https://www.instagram.com/christian.znn/" },
    { label: "Facebook", href: "https://www.facebook.com/1Chrizon1" },
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
    slug: "dentasync",
    title: "BrightSmile",
    summary: "Scheduling, dental charts and online booking for a three-branch dental practice.",
    description:
      "A full-stack practice system for a dental clinic with three branches in the Philippines (project name: DentaSync). Front desk staff manage appointments and chairs on a branch calendar, dentists chart treatment by tooth, and patients book online or fill in a patient form from a QR poster in the waiting room. Online requests arrive marked as Online and wait for the front desk to confirm them. Access is role-based, with an audit log, and the app is set up to run on Supabase Postgres and Vercel.",
    role: "Group Project",
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
  {
    slug: "lubak-alert",
    title: "Lubak Alert",
    summary: "An offline pothole warning app: AI on the phone, no internet needed.",
    description:
      "Built for the AppBuildersPH Hackathon 2026 (theme: Local AI). Lubak is Filipino for pothole. A phone on a motorbike or jeep runs a YOLOv8n detection model on the device itself, confirms what it saw with the accelerometer and GPS, and warns nearby riders through a laptop hub on a Wi-Fi hotspot, with the internet switched off. No camera frame ever leaves the phone. It's an installable offline-first web app with an offline map. On 179 held-out public photos the model found a pothole in 62 of the 67 photos that showed one. It hasn't been tested on a real ride yet, and flooded-road detection is not working because there were no labelled images.",
    role: "Hackathon team project",
    year: "2026",
    tags: ["TypeScript", "PWA", "ONNX", "Node.js", "Python"],
    highlights: [
      "Detection runs on the phone with onnxruntime-web (WebGPU, or WASM as a fallback)",
      "Phones share hazards through a laptop hub over HTTPS and WebSocket, with no internet",
      "Warns riders about 6 seconds before a reported pothole",
      "330+ automated tests plus a two-phone rehearsal run in CI",
    ],
    repoUrl: "https://github.com/cjgdizon/HACKATON-LubakAlert",
  },
  {
    slug: "tetris-battle",
    title: "Tetris Battle",
    summary: "A competitive Tetris game for Windows: you against a bot.",
    description:
      "A desktop game where one player faces a bot in a best-of-N match. It follows modern Tetris rules: SRS rotation with wall kicks, a 7-bag piece generator, hold, ghost piece and a five-piece preview. Clearing lines sends garbage to the opponent, with T-spins, combos, back-to-back bonuses and perfect clears. Gravity speeds up every 30 seconds so rounds can't stall. Controls, handling and bot speed can be changed in a settings file.",
    role: "Solo project",
    year: "2026",
    tags: ["Python", "pygame", "pytest"],
    highlights: [
      "SRS rotation, T-spins, combos, back-to-back and garbage cancelling",
      "Bot opponent with adjustable speed",
      "Configurable controls and handling (DAS, ARR, soft drop)",
      "Automated tests with pytest",
    ],
    repoUrl: "https://github.com/cjgdizon/tetris",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "Angular", "React", "Next.js", "Tailwind CSS", "PWA", "Accessibility"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "REST APIs", "WebSocket", "MySQL", "PostgreSQL", "Drizzle ORM"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    group: "Tools & testing",
    items: ["Git", "Docker", "Vercel", "GitHub Actions", "Playwright", "pytest", "ONNX Runtime"],
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
    period: "2024-2027",
    summary: "",
  },
  {
    title: "AppBuilder 2026",
    org: "Hackathon",
    period: "2026",
    summary: "",
  },

];

// Newest first. Each link is the certificate's public Coursera share link.
// The Certifications section stays hidden if this list is empty.
export const certifications: {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}[] = [
  {
    title: "Angular for Front End Engineers",
    issuer: "Codio · Coursera",
    date: "Oct 2026",
    url: "https://www.coursera.org/account/accomplishments/records/BBKOCPUXZL8V",
  },
  {
    title: "User Experience: Research & Prototyping",
    issuer: "University of California San Diego · Coursera",
    date: "Oct 2026",
    url: "https://www.coursera.org/account/accomplishments/records/BIO0FUFPTJKI",
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI · Coursera",
    date: "Sep 2026",
    url: "https://www.coursera.org/account/accomplishments/records/6HJJAWC5GLW6",
  },
  {
    title: "Information Security Fundamentals",
    issuer: "EC-Council · Coursera",
    date: "Sep 2026",
    url: "https://www.coursera.org/account/accomplishments/records/V0S6MRLC563B",
  },
  {
    title: "Foundations of Agile Project Management",
    issuer: "Google · Coursera",
    date: "Sep 2026",
    url: "https://www.coursera.org/account/accomplishments/records/6G3PAQV3Y9TC",
  },
  {
    title: "Data Warehouse Concepts, Design, and Data Integration",
    issuer: "University of Colorado System · Coursera",
    date: "Jun 2026",
    url: "https://www.coursera.org/account/accomplishments/records/BSVOSA3WP7IF",
  },
  {
    title: "Visual Elements of User Interface Design",
    issuer: "California Institute of the Arts · Coursera",
    date: "Jun 2026",
    url: "https://www.coursera.org/account/accomplishments/records/4YNZ38PWXHLM",
  },
  {
    title: "Version Control with Git",
    issuer: "Atlassian · Coursera",
    date: "Jun 2026",
    url: "https://www.coursera.org/account/accomplishments/records/4ANW4DOAZH86",
  },
  {
    title: "Essential Tools for Application Development",
    issuer: "LearnQuest · Coursera",
    date: "Jun 2026",
    url: "https://www.coursera.org/account/accomplishments/records/TNVLO3BTDW1I",
  },
  {
    title: "Introduction to Data Science in Python",
    issuer: "University of Michigan · Coursera",
    date: "Feb 2026",
    url: "https://www.coursera.org/account/accomplishments/records/66GATIEFK0F3",
  },
  {
    title: "Enterprise Systems",
    issuer: "University of Minnesota · Coursera",
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/records/ZVPZE4185JHY",
  },
  {
    title: "An Introduction to Interactive Programming in Python (Part 1)",
    issuer: "Rice University · Coursera",
    date: "Oct 2025",
    url: "https://www.coursera.org/account/accomplishments/records/931ELMD8HUPE",
  },
  {
    title: "Data Structures",
    issuer: "University of California San Diego · Coursera",
    date: "Jul 2025",
    url: "https://www.coursera.org/account/accomplishments/records/YVG8U8XUCZH0",
  },
  {
    title: "Database Management Essentials",
    issuer: "University of Colorado System · Coursera",
    date: "Jul 2025",
    url: "https://www.coursera.org/account/accomplishments/records/UTQ0OXG80HMA",
  },
  {
    title: "Object Oriented Programming in Java",
    issuer: "University of California San Diego · Coursera",
    date: "Mar 2025",
    url: "https://www.coursera.org/account/accomplishments/records/27BKH0UFWE9V",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan · Coursera",
    date: "Mar 2025",
    url: "https://www.coursera.org/account/accomplishments/records/8OH47ATWR0FK",
  },
  {
    title: "Introduction to Contemporary Operating Systems and Hardware 1a",
    issuer: "Illinois Tech · Coursera",
    date: "Mar 2025",
    url: "https://www.coursera.org/account/accomplishments/records/M707SU8U5U9U",
  },
  {
    title: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan · Coursera",
    date: "Feb 2025",
    url: "https://www.coursera.org/account/accomplishments/records/O13O9HIBQS82",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan · Coursera",
    date: "Oct 2024",
    url: "https://www.coursera.org/account/accomplishments/records/049T968QAA8N",
  },
];
