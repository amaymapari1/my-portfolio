import { profile } from "../../data/profile";
import { srOnly } from "../../styles/global.css";
import { circledIcon, footer, footerNote, footerRow, footerSocials } from "../../styles/styles.css";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={footerRow}>
        <p className={footerNote}>{profile.footerNote}</p>
        <div className={footerSocials}>
          <a className={circledIcon} href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon />
            <span className={srOnly}>GitHub</span>
          </a>
          <a className={circledIcon} href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon />
            <span className={srOnly}>LinkedIn</span>
          </a>
          <a className={circledIcon} href={`mailto:${profile.email}`}>
            <MailIcon />
            <span className={srOnly}>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
