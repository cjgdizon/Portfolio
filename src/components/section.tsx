import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Each section opens with its own guide sign, and a dashed centre line carries on to the right.
export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <Reveal>
        <div className="mb-10 flex items-center gap-6 sm:mb-14">
          <h2
            id={`${id}-title`}
            data-tone="guide"
            className="sign shrink-0 px-7 py-4 font-display text-4xl leading-none font-extrabold tracking-wide uppercase [--sign-inset:5px] sm:px-9 sm:text-5xl"
          >
            {title}
          </h2>
          <span aria-hidden="true" className="lane hidden min-w-12 flex-1 sm:block" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
