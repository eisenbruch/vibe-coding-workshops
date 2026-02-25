# Group Project
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series*

We're all building a project together using whatever AI tool you set up. You'll pick from a few project options (or come up with your own), then follow the same steps to build, iterate, and share.

This project teaches the core vibe coding workflow: **prompt, test, iterate, commit**. You'll write a prompt, see what the AI builds, test it in your browser, tell the AI what to change, and save your progress with Git. That cycle is the entire process — and you're about to do it for real.

Don't worry about following the prompts word-for-word. They're starting points. Change the theme, rewrite the details, pick a different style — make it yours.

---

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Open Your AI Tool -->

## Step 1: Open Your AI Tool

Open the AI tool you set up during the installation step. This could be any of the following:

| Tool | How to Open |
|------|------------|
| **Claude Desktop** | Launch the app, switch to Cowork mode, point it at your project folder |
| **Google AI Studio** | Open <a href="https://aistudio.google.com/" target="_blank">aistudio.google.com</a> in your browser |
| **Claude Code (VS Code)** | Click the Claude icon in the VS Code editor toolbar |
| **Gemini CLI** | Open a terminal in VS Code and type `gemini` |
| **Browser AI** | Open your preferred AI chat (Claude.ai, ChatGPT, Gemini, etc.) and have a text editor ready |

> **Using a desktop or IDE tool?** Make sure it's pointed at your project folder — that's where the AI will create files.
>
> **Using a browser AI?** You'll copy code from the chat and paste it into files manually. Have a text editor (VS Code, Notepad, TextEdit) open and ready.

<!-- wizard-step: 2 | title: Pick a Project & Prompt -->

## Step 2: Pick a Project & Write Your First Prompt

This is the big moment. Pick one of the project options below and paste the prompt into your AI tool. Feel free to tweak the prompt before you send it — change the theme, swap details, make it yours.

### Option A: "Would You Rather" Personality Quiz

```
Create a single HTML file for a "Would You Rather" personality quiz. Include:
- A fun, colorful design with animations
- 8 "would you rather" questions with two choices each (e.g., "Would you rather explore a deep cave or climb a tall mountain?")
- Track the user's choices and calculate a personality type at the end
- Show 4 possible personality types with fun descriptions and emoji
- Include a progress bar showing how far through the quiz they are
- Make it mobile-friendly
```

### Option B: Personal Portfolio / Landing Page

```
Create a single HTML file for a personal portfolio page. Include:
- A hero section with my name, a short bio, and a profile image placeholder
- A section showcasing 3-4 projects (use placeholder content)
- A skills or interests section with visual tags or icons
- A contact section with links (email, GitHub, LinkedIn — use placeholder URLs)
- Smooth scroll navigation between sections
- A clean, modern design with good typography — make it mobile-friendly
```

### Option C: Simple Browser Game

```
Create a single HTML file for a simple reaction-time game. Include:
- A start screen with instructions
- The game: a shape appears at a random time and position, the player clicks it as fast as they can
- Track and display their reaction time in milliseconds
- Keep a running scoreboard of their best 5 times
- Add difficulty levels (easy = bigger shape and longer wait, hard = smaller and faster)
- Fun visual feedback on click (animations, color changes)
- Make it mobile-friendly
```

### Option D: Pick Your Own

Have a different idea? Go for it. Write your own prompt describing a single-page project — a tool, a game, a visualizer, anything. As long as it produces a single HTML file, the rest of the steps work the same.

> **Tips for writing your own prompt:** Be specific about what the user sees and does. Include details about the design (colors, layout, animations). Ask for mobile-friendly. Start simple — you'll iterate and add features in later steps.

<!-- wizard-step: 3 | title: Get the Code Into a File -->

## Step 3: Get the Code Into a File

This step depends on which tool you're using:

> **Claude Desktop / Cowork mode:** Claude will create the file directly in your project folder. Check that it saved an HTML file — you should see something like `index.html` appear.
>
> **Claude Code / Gemini CLI:** The AI will create the file in your open project. You'll see it appear in VS Code's file explorer on the left side.
>
> **Browser AI (Claude.ai, ChatGPT, Gemini, AI Studio):** Copy the entire code block the AI generated. Open your text editor, paste it in, and save it as `index.html` in your project folder.

If the AI generated multiple files, that's fine — just make sure you save all of them in the same folder.

