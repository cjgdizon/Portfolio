import { experience } from "@/lib/data";
export function Experience() {
  return (
    <div id="experience" className="experience">
      <h3>Experience & education</h3>
      <ol>
        {experience.map((e) => (
          <li key={e.title}>
            <span className="text-muted-foreground">{e.period}</span>
            <div>
              <h4>{e.title}</h4>
              <p className="text-muted-foreground">{e.org}</p>
              {e.summary && <p>{e.summary}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
