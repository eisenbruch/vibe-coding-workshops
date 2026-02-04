# Building Your Project
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This guide covers setting up your development environment, starting a new project, tracking changes with Git, sharing on GitHub, choosing what to build, and the build cycle for working with AI.

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

#### Firebase CLI (Needed for [Firebase & Deployment](4%20-%20Firebase%20&%20Deployment.md))

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

> **Now use your AI to create the initial version of your project!** See [Vibe Coding Fundamentals](2%20-%20Vibe%20Coding%20Fundamentals.md) for core approaches, good vs bad prompts, and essential techniques.

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

## 4. Protecting API Keys & Secrets (If the site or code is PUBLIC)

When you add features like AI chatbots, payment processing, or third-party APIs to your project, you'll receive **API keys** — secret strings that authenticate your app with those services. If these keys end up on GitHub or in your frontend code, anyone can find and abuse them and run up your bill or worse.

> **Bots actively scan GitHub for exposed API keys.** A leaked OpenAI or Stripe key can be found and exploited within minutes.

### The Core Rule

**Never hardcode API keys directly in your source code.** Instead, use one of these approaches:

- **`.env` files** — store keys in a local file that Git ignores
- **Platform environment variables** — set keys in your hosting provider's dashboard
- **Backend proxy** — route API calls through a server so keys never reach the browser

```javascript
// ❌ BAD — key is visible in your code and on GitHub
const apiKey = "sk-abc123...";

// ✅ GOOD — key is loaded from the environment
const apiKey = process.env.OPENAI_API_KEY;
```

### Secure Your Project with AI

You don't need to know how to secure your keys on your own — your AI assistant can analyze your project and handle it for you. Give it context about what you're building and where it's going:

**Prompt:**
> "Review my codebase for any exposed API keys or secrets. I'm using [list your services, e.g., OpenAI, Stripe, Firebase] and plan to deploy on [hosting platform, e.g., Firebase Hosting, Vercel, Netlify]. Set up my project so that all API keys are stored securely — create a .env file, update .gitignore, deploy y keys to my hosting platform environent, and let me know if any of my keys need a backend proxy to stay safe in production."

