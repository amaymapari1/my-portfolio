import type { Skill } from "../../types";
import { skillCard, skillIcon, skillName } from "../../styles/styles.css";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className={skillCard}>
      <img src={skill.url} alt="" width={48} height={48} className={skillIcon} />
      <h3 className={skillName}>{skill.name}</h3>
    </article>
  );
}
