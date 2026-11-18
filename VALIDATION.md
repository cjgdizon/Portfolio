GATE: FAIL 38 (round 1 of 3)

# Redesign validation — 16 November 2026

The implementation follows the approved monochrome portfolio plan. The skill gate
does not pass: its strict template constraints conflict with several approved
choices. No checker files were edited and no findings were hidden or waived.

## Design record

Kind: personal developer portfolio / service. Audience: teams hiring interns.
Palette: #090909 / #141414 / #292929 / #F5F5F5 / #A3A3A3, matching the requested
monochrome reference. Font: Geist Sans. Hero: name and real portrait split.
Grounds: flat black and charcoal. No shader, scene, generated art, or stock photos.
Moment: the kit's word-highlight in About; hero entrance and hover use its motion layer.
Voice: factual, first-person, concise developer language with internship availability.
The approved brief overrides random dealing, the service light palette, rigid screen
heights, mandatory visual assets, and a category-led h1. No invented facts or names.
No stand-in images, client slots, assumed prices, .example contacts, or missing canonical
domain: existing profile content, FormSubmit destination, and deployed domain remain.

## Passed checks

- ESLint: no errors or warnings.
- Production build: npx next build --webpack, all routes generated; TypeScript passes.
- Node regression checks: 2/2 pass (anchors, 19 credentials, contact labels, internship
  availability, four project pages, source links, and PDF response).
- Copy lint: 0 FAIL, 0 WARN.
- Full browser consistency run at 1440, 1024, 820, 768, 390: contrast, collisions,
  tap sizes, focus, labels, names, heading order, reduced motion, assets, links,
  hover behavior, and hidden-content checks passed.
- Final quick gate: the 320px overflow walk reports no findings after the honeypot fix.
- Performance: 0 FAIL, four warnings across desktop and mobile. Layout shift 0.000
  for both; no broken requests. Desktop transfer 352.9 KiB, mobile 313.8 KiB.
  Warnings: parsed JavaScript 664.3 KiB (212.6 KiB transferred compressed), and the
  Next.js fill image lacks literal width/height attributes. Its CSS frame reserves space.
- Full-page screenshots visually inspected at all five widths; AMIRA detail page
  inspected separately. Images are in shots/ (local artifacts, ignored by Git).

## Limits and checker findings

The full checker reported 150 findings before the honeypot and explicit motion-CSS
link fixes, primarily from its prescribed viewport/grid/template rules. The final
gate consolidates the remaining findings below. The independent layout-check script
also crashed at 1024px with "r.sections is not iterable"; it was left unchanged.

The full checker fills every text input including the hidden bot trap and inserts
"Test" as the message. This triggers the existing honeypot (or message validation),
so its no-request form finding is not evidence that a valid human submission fails.
Real email delivery and individually mocked success/network-error form scenarios
were not verified. The contact request handler and schema remain in place.
Deployment was not performed. The default Turbopack build hit a CSS-worker process
error in this environment; the webpack production build passes.

## All open final gate findings

1. **no-visual** — section#projects "Selected work.": no picture, effect or mock in this section; a feature section needs a visual

2. **no-visual** — section#skills "Tools & continued learning.": no picture, effect or mock in this section; a feature section needs a visual

3. **text-only** — section#contact "Let’s talk about your team.": the closing section is only text: no picture, icon, mock or effect in it

4. **copy-headline** — h1#hero-title "Christian James Dizon.": "Christian James Dizon." does not name what is sold (developer portfolio, developer, portfolio, from flags); only the line under it does

5. **copy-headings** — h2#projects-title "Selected work.": "Selected work." names no product, part, place or section (7 headings like it; at most one brand line per page) (and 6 more like it: "Experience & education", "Tools & continued learni", "Frontend", "Backend", ...)

6. **section-gaps** — section#skills / section#contact: 330px between these sections, +68% against the median 197px

7. **section-height** — footer.footer "Christian James Dizon.© 2026 Christian J": the section is 297px tall (0.3 screens), 603px short of one screen (900px): every section after the hero is one screen or two, 2px either way (SR-2)

8. **section-height** — section#projects "Selected work.Full-stack developer · 202": the section is 1107px tall (1.2 screens), 207px over one screen (900px): every section after the hero is one screen or two, 2px either way (SR-2)

9. **section-height** — section#about "The developer behind the work.I’m an Inf": the section starts at 2007px, 207px below the screen grid (2 x 900px): sections start on whole screens (SR-2)

10. **section-height** — section#skills "Tools & continued learning.FrontendTypeS": the section starts at 2907px, 207px below the screen grid (3 x 900px): sections start on whole screens (SR-2)

11. **section-height** — section#contact "Let’s talk about your team.Looking for a": the section starts at 3807px, 207px below the screen grid (4 x 900px): sections start on whole screens (and 1 more like it: "Christian James Dizon.© ") (SR-2)

12. **section-air** — div#experience "Experience & education2024-2027B.S. in I": a top border across 100% of the container, between the section's content: sections and their parts are told apart by air and ground, not lines (SR-3)

13. **one-section** — footer.footer > div.wrap > p.footer-name "Christian James Dizon.": the screen at scroll 4103px (the top of section 6) shows 296px of section 6 and the heading of section 6 whole and the content of 2 sections, over 24px each beside section 5: a screen shows one section (another may peek 8px, 24px WARN) (SR-4)

