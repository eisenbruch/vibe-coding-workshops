# Intermediate Setup — Claude Desktop

*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series*

This guide walks you through setting up Claude Desktop for the workshop. Claude Desktop lets the AI read and write files directly on your computer — no copy-pasting code.

> **Free Alternative:** If you don't want a paid plan, use [Google AI Studio](Intermediate%20Setup%20-%20Google%20AI%20Studio.md) instead — it's free and follows a similar workflow.

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Create Your Account -->

## Step 1: Create Your Account

Go to <a href="https://claude.ai/pricing" target="_blank">claude.ai/pricing</a> and sign up for a paid plan (**Pro** recommended for the workshop).

If you already have a Claude account, sign in and make sure you're on a paid plan. The Pro plan gives you access to Claude Desktop's full capabilities including Cowork mode.

<!-- wizard-step: 2 | title: Download Claude Desktop -->

## Step 2: Download Claude Desktop

1. Go to <a href="https://claude.ai/download" target="_blank">claude.ai/download</a>
2. Download the app for your operating system (Mac or Windows)
3. Open the installer and follow the prompts
4. Launch Claude Desktop and sign in with your account

> **Tip:** Claude Desktop is a separate app from the browser version. You need to download it even if you already use claude.ai in your browser.

<!-- wizard-step: 3 | title: Explore the Interface -->

## Step 3: Explore the Interface

Claude Desktop has three modes:

| Mode | What It Does |
|------|-------------|
| **Chat** | Conversation — ask questions, brainstorm ideas, get explanations |
| **Cowork** | Agentic — Claude reads and writes files, organizes your computer |
| **Code** | Full coding agent running on cloud VMs |

For the workshop, we'll primarily use **Cowork mode**. This lets Claude create and edit files directly on your computer. You describe what you want, and Claude builds it — writing real files you can open and run.

You can switch between modes using the toggle at the top of the chat window.

<!-- wizard-step: 4 | title: Set Up Your Project Folder -->

## Step 4: Set Up Your Project Folder

1. Create a new folder on your computer for the workshop project
   - **Mac:** Right-click on your Desktop → New Folder → name it `workshop-project`
   - **Windows:** Right-click on your Desktop → New → Folder → name it `workshop-project`
2. In Claude Desktop, switch to **Cowork mode**
3. Tell Claude about your folder:

   > I'm working in a project folder at [path to your folder]. We'll be building a project together.

   For example: "I'm working in a project folder at ~/Desktop/workshop-project. We'll be building a project together."

Claude will now be able to create and edit files in that folder.

<!-- wizard-step: 5 | title: Install Developer Tools -->

## Step 5: Install Developer Tools

Claude Desktop in Cowork mode can run terminal commands. Copy and paste this prompt to have it check and install everything you'll need:

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

Claude will work through the list and ask for permission to run commands. Say yes. This may take a few minutes.

> **What are these tools for?**
> - **Node.js/npm** — runs JavaScript and installs packages
> - **Git** — tracks changes to your code (like save points in a game)
> - **gh** — pushes your code to GitHub from the terminal
> - **firebase-tools** — deploys your project to the web (we'll set it up later, just installing for now)
>
> **Having trouble?** If Claude can't install something or you're not comfortable with it running commands, don't worry — skip this step. You can install tools later when you need them, and the group project works without any of these.

<!-- wizard-step: 6 | title: You're Ready! -->

## Step 6: You're Ready!

Your setup is complete. You have:

- A Claude Pro account
- Claude Desktop installed
- A project folder ready to go
- Developer tools installed (or ready to install later)

Head to the [Group Project](../Group%20Project.md) to start building with the group!

<!-- wizard-end -->
