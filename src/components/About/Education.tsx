import educationData from "../../data/education.json";
import { reveal } from "../../styles/global.css";
import { iconSvg, section, timelineMeta, timelineSub, timelineTitle } from "../../styles/styles.css";
import type { EducationItem } from "../../types";
import { SectionHeading } from "../Shared/SectionHeading";
import { Timeline, TimelineItem } from "../Shared/Timeline";

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconSvg} aria-hidden="true">
      <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm0 13L5.5 12.2V16c0 2.2 2.9 4 6.5 4s6.5-1.8 6.5-4v-3.8L12 16Z" />
    </svg>
  );
}

export default function Education() {
  const items = educationData as EducationItem[];
  return (
    <section className={section}>
      <div className={reveal}>
        <SectionHeading title="Education" />
      </div>
      <Timeline>
        {items.map((item) => (
          <TimelineItem key={item.title} date={item.date} icon={<CapIcon />}>
            <h3 className={timelineTitle}>{item.title}</h3>
            <p className={timelineSub}>{item.subtitle}</p>
            <p className={timelineMeta}>{item.grade}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
