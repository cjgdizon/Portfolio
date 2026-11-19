// Self-contained: this function also runs inline in the document head before first paint.
export function startPortfolioIntro() {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motion.matches) return;
  const root = document.documentElement;
  root.classList.add("intro-active");
  let content: HTMLElement | null = null;
  const finish = () => {
    root.classList.remove("intro-active", "intro-running");
    if (content) content.inert = false;
    window.clearTimeout(fallbackTimer);
    document.removeEventListener("DOMContentLoaded", ready);
    document.removeEventListener("animationend", ended);
    document.removeEventListener("keydown", escape);
    window.removeEventListener("pagehide", finish);
    motion.removeEventListener("change", onMotionChange);
  };
  const ready = () => {
    content = document.getElementById("portfolio-content");
    if (content) content.inert = true;
    root.classList.add("intro-typing");
    root.classList.add("intro-running");
    window.clearTimeout(fallbackTimer);
    fallbackTimer = window.setTimeout(finish, 5000);
  };
  const ended = (event: AnimationEvent) => {
    if (event.animationName === "intro-exit" && event.target === document.querySelector(".portfolio-intro")) finish();
  };
  const escape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      root.classList.remove("intro-typing");
      finish();
    }
  };
  const onMotionChange = (event: MediaQueryListEvent) => {
    if (event.matches) finish();
  };
  let fallbackTimer = window.setTimeout(finish, 5000);
  document.addEventListener("animationend", ended);
  document.addEventListener("keydown", escape);
  window.addEventListener("pagehide", finish);
  motion.addEventListener("change", onMotionChange);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready, { once: true });
  } else {
    ready();
  }
}
