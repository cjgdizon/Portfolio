"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      node.toggleAttribute("data-reveal-visible", entry.isIntersecting);
      node.setAttribute("data-reveal-ready", "");
    });
    const sync = () => {
      observer.disconnect();
      node.removeAttribute("data-reveal-ready");
      node.removeAttribute("data-reveal-visible");
      if (!motion.matches) observer.observe(node);
    };
    sync();
    motion.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
    };
  }, []);
  return <div ref={ref} className="scroll-reveal">{children}</div>;
}
