import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { profile } from "@/lib/profile";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <Section id="contact" title="Let’s build your next project.">
      <div className="contact-grid">
        <div>
          <p className="contact-lead">Tell me what you’re building.</p>
          <p className="body-copy mt-6">
            Need an online store, a booking system, or a custom web application?
            Send me your idea, what it needs to do, and where you’d like to take it.
          </p>
          <ul className="social-list">
            <li>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Email me <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </li>
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel contact-panel">
          <ContactForm recipient={profile.email} />
        </div>
      </div>
    </Section>
  );
}
