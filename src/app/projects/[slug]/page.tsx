import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
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
  const url = `/projects/${slug}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { title: project.title, description: project.summary, url },
  };
}

const btn = "h-12 w-full cursor-pointer font-display text-lg font-bold tracking-wide uppercase";

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
      <Reveal>
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 rounded-lg font-display text-lg font-semibold tracking-wide text-muted-foreground uppercase transition-colors duration-150 hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-5" />
          All projects
        </Link>
        <div data-tone="guide" className="sign p-8 sm:p-12 lg:p-14">
          <h1 className="font-display text-[clamp(3rem,9vw,5.75rem)] leading-[0.92] font-extrabold tracking-tight text-balance uppercase">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-pretty sm:text-xl">
            {project.summary}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal delay={0.06} className="lg:col-span-7">
          <p className="max-w-[65ch] text-lg leading-relaxed">{project.description}</p>

          <h2 className="mt-12 font-display text-3xl font-bold tracking-wide uppercase">
            Highlights
          </h2>
          <div aria-hidden="true" className="lane mt-3 mb-6" />
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="relative max-w-[65ch] pl-7 before:absolute before:top-[0.6em] before:left-0 before:size-2.5 before:rounded-sm before:bg-sign dark:before:bg-caution"
              >
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <aside
            data-tone="info"
            className="sign p-8 sm:p-10 lg:sticky lg:top-24"
            aria-label="Project details"
          >
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-semibold opacity-75">Role</dt>
                <dd className="mt-1 text-lg font-medium">{project.role}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold opacity-75">Year</dt>
                <dd className="mt-1 text-lg font-medium">{project.year}</dd>
              </div>
            </dl>

            <h2 className="mt-8 font-display text-2xl font-bold tracking-wide uppercase">
              Stack
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-sm border border-current/40 px-2 py-0.5 text-sm font-semibold"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants(), btn)}
                >
                  Live site
                  <ArrowUpRight aria-hidden="true" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    btn,
                    "border-sign/60 bg-transparent text-paper-foreground hover:bg-sign/10 hover:text-paper-foreground dark:border-sign/60 dark:bg-transparent dark:hover:bg-sign/10",
                  )}
                >
                  Source code
                  <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </aside>
        </Reveal>
      </div>
    </article>
  );
}
