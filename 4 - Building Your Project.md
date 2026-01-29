# Building Your Project
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This is the core of the workshop — choosing what to build, the build cycle, essential techniques for working with AI, and how to submit your finished project.

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

1. **Start with your prompt.** Describe what you want to build in as much detail as you can. See [Good Prompts vs Bad Prompts](1%20-%20Vibe%20Coding%20Fundamentals.md#good-prompts-vs-bad-prompts) for guidance.
2. **Get the scaffold.** Let your AI generate the initial project structure and code. Don't worry if it's not perfect — this is your starting point.
3. **Run and evaluate.** Open the project in your browser or run it locally (see [Running Your Project](3%20-%20Project%20Setup%20&%20Git.md#2-running-your-project)). Does it work? Does it look right? Note what's wrong or missing.
4. **Iterate.** Tell the AI what to fix, change, or add next. Be specific — reference what you see on screen, paste error messages, describe the exact behavior you want.
5. **Commit milestones.** Every time you get something working, commit it with Git. This creates a save point you can return to if the next change breaks something. See [Project Setup & Git](3%20-%20Project%20Setup%20&%20Git.md#5-typical-workflow).
6. **Polish.** Once core features work, focus on design, edge cases, and user experience. Ask the AI: *"What could be improved about this app?"*

> **The golden rule:** If it works, commit it. If it breaks, revert and try a different approach.

---

## Essential Techniques

### Interrupt When Needed
Sometimes AI goes off the rails. If you see it going down the wrong path, interrupt it, go back (double tap `esc`), and give better instructions. This saves memory and credits vs. correcting mistakes later. AI is bad at remembering what it did wrong.

### Self-Checking
Ask your AI to check its own (or your) work for bugs and see if there's room for improvement. Optimizing for resources and speed is generally good (unless it isn't).

### Working Through Stubborn Bugs

When you have a bug AI can't solve after multiple attempts:

1. Try a different coding agent (e.g. ChatGPT Codex)
2. Ask 2 different AIs the same question
    1. Give each AI the other's response for analysis
    2. Have both provide updated plans
    3. Give both responses to a new agent for comprehensive summary
    4. Have another new agent read and implement the solution

### Debugging Workflow

AI agents fix issues best when given all relevant information:

1. Use browser DevTools Console to find errors and warnings: AI agents love reading errors and warnings
2. Describe what you want and what the current issue is in full detail
3. Provide full context especially if debugging in a fresh conversation

### Beyond Coding

Claude and other AI agents can help with more than just code if they have access to the right tools:

- File and document organization
- Obsidian note organization and project management
- Data visualization
- Research and repetitive tasks

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

