import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <Reveal>
        <h2
          id={`${id}-title`}
          className="mb-10 font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
