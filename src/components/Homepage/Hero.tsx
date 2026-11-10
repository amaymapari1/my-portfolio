import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { reveal, revealDelay } from "../../styles/global.css";
import { block, btnOutline, centerRow, hero, heroActions, heroRoles, heroSummary, heroTitle, portrait } from "../../styles/styles.css";
import { Typewriter } from "../Shared/Typewriter";

export default function Hero() {
  return (
    <section className={hero}>
      <div className={reveal}>
        <h1 className={heroTitle}>
          {profile.heroGreeting}
          <span className={block}>{profile.heroIntro}</span>
        </h1>
        <p className={heroRoles}>
          <Typewriter words={profile.roles} />
        </p>
        <p className={heroSummary}>{profile.heroSummary}</p>
        <div className={heroActions}>
          <Link to="/resume" className={btnOutline}>
            See my Resume
          </Link>
          <Link to="/contact" className={btnOutline}>
            Reach out
          </Link>
        </div>
      </div>
      <div className={`${reveal} ${revealDelay} ${centerRow}`}>
        <img src={profile.portrait} alt={profile.portraitAlt} className={portrait} />
      </div>
    </section>
  );
}
