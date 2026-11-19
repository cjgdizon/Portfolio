import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/features/projects/project-data";
import { TechnologyStack } from "@/components/technology-stack";

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
export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <article className="wrap project-page">
      <Link href="/#projects" className="link text-muted-foreground">
        <ArrowLeft aria-hidden="true" size={18} />
        All projects
      </Link>
      <header className="project-heading">
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>
      <div className="project-details">
        <div>
          <p className="body-copy">{project.description}</p>
          <h2>Highlights</h2>
          <ul className="highlight-list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <aside
          className="panel p-6 sm:p-8 self-start"
          aria-label="Project details"
        >
          <dl className="grid grid-cols-2 gap-6">
            <div>
              <dt className="text-sm text-muted-foreground">Role</dt>
              <dd className="mt-2">{project.role}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Year</dt>
              <dd className="mt-2">{project.year}</dd>
            </div>
          </dl>
          <h2>Stack</h2>
          <TechnologyStack items={project.tags} />
          <div className="btn-row">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Visit live site <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                View source code <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
