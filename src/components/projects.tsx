import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={(i % 2) * 0.06} className="h-full">
              <Link
                href={`/projects/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border p-6 transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.year}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{p.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t}>
                      <Badge variant="secondary">{t}</Badge>
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
