Access this cheatsheet, updates, resources, workshop projects, and more at https://github.com/eisenbruch/vibe-coding-workshops.

## Table of Contents
- [Example Projects](#example-projects)
- [Vibe Coding Tools](#vibe-coding-tools)
- [Core Approaches](#core-approaches)
- [Working with Claude Code](#working-with-claude-code)
- [Project Ideas](#project-ideas)
- [Extended AI Tools Directory](#extended-ai-tools-directory)

---

## Example Projects

### Portfolio of Vibe-Coded Projects

**1. Snark AI** ([snark-ai.com](https://snark-ai.com)) 
- **Type:** Satirical AI email service
- **Key Learning:** Vibe coding works and its fun!

**2. Nerktendo** ([nerktendo.com](https://nerktendo.com))
- **Type:** Retro interface and portfolio
- **Key Learning:** Sometimes AI is really bad at things. This pushed me to try multiple tools and dive deeper into vibe coding.

**3. Linkp.ee** ([linkp.ee](https://linkp.ee))
- **Type:** Fully functional "link in bio" service with secure authentication & user profiles
- **Key Learning:** "Complex" features are absolutely achievable

**4. Weather Worsener** ([nerktendo.com/weather-worsener](https://nerktendo.com/weather-worsener))
- **Type:** Interactive game
- **Key Learning:** Fun and loose iterative projects are great for experimenting with concepts and mechanics and allow you to explore concepts and themes freely.

**5. DomainFlip** ([nerktendo.com/domainflip](https://nerktendo.com/domainflip))
- **Type:** Investor-ready startup demo
- **Key Learning:** Clear vision + detailed context = polished results

**6. TrafficVision.Live** ([trafficvision.live](https://trafficvision.live))
- **Type:** Interactive map and database
- **Key Learning:** AI takes time to discover things like humans (optimization) and needs to take similar approaches a human would. They may need to be guided towards a solution.

> **💡 Key Takeaway:** Do not limit yourself. If you think it should exist, just try to create it. Vibe coding can make testing concepts easier than creating a mockup.

---

## Vibe Coding Tools

### Essential Tools (Pick One to Start)

#### 1. Browser-Based Tools
*Best for beginners, quick questions, tests/experiments, single pages*
*Limitations: can’t easily save locally, limited to one conversation, bad project management*

- **Claude.ai** - Advanced reasoning and coding
- **ChatGPT** - General purpose AI assistant
- **Gemini** - Google's multimodal AI

#### 2. Desktop Applications
*Just as great for beginners, with extended capabilities like local file management*
*Limitations: not great at editing large files, not code focused*

- **Claude Desktop** - Enhanced with file system access
- **ChatGPT Desktop** - Integrated workflow tools

> **💡 Tip:** Desktop-based tools are great for organizing your files and documents, and communicating with your computer in different ways

#### 3. IDE Integration
*Professional workflow, best for complex projects and version control 
*Limitations: steeper learning curve*

- **VS Code** + Claude/ChatGPT/Gemini Extensions
- **Cursor** - AI-native code editor

> **💡 Tip:** Use Git version control!
### Specialized Platforms

#### Build & Deploy Platforms
*Build, deploy, and share on their site with social elements*

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
2. Ask 2 different AIs the same question
3. Give each AI the other's response for analysis
4. Have both provide updated plans
5. Give both responses to Claude for comprehensive summary
6. Have a NEW Claude Code agent read and implement the solution

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

Claude can help with more than just code:

- File and document organization
- Obsidian integration through filesystem
- Note analysis and knowledge management
- Similar capabilities to IDE integration

---

## Project Ideas

### Simple Projects

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
Create a full-stack chat application with:

Backend:
- PostgreSQL or MongoDB for storing users and message history
- REST API or GraphQL for user authentication and data fetching
- WebSocket (Socket.io) for real-time messaging
- JWT authentication with secure password hashing
- Rate limiting and input sanitization

Frontend:
- User registration and login with form validation
- Real-time message updates without page refresh
- Online/offline status indicators
- Typing indicators ("User is typing...")
- Message timestamps and read receipts
- Emoji picker and file upload support
- Responsive design for mobile and desktop

Additional requirements:
- Messages load quickly with pagination (load older messages on scroll)
- Implement XSS protection and secure headers
- Deploy backend to Railway/Render and frontend to Vercel/Netlify
- Add rooms/channels feature for group conversations

Design: Modern chat interface similar to Discord or Slack with a sidebar for channels and a main message area.
```

#### Restaurant Reservation System
**Starter Prompt:**
```
Create a full-stack reservation booking system with:

Backend:
- PostgreSQL database with tables for restaurants, reservations, users, and time slots
- RESTful API endpoints for CRUD operations on reservations
- Admin authentication for restaurant owners
- Email notifications for booking confirmations (SendGrid or Nodemailer)
- Availability checking logic to prevent double-booking

Frontend:
- Public-facing restaurant page with photo gallery and menu
- Interactive calendar for selecting date and time
- Real-time availability display (show open slots)
- Booking form with party size, special requests, contact info
- User dashboard to view/modify/cancel reservations
- Admin panel for restaurant owners to manage bookings and table capacity
- Responsive design with mobile-first approach

Additional requirements:
- Implement caching for frequently accessed data (Redis)
- Add search and filter for restaurants by cuisine, location, price range
- SMS reminders 24 hours before reservation (Twilio)
- Handle timezone conversions properly
- Deploy with CI/CD pipeline

Design: Elegant and trustworthy interface similar to OpenTable or Resy with high-quality imagery.
```

#### Interactive Data Visualization Dashboard
**Starter Prompt:**
```
Create a full-stack data analytics dashboard with:

Backend:
- MongoDB or PostgreSQL for storing time-series data
- REST API endpoints for data aggregation and filtering
- Data processing pipeline for calculating metrics and trends
- CSV/JSON import functionality for bulk data upload
- Scheduled jobs for data refresh (cron or queue system)

Frontend:
- Interactive charts using D3.js, Chart.js, or Recharts
- Multiple visualization types: line graphs, bar charts, pie charts, heatmaps
- Date range selector and filtering controls
- Real-time updates via WebSockets for live data streams
- Export data to CSV/PDF functionality
- Customizable dashboard layouts (drag-and-drop widgets)
- Responsive design that works on tablets

Additional requirements:
- Optimize for rendering large datasets (virtualization, aggregation)
- Implement role-based access control (viewer, editor, admin)
- Add data caching layer for performance
- Deploy with auto-scaling capabilities
- Comprehensive error handling and loading states

Design: Professional analytics interface similar to Google Analytics or Tableau with clear data hierarchy and intuitive controls.

Example use case: Sales dashboard for e-commerce, social media analytics, or IoT sensor monitoring.
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

## Extended AI Tools Directory

> **⚠️ Note:** Projects shut down and get acquired frequently. Some tools may no longer exist.

---

### Image Generation & Editing

**Google Nano Banana** - [aistudio.google.com](https://aistudio.google.com/models/gemini-2-5-flash-image)
One of the newest and best image generation and editing models.

**Midjourney** - [midjourney.com](https://www.midjourney.com/)  
Discord-based platform creating high-quality artistic images from text prompts

**DALL-E** - [openai.com/dall-e](https://openai.com/dall-e)  
OpenAI's image generator for detailed images from natural language

**Decohere** - [decohere.ai](https://www.decohere.ai/)  
Generates characters, images, and videos from text and image prompts

**Stability AI** - [stability.ai](https://stability.ai/)  
Creator of Stable Diffusion for multimodal generative AI

**Catbird** - [catbird.ai](https://www.catbird.ai/)  *(Defunct)*
Multi-model generator creating images from 15+ AI models simultaneously

**Leonardo.ai** - [leonardo.ai](https://leonardo.ai/)  
Fine-tuned models for game assets, concept art, and production visuals

**Fooocus** - [GitHub](https://github.com/lllyasviel/Fooocus)  
Open-source Stable Diffusion interface with advanced inpainting

**AUTOMATIC1111** - [GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui)  
Popular web interface for Stable Diffusion with extensive features

**Adobe Express Background Remover** - [adobe.com](https://www.adobe.com/express/feature/ai/image/remove-background)  
Free AI tool for instant background removal with transparent PNG output

---

### Video Generation & Editing

**Runway** - [runwayml.com](https://runwayml.com/)  
Advanced AI video platform with Gen-4 models for text/image-to-video

**Pika** - [pika.art](https://pika.art/)  
AI video generator creating cinematic clips up to 10 seconds

**Adobe Firefly Video** - [firefly.adobe.com](https://firefly.adobe.com/upload/video-generation)  
Text/image-to-video with 1080p output and commercially safe generation

**Hailuo AI** - [hailuoai.video](https://hailuoai.video/)  
Chinese AI video generator creating 5-6 second HD videos

**Google Veo 3** - [deepmind.google](https://deepmind.google/models/veo/)  
Advanced video generation with 8-second clips and synchronized native audio

**Hedra** - [hedra.com](https://www.hedra.com/)  
Specializes in talking avatar generation with realistic lip-sync

**HeyGen** - [heygen.com](https://www.heygen.com/)  
AI avatar platform for professional spokesperson videos

**Synthesia** - [synthesia.io](https://www.synthesia.io/)  
AI presenters for training videos and marketing content

**Switchlight** - [switchlight.beeble.ai](https://www.switchlight.beeble.ai/)  
AI-powered video relighting tool with PBR maps

**Adobe Express Video Background Remover** - [adobe.com](https://www.adobe.com/express/feature/ai/video/remove-background)  
Remove video backgrounds with transparent MP4 output

**VideoBGRemover** - [videobgremover.com](https://videobgremover.com/)  
Professional background removal for videos up to 3 hours

**Innova AI Video Background Removal** - [Hugging Face](https://huggingface.co/spaces/innova-ai/video-background-removal)  
Free background removal and replacement tool

---

### Audio & Music

**Hume** - [hume.com](https://www.hume.ai/)
Text-to-speech and speech-to-speech editor with voice cloning and developer APIS for analyzing emotional expression and generating expressive speech.

**Descript** - [descript.com](https://www.descript.com/)  
All-in-one editor with text to speech, voice cloning, AI transcription and text-based editing

**ElevenLabs** - [elevenlabs.io](https://elevenlabs.io/)  
Advanced AI voice cloning and text-to-speech in 30+ languages

**Suno** - [suno.ai](https://suno.ai/)  
AI music generation with vocals and instruments from text

**Udio** - [udio.com](https://www.udio.com/)  
Professional-quality music tracks from text descriptions

**Adobe Podcast Enhance** - [podcast.adobe.com](https://podcast.adobe.com/en/enhance)  
AI audio enhancement removing background noise

---

### AI Chat & Search

**Perplexity** - [perplexity.ai](https://www.perplexity.ai/)  
AI-powered search with sourced answers and citations

**DeepSeek** - [deepseek.com](https://www.deepseek.com/)  
Chinese open-source AI with powerful reasoning (R1 model)

**Venice.ai** - [venice.ai](https://venice.ai/)  
Privacy-focused uncensored AI with local data storage

**Maple.ai** - [trymaple.ai](https://trymaple.ai/)  
Privacy-focused with end-to-end encryption and confidential computing

**Z.ai Chat** - [chat.z.ai](https://chat.z.ai/)  
Free AI chatbot with presentation generation and multimodal capabilities

---

### AI Infrastructure & Development

**Replicate** - [replicate.com](https://replicate.com/)  
Cloud platform for running open-source AI models via API

**Hugging Face** - [huggingface.co](https://huggingface.co/)  
The GitHub of AI - hub for models, datasets, and applications

**Groq** - [groq.com](https://groq.com/)  
Ultra-fast AI inference with custom LPU chips

**Chutes.ai** - [chutes.ai](https://chutes.ai/)  
Decentralized serverless AI compute platform

---

### 3D & Spatial

**Depth Anything V2** - [GitHub](https://github.com/DepthAnything/Depth-Anything-V2)  
Monocular depth estimation for 3D reconstruction

**Hyper3D (Rodin AI)** - [hyper3d.ai](https://hyper3d.ai/)  
Production-ready 3D models from text or images

**Tripo3D** - [tripo3d.ai](https://www.tripo3d.ai/)  
Fast 3D asset generation in ~10 seconds

**TRELLIS** - [Hugging Face](https://huggingface.co/spaces/JeffreyXiang/TRELLIS)  
Microsoft's 3D generation with Radiance Fields and meshes

**HitPaw 3D (Hitem3D)** - [hitem3d.ai](https://hitem3d.ai/)  
Ultra-high resolution 3D models from single images

**Luma Labs** - [lumalabs.ai](https://lumalabs.ai/)  
Interactive 3D scenes using NeRF and Gaussian Splatting

**Brush** - [GitHub](https://github.com/ArthurBrussee/brush)  
Open-source 3D reconstruction with Gaussian Splatting

**COLMAP** - [colmap.github.io](https://colmap.github.io/)  
Open-source photogrammetry pipeline for 3D reconstruction

**RealityScan** - [realityscan.com](https://www.realityscan.com/)  
Professional photogrammetry by Epic Games

**Postshot** - [jawset.com](https://www.jawset.com/)  
Desktop app for training NeRF and Gaussian Splatting locally

---

### Agentic Browsers
AI-native browsers that autonomously navigate websites, complete tasks, and execute workflows.

**BrowserOS** - [github.com/browseros-ai/BrowserOS](https://github.com/browseros-ai/BrowserOS)
BrowserOS is an open-source chromium fork that runs AI agents natively. Your open-source, privacy-first alternative to ChatGPT Atlas, Perplexity Comet, Dia.

**ChatGPT Atlas** - [chatgpt.com/atlas](https://chatgpt.com/atlas)
ChatGPT in a browser with memory and automation abilities

**Perplexity Comet** - [perplexity.ai/comet](https://www.perplexity.ai/comet)  
AI-first browser with autonomous task execution and integrated search

**Dia Browser** - [diabrowser.com](https://www.diabrowser.com/)  
Tab-aware assistant with Skills system and natural language commands

**Opera Neon** - [operaneon.com](https://www.operaneon.com/)  
Premium agentic browser with Chat, Do, and Make functions ($19.99/month)

**Fellou** - [fellou.ai](https://fellou.ai/)  
Self-driving browser with deep search and agentic memory

**Sigma AI Browser** - [sigmabrowser.com](https://www.sigmabrowser.com)  
Privacy-first with end-to-end encryption and Deep Research mode

---

### Specialized Tools

**ComfyUI** - [comfy.org](https://www.comfy.org/)  
Node-based workflow platform for multiple AI model types

**Cascdr** - [cascdr.xyz](https://cascdr.xyz/)  
Bitcoin Lightning-powered AI workflow platform

**Manus.im** - [manus.im](https://manus.im/)  
Browser-based AI agent platform for autonomous tasks

**Genspark** - [genspark.ai](https://www.genspark.ai/)  
Many AI tools in one chatbot

**Browserbase** - [browserbase.com](https://www.browserbase.com/)  
Developer infrastructure for headless browsers and AI agents

---

## Resources & Support

For more resources, tutorials, and community support, visit the workshop materials repository or reach out through the provided channels.

https://github.com/eisenbruch/vibe-coding-workshops
noaheisenbruch@gmail.com

---

*Last updated: November 9, 2025