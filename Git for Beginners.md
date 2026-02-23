# Git for Beginners
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

A friendly, no-jargon guide to Git — the save point system for your code.

---

## What is Git?

Git is a **save point system** for your code. Every save point (called a "commit") is a snapshot of your entire project at that moment. You can return to any snapshot at any time.

Think of it like an undo history that never goes away — even after you close the file, restart your computer, or make a hundred more changes. Every commit is permanent and labeled with a description of what changed.

You already used Git in the group project. This guide helps you understand what was happening and how to use it on your own.

---

## Do You Need Git Yet?

- **Just experimenting?** Not yet. Focus on building. You can add Git later.
- **Have a working version you like?** Yes. Time to start saving checkpoints so you don't lose your progress.
- **Working on something you'd be sad to lose?** Definitely yes.
- **Collaborating with others?** Essential. Git is how teams work on the same code without overwriting each other.

---

## Let Your AI Handle It

The easiest way to use Git is to let your AI tool manage it. You describe what you want in plain language, and it runs the right commands.

**Common requests:**

- "Initialize a git repository and commit my current files"
- "Commit my changes with the message 'Add dark mode'"
- "Show me what files I've changed since the last commit"
- "Undo my last commit but keep the changes"
- "Create a new branch called 'experiment'"
- "Connect my local repo to this GitHub URL and push: [URL]"

Your AI knows all the Git commands — you just describe what you want. This is a perfectly valid way to use Git, especially when you're starting out.

---

## Visualize with SourceTree

<a href="https://www.sourcetreeapp.com/" target="_blank">SourceTree</a> gives you a visual interface for Git. Instead of memorizing commands, you see your commits as a timeline, changed files highlighted, and exactly what was modified in each file.

### Getting started

1. Download from <a href="https://www.sourcetreeapp.com/" target="_blank">sourcetreeapp.com</a> (free, Mac and Windows).
2. Run the installer. You can skip the Bitbucket account setup if prompted.

### Creating a new repository

1. Open SourceTree → **New** → **Create Local Repository**.
2. Select your project folder as the destination path.
3. Click **Create**.

### Adding an existing repository

If you already initialized Git (or your AI did it for you):
1. Open SourceTree → **New** → **Add Existing Local Repository**.
2. Select your project folder.

### Using SourceTree

- **File Status** tab shows what you've changed since the last commit
- **Stage** files you want to include in your next save point (or click Stage All)
- Type a commit message describing what changed
- Click **Commit** to save the checkpoint
- The **History** tab shows all your commits as a timeline — you can click any one to see exactly what changed

> **Tip:** SourceTree is great for understanding what Git is doing. Even if you use AI for the commands, open SourceTree alongside to see the results visually.

---

## The Basics (If You Want to Know)

You only need 5 commands to use Git effectively:

| Command | What it does | Plain English |
|---------|-------------|---------------|
| `git init` | Create a new repository | "Start tracking this folder" |
| `git add .` | Stage all changes | "Select everything I changed" |
| `git commit -m "message"` | Save a snapshot | "Save this checkpoint" |
| `git push` | Upload to GitHub | "Back up to the cloud" |
| `git status` | See what's changed | "What have I done since last save?" |

### The workflow

1. Make changes to your code
2. `git add .` — stage the changes (select what to save)
3. `git commit -m "Describe what you changed"` — save the checkpoint
4. `git push` — upload to GitHub (once connected)

That's it. Repeat this cycle every time you get something working.

**Example:**
```bash
git add .
git commit -m "Add dark mode toggle"
git push
```

> **Tip:** Commit often. Every time you get a feature working — or even a step in the right direction — commit it. If the next change breaks something, you can revert to the last working state.

---

## Push to GitHub

GitHub is a website that stores your repositories online. It's your backup and how you share your work.

### First time setup

1. Create an account at <a href="https://github.com" target="_blank">github.com</a> if you don't have one.
2. Create a new repository on GitHub (click the **+** icon → **New repository**).
3. Name it to match your project folder. Don't check any of the initialization options.

### Connect and push

GitHub will show you the commands after creating the repo. Copy and paste these into your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

After this initial setup, you only need `git push` to upload future commits.

### Or ask your AI

> "Connect my local repo to this GitHub URL and push: https://github.com/YOUR_USERNAME/YOUR_REPO.git"

---

## Common Questions

### What's a branch?

A separate copy of your code where you can experiment without affecting the main version. Think of it as a parallel universe — you can try things out, and if they work, merge the changes back. If they don't, delete the branch and nothing is lost.

You don't need branches for solo projects, but they're useful when you want to try something risky without risking your working code.

### What if I mess up?

- **Undo all uncommitted changes:** `git checkout .` reverts everything back to the last commit.
- **Undo the last commit (keep changes):** `git reset --soft HEAD~1` removes the commit but keeps your files as they were.
- **Go back to a specific commit:** Ask your AI — "Revert my project to the commit where I added the login page."

The more often you commit, the more save points you have to return to.

### What's .gitignore?

A file that tells Git to ignore certain files — things you don't want tracked or uploaded to GitHub:

- **`.env`** — API keys and secrets (never commit these)
- **`node_modules/`** — installed packages (can be reinstalled with `npm install`)
- **`.DS_Store`** — macOS system files
- **Build folders** — generated files that can be recreated

Your AI can create a `.gitignore` for you: "Create a .gitignore file for my project."

### What's the difference between Git and GitHub?

- **Git** is the tool that tracks changes. It runs on your computer. You can use Git without GitHub.
- **GitHub** is a website that stores your Git repositories online. It's a backup, a sharing platform, and a collaboration tool.

Think of it this way: Git is the camera, GitHub is the photo album in the cloud.

### Do I need to understand everything here?

No. Let your AI handle the Git commands and use SourceTree to visualize what's happening. As you use Git more, the concepts will make sense naturally. The most important thing is to commit your work regularly so you always have save points to return to.
