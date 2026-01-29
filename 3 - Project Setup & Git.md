# Project Setup & Git
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This guide covers the fundamental workflow for starting a new vibe coding project, tracking changes with Git, and sharing it on GitHub.

---

## 0. Tool Installation

Before you start building, make sure you have the following tools installed.

### Step 1: Install Your Code Editor

1. Download and install [**VS Code**](https://code.visualstudio.com/download) (recommended).
2. Feel free to use any IDE you are comfortable with (Cursor, Antigravity, etc.).

### Step 2: Choose & Set Up Your AI Assistant

#### Option A: Claude Code (Recommended, Paid)

1. Sign up for a paid plan (Pro or Max) at [claude.ai/pricing](https://www.claude.com/pricing).
2. Install the [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code).
3. Intermediate-advanced users: install the [Claude Code CLI Tool](https://code.claude.com/docs/en/setup#native-install-recommended).

#### Option B: Google Gemini CLI (Free)

1. Sign up for a free account at [gemini.google.com](https://gemini.google.com/).
2. Install the [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist).
3. Intermediate-advanced users: install the [Gemini CLI Tool](https://codeassist.google/).

> While Claude Code is the best vibe coding experience overall, Google's free option is more than enough to build great things. Feel free to use any coding agent not mentioned above, such as GitHub Copilot or ChatGPT Codex.

### Step 3: Open Your AI Assistant in VS Code

After installing your AI extension, here's how to find and start it:

**VS Code Extensions (Claude Code / Gemini):**
1. Click the extension's **icon** in the **Editor Toolbar** (top-right corner of the editor).
2. A chat panel will open in VS Code. Sign in with your account when prompted.
3. You can also use the **Command Palette** (`Cmd+Shift+P` / `Ctrl+Shift+P`) and search for "Claude" or "Gemini".

**Opening a CLI Tool in VS Code's Terminal:**
1. Open a terminal by right-clicking the **Editor Toolbar** and selecting **New Terminal**.
2. Type `claude` (for Claude Code) or `gemini` (for Gemini CLI) and press Enter.

> **Tip:** The VS Code extension and CLI tool are two different interfaces to the same AI. The extension gives you a chat panel inside VS Code, while the CLI runs in the terminal. Use whichever feels more comfortable — they have the similar capabilities.

#### Claude Code CLI Quick Reference

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

> **Tip:** Store important instructions in CLAUDE.md to prevent AI from doing unwanted things (overwriting data, unnecessary builds, etc.). CLAUDE.md files exist for your user and each individual project folder where you use Claude Code. Use this to your advantage - global knowledge vs project specific knowledge.

### Step 4: Install SourceTree (Visual Git Client)

 SourceTree gives you a visual interface for Git, so you can see your commits, branches, and changes without using the command line. This can be done in your IDE as well, but SourceTree has a better UI.

1. Download from [sourcetreeapp.com](https://www.sourcetreeapp.com/).
2. Run the installer.
3. *You can skip the Bitbucket account setup if prompted.*

### Step 5: Install Command Line Tools

These tools are used by your AI assistant and for running projects.

> **Ask Your AI:** Once you have your code editor and AI assistant set up, you can ask your AI to install the rest:
> *"Help me install Homebrew, git, Node.js, the GitHub CLI, and Firebase CLI on my computer."*
>
> It will detect your operating system and walk you through each step. The manual instructions below are here if you prefer to do it yourself.

#### Homebrew (Mac Only)

Homebrew is a package manager that makes installing developer tools easy on Mac.

1. Open the **Terminal** app.
2. Paste the following command and press Enter:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Follow the on-screen instructions.
4. When it finishes, close and reopen your terminal.

#### Git

Git is the version control system that tracks changes to your code.

- **Mac:** Open Terminal and run `brew install git`
- **Windows:** Download the installer from [git-scm.com](https://git-scm.com/download/win), run it, and accept the default settings.
- **Verify:** Run `git --version` in your terminal.

#### Node.js & npm

Node.js is a JavaScript runtime, and npm is its package manager. Most modern web projects require these.

- **Mac:** Open Terminal and run `brew install node`
- **Windows:** Download the installer from [nodejs.org](https://nodejs.org/) (choose the **LTS** version), run it, and accept the default settings.
- **Verify:** Run `node --version && npm --version` in your terminal.

#### GitHub CLI (`gh`)

> **`git` vs `gh` — What's the difference?**
> - **`git`** is the core version control tool. It handles commits, branches, and syncing code. It works with any Git hosting service.
> - **`gh`** is GitHub's command-line tool. It handles GitHub-specific tasks like creating repositories and managing pull requests from your terminal.
>
> Think of it this way: `git` manages your *code history*, `gh` manages your *GitHub account*.

- **Mac:** Open Terminal and run `brew install gh`
- **Windows:** Download the installer from [cli.github.com](https://cli.github.com/), run it, and accept the default settings.

Then log in to your GitHub account:

1. Run `gh auth login` in your terminal.
2. Follow the prompts and choose **"Login with a web browser"**.

#### Firebase CLI (Needed for [Firebase & Deployment](5%20-%20Firebase%20&%20Deployment.md))

1. Open your terminal and run:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in by running:
   ```bash
   firebase login
   ```
3. A browser window will open — sign in with your Google account.

---

## 1. Project Setup

### Create a Project Folder
1.  Create a new folder on your computer where you want your project to live.
2.  Name it something relevant (e.g., `timer-app`). Avoid spaces; use hyphens or underscores.

### Open in VS Code
1.  Open **VS Code**.
2.  Go to **File > Open Folder...** (or `Cmd+O` / `Ctrl+O`).
3.  Select the folder you just created.
4.  Open your AI extension or command line tool.
5.  *Optional:* Open the integrated terminal (`Ctrl+` ` or View > Terminal`).

> **Now use your AI to create the initial version of your project!** See [Vibe Coding Fundamentals](1%20-%20Vibe%20Coding%20Fundamentals.md) for core approaches and good vs bad prompts, and [Building Your Project](4%20-%20Building%20Your%20Project.md) for techniques and the build cycle.

---

## 2. Running Your Project

To see your project in the browser, you need to run a local server.

### Option 1: Ask Your AI (Easiest)
Simply ask:
> "How do I run this project?"
> "Start a local server for me."

The AI will look at your files and choose the best method (e.g., Python simple server, `npm run dev`, etc.).

### Option 2: VS Code Live Server
1.  Install the **Live Server** extension in VS Code.
2.  Right-click your `index.html` file.
3.  Select **Open with Live Server**.

### Option 3: Command Line
*   **Static Sites (HTML/CSS):** Run `python3 -m http.server`
*   **Node/React/Vite Projects:** Run `npm run dev` or `npm start`

---

## 3. Initialize Git (Version Control)

A Git repo acts as a "save point" system for your code. It allows you to track changes and revert if something breaks.

### Option 1: Using SourceTree (Visual App)
*Recommended for visual learners*

1.  Open **SourceTree**.
2.  Click **New...** (or **File > New/Clone**).
3.  Select **Create Local Repository**.
4.  **Destination Path:** Click the `...` button and select your project folder.
5.  Click **Create**.
6.  *Note:* You won't see changes in history yet. SourceTree will show your files under "Unstaged files". You need to stage and commit them.

7.  **Stage Files:** In the "File Status" view, select the files you want to save (or click **Stage All**). They will move to the "Staged files" section.
8.  **Commit:** Type a description of your changes in the box at the bottom (e.g., "Initial commit").
9.  Click the **Commit** button. Your files are now safely saved in Git!

### Option 2: Ask Your AI (Command Line)
*Fastest method if you have tools installed*

**Prerequisite:** You must have `git` installed (see [Step 0: Tool Installation](#0-tool-installation) above).

**Prompt:**
> "Initialize a git repository in this folder and create an initial commit with my current files."

**What happens:**
The AI will run `git init`, `git add .`, and `git commit -m "Initial commit"` in your terminal.


---

## 4. Push to GitHub

GitHub is where your code lives online. It serves as a backup and a way to share your work.

**If you don't have a GitHub account yet,** sign up for free at [github.com](https://github.com).

### Create a GitHub Repository
1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  **Repository name:** Match your folder name (e.g., `my-first-vibe-app`).
4.  **Public/Private:** Choose Public or Private.
5.  **Do not** check "Add a README", ".gitignore", or "license" (since you already have a local project).
6.  Click **Create repository**.

### Connect Local Project to GitHub
GitHub will show you setup commands. Look for **"…or push an existing repository from the command line"**.

Copy the commands shown, which look like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

You can paste them into your VS Code terminal and hit Enter.

### Using SourceTree
If you prefer a visual interface outside VS Code:
1.  Click **Repository > Add Remote** in the toolbar to add your GitHub URL (from the step above).
2.  Click **Push** to send your commits to GitHub.

### Using Your AI
**Prompt:**
> "I have created a GitHub repository at [YOUR_GITHUB_URL]. Please connect my local repo to it and push the code."

**What happens:**
The AI will run the necessary `git remote add` and `git push` commands for you.

---

## 5. Typical Workflow

1.  **Code:** Make changes to your files using AI.
2.  **Test:** Check your work in the browser or run the app.
3.  **Commit:** Save a snapshot with a descriptive message (e.g., "Added navbar", "Fixed styling bug").
4.  **Push:** Sync to GitHub to backup, deploy (for a GitHub hosted site), or share work with others
5.  **Repeat:** Keep building — commit after every working milestone.

> **Tip:** Commit often! Every time you get a feature working, or even a step in the right direction, commit it. If the AI breaks your code in the next step, you (or your AI) can easily revert to the working state.

