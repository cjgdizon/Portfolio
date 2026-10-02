import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

const cta = "h-11 cursor-pointer rounded-full px-6 text-sm";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8"
    >
      <Reveal>
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-emerald-500"
          />
          {profile.availability}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1
          id="hero-title"
          className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
        >
          Hi, I&apos;m {profile.name}. I&apos;m a {profile.role.toLowerCase()}.
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
          {profile.tagline}
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
      </Reveal>
    </section>
  );
}
