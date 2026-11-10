import type { ReactNode } from "react";
import { cx } from "../../styles/cx";
import { panel, timeline, timelineBody, timelineCard, timelineDate, timelineIcon, timelineItem, timelineLine, timelineRail } from "../../styles/styles.css";

type TimelineItemProps = {
  date: string;
  icon: ReactNode;
  children: ReactNode;
};

export function Timeline({ children }: { children: ReactNode }) {
  return <ol className={timeline}>{children}</ol>;
}

export function TimelineItem({ date, icon, children }: TimelineItemProps) {
  return (
    <li className={timelineItem}>
      <div className={timelineRail}>
        <span className={timelineIcon}>{icon}</span>
        <span className={timelineLine} aria-hidden="true" />
      </div>
      <div className={timelineBody}>
        <p className={timelineDate}>{date}</p>
        <article className={cx(panel, timelineCard)}>{children}</article>
      </div>
    </li>
  );
}
