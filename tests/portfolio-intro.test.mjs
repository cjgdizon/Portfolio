import assert from "node:assert/strict";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import { startPortfolioIntro } from "../src/features/intro/start-portfolio-intro.ts";

function boot(reduced = false) {
  const classes = new Set();
  const events = new Map();
  const content = { inert: false };
  const overlay = {};
  let finish,
    duration,
    cleared = false;
  const target = {
    addEventListener: (name, fn) => events.set(name, fn),
    removeEventListener: (name) => events.delete(name),
  };
  const window = {
    ...target,
    matchMedia: () => ({ ...target, matches: reduced }),
    setTimeout: (fn, ms) => {
      finish = fn;
      duration = ms;
      return 1;
    },
    clearTimeout: () => {
      cleared = true;
    },
  };
  const document = {
    ...target,
    readyState: "loading",
    getElementById: () => content,
    querySelector: () => overlay,
    documentElement: {
      classList: {
        add: (name) => classes.add(name),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
      },
    },
  };
  runInNewContext(`(${startPortfolioIntro.toString()})();`, {
    window,
    document,
  });
  return { classes, events, content, overlay, finish: () => finish(), duration, cleared: () => cleared };
}

test("safety timeout reveals the page and cleans up if animation events fail", () => {
  const intro = boot();
  assert.ok(intro.classes.has("intro-active"));
  assert.equal(intro.duration, 5000);
  intro.events.get("DOMContentLoaded")();
  assert.ok(intro.content.inert);
  intro.finish();
  assert.equal(intro.classes.has("intro-active"), false);
  assert.equal(intro.classes.has("intro-running"), false);
  assert.equal(intro.events.size, 0);
  assert.ok(intro.cleared());
  assert.equal(intro.content.inert, false);
});

test("starts with the document and unlocks only when the curtain finishes", () => {
  const intro = boot();
  assert.equal(intro.classes.has("intro-running"), false);
  intro.events.get("DOMContentLoaded")();
  assert.ok(intro.classes.has("intro-running"));
  assert.ok(intro.content.inert);
  const ended = intro.events.get("animationend");
  ended({ animationName: "intro-paint", target: intro.overlay });
  ended({ animationName: "intro-exit", target: {} });
  assert.ok(intro.content.inert);
  ended({ animationName: "intro-exit", target: intro.overlay });
  assert.equal(intro.content.inert, false);
  assert.equal(intro.classes.has("intro-active"), false);
  assert.equal(intro.classes.has("intro-running"), false);
  assert.equal(intro.events.size, 0);
});

test("reduced motion skips the blocking intro entirely", () => {
  const intro = boot(true);
  assert.equal(intro.classes.size, 0);
  assert.equal(intro.events.size, 0);
  assert.equal(intro.duration, undefined);
});

test("enabling reduced motion immediately unlocks the page", () => {
  const intro = boot();
  intro.events.get("DOMContentLoaded")();
  assert.ok(intro.content.inert);
  intro.events.get("change")({ matches: true });
  assert.equal(intro.content.inert, false);
  assert.equal(intro.classes.has("intro-active"), false);
  assert.equal(intro.events.size, 0);
});

for (const path of ["escape", "pagehide"]) {
  test(`intro can exit via ${path}`, () => {
    const intro = boot();
    intro.events.get("DOMContentLoaded")();
    if (path === "escape") intro.events.get("keydown")({ key: "Escape" });
    if (path === "pagehide") intro.events.get("pagehide")();
    assert.equal(intro.classes.has("intro-active"), false);
    assert.equal(intro.classes.has("intro-running"), false);
    assert.equal(intro.events.size, 0);
    assert.equal(intro.content.inert, false);
  });
}
