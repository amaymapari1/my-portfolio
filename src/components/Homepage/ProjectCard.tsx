import { useEffect, useState, type ReactNode } from "react";
import { cx } from "../../styles/cx";
import {
  backdrop,
  circledIcon,
  coverTitle,
  covers,
  dialog,
  dialogClose,
  dialogFrame,
  dialogTitle,
  dialogWide,
  projectActions,
  projectActionsBorder,
  projectBody,
  projectCard,
  projectCover,
  projectImage,
  projectText,
  projectTitle,
  tag,
  tagList,
} from "../../styles/styles.css";
import type { Project } from "../../types";
import { CloseIcon, ExternalIcon } from "../Shared/Icons";

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a href={href} className={circledIcon} aria-label={label} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const primary = project.deployment || project.website || project.code;
  const hasActions = Boolean(project.website || project.deployment || project.sysArch);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <article className={projectCard}>
      {project.image ? (
        <img src={project.image} alt="" className={projectImage} />
      ) : (
        <div className={cx(projectCover, covers[project.cover])}>
          <p className={coverTitle}>{project.name}</p>
        </div>
      )}
      <div className={projectBody}>
        <h3 className={projectTitle}>
          {primary ? (
            <a href={primary} {...(primary.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className={projectText}>{project.description}</p>
      </div>
      <ul className={tagList}>
        {project.techStack.map((stack) => (
          <li key={stack} className={tag}>
            {stack}
          </li>
        ))}
      </ul>
      {hasActions ? (
      <div className={cx(projectActions, projectActionsBorder)}>
        {project.website ? (
          <IconLink href={project.website} label={`Website for ${project.name}`}>
            <ExternalIcon />
          </IconLink>
        ) : null}
        {project.deployment ? (
          <IconLink href={project.deployment} label={`Deployment for ${project.name}`}>
            <ExternalIcon />
          </IconLink>
        ) : null}
        {project.sysArch ? (
          <button type="button" className={circledIcon} aria-label={`System architecture for ${project.name}`} onClick={() => setOpen(true)}>
            <ExternalIcon />
          </button>
        ) : null}
      </div>
      ) : null}
      {open && project.sysArch ? (
        <div className={backdrop}>
          <div role="dialog" aria-modal="true" aria-labelledby="arch-title" className={cx(dialog, dialogWide)}>
            <button type="button" className={dialogClose} onClick={() => setOpen(false)} aria-label="Close architecture">
              <CloseIcon />
            </button>
            <h2 id="arch-title" className={dialogTitle}>
              System Architecture
            </h2>
            <iframe title={`${project.name} architecture`} src={project.sysArch} className={dialogFrame} />
          </div>
        </div>
      ) : null}
    </article>
  );
}
