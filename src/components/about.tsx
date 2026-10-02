import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
        <Reveal>
          <div
            role="img"
            aria-label="Placeholder portrait. Replace with your photo."
            className="flex aspect-square w-40 items-center justify-center rounded-2xl border border-border bg-muted text-3xl font-semibold text-muted-foreground md:w-full"
          >
            {profile.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="max-w-[65ch] space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="font-mono text-sm">
              Based in {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
