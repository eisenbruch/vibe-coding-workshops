# Advanced Setup — Gemini CLI

*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series*

---

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Install VS Code -->

## Step 1: Install VS Code

1. Download <a href="https://code.visualstudio.com/download" target="_blank">VS Code</a> for your operating system
2. Run the installer
3. Launch VS Code

> **Tip:** Already use Cursor or Antigravity? Those work too — the steps are nearly identical.

<!-- wizard-step: 2 | title: Sign Up for Google -->

## Step 2: Sign Up for Google

1. Go to <a href="https://gemini.google.com" target="_blank">gemini.google.com</a>
2. Sign in with your Google account

> **Tip:** Gemini CLI is completely free. No Google account? Create one at <a href="https://accounts.google.com" target="_blank">accounts.google.com</a>.

<!-- wizard-step: 3 | title: Install Gemini Code Assist -->

## Step 3: Install Gemini Code Assist

Pick whichever feels more comfortable — both connect to the same AI:

### Option A: CLI Tool (recommended)

1. Follow the installation guide at <a href="https://codeassist.google" target="_blank">codeassist.google</a>
2. Open a terminal in VS Code (`` Ctrl+` ``)
3. Type `gemini` to start

### Option B: VS Code Extension

1. Install the <a href="https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist" target="_blank">Gemini Code Assist extension</a> from the marketplace
2. Click the Gemini icon in the sidebar
3. Sign in when prompted

> **Warning:** The Gemini extension currently has a buggy UI and workflow. We recommend using the CLI version or Antigravity instead.

<!-- wizard-step: 4 | title: Create Your Project Folder -->

## Step 4: Create Your Project Folder

1. Create a folder called `workshop-project` on your Desktop
2. In VS Code: **File → Open Folder** → select it
3. Open Gemini (extension panel or terminal)

You should see your empty folder in VS Code's file explorer and Gemini ready to go.

<!-- wizard-step: 5 | title: Quick Terminal Intro -->

## Step 5: Quick Terminal Intro

Open the terminal in VS Code with `` Ctrl+` `` or **View → Terminal**.

The key thing to know: **you don't need to memorize commands.** Your AI runs commands for you. Just describe what you need:

> **Tip:** Try saying: "Start a local server so I can preview my project" — Gemini will handle the rest.

<!-- wizard-step: 6 | title: Install Developer Tools -->

## Step 6: Install Developer Tools

Paste this prompt into Gemini:

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

> **Note:** Gemini will ask permission to run commands — say yes. This may take a few minutes.

<!-- wizard-step: 7 | title: You're Ready! -->

## Step 7: You're Ready!

Your setup is complete:

- ✅ VS Code installed
- ✅ Gemini connected
- ✅ Project folder ready
- ✅ Developer tools installed

> **Tip:** Gemini is extremely fast at generating code and completely free. Don't hesitate to ask for big changes — regenerating is quick.

Head to the [Group Project](../Group%20Project.md) to start building with the group!

<!-- wizard-end -->
