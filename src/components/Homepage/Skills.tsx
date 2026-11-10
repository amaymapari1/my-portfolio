import skillsData from "../../data/skills.json";
import { reveal, revealDelay } from "../../styles/global.css";
import { cx } from "../../styles/cx";
import { panel, section, skillGrid } from "../../styles/styles.css";
import type { Skill } from "../../types";
import { SectionHeading } from "../Shared/SectionHeading";
import { SkillCard } from "./SkillCard";

export default function Skills() {
  const skills = skillsData as Skill[];
  return (
    <section className={section}>
      <div className={reveal}>
        <SectionHeading title="Skills" />
      </div>
      <div className={cx(reveal, revealDelay, panel, skillGrid)}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
