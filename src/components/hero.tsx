import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

const cta = "h-11 cursor-pointer rounded-full px-6 text-sm";

// Above-the-fold content is visible in the server HTML (no JS needed, so LCP isn't delayed) and fades in
// with a CSS-only animation that is switched off for reduced-motion visitors.
const enter =
  "animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards duration-500 motion-reduce:animate-none";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8"
    >
      <p
        className={cn(
          enter,
          "mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground",
        )}
      >
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-emerald-500"
        />
        {profile.availability}
      </p>
      <h1
        id="hero-title"
        className={cn(
          enter,
          "max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance delay-75 sm:text-6xl",
        )}
      >
        Hi, I&apos;m {profile.name}. I&apos;m a {profile.role.toLowerCase()}.
      </h1>
      <p
        className={cn(
          enter,
          "mt-6 max-w-xl text-base text-pretty text-muted-foreground delay-100 sm:text-lg",
        )}
      >
        {profile.tagline}
      </p>
      <div className={cn(enter, "mt-10 flex flex-col gap-3 delay-150 sm:flex-row")}>
        <Link href="/#projects" className={cn(buttonVariants(), cta)}>
          View work
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
    </section>
  );
}
