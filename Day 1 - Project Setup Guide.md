# Day 1: Project Setup, Git, and Github Guide

This guide covers the fundamental workflow for starting a new vibe coding project, tracking changes with Git, and sharing it on GitHub.

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
   
**Now use your AI to create the inital version of your project.**

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

**Prerequisite:** You must have `git` installed on your computer.
*   **Mac:** Run `brew install git` in terminal (Requires [Homebrew](https://brew.sh/) (https://brew.sh/).
*   **Windows:** Download and install [Git for Windows](https://git-scm.com/download/win) (https://git-scm.com/download/win).

**Prompt:**
> "Initialize a git repository in this folder and create an initial commit with my current files."

**What happens:**
The AI will run `git init`, `git add .`, and `git commit -m "Initial commit"` in your terminal.


---

## 4. Push to GitHub

GitHub is where your code lives online. It serves as a backup and a way to share your work.

### Create a GitHub Repository
1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  **Repository name:** Match your folder name (e.g., `my-first-vibe-app`).
4.  **Public/Private:** Choose Public (easiest for hosting) or Private.
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
2.  **Stage:** Add files to the "Staging Area" (via VS Code Source Control `+` button).
3.  **Commit:** Save the snapshot with a message describing what changed (e.g., "Added navbar", "Fixed styling bug").
4.  **Push:** Sync changes to GitHub (`Sync Changes` button in VS Code).

> **💡 Tip:** Commit often! Every time you get a feature working, or even a step in the right direction, commit it. If the AI breaks your code in the next step, you (or your AI) can easily revert to the working state.
