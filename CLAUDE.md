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

The viewer is a client-side app split across five files (no build step required):

| File | Purpose |
|------|---------|
| `index.html` (~1070 lines) | HTML structure + core app logic (routing, wizard, markdown rendering, DOM manipulation) |
| `styles.css` (~1610 lines) | All CSS including light/dark themes, wizard styling, print/PDF, responsive breakpoints |
| `config.js` (~177 lines) | App configuration: `FILE_GROUPS`, `PATH_OPTIONS`, `FONT_SIZES` |
| `content.js` (~2295 lines) | Workshop content: `SETUP_GUIDES`, `BEGINNER_GUIDE`, `GROUP_PROJECT_GUIDE`, `WELCOME_PROJECTS`, `GROUP_PROJECT_OPTIONS`, and content helpers (`_tip`, `_note`, `_warn`, `_term`, `_check`, `_cards`) |
| `pages.js` (~717 lines) | Render functions (`renderWelcome`, `renderWhoAmI`, `renderPickYourPath`, `renderStepGuide`, etc.) |

Scripts load in order: `config.js` → `content.js` → `pages.js` → inline `<script>` in `index.html`. Render functions in `pages.js` reference globals (`contentDiv`, `selector`, `loadMarkdown`, etc.) defined in the inline script.

All step-by-step guides (setup guides, beginner quick start, group project) share the same data format: `{ name, subtitle, steps: [{ title, content, nextLabel? }] }`. The shared `renderStepGuide()` in `pages.js` handles navigation buttons and layout for all of them.

### Content Rendering Modes

**1. Custom Routes (JS-rendered pages)** — pages with no backing `.md` file, using slug-based URL hashes:
- **Welcome/navigation:** `welcome`, `who-am-i`, `what-is-vibe-coding`, `why-vibe-coding`, `who-is-vibe-coding-for`, `what-youll-learn`, `example-projects`, `beyond-coding`, `pick-your-path`
- **Setup guides:** `setup-beginner`, `setup-claude-desktop`, `setup-google-ai-studio`, `setup-antigravity`, `setup-antigravity-claude`, `setup-antigravity-gemini`, `setup-claude-code`, `setup-gemini-cli`
- **Group project:** `group-project`
- **Level up:** `prompting-guide`, `product-guidance`, `tech-stack`, `data-apis`, `github-guide`, `solo-project`, `cleanup-guide`

Custom routes are registered in the `customRoutes` object inside `loadMarkdown()` in `index.html`. Setup guides share a data-driven renderer: guide content is defined in `SETUP_GUIDES` (`config.js`) and rendered by `renderSetupGuide()` (`pages.js`).

Helper functions for building setup guide HTML (in `content.js`):
- `_tip(text)`, `_note(text)`, `_warn(text)` — callout boxes
- `_term(code)` — terminal/code blocks
- `_check(items)` — checklist with checkmarks

**2. Markdown Files (fetched and rendered)** — standard `.md` files fetched at runtime and rendered with marked.js. Hash format: `#Filename.md` (e.g., `#Group%20Project.md`).

### Key Data Structures
- `FILE_GROUPS` (`config.js`) — defines the doc selector dropdown and sidebar navigation. Each entry has `{ name, path }` and optionally `autoWizard: true`
- `PATH_OPTIONS` (`config.js`) — defines the beginner/intermediate/advanced skill-level paths shown on the `pick-your-path` page
- `SETUP_GUIDES`, `BEGINNER_GUIDE`, `GROUP_PROJECT_GUIDE` (`content.js`) — step-by-step guide content, all sharing the same `{ name, subtitle, steps }` format

### Key Viewer Features
- **Wizard/stepper mode** — activated by `<!-- wizard-start -->`, `<!-- wizard-step: N | title: ... -->`, `<!-- wizard-end -->` HTML comments in content. `autoWizard: true` in FILE_GROUPS auto-enters wizard mode
- Collapsible h2/h3 sections (all expanded by default)
- Print/PDF styling that expands all collapsed sections and wizard steps
- Dark/light theme toggle
- Sidebar navigation on wide screens

### When Adding New Docs
1. Add entry to appropriate group in `FILE_GROUPS` (`config.js`) with `{ name: "Display Name", path: "Filename.md" }`
2. For custom routes: add a render function in `pages.js` and register it in `customRoutes` inside `loadMarkdown()` in `index.html`
3. Update `README.md` if the doc should be featured

## Workshop Projects

Location: `workshop-projects/YYYY-MM-DD-venue/participant-name-project/`

Each project should be self-contained with a README.

## PDF Generation

`convert-cheatsheet.sh` converts HTML to PDF using `weasyprint` and adds page numbers with `pdfcpu`. Both tools must be installed separately.

## Editing Guidelines

- Preserve HTML table structures (used for QR code layouts in headers)
- Follow existing format patterns (Simple/Medium/Complex for projects, checkmark/X for pros/cons)
- Maintain direct, educational voice
- **Never use `var(--accent-color)` for borders.** Always use `var(--border-color)` for all border colors in inline styles and CSS.

## Parallel Context File

`GEMINI.md` is a parallel context file for Gemini — keep it in sync with this file when making structural changes.

## Commit Rules

Never mention Claude or AI in commit messages.
