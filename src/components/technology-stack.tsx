import Image from "next/image";

const logos: Record<string, string> = {
  Angular: "angular", "Spring Boot": "spring", Java: "java", MySQL: "mysql",
  Docker: "docker", "Next.js": "nextjs", TypeScript: "typescript",
  PostgreSQL: "postgres", Drizzle: "drizzle-orm", "Drizzle ORM": "drizzle-orm",
  Playwright: "playwright", Python: "python", "Node.js": "nodejs",
  React: "react", "Tailwind CSS": "tailwindcss", Git: "git",
  Vercel: "vercel", "GitHub Actions": "github-actions", JavaScript: "javascript",
  WebSocket: "websocket", pytest: "pytest", ONNX: "onnx",
  "ONNX Runtime": "onnx", PWA: "pwa",
};

export function TechnologyStack({ items, moving = false }: { items: string[]; moving?: boolean }) {
  const list = (duplicate = false) => <ul className="technology-stack" aria-label={duplicate ? undefined : "Technologies"} aria-hidden={duplicate || undefined}>{items.map(name => {
    const logo = logos[name];
    return <li key={name} title={name} tabIndex={moving && !duplicate && logo ? 0 : undefined} data-label={logo ? name : undefined} className={logo ? "technology-logo" : "technology-label"}>
      {logo ? <span className="technology-logo-stage">
        <Image src={`/assets/icons/${logo}.svg`} alt={name} width={36} height={36} className={logo === "vercel" || logo === "websocket" ? "technology-mark technology-mark-light" : "technology-mark"} />
      </span> : name}
    </li>;
  })}</ul>;
  if (!moving) return list();
  return <div className="technology-marquee">
    <div className="stack-window"><div className="stack-track">{list()}{list(true)}</div></div>
  </div>;
}
