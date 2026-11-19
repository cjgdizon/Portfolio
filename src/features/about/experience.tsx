import { experience } from "./experience-data";
import styles from "./about.module.css";

export function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <h3>Experience & education</h3>
      <ol>
        {experience.map((e) => (
          <li key={e.title}>
            <span className="text-muted-foreground">{e.period}</span>
            <div>
              <h4>{e.title}</h4>
              <p className="text-muted-foreground">{e.org}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
