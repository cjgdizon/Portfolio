"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2);

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-sign bg-background">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-3 rounded-lg">
          <span
            aria-hidden="true"
            data-tone="guide"
            className="sign grid size-10 place-items-center font-display text-lg leading-none font-extrabold tracking-wide [--sign-inset:3px]"
          >
            {initials}
          </span>
          <span className="hidden font-display text-xl font-bold tracking-wide uppercase sm:inline">
            {profile.name}
          </span>
          <span className="sr-only sm:hidden">{profile.name}</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group/link relative block rounded-lg px-3 py-2 font-display text-lg font-semibold tracking-wide text-muted-foreground uppercase transition-colors duration-150 hover:text-foreground"
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-0.5 h-[3px] origin-left scale-x-0 rounded-full bg-sign transition-transform duration-200 ease-out group-hover/link:scale-x-100 dark:bg-caution"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="size-11 cursor-pointer lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </Button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="animate-in border-t border-border bg-background px-5 py-2 duration-150 fade-in slide-in-from-top-1 lg:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg py-3 font-display text-2xl font-bold tracking-wide uppercase"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
