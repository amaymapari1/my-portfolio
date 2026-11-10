import experienceData from "../../data/experience.json";
import { reveal } from "../../styles/global.css";
import { bulletList, iconLink, iconSvg, section, tag, tagList, timelineSub, timelineTitle, titleRow } from "../../styles/styles.css";
import type { ExperienceItem } from "../../types";
import { ExternalIcon } from "../Shared/Icons";
import { SectionHeading } from "../Shared/SectionHeading";
import { Timeline, TimelineItem } from "../Shared/Timeline";

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconSvg} aria-hidden="true">
      <path d="M10 4a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V6a2 2 0 0 0-2-2h-4Zm0 3V6h4v1h-4Z" />
    </svg>
  );
}

export default function Experience() {
  const items = experienceData as ExperienceItem[];
  return (
    <section className={section}>
      <div className={reveal}>
        <SectionHeading title="Experience" />
      </div>
      <Timeline>
        {items.map((item) => (
          <TimelineItem key={`${item.title}-${item.date}`} date={item.date} icon={<BriefcaseIcon />}>
            <div className={titleRow}>
              <h3 className={timelineTitle}>{item.title}</h3>
              {item.website ? (
                <a href={item.website} target="_blank" rel="noreferrer" aria-label={`Website for ${item.title}`} className={iconLink}>
                  <ExternalIcon />
                </a>
              ) : null}
            </div>
            <p className={timelineSub}>{item.subtitle}</p>
            <ul className={bulletList}>
              {item.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
            <ul className={tagList}>
              {item.techStack.map((stack) => (
                <li key={stack} className={tag}>
                  {stack}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
