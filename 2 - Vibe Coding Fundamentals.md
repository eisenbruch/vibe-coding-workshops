# Vibe Coding Fundamentals
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This guide covers what vibe coding is, the tools available, core approaches to working with AI, and essential techniques for building effectively.

---

## What is Vibe Coding?

Vibe coding is using AI to write code for you. Instead of writing every line yourself, you describe what you want in plain language and an AI generates the code, runs commands, and builds your project. The AI uses large language models (LLMs) — the same technology behind ChatGPT and Claude — that have been trained on massive amounts of code and can generate, modify, and debug software based on your instructions.

### What is Prompting?

Prompting is how you communicate with the AI. It's a back-and-forth conversation where you describe what you want, the AI generates code or takes action, and you respond with feedback, corrections, or the next request. This loop is the core of vibe coding:

- **You:** "Create a landing page with a hero section and a signup form."
- **AI:** *generates the HTML, CSS, and JavaScript*
- **You:** "Make the form submit to my email and add a dark theme."
- **AI:** *updates the code with your changes*

Each message you send is a "prompt." The better you describe what you want — with context, specifics, and clear goals — the better the AI's output will be. You don't need to know how to code; you need to know how to describe what you want and evaluate whether the result is right.

### What Can AI Actually Do?

AI coding tools go beyond just generating text. Depending on the tool, they can:

- **Write and edit code** across your entire project
- **Run commands** in your terminal (install packages, start servers, deploy)
- **Read and understand** your existing codebase for context
- **Debug errors** by reading console output and fixing the root cause
- **Create and manage files** — project structure, configs, assets
- **Connect to external tools** (databases, APIs, hosting platforms) through extensions

The AI isn't just autocomplete — it's an agent that can take multi-step actions on your behalf. Your job is to guide it with clear direction and verify the results.

---

## Vibe Coding Tools

Choosing the right tool depends on your experience, what you're building, and how much setup you want. This guide covers the main categories — see the [AI Tools Directory](AI%20Tools%20Directory.md) for a full catalog.

---

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

> **Tip:** Start here to test ideas and learn prompting. When you're ready for real projects, move to intermediate or advanced tools.

---

### Intermediate: Desktop Applications
*All-in-one AI assistants with GUI interfaces and agentic capabilities* \
*Best for beginners, non-developers, and quick projects without terminal or IDE experience*

**Desktop Applications:**
- **<a href="https://claude.ai/download" target="_blank">Claude Desktop</a>** - Three modes: Chat (conversation), Cowork (agentic file automation), and Code (full coding agent on cloud VMs)
- **<a href="https://openai.com/chatgpt/desktop" target="_blank">ChatGPT Desktop</a>** - Singular Chat mode, not as powerful as Claude Desktop. The following Pros/Limitations do not apply to ChatGPT Desktop.

**✅ Pros:**
- Full coding capabilities without terminal experience
- Claude Cowork automates non-coding tasks (organize files, create spreadsheets from screenshots, draft reports)
- Claude Code can edit code that is local (on your computer) or in the cloud (GitHub)
- Extensions (MCP servers) and Connectors to add data from your accounts, use other apps, get access to additional knowledge, and extend it's capabilities in other ways
- All-in-one interface: "Chat for thinking, Cowork for doing, Code for building"

**❌ Limitations:**
- Less suited for developing and testing large projects

> **Tip:** Claude Desktop is ideal for research, quick prototypes, and non-coding file tasks. When you need full development environment for testing and deploying your projects, move to IDE/CLI tools.

---

### Advanced: IDEs with AI Extensions & CLI (Command Line Interface) Tools
*Professional development environments running on your local machine* \
*Best for developing full projects, testing, and deploying*

**AI Coding Tools:**

*All tools support full codebase understanding, git integration, MCP servers, and more* \
*They are available as both VS Code extensions (chat interface) and standalone CLI tools (terminal interface)*

- **<a href="https://claude.ai/code" target="_blank">Claude Code</a>** - Recommended for best overall quality and speed, especially for large projects
- **<a href="https://chatgpt.com/codex" target="_blank">ChatGPT Codex</a>** - Better at problem-solving with tricky bugs, but slower overall
- **<a href="https://codeassist.google" target="_blank">Gemini Code Assist</a>** - Recently updated with major improvements, great free option to get started

**IDEs:**
- **<a href="https://code.visualstudio.com" target="_blank">VS Code</a>**
- **<a href="https://cursor.com" target="_blank">Cursor</a>** - based on VS Code
- **<a href="https://antigravity.google" target="_blank">Google Antigravity</a>** - based on VS Code

**✅ Pros:**
- Explore and edit your code while your agents work
- Best for large refactoring and complex features
- Best for testing and deploying
- Deep git integration
- Custom commands and workflows
- MCP server support for extended capabilities
- Professional development environment

**❌ Limitations:**
- More setup and configuration
- Steeper learning curve
- Requires terminal comfort (for CLI tools)

> **When to use IDE/CLI vs Desktop:** Choose IDE/CLI if you've moved beyond the simple prototype phase and need to start adding complex features, testing, and deploying.

> **Tip:** Use Git version control! These tools make it easy to track changes, experiment safely, and collaborate professionally.

> **Learn More:** See [Advanced Techniques](Advanced%20Techniques.md) for commands and advanced techniques.

> **Learn More:** See the [AI Tools Directory](AI%20Tools%20Directory.md) for more specialized vibe coding platforms, web-hosted autonomous agents, and more.

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

> **Tip:** These platforms are perfect for quickly building and sharing projects without worrying about deployment. Use them alongside other tools depending on your needs.

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

**Example:** <a href="https://nerktendo.com/" target="_blank">Nerktendo</a>

**How it works:** Start broad, refine through back-and-forth conversation

**✅ Pros:**
- Great for exploring possibilities and experimenting
- Sparks creative directions you wouldn't think of
- Lower barrier to starting

**❌ Cons:**
- Takes more back-and-forth
- May drift from original vision
- Can be difficult to guide refinement with minimal info

#### Approach 2: Comprehensive Brief → Execute

**Example:** <a href="https://nerktendo.com/domainflip" target="_blank">DomainFlip</a>

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

> **Pro Tip:** Use an AI chatbot (not coding assistant) to plan your project in detail, then feed that plan to an AI coding agent. DomainFlip was created with only 1 Claude Code prompt, but it was fed 8 different multi page documents outlining the entire project in extreme detail.

> **Bonus:** Read through the [DomainFlip summary and build documents](docs/domainflip/domainflip_summary.md)

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
