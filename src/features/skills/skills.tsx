import { Section } from "@/components/section";
import { Certifications } from "./certifications";
import { skills } from "./skill-data";
import { TechnologyStack } from "@/components/technology-stack";
export function Skills() {
  return (
    <Section id="skills" title="Tools & continued learning.">
      <div className="skills-stack-strip">
        <TechnologyStack moving items={["TypeScript", "JavaScript", "React", "Next.js", "Angular", "Tailwind CSS", "Spring Boot", "Node.js", "PostgreSQL", "Docker", "Git", "Python"]} />
      </div>
      <div className="learning-grid">
        <div className="skill-groups">
          {skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <TechnologyStack items={g.items} />
            </div>
          ))}
        </div>
      </div>
      <Certifications />
    </Section>
  );
}