<!-- wizard-step: 4 | title: Open in Browser — See It Work! -->

## Step 4: Open in Browser — See It Work!

1. Find the HTML file in your project folder (`index.html` or whatever the AI named it)
2. Double-click it to open in your browser
3. Try the whole thing — click through every feature and see how it works

How does it look? Does everything work? Take a moment to note anything you'd want to change:
- Does the layout look good?
- Do interactions feel smooth?
- Is anything missing or broken?
- What would make it better?

> **Something looks wrong or doesn't work?** That's not a failure — that's the workflow. You now have something specific to tell the AI to fix. Identifying problems and describing them clearly is the core skill of vibe coding.

<!-- wizard-step: 5 | title: Iterate #1 — Polish the Design -->

## Step 5: Iterate #1 — Polish the Design

Time to improve. Go back to your AI tool and paste a prompt like this:

```
Make the project look more polished:
- Add smooth transitions and animations
- Improve the color scheme and typography
- Make buttons and interactions more satisfying (hover effects, click feedback)
- Add subtle visual details that make it feel professional
```

After the AI updates the code:

1. **Save the file** (or let your AI tool save it)
2. **Refresh your browser** to see the changes
3. **Test the whole thing again** — make sure nothing broke

Does it look better? Tell the AI what you like ("the transitions are great") and what to change ("the colors are too bright, tone it down"). Be specific — the more precise your feedback, the better the result.

> **Browser AI users:** Copy the updated code and replace the contents of your HTML file entirely. Save and refresh.

<!-- wizard-step: 6 | title: Iterate #2 — Add More Content -->

## Step 6: Iterate #2 — Add More Content

Let's make the project more substantial. Tell the AI to add more content and depth. Some ideas depending on your project:

- **Quiz:** "Expand to 10 questions, add 6 personality types with detailed descriptions and a trait breakdown"
- **Portfolio:** "Add a testimonials section, a timeline of experience, and smooth parallax scrolling"
- **Game:** "Add a countdown mode, particle effects on click, and a high score leaderboard"
- **Your own:** "Add more features, content, or sections — make it feel complete"

```
Add more content and depth to the project:
- Expand the main feature with more detail and variety
- Add at least one new section or feature
- Include more visual polish (icons, illustrations, or decorative elements)
- Make the overall experience feel more complete and satisfying
```

Save, refresh, test. Go through the whole thing again. It should feel more substantial now.

If anything feels off, tell the AI exactly what to change — "The layout is cramped, add more spacing" or "The colors clash, use a more cohesive palette."

<!-- wizard-step: 7 | title: Introduce Git — Save Your Progress -->

## Step 7: Introduce Git — Save Your Progress

You now have a working project that you like. Before we change anything else, let's save this checkpoint.

**Git** creates save points (called **commits**) in your project's history. If you ever break something, you can go back to a working version. Think of it as a save file in a video game.

> **Claude Code / Gemini CLI users:** Tell your AI:
> ```
> Initialize a git repository in this folder and create an initial commit with all my files. Use the message "Working project with polished design"
> ```

> **Claude Desktop / AI Studio users:** If your tool supports running terminal commands, ask it to initialize Git. Otherwise, skip Git steps for now — you can learn it later from the [Git for Beginners](Git%20for%20Beginners.md) guide.

> **Browser AI users:** Open a terminal in your project folder and run:
> ```
> git init
> git add .
> git commit -m "Working project with polished design"
> ```
> If you don't have Git installed or aren't comfortable with the terminal, skip this for now.

**Optional: Visualize with SourceTree**

If you installed <a href="https://www.sourcetreeapp.com/" target="_blank">SourceTree</a>, open it and add your project folder. You'll see your first commit — a snapshot of everything you've built so far. This visual history becomes more useful as you add more commits.

<!-- wizard-step: 8 | title: Iterate #3 — Add a Share Feature -->

## Step 8: Iterate #3 — Add a Share Feature

Let's add a way to share or save progress. Tell the AI something like:

```
Add a share/save feature:
- Add a "Copy Link" or "Share" button that copies a summary to clipboard
- Add a "Start Over" or "Reset" button
- Save the user's state in localStorage so it persists when they return
```