The AI will:
1. Scan your files for any hardcoded keys or secrets.
2. Create a `.env` file and move your keys into it.
3. Add `.env` to `.gitignore`.
4. Tell you if your setup needs a backend proxy (based on whether your keys are used in frontend code and where you're hosting).
5. Walk you through setting environment variables on your hosting platform.

> **Tip:** Run this prompt before your first push to GitHub, and again whenever you add a new API or service to your project.

### Option 1: `.env` Files + `.gitignore` (Most Common)

The standard approach for local development. You store keys in a special file that Git is told to ignore.

1. Create a file called `.env` in your project root:
   ```
   OPENAI_API_KEY=sk-abc123your-key-here
   STRIPE_SECRET_KEY=sk_test_abc123
   ```

2. Add `.env` to your `.gitignore` file so it's never committed:
   ```
   # .gitignore
   .env
   .env.local
   ```

3. Access the values in your code:
   ```javascript
   // Node.js — install dotenv first: npm install dotenv
   require('dotenv').config();
   const key = process.env.OPENAI_API_KEY;
   ```

> **Ask Your AI:** *"Help me set up a .env file for my API keys and make sure it's in .gitignore."*

**Best for:** Local development, Node.js/server-side projects.

### Option 2: Hosting Platform Environment Variables (Deployment)

When you deploy your app, you can't upload a `.env` file to the server. Instead, set environment variables directly in your hosting platform's dashboard:

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables
- **Firebase:** Use `firebase functions:secrets:set KEY_NAME` (see [Firebase & Deployment](4%20-%20Firebase%20&%20Deployment.md))
- **Render / Railway:** Dashboard → Environment section

Your deployed code reads these the same way (`process.env.KEY_NAME`), but the values live safely on the server — never in your code or Git history.

> **Ask Your AI:** *"How do I set environment variables on [your hosting platform]?"*

**Best for:** Deployed server-side apps, serverless functions.

### Option 3: Backend Proxy (Frontend Apps Calling Paid APIs)

This is a critical concept: **anything in your frontend JavaScript is visible to users.** If you put an API key in a React, Vue, or plain HTML/JS app, anyone can open the browser's developer tools and find it — even if you used a `.env` file during development. Build tools like Vite and React bundle those values into the final JavaScript files that get sent to the browser.

If your frontend app needs to call a paid API (like OpenAI), you need a **backend layer** that keeps the key on the server:

```
User's Browser  →  Your Backend (has the secret key)  →  OpenAI API
```

Options for this backend layer:
- **Firebase Cloud Functions** — pairs well with Firebase hosting
- **Vercel / Netlify Serverless Functions** — built into these platforms
- **A simple Express.js server** — if you're running your own backend

> **Ask Your AI:** *"I need to call the OpenAI API from my frontend app without exposing my API key. Help me set up a serverless function to proxy the request."*

**Best for:** Any app where the browser needs to interact with a paid or private API.

### Which Option Do I Need?

| Scenario | What to Use |
|----------|-------------|
| Local development with Node.js | `.env` + `.gitignore` |
| Deployed server-side app | Platform environment variables |
| Frontend app calling a paid API (OpenAI, etc.) | Backend proxy + platform env vars |
| Firebase project with sensitive config | Firebase secrets (see [Firebase & Deployment](4%20-%20Firebase%20&%20Deployment.md)) |

### What About Firebase Config?

Firebase web config values (`apiKey`, `projectId`, etc.) are **designed to be public**. They identify your project but don't grant access to data on their own — security comes from [Firebase Security Rules](4%20-%20Firebase%20&%20Deployment.md), not from hiding the config. This is an exception; most other API keys should be kept secret.

### Quick Safety Checklist

Before pushing to GitHub, verify:
- ✅ `.env` is listed in `.gitignore`
- ✅ No API keys are hardcoded in source files
- ✅ Secret keys for paid APIs are routed through a backend (not exposed in frontend JS)
- ✅ API keys are restricted by domain or scope where possible (check your provider's dashboard)

> **Recovery:** If you accidentally push a key to GitHub, **revoke it immediately** from the provider's dashboard and generate a new one. Deleting the file or commit is not enough — the key is already in your Git history and can be found.

---

## 5. Push to GitHub

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

## Choosing a Project

Pick something that excites you. *Customize these to your liking. [Extended prompts with full details available here.](Project%20Idea%20Prompts%20-%20Extended.md)*

### Simple Projects

1. **To-Do List**
```
Create a to-do list app with add/edit/delete tasks, checkboxes, filter by all/active/completed, and localStorage persistence. Clean minimal design.
```

2. **Habit Tracker**
```
Build a habit tracker: add custom habits, mark complete daily, 7-day streak calendar, current streak display. Green checkmarks, motivating design.
```

3. **Calculator**
```
Create a calculator with basic operations, clear/backspace, keyboard support. Style like iOS calculator or retro aesthetic with button animations.
```

4. **Guessing Game**
```
Build a guessing game: random number 1-100, higher/lower hints, track attempts, play again option. Add difficulty selector and emoji reactions.
```

---

### Medium Projects

1. **Weather App** *(API: OpenWeatherMap)*
```
Build a weather app: city search, 5-day forecast, weather icons, humidity, wind, "feels like". Geolocation support. Weather-appropriate background gradients.
```

2. **Portfolio Site** *(API: EmailJS)*
```
Build a portfolio: animated hero, project showcase with category filters, skills section, contact form (EmailJS), dark/light toggle. React + Tailwind.
```

3. **Pomodoro Timer**
```
Build a pomodoro timer: 25-min work / 5-min break sessions, customizable durations, audio notifications, session counter, pause/resume/reset. Minimalist design.
```

4. **Recipe Finder** *(API: Spoonacular)*
```
Build a recipe app: search by ingredient/dish, filter by dietary restrictions, show ingredients + instructions + cook time, save favorites, random recipe button.
```

---

### Complex Projects

1. **Real-Time Chat**
```
Build a real-time chat app: user auth, multiple channels, online/offline status, typing indicators, message history, read receipts, emoji reactions, file uploads. WebSocket-based.
```

2. **Restaurant Reservations**
```
Build a reservation system: browse restaurants with photos/menus, search/filter, interactive availability calendar, booking with party size + special requests, email confirmation, admin panel for owners.
```

3. **Data Dashboard**
```
Build an analytics dashboard: line/bar/pie charts + heatmaps, interactive filtering, date range selectors, CSV/JSON upload, drag-drop widget layout, user roles (viewer/editor/admin), PDF export.
```

4. **Shift Scheduler**
```
Build a shift scheduler: employee profiles with qualifications + availability, auto-generate fair schedules, drag-drop adjustments, conflict warnings, fairness dashboard, PDF/CSV export.
```

---

### Bonus Challenge

**Open Source Contribution** - Find a GitHub project you use, pick an issue or improvement, and submit a PR. Great for learning real codebases and professional workflows.

**Find projects:** <a href="https://github.com/explore" target="_blank">GitHub Explore</a>, <a href="https://www.firsttimersonly.com/" target="_blank">First Timers Only</a>, <a href="https://goodfirstissue.dev/" target="_blank">Good First Issue</a>, <a href="https://up-for-grabs.net/" target="_blank">Up For Grabs</a>

---

## The Build Cycle

Building with AI follows a repeating loop. Don't try to build everything at once — work in small increments and verify as you go.

```
┌───────────────────────────────────────────────────────────────┐
│                       THE BUILD CYCLE                         │
│                                                               │
│              ┌──────────┐                                     │
│         ┌───▶│  PROMPT  │  Describe what you want to build,   │
│         │    │          │  fix, or change next.               │
│         │    └────┬─────┘                                     │
│         │         │                                           │
│         │         ▼                                           │
│         │    ┌──────────┐                                     │
│         │    │   TEST   │  Run it. Does it work?              │
│         │    │          │  Does it look right?                │
│         │    └────┬─────┘                                     │
│         │         │                                           │
│         │     No? │  Yes?                                     │
│         │     │   │                                           │
│         │     ▼   ▼                                           │
│         │  ┌──────────┐  ┌──────────┐                         │
│         │  │   FIX    │  │  COMMIT  │  Save your progress.    │
│         │  │          │  │          │                         │
│         │  └────┬─────┘  └────┬─────┘                         │
│         │       │             │                               │
│         │       │       Ready to go live?                     │
│         │       │        Yes? │ No?                           │
│         │       │         ▼   │                               │
│         │       │  ┌──────────┐│                               │
│         │       │  │  DEPLOY  ││  Push to GitHub / Firebase.  │
│         │       │  └────┬─────┘│                               │
│         │       │       │      │                               │
│         └───────┴───────┴──────┘                               │
│                 Next feature                                  │
│                                                               │
│   The inner loop (Prompt → Test → Fix) is where you spend    │
│   most of your time. Commit every time something works.       │
└───────────────────────────────────────────────────────────────┘
```

**The steps:**

1.  **Prompt:** Describe what you want to build in as much detail as you can. See [Good Prompts vs Bad Prompts](2%20-%20Vibe%20Coding%20Fundamentals.md#good-prompts-vs-bad-prompts) for guidance.
2.  **Test:** Open the project in your browser or run it locally (see [Running Your Project](#2-running-your-project)). Does it work? Does it look right? Note what's wrong or missing.
3.  **Fix:** Tell the AI what to fix, change, or add next. Be specific — reference what you see on screen, paste error messages, describe the exact behavior you want. Repeat Prompt → Test → Fix until it works.
4.  **Commit:** Every time you get something working, commit it with Git. This creates a save point you can return to if the next change breaks something.
5.  **Deploy:** When you're ready to update your live app, push to GitHub and/or deploy to your hosting platform (see [Firebase & Deployment](4%20-%20Firebase%20&%20Deployment.md)).
6.  **Repeat:** Go back to Prompt and start the next feature. Keep building — commit after every working milestone.

> **The golden rule:** If it works, commit it. If it breaks, revert and try a different approach.

> **Tip:** Commit often! Every time you get a feature working, or even a step in the right direction, commit it. If the AI breaks your code in the next step, you (or your AI) can easily revert to the working state.

---

## Submitting Your Workshop Project

<table>
<tr>
<td width="70%" valign="top">

**Share your work! The workshop repo is a living archive of our projects.**

Choose the method that matches your comfort level. Your AI assistant can help!

**Beginner:** Zip your project → Email to noaheisenbruch@gmail.com

**Intermediate:** Upload to your GitHub → Email the repo link

**Advanced:** Fork the repo → Add your project → Submit a Pull Request

Full instructions: **<a href="https://eisenbruch.github.io/vibe-coding-workshops/#share-your-work" target="_blank">eisenbruch.github.io/vibe-coding-workshops</a>**

</td>
<td width="30%" valign="top">
<img src="images/github-site-qr.png" alt="GitHub QR Code" width="128">
</td>
</tr>
</table>
