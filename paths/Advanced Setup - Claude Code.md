# Advanced Setup — Claude Code

*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series*

> **Note:** If you don't want a paid plan, use [Gemini CLI](Advanced%20Setup%20-%20Gemini%20CLI.md) instead — it's free and follows a similar workflow.

---

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Install VS Code -->

## Step 1: Install VS Code

1. Download <a href="https://code.visualstudio.com/download" target="_blank">VS Code</a> for your operating system
2. Run the installer
3. Launch VS Code

> **Tip:** Already use Cursor or Antigravity? Those work too — the steps are nearly identical.

<!-- wizard-step: 2 | title: Sign Up for Claude -->

## Step 2: Sign Up for Claude

1. Go to <a href="https://claude.ai/pricing" target="_blank">claude.ai/pricing</a>
2. Sign up for **Pro** or **Max**

> **Note:** Claude Code requires a paid subscription.

<!-- wizard-step: 3 | title: Install Claude Code -->

## Step 3: Install Claude Code

Pick whichever feels more comfortable — both connect to the same AI:

### Option A: VS Code Extension (recommended to start)

1. Install the <a href="https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code" target="_blank">Claude Code extension</a> from the marketplace
2. Click the Claude icon in the editor toolbar
3. Sign in when prompted

### Option B: CLI Tool (for terminal users)

1. Follow the <a href="https://code.claude.com/docs/en/setup#native-install-recommended" target="_blank">CLI installation guide</a>
2. Open a terminal in VS Code (`` Ctrl+` ``)
3. Type `claude` to start

<!-- wizard-step: 4 | title: Create Your Project Folder -->

## Step 4: Create Your Project Folder

1. Create a folder called `workshop-project` on your Desktop
2. In VS Code: **File → Open Folder** → select it
3. Open Claude Code (extension panel or terminal)

You should see your empty folder in VS Code's file explorer and Claude Code ready to go.

<!-- wizard-step: 5 | title: Quick Terminal Intro -->

## Step 5: Quick Terminal Intro

Open the terminal in VS Code with `` Ctrl+` `` or **View → Terminal**.

The key thing to know: **you don't need to memorize commands.** Your AI runs commands for you. Just describe what you need:

> **Tip:** Try saying: "Start a local server so I can preview my project" — Claude will handle the rest.

<!-- wizard-step: 6 | title: Install Developer Tools -->

## Step 6: Install Developer Tools

Paste this prompt into Claude Code:

```
Check my system and install any of these developer tools that are missing:
- Homebrew (Mac only — package manager)
- Node.js and npm (JavaScript runtime)
- Git (version control)
- gh (GitHub CLI)
- firebase-tools (Firebase deployment — install globally with npm)

For each tool: check if it's already installed first, skip it if so.
For anything you can't install directly, give me the exact steps to do it myself.
Don't sign in to or configure anything yet — just install.
```

> **Note:** Claude will ask permission to run commands — say yes. This may take a few minutes.

<!-- wizard-step: 7 | title: You're Ready! -->

## Step 7: You're Ready!

Your setup is complete:

- ✅ VS Code installed
- ✅ Claude Code connected
- ✅ Project folder ready
- ✅ Developer tools installed

### Quick Reference

| Command | What It Does |
|---------|-------------|
| `claude` | Start Claude in your terminal |
| `shift + tab` | Change modes (planning, accept edits, permissions) |
| `@` | Mention a file in your project |
| `esc` | Interrupt Claude while it's working |
| `esc esc` | Go back in conversation and code history |

Head to the [Group Project](../Group%20Project.md) to start building with the group!

<!-- wizard-end -->
