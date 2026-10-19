import { ArrowUpRight } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/lib/data";

const out =
  "group/out flex items-center justify-between gap-4 rounded-lg py-2 font-display text-2xl font-bold tracking-wide uppercase";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div data-tone="guide" className="sign h-full p-8 sm:p-10">
            <h3 className="font-display text-5xl leading-[0.95] font-extrabold text-balance uppercase">
              Let&apos;s work together.
            </h3>
            <p className="mt-5 max-w-md text-lg">
              I&apos;m looking for my next role. Send a message and I&apos;ll
              reply within a couple of days.
            </p>
            <ul className="mt-8">
              <li>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={out}
                >
                  Gmail
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-6 transition-transform duration-200 ease-out group-hover/out:translate-x-0.5 group-hover/out:-translate-y-0.5"
                  />
                </a>
              </li>
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={out}
                  >
                    {s.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-6 transition-transform duration-200 ease-out group-hover/out:translate-x-0.5 group-hover/out:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-7">
          <div data-tone="info" className="sign h-full p-8 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
