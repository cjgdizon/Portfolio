import { Section } from "@/components/section";
import { Experience } from "@/components/experience";
import { WordHighlight } from "@/components/word-highlight";
export function About() {
  return (
    <Section id="about" title="The developer behind the work.">
      <WordHighlight>
        <p className="mo-wh__text">
          I’m an Information Technology student at Mapúa University. I build
          complete software, from the database to the interface.
        </p>
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
      </WordHighlight>
      <Experience />
    </Section>
  );
}
