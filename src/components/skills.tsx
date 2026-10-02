import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-10 sm:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06}>
            <h3 className="mb-4 text-lg font-semibold tracking-tight">
              {g.group}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
