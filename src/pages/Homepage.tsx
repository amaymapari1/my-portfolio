import CollabCTA from "../components/Homepage/CollabCTA";
import Hero from "../components/Homepage/Hero";
import Projects from "../components/Homepage/Projects";
import Recommendations from "../components/Homepage/Recommendations";
import Skills from "../components/Homepage/Skills";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Recommendations />
      <CollabCTA />
    </div>
  );
}
