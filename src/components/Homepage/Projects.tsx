import { profile } from "../../data/profile";
import { projectsData } from "../../data/projects";
import { reveal, revealDelayLong } from "../../styles/global.css";
import { projectGrid, section } from "../../styles/styles.css";
import { SectionHeading } from "../Shared/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section className={section}>
      <div className={reveal}>
        <SectionHeading eyebrow="Take a look" title="Projects" href={profile.github} />
      </div>
      <div className={`${reveal} ${revealDelayLong} ${projectGrid}`}>
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
