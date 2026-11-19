import { Section } from "@/components/section";
import { Experience } from "./experience";
import { WordHighlight } from "./word-highlight";
import styles from "./about.module.css";

export function About() {
  return (
    <Section id="about" title="The developer behind the work.">
      <div className={styles.grid}>
        <WordHighlight text="I’m an Information Technology student at Mapúa University. I build complete software, from the database to the interface." />
        <div>
          <p className="body-copy">
            My projects include a perfume store with inventory tracking, a
            dental practice system, and an offline pothole warning app built for
            a local AI hackathon.
          </p>
          <p className="body-copy mt-6">
            I’m looking for an internship where I can contribute to working
            software and learn from experienced engineers.
          </p>
        </div>
      </div>
      <Experience />
    </Section>
  );
}
