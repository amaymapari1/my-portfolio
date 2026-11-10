import { config } from "../config";
import { profile } from "../data/profile";
import { btnSolid, resumeBar, resumeFrame, resumeShell, resumeTitle } from "../styles/styles.css";

export default function Resume() {
  const sameOrigin = config.resumeDownloadUrl.startsWith("/");

  return (
    <section className={resumeShell}>
      <div className={resumeBar}>
        <h1 className={resumeTitle}>Resume | {profile.shortName}</h1>
        <a
          className={btnSolid}
          href={config.resumeDownloadUrl}
          target="_blank"
          rel="noreferrer"
          {...(sameOrigin ? { download: "AmayMapari_Resume.pdf" } : {})}
        >
          Download
        </a>
      </div>
      <iframe title={`${profile.name} resume`} src={config.resumePreviewUrl} className={resumeFrame} />
    </section>
  );
}
