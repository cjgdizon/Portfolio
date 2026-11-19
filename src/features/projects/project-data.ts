type Project = {
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
    slug: "pennywise",
    title: "PennyWise",
    summary: "A personal finance app for tracking spending, budgets and savings offline.",
    description:
      "PennyWise brings manual income, expenses, account transfers, budgets, bills and savings goals into one workspace. Records stay in the current browser, with no signup or bank connection. The app reopens offline after its files have been cached. Savings contributions reserve existing funds, while reports filter activity for CSV export or a printable PDF. Backups can be reviewed and merged without silently replacing existing records. The linked live site runs an earlier version than the local redesign described here.",
    role: "Developer",
    year: "2026",
    tags: ["React", "TypeScript", "Tailwind CSS", "PWA", "IndexedDB"],
    highlights: [
      "Separate accounts, transfers and category budgets with browser-local storage through Dexie",
      "Bill payments create linked expenses; savings goals reserve funds without counting them as spending",
      "Filtered CSV exports, printable reports and backup imports with conflict previews",
      "Integer-based money calculations and guarded database migrations",
    ],
    liveUrl: "https://pennywise-pi.vercel.app",
    repoUrl: "https://github.com/cjgdizon/PennyWise",
  },
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
  {
    slug: "crown-chess",
    title: "Crown Chess",
    summary: "Play chess in your browser against Stockfish or a friend on the same device.",
    description:
      "Crown Chess offers six Stockfish difficulty levels and local two-player games with optional board rotation. Players can choose timed or untimed games, review their moves, and get hints during play. The Stockfish engine runs in a Web Worker, and unfinished games can be resumed in the same browser.",
    role: "Developer",
    year: "2026",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "chess.js", "Stockfish"],
    highlights: [
      "Stockfish 17.1 Lite runs in the browser using WebAssembly",
      "Bullet, blitz, rapid and classical time controls with increment presets",
      "Click or drag to move, with legal-move indicators and inline pawn promotion",
      "Best-move hints, a live evaluation bar and step-by-step move history",
    ],
    liveUrl: "https://crown-chess-one.vercel.app/",
    repoUrl: "https://github.com/cjgdizon/crown-chess",
  },
];
