import { Link } from "react-router-dom";
import { reveal } from "../../styles/global.css";
import { cx } from "../../styles/cx";
import { btnSolid, cta, ctaBlob, ctaButton, ctaCopy, ctaText, ctaTitle, panel, section } from "../../styles/styles.css";

export default function CollabCTA() {
  return (
    <section className={section}>
      <div className={cx(reveal, panel, cta)}>
        <div className={ctaCopy}>
          <h2 className={ctaTitle}>Have an Idea?</h2>
          <p className={ctaText}>Interested in working together? We should queue up a chat.</p>
        </div>
        <Link to="/contact" className={cx(btnSolid, ctaButton)}>
          <span aria-hidden="true">☕ </span>Let's Talk
        </Link>
        <div className={ctaBlob} />
      </div>
    </section>
  );
}
