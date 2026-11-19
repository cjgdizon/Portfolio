import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { TechnologyStack } from "@/components/technology-stack";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true">
        <Image src="/hero-titanium.webp" alt="" fill sizes="100vw" preload />
      </div>
      <div className="wrap hero-shell">
        <div className="hero-copy">
          <h1 id="hero-title"><span className="hero-line"><span>Hi, I&apos;m</span></span><span className="hero-line"><span>Christian James</span></span><span className="hero-line hero-line-muted hero-role"><span className="sr-only">Full Stack Developer, System Builder, Consultant</span><span className="role-rotation" aria-hidden="true"><span className="role-word">Full Stack Developer</span><span className="role-word">System Builder</span><span className="role-word">Consultant</span></span></span></h1>
          <p className="hero-lead">Have an idea for your business? I build online stores and booking systems that make it easier for your customers to get things done.</p>
          <div className="btn-row">
            <Link href="/#contact" className="btn btn--primary">Discuss your project <ArrowUpRight aria-hidden="true" size={18} /></Link>
            <Link href="/#projects" className="btn btn--secondary">Explore my work <ArrowDown aria-hidden="true" size={18} /></Link>
          </div>
          <a href={profile.resumeUrl} download={profile.resumeFilename} className="link mt-4 inline-flex items-center gap-2 text-sm">
            Download résumé (PDF) <Download size={16} aria-hidden="true" />
          </a>
          <div className="hero-proof">
            <p>Technology stack</p>
            <TechnologyStack items={["TypeScript", "React", "Next.js", "Angular", "Spring Boot", "PostgreSQL"]} />
          </div>
        </div>
        <div className="hero-notes" aria-label="Development capabilities">
          <div className="hero-note"><span className="note-light" /><span>Storefronts <small>Catalog → checkout</small></span></div>
          <div className="hero-note"><span className="note-light" /><span>Booking systems <small>Branches → appointments</small></span></div>
          <div className="hero-note"><span className="note-light" /><span>Full-stack development <small>Interface → database</small></span></div>
        </div>
        <div className="hero-bottom"><span>Design-minded. Built end to end.</span></div>
      </div>
    </section>
  );
}
