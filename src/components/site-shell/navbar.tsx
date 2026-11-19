"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/profile";
const links = ["Projects", "About", "Skills", "Contact"];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const close = () => {
      setOpen(false);
      toggle.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(
            menu.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter((x): x is HTMLButtonElement | HTMLAnchorElement => !!x);
        const index = items.indexOf(
          document.activeElement as HTMLAnchorElement,
        );
        e.preventDefault();
        items[
          (index + (e.shiftKey ? -1 : 1) + items.length) % items.length
        ]?.focus();
      }
    };
    const onResize = () => {
      if (innerWidth >= 1024) close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header className="nav">
      <nav className="wrap nav-inner" aria-label="Main">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          cjd<span>.</span>
          <span className="sr-only"> Christian James Dizon</span>
        </Link>
        <ul className="desktop-nav">
          {links.map((label) => (
            <li key={label}>
              <Link className="link" href={`/#${label.toLowerCase()}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <Link className="btn btn--secondary nav-cta" href="/#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open && (
        <div ref={menu} id="mobile-menu" className="mobile-menu">
          {links.map((label) => (
            <Link
              key={label}
              href={`/#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a href={profile.resumeUrl} download={profile.resumeFilename} onClick={() => setOpen(false)}>
            Download résumé
          </a>
        </div>
      )}
    </header>
  );
}
