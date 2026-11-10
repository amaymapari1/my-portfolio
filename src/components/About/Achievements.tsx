import achievementsData from "../../data/achievements.json";
import { reveal } from "../../styles/global.css";
import { cx } from "../../styles/cx";
import {
  achievement,
  achievementDate,
  achievementMeta,
  achievementPosition,
  achievementTitle,
  cardGrid,
  detailList,
  detailText,
  headingMain,
  iconLink,
  sectionLoose,
  titleRow,
} from "../../styles/styles.css";
import type { Achievement } from "../../types";
import { ExternalIcon } from "../Shared/Icons";

export function AchievementCard({ achievement: item }: { achievement: Achievement }) {
  return (
    <article className={achievement}>
      <div className={titleRow}>
        <h3 className={achievementTitle}>{item.name}</h3>
        {item.website ? (
          <a href={item.website} target="_blank" rel="noreferrer" aria-label={`More about ${item.name}`} className={iconLink}>
            <ExternalIcon />
          </a>
        ) : null}
      </div>
      <div className={achievementMeta}>
        <p className={achievementPosition}>{item.position}</p>
        <p className={achievementDate}>{item.date}</p>
      </div>
      <dl className={detailList}>
        {item.details.map((detail) => (
          <div key={detail.label}>
            <dt className={detailText}>
              <strong>{detail.label}: </strong>
              {detail.value}
            </dt>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function Achievements() {
  const items = achievementsData as Achievement[];
  return (
    <section className={sectionLoose}>
      <div className={reveal}>
        <h2 className={headingMain}>Achievements</h2>
      </div>
      <div className={cx(reveal, cardGrid)}>
        {items.map((item) => (
          <AchievementCard key={item.name} achievement={item} />
        ))}
      </div>
    </section>
  );
}
