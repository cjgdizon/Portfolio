// Self-contained: this function also runs inline in the document head before first paint.
export function startPortfolioIntro() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const root = document.documentElement;
  root.classList.add("intro-active");
  let content: HTMLElement | null = null;
  const finish = () => {
    root.classList.remove("intro-active", "intro-running");
    if (content) content.inert = false;
    window.clearTimeout(timer);
    document.removeEventListener("DOMContentLoaded", ready);
    document.removeEventListener("animationend", ended);
    document.removeEventListener("keydown", escape);
    window.removeEventListener("pagehide", finish);
  };
  const ready = () => {
    content = document.getElementById("portfolio-content");
    if (content) content.inert = true;
    root.classList.add("intro-typing");
    root.classList.add("intro-running");
    window.clearTimeout(timer);
    timer = window.setTimeout(finish, 5000);
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
  // Safety only: normal completion follows the curtain's animationend event.
  let timer = window.setTimeout(finish, 5000);
  document.addEventListener("animationend", ended);
  document.addEventListener("keydown", escape);
  window.addEventListener("pagehide", finish);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready);
  else ready();
}
