# Advanced Setup — Gemini CLI

*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series*

This guide sets up a full development environment with VS Code and Gemini. This is a powerful, free setup — Gemini writes code, runs commands, manages files, and builds your project directly.

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Install VS Code -->

## Step 1: Install VS Code

Download and install <a href="https://code.visualstudio.com/download" target="_blank">VS Code</a> for your operating system (Mac or Windows).

VS Code is your code editor — where you'll see and edit your project files while AI works alongside you. It's free and widely used.

1. Download the installer from the link above
2. Run the installer and follow the prompts
3. Launch VS Code once it's installed

> **Tip:** If you already use Cursor or Antigravity, those work too. The steps are nearly identical.

<!-- wizard-step: 2 | title: Sign Up for Google -->

## Step 2: Sign Up for Google

Go to <a href="https://gemini.google.com" target="_blank">gemini.google.com</a> and sign in with your Google account.

Gemini CLI is free to use. If you don't have a Google account, create one at <a href="https://accounts.google.com" target="_blank">accounts.google.com</a>.

<!-- wizard-step: 3 | title: Install Gemini Code Assist -->

## Step 3: Install Gemini Code Assist

You have two options. Both connect to the same AI — pick whichever feels more comfortable.

### Option A: VS Code Extension (recommended to start)

1. Install the <a href="https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist" target="_blank">Gemini Code Assist extension</a> from the VS Code marketplace
2. Click the Gemini icon in the sidebar to open the chat panel
3. Sign in when prompted

### Option B: CLI Tool (for terminal users)

1. Follow the installation guide at <a href="https://codeassist.google" target="_blank">codeassist.google</a>
2. Open a terminal in VS Code (`` Ctrl+` `` or View → Terminal)
3. Type `gemini` to start

Both options give you the same capabilities. The extension puts Gemini in a side panel; the CLI puts it in your terminal.

<!-- wizard-step: 4 | title: Create Your Project Folder -->

## Step 4: Create Your Project Folder

1. Create a new folder for the workshop project (e.g., `workshop-project` on your Desktop)
2. In VS Code, go to **File → Open Folder** and select it
3. Open Gemini (extension panel or terminal)

You should now see your empty project folder in VS Code's file explorer on the left, and Gemini ready to go in the panel or terminal.

<!-- wizard-step: 5 | title: Quick Terminal Intro -->

## Step 5: Quick Terminal Intro

The terminal is where you run commands. In VS Code, open it with `` Ctrl+` `` (backtick) or **View → Terminal**.

You'll see a command prompt — a text line waiting for input. This is where tools get installed, servers get started, and files get managed.

The key thing to know: **you don't need to memorize commands.** Your AI can run commands for you. Just describe what you need:

> "Start a local server so I can preview my project"

> "Install the dependencies for this project"

The terminal will make more sense as you use it. For now, just know where it is.

<!-- wizard-step: 6 | title: Install Developer Tools -->

## Step 6: Install Developer Tools

Copy and paste this prompt into Gemini. It will check what's already installed and handle everything it can automatically:

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

Gemini will detect your operating system and work through the list. **Let it run** — it may take a few minutes and will ask for permission to run commands. Say yes.

When it's done, you should see version numbers for each tool. If Gemini couldn't install something (common on Windows where some tools need manual installers), follow its instructions.

> **What are these tools for?**
> - **Node.js/npm** — runs JavaScript and installs packages
> - **Git** — tracks changes to your code (like save points in a game)
> - **gh** — pushes your code to GitHub from the terminal
> - **firebase-tools** — deploys your project to the web (we'll set it up later, just installing for now)

<!-- wizard-step: 7 | title: You're Ready! -->

## Step 7: You're Ready!

Your development environment is set up. You have:

- VS Code as your editor
- Gemini as your AI coding partner
- Node.js and Git for building and tracking your project

> **Tip:** Gemini is extremely fast at generating code. It's free and excellent for rapid prototyping, writing, and converting designs to code. Don't hesitate to ask for big changes — regenerating is quick.

Head to the [Group Project](../Group%20Project.md) to start building with the group!

<!-- wizard-end -->
