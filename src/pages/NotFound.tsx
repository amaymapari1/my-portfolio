import { Link } from "react-router-dom";
import { shake } from "../styles/global.css";
import { btnOutline, missing, missingAction, missingArt, missingCopy, missingTitle } from "../styles/styles.css";

export default function NotFound() {
  return (
    <section className={missing}>
      <img src="/images/not-found.svg" alt="" className={`${shake} ${missingArt}`} />
      <h1 className={missingTitle}>Looks like you've reached a dead end</h1>
      <p className={missingCopy}>That page is not part of this site. Check the address, or head back home.</p>
      <Link to="/" className={`${btnOutline} ${missingAction}`}>
        Back to Home
      </Link>
    </section>
  );
}
