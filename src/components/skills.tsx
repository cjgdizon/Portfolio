import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 0.06} className={i % 2 ? "lg:mt-14" : ""}>
            <h3 className="font-display text-3xl font-bold tracking-wide uppercase">
              {g.group}
            </h3>
            <div aria-hidden="true" className="lane mt-3 mb-6 w-full" />
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-foreground/35 px-3 py-1.5 text-base font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
