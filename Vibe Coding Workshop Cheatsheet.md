# Vibe Coding Workshop Cheatsheet
*Last updated: November 14, 2025*

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

Please fill out our feedback form after the workshop:
https://forms.gle/3iVRWgUS6o8U51Ut5

</td>
<td width="30%" valign="top">

<img src="images/feedback-form-qr.png" alt="Feedback Form QR Code" width="128">

</td>
</tr>
</table>

## Table of Contents

[1. Example Projects](#example-projects) \
[2. Vibe Coding Tools](#vibe-coding-tools) \
[3. Core Approaches](#core-approaches) \
[4. Working with Claude Code](#working-with-claude-code) \
[5. Project Ideas](#project-ideas) \
[6. Submitting Your Workshop Project](#submitting-your-workshop-project) \
[7. Extended AI Tools Directory](#extended-ai-tools-directory) 

---

## Example Projects

### Portfolio of Vibe-Coded Projects

**1. Glitch QR** ([github.com/eisenbruch/glitch-qr](https://github.com/eisenbruch))
- **Type:** QR code generation with a twist
- **Key Learning:** Vibe coding tools for yourself is fun

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

**7. TrafficVision.Live** ([trafficvision.live](https://trafficvision.live))
- **Type:** Interactive map and database
- **Key Learning:** AI takes time to discover things like humans (optimization) and needs to take similar approaches a human would. They may need to be guided towards a solution.

**8. Instant Camera with Thermal Printer**
- **Type:** Raspberry Pi with camera module, button, LED, 3D printed enclosure, and vibe coded software
- **Key Learning:** AI can assist with hardware prototyping and setup, not just software

> **💡 Key Takeaway:** Don't limit yourself. If you think it should exist (no matter how silly), just try to create it. Vibe coding can make testing concepts easier than creating a mockup. AI can help with more than just  code - it can help prototype your hardware.
---

## Vibe Coding Tools

### Essential Tools (Pick One to Start)

#### 1. Browser-Based Tools
*Best for beginners, quick questions, tests/experiments, single pages* \
*Limitations: can’t easily save locally, limited to one conversation, bad project management*

- **Claude.ai** - Advanced reasoning and coding
- **ChatGPT** - General purpose AI assistant
- **Gemini** - Google's multimodal AI

#### 2. Desktop Applications
*Just as great for beginners, with extended capabilities like local file management* \
*Limitations: not great at editing large files, not code focused*

- **Claude Desktop** - Enhanced with file system access
- **ChatGPT Desktop** - Integrated workflow tools

> **💡 Tip:** Desktop-based tools are great for organizing your files and documents, and communicating with your computer in different ways

#### 3. IDE Integration
*Professional workflow, best for complex projects and version control* \
*Limitations: steeper learning curve*

- **VS Code** + Claude/ChatGPT/Gemini Extensions
- **Cursor** - AI-native code editor

> **💡 Tip:** Use Git version control!
### Specialized Platforms

#### Build & Deploy Platforms
*Build, deploy, and share on their site with social elements*

- **Google AI Studio** - Easily integrates Google's AI tools
- **Replit** - Collaborative coding environment
- **v0.dev** - Vercel's AI design tool
- **Bolt.new** - StackBlitz's AI web development

#### Agent Platforms
*Complex tasks with autonomous execution*

- **Manus.im** - Browser-based AI agents for workflows (see full list in AI Browser Automation section below)

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

#### Approach 1: Minimal Info → Iterative Refinement

**Example:** Nerktendo

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

**Example:** DomainFlip

**How it works:** Define everything upfront - features, style, structure, functions, rules, edge cases

**✅ Pros:**
- Faster to polished result
- Stays true to vision
- Better for complex requirements

**❌ Cons:**
- Requires knowing what you want
- Less room for discovery
- Harder for beginners to write good briefs (but use AI to help)

---

### Finding Your Approach

Most projects fall somewhere in the middle. Weather Worsener and LinkPee are examples of balanced approaches.

> **💡 Pro Tip:** Use an AI chatbot (not coding assistant) to plan your project in detail, then feed that plan to an AI coding agent. DomainFlip was created with only 1 Claude Code prompt, but it was fed 8 different multi page documents outlining the entire project in extreme detail.

Most of my examples are website related

---

## Working with Claude Code

### Claude Code Commands

| Command    | Purpose                                                                  |
| ---------- | ------------------------------------------------------------------------ |
| `claude`   | Start Claude in your terminal.                                           |
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

### Essential Techniques

#### Interrupt When Needed
Sometimes AI goes off the rails. If you see it going down the wrong path, interrupt it, go back (double tap `esc`), and give better instructions. This saves memory and credits vs. correcting mistakes later. AI is bad at remembering what it did wrong.

#### Self-Checking
Ask your AI to check its own (or your) work for bugs and see if there's room for improvement. Optimizing for resources and speed is generally good (unless it isn't).

---

### Debugging Workflow

AI agents fix issues best when given all relevant information:

1. Use browser DevTool Console to look for errors and warnings: AI agents love reading errors and warnings
2. Copy and paste HTML from the DevTool Element Inspector if unsure how to describe an issue
3. Describe what you want and what the issue is in detail
4. Provide full context especially if debugging in a fresh conversation

---

### Advanced Features

#### Claude Agents (Tasks)
Multiple Claude Code instances using skills and tools to autonomously complete complex workflows in parallel.

**Use case:** Analyze reports or data sources simultaneously

**How to use:** Just ask Claude to start some agents (tasks)

#### Custom Commands
Shortcuts for common workflows without detailed descriptions each time.

**Use case:** Super helpful for scraping and cleaning data

**Examples:** `/new-source` and `/commit` (TrafficVision.Live)

#### UltraThink for Stubborn Bugs

When you have a bug AI can't solve after multiple attempts:

1. Use Claude thinking levels: `think`, `think hard`, `think harder`, `ultrathink`
1. Try a different coding agent (e.g. ChatGPT Codex)
1. Ask 2 different AIs the same question
    1. Give each AI the other's response for analysis
    1. Have both provide updated plans
    1. Give both responses to a new agent for comprehensive summary
    1. Have another new agent read and implement the solution

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

### Beyond Coding

Claude and other AI agents can help with more than just code if they have access to the right tools:

- File and document organization
- Obsidian integration through filesystem
- Note analysis and knowledge management
- Similar capabilities to IDE integration

---

## Project Ideas

### Simple Projects

*These starter prompts are to give you ideas. Change them to your liking.*

#### To-Do List
**Starter Prompt:**
```
Create a to-do list app with the following features:
- Add, edit, and delete tasks
- Mark tasks as complete with a checkbox
- Filter view by "all", "active", and "completed"
- Tasks persist in localStorage
Use vanilla JavaScript or React, make it clean and minimal with a soft color palette.
```

#### Habit Tracker
**Starter Prompt:**
```
Build a habit tracker that lets users:
- Add custom habits to track
- Mark habits as complete for each day
- Show a 7-day streak calendar view
- Calculate and display current streak
Use a grid layout with green checkmarks for completed days. Make it motivating and visually rewarding.
```

#### Custom Calculator
**Starter Prompt:**
```
Create a calculator with:
- Basic operations (+, -, ×, ÷)
- Clear and backspace functions
- Keyboard support for number entry
- Display for current input and result
Style it like a modern iOS calculator or create a retro/vintage aesthetic. Add smooth button press animations.
```

#### Basic Game
**Starter Prompt:**
```
Build a simple guessing game where:
- Computer picks a random number between 1-100
- Player gets hints ("higher" or "lower") after each guess
- Track number of attempts
- Show win message and option to play again
Make it colorful and fun with emoji reactions to guesses. Add a difficulty selector (easy/medium/hard ranges).
```

---

### Medium Projects

#### Weather App
**Starter Prompt:**
```
Build a weather app that includes:
- Feature 1: Search for any city and display current weather
- Feature 2: 5-day forecast with high/low temperatures
- Feature 3: Display weather icons, humidity, wind speed, and "feels like" temp
- Feature 4: Geolocation to auto-detect user's location
Design should be clean and modern with weather-appropriate background gradients (sunny = warm colors, rainy = cool colors).
Use OpenWeatherMap API or WeatherAPI.
Target audience: anyone who wants quick weather info at a glance
```

#### Portfolio Website
**Starter Prompt:**
```
Build a personal portfolio website that includes:
- Feature 1: Hero section with animated introduction and call-to-action
- Feature 2: Project showcase with filtering by technology/category
- Feature 3: About section with skills visualization (progress bars or icons)
- Feature 4: Contact form with email integration (EmailJS or similar)
- Feature 5: Dark/light mode toggle
Design should be modern and professional with smooth scroll animations and transitions.
Use React or Next.js with Tailwind CSS.
Target audience: potential employers and clients
```

#### Pomodoro Timer App
**Starter Prompt:**
```
Build a productivity timer app that includes:
- Feature 1: 25-minute work sessions with 5-minute breaks
- Feature 2: Customizable timer durations
- Feature 3: Audio notification when timer completes
- Feature 4: Session counter and daily statistics
- Feature 5: Pause, resume, and reset controls
Design should be minimalist and distraction-free with a large, readable timer display.
Add ambient background sounds (optional toggle).
Target audience: students and remote workers seeking better focus
```

#### Recipe Finder
**Starter Prompt:**
```
Build a recipe search app that includes:
- Feature 1: Search recipes by ingredient or dish name
- Feature 2: Filter by dietary restrictions (vegetarian, vegan, gluten-free)
- Feature 3: Display recipe details including ingredients, instructions, and cook time
- Feature 4: Save favorite recipes to localStorage
- Feature 5: Random recipe generator for inspiration
Design should be warm and inviting with food photography and card-based layouts.
Use Spoonacular API or Edamam API.
Target audience: home cooks looking for meal ideas
```

---

### Complex Projects

#### Real-Time Chat App
**Starter Prompt:**
```
Build a chat application where users can message each other in real-time with these features:

Core Features:
- User accounts with secure registration and login
- Instant messaging that updates without refreshing the page
- Multiple chat rooms or channels for different conversations
- See who's online/offline right now
- "User is typing..." indicators
- Message history that loads older messages as you scroll up
- Timestamps showing when each message was sent
- Read receipts (checkmarks when messages are seen)
- Emoji picker for reactions
- Ability to upload and share images/files

User Experience:
- Clean, modern interface similar to Discord or Slack
- Sidebar showing all available channels
- Main chat area for conversation
- Works smoothly on both desktop and mobile
- Fast and responsive - messages appear instantly

Technical Requirements:
- Secure authentication and password storage
- Protect against common security issues
- Store all messages and user data in a database
- Deploy the app so others can access it online

Target audience: Teams, friend groups, or communities who want their own private chat space.
```

#### Restaurant Reservation System
**Starter Prompt:**
```
Build a restaurant reservation platform where customers can book tables and restaurants can manage their bookings:

Customer Features:
- Browse restaurants with photos, menus, and descriptions
- Search and filter by cuisine type, location, and price range
- Interactive calendar showing available reservation times
- See real-time availability (which time slots are open)
- Book a table by selecting date, time, party size, and adding special requests
- Receive email confirmation immediately after booking
- Get SMS reminder 24 hours before the reservation
- Personal dashboard to view, modify, or cancel upcoming reservations
- Works perfectly on mobile phones for booking on-the-go

Restaurant Owner Features:
- Admin panel to view all bookings for their restaurant
- Manage table capacity and available time slots
- See booking details (party size, special requests, contact info)
- Prevent double-booking automatically
- Update restaurant information, photos, and menu

User Experience:
- Elegant, trustworthy design similar to OpenTable or Resy
- High-quality imagery that makes restaurants look appealing
- Fast loading and smooth interactions
- Handle different time zones correctly

Technical Requirements:
- Secure login for both customers and restaurant owners
- Store all restaurant data, bookings, and user accounts safely
- Send automated emails and SMS notifications
- Deploy online so anyone can use it

Target audience: Diners looking for an easy way to book tables, and restaurant owners who want to manage reservations efficiently.
```

#### Interactive Data Visualization Dashboard
**Starter Prompt:**
```
Build an analytics dashboard that turns data into beautiful, interactive visualizations:

Core Features:
- Display data in multiple chart types: line graphs, bar charts, pie charts, and heatmaps
- Click and interact with charts to explore details
- Filter data by date ranges (today, last week, last month, custom range)
- Watch data update live in real-time as new information comes in
- Upload data from CSV or JSON files
- Export visualizations and data to PDF or CSV
- Customize the dashboard layout by dragging and dropping different widgets
- Works smoothly on tablets and desktop computers

Data Management:
- Store historical data so you can analyze trends over time
- Handle large datasets without slowing down
- Automatically calculate key metrics and trends
- Refresh data on a schedule (hourly, daily, etc.)

User Roles:
- Viewers: can only see dashboards
- Editors: can modify dashboards and settings
- Admins: full control over users and data

User Experience:
- Professional interface similar to Google Analytics or Tableau
- Clear visual hierarchy showing what's important
- Intuitive controls that are easy to understand
- Fast performance even with lots of data
- Helpful loading states and error messages

Technical Requirements:
- Secure user authentication with different permission levels
- Store data in a reliable database
- Deploy online for team access

Example use cases:
- Sales dashboard showing revenue, top products, and customer trends
- Social media analytics tracking engagement and follower growth
- IoT sensor monitoring for temperature, humidity, or equipment status

Target audience: Business teams, data analysts, or anyone who needs to understand their data through visual insights.
```

#### Employee Shift Scheduler
**Starter Prompt:**
```
Build a smart shift scheduling system that creates fair schedules automatically while respecting staff preferences and availability:

Staff Management:
- Add employees with their qualifications (certifications, skills, roles)
- Set each person's availability for every day of the week and their shift preferences
- View each employee's upcoming schedule and total hours

Automatic Scheduling:
- Generate schedules automatically that:
  - Only assign people when they're available
  - Match qualifications to shift requirements
  - Balance workload fairly across multiple weeks (not just one week at a time)
  - Avoid scheduling someone for multiple shifts on the same day
  - Respect people's preferences when possible
  - Track historical fairness so everyone gets their preferred shifts over time

Shift Templates:
- Create recurring weekly shift patterns (morning, afternoon, night, weekend)
- Define how many people are needed for each shift
- Specify what qualifications are required
- Handle shifts that span multiple days

Schedule Management:
- View schedules across multiple weeks at once
- Manually adjust assignments if needed (drag and drop)
- Clear entire weeks and regenerate schedules
- Remove individual assignments and fill them automatically
- See visual warnings for conflicts or issues

Fairness Dashboard:
- Show how fairly preferences have been fulfilled across past weeks
- Look ahead to see projected fairness for future schedules
- Adjust the time window (1-12 weeks) to analyze different periods
- Visual indicators for workload balance and preference scores

User Experience:
- Clean, professional interface focused on clarity
- Color coding for different shift types
- Visual indicators showing workload balance
- Easy to spot scheduling conflicts
- Export schedules to PDF or CSV for printing/sharing
- Works on desktop and tablet

Technical Requirements:
- Store all staff data, shifts, and schedules in a database
- Smart algorithm that creates fair, conflict-free schedules
- Fast performance even with many employees and weeks of data

Target audience: Small business managers, healthcare facilities, retail stores, or any organization that needs to create fair employee schedules while managing complex availability and preferences.
```

---

### Bonus Challenge

**Open Source Contribution Challenge**

Take a project from GitHub, come up with an improvement, and submit a PR (pull request).

**How to get started:**
1. Find a project on GitHub that is interesting or useful to you
2. Set up the project locally and explore the codebase
3. Pick an existing issue or come up with an improvement (bug fix, feature, documentation, tests)
4. Fork the repo, create a branch, and make your changes
5. Write clear commit messages and test your changes
6. Submit a pull request with a detailed description

This teaches you about:
- Reading and understanding existing codebases
- Contributing to open source communities
- Professional collaboration workflows
- Git and version control best practices
- Code review process and feedback incorporation

**Recommended platforms to find projects:**
- GitHub Explore (github.com/explore)
- First Timers Only (firsttimersonly.com)
- Good First Issue (goodfirstissue.dev)
- Up For Grabs (up-for-grabs.net)

---

## Submitting Your Workshop Project

If you'd like to share your project with the community:

1. **Fork the repository** at [github.com/eisenbruch/vibe-coding-workshops](https://github.com/eisenbruch/vibe-coding-workshops)
2. **Create a folder** in the appropriate workshop directory: `workshop-projects/{your-workshop}/{your-project-name}-{your-name}/`
3. **Add your project files** with all necessary code and assets
4. **Include a README.md** explaining:
   - What the project does
   - How to set it up and run it
   - Any dependencies or requirements
   - Technologies used
5. **Submit a pull request** with a clear description of your project

**Folder naming format**: `{project-name}-{your-name}` (e.g., `todo-app-sarah`, `weather-dashboard-alex`)

> **💡 Tip:** Use AI to help you write a clear README for your project. A good README makes it easy for others to understand and use your work.

---

## Extended AI Tools Directory

> **⚠️ Note:** Projects shut down and get acquired frequently. Some tools may no longer exist.

---

### Vibe Coding & Development Tools

<table>
<tr>
<td width="50%" valign="top">

**Claude Code** - [claude.ai/code](https://claude.ai/code)<br/>
Terminal-based AI coding assistant with full codebase context, git integration, and MCP server support

**Cursor** - [cursor.com](https://www.cursor.com/)<br/>
AI-native code editor built on VS Code with chat, inline editing, and codebase understanding

**GitHub Copilot** - [github.com/features/copilot](https://github.com/features/copilot)<br/>
AI pair programmer integrated into VS Code, JetBrains IDEs, and other editors

**ChatGPT Codex** - [chatgpt.com/codex](https://chatgpt.com/codex)<br/>
OpenAI's code-specialized model integrated into ChatGPT for code generation and understanding

**Google AI Studio** - [aistudio.google.com](https://aistudio.google.com/)<br/>
Google's platform for prototyping with Gemini models, including code generation

**Replit** - [replit.com](https://replit.com/)<br/>
Collaborative browser-based IDE with AI assistance, instant deployment, and multiplayer coding

</td>
<td width="50%" valign="top">

**v0.dev** - [v0.dev](https://v0.dev/)<br/>
Vercel's AI tool for generating React components and UI designs from text descriptions

**Bolt.new** - [bolt.new](https://bolt.new/)<br/>
StackBlitz's AI web development platform that builds and deploys full-stack apps instantly

**Windsurf** - [codeium.com/windsurf](https://codeium.com/windsurf)<br/>
AI-powered IDE with Cascade flows for multi-file editing and autonomous task completion

**Supermaven** - [supermaven.com](https://supermaven.com/)<br/>
Fast AI code completion with 1 million token context window

**Aider** - [aider.chat](https://aider.chat/)<br/>
Command-line AI coding assistant that edits code in your local git repository

</td>
</tr>
</table>

---

### Image Generation & Editing

<table>
<tr>
<td width="50%" valign="top">

**Google Nano Banana** - [aistudio.google.com](https://aistudio.google.com/models/gemini-2-5-flash-image)<br/>
One of the newest and best image generation and editing models.

**Midjourney** - [midjourney.com](https://www.midjourney.com/)<br/>
Discord-based platform creating high-quality artistic images from text prompts

**DALL-E** - [openai.com/dall-e](https://openai.com/dall-e)<br/>
OpenAI's image generator for detailed images from natural language

**Decohere** - [decohere.ai](https://www.decohere.ai/)<br/>
Generates characters, images, and videos from text and image prompts

**Stability AI** - [stability.ai](https://stability.ai/)<br/>
Creator of Stable Diffusion for multimodal generative AI

</td>
<td width="50%" valign="top">

**Catbird** - [catbird.ai](https://www.catbird.ai/)  *(Defunct)*<br/>
Multi-model generator creating images from 15+ AI models simultaneously

**Leonardo.ai** - [leonardo.ai](https://leonardo.ai/)<br/>
Fine-tuned models for game assets, concept art, and production visuals

**Fooocus** - [GitHub](https://github.com/lllyasviel/Fooocus)<br/>
Open-source Stable Diffusion interface with advanced inpainting

**AUTOMATIC1111** - [GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui)<br/>
Popular web interface for Stable Diffusion with extensive features

**Adobe Express Background Remover** - [adobe.com](https://www.adobe.com/express/feature/ai/image/remove-background)<br/>
Free AI tool for instant background removal with transparent PNG output

</td>
</tr>
</table>

---

### Video Generation & Editing

<table>
<tr>
<td width="50%" valign="top">

**Runway** - [runwayml.com](https://runwayml.com/)<br/>
Advanced AI video platform with Gen-4 models for text/image-to-video

**Pika** - [pika.art](https://pika.art/)<br/>
AI video generator creating cinematic clips up to 10 seconds

**Adobe Firefly Video** - [firefly.adobe.com](https://firefly.adobe.com/upload/video-generation)<br/>
Text/image-to-video with 1080p output and commercially safe generation

**Hailuo AI** - [hailuoai.video](https://hailuoai.video/)<br/>
Chinese AI video generator creating 5-6 second HD videos

**Google Veo 3** - [deepmind.google](https://deepmind.google/models/veo/)<br/>
Advanced video generation with 8-second clips and synchronized native audio

**Hedra** - [hedra.com](https://www.hedra.com/)<br/>
Specializes in talking avatar generation with realistic lip-sync

</td>
<td width="50%" valign="top">

**HeyGen** - [heygen.com](https://www.heygen.com/)<br/>
AI avatar platform for professional spokesperson videos

**Synthesia** - [synthesia.io](https://www.synthesia.io/)<br/>
AI presenters for training videos and marketing content

**Switchlight** - [switchlight.beeble.ai](https://www.switchlight.beeble.ai/)<br/>
AI-powered video relighting tool with PBR maps

**Adobe Express Video Background Remover** - [adobe.com](https://www.adobe.com/express/feature/ai/video/remove-background)<br/>
Remove video backgrounds with transparent MP4 output

**VideoBGRemover** - [videobgremover.com](https://videobgremover.com/)<br/>
Professional background removal for videos up to 3 hours

**Innova AI Video Background Removal** - [Hugging Face](https://huggingface.co/spaces/innova-ai/video-background-removal)<br/>
Free background removal and replacement tool

</td>
</tr>
</table>

---

### Audio & Music
<table>
<tr>
<td width="50%" valign="top">

**Hume** - [hume.com](https://www.hume.ai/)<br/>
Text-to-speech and speech-to-speech editor with voice cloning and developer APIS for analyzing emotional expression and generating expressive speech.

**Descript** - [descript.com](https://www.descript.com/)<br/>
All-in-one editor with text to speech, voice cloning, AI transcription and text-based editing

**ElevenLabs** - [elevenlabs.io](https://elevenlabs.io/)<br/>
Advanced AI voice cloning and text-to-speech in 30+ languages

</td>
<td width="50%" valign="top">

**Suno** - [suno.ai](https://suno.ai/)<br/>
AI music generation with vocals and instruments from text

**Udio** - [udio.com](https://www.udio.com/)<br/>
Professional-quality music tracks from text descriptions

**Adobe Podcast Enhance** - [podcast.adobe.com](https://podcast.adobe.com/en/enhance)<br/>
AI audio enhancement removing background noise

</td>
</tr>
</table>

---

### AI Chat & Search

<table>
<tr>
<td width="50%" valign="top">

**Perplexity** - [perplexity.ai](https://www.perplexity.ai/)<br/>
AI-powered search with sourced answers and citations

**DeepSeek** - [deepseek.com](https://www.deepseek.com/)<br/>
Chinese open-source AI with powerful reasoning (R1 model)

**Venice.ai** - [venice.ai](https://venice.ai/)<br/>
Privacy-focused uncensored AI with local data storage

</td>
<td width="50%" valign="top">

**Maple.ai** - [trymaple.ai](https://trymaple.ai/)<br/>
Privacy-focused with end-to-end encryption and confidential computing

**Z.ai Chat** - [chat.z.ai](https://chat.z.ai/)<br/>
Free AI chatbot with presentation generation and multimodal capabilities

</td>
</tr>
</table>

---

### AI Infrastructure & Development

<table>
<tr>
<td width="50%" valign="top">

**Replicate** - [replicate.com](https://replicate.com/)<br/>
Cloud platform for running open-source AI models via API

**Hugging Face** - [huggingface.co](https://huggingface.co/)<br/>
The GitHub of AI - hub for models, datasets, and applications

</td>
<td width="50%" valign="top">

**Groq** - [groq.com](https://groq.com/)<br/>
Ultra-fast AI inference with custom LPU chips

**Chutes.ai** - [chutes.ai](https://chutes.ai/)<br/>
Decentralized serverless AI compute platform

</td>
</tr>
</table>

---

### 3D & Spatial

<table>
<tr>
<td width="50%" valign="top">

**Depth Anything V2** - [GitHub](https://github.com/DepthAnything/Depth-Anything-V2)<br/>
Monocular depth estimation for 3D reconstruction

**Hyper3D (Rodin AI)** - [hyper3d.ai](https://hyper3d.ai/)<br/>
Production-ready 3D models from text or images

**Tripo3D** - [tripo3d.ai](https://www.tripo3d.ai/)<br/>
Fast 3D asset generation in ~10 seconds

**TRELLIS** - [Hugging Face](https://huggingface.co/spaces/JeffreyXiang/TRELLIS)<br/>
Microsoft's 3D generation with Radiance Fields and meshes

**HitPaw 3D (Hitem3D)** - [hitem3d.ai](https://hitem3d.ai/)<br/>
Ultra-high resolution 3D models from single images

</td>
<td width="50%" valign="top">

**Luma Labs** - [lumalabs.ai](https://lumalabs.ai/)<br/>
Interactive 3D scenes using NeRF and Gaussian Splatting

**Brush** - [GitHub](https://github.com/ArthurBrussee/brush)<br/>
Open-source 3D reconstruction with Gaussian Splatting

**COLMAP** - [colmap.github.io](https://colmap.github.io/)<br/>
Open-source photogrammetry pipeline for 3D reconstruction

**RealityScan** - [realityscan.com](https://www.realityscan.com/)<br/>
Professional photogrammetry by Epic Games

**Postshot** - [jawset.com](https://www.jawset.com/)<br/>
Desktop app for training NeRF and Gaussian Splatting locally

</td>
</tr>
</table>

---

### Agentic Browsers
AI-native browsers that autonomously navigate websites, complete tasks, and execute workflows.

<table>
<tr>
<td width="50%" valign="top">

**BrowserOS** - [github.com/browseros-ai/BrowserOS](https://github.com/browseros-ai/BrowserOS)<br/>
BrowserOS is an open-source chromium fork that runs AI agents natively. Your open-source, privacy-first alternative to ChatGPT Atlas, Perplexity Comet, Dia.

**ChatGPT Atlas** - [chatgpt.com/atlas](https://chatgpt.com/atlas)<br/>
ChatGPT in a browser with memory and automation abilities

**Perplexity Comet** - [perplexity.ai/comet](https://www.perplexity.ai/comet)<br/>
AI-first browser with autonomous task execution and integrated search

</td>
<td width="50%" valign="top">

**Opera Neon** - [operaneon.com](https://www.operaneon.com/)<br/>
Premium agentic browser with Chat, Do, and Make functions ($19.99/month)

**Fellou** - [fellou.ai](https://fellou.ai/)<br/>
Self-driving browser with deep search and agentic memory

**Sigma AI Browser** - [sigmabrowser.com](https://www.sigmabrowser.com)<br/>
Privacy-first with end-to-end encryption and Deep Research mode

**Dia Browser** - [diabrowser.com](https://www.diabrowser.com/)<br/>
Tab-aware assistant with Skills system and natural language commands

</td>
</tr>
</table>

---

### Specialized Tools

<table>
<tr>
<td width="50%" valign="top">

**ComfyUI** - [comfy.org](https://www.comfy.org/)<br/>
Node-based workflow platform for multiple AI model types

**Cascdr** - [cascdr.xyz](https://cascdr.xyz/)<br/>
Bitcoin Lightning-powered AI workflow platform

**Manus.im** - [manus.im](https://manus.im/)<br/>
Browser-based AI agent platform for autonomous tasks

</td>
<td width="50%" valign="top">

**Genspark** - [genspark.ai](https://www.genspark.ai/)<br/>
Many AI tools in one chatbot

**Browserbase** - [browserbase.com](https://www.browserbase.com/)<br/>
Developer infrastructure for headless browsers and AI agents

</td>
</tr>
</table>

---

## Resources & Support

For more resources, tutorials, and support, visit the workshop materials repository or reach out.

https://github.com/eisenbruch/vibe-coding-workshops  
noaheisenbruch@gmail.com
