# Intermediate Setup — Google AI Studio

*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series*

---

<!-- wizard-start -->
<!-- wizard-step: 1 | title: Create Your Account -->

## Step 1: Create Your Account

1. Go to <a href="https://aistudio.google.com" target="_blank">aistudio.google.com</a>
2. Sign in with your Google account

> **Tip:** Google AI Studio is completely free. No Google account? Create one at <a href="https://accounts.google.com" target="_blank">accounts.google.com</a>.

<!-- wizard-step: 2 | title: Start a New Chat -->

## Step 2: Start a New Chat

1. Click **"New Chat"** or **"Create New"**
2. Select the latest Gemini model available (e.g., Gemini 2.5 Pro)

> **Tip:** Always use the most capable model available — newer models write better code.

<!-- wizard-step: 3 | title: How It Works -->

## Step 3: How It Works

Google AI Studio gives you a chat interface where you:

1. **Describe** what you want to build — Gemini generates the code
2. **Copy** the generated code into a file
3. **Open** the file in your browser to see it
4. **Iterate** — ask for changes in follow-up messages

> **Note:** You can also upload images (screenshots, mockups) and files (existing code) to give Gemini more context.

<!-- wizard-step: 4 | title: Set Up Your Project Folder -->

## Step 4: Set Up Your Project Folder

1. Create a folder called `workshop-project` on your Desktop
2. When Gemini generates code, copy it from the chat
3. Paste into a text editor (TextEdit, Notepad, or VS Code)
4. Save with the filename Gemini suggests (e.g., `index.html`) into your folder

<!-- wizard-step: 5 | title: Install Developer Tools (Optional) -->

## Step 5: Install Developer Tools (Optional)

Since AI Studio runs in the browser, it can't install tools for you. These are optional — you'll need them later for Git and deployment.

**Mac** — open Terminal and run:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node git gh
npm install -g firebase-tools
```

**Windows** — download and install:
1. <a href="https://nodejs.org" target="_blank">Node.js</a> (LTS version)
2. <a href="https://git-scm.com" target="_blank">Git</a>
3. <a href="https://cli.github.com" target="_blank">GitHub CLI</a>
4. Then run: `npm install -g firebase-tools`

> **Warning:** Not comfortable with the terminal? Skip this step entirely. The group project works without these tools — you can always install them later.

<!-- wizard-step: 6 | title: You're Ready! -->

## Step 6: You're Ready!

Your setup is complete:

- ✅ Google account with AI Studio access
- ✅ Gemini ready to generate code
- ✅ Project folder ready

> **Tip:** Gemini is fast and great at generating visual code. Don't hesitate to ask for big changes — regenerating is quick.

Head to the [Group Project](../Group%20Project.md) to start building with the group!

<!-- wizard-end -->
