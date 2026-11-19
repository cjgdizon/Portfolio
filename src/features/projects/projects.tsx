import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/features/projects/project-data";
import { TechnologyStack } from "@/components/technology-stack";
export function Projects() {
  return (
    <Section id="projects" title="Selected work.">
      <ul className="project-grid">
        {projects.map((p, i) => (
          <li key={p.slug} className={i === 0 || i === 3 ? "project-wide" : ""}>
            <Link href={`/projects/${p.slug}`} className="card project-card">
              <div className="project-top">
                <span>
                  {p.role} · {p.year}
                </span>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <div className="project-word" aria-hidden="true">
                {p.title}
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <TechnologyStack items={p.tags} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
