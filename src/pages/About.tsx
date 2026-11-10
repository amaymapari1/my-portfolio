import Achievements from "../components/About/Achievements";
import Education from "../components/About/Education";
import Experience from "../components/About/Experience";
import { profile } from "../data/profile";
import { reveal } from "../styles/global.css";
import { bio, bioSection, headingMain, prose, proseParagraph } from "../styles/styles.css";

export default function About() {
  return (
    <div className={bio}>
      <section className={`${reveal} ${bioSection}`}>
        <h1 className={headingMain}>Bio</h1>
        <div className={prose}>
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className={proseParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <Education />
      <Experience />
      <Achievements />
    </div>
  );
}
