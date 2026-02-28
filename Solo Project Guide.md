# Solo Project Guide
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

Everything you need to build, run, and share your own project after the group exercise.

---

## Choosing a Project

Pick something that excites you. The best projects are ones you'd actually use or want to show someone. Customize any of these ideas to your liking — they're starting points, not prescriptions.

### Simple Projects

**1. To-Do List**
```
Create a to-do list app with add/edit/delete tasks, checkboxes, filter by all/active/completed, and localStorage persistence. Clean minimal design.
```

**2. Habit Tracker**
```
Build a habit tracker: add custom habits, mark complete daily, 7-day streak calendar, current streak display. Green checkmarks, motivating design.
```

**3. Calculator**
```
Create a calculator with basic operations, clear/backspace, keyboard support. Style like iOS calculator or retro aesthetic with button animations.
```

**4. Guessing Game**
```
Build a guessing game: random number 1-100, higher/lower hints, track attempts, play again option. Add difficulty selector and emoji reactions.
```

### Medium Projects

**1. Weather App** *(API: <a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap</a>)*
```
Build a weather app: city search, 5-day forecast, weather icons, humidity, wind, "feels like". Geolocation support. Weather-appropriate background gradients.
```

**2. Portfolio Site** *(API: <a href="https://www.emailjs.com/" target="_blank">EmailJS</a>)*
```
Build a portfolio: animated hero, project showcase with category filters, skills section, contact form (EmailJS), dark/light toggle. React + Tailwind.
```

**3. Pomodoro Timer**
```
Build a pomodoro timer: 25-min work / 5-min break sessions, customizable durations, audio notifications, session counter, pause/resume/reset. Minimalist design.
```

**4. Recipe Finder** *(API: <a href="https://spoonacular.com/food-api" target="_blank">Spoonacular</a>)*
```
Build a recipe app: search by ingredient/dish, filter by dietary restrictions, show ingredients + instructions + cook time, save favorites, random recipe button.
```

### Complex Projects

**1. Real-Time Chat**
```
Build a real-time chat app: user auth, multiple channels, online/offline status, typing indicators, message history, read receipts, emoji reactions, file uploads. WebSocket-based.
```

**2. Restaurant Reservations**
```
Build a reservation system: browse restaurants with photos/menus, search/filter, interactive availability calendar, booking with party size + special requests, email confirmation, admin panel for owners.
```

**3. Data Dashboard**
```
Build an analytics dashboard: line/bar/pie charts + heatmaps, interactive filtering, date range selectors, CSV/JSON upload, drag-drop widget layout, user roles (viewer/editor/admin), PDF export.
```

**4. Shift Scheduler**
```
Build a shift scheduler: employee profiles with qualifications + availability, auto-generate fair schedules, drag-drop adjustments, conflict warnings, fairness dashboard, PDF/CSV export.
```

### Bonus Challenge

**Open Source Contribution** — Find a GitHub project you use, pick an issue or improvement, and submit a PR. Great for learning real codebases and professional workflows.

**Find projects:** <a href="https://github.com/explore" target="_blank">GitHub Explore</a> | <a href="https://www.firsttimersonly.com/" target="_blank">First Timers Only</a> | <a href="https://goodfirstissue.dev/" target="_blank">Good First Issue</a> | <a href="https://up-for-grabs.net/" target="_blank">Up For Grabs</a>

For full detailed prompts with feature lists, design guidance, and technical requirements, see [Project Idea Prompts - Extended](Project%20Idea%20Prompts%20-%20Extended.md).

---

## Project Setup

### Create a Project Folder

1. Create a new folder on your computer for your project.
2. Name it something relevant (e.g., `habit-tracker`). Use hyphens instead of spaces.

### Open in VS Code

1. Open **VS Code**.
2. Go to **File > Open Folder** (or `Cmd+O` / `Ctrl+O`).
3. Select the folder you just created.
4. Open your AI extension or command line tool.

### Start Building

Give the AI your first prompt. Describe what you want — see [Vibe Coding Techniques](Vibe%20Coding%20Techniques.md) for how to write effective prompts and manage the conversation.

---

## Running Your Project

### Option 1: Ask Your AI (Easiest)

Simply ask:
> "How do I run this project?"

The AI will look at your files and choose the best method automatically.

### Option 2: VS Code Live Server

1. Install the **Live Server** extension in VS Code.
2. Right-click your `index.html` file.
3. Select **Open with Live Server**.

### Option 3: Command Line

