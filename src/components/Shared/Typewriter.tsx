import { useEffect, useState } from "react";
import { caret, srOnly } from "../../styles/global.css";

type TypewriterProps = {
  words: string[];
};

export function Typewriter({ words }: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(words[0] ?? "");
      return;
    }
    const current = words[wordIndex % words.length] ?? "";
    let timer = 0;
    if (!deleting && text === current) {
      timer = window.setTimeout(() => setDeleting(true), 900);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
    } else {
      timer = window.setTimeout(() => {
        const nextLength = text.length + (deleting ? -1 : 1);
        setText(current.slice(0, nextLength));
      }, deleting ? 45 : 90);
    }
    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words, reduced]);

  return (
    <span>
      <span className={srOnly}>{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className={caret}>|</span>
      </span>
    </span>
  );
}
