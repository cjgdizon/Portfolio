import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const link = cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-6");

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All projects
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-6 text-sm">
          <div>
            <dt className="font-mono text-xs text-muted-foreground">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted-foreground">Year</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-10 max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <h2 className="mt-12 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Highlights
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground marker:text-foreground">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <h2 className="mt-12 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t}>
              <Badge variant="secondary">{t}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={link}>
              Live site
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={link}>
              Source code
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}
