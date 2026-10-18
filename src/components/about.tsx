import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
        <Reveal>
          <div className="relative aspect-square w-40 overflow-hidden rounded-2xl border border-border md:w-full">
            <Image
              src="/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 220px, 160px"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="max-w-[65ch] space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
