import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { certifications } from "@/lib/data";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <li key={`${c.title}-${c.date}`}>
            <Reveal delay={(i % 2) * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border p-6">
                <p className="font-mono text-xs text-muted-foreground">
                  {c.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{c.issuer}</p>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-1 rounded-sm text-sm underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    View credential
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
