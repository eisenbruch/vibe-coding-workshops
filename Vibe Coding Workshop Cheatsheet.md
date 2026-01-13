# Vibe Coding Workshop Cheatsheet
*By Noah Eisenbruch - noaheisenbruch@gmail.com* \
*Last updated: January 12, 2026*


<table>
<tr>
<td width="70%" valign="top">

Access this cheatsheet, updates, resources, workshop projects, and more at:
https://eisenbruch.github.io/vibe-coding-workshops/
<br/><br/>
Click *Watch* on the GitHub repository to be notified of Cheatsheet updates and participant project uploads.
</td>
<td width="30%" valign="top">

<img src="images/github-site-qr.png" alt="GitHub QR Code" width="128">

</td>
</tr>
<tr>
<td width="70%" valign="top">

Your feedback is greatly appreciated and helps shape future workshops.
<br/><br/>
Please fill out our feedback form after the workshop:
https://forms.gle/3iVRWgUS6o8U51Ut5

</td>
<td width="30%" valign="top">

<img src="images/feedback-form-qr.png" alt="Feedback Form QR Code" width="128">

</td>
</tr>
</table>

## Table of Contents

<table>
<tr>
<td width="50%" valign="top">

[1. Example Projects](#example-projects)

[2. Vibe Coding Tools](#essential-vibe-coding-tools)
   - [Beginner: Browser-Based Tools](#beginner-browser-based-tools)
   - [Intermediate: Desktop Applications](#intermediate-desktop-applications)
   - [Advanced: IDEs & CLI Tools](#advanced-ides-with-ai-extensions--cli-command-line-interface-tools)
   - [Specialized Platforms](#specialized-platforms)

[3. Core Approaches](#core-approaches)

[4. Good Prompts vs Bad Prompts](#good-prompts-vs-bad-prompts)

[5. Working with AI Coding Agents](#working-with-ai-coding-agents)
   - [Vibe Coding Essential Techniques](#vibe-coding-essential-techniques)
   - [Getting Started with Claude Code](#getting-started-with-claude-code)
   - [Claude Code CLI Commands](#claude-code-cli-commands)
   - [Claude Code Advanced Features](#claude-code-advanced-features)

</td>
<td width="50%" valign="top">

[6. Project Ideas](#project-ideas)
   - [Simple Projects](#simple-projects)
   - [Medium Projects](#medium-projects)
   - [Complex Projects](#complex-projects)

[7. Submitting Your Workshop Project](#submitting-your-workshop-project)

[8. Workshop Guides & Resources](#workshop-guides--resources)
   - [Day 1: Project Setup Guide](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#Day%201%20-%20Project%20Setup%20Guide.md)
   - [Day 2: Firebase Guide](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#Day%202%20-%20Firebase%20Guide.md)
   - [Extended AI Tools Directory](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#AI%20Tools%20Directory.md)
   - [Project Idea Prompts - Extended](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#Project%20Idea%20Prompts%20-%20Extended.md)

</td>
</tr>
</table> 

---

## Example Projects

### Portfolio of Vibe-Coded Projects

**1. Glitch QR** ([github.com/eisenbruch/glitch-qr](https://github.com/eisenbruch))
- **Type:** QR code generation with a twist
- **Key Learning:** You can vibe code a simple tool in minutes, and it's fun

**2. Snark AI** ([snark-ai.com](https://snark-ai.com))
- **Type:** Satirical AI email service
- **Key Learning:** Vibe coding actually works to make services and websites

**3. Nerktendo** ([nerktendo.com](https://nerktendo.com))
- **Type:** Retro interface and portfolio
- **Key Learning:** Sometimes AI is really bad at things. Try different tools and dive deeper into vibe coding.

**4. LinkPee** ([linkp.ee](https://linkp.ee))
- **Type:** Fully functional "link in bio" service with secure authentication & user profiles
- **Key Learning:** "Complex" features are absolutely achievable

**5. Weather Worsener** ([nerktendo.com/weather-worsener](https://nerktendo.com/weather-worsener))
- **Type:** Interactive game
- **Key Learning:** Fun and loose iterative projects are great for experimenting with concepts and mechanics and allow you to explore concepts and themes freely.

**6. DomainFlip** ([nerktendo.com/domainflip](https://nerktendo.com/domainflip))
- **Type:** Investor-ready startup demo
- **Key Learning:** Clear vision + detailed context = polished results

**7. TrafficVision.Live** ([trafficvision.live](https://trafficvision.live/?utm_source=vibe-coding-cheatsheet&utm_medium=resource&utm_campaign=example-project))
- **Type:** Interactive map and database service with user focused features
- **Key Learning:** AI takes time to discover things like humans (optimization) and needs to take similar approaches a human would. They may need to be guided towards a solution.

**Other Projects**
- Raspberry Pi powered instant camera - prints instant picture stickers with text, current date/time
- Blender Addon that optimally rotates a 3D object to minimize its bounding box - usefull for manufacturing processes

> **💡 Key Takeaway:** Don't limit yourself. If you think it should exist (no matter how silly), just try to create it. Vibe coding can make testing concepts easier than creating a mockup. 

> **🧠 Remember:** AI can help with more than just  code - it can help prototype your hardware, organize your files, and much more.
---

## Essential Vibe Coding Tools

### Beginner: Browser-Based Tools
*Best for first-time coders, quick prototypes, and learning the basics* \
*No installation required - just open a browser and start*

**Chat Interfaces:**
- **<a href="https://claude.ai" target="_blank">Claude.ai</a>** - Advanced reasoning and coding
- **<a href="https://chatgpt.com" target="_blank">ChatGPT</a>** - General purpose AI assistant
- **<a href="https://gemini.google.com" target="_blank">Gemini</a>** - Google's multimodal AI

**✅ Pros:**
- No setup required
- Instant access from any device
- Great for learning and experimentation

**❌ Limitations:**
- Limited to simple projects
- Limited version control integration

> **💡 Tip:** Start here to test ideas and learn prompting. When you're ready for real projects, move to intermediate or advanced tools.

---

### Intermediate: Desktop Applications
*Enhanced AI assistants with file system access* \
*Best for document management, file organization, and basic coding tasks*

**Desktop Applications:**
- **<a href="https://claude.ai/download" target="_blank">Claude Desktop</a>** - Enhanced with file system access via MCP servers
- **<a href="https://openai.com/chatgpt/desktop" target="_blank">ChatGPT Desktop</a>** - Integrated workflow tools

**✅ Pros:**
- Full file system access
- Great for organizing files and documents
- MCP server support for extended capabilities
- Easy to use without coding experience

**❌ Limitations:**
- Not code-focused
- Slow file editing capabilities
- Not suited for complex development

> **💡 Tip:** Desktop applications are excellent for organizing files and documents, and communicating with your computer in different ways beyond just coding.

---

### Advanced: IDEs with AI Extensions & CLI (Command Line Interface) Tools
*Professional development environments with powerful AI integration* \
*Maximum power and flexibility for complex projects*

**AI Coding Tools:**

*All tools support full codebase understanding, git integration, MCP servers, and agents* \
*Each available as both VS Code extension and standalone CLI*

- **<a href="https://claude.ai/code" target="_blank">Claude Code</a>** - Recommended for best overall quality and speed, especially for large projects
- **<a href="https://chatgpt.com/codex" target="_blank">ChatGPT Codex</a>** - Better at problem-solving with tricky bugs, but slower overall
- **<a href="https://codeassist.google" target="_blank">Gemini Code Assist</a>** - Recently updated with major improvements, great free option to get started

**AI-Native IDEs:**
- **<a href="https://cursor.com" target="_blank">Cursor</a>**
- **<a href="https://antigravity.google" target="_blank">Google Antigravity</a>** 

**✅ Pros:**
- Entire codebase context at once
- Powerful automation and agent capabilities
- Best for large refactoring and complex features
- Deep git integration
- Custom commands and workflows
- MCP server support for extended capabilities
- Professional development environment

**❌ Limitations:**
- More setup and configuration
- Steeper learning curve
- Requires understanding of general development practices
- Requires terminal comfort (for CLI tools) 

> **💡 Tip:** IDEs and CLI tools shine for large codebases and complex workflows. The investment in learning pays off quickly on real projects.

> **💡 Tip:** Use Git version control! These tools make it easy to track changes, experiment safely, and collaborate professionally.

> **🧠 Learn More:** See [Working with AI Coding Agents](#working-with-ai-coding-agents) for commands and advanced techniques.

> **🧠 Learn More:** See the [Extended AI Tools Directory](#extended-ai-tools-directory) for more specialized vibe coding platforms, web-hosted autonomous agents, and more.

---

### Specialized Platforms
*Browser-based IDEs with instant deployment and unique capabilities* \
*Great for all skill levels - combines ease of use with professional features*

- **<a href="https://replit.com" target="_blank">Replit</a>** - Collaborative coding environment with instant deployment, built-in database, and AI assistant
- **<a href="https://v0.dev" target="_blank">v0.dev</a>** - Vercel's AI design tool that generates React components from text descriptions
- **<a href="https://bolt.new" target="_blank">Bolt.new</a>** - StackBlitz's AI web development with full-stack support and instant preview
- **<a href="https://aistudio.google.com" target="_blank">Google AI Studio</a>** - Prototype with Gemini models, including code generation and multimodal AI

**✅ Pros:**
- No local setup required
- Instant deployment and hosting
- Share projects with a single link
- Built-in collaboration features
- Professional capabilities in a browser
- Great for rapid prototyping

**❌ Limitations:**
- Platform-specific workflows
- Less control over infrastructure
- May have usage limits on free tiers
- Dependent on platform's continued existence

> **💡 Tip:** These platforms are perfect for quickly building and sharing projects without worrying about deployment. Use them alongside other tools depending on your needs.

---

### Tool Selection Framework

Ask yourself these questions:

1. **What are you building?** Simple tool/visual vs. complex app
2. **What's your experience level?** Never coded vs. comfortable with code
3. **What's your timeline?** Quick prototype vs. production-ready
4. **What's your budget?** Free tier vs. paid subscription
5. **Do you need automation?** Simple tasks vs. complex multi-step workflows

---

## Core Approaches

### The Vibe Coding Spectrum

All projects exist somewhere on this spectrum between two approaches:

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

#### Approach 1: Minimal Info → Iterative Refinement

**Example:** [Nerktendo](https://nerktendo.com/)

**How it works:** Start broad, refine through back-and-forth conversation

**✅ Pros:**
- Great for exploring possibilities and experimenting
- Sparks creative directions you wouldn't think of
- Lower barrier to starting

**❌ Cons:**
- Takes more back-and-forth
- May drift from original vision
- Can be difficult to guide refinement with minimal info

---

#### Approach 2: Comprehensive Brief → Execute

**Example:** [DomainFlip](https://nerktendo.com/domainflip)

**How it works:** Define everything upfront - features, style, structure, functions, rules, edge cases

**✅ Pros:**
- Faster to a feature-full, polished result
- Stays true to vision
- Better for complex requirements

**❌ Cons:**
- Requires knowing what you want
- Less room for discovery
- Harder for beginners to write good briefs (but use AI to help)

**How to do it:** Use an LLM (not a coding AI) to create comprehensive planning documents before you start coding.

**DomainFlip workflow:**
1. **Planning phase**: I asked the an AI chatbot to create a comprehensive plan for building a website that is designed to be passed to an AI coding agent so it would know exactly what to build without any room for interpretation. I described my idea with all the details I had thought of so far and asked the chatbot to help build out the idea into a full company and product plan.
2. **Document creation**: The AI asked clarifying questions to complete the product idea, then developed 8 detailed documents covering:
   - Project overview and goals
   - Technical architecture
   - Design specifications
   - Feature requirements and edge cases
3. **Execution phase**: I fed all documents to Claude Code in a single prompt
4. **Result**: One hour later, the complete site was built exactly to spec

**The key:** comprehensive upfront documentation eliminates ambiguity and reduces iteration.

> **💡 Pro Tip:** Use an AI chatbot (not coding assistant) to plan your project in detail, then feed that plan to an AI coding agent. DomainFlip was created with only 1 Claude Code prompt, but it was fed 8 different multi page documents outlining the entire project in extreme detail.

> **🎁 Bonus:** Read through the [DomainFlip summary and build documents](https://github.com/eisenbruch/vibe-coding-workshops/tree/master/docs/domainflip)

---

### Good Prompts vs Bad Prompts

| ❌ Bad Prompt | ✅ Good Prompt |
|--------------|----------------|
| "Make me a website" | "Create a single-page portfolio site with a hero section, 3 project cards, and a contact form. Use a dark theme with blue accents." |
| "Fix it" | "The submit button doesn't work. When I click it, nothing happens. No errors in console. Here's the relevant code: [paste code]" |
| "Add a database" | "Add a SQLite database to store user tasks. Include fields for: id, title, description, due_date, completed (boolean). Create functions for CRUD operations." |
| "Make it look better" | "Improve the card component: add subtle shadows, rounded corners (8px), and a hover effect that slightly lifts the card." |
| "It's broken" | "Expected: clicking 'Save' should show a success message. Actual: page refreshes and data is lost. Browser: Chrome. Error in console: [paste error]" |

**Key principles:**
- Be specific about what you want
- Include relevant context (tech stack, constraints, goals)
- When reporting bugs: expected vs actual behavior + any errors
- Describe the outcome, not just the task

---

## Working with AI Coding Agents

This section focuses on Claude Code but the concepts and techniques apply to all agents.

### Vibe Coding Essential Techniques
---

### Interrupt When Needed
Sometimes AI goes off the rails. If you see it going down the wrong path, interrupt it, go back (double tap `esc`), and give better instructions. This saves memory and credits vs. correcting mistakes later. AI is bad at remembering what it did wrong.

### Self-Checking
Ask your AI to check its own (or your) work for bugs and see if there's room for improvement. Optimizing for resources and speed is generally good (unless it isn't).

### Working Through Stubborn Bugs

When you have a bug AI can't solve after multiple attempts:

1. Use Claude thinking levels. Type: `think`, `think hard`, `think harder`, or `ultrathink`
1. Try a different coding agent (e.g. ChatGPT Codex)
1. Ask 2 different AIs the same question
    1. Give each AI the other's response for analysis
    1. Have both provide updated plans
    1. Give both responses to a new agent for comprehensive summary
    1. Have another new agent read and implement the solution

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

### Getting Started with Claude Code

---

#### Option 1: VS Code Extension

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Claude Code"
4. Click Install
5. Authenticate with your Claude account
6. The Claude icon will now show up in your window. Click to get started.

---

#### Option 2: CLI Installation

Choose the installation method for your system:

**macOS/Linux (Homebrew):**
```bash
brew install --cask claude-code
```
*Note: Requires [Homebrew](https://brew.sh) to be installed first*

**macOS/Linux/WSL:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows (CMD):**
```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

Once installed, navigate to your project directory and run `claude` to start.

> **🧠 Learn More:** Read Anthropic's official [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) guide for workflows, optimization tips, and advanced techniques.

---

### Claude Code CLI Commands

| Command    | Purpose                                                                  |
| ---------- | ------------------------------------------------------------------------ |
| `claude`   | Start Claude in your terminal.                                           |
| `esc`      | Interrupt Claude while it's working.                                     |
| `esc esc`  | Go back in conversation and code history.                                |
| `/init`    | Review codebase and create CLAUDE.md documentation file for AI reference |
| `#memory`  | Easily add to CLAUDE.md memory                                           |
| `/compact` | Compact conversation to clear space while keeping some memory            |
| `/clear`   | Better space clearing but loses memory (or quit/restart Claude Code)     |
| `/usage`   | Check current usage level                                                |
| `/resume`  | Resume a previous conversation                                           |
| `/review`  | Code review                                                              |

> **💡 Tip:** Store important instructions in CLAUDE.md to prevent AI from doing unwanted things (overwriting data, unnecessary builds, etc.). CLAUDE.md files exist for your user and each individual project folder where you use Claude Code. Use this to your advantage - global knowledge vs project specific knowledge.

---

### Claude Code Advanced Features

#### Claude Agents (Tasks)
Multiple Claude Code instances using skills and tools to autonomously complete complex workflows in parallel.

**Use case:** Analyze reports or data sources simultaneously

**How to use:** Just ask Claude to start some agents (tasks)

#### Custom Commands
Shortcuts for common workflows without detailed descriptions each time.

**Use case:** Super helpful for scraping and cleaning data

**Examples:** `/new-source` and `/commit` (TrafficVision.Live)

#### Git Worktrees

Git worktrees let you work on multiple branches simultaneously without switching contexts or creating separate repository clones.

**What it solves:** Working on a feature while needing to quickly fix a bug on main, or testing different approaches side-by-side

**How to use:**

1. Create a new worktree:
```bash
git worktree add ../project-feature-branch feature-branch-name
```
2. Claude Code can work across worktrees simultaneously
3. Each worktree maintains its own working directory and branch
4. Shared git history means commits from any worktree are available everywhere

**Use cases:**
- Developing a new feature while maintaining production bug fixes
- Testing multiple implementation approaches in parallel
- Code review without disrupting your current work
- Running different versions for comparison testing

**Clean up when done:**
```bash
git worktree remove ../project-feature-branch
```

> **💡 Tip:** Name worktree directories clearly (e.g., `project-name-feature-name`) to avoid confusion when multiple Claude Code instances are running.

> **💡 Tip:** If worktrees are confusing to you (or if any advanced workflow is), ask Claude to do it for you and teach you along the way.

#### MCP Servers

Model Context Protocol (MCP) servers extend Claude's capabilities by connecting to external tools, APIs, databases, and services through a standardized protocol.

**What it is:** An open standard that lets AI assistants securely connect to external data sources and tools without custom integrations for each service.

**Why use it:** 
- Access real-time data beyond Claude's training cutoff
- Connect to your tools (GitHub, Slack, databases, file systems)
- Automate workflows across multiple services
- Get specialized functionality (web search, documentation, browser control)

**Common MCP Servers:**

- **Filesystem** - Read/write local files with permission-based access
- **GitHub** - Manage PRs, issues, and repository operations
- **Puppeteer** - Browser automation and web scraping
- **Context7** - Up-to-date library documentation with version-specific references
- **Brave Search** - Real-time web search results
- **Sequential Thinking** - Break down complex tasks into structured steps
- **Google Drive** - Access and manage Drive documents
- **Slack** - Send messages and interact with Slack workspaces

**Installation - Claude Desktop:**

1. Install Node.js if needed: `brew install node` (macOS)
2. Navigate to Settings → Extensions in Claude Desktop
3. Click "Browse extensions" to install from directory (one-click)

**Installation - Claude Code:**
```bash
# Add server with user scope (available in all projects)
claude mcp add github --scope user

# Add with environment variables
claude mcp add -e API_KEY=your_key servername -- npx @org/server

# List configured servers
claude mcp list

# Check server status
/mcp
```

**Configuration Scopes:**

- **Local** (default) - Only available in current directory
- **User** (`--scope user`) - Available globally across all projects
- **Project** (`.mcp.json`) - Shared with team via version control

> **💡 Tip:** Use user scope for personal tools, project scope for team-shared servers. After adding servers, restart Claude Desktop or Claude Code to activate them.

**Config File Locations:**

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Claude Code:** `~/.claude.json` (user scope) or `.mcp.json` (project scope)

**Finding More Servers:**

- Official servers: [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- Community directory: [mcp.so](https://mcp.so)
- Smithery: [smithery.ai](https://smithery.ai)

---

## Project Ideas

*Customize these to your liking. Extended prompts with full details available on the <a href="https://github.com/eisenbruch/vibe-coding-workshops/blob/master/Project%20Idea%20Prompts%20-%20Extended.md" target="_blank">GitHub repo</a>.*

### Simple Projects

#### To-Do List
Task management with add/edit/delete, checkboxes, filters (all/active/completed), localStorage.
```
Create a to-do list app with add/edit/delete tasks, checkboxes, filter by all/active/completed, and localStorage persistence. Clean minimal design.
```

#### Habit Tracker
Daily habits with check-offs, 7-day calendar view, streak counter.
```
Build a habit tracker: add custom habits, mark complete daily, 7-day streak calendar, current streak display. Green checkmarks, motivating design.
```

#### Calculator
Basic math (+, -, ×, ÷), keyboard support, iOS or retro style.
```
Create a calculator with basic operations, clear/backspace, keyboard support. Style like iOS calculator or retro aesthetic with button animations.
```

#### Guessing Game
Number guessing 1-100, higher/lower hints, attempt counter, difficulty levels.
```
Build a guessing game: random number 1-100, higher/lower hints, track attempts, play again option. Add difficulty selector and emoji reactions.
```

---

### Medium Projects

#### Weather App
City search, 5-day forecast, geolocation, weather-themed gradients. **API:** OpenWeatherMap
```
Build a weather app: city search, 5-day forecast, weather icons, humidity, wind, "feels like". Geolocation support. Weather-appropriate background gradients.
```

#### Portfolio Site
Hero section, project cards with filtering, contact form, dark/light mode. **API:** EmailJS
```
Build a portfolio: animated hero, project showcase with category filters, skills section, contact form (EmailJS), dark/light toggle. React + Tailwind.
```

#### Pomodoro Timer
25/5 min sessions, customizable durations, audio alerts, session stats.
```
Build a pomodoro timer: 25-min work / 5-min break sessions, customizable durations, audio notifications, session counter, pause/resume/reset. Minimalist design.
```

#### Recipe Finder
Search by ingredient, dietary filters, save favorites, random recipe. **API:** Spoonacular
```
Build a recipe app: search by ingredient/dish, filter by dietary restrictions, show ingredients + instructions + cook time, save favorites, random recipe button.
```

---

### Complex Projects

#### Real-Time Chat
Discord/Slack clone with auth, channels, typing indicators, read receipts, file uploads.
```
Build a real-time chat app: user auth, multiple channels, online/offline status, typing indicators, message history, read receipts, emoji reactions, file uploads. WebSocket-based.
```

#### Restaurant Reservations
OpenTable clone with restaurant browsing, table booking, calendar availability, admin panel.
```
Build a reservation system: browse restaurants with photos/menus, search/filter, interactive availability calendar, booking with party size + special requests, email confirmation, admin panel for owners.
```

#### Data Dashboard
Analytics visualizer with multiple chart types, date filters, CSV upload, drag-drop layout.
```
Build an analytics dashboard: line/bar/pie charts + heatmaps, interactive filtering, date range selectors, CSV/JSON upload, drag-drop widget layout, user roles (viewer/editor/admin), PDF export.
```

#### Shift Scheduler
Staff scheduling with availability, auto-scheduling algorithm, fairness tracking.
```
Build a shift scheduler: employee profiles with qualifications + availability, auto-generate fair schedules, drag-drop adjustments, conflict warnings, fairness dashboard, PDF/CSV export.
```

---

### Bonus Challenge

**Open Source Contribution** - Find a GitHub project you use, pick an issue or improvement, and submit a PR. Great for learning real codebases and professional workflows.

**Find projects:** GitHub Explore, First Timers Only, Good First Issue, Up For Grabs

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

Full instructions: **[eisenbruch.github.io/vibe-coding-workshops](https://eisenbruch.github.io/vibe-coding-workshops/#share-your-work)**

</td>
<td width="30%" valign="top">
<img src="images/github-site-qr.png" alt="GitHub QR Code" width="128">
</td>
</tr>
</table>



---

## Workshop Guides & Resources

### Day 1: Fundamentals
- **[Project Setup, Git & GitHub Guide](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#Day%201%20-%20Project%20Setup%20Guide.md)** - Essential workflow for saving and sharing your work.

### Day 2: Architecture & Cloud
- **[Firebase Guide](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#Day%202%20-%20Firebase%20Guide.md)** - Connecting your app to a real backend, database, and hosting.

### Tools Directory
- **[Extended AI Tools Directory](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#AI%20Tools%20Directory.md)** - A comprehensive list of AI tools for every creative need.
- **[Project Idea Prompts - Extended](https://eisenbruch.github.io/vibe-coding-workshops/cheatsheet-viewer.html#Project%20Idea%20Prompts%20-%20Extended.md)** - Full starter prompts for simple, medium, and complex projects.

---

## Resources & Support

For more resources, tutorials, and support, visit the workshop materials repository or reach out.

https://github.com/eisenbruch/vibe-coding-workshops  
noaheisenbruch@gmail.com
