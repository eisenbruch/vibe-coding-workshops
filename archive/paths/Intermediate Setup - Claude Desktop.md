# Intermediate Setup — Claude Desktop

*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series*

> **Note:** If you don't want a paid plan, use [Google AI Studio](Beginner%20Setup%20-%20Google%20AI%20Studio.md) instead — it's free and follows a similar workflow.

---

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Create Your Account -->

## Step 1: Create Your Account

1. Go to <a href="https://claude.ai/pricing" target="_blank">claude.ai/pricing</a>
2. Sign up for a **Pro** plan (recommended for the workshop)

> **Tip:** Already have a Claude account? Just make sure you're on a paid plan — Pro gives you access to Cowork mode.

<!-- wizard-step: 2 | title: Download Claude Desktop -->

## Step 2: Download Claude Desktop

1. Go to <a href="https://claude.ai/download" target="_blank">claude.ai/download</a>
2. Download for your operating system (Mac or Windows)
3. Run the installer
4. Launch Claude Desktop and sign in

> **Tip:** Claude Desktop is a separate app from the browser version. You need to download it even if you already use claude.ai.

<!-- wizard-step: 3 | title: Explore the Interface -->

## Step 3: Explore the Interface

Claude Desktop has three modes — switch between them using the toggle at the top:

| Mode | What It Does |
|------|-------------|
| **Chat** | Conversation — ask questions, brainstorm, get explanations |
| **Cowork** | Agentic — Claude reads and writes files on your computer |
| **Code** | Full coding agent running on cloud VMs |

> **Tip:** For the workshop, we'll use **Cowork mode**. You describe what you want, Claude builds it — writing real files you can open and run.

<!-- wizard-step: 4 | title: Set Up Your Project Folder -->

## Step 4: Set Up Your Project Folder

1. Create a folder called `workshop-project` on your Desktop
2. In Claude Desktop, switch to **Cowork mode**
3. Tell Claude about your folder:

```
I'm working in a project folder at ~/Desktop/workshop-project. We'll be building a project together.
```

Claude can now create and edit files in that folder.

<!-- wizard-step: 5 | title: Install Developer Tools -->

## Step 5: Install Developer Tools

Paste this prompt into Claude Desktop. It will check and install everything automatically:

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

> **Warning:** Having trouble? Don't worry — skip this step. You can install tools later, and the group project works without them.

<!-- wizard-step: 6 | title: You're Ready! -->

## Step 6: You're Ready!

Your setup is complete:

- ✅ Claude Pro account
- ✅ Claude Desktop installed
- ✅ Project folder ready
- ✅ Developer tools installed (or ready to install later)

Head to the [Group Project](../Group%20Project.md) to start building with the group!

<!-- wizard-end -->
