# Intermediate Setup — Google AI Studio

*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series*

This guide walks you through setting up Google AI Studio for the workshop. AI Studio gives you a powerful chat interface for building with Gemini — completely free.

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Create Your Account -->

## Step 1: Create Your Account

Go to <a href="https://aistudio.google.com" target="_blank">aistudio.google.com</a> and sign in with your Google account.

Google AI Studio is free to use. If you don't have a Google account, create one at <a href="https://accounts.google.com" target="_blank">accounts.google.com</a>.

<!-- wizard-step: 2 | title: Start a New Chat -->

## Step 2: Start a New Chat

1. Click **"New Chat"** or **"Create New"** to start a conversation with Gemini
2. Select the latest Gemini model available (e.g., Gemini 2.5 Pro or similar)

> **Tip:** Use the most capable model available. Newer models are better at understanding what you want and generating working code.

<!-- wizard-step: 3 | title: Explore the Interface -->

## Step 3: Explore the Interface

Google AI Studio gives you a chat interface where you can:

- **Describe what you want to build** — Gemini generates the code
- **Upload images** — Share screenshots, mockups, or inspiration for your design
- **Upload files** — Give Gemini existing code to modify or build on
- **Iterate** — Ask for changes, fixes, or new features in follow-up messages

The workflow is straightforward: describe what you want → copy the generated code → save to a file → open in your browser.

<!-- wizard-step: 4 | title: Set Up Your Project Folder -->

## Step 4: Set Up Your Project Folder

Create a new folder on your computer for the workshop project. You'll save files from AI Studio into this folder as you build.

1. **Mac:** Right-click on your Desktop → New Folder → name it `workshop-project`
2. **Windows:** Right-click on your Desktop → New → Folder → name it `workshop-project`

When Gemini generates code, you'll:
1. Copy the code from the chat
2. Open a text editor (TextEdit on Mac in plain text mode, Notepad on Windows, or VS Code)
3. Paste the code and save with the filename Gemini suggests (e.g., `index.html`)
4. Save it into your `workshop-project` folder

<!-- wizard-step: 5 | title: Install Developer Tools (Optional) -->

## Step 5: Install Developer Tools (Optional)

Since Google AI Studio runs in the browser, it can't install tools for you. These tools are optional for now — you'll need them later if you want to use Git or deploy your project.

If you're comfortable with the terminal, install them now. Otherwise, skip this step and come back later.

**Mac — open Terminal (Applications → Utilities → Terminal) and run:**
```bash
# Install Homebrew (package manager)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install everything else
brew install node git gh
npm install -g firebase-tools
```

**Windows — open PowerShell or Command Prompt:**
1. Download and install <a href="https://nodejs.org" target="_blank">Node.js</a> (LTS version)
2. Download and install <a href="https://git-scm.com" target="_blank">Git</a>
3. Download and install <a href="https://cli.github.com" target="_blank">GitHub CLI</a>
4. Open a new terminal and run: `npm install -g firebase-tools`

> **What are these tools for?**
> - **Node.js/npm** — runs JavaScript and installs packages
> - **Git** — tracks changes to your code (like save points in a game)
> - **gh** — pushes your code to GitHub from the terminal
> - **firebase-tools** — deploys your project to the web (we'll set it up later, just installing for now)
>
> **Don't worry if you skip this.** The group project works without any of these tools. You can always install them later when you need them.

<!-- wizard-step: 6 | title: You're Ready! -->

## Step 6: You're Ready!

Your setup is complete. You have:

- A Google account with access to AI Studio
- Gemini ready to generate code
- A project folder ready to go

> **Tip:** Google AI Studio is excellent for rapid prototyping. Gemini is fast and great at generating visual code. Don't be afraid to ask for major changes — it's easy to regenerate.

Head to the [Group Project](../Group%20Project.md) to start building with the group!

<!-- wizard-end -->
