import assert from "node:assert/strict";
import { test } from "node:test";
import { certifications } from "../src/features/skills/certificate-data.ts";
import { projects } from "../src/features/projects/project-data.ts";

const base = process.env.PORTFOLIO_TEST_URL || "http://127.0.0.1:3000";

test("technology logos render with names and resolve to local SVGs", async () => {
  const html = await (await fetch(base)).text();
  const icons = [...html.matchAll(/<img[^>]+src="(\/assets\/icons\/[^"]+\.svg)"[^>]*>/g)];
  assert.ok(icons.length >= 20, "Expected real technology logos");
  for (const [tag, src] of icons) {
    assert.match(tag, /alt="[^"]+"/);
    assert.equal((await fetch(base + src)).status, 200, src);
  }
});

test("home retains credentials, anchors, and an accessible contact form", async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const id of [
    "main",
    "projects",
    "about",
    "experience",
    "skills",
    "certifications",
    "contact",
  ]) {
    assert.ok(html.includes(`id="${id}"`), `Missing anchor ${id}`);
  }
  assert.equal(
    (html.match(/href="https:\/\/www\.coursera\.org/g) || []).length,
    certifications.length,
  );
  assert.ok(html.includes("<details"));
  assert.ok(html.includes("Discuss your project"));
  assert.ok(html.includes('href="/projects/pennywise"'));
  assert.ok(!html.includes('src="/profile.png"'));
  for (const name of ["name", "email", "message"]) {
    assert.ok(html.includes(`for="${name}"`), `Missing label ${name}`);
  }
  assert.match(html, /<form\b[^>]*method="post"/);
  assert.match(html, /<button\b(?=[^>]*type="submit")(?=[^>]*\bdisabled="")[^>]*>/);
  assert.ok(html.includes("Email me"));
  assert.ok(!html.includes("Open to full-time roles"));
});

test("every project and the resume remain reachable", async () => {
  for (const route of [
    ...projects.map(({ slug }) => `/projects/${slug}`),
    "/resume.pdf",
  ]) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    if (route.endsWith(".pdf")) {
      assert.ok(
        response.headers.get("content-type").includes("application/pdf"),
      );
    } else {
      const html = await response.text();
      assert.ok(html.includes("Highlights"), route);
      assert.ok(html.includes("View source code"), route);
    }
  }
});

test("all certificate previews and full-size images are available", async () => {
  const html = await (await fetch(base)).text();
  const ids = new Set([...html.matchAll(/\/certificates\/([A-Z0-9]+)\.webp/g)].map(match => match[1]));
  assert.deepEqual(ids, new Set(certifications.map(({ id }) => id)));
  const duplicate = html.match(/<ul(?=[^>]*aria-hidden="true")(?=[^>]*class="certificate-group")[^>]*>(.*?)<\/ul>/s)?.[1];
  assert.ok(duplicate, "Duplicate certificate group must be hidden from assistive technology");
  const duplicateLinks = [...duplicate.matchAll(/<a\b[^>]*href="\/certificates\/[A-Z0-9]+\.jpg"[^>]*>/g)];
  assert.equal(duplicateLinks.length, certifications.length);
  for (const [link] of duplicateLinks) assert.match(link, /tabindex="-1"/);
  for (const id of ids) {
    for (const extension of ["webp", "jpg"]) {
      const response = await fetch(`${base}/certificates/${id}.${extension}`);
      assert.equal(response.status, 200);
      assert.ok(response.headers.get("content-type").startsWith("image/"));
    }
  }
});
