import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and
          Tailwind.
        </p>
        <ul className="flex gap-5">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
