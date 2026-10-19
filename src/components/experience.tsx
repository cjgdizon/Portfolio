import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { experience } from "@/lib/data";

const signs = [
  { span: "md:col-span-7", tone: "info" },
  { span: "md:col-span-5", tone: "asphalt" },
] as const;

export function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <ol className="grid gap-5 md:grid-cols-12">
        {experience.map((e, i) => {
          const sign = signs[i % signs.length];
          return (
            <li key={e.title} className={sign.span}>
              <Reveal delay={i * 0.06} className="h-full">
                <div
                  data-tone={sign.tone}
                  className="sign flex h-full min-h-56 flex-col p-8 sm:p-10"
                >
                  <p className="font-display text-5xl leading-none font-extrabold">
                    {e.period}
                  </p>
                  <h3 className="mt-auto pt-10 font-display text-3xl leading-tight font-bold tracking-wide uppercase">
                    {e.title}
                  </h3>
                  <p className="mt-1 opacity-85">{e.org}</p>
                  {e.summary && (
                    <p className="mt-3 max-w-[65ch] opacity-90">{e.summary}</p>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
