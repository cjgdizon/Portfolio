import { About } from "@/features/about/about";
import { Contact } from "@/features/contact/contact";
import { Hero } from "@/features/hero/hero";
import { Projects } from "@/features/projects/projects";
import { Skills } from "@/features/skills/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
