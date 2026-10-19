---
name: Portfolio (Highway Gantry)
description: A developer portfolio set as Philippine highway signage; every section is a sign you pass.
colors:
  guide-green: "oklch(0.44 0.105 155)"
  guide-green-night: "oklch(0.43 0.1 155)"
  sign-white: "oklch(0.985 0.005 140)"
  caution-yellow: "oklch(0.87 0.17 92)"
  caution-ink: "oklch(0.2 0.02 90)"
  lane-yellow-day: "oklch(0.78 0.17 90)"
  asphalt: "oklch(0.23 0.012 150)"
  asphalt-night: "oklch(0.27 0.012 155)"
  info-paper: "oklch(0.99 0.004 140)"
  info-ink: "oklch(0.3 0.08 155)"
  concrete: "oklch(0.945 0.007 140)"
  concrete-card: "oklch(0.985 0.004 140)"
  concrete-muted: "oklch(0.91 0.01 140)"
  ink: "oklch(0.21 0.012 150)"
  ink-muted: "oklch(0.43 0.015 150)"
  concrete-line: "oklch(0.78 0.012 145)"
  night-ground: "oklch(0.17 0.01 155)"
  night-card: "oklch(0.22 0.011 155)"
  night-ink: "oklch(0.94 0.006 140)"
  night-ink-muted: "oklch(0.74 0.012 150)"
  danger: "oklch(0.52 0.2 27)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.25rem, 9.5vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "0.025em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
rounded:
  sm: "4px"
  md: "8px"
  lg: "10px"
spacing:
  sm: "8px"
  md: "20px"
  lg: "40px"
  section: "96px"
components:
  sign-guide:
    backgroundColor: "{colors.guide-green}"
    textColor: "{colors.sign-white}"
    rounded: "{rounded.lg}"
    padding: "40px"
  sign-caution:
    backgroundColor: "{colors.caution-yellow}"
    textColor: "{colors.caution-ink}"
    rounded: "{rounded.lg}"
    padding: "40px"
  sign-asphalt:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.sign-white}"
    rounded: "{rounded.lg}"
    padding: "40px"
  sign-info:
    backgroundColor: "{colors.info-paper}"
    textColor: "{colors.info-ink}"
    rounded: "{rounded.lg}"
    padding: "40px"
  button-primary:
    backgroundColor: "{colors.guide-green}"
    textColor: "{colors.sign-white}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    height: "48px"
    padding: "0 24px"
  button-outline:
    backgroundColor: "{colors.concrete}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    height: "48px"
    padding: "0 24px"
  tag:
    textColor: "{colors.sign-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
---

# Design System: Portfolio (Highway Gantry)

## Overview

**Creative North Star: "The Highway Gantry"**

The page is a road and each section is a sign you pass. Philippine highway signage supplies the whole material vocabulary: guide-sign green with a white inset border line, warning yellow, asphalt black, white information panels, all set on concrete grey. Dark mode is the same signs at night: asphalt ground, with the green and yellow reading as reflective against it. The signs keep their identity in both themes; only the ground changes.

Density is generous and confident. Lettering is huge condensed caps on flat colour fields; body text stays in a calm humanist sans. Layout rhythm comes from unequal sign spans (4+2 / 2+4), not equal cards. The dashed lane line is the only divider.

**Key Characteristics:**
- Flat coloured fields with a 2px inset border line (the sign), one 10px corner radius.
- Condensed uppercase sign lettering at 700-800 weight; Barlow for reading text.
- Four sign classes, selected by tone: guide, caution, asphalt, info.
- Dashed yellow lane line as the sole divider; a scroll-driven road marker on wide screens.
- Reflective sheen and a small lift on interactive signs, pointer devices only.

## Colors

Concrete ground, one green, one yellow, one asphalt. All values live as OKLCH custom properties in `src/app/globals.css`.

### Primary
- **Guide Green** (`guide-green`): the guide-sign field, primary buttons, nav underline rule, scrollbar, success text. Slightly dimmer at night (`guide-green-night`); primary buttons lift to a brighter green in dark mode.

### Secondary
- **Caution Yellow** (`caution-yellow`): the warning sign field, text selection, dark-mode focus ring and nav underline, the road marker's arrow. Text on it is `caution-ink`.
- **Lane Yellow** (`lane-yellow-day`): dashed lane lines on concrete; uses `caution-yellow` at night.

### Neutral
- **Concrete** (`concrete`, `concrete-card`, `concrete-muted`, `concrete-line`): day page ground, card, muted fill, borders.
- **Ink / Ink Muted** (`ink`, `ink-muted`): day text and secondary text.
- **Asphalt** (`asphalt`, `asphalt-night`): the asphalt sign, and the asphalt sign's inset line is tinted caution yellow.
- **Info Paper / Info Ink** (`info-paper`, `info-ink`): the white information sign and its dark-green lettering; the contact form fields stay white in both themes.
- **Night Ground / Night Card / Night Ink** (`night-ground`, `night-card`, `night-ink`, `night-ink-muted`): the dark theme; borders there are white at 16%, inputs white at 38%.
- **Danger** (`danger`): validation and destructive only (form errors currently use Tailwind `red-700`).