- **Static Sites (HTML/CSS/JS):** `python3 -m http.server` then open `http://localhost:8000`
- **Node / React / Vite Projects:** `npm run dev` or `npm start`

---

## The Build Cycle

Building with AI follows a repeating loop. Don't try to build everything at once — work in small increments and verify as you go.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                               THE BUILD CYCLE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│        INNER LOOP (Repeat)                  NEXT STEPS (When Ready)         │
│                                                                             │
│        PROMPT                                                               │
│       ▲      \             Success           ┌────────┐      ┌────────┐     │
│      /        ▼           ─────────▶         │ COMMIT │─────▶│ DEPLOY │     │
│    FIX  ◀────── TEST                         └────────┘      └────────┘     │
│                                                                             │
│   • Describe what      • Run and check       • Create a      • Go live!     │
│     you want next        for errors            save point      Share it     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**The steps:**

1. **Prompt:** Describe what you want to build or change. Be specific — include details about layout, behavior, and structure. See [Good Prompts vs Bad Prompts](Vibe%20Coding%20Techniques.md#good-prompts-vs-bad-prompts) for guidance.
2. **Test:** Open the project in your browser or run it locally. Does it work? Does it look right? Note what's wrong or missing.
3. **Fix:** Tell the AI what to fix, change, or add. Be specific — reference what you see on screen, paste error messages, describe the exact behavior you want. Repeat Prompt → Test → Fix until it works.
4. **Commit:** Every time you get something working, commit it with Git. This creates a save point you can return to if the next change breaks something. See [Git for Beginners](Git%20for%20Beginners.md) for how.
5. **Deploy:** When you're ready to go live, push to GitHub and deploy to your hosting platform. See [Firebase & Deployment](Firebase%20%26%20Deployment.md) or [Vercel & Supabase](Vercel%20%26%20Supabase.md).
6. **Repeat:** Go back to Prompt and start the next feature.

> **The golden rule:** If it works, commit it. If it breaks, revert and try a different approach.

---

## Protecting API Keys & Secrets

When you add features like AI chatbots, payment processing, or third-party APIs, you'll receive **API keys** — secret strings that authenticate your app with those services. If these keys end up on GitHub or in your frontend code, anyone can find and abuse them.

> Bots actively scan GitHub for exposed API keys. A leaked Gemini or Stripe key can be found and exploited within minutes.

### The Core Rule

**Never hardcode API keys directly in your source code.** Instead, use one of these approaches:

- **`.env` files** — store keys in a local file that Git ignores
- **Platform environment variables** — set keys in your hosting provider's dashboard
- **Backend proxy** — route API calls through a server so keys never reach the browser

```javascript
// ❌ BAD — key is visible in your code and on GitHub
const apiKey = "sk-abc123...";

// ✅ GOOD — key is loaded from the environment
const apiKey = process.env.GEMINI_API_KEY;
```

### Secure Your Project with AI

You don't need to know how to secure your keys on your own — your AI assistant can handle it. Give it context about what you're building:

**Prompt:**
> "Review my codebase for any exposed API keys or secrets. I'm using [list your services, e.g., Gemini, Stripe, Firebase] and plan to deploy on [hosting platform, e.g., Firebase Hosting, Vercel, Netlify]. Set up my project so that all API keys are stored securely — create a .env file, update .gitignore, and let me know if any of my keys need a backend proxy to stay safe in production."

The AI will:
1. Scan your files for hardcoded keys or secrets
2. Create a `.env` file and move your keys into it
3. Add `.env` to `.gitignore`
4. Tell you if your setup needs a backend proxy
5. Walk you through setting environment variables on your hosting platform

> **Tip:** Run this prompt before your first push to GitHub, and again whenever you add a new API or service.

### Option 1: `.env` Files + `.gitignore` (Most Common)

Store keys in a special file that Git ignores.

1. Create a file called `.env` in your project root:
   ```
   GEMINI_API_KEY=abc123your-key-here
   STRIPE_SECRET_KEY=sk_test_abc123
   ```

2. Add `.env` to your `.gitignore` file:
   ```
   # .gitignore
   .env
   .env.local
   ```

3. Access the values in your code:
   ```javascript
   // Node.js — install dotenv first: npm install dotenv
   require('dotenv').config();
   const key = process.env.GEMINI_API_KEY;
   ```

**Best for:** Local development, Node.js / server-side projects.

### Option 2: Hosting Platform Environment Variables

When you deploy, set environment variables directly in your hosting platform's dashboard:

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables
- **Firebase:** Use `firebase functions:secrets:set KEY_NAME`
- **Render / Railway:** Dashboard → Environment section

Your deployed code reads these the same way (`process.env.KEY_NAME`), but the values live on the server — never in your code or Git history.

**Best for:** Deployed server-side apps, serverless functions.

### Option 3: Backend Proxy (Frontend Apps Calling Paid APIs)

**Anything in your frontend JavaScript is visible to users.** If you put an API key in a React, Vue, or plain HTML/JS app, anyone can open DevTools and find it — even if you used a `.env` file during development.

If your frontend needs to call a paid API (like Gemini), you need a backend layer:

```
User's Browser  →  Your Backend (has the secret key)  →  Gemini API
```

Options for this backend layer:
- **Firebase Cloud Functions** — pairs well with Firebase Hosting
- **Vercel / Netlify Serverless Functions** — built into these platforms
- **A simple Express.js server** — if you're running your own backend

**Best for:** Any app where the browser needs to interact with a paid or private API.

### Which Option Do I Need?

| Scenario | What to Use |
|----------|-------------|
| Local development with Node.js | `.env` + `.gitignore` |
| Deployed server-side app | Platform environment variables |
| Frontend app calling a paid API | Backend proxy + platform env vars |
| Firebase project with sensitive config | Firebase secrets (see [Firebase & Deployment](Firebase%20%26%20Deployment.md)) |

### What About Firebase Config?

Firebase web config values (`apiKey`, `projectId`, etc.) are **designed to be public**. They identify your project but don't grant access to data on their own — security comes from Firebase Security Rules, not from hiding the config. This is an exception; most other API keys should be kept secret.

### Quick Safety Checklist

Before pushing to GitHub:
- ✅ `.env` is listed in `.gitignore`
- ✅ No API keys are hardcoded in source files
- ✅ Secret keys for paid APIs are routed through a backend (not exposed in frontend JS)
- ✅ API keys are restricted by domain or scope where possible (check your provider's dashboard)

> **Recovery:** If you accidentally push a key to GitHub, **revoke it immediately** from the provider's dashboard and generate a new one. Deleting the file or commit is not enough — the key is already in your Git history and can be found.

---

## Push to GitHub

GitHub is where your code lives online — a backup and a way to share your work.

### Create a GitHub Account

If you don't have one yet, sign up for free at <a href="https://github.com" target="_blank">github.com</a>.

### Create a Repository

1. Log in to GitHub.
2. Click the **+** icon in the top right → **New repository**.
3. **Repository name:** Match your folder name (e.g., `habit-tracker`).
4. Choose **Public** or **Private**.
5. **Do not** check "Add a README", ".gitignore", or "license" (you already have a local project).
6. Click **Create repository**.

### Connect Your Local Project

GitHub will show setup commands. Look for **"...or push an existing repository from the command line"** and copy them:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Paste into your VS Code terminal and hit Enter.

### Alternative Methods

- **SourceTree:** Click Repository > Add Remote to add your GitHub URL, then click Push.
- **Ask your AI:** "I have a GitHub repository at [URL]. Connect my local repo and push the code."

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

Full instructions: **<a href="https://workshop.nerktek.com/#share-your-work" target="_blank">workshop.nerktek.com</a>**

</td>
<td width="30%" valign="top">
<img src="images/github-site-qr.png" alt="GitHub QR Code" width="128">
</td>
</tr>
</table>

---

## What's Next?

Now that you have a working project, explore these resources to go further:

- **[Vibe Coding Techniques](Vibe%20Coding%20Techniques.md)** — Prompting strategies, debugging workflow, product thinking
- **[Git for Beginners](Git%20for%20Beginners.md)** — Version control basics and commands
- **[Firebase & Deployment](Firebase%20%26%20Deployment.md)** — Backend, database, and hosting with Firebase
- **[Vercel & Supabase](Vercel%20%26%20Supabase.md)** — Alternative deployment with Vercel and Supabase
- **[Backend & Hosting Platforms](Backend%20%26%20Hosting%20Platforms.md)** — Side-by-side platform comparison
- **[Custom Domains](Custom%20Domains.md)** — Buy a domain and connect it to your project
- **[Advanced Techniques](Advanced%20Techniques.md)** — Agents, skills, MCP servers, git worktrees
- **[AI Tools Directory](AI%20Tools%20Directory.md)** — Comprehensive list of AI coding tools
- **[Project Idea Prompts - Extended](Project%20Idea%20Prompts%20-%20Extended.md)** — Full detailed prompts for more project ideas
