"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export function WordHighlight({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let cancelled = false;
    let destroy: (() => void) | undefined;
    const url = "/assets/moments/moments.js";
    // Load the unchanged kit module at runtime; remount it after Next.js navigation.
    import(/* webpackIgnore: true */ /* turbopackIgnore: true */ url)
      .then(async (kit) => {
        if (cancelled) return;
        const api = await kit.mount(element);
        if (cancelled) api?.destroy?.();
        else destroy = () => api?.destroy?.();
      })
      .catch(() => element.classList.add("mo-safe"));
    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);
  return (
    <div ref={root} className="about-grid" data-moment="word-highlight">
      {children}
    </div>
  );
}
