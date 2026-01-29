# Advanced Techniques
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

Advanced features and workflows for AI coding agents. This section focuses on Claude Code but the concepts apply to all agents.

---

## Claude Agents (Tasks)
Multiple Claude Code instances that autonomously complete complex workflows in parallel.

**When to use it:** You have a large or multi-part task — analyzing several data sources, refactoring across files, or running independent subtasks simultaneously.

**How to use it:** Ask Claude to start agents or tasks. It will spawn parallel instances that coordinate and report back.

**Example:**
```
"Spin up agents to analyze each of these three CSV reports and summarize the findings"
```

---

## Custom Commands
Reusable shortcuts that save your most common prompts so you don't have to describe them each time.

> **Note:** Custom commands have been merged into the Skills system (see below). Your existing `.claude/commands/` files still work, but Skills are the recommended approach going forward since they support additional features like supporting files, invocation control, and automatic triggering.

**When to use it:** You find yourself repeating the same type of request — scraping a new source, committing with a specific format, generating boilerplate.

**How to use it:** Create markdown instruction files in `.claude/commands/` (project) or `~/.claude/commands/` (global), then invoke with `/command-name`.

**Example:**
```
# .claude/commands/new-source.md
Scrape the provided URL, extract the main content, clean the data,
and save it as a structured JSON file in the /data directory.
```
Then use: `/new-source https://example.com/data`

---

## Skills
Folders of instructions, scripts, and resources that Claude loads dynamically to perform specialized tasks repeatably. Skills are the evolution of Custom Commands — they can do everything commands do, plus support bundled files, automatic invocation, and invocation control.

**When to use it:** You want Claude to follow specific workflows, conventions, or step-by-step procedures — either on demand or automatically when relevant.

**How to create a skill:**

Create a folder with a `SKILL.md` file containing YAML frontmatter and markdown instructions:

```
~/.claude/skills/explain-code/SKILL.md     (personal - all projects)
.claude/skills/explain-code/SKILL.md       (project - this project only)
```

```yaml
---
name: explain-code
description: Explains code with visual diagrams and analogies.
  Use when explaining how code works.
---

When explaining code, always include:
1. Start with an analogy
2. Draw a diagram using ASCII art
3. Walk through the code step-by-step
4. Highlight a common gotcha
```

The `name` becomes the `/slash-command`. The `description` tells Claude when to load it automatically.

**How to invoke:**
- Type `/skill-name` to invoke directly (e.g., `/explain-code src/auth.ts`)
- Claude can also invoke skills automatically when your request matches the description
- Use `$ARGUMENTS` in your skill content to accept parameters

**Invocation control:**

| Setting | Effect |
|---------|--------|
| *(default)* | Both you and Claude can invoke |
| `disable-model-invocation: true` | Only you can invoke (good for `/deploy`, `/commit`) |
| `user-invocable: false` | Only Claude can invoke (background knowledge) |

**Supporting files:** Skills can include templates, scripts, examples, and reference docs alongside `SKILL.md`:

```
my-skill/
├── SKILL.md           # Main instructions (required)
├── template.md        # Template for Claude to fill in
├── examples/
│   └── sample.md      # Example output
└── scripts/
    └── validate.sh    # Script Claude can execute
```

**Finding and installing community skills:**

- Official skills: <a href="https://github.com/anthropics/skills" target="_blank">github.com/anthropics/skills</a>
- Community directory: <a href="https://skills.sh" target="_blank">skills.sh</a> — browse and install with `npx skills add owner/repo`
- Skills follow the open <a href="https://agentskills.io" target="_blank">Agent Skills</a> standard, which works across multiple AI tools (Claude Code, Cursor, Copilot, etc.)

> **Tip:** Start by asking Claude Code to create a skill for you: *"Create a skill that [does what you need]."* It will set up the folder structure and write the SKILL.md file.


---

## Git Worktrees
Work on multiple branches simultaneously without switching contexts or cloning the repo again.

**When to use it:** You're building a feature but need to fix a bug on main, want to test different approaches side-by-side, or do code review without disrupting your current work.

**How to use it:**
```bash
# Create a worktree for a branch
git worktree add ../project-feature-branch feature-branch-name

# Each worktree has its own directory and branch, but shares git history
# Claude Code can work across worktrees simultaneously

# Clean up when done
git worktree remove ../project-feature-branch
```

> **Tip:** Name worktree directories clearly (e.g., `project-name-feature-name`) to avoid confusion when multiple Claude Code instances are running.

> **Tip:** If worktrees are confusing to you (or if any advanced workflow is), ask Claude to do it for you and teach you along the way.

---

## MCP Servers
Plugins that connect Claude to external tools, APIs, databases, and services through a standardized protocol.

**When to use it:** You need real-time data, want to connect to services like GitHub/Slack/Google Drive, or need specialized capabilities like browser automation or web search.

**How to use it:**

*Claude Desktop:* Settings → Extensions → Browse extensions (one-click install)

*Claude Code:*
```bash
# Add a server (use --scope user for all projects)
claude mcp add github --scope user

# Add with environment variables
claude mcp add -e API_KEY=your_key servername -- npx @org/server

# Check what's installed
claude mcp list
```

**Common servers:**

| Server | What it does |
|--------|-------------|
| Filesystem | Read/write local files with permission-based access |
| GitHub | Manage PRs, issues, and repository operations |
| Puppeteer | Browser automation and web scraping |
| Context7 | Up-to-date library docs with version-specific references |
| Brave Search | Real-time web search results |
| Sequential Thinking | Break down complex tasks into structured steps |
| Google Drive | Access and manage Drive documents |
| Slack | Send messages and interact with Slack workspaces |

**Configuration scopes:**

| Scope | Flag | Availability |
|-------|------|-------------|
| Local | *(default)* | Current directory only |
| User | `--scope user` | All projects globally |
| Project | `.mcp.json` file | Shared with team via version control |

> **Tip:** Use user scope for personal tools, project scope for team-shared servers. Restart Claude Desktop or Claude Code after adding servers to activate them.

**Finding more servers:**

- Official: <a href="https://github.com/modelcontextprotocol/servers" target="_blank">github.com/modelcontextprotocol/servers</a>
- Community: <a href="https://mcp.so" target="_blank">mcp.so</a>
- Smithery: <a href="https://smithery.ai" target="_blank">smithery.ai</a>
