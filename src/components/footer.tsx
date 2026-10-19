import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-12">
      <div aria-hidden="true" className="lane mx-auto max-w-6xl" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-8">
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
                className="rounded-lg font-medium transition-colors duration-150 hover:text-foreground"
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