### Named Rules
**The Four Signs Rule.** Colour lives on signs. A surface is one of guide, caution, asphalt or info (via `data-tone`); never invent a fifth sign colour or tint a sign gradient.

**The Same Signs At Night Rule.** Dark mode changes the ground, not the signs. Sign identity must read in both themes.

## Typography

**Display Font:** Barlow Condensed (600/700/800), sans-serif fallback
**Body Font:** Barlow (400/500/600), sans-serif fallback
**Label/Mono Font:** none distinct; `font-mono` is a system stack, unused in the shipped surfaces.

**Character:** Barlow was drawn from highway signage; the condensed cut is the lettering on the sign, the regular cut is the text beneath it. Numerals are tabular site-wide.

### Hierarchy
- **Display** (800, clamp 3.25rem to 5.75rem, 0.92): the name on the hero guide sign, uppercase, tight tracking.
- **Headline** (800, 3rem to 3.75rem, 1): section signs ("Selected work") and project titles at 3rem; wide-ish tracking on section signs.
- **Title** (700, 1.5rem, uppercase, +0.025em): role line, nav links (1.125rem 600), button labels (1.125rem 700).
- **Body** (400, 1.0625rem, 1.625): all running text; keep lines near 65ch (hero copy caps at `max-w-xl`).
- **Label** (600, 0.75-0.875rem): project tags in a 1px current-colour outline, years.

### Named Rules
**The Lettering Rule.** Condensed caps are for signs: names, section titles, project titles, nav, buttons. Reading text never uses the condensed face.

## Layout

A single `max-w-6xl` column with 20px (mobile) / 32px side padding. Sections breathe at 64px (mobile) / 96px vertical. The hero is a 12-column grid: a gantry beam bar across the top, the name sign at 8 columns and the status sign at 4, each hung from two short brackets. Projects use a 6-column grid at `md` with spans 4, 2, 2, 4 and 20px gaps. Every section opens with its own guide sign title followed by a dashed lane that runs to the right edge (hidden under `sm`). Nav collapses to a menu button below `lg`. The road marker appears only at 1280px and up.

## Elevation & Depth

Flat by default. Depth is tonal (sign fields on a concrete ground) and the 2px inset line. The only shadow is the hover state on interactive signs, and the asphalt sign gets a 1px white 14% outline in dark mode so it separates from the ground.

### Shadow Vocabulary
- **Sign lift** (`box-shadow: 0 18px 28px -14px oklch(0.2 0.05 155 / 0.5)` with `translateY(-3px)`): hover on interactive signs, pointer devices only.

### Named Rules
**The Flat Sign Rule.** Signs are flat at rest. Lift appears only in response to hover; never as a resting shadow.

## Shapes

One corner language: 10px (`--radius`) on every sign, control and panel; the inner inset line is 6px. Small tags use 4px. The sign's inset border (2px, 7px in from the edge, 5px on section titles, 3px on the 40px nav badge) is the signature form. Gantry brackets and the beam are plain rectangles.

## Components

### Buttons
- **Shape:** 10px radius, 48px tall in page use, 24px horizontal padding.
- **Primary:** guide green, white condensed bold uppercase label; hover dims to 80%.
- **Outline:** page background, 1px border, muted fill on hover; dark mode uses a translucent input fill.
- **Press:** scale to 0.97 over 150ms.

### Signs (signature)
Elements with `.sign` and `data-tone`: coloured field, 2px inset line, overflow hidden. Interactive signs (`data-interactive`) lift 3px, throw the shadow above, and a light streak sweeps across over 700ms; pressed they scale to 0.985. Project signs use 32-40px padding and a 288px minimum height, title anchored to the bottom.

### Navigation
Sticky, concrete ground with a 3px guide-green bottom rule. A 40px green sign badge with initials, then the name in condensed caps. Links are condensed 600 uppercase in muted ink; hover shows a 3px underline growing from the left (green by day, yellow at night). Below `lg` a full-width list of 1.5rem condensed links.

### Inputs / Fields
White fill in both themes, 48px high, dark-green text, 50% dark-green border; focus swaps to a green border and green ring. Errors appear as small red text below the field, with focus moved to the first invalid field.

### Lane Line and Road Marker
The 4px dashed lane (26px dash, 20px gap, lane yellow) divides sections; a vertical variant exists. On wide screens a 6px road along the right edge carries a green marker with a yellow arrow that travels with scroll position (CSS scroll timeline only).

### Motion
Signs switch on at page load (560ms, 12px rise, brightness from 0.7, staggered by 90ms); the shared easing is `cubic-bezier(0.23, 1, 0.32, 1)`. Everything animated stops under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** express every new surface as one of the four signs, using `data-tone` and the `.sign` class.
- **Do** keep a single 10px radius; tags at 4px.
- **Do** use the dashed lane as the only divider.
- **Do** keep focus visible: a 3px outline in `--ring` with 3px offset (near-black by day, yellow at night).
- **Do** keep contrast on sign fields by using the paired foreground token for each tone.

### Don't:
- **Don't** introduce a fifth colour field, gradients on sign faces, or glow effects in dark mode.
- **Don't** use equal-width card grids for work; vary spans.
- **Don't** put condensed caps on running text.
- **Don't** add resting shadows or borders-as-dividers between sections.
- **Don't** let hover lift or the light streak run on touch devices.
