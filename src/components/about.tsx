import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/lib/data";

export function About() {
  // The first sentence is the statement; the rest is supporting detail.
  const sentences = profile.bio.join(" ").split(/(?<=\.)\s+/);
  const lead = sentences[0];
  const rest = sentences.slice(1).join(" ");

  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <div data-tone="info" className="sign max-w-xs p-5 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[5px]">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 340px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05} className="lg:col-span-8">
          <p className="max-w-3xl text-3xl leading-[1.15] font-medium tracking-tight text-balance sm:text-4xl">
            {lead}
          </p>
          {rest && (
            <p className="mt-8 max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
              {rest}
            </p>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
