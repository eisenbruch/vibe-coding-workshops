# Claude Code Quick Reference
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

A quick reference for working with Claude Code in the terminal and VS Code.

---

## CLI Quick Reference

| Command    | Purpose                                                                  |
| ---------- | ------------------------------------------------------------------------ |
| `claude`   | Start Claude in your terminal.                                           |
| `shift + tab` | Change modes: planning, accept edits, ask for permission (defualt) |
| ` @ ` | Mention a file within your folder structure (excludes `git ignore` files)
| `esc`      | Interrupt Claude while it's working.                                     |
| `esc esc`  | Go back in conversation and code history.                                |
| `/init`    | Review codebase and create CLAUDE.md documentation file for AI reference |
| `#memory`  | Easily add to CLAUDE.md memory                                           |
| `/compact` | Compact conversation to clear space while keeping some memory            |
| `/clear`   | Better space clearing but loses memory (or quit/restart Claude Code)     |
| `/usage`   | Check current usage level                                                |
| `/resume`  | Resume a previous conversation                                           |
| `/review`  | Code review                                                              |

---

## CLAUDE.md Memory

Store important instructions in CLAUDE.md to prevent AI from doing unwanted things (overwriting data, unnecessary builds, etc.). CLAUDE.md files exist at two levels:

- **Global** (`~/.claude/CLAUDE.md`) — applies to all projects
- **Project** (`CLAUDE.md` in your project folder) — project-specific knowledge

Use this to your advantage — global knowledge vs project specific knowledge.

---

## Tips

- **Interrupt early.** If Claude is going down the wrong path, press `esc` to stop it. Double tap `esc` to go back. This saves memory and credits vs. correcting mistakes later.
- **Use `/compact` or `/clear`** when conversations get long. Long conversations degrade quality.
- **Use `#memory`** to save instructions you find yourself repeating. Claude will remember them across conversations.
- **Use `/init`** when bringing Claude into an existing project for the first time. It scans your codebase and generates a CLAUDE.md file so Claude understands your project's structure, conventions, and dependencies from the start.
