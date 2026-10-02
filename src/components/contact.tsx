import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h3 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let&apos;s work together.
          </h3>
          <p className="mt-4 max-w-md text-muted-foreground">
            I&apos;m looking for my next role. Send a message and I&apos;ll
            reply within a couple of days.
          </p>
          <ul className="mt-8 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-sm underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {profile.email}
              </a>
            </li>
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