14. **one-section** — section#projects "Selected work.Full-stack developer · 202": the screen at scroll 1800px (stride 2) shows 127px of section 2 and the content of 2 sections, over 24px each beside section 3: a screen shows one section (another may peek 8px, 24px WARN) (SR-4)

15. **one-section** — section#skills "Tools & continued learning.FrontendTypeS": the screen at scroll 3600px (stride 4) shows 127px of section 4 beside section 5: a screen shows one section (another may peek 8px, 24px WARN) (and 1 more like it: scroll 2700px) (SR-4)

16. **one-heading** — h2#about-title "The developer behind the work.": headings of two sections show whole on one screen at 9 of 83 scroll positions (10.8%; at scroll 1300, 1350, 1400, 1450px), here with "Lubak Alert": at most 3% on a desktop (SR-5)

17. **container-edges** — a.sr-only "Skip to content": a <a> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (SR-6)

18. **container-edges** — footer.footer "Christian James Dizon.© 2026 Christian J": a <footer> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (SR-6)

19. **container-edges** — main#main > section.hero > div.wrap.hero-grid "Open to internshipsChristian JamesDizon.": the hero's .wrap holds 3 children, 0 of them .hero-text: one .hero-text and at most one strip (SR-6)

20. **container-edges** — ol > li:nth-of-type(1) > div > p.text-muted-foreground "Mapua University": 2 text blocks start on a left line at x 685, 565px from the container's left: text starts on the container's left, or on one split line (x 630, 732, 834) (also "Hackathon") (SR-6)

21. **container-edges** — div#experience > ol > li:nth-of-type(1) "2024-2027B.S. in Information TechnologyM": 4 text blocks start on a left line at x 541, 421px from the container's left: text starts on the container's left, or on one split line (x 630, 732, 834) (also "2024-2027", "2026AppBuilder 2026Hackathon", "2026") (SR-6)

22. **container-edges** — div.skill-groups > div:nth-of-type(1) > ul.tags > li:nth-of-type(1) "TypeScript": 6 text blocks start on a left line at x 131, 11px from the container's left: text starts on the container's left, or on one split line (x 630, 732, 834) (also "Java", "PostgreSQL", "TypeScript") (and 1 more like it: x 752) (SR-6)

23. **container-edges** — div.wrap > ul.project-grid > li.project-wide:nth-of-type(1) > a.card.project-card "Full-stack developer · 2026AMIRAAMIRAAn ": a box over half the container wide runs 120-832px, not on the container's lines at 120-1320px (SR-6)

24. **container-edges** — div.wrap > ul.project-grid > li.project-wide:nth-of-type(4) > a.card.project-card "Solo project · 2026Tetris BattleTetris B": a box over half the container wide runs 608-1320px, not on the container's lines at 120-1320px (SR-6)

25. **split-pair** — div#experience "Experience & education2024-2027B.S. in I": the split's columns are off the page's one pair of lines: its right column starts at x 541, the first split's at 752; its right column starts at x 541, on none of the split lines 630 (k=5), 732 (k=6), 834 (k=7) (SR-8)

26. **split-pair** — section#skills > div.wrap > div.learning-grid "FrontendTypeScriptAngularReactNext.jsTai": the split's columns are off the page's one pair of lines: its right column starts at x 752, on none of the split lines 630 (k=5), 732 (k=6), 834 (k=7) (SR-8)

27. **split-pair** — section#contact > div.wrap > div.contact-grid "Looking for a developer intern?I’d like ": the split's columns are off the page's one pair of lines: its right column starts at x 752, on none of the split lines 630 (k=5), 732 (k=6), 834 (k=7) (and 1 more like it: "I’m an Information Techn") (SR-8)

28. **heading-scale** — h2#contact-title "Let’s talk about your team.": the text under this h2 reads larger: its letters are 17.0px tall (x-height, 32px) against the heading's 17.0px (x-height, 32px)

29. **off-grid** — div.skill-groups > div:nth-of-type(1) > ul.tags > li:nth-of-type(6) "PWA": left edge at 127.5px, 13.5px off a common edge of its section at 114px (3 elements, like li:nth-of-type(2)); 1 more in this section off the grid too (li:nth-of-type(6) at 118.5px)

30. **edge-left** — section.hero.is-still div.hero-portrait: starts at x 836.6; the lines are 120 and the column starts

31. **edge-left** — #about p.body-copy "My projects include a perfume st": starts at x 752; the lines are 120 and the column starts

32. **edge-left** — #about p.body-copy.mt-6 "I’m looking for an internship wh": starts at x 752; the lines are 120 and the column starts

33. **edge-left** — #about ol "2024-2027B.S. in Information Tec": starts at x 541.3; the lines are 120 and the column starts

34. **edge-left** — #skills h3 "Certifications (19)": starts at x 752; the lines are 120 and the column starts

35. **edge-left** — #skills ul "Angular for Front End EngineersC": starts at x 752; the lines are 120 and the column starts

36. **edge-left** — #contact div.panel.contact-panel "NameEmailMessageLeave this field": starts at x 752; the lines are 120 and the column starts

37. **neighbour** — #contact section.section "Let’s talk about your team.Looki": framed, 93px of #skills section.section "Tools & continued learning.Front" shows

38. **hero-fold** — section.hero.is-still section.hero.is-still "Open to internshipsChristian Jam": ends at y 913, past the fold (844): 1.08 screens tall
