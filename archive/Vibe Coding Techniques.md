# Vibe Coding Techniques
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

A reference guide for vibe coding techniques — how to prompt effectively, manage AI context, think like a product designer, and make smart architecture decisions.

---

## The Vibe Coding Spectrum

All projects exist somewhere on a spectrum between two approaches:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         THE VIBE CODING SPECTRUM                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   MINIMAL INFO                                              COMPREHENSIVE   │
│   Iterative Refinement                                    Brief → Execute   │
│                                                                             │
│   ○─────────────────────────────────────────────────────────────────────○   │
│   │                                 │                                   │   │
│   ▼                                 ▼                                   ▼   │
│   Nerktendo                  Weather Worsener                  DomainFlip   │
│                                  LinkPee                                    │
│                                                                             │
│   • Start broad                                        • Define everything  │
│   • Refine through                                       upfront            │
│     conversation                                       • Features, style,   │
│   • Great for exploring                                  structure, rules   │
│   • Lower barrier                                      • Faster to polish   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

Neither approach is "right" — most projects use a mix. The key is understanding when each works best.

### Approach 1: Minimal Info — Iterative Refinement

**Example:** <a href="https://nerktendo.com/" target="_blank">Nerktendo</a>

Start broad and refine through back-and-forth conversation. You might not know exactly what you want, and that's fine — the AI helps you explore possibilities.

**How it works:** Give a loose description, see what the AI generates, then guide it through rounds of feedback. Each iteration gets closer to what you want.

**✅ Pros:**
- Great for exploring possibilities and experimenting
- Sparks creative directions you wouldn't think of
- Lower barrier to starting — no planning required
- Perfect for learning and prototyping

**❌ Cons:**
- Takes more back-and-forth to reach a polished result
- May drift from your original vision
- Can be harder to guide refinement without a clear target
- Accumulated context can slow things down in long sessions

### Approach 2: Comprehensive Brief — Execute

**Example:** <a href="https://nerktendo.com/domainflip" target="_blank">DomainFlip</a>

Define everything upfront — features, style, structure, functions, rules, edge cases — then hand the AI a complete brief and let it build.

**How it works:** Use an AI chatbot (not a coding tool) to create comprehensive planning documents, then feed them to an AI coding agent for execution.

**✅ Pros:**
- Faster to a feature-full, polished result
- Stays true to your vision
- Better for complex requirements
- Less iteration, fewer surprises

**❌ Cons:**
- Requires knowing what you want upfront
- Less room for discovery and creative exploration
- Harder for beginners to write good briefs (but use AI to help)

### The DomainFlip Workflow

DomainFlip was built using the comprehensive brief approach — here's how it worked:

1. **Planning phase:** Used an AI chatbot to create a comprehensive plan for a website, designed so an AI coding agent would know exactly what to build without room for interpretation. Described the idea with all available details and asked the chatbot to help build it into a full product plan.
2. **Document creation:** The AI asked clarifying questions, then developed 8 detailed documents covering:
   - Project overview and goals
   - Technical architecture
   - Design specifications
   - Feature requirements and edge cases
3. **Execution phase:** Fed all documents to Claude Code in a single prompt.
4. **Result:** One hour later, the complete site was built exactly to spec.

> **Pro Tip:** Use an AI chatbot (not a coding assistant) to plan your project in detail, then feed that plan to an AI coding agent. DomainFlip was created with only 1 Claude Code prompt, but it was fed 8 different multi-page documents outlining the entire project in extreme detail.

> **Bonus:** Read through the <a href="https://workshop.nerktek.com/#docs/domainflip/domainflip_summary.md" target="_blank">DomainFlip summary and build documents</a>.

---

## Good Prompts vs Bad Prompts

The quality of your prompts directly determines the quality of the AI's output.

| ❌ Bad Prompt | ✅ Good Prompt |
|--------------|----------------|
| "Make me a website" | "Create a single-page portfolio site with a hero section, 3 project cards, and a contact form. Use a dark theme with blue accents." |
| "Fix it" | "The submit button doesn't work. When I click it, nothing happens. No errors in console. Here's the relevant code: [paste code]" |
| "Add a database" | "Add a SQLite database to store user tasks. Include fields for: id, title, description, due_date, completed (boolean). Create functions for CRUD operations." |
| "Make it look better" | "Improve the card component: add subtle shadows, rounded corners (8px), and a hover effect that slightly lifts the card." |
| "It's broken" | "Expected: clicking 'Save' should show a success message. Actual: page refreshes and data is lost. Browser: Chrome. Error in console: [paste error]" |

**Key principles:**
- **Be specific** about what you want — dimensions, colors, behaviors, structure
- **Include context** — tech stack, constraints, goals, what you've already tried
- **Describe outcomes** — what should happen, not just what to do
- **When reporting bugs:** expected vs actual behavior + error messages

---

## Essential Techniques

### Manage Your Context

AI remembers everything in your current conversation — this is called **context**. Every message you send, every file it reads, every piece of code it writes gets added to the context window. This is what lets AI understand your project and build on previous work.

