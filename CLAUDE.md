# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Workshop materials for teaching vibe coding (AI-assisted coding). Educational documentation hosted via GitHub Pages at `workshop.nerktek.com`.

## Local Development

```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

No build step — all content is static HTML/Markdown rendered client-side.

## GitHub Pages Viewer Architecture

The viewer is a client-side app:

| File | Purpose |
|------|---------|
| `index.html` | HTML structure + core app logic (routing, wizard, markdown rendering, DOM manipulation) |
| `styles.css` | All CSS including light/dark themes, wizard styling, print/PDF, responsive breakpoints |
| `config.js` | App configuration: `FILE_GROUPS`, `PATH_OPTIONS`, `FONT_SIZES` |
| `content/` | Workshop content split into modules (see below) |
| `pages.js` | Render functions for all custom route pages |

**`content/` directory** — each guide is a separate file exporting globals:

| File | Globals |
|------|---------|
| `helpers.js` | `_tip`, `_note`, `_warn`, `_term`, `_check`, `_cards` (must load first) |
| `projects.js` | `WELCOME_PROJECTS`, `WORKSHOP_PROJECTS` |
| `setup-guides.js` | `SETUP_GUIDES` (~720 lines, largest file) |
| `beginner.js` | `BEGINNER_GUIDE` |
| `group-project.js` | `GROUP_PROJECT_OPTIONS`, `GROUP_PROJECT_GUIDE` |
| `prompting.js` | `PROMPTING_GUIDE` |
| `product.js` | `PRODUCT_GUIDE` |
| `tech-stack.js` | `TECH_STACK_GUIDE` |
| `github.js` | `GITHUB_GUIDE` |
| `solo-project.js` | `SOLO_PROJECT_GUIDE` |
| `cleanup.js` | `CLEANUP_GUIDE` |
| `advanced-techniques.js` | `ADVANCED_TECHNIQUES_GUIDE` |
| `beyond-coding.js` | `BEYOND_CODING_CATEGORIES` |

Scripts load in order: `config.js` → `content/helpers.js` → remaining `content/*.js` → `pages.js` → inline `<script>` in `index.html`. Render functions in `pages.js` reference globals (`contentDiv`, `selector`, `loadMarkdown`, etc.) defined in the inline script.

All step-by-step guides share the same data format: `{ name, subtitle, steps: [{ title, content, nextLabel? }] }`. The shared `renderStepGuide()` in `pages.js` handles navigation buttons and layout for all of them.

### Content Rendering Modes

**1. Custom Routes (JS-rendered pages)** — most content uses slug-based URL hashes with no backing `.md` file. Routes are registered in the `customRoutes` object inside `loadMarkdown()` in `index.html`. Setup guides are data-driven: content defined in `SETUP_GUIDES` (`content.js`), rendered by `renderSetupGuide()` (`pages.js`).

**2. Markdown Files (fetched and rendered)** — `.md` files in `FILE_GROUPS` (`config.js`) are fetched at runtime and rendered with marked.js. Hash format: `#Filename.md`.

**Wizard/stepper mode** — activated by `<!-- wizard-start -->`, `<!-- wizard-step: N | title: ... -->`, `<!-- wizard-end -->` HTML comments in markdown content. `autoWizard: true` in FILE_GROUPS auto-enters wizard mode.

### When Adding New Docs

1. **Markdown doc:** Add entry to `FILE_GROUPS` in `config.js` with `{ name: "Display Name", path: "Filename.md" }`
2. **Custom route:** Add render function in `pages.js`, register in `customRoutes` in `index.html`, add guide data as a new file in `content/` if step-based
3. Update `README.md` if the doc should be featured

## Workshop Projects

Location: `workshop-projects/YYYY-MM-DD-venue/participant-name-project/`

Each project should be self-contained with a README.

## Editing Guidelines

- Preserve HTML table structures (used for QR code layouts in headers)
- Follow existing format patterns (Simple/Medium/Complex for projects, checkmark/X for pros/cons)
- Maintain direct, educational voice
- **Never use `var(--accent-color)` for borders.** Always use `var(--border-color)` for all border colors in inline styles and CSS.

## Parallel Context File

`GEMINI.md` is a parallel context file for Gemini — keep it in sync with this file when making structural changes.

## Commit Rules

Never mention Claude or AI in commit messages.
