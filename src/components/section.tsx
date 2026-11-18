import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Reveal>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
        </Reveal>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