**The problem:** Context has limits. As conversations get long, older content gets compressed or summarized to make room. This causes the AI to forget important details or repeat mistakes.

**When to start fresh:**
- Switching to an unrelated task or different part of the codebase
- The conversation feels sluggish or repetitive
- AI keeps forgetting things you told it earlier
- You've gone through many iterations and want a clean slate

**Tips for managing context:**
- Start new conversations for new tasks
- Keep related work in the same conversation for continuity
- Use project documentation (CLAUDE.md, README.md) so AI can re-learn context quickly in new conversations
- If you need info from an old conversation, copy the relevant parts into the new one

> **Tip:** A fresh conversation with good context often works better than a long conversation with accumulated confusion.

### Plan Before You Build

For features and major changes, use **plan mode** to build out a detailed plan before the AI starts coding. Describe what you want, the AI explores your codebase, proposes an approach, and waits for your approval before executing.

**Why it matters:**
- Catches misunderstandings before code is written
- Gives you control over architectural decisions
- Prevents wasted effort from going down the wrong path

**How to use it:**
1. Describe the feature or change you want
2. Ask the AI to create a plan (or use the tool's built-in plan mode)
3. Review the proposed approach — files to create/modify, dependencies, structure
4. Request changes to the plan if needed
5. Approve and let the AI execute

> **Tip:** The bigger the change, the more valuable planning becomes. For small tweaks, just ask. For new features or refactors, plan first.

### Interrupt When Needed

Sometimes AI goes off the rails. When you see it heading the wrong direction, stop it immediately — don't wait for it to finish.

**Signs to interrupt:**
- Editing the wrong file or creating unnecessary files
- Taking a completely wrong approach to the problem
- Making excessive changes beyond what you asked
- Going in circles, trying the same failed fix repeatedly

**How to interrupt:**
- Stop button or `esc` in command line tools
- Double tap `esc` to go back in the conversation

**After interrupting:**
1. Undo or revert any unwanted changes (go back in the conversation or reset files using Git)
2. Give clearer, more specific instructions
3. Add constraints if needed ("only modify this file", "don't change the database schema")

**Why this matters:** Mistakes compound. The longer AI goes down the wrong path, the more context gets polluted with bad code and failed attempts.

### Self-Checking

Ask your AI to review code for bugs, security issues, and performance problems. You can also ask a *different* AI to check — different models catch different things.

**When to self-check:**
- After completing a feature
- Before deploying or sharing
- When something feels off but you can't pinpoint why

**Example prompts:**
- "Review this code for bugs and edge cases"
- "Are there any security vulnerabilities in this authentication flow?"
- "How can this be optimized for performance?"

### Working Through Stubborn Bugs

When the AI can't solve a bug after multiple attempts:

1. **Try a different AI** — Different models have different strengths. If Claude is stuck, try Gemini or another AI.
2. **AI debate technique** — Ask two different AIs the same question, then share each response with the other for critique. Have them argue, then synthesize the best approach.
3. **Fresh context** — Start a new conversation with just the problem. Old context from failed attempts can mislead the AI down the same wrong paths.
4. **Simplify and isolate** — Ask the AI to create a minimal reproduction of the bug. Stripping away unrelated code often reveals the root cause.

### Debugging Workflow

AI agents fix issues best when given complete information. Here's how to gather and share it:

**1. Capture errors from DevTools**
- Open DevTools: `Cmd + Option + I` (Mac) or `F12` (Windows) → Console tab
- Look for red errors and yellow warnings
- Copy the error messages (right-click → Copy or highlight and copy)
- Check the Network tab for failed API requests (red entries)

**2. Describe the problem clearly**
- What you expected to happen
- What actually happened
- Steps to reproduce the issue
- Any recent changes that might be related

**3. Provide context**
- Paste the full error message
- Include relevant code snippets
- For visual bugs: take a screenshot or screen recording
- In a fresh conversation: share the relevant files and explain the project structure

> **Tip:** More context is better. AI can ignore what's irrelevant, but it can't guess what you didn't share.

---

## How AI Context Works

Understanding context is one of the most important skills in vibe coding. Here's what happens behind the scenes:

```
┌─────────────────────────────────────────────────────────────┐
│                    AI CONTEXT WINDOW                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   YOUR MESSAGES          PROJECT FILES                      │
│   ┌──────────┐          ┌──────────┐                       │
│   │ Prompts  │          │ CLAUDE.md│                       │
│   │ Feedback │          │ Code     │                       │
│   │ Errors   │          │ Config   │                       │
│   └──────────┘          └──────────┘                       │
│                                                             │
│   CONVERSATION HISTORY    EXTERNAL SOURCES                  │
│   ┌──────────┐          ┌──────────┐                       │
│   │ Previous │          │ Web docs │                       │
│   │ messages │          │ APIs     │                       │
│   │ AI code  │          │ MCP      │                       │
│   └──────────┘          └──────────┘                       │
│                                                             │
│   Everything here informs the AI's next response.           │
│   When the window fills up, older content gets compressed.  │
└─────────────────────────────────────────────────────────────┘
```

### What fills the context window

- **Your messages** — Every prompt, piece of feedback, and error you paste in
- **Project files** — CLAUDE.md, source code, configs, and any files the AI reads
- **Conversation history** — All previous messages and code the AI has generated in this session
- **External sources** — Web documentation, API responses, MCP server data

### Why this matters

The context window has a fixed size. As you keep chatting, older content gets compressed or dropped to make room for new messages. This means:

- Early instructions can get "forgotten" in long conversations
- Failed attempts pollute context and can lead the AI in circles
- Project documentation (CLAUDE.md) gets re-read at the start of each new conversation, giving you a fresh baseline

### Managing context effectively

- **Start new conversations** for new tasks — don't carry over unrelated baggage
- **Use CLAUDE.md and README files** to store important project context that persists across conversations
- **Compact or clear** when a conversation gets long and sluggish (`/compact` or `/clear` in Claude Code)
- **Copy key info** from old conversations into new ones rather than continuing a stale thread
- **Fresh conversation + good context docs** beats a long conversation with accumulated confusion every time

---

## Product Thinking

The best vibe coders don't just describe code — they describe products. Thinking about what you're building from the user's perspective leads to better prompts and better results.

### Define the user

Before you start prompting, ask yourself:
- Who is this for? (yourself, friends, a specific audience)
- What problem does it solve?
- What do they already use for this? What's wrong with it?

### Describe the experience

Go beyond features. Describe how it should *feel* to use your product:
- "Fast and minimal — no clutter, just the essentials"
- "Playful and colorful — makes a boring task fun"
- "Professional and trustworthy — someone would pay for this"

This kind of description gives the AI better design direction than a list of features alone.

### Write user stories

Frame features from the user's perspective:
- "As a student, I want to set custom timer durations so that I can match my study technique"
- "As a home cook, I want to filter recipes by dietary restrictions so that I can find meals that work for my family"
- "As a manager, I want to see a fairness dashboard so that I know shifts are distributed evenly"

### Think about edge cases

What happens when things go wrong or are empty?
- What does the app look like with no data? (empty states)
- What happens if the user enters invalid input?
- What if the API is slow or unavailable?
- What happens on a small screen?

### Sketch the flow

Before prompting the AI, describe the user journey:
1. User arrives at the page — what do they see first?
2. They take an action — what happens?
3. Something goes wrong — how does the app respond?
4. They complete their goal — what's the confirmation?

> **Tip:** The more you think about your product before coding, the better your prompts will be. You don't need a formal design process — just spend a few minutes considering the user experience before you start building.

---

## Project Architecture Decisions

As your projects get more ambitious, you'll face decisions about technology and structure. Here's a practical framework.

### Choosing a tech stack

- **Static HTML/CSS/JS** — Perfect for most workshop projects. No build step, opens in any browser, easy to deploy anywhere. Start here unless you have a reason not to.
- **React / Vue / Svelte** — When you need complex UI interactions, reusable components, or state management. More setup, but better for larger apps.
- **Full-stack (Node.js, Python, etc.)** — When you need server-side logic, databases, authentication, or secret API keys.

Let the project requirements guide you, not the hype. A simple HTML page that works is better than a React app that's half-finished.

### When you need a backend

You need a backend when your project requires any of these:
- **User accounts** — registration, login, profiles
- **Persistent data** — a database that stores information across sessions and users
- **File storage** — user uploads, images, documents
- **Secret API keys** — any key that must stay hidden from the browser (Gemini, Stripe, etc.)

If none of these apply, static HTML/JS with localStorage is probably enough.

### Hosting platform selection

The right platform depends on what you're building:

| Need | Good Options |
|------|-------------|
| Static site | GitHub Pages, Vercel, Netlify, Firebase Hosting |
| Backend + database | Firebase, Supabase, Vercel + database |
| Full control | Railway, Render, a VPS |

See [Backend & Hosting Platforms](Backend%20%26%20Hosting%20Platforms.md) for a detailed side-by-side comparison.

### Planning for scale

Start simple, add complexity when needed:
1. Build the simplest version that works
2. Deploy it and get feedback
3. Add features one at a time
4. Refactor when the codebase gets hard to manage — not before

The best architecture is the simplest one that solves the problem. You can always add complexity later; removing it is much harder.

---

## Beyond Coding

AI agents can help with more than just code — especially when they have access to your files and terminal.

**Writing & Documentation**
- READMEs and project documentation
- Code comments and API docs
- Emails, proposals, and presentations

**Data & Files**
- Analyzing CSV, JSON, or spreadsheet data
- Converting between file formats
- Renaming and organizing files in bulk
- Creating test data and mock content

**Organization & Research**
- Organizing notes (Obsidian, Notion, etc.)
- Researching APIs, libraries, and solutions
- Summarizing long documents or codebases

**Automation**
- Writing shell scripts for repetitive tasks
- Setting up scheduled jobs and workflows
- Batch processing files or images