Save, refresh, test. Try the full flow:
1. Use the project from start to finish
2. Try the share/copy feature — paste somewhere to verify it works
3. Try the reset button
4. Close the browser tab, reopen the file — does it remember your state?

<!-- wizard-step: 9 | title: Commit Again -->

## Step 9: Commit Again

Time for another save point. You've added a significant feature — lock it in.

> **Claude Code / Gemini CLI users:**
> ```
> Commit my changes with the message "Add share feature and localStorage"
> ```

> **Terminal users:**
> ```
> git add .
> git commit -m "Add share feature and localStorage"
> ```

**SourceTree users:** Open SourceTree and look at your commit history. You now have two commits — two snapshots. Click on the first one to see what the code looked like before the share feature. This is the power of Git: you can always go back.

<!-- wizard-step: 10 | title: Make It Yours -->

## Step 10: Make It Yours

This is your project now. Spend the next few minutes customizing it however you want. Some ideas:

- **Change the theme** — dark mode, retro, neon, pastel, brutalist, minimalist
- **Add your own content** — write your own copy, add personal touches
- **Add images or GIFs** to make it more visual
- **Add background music or sound effects**
- **Change the topic entirely** — pivot to something completely different if you want

Prompt your AI with whatever changes you want. There's no wrong answer here.

When you're happy with the result, make another commit:

> **Claude Code / Gemini CLI users:**
> ```
> Commit my changes with a message describing what I customized
> ```

> **Terminal users:**
> ```
> git add .
> git commit -m "Customize project with [your changes here]"
> ```

<!-- wizard-step: 11 | title: Show & Tell -->

## Step 11: Show & Tell

Open your project in the browser and show it to the group!

**Things to share:**
- Walk through your project — show what it does and how it works
- What did you customize? What makes yours unique?
- What was surprising about the process?
- Did you run into any issues? How did you solve them?

**What's Next?**

You've built a real project using the vibe coding workflow. Here's where to go from here:

- **Learn more techniques:** [Vibe Coding Techniques](Vibe%20Coding%20Techniques.md) covers prompting strategies, debugging, and working effectively with AI
- **Start your own project:** [Solo Project Guide](Solo%20Project%20Guide.md) walks through project ideas, Git, GitHub, and the full build cycle
- **Deploy to the web:** [Firebase & Deployment](Firebase%20%26%20Deployment.md) or [Vercel & Supabase](Vercel%20%26%20Supabase.md) to put your project on a real URL
- **Explore advanced features:** [Advanced Techniques](Advanced%20Techniques.md) covers agents, custom commands, and MCP servers
- **Browse project ideas:** [Project Idea Prompts](Project%20Idea%20Prompts%20-%20Extended.md) has starter prompts organized by difficulty

<!-- wizard-end -->

---

## Quick Reference

### Prompts Used

| Step | Prompt Summary |
|------|---------------|
| **Step 2** | Pick a project (quiz, portfolio, game, or your own) and write your first prompt |
| **Step 5** | Polish the design — transitions, color scheme, typography, interactions |
| **Step 6** | Add more content and depth — expand features, add sections |
| **Step 7** | Initialize Git and create first commit |
| **Step 8** | Add share/save feature — copy to clipboard, reset, localStorage |
| **Step 10** | Customize freely — theme, content, images, sounds, new direction |

### The Build Cycle

Everything you just did follows the same four-step pattern:

1. **Prompt** — Describe what you want to the AI
2. **Test** — Open the file in your browser and try it
3. **Iterate** — Tell the AI what to fix or improve
4. **Commit** — Save a checkpoint with Git

This is the vibe coding workflow. It works for a simple single-page project and it works for a full web application. The projects get bigger, but the cycle stays the same.

### Next Steps

- [Vibe Coding Techniques](Vibe%20Coding%20Techniques.md) — Prompting strategies and core techniques
- [Solo Project Guide](Solo%20Project%20Guide.md) — Project ideas, Git, GitHub, and the build cycle
- [Firebase & Deployment](Firebase%20%26%20Deployment.md) — Deploy your project to the web
- [Vercel & Supabase](Vercel%20%26%20Supabase.md) — Alternative deployment with Vercel and Supabase
- [Advanced Techniques](Advanced%20Techniques.md) — Agents, skills, MCP servers, and more
- [Project Idea Prompts](Project%20Idea%20Prompts%20-%20Extended.md) — Starter prompts by difficulty level
