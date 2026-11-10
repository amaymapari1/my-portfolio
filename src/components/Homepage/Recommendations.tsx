import { recommendationsData } from "../../data/recommendations";
import { reveal } from "../../styles/global.css";
import { quote, quotePlain, recName, recRole, section } from "../../styles/styles.css";
import { SectionHeading } from "../Shared/SectionHeading";

export default function Recommendations() {
  const recommendation = recommendationsData[0];
  if (!recommendation) return null;

  return (
    <section className={section} aria-label="Recommendation">
      <div className={reveal}>
        <SectionHeading title="Recommendation" />
      </div>
      <article className={`${reveal} ${quotePlain}`}>
        <blockquote className={quote}>
          <p>“{recommendation.quote}”</p>
        </blockquote>
        <p className={recName}>{recommendation.name}</p>
        <p className={recRole}>{recommendation.designation}</p>
      </article>
    </section>
  );
}
