import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <ol className="space-y-10 border-l border-border pl-6 sm:pl-8">
        {experience.map((e, i) => (
          <li key={e.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[29px] size-2 rounded-full bg-foreground sm:-left-[37px]"
            />
            <Reveal delay={i * 0.04}>
              <p className="font-mono text-xs text-muted-foreground">
                {e.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">
                {e.title} <span className="text-muted-foreground">· {e.org}</span>
              </h3>
              <p className="mt-2 max-w-[65ch] text-muted-foreground">
                {e.summary}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
