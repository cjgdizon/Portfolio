import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/lib/data";

// Four projects, four classes of sign. The 4+2 / 2+4 spans give the grid a rhythm instead of equal cards.
const signs = [
  { span: "md:col-span-4", tone: "guide" },
  { span: "md:col-span-2", tone: "info" },
  { span: "md:col-span-2", tone: "caution" },
  { span: "md:col-span-4", tone: "asphalt" },
] as const;

export function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <ul className="grid gap-5 md:grid-cols-6">
        {projects.map((p, i) => {
          const sign = signs[i % signs.length];
          return (
            <li key={p.slug} className={sign.span}>
              <Reveal delay={(i % 2) * 0.06} className="h-full">
                <Link
                  href={`/projects/${p.slug}`}
                  data-tone={sign.tone}
                  data-interactive
                  className="sign group flex h-full min-h-72 flex-col p-8 sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold tracking-wide">
                      {p.year}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-6 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <h3 className="mt-auto pt-12 font-display text-5xl leading-[0.95] font-extrabold tracking-tight uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md opacity-90">{p.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-sm border border-current/40 px-2 py-0.5 text-xs font-semibold"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
