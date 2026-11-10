import { workProfile } from "../data/work";
import { reveal } from "../styles/global.css";
import { bigIcon, panel, workColumn, workColumnPlain, workLabel, workLine, workList, workShell, workSummary, workTitle } from "../styles/styles.css";

function CodeMark() {
  return (
    <svg viewBox="0 0 64 64" className={bigIcon} aria-hidden="true">
      <path d="M24 18 10 32l14 14 4-4-10-10 10-10-4-4Zm16 0-4 4 10 10-10 10 4 4 14-14L40 18ZM36 14l-6 36h4l6-36h-4Z" />
    </svg>
  );
}

function BookMark() {
  return (
    <svg viewBox="0 0 64 64" className={bigIcon} aria-hidden="true">
      <path d="M14 8h28a6 6 0 0 1 6 6v42l-20-8-20 8V14a6 6 0 0 1 6-6Zm6 12h16v4H20v-4Zm0 8h16v4H20v-4Z" />
    </svg>
  );
}

export default function WhatIDo() {
  const { developer, knowledge } = workProfile;

  return (
    <section>
      <div className={`${reveal} ${panel} ${workShell}`}>
        <div className={workColumn}>
          <CodeMark />
          <h1 className={workTitle}>{developer.title}</h1>
          <p className={workSummary}>{developer.summary}</p>
          <h2 className={workLabel}>{developer.languagesLabel}</h2>
          <p className={workLine}>{developer.languages}</p>
          <h2 className={workLabel}>{developer.toolsLabel}</h2>
          <ul className={workList}>
            {developer.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className={workColumnPlain}>
          <BookMark />
          <h1 className={workTitle}>{knowledge.title}</h1>
          <p className={workSummary}>{knowledge.summary}</p>
          <h2 className={workLabel}>{knowledge.toolsLabel}</h2>
          <p className={workLine}>{knowledge.tools}</p>
          <h2 className={workLabel}>{knowledge.subjectsLabel}</h2>
          <ul className={workList}>
            {knowledge.subjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
