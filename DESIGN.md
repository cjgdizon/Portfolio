# Monochrome developer portfolio

Personal developer portfolio / service for teams hiring interns.
The supplied monochrome reference guides contrast, spacing, and asymmetric composition.

## System

Dark only. Ground #090909, surface #141414, border #292929, text #F5F5F5,
secondary #A3A3A3. Geist Sans throughout, sentence case, tightly spaced headings.
Shared 1200px content width; gutters 48px desktop, 32px tablet, 20px mobile.
Cards 12px radius, buttons 8px, tags 4px. Primary white, secondary outlined.

## Composition

Portrait-free cinematic hero; selected work in alternating 3/2 and 2/3 card spans; About with
experience rows; skills beside recent certificates; contact form; large-name footer.
All 19 credentials remain accessible through a native disclosure.
Certifications occupy their own full-width band below the skill groups. A seamless
260-second horizontal loop shows 560px certificate cards (86vw on phones), using
real previews retrieved from each public Coursera page's og:image metadata.
Original JPEGs are in public/certificates; optimized WebP previews trim only outer
whitespace. Clicking opens the original full-resolution image. Hover and keyboard
focus stop the loop. Reduced motion uses manual horizontal scroll.
The disclosure retains all 19 original verification links; the duplicate marquee
group is hidden from assistive technology and keyboard navigation; its images
remain clickable for pointer users.
Hero uses an original titanium-ribbon image with live HTML copy and client contact actions.
The original portrait file is retained but is not displayed. Project cards use factual
text compositions because no screenshots are supplied.

## Motion and access

Experience mode: a CSS 3D graphite cube rotates with cjd lettering on its six faces.
The cube rotates and settles for 1.7 seconds, then scales toward the camera and
dissolves over 700ms. At 1.75 seconds, the dark overlay crossfades over 650ms while
the portfolio settles from scale .97 and a 24px rise. No sliding panels or wipes.
The full sequence lasts 2.4 seconds from document readiness.
Completion follows the overlay's animationend event, with a 5-second safety fallback.
The page is inert until completion, so keyboard focus cannot move behind the curtain.
The rotating role titles and scroll reveals remain independent of the intro.
There is no Skip button; Escape ends it immediately. It runs on full document loads,
not internal route changes. Reduced motion bypasses it; without JavaScript the
overlay stays hidden and the portfolio remains available. CSS transforms and opacity;
no canvas, WebGL, image downloads, additional dependencies, or
simulated percentage progress.

The former painted intro is retired. Its assets remain unused for provenance and are
not preloaded. Historical inspiration: https://www.awwwards.com/inspiration/intro-collecting-stamps-on-mt-fuji
Original artwork replaces the reference's Japanese title; no reference assets or
code are shipped. Assets generated with the built-in image generator:
public/intro-cjd-brush.webp (transparent, about 223 KB) and
public/intro-ink-paper.webp (about 78 KB).

Mark prompt: Create an original white lowercase cjd monogram, physical broad-brush
sumi-e calligraphy, chunky readable Latin letters, rough bristle edges and dry-brush
gaps, distinct round j dot, slightly uneven baseline, separate letters, fully
transparent ground, no mountains, symbols, shadow, bevel, or other text.
Final edit prompt: Preserve the exact white brush lettering shapes, spacing and
baseline. Remove all glow, haze, gray shadow and aura. Flat white brush paint,
fully transparent outside the actual dry-brush strokes. Crisp natural ragged
bristle edges, no black background or blurred edges.

Background prompt: Original nearly black sumi ink and charcoal brush painting
on textured black paper, wide landscape, enormous sweeping diagonal physical
bristle strokes, irregular dry-brush edges, layered black on dark charcoal,
subtle paper fibers and dusty pigment, deep dark center for a white mark.
No objects, mountains, text, symbols, logos, color, or synthetic noise.

Skill motion layer supplies hover, press, and hero entrance. About uses its
word-highlight moment. Content stays visible without JavaScript or under reduced
motion. Mobile navigation supports focus cycling, Escape, and scroll locking.

Section headings and content use repeatable viewport reveals: 24px rise and opacity,
600ms with the existing --ease curve. IntersectionObserver resets them only after
they leave the viewport, allowing another entrance when scrolling back. Default
markup stays visible; reduced motion bypasses observation and keyboard focus shows
its containing reveal immediately. No scroll handlers, added dependencies, or scroll hijacking.

## Brief overrides

The approved dark grayscale palette and split hero replace randomized choices and
the kit's service-page light palette. Sections grow with content, including expanded
credentials and the stacked mobile hero. Keep existing Next.js deployment and
working FormSubmit integration. No external stock photos, shaders, or invented UI.

## Client-focused hero update

Primary action: Discuss your project. Secondary: Explore my work. The navigation
and contact section now support project enquiries. Existing project links provide
evidence; the floating notes describe capabilities, not invented live system status.
Real technology logos keep the transparent CSS 3D hover treatment.

Artwork: public/hero-titanium.webp, approximately 60 KB, generated with the built-in
image generator and optimized to WebP. It is original decorative art, not a product
screenshot or client deliverable. Desktop and phone layouts were visually inspected.

Generation prompt:

> Use case: stylized-concept. Asset type: wide website hero background art for a premium independent full-stack developer portfolio. Create a cinematic high-end 3D studio render, landscape 16:9. Nearly black (#090909) seamless background. One large sculptural continuous ribbon made of satin dark titanium with polished silver bevels, folded into a broad low architectural arch and looping sweep. It occupies the right half and lower third, running off the lower right frame. Delicate finely ribbed metal inner surface, physically convincing reflections, restrained cool silver-white edge lights, very faint desaturated teal reflections and a tiny warm amber glint. Top left and left half must remain empty pure near-black for live HTML headline; all top third sparse and dark. Camera low elevated three-quarter view. Expensive editorial product photography, dramatic chiaroscuro, precise machined detail, subtle floor reflections, deep blacks. This is abstract material art, NOT an interface mockup. No people, no portrait, no text, no letters, no logos, no UI, no badges, no conveyors, no pipeline-engine reference imitation, no colorful neon. Render at high quality.
