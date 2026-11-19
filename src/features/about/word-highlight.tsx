"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./about.module.css";

export function WordHighlight({ text }: { text: string }) {
  const words = text.split(/\s+/);
  const wordCount = words.length;
  const paragraph = useRef<HTMLParagraphElement>(null);
  const [highlightedWords, setHighlightedWords] = useState(wordCount);

  useEffect(() => {
    const element = paragraph.current;
    if (!element) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | undefined;
    const update = () => {
      frame = undefined;
      if (motion.matches) return;

      const { top, height } = element.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.45;
      const progress = Math.min(1, Math.max(0, (start - top) / Math.max(1, start - end + height)));
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setHighlightedWords(atBottom ? wordCount : Math.round(progress * wordCount));
    };
    const scheduleUpdate = () => {
      if (frame === undefined && !motion.matches) frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motion.addEventListener("change", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motion.removeEventListener("change", scheduleUpdate);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, [wordCount]);

  return (
    <p ref={paragraph} className={styles.statement}>
      {words.map((word, index) => (
        <Fragment key={index}>
          {index > 0 ? " " : ""}
          <span className={index >= highlightedWords ? styles.unhighlighted : undefined}>{word}</span>
        </Fragment>
      ))}
    </p>
  );
}
