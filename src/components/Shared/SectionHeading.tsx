import { anchorOffset, headingLink, headingMain, headingTagline } from "../../styles/styles.css";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  href?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, href, id }: SectionHeadingProps) {
  const heading = <h2 className={headingMain}>{title}</h2>;
  return (
    <div id={id} className={anchorOffset}>
      {eyebrow ? <p className={headingTagline}>{eyebrow}</p> : null}
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className={headingLink}>
          {heading}
        </a>
      ) : (
        heading
      )}
    </div>
  );
}
