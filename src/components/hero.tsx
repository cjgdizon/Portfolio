import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const cta = "h-12 cursor-pointer px-6 font-display text-lg font-bold tracking-wide uppercase";

// A sign hangs from the gantry on two brackets. The signs switch on in sequence (CSS only, so the
// first paint is not waiting on JS and reduced-motion visitors get them already lit).
function Hung({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <div
      className={cn("sign-on relative pt-5", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      <span aria-hidden="true" className="absolute top-0 left-[16%] h-5 w-2 bg-foreground/35" />
      <span aria-hidden="true" className="absolute top-0 right-[16%] h-5 w-2 bg-foreground/35" />
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-5 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-20"
    >
      <div aria-hidden="true" className="h-3 rounded-sm bg-foreground/25" />
      <div className="grid gap-x-5 lg:grid-cols-12">
        <Hung delay={0} className="lg:col-span-8">
          <div data-tone="guide" className="sign h-full p-8 sm:p-12 lg:p-14">
            <h1
              id="hero-title"
              className="font-display text-[clamp(3.25rem,9.5vw,5.75rem)] leading-[0.92] font-extrabold tracking-tight text-balance uppercase"
            >
              {profile.name}
            </h1>
            <p className="mt-8 max-w-xl text-lg text-pretty sm:text-xl">
              <span className="block font-display text-2xl font-bold tracking-wide uppercase">
                {profile.role}
              </span>
              {profile.tagline}
            </p>
          </div>
        </Hung>
        <Hung delay={90} className="lg:col-span-4">
          <div
            data-tone="caution"
            className="sign flex h-full min-h-40 items-end p-8 sm:p-10"
          >
            <p className="font-display text-4xl leading-[0.95] font-extrabold text-balance uppercase sm:text-5xl">
              {profile.availability}
            </p>
          </div>
        </Hung>
      </div>

      <div
        className="sign-on mt-10 flex flex-col gap-3 sm:flex-row"
        style={{ "--d": "180ms" } as CSSProperties}
      >
        <Link href="/#projects" className={cn(buttonVariants(), cta)}>
          View projects
          <ArrowDown aria-hidden="true" />
        </Link>
        <a
          href={profile.resumeUrl}
          download
          className={cn(buttonVariants({ variant: "outline" }), cta)}
        >
          <Download aria-hidden="true" />
          Download résumé
        </a>
      </div>
      <div aria-hidden="true" className="lane mt-12" />
    </section>
  );
}
