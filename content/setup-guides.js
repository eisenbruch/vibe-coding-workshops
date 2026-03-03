const SETUP_GUIDES = {
    'setup-claude-desktop': {
        name: 'Intermediate Setup — Claude Desktop',
        subtitle: 'All-in-one AI assistant with Code mode. Visual interface, no IDE needed.',
        steps: [
            {
                title: 'What Is This?',
                nextLabel: 'Create Your Account',
                content: '<h2>How This Path Works</h2>'
                    + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Claude Desktop is a standalone app that acts as your AI collaborator. In <strong>Code mode</strong>, it works like a full coding agent — reading your project, writing files, and running commands on your computer.</p>'
                    + _cards([
                        { icon: '💬', name: 'You Direct', desc: 'Describe what to build, fix, or change' },
                        { icon: '⚡', name: 'Claude Acts', desc: 'Creates files, runs commands, installs packages' },
                        { icon: '👁️', name: 'You Review', desc: 'See every change in your editor before accepting' },
                        { icon: '🔄', name: 'Iterate', desc: 'Keep prompting — Claude has full project context' },
                    ], { style: 'margin-bottom:24px;' })
                    + _note('Unlike browser-based AI, your projects are saved as files on your computer — ready to deploy, share, or version control with Git.')
            },
            {
                title: 'Create Your Account',
                content: '<h2>Step 1: Create Your Account</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" class="step-link-btn">claude.com/pricing</a></li>'
                    + '<li>Sign up for a <strong>Pro</strong> plan (recommended for the workshop)</li>'
                    + '</ol>'
                    + _tip('Already have a Claude account? Just make sure you\'re on a paid plan — Pro gives you access to Code mode.')
            },
            {
                title: 'Download Claude Desktop',
                content: '<h2>Step 2: Download Claude Desktop</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://claude.com/download" target="_blank" rel="noopener noreferrer" class="step-link-btn">claude.com/download</a></li>'
                    + '<li>Download for your operating system (Mac or Windows)</li>'
                    + '<li>Run the installer</li>'
                    + '<li>Launch Claude Desktop and sign in</li>'
                    + '</ol>'
                    + _tip('Claude Desktop is a separate app from the browser version. You need to download it even if you already use claude.com.')
            },
            {
                title: 'Explore the Interface',
                content: '<h2>Step 3: Explore the Interface</h2>'
                    + '<p>Claude Desktop has three modes — switch between them using the toggle at the top:</p>'
                    + '<div class="path-picker-grid" style="margin:20px 0;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-icon">💬</div><div class="path-card-name">Chat</div><div class="path-card-desc">Conversation — ask questions, brainstorm, get explanations</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-icon">🤝</div><div class="path-card-name">Cowork</div><div class="path-card-desc">Agentic — Claude reads and writes files on your computer</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center; border-color:var(--accent-color);"><div class="path-card-icon">💻</div><div class="path-card-name">Code</div><div class="path-card-desc">Full coding agent — builds projects, runs commands, manages files</div></div>'
                    + '</div>'
                    + _tip('For the workshop, we\'ll use <strong>Code mode</strong>. You describe what you want, Claude builds it — writing real files you can open and run.')
            },
            {
                title: 'Using Code Mode',
                content: '<h2>Step 4: Using Code Mode</h2>'
                    + '<p>Once you\'re in Code mode, there are a few key controls to know:</p>'
                    + '<h3>Sidebar & Sessions</h3>'
                    + '<p>Open the sidebar to see your past conversations. Each session keeps its full context, so you can pick up where you left off. Click <strong>New Chat</strong> to start a fresh session.</p>'
                    + '<h3>Project Folder</h3>'
                    + '<p>Code mode works within a project folder. You can set or change your project folder from the top of the chat — this tells Claude where to read and write files.</p>'
                    + '<h3>Approval Modes</h3>'
                    + '<p>Code mode asks permission before making changes. Click the permissions dropdown to adjust how much autonomy Claude gets:</p>'
                    + _cards([
                        { icon: '✋', name: 'Ask Permissions', desc: 'Always ask before making changes' },
                        { icon: '⚡', name: 'Auto Accept Edits', desc: 'Automatically accept file edits, still asks before running commands' },
                        { icon: '📋', name: 'Plan Mode', desc: 'Create a plan before making changes — good for complex tasks' },
                        { icon: '⚠️', name: 'Bypass Permissions', desc: 'Accepts all permissions — fast but no guardrails' },
                    ], { style: 'margin:16px 0 20px;' })
                    + _tip('Start with <strong>Auto Accept Edits</strong> for the workshop — it\'s a good balance of speed and control. You can always change it later.')
                    + '<h3>Switching Models</h3>'
                    + '<p>Click the model name at the top of the chat to switch between models. Newer models are generally more capable, but different models have different strengths — some are faster, some are better at reasoning, and some handle creative tasks better. Don\'t be afraid to switch if you\'re not getting good results.</p>'
                    + '<h3>Attaching Files</h3>'
                    + '<p>Click the <strong>+</strong> button in the chat input to attach files, or drag and drop them directly into the chat. This is useful for giving Claude screenshots, mockups, or existing code to work from.</p>'
                    + '<h3>Slash Commands</h3>'
                    + '<p>Type <code>/</code> in the chat to see available commands. The most useful one to know:</p>'
                    + '<ul>'
                    + '<li><code>/init</code> — Creates a project instructions file (CLAUDE.md) that tells Claude about your project, so it has context every time you start a new conversation.</li>'
                    + '</ul>'
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 5: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Claude Desktop. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Xcode Command Line Tools (run xcode-select --install first — tell me to click Install on the dialog, then continue installing the other tools while it downloads)\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools will open a dialog — click Install and agree to the license, then it downloads in the background while the other tools are set up.')

            },
            {
                title: 'Install Sourcetree & Connect GitHub',
                content: '<h2>Step 6: Install Sourcetree & Connect GitHub</h2>'
                    + '<p>Sourcetree is a free visual Git client. It makes it easier to see your changes, commit your work, and push to GitHub — without memorizing terminal commands.</p>'
                    + '<h3>1. Create a GitHub Account</h3>'
                    + '<p>If you don\'t already have one, sign up at <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/signup</a> — it\'s free.</p>'
                    + '<h3>2. Install Sourcetree</h3>'
                    + '<h4>Mac</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Open Terminal and run:</li>'
                    + '</ol>'
                    + _term('brew install --cask sourcetree')
                    + '<h4>Windows</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">Sourcetree</a></li>'
                    + '<li>Run the installer</li>'
                    + '</ol>'
                    + _tip('When Sourcetree asks you to sign in to an Atlassian account during setup, you can skip it — it\'s not required.')
                    + '<h3>3. Connect Your GitHub Account</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Launch Sourcetree</li>'
                    + '<li>Go to <strong>Sourcetree → Settings</strong> (Mac) or <strong>Tools → Options</strong> (Windows)</li>'
                    + '<li>Click the <strong>Accounts</strong> tab</li>'
                    + '<li>Click <strong>Add</strong>, select <strong>GitHub</strong> as the host, and sign in</li>'
                    + '</ol>'
            },
            {
                title: 'Set Up Your Project Folder',
                content: '<h2>Step 7: Set Up Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Claude Desktop, click the project folder dropdown below the chat input</li>'
                    + '<li>Click <strong>Choose a project folder</strong> and select the folder you just created</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">Claude can now read and write files in that folder.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 8: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['Claude Pro account', 'Claude Desktop installed', 'Sourcetree installed', 'Project folder ready', 'Developer tools installed (or ready to install later)'])
            }
        ]
    },
    'setup-google-ai-studio': {
        name: 'Beginner Setup — Google AI Studio',
        subtitle: 'Browser-based AI workspace powered by Gemini. No installs required.',
        steps: [
            {
                title: 'What Is This?',
                nextLabel: 'Create Your Account',
                content: '<h2>How This Path Works</h2>'
                    + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Google AI Studio is a free browser-based workspace powered by Gemini. You describe what you want to build, and Gemini generates the code in an online editor where you can preview and edit it.</p>'
                    + _cards([
                        { icon: '💬', name: 'You Describe', desc: 'Tell Gemini what to build in plain language' },
                        { icon: '⚡', name: 'Gemini Builds', desc: 'Code appears in an online editor with a live preview' },
                        { icon: '🔄', name: 'Iterate', desc: 'Ask for changes in follow-up messages and see them update' },
                        { icon: '🚀', name: 'Share or Deploy', desc: 'Share your project or deploy it to a live URL with one click' },
                    ], { style: 'margin-bottom:24px;' })
                    + _note('You can also upload images and existing code to give Gemini more context.')
                    + '<h3>Where This Fits in the Workshop</h3>'
                    + '<p>AI Studio is a powerful tool with direct access to Google\'s AI services — great for quick prototyping and exploration. However, the main workshop workflow uses <strong>Claude Desktop Code mode</strong>, which works with local files so you can test locally, build more complex multi-file projects, and deploy to real hosting providers.</p>'
                    + '<p style="margin-top:12px;">AI Studio is a great option if you want to explore during the workshop without a paid Claude subscription. If you want the full local workflow for free, you can also use <a href="#" onclick="event.preventDefault(); loadRoute(\'setup-gemini-cli\');">Gemini Code Assist</a> in VS Code — though that\'s a more technical setup.</p>'
            },
            {
                title: 'Create Your Account',
                content: '<h2>Step 1: Create Your Account</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" class="step-link-btn">aistudio.google.com</a></li>'
                    + '<li>Sign in with your Google account</li>'
                    + '<li>Click <strong>Build</strong> in the left sidebar</li>'
                    + '</ol>'
            },
            {
                title: 'Explore the Interface',
                content: '<h2>Step 2: Explore the Interface</h2>'
                    + '<p>You\'ll see a chat interface and a gallery of projects. Here\'s what to know:</p>'
                    + '<h3>The Chat</h3>'
                    + '<p>Describe what you want to build in plain language. Gemini generates the code and shows a live preview alongside the chat. Ask for changes in follow-up messages.</p>'
                    + '<h3>Switching Models</h3>'
                    + '<p>Click the model name to switch between models. Newer models are generally more capable, but different models have different strengths — some are faster, some are better at reasoning, and some handle creative tasks better. Don\'t be afraid to switch if you\'re not getting good results.</p>'
                    + '<h3>Gallery & Remixing</h3>'
                    + '<p>You\'ll see project ideas and things other people have built. Explore them for inspiration or <strong>remix</strong> an existing project to use as a starting point for your own.</p>'
                    + '<h3>Attaching Files</h3>'
                    + '<p>You can upload images (screenshots, mockups) and files (existing code) to give Gemini more context about what you want to build.</p>'
                    + '<h3>Sharing & Deploying</h3>'
                    + '<p>When you\'re ready, you can share your project directly or deploy it to a live URL with one click.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 3: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['Google account with AI Studio access', 'Gemini ready to generate code'])
                    + _tip('Gemini is fast and great at generating visual code. Don\'t hesitate to ask for big changes — regenerating is quick.')
            }
        ]
    },
    'setup-antigravity': {
        name: 'Intermediate Setup — Antigravity',
        subtitle: 'Free AI-powered IDE by Google with a built-in agent manager. Works like Claude Desktop.',
        steps: [
            {
                title: 'What Is This?',
                nextLabel: 'Download Antigravity',
                content: '<h2>How This Path Works</h2>'
                    + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Antigravity is a free IDE by Google with a built-in AI agent. You open the Agent Manager, describe what you want to build, and the agent creates and edits files in your project — similar to Claude Desktop\'s Code mode.</p>'
                    + _cards([
                        { icon: '💬', name: 'You Direct', desc: 'Describe what to build, fix, or change' },
                        { icon: '⚡', name: 'Agent Acts', desc: 'Creates files, runs commands, installs packages' },
                        { icon: '👁️', name: 'You Review', desc: 'See every change in your editor before accepting' },
                        { icon: '🔄', name: 'Iterate', desc: 'Keep prompting — the agent has full project context' },
                    ], { style: 'margin-bottom:24px;' })
                    + _note('Unlike browser-based AI, your projects are saved as files on your computer — ready to deploy, share, or version control with Git.')
            },
            {
                title: 'Download Antigravity',
                content: '<h2>Step 1: Download Antigravity</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer" class="step-link-btn">antigravity.google</a></li>'
                    + '<li>Download for your operating system (Mac or Windows)</li>'
                    + '<li>Run the installer</li>'
                    + '<li>Launch Antigravity and sign in with your Google account</li>'
                    + '</ol>'
            },
            {
                title: 'Start Using Gemini',
                content: '<h2>Step 2: Start Using Gemini</h2>'
                    + '<p>Gemini is built into Antigravity — no extension to install. You have two ways to use it:</p>'
                    + '<ul>'
                    + '<li><strong>Agent Chat panel</strong> — a sidebar in the editor. Great for quick tasks while you\'re looking at code.</li>'
                    + '<li><strong>Agent Manager</strong> — a dedicated window just for workspaces and agents, more like Claude Desktop\'s Code mode.</li>'
                    + '</ul>'
                    + '<p>For the workshop, click the <strong>Agent Manager</strong> button in the top toolbar to open it. Here are the key controls to know:</p>'
                    + '<h3>Sidebar: Workspaces, Conversations, and Playground</h3>'
                    + '<p>The sidebar gives you access to your <strong>Workspaces</strong> (project folders), past <strong>Conversations</strong> (each keeps its full context so you can pick up where you left off), and the <strong>Playground</strong> for quick experiments.</p>'
                    + '<h3>Open a New Workspace</h3>'
                    + '<p>Click <strong>Open Workspace</strong> in the sidebar to set or change the folder the agent works in. This tells the agent where to read and write files.</p>'
                    + '<h3>Conversation Modes</h3>'
                    + '<p>The Agent Manager has different conversation modes you can switch between:</p>'
                    + _cards([
                        { icon: '📋', name: 'Planning', desc: 'The agent outlines a plan before making changes — good for complex tasks' },
                        { icon: '⚡', name: 'Fast', desc: 'Skips planning and jumps straight to action — good for quick changes' },
                    ], { style: 'margin:16px 0 20px;' })
                    + '<h3>Switching Models</h3>'
                    + '<p>Click the model name to switch between models. Newer models are generally more capable, but different models have different strengths — some are faster, some are better at reasoning, and some handle creative tasks better. Don\'t be afraid to switch if you\'re not getting good results.</p>'
                    + '<h3>Attaching Files</h3>'
                    + '<p>You can attach files or drag and drop them into the chat to give the agent screenshots, mockups, or existing code to work from.</p>'
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 3: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into the agent manager. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Xcode Command Line Tools (run xcode-select --install first — tell me to click Install on the dialog, then continue installing the other tools while it downloads)\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('The agent will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools will open a dialog — click Install and agree to the license, then it downloads in the background while the other tools are set up.')
            },
            {
                title: 'Install Sourcetree & Connect GitHub',
                content: '<h2>Step 4: Install Sourcetree & Connect GitHub</h2>'
                    + '<p>Sourcetree is a free visual Git client. It makes it easier to see your changes, commit your work, and push to GitHub — without memorizing terminal commands.</p>'
                    + '<h3>1. Create a GitHub Account</h3>'
                    + '<p>If you don\'t already have one, sign up at <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/signup</a> — it\'s free.</p>'
                    + '<h3>2. Install Sourcetree</h3>'
                    + '<h4>Mac</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Open Terminal and run:</li>'
                    + '</ol>'
                    + _term('brew install --cask sourcetree')
                    + '<h4>Windows</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">Sourcetree</a></li>'
                    + '<li>Run the installer</li>'
                    + '</ol>'
                    + _tip('When Sourcetree asks you to sign in to an Atlassian account during setup, you can skip it — it\'s not required.')
                    + '<h3>3. Connect Your GitHub Account</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Launch Sourcetree</li>'
                    + '<li>Go to <strong>Sourcetree → Settings</strong> (Mac) or <strong>Tools → Options</strong> (Windows)</li>'
                    + '<li>Click the <strong>Accounts</strong> tab</li>'
                    + '<li>Click <strong>Add</strong>, select <strong>GitHub</strong> as the host, and sign in</li>'
                    + '</ol>'
            },
            {
                title: 'Set Up Your Project Folder',
                content: '<h2>Step 5: Set Up Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>In the sidebar, click <strong>Open Workspace</strong></li>'
                    + '<li>Create a new folder called <code>workshop-project</code> on your Desktop and select it</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">The agent can now read and write files in that folder.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 6: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['Antigravity installed', 'Agent manager open', 'Sourcetree installed', 'Developer tools installed', 'Project folder ready'])
                    + _tip('Antigravity is free and powered by Gemini. Don\'t hesitate to ask for big changes — regenerating is quick.')
            }
        ]
    },
    'setup-claude-code': {
        name: 'Advanced Setup — Claude Code',
        subtitle: 'AI coding agent in VS Code and the terminal. Full project control.',
        steps: [
            {
                title: 'What Is This?',
                nextLabel: 'Install VS Code',
                content: '<h2>How This Path Works</h2>'
                    + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Claude Code is an AI coding agent that lives inside VS Code or the terminal. It doesn\'t just generate code — it reads your project, edits files, runs commands, and manages dependencies. You direct it like a collaborator.</p>'
                    + _cards([
                        { icon: '💬', name: 'You Direct', desc: 'Describe what to build, fix, or change' },
                        { icon: '⚡', name: 'Claude Acts', desc: 'Creates files, runs commands, installs packages' },
                        { icon: '👁️', name: 'You Review', desc: 'See every change in your editor before accepting' },
                        { icon: '🔄', name: 'Iterate', desc: 'Keep prompting — Claude has full project context' },
                    ], { style: 'margin-bottom:24px;' })
                    + _note('This is the most powerful setup. Claude Code can build multi-file projects, run servers, manage Git, and deploy — all from natural language.')
            },
            {
                title: 'Install VS Code',
                content: '<h2>Step 1: Install VS Code</h2>'
                    + _note('If you don\'t want a paid plan, use <a href="#" onclick="event.preventDefault(); loadRoute(\'setup-gemini-cli\');">Gemini CLI</a> instead — it\'s free and follows a similar workflow.')
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" class="step-link-btn">VS Code</a> for your operating system</li>'
                    + '<li>Run the installer</li>'
                    + '<li>Launch VS Code</li>'
                    + '</ol>'
                    + _tip('Already use Cursor or Antigravity? Those work too — the steps are nearly identical.')
            },
            {
                title: 'Sign Up for Claude',
                content: '<h2>Step 2: Sign Up for Claude</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" class="step-link-btn">claude.com/pricing</a></li>'
                    + '<li>Sign up for <strong>Pro</strong> or <strong>Max</strong></li>'
                    + '</ol>'
                    + _note('Claude Code requires a paid subscription.')
            },
            {
                title: 'Install Claude Code',
                content: '<h2>Step 3: Install Claude Code</h2>'
                    + '<p>Pick whichever feels more comfortable — both connect to the same AI:</p>'
                    + '<h3>Option A: VS Code Extension (recommended to start)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Install the <a href="https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code" target="_blank" rel="noopener noreferrer" class="step-link-btn">Claude Code extension</a> from the marketplace</li>'
                    + '<li>Click the Claude icon in the editor toolbar</li>'
                    + '<li>Sign in when prompted</li>'
                    + '</ol>'
                    + '<h3>Option B: CLI Tool (for advanced users who prefer the terminal)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Follow the <a href="https://code.claude.com/docs/en/setup#native-install-recommended" target="_blank" rel="noopener noreferrer" class="step-link-btn">CLI installation guide</a></li>'
                    + '<li>Right-click an empty space on the editor tab bar (next to your open file tabs) and click <strong>New Terminal</strong></li>'
                    + '<li>Type <code>claude</code> to start</li>'
                    + '</ol>'
                    + _tip('Don\'t want to install it manually? If you set up the extension in Option A (or have Claude Desktop), ask it: <em>"Install the Claude Code CLI tool for me."</em>')
                    + '<p>The CLI is a text-only interface — same AI, same capabilities, just no graphical panel. CLI tools tend to have fewer bugs and get new features before the extensions or desktop apps, since they\'re closer to the core of these projects.</p>'
            },
            {
                title: 'Using Claude Code',
                content: '<h2>Step 4: Using Claude Code</h2>'
                    + '<p>Once Claude Code is open, here are the key controls to know:</p>'
                    + '<h3>Approval Modes</h3>'
                    + '<p>Claude Code asks permission before making changes. You can adjust how much autonomy it gets:</p>'
                    + _cards([
                        { icon: '✋', name: 'Ask Permissions', desc: 'Always ask before making changes' },
                        { icon: '⚡', name: 'Auto Accept Edits', desc: 'Automatically accept file edits, still asks before running commands' },
                        { icon: '📋', name: 'Plan Mode', desc: 'Create a plan before making changes — good for complex tasks' },
                        { icon: '⚠️', name: 'Bypass Permissions', desc: 'Accepts all permissions — fast but no guardrails' },
                    ], { style: 'margin:16px 0 20px;' })
                    + _tip('Start with <strong>Auto Accept Edits</strong> for the workshop — it\'s a good balance of speed and control. In the CLI, press <code>shift + tab</code> to cycle through modes.')
                    + '<h3>File Mentions</h3>'
                    + '<p>Type <code>@</code> to reference a specific file in your project. This helps Claude focus on the right files when you\'re asking about or modifying specific parts of your code.</p>'
                    + '<h3>Attaching Images</h3>'
                    + '<p>Paste or drag screenshots, mockups, or images directly into the chat. Great for showing Claude what you want your UI to look like.</p>'
                    + '<h3>Slash Commands</h3>'
                    + '<p>Type <code>/</code> to see available commands. The extension shows a rich menu — the CLI lists them in the terminal.</p>'
                    + '<h4>Extension</h4>'
                    + '<ul>'
                    + '<li><code>/init</code> — Create a project instructions file (CLAUDE.md) so Claude remembers your project context</li>'
                    + '<li><code>/compact</code> — Summarize the conversation to free up context space</li>'
                    + '</ul>'
                    + '<h4>CLI</h4>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/clear</div><div class="path-card-desc">Start a fresh conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/init</div><div class="path-card-desc">Create a CLAUDE.md project file</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/resume</div><div class="path-card-desc">Pick up a previous conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/compact</div><div class="path-card-desc">Summarize conversation to save context</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/rewind</div><div class="path-card-desc">Undo Claude\'s last action</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/rename</div><div class="path-card-desc">Rename the current conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/cost</div><div class="path-card-desc">See token usage and costs</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/stats</div><div class="path-card-desc">Show session statistics</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/usage</div><div class="path-card-desc">Check your plan usage</div></div>'
                    + '</div>'
                    + '<h3>Keyboard Shortcuts</h3>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">esc</div><div class="path-card-desc">Interrupt Claude while it\'s working</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">↑</div><div class="path-card-desc">Cycle through previous messages</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">shift + tab</div><div class="path-card-desc">Change approval mode</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">@</div><div class="path-card-desc">Mention a file in your project</div></div>'
                    + '</div>'
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 5: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Claude Code. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Xcode Command Line Tools (run xcode-select --install first — tell me to click Install on the dialog, then continue installing the other tools while it downloads)\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools will open a dialog — click Install and agree to the license, then it downloads in the background while the other tools are set up.')
            },
            {
                title: 'Install Sourcetree & Connect GitHub',
                content: '<h2>Step 6: Install Sourcetree & Connect GitHub</h2>'
                    + '<p>Sourcetree is a free visual Git client. It makes it easier to see your changes, commit your work, and push to GitHub — without memorizing terminal commands.</p>'
                    + '<h3>1. Create a GitHub Account</h3>'
                    + '<p>If you don\'t already have one, sign up at <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/signup</a> — it\'s free.</p>'
                    + '<h3>2. Install Sourcetree</h3>'
                    + '<h4>Mac</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Open Terminal and run:</li>'
                    + '</ol>'
                    + _term('brew install --cask sourcetree')
                    + '<h4>Windows</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">Sourcetree</a></li>'
                    + '<li>Run the installer</li>'
                    + '</ol>'
                    + _tip('When Sourcetree asks you to sign in to an Atlassian account during setup, you can skip it — it\'s not required.')
                    + '<h3>3. Connect Your GitHub Account</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Launch Sourcetree</li>'
                    + '<li>Go to <strong>Sourcetree → Settings</strong> (Mac) or <strong>Tools → Options</strong> (Windows)</li>'
                    + '<li>Click the <strong>Accounts</strong> tab</li>'
                    + '<li>Click <strong>Add</strong>, select <strong>GitHub</strong> as the host, and sign in</li>'
                    + '</ol>'
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 7: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Claude Code (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Claude Code ready to go.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 8: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['VS Code installed', 'Claude Code connected', 'Sourcetree installed', 'Project folder ready', 'Developer tools installed'])
            }
        ]
    },
    'setup-gemini-cli': {
        name: 'Advanced Setup — Gemini CLI',
        subtitle: 'Free AI coding agent in VS Code and the terminal. Powered by Gemini.',
        steps: [
            {
                title: 'What Is This?',
                nextLabel: 'Install VS Code',
                content: '<h2>How This Path Works</h2>'
                    + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Gemini CLI is a free AI coding agent that lives inside VS Code or the terminal. It reads your project, edits files, runs commands, and manages dependencies — just like having a developer on your team.</p>'
                    + _cards([
                        { icon: '💬', name: 'You Direct', desc: 'Describe what to build, fix, or change' },
                        { icon: '⚡', name: 'Gemini Acts', desc: 'Creates files, runs commands, installs packages' },
                        { icon: '👁️', name: 'You Review', desc: 'See every change in your editor before accepting' },
                        { icon: '🔄', name: 'Iterate', desc: 'Keep prompting — Gemini has full project context' },
                    ], { style: 'margin-bottom:24px;' })
                    + _note('This is the most powerful free setup. Gemini CLI can build multi-file projects, run servers, manage Git, and deploy — all from natural language.')
            },
            {
                title: 'Install VS Code',
                content: '<h2>Step 1: Install VS Code</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" class="step-link-btn">VS Code</a> for your operating system</li>'
                    + '<li>Run the installer</li>'
                    + '<li>Launch VS Code</li>'
                    + '</ol>'
                    + _tip('Already use Cursor or Antigravity? Those work too — the steps are nearly identical.')
            },
            {
                title: 'Sign Up for Google',
                content: '<h2>Step 2: Sign Up for Google</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="step-link-btn">gemini.google.com</a></li>'
                    + '<li>Sign in with your Google account</li>'
                    + '</ol>'
                    + _tip('Gemini CLI is completely free. No Google account? Create one at <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">accounts.google.com</a>.')
            },
            {
                title: 'Install Gemini Code Assist',
                content: '<h2>Step 3: Install Gemini Code Assist</h2>'
                    + '<p>Pick whichever feels more comfortable — both connect to the same AI:</p>'
                    + '<h3>Option A: VS Code Extension (recommended to start)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Install the <a href="https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist" target="_blank" rel="noopener noreferrer" class="step-link-btn">Gemini Code Assist extension</a> from the marketplace</li>'
                    + '<li>Click the Gemini icon in the sidebar</li>'
                    + '<li>Sign in when prompted</li>'
                    + '</ol>'
                    + _warn('The Gemini extension currently has a buggy UI and workflow. We recommend using the CLI version or Antigravity instead.')
                    + '<h3>Option B: CLI Tool (for advanced users who prefer the terminal)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Follow the installation guide at <a href="https://github.com/google-gemini/gemini-cli" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/google-gemini/gemini-cli</a></li>'
                    + '<li>Right-click an empty space on the editor tab bar (next to your open file tabs) and click <strong>New Terminal</strong></li>'
                    + '<li>Type <code>gemini</code> to start</li>'
                    + '</ol>'
                    + _tip('Don\'t want to install it manually? If you set up the extension in Option A, ask it: <em>"Install the Gemini CLI tool for me."</em>')
                    + '<p>The CLI is a text-only interface — same AI, same capabilities, just no graphical panel. CLI tools tend to have fewer bugs and get new features before the extensions or desktop apps, since they\'re closer to the core of these projects.</p>'
            },
            {
                title: 'Using Gemini',
                content: '<h2>Step 4: Using Gemini</h2>'
                    + '<p>Once Gemini is open, here are the key controls to know:</p>'
                    + '<h3>File Mentions</h3>'
                    + '<p>Type <code>@</code> to reference a specific file in your project. This helps Gemini focus on the right files when you\'re asking about or modifying specific parts of your code.</p>'
                    + '<h3>Attaching Images</h3>'
                    + '<p>Paste or drag screenshots, mockups, or images directly into the chat. Great for showing Gemini what you want your UI to look like.</p>'
                    + '<h3>Slash Commands</h3>'
                    + '<p>Type <code>/</code> to see available commands. The extension shows a rich menu — the CLI lists them in the terminal.</p>'
                    + '<h4>Extension</h4>'
                    + '<ul>'
                    + '<li><code>/init</code> — Create a project instructions file (GEMINI.md) so Gemini remembers your project context</li>'
                    + '<li><code>/compact</code> — Summarize the conversation to free up context space</li>'
                    + '</ul>'
                    + '<h4>CLI</h4>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/clear</div><div class="path-card-desc">Start a fresh conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/init</div><div class="path-card-desc">Create a GEMINI.md project file</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/chat</div><div class="path-card-desc">Save or resume a conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/compact</div><div class="path-card-desc">Summarize conversation to save context</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/rewind</div><div class="path-card-desc">Undo Gemini\'s last action</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/stats</div><div class="path-card-desc">Show session statistics and token usage</div></div>'
                    + '</div>'
                    + '<h3>Keyboard Shortcuts</h3>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">esc</div><div class="path-card-desc">Interrupt Gemini while it\'s working</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">@</div><div class="path-card-desc">Mention a file in your project</div></div>'
                    + '</div>'
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 5: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Gemini. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Xcode Command Line Tools (run xcode-select --install first — tell me to click Install on the dialog, then continue installing the other tools while it downloads)\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Gemini will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools will open a dialog — click Install and agree to the license, then it downloads in the background while the other tools are set up.')
            },
            {
                title: 'Install Sourcetree & Connect GitHub',
                content: '<h2>Step 6: Install Sourcetree & Connect GitHub</h2>'
                    + '<p>Sourcetree is a free visual Git client. It makes it easier to see your changes, commit your work, and push to GitHub — without memorizing terminal commands.</p>'
                    + '<h3>1. Create a GitHub Account</h3>'
                    + '<p>If you don\'t already have one, sign up at <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/signup</a> — it\'s free.</p>'
                    + '<h3>2. Install Sourcetree</h3>'
                    + '<h4>Mac</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Open Terminal and run:</li>'
                    + '</ol>'
                    + _term('brew install --cask sourcetree')
                    + '<h4>Windows</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">Sourcetree</a></li>'
                    + '<li>Run the installer</li>'
                    + '</ol>'
                    + _tip('When Sourcetree asks you to sign in to an Atlassian account during setup, you can skip it — it\'s not required.')
                    + '<h3>3. Connect Your GitHub Account</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Launch Sourcetree</li>'
                    + '<li>Go to <strong>Sourcetree → Settings</strong> (Mac) or <strong>Tools → Options</strong> (Windows)</li>'
                    + '<li>Click the <strong>Accounts</strong> tab</li>'
                    + '<li>Click <strong>Add</strong>, select <strong>GitHub</strong> as the host, and sign in</li>'
                    + '</ol>'
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 7: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Gemini (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Gemini ready to go.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 8: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['VS Code installed', 'Gemini connected', 'Sourcetree installed', 'Project folder ready', 'Developer tools installed'])
                    + _tip('Gemini is extremely fast at generating code and completely free. Don\'t hesitate to ask for big changes — regenerating is quick.')
            }
        ]
    },
    'setup-antigravity-claude': {
        name: 'Advanced Setup — Antigravity + Claude',
        subtitle: 'Claude AI coding agent in Antigravity. Combines Google\'s IDE with Claude\'s capabilities.',
        steps: [
            {
                title: 'What Is This?',
                nextLabel: 'Download Antigravity',
                content: '<h2>How This Path Works</h2>'
                    + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Antigravity is a free IDE by Google that functions similar to VS Code. By adding the Claude extension, you get the same powerful Claude coding agent experience, integrated right into the editor.</p>'
                    + _cards([
                        { icon: '💬', name: 'You Direct', desc: 'Describe what to build, fix, or change' },
                        { icon: '⚡', name: 'Claude Acts', desc: 'Creates files, runs commands, installs packages' },
                        { icon: '👁️', name: 'You Review', desc: 'See every change in your editor before accepting' },
                        { icon: '🔄', name: 'Iterate', desc: 'Keep prompting — Claude has full project context' },
                    ], { style: 'margin-bottom:24px;' })
                    + _note('This setup combines the best of Google\'s IDE capabilities with Claude\'s advanced coding agent.')
            },
            {
                title: 'Download Antigravity',
                content: '<h2>Step 1: Download Antigravity</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer" class="step-link-btn">antigravity.google</a></li>'
                    + '<li>Download for your operating system (Mac or Windows)</li>'
                    + '<li>Run the installer</li>'
                    + '<li>Launch Antigravity and sign in with your Google account</li>'
                    + '</ol>'
            },
            {
                title: 'Sign Up for Claude',
                content: '<h2>Step 2: Sign Up for Claude</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" class="step-link-btn">claude.com/pricing</a></li>'
                    + '<li>Sign up for <strong>Pro</strong> or <strong>Max</strong></li>'
                    + '</ol>'
                    + _note('The Claude extension requires a paid subscription.')
            },
            {
                title: 'Install Claude Code',
                content: '<h2>Step 3: Install Claude Code</h2>'
                    + '<p>Pick whichever feels more comfortable — both connect to the same AI:</p>'
                    + '<h3>Option A: Antigravity Extension (recommended to start)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>In Antigravity, go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)</li>'
                    + '<li>Search for and install the <strong>Claude Code</strong> extension</li>'
                    + '<li>Click the Claude icon in the editor toolbar (top-right of the editor)</li>'
                    + '<li>Sign in when prompted</li>'
                    + '</ol>'
                    + '<h3>Option B: CLI Tool (for advanced users who prefer the terminal)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Follow the <a href="https://code.claude.com/docs/en/setup#native-install-recommended" target="_blank" rel="noopener noreferrer" class="step-link-btn">CLI installation guide</a></li>'
                    + '<li>Right-click an empty space on the editor tab bar (next to your open file tabs) and click <strong>New Terminal</strong></li>'
                    + '<li>Type <code>claude</code> to start</li>'
                    + '</ol>'
                    + _tip('Don\'t want to install it manually? If you set up the extension in Option A (or have Claude Desktop), ask it: <em>"Install the Claude Code CLI tool for me."</em>')
                    + '<p>The CLI is a text-only interface — same AI, same capabilities, just no graphical panel. CLI tools tend to have fewer bugs and get new features before the extensions or desktop apps, since they\'re closer to the core of these projects.</p>'
            },
            {
                title: 'Using Claude Code',
                content: '<h2>Step 4: Using Claude Code</h2>'
                    + '<p>Once Claude Code is open, here are the key controls to know:</p>'
                    + '<h3>Approval Modes</h3>'
                    + '<p>Claude Code asks permission before making changes. You can adjust how much autonomy it gets:</p>'
                    + _cards([
                        { icon: '✋', name: 'Ask Permissions', desc: 'Always ask before making changes' },
                        { icon: '⚡', name: 'Auto Accept Edits', desc: 'Automatically accept file edits, still asks before running commands' },
                        { icon: '📋', name: 'Plan Mode', desc: 'Create a plan before making changes — good for complex tasks' },
                        { icon: '⚠️', name: 'Bypass Permissions', desc: 'Accepts all permissions — fast but no guardrails' },
                    ], { style: 'margin:16px 0 20px;' })
                    + _tip('Start with <strong>Auto Accept Edits</strong> for the workshop — it\'s a good balance of speed and control. In the CLI, press <code>shift + tab</code> to cycle through modes.')
                    + '<h3>File Mentions</h3>'
                    + '<p>Type <code>@</code> to reference a specific file in your project. This helps Claude focus on the right files when you\'re asking about or modifying specific parts of your code.</p>'
                    + '<h3>Attaching Images</h3>'
                    + '<p>Paste or drag screenshots, mockups, or images directly into the chat. Great for showing Claude what you want your UI to look like.</p>'
                    + '<h3>Slash Commands</h3>'
                    + '<p>Type <code>/</code> to see available commands. The extension shows a rich menu — the CLI lists them in the terminal.</p>'
                    + '<h4>Extension</h4>'
                    + '<ul>'
                    + '<li><code>/init</code> — Create a project instructions file (CLAUDE.md) so Claude remembers your project context</li>'
                    + '<li><code>/compact</code> — Summarize the conversation to free up context space</li>'
                    + '</ul>'
                    + '<h4>CLI</h4>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/clear</div><div class="path-card-desc">Start a fresh conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/init</div><div class="path-card-desc">Create a CLAUDE.md project file</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/resume</div><div class="path-card-desc">Pick up a previous conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/compact</div><div class="path-card-desc">Summarize conversation to save context</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/rewind</div><div class="path-card-desc">Undo Claude\'s last action</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/rename</div><div class="path-card-desc">Rename the current conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/cost</div><div class="path-card-desc">See token usage and costs</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/stats</div><div class="path-card-desc">Show session statistics</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/usage</div><div class="path-card-desc">Check your plan usage</div></div>'
                    + '</div>'
                    + '<h3>Keyboard Shortcuts</h3>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">esc</div><div class="path-card-desc">Interrupt Claude while it\'s working</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">↑</div><div class="path-card-desc">Cycle through previous messages</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">shift + tab</div><div class="path-card-desc">Change approval mode</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">@</div><div class="path-card-desc">Mention a file in your project</div></div>'
                    + '</div>'
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 5: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Claude Code. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Xcode Command Line Tools (run xcode-select --install first — tell me to click Install on the dialog, then continue installing the other tools while it downloads)\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes.')
            },
            {
                title: 'Install Sourcetree & Connect GitHub',
                content: '<h2>Step 6: Install Sourcetree & Connect GitHub</h2>'
                    + '<p>Sourcetree is a free visual Git client. It makes it easier to see your changes, commit your work, and push to GitHub — without memorizing terminal commands.</p>'
                    + '<h3>1. Create a GitHub Account</h3>'
                    + '<p>If you don\'t already have one, sign up at <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/signup</a> — it\'s free.</p>'
                    + '<h3>2. Install Sourcetree</h3>'
                    + '<h4>Mac</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Open Terminal and run:</li>'
                    + '</ol>'
                    + _term('brew install --cask sourcetree')
                    + '<h4>Windows</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">Sourcetree</a></li>'
                    + '<li>Run the installer</li>'
                    + '</ol>'
                    + _tip('When Sourcetree asks you to sign in to an Atlassian account during setup, you can skip it — it\'s not required.')
                    + '<h3>3. Connect Your GitHub Account</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Launch Sourcetree</li>'
                    + '<li>Go to <strong>Sourcetree → Settings</strong> (Mac) or <strong>Tools → Options</strong> (Windows)</li>'
                    + '<li>Click the <strong>Accounts</strong> tab</li>'
                    + '<li>Click <strong>Add</strong>, select <strong>GitHub</strong> as the host, and sign in</li>'
                    + '</ol>'
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 7: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Antigravity: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open the Claude Code panel</li>'
                    + '</ol>'
            },
            {
                title: "You're Ready!",
                content: "<h2>Step 8: You're Ready!</h2>"
                    + '<p>Your setup is complete:</p>'
                    + _check(['Antigravity installed', 'Claude Code connected', 'Sourcetree installed', 'Project folder ready', 'Developer tools installed'])
            }
        ]
    },
    'setup-antigravity-gemini': {
        name: 'Advanced Setup — Antigravity + Gemini',
        subtitle: 'Free Gemini AI coding agent in Antigravity. Combines Google\'s IDE with Gemini.',
        steps: [
            {
                title: 'What Is This?',
                nextLabel: 'Download Antigravity',
                content: '<h2>How This Path Works</h2>'
                    + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Antigravity is a free IDE by Google that has a built-in Gemini AI agent. You get a powerful IDE functionality with Gemini\'s fast code generation.</p>'
                    + _cards([
                        { icon: '💬', name: 'You Direct', desc: 'Describe what to build, fix, or change' },
                        { icon: '⚡', name: 'Gemini Acts', desc: 'Creates files, runs commands, installs packages' },
                        { icon: '👁️', name: 'You Review', desc: 'See every change in your editor before accepting' },
                        { icon: '🔄', name: 'Iterate', desc: 'Keep prompting — Gemini has full project context' },
                    ], { style: 'margin-bottom:24px;' })
                    + _note('Using the built-in Gemini Agent Manager is completely free and closely integrated with Antigravity.')
            },
            {
                title: 'Download Antigravity',
                content: '<h2>Step 1: Download Antigravity</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer" class="step-link-btn">antigravity.google</a></li>'
                    + '<li>Download for your operating system (Mac or Windows)</li>'
                    + '<li>Run the installer</li>'
                    + '<li>Launch Antigravity and sign in with your Google account</li>'
                    + '</ol>'
            },
            {
                title: 'Start Using Gemini',
                content: '<h2>Step 2: Start Using Gemini</h2>'
                    + '<p>Gemini is built into Antigravity — no extension to install. You have two ways to use it:</p>'
                    + '<ul>'
                    + '<li><strong>Agent Chat panel</strong> — a sidebar in the editor. Great for quick tasks while you\'re looking at code.</li>'
                    + '<li><strong>Agent Manager</strong> — a dedicated window just for workspaces and agents, more like Claude Desktop\'s Code mode.</li>'
                    + '</ul>'
                    + '<h3>Optional: Also install the CLI</h3>'
                    + '<p>If you prefer the terminal, you can also install the Gemini CLI:</p>'
                    + '<ol class="step-num-list">'
                    + '<li>Follow the installation guide at <a href="https://github.com/google-gemini/gemini-cli" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/google-gemini/gemini-cli</a></li>'
                    + '<li>Right-click an empty space on the editor tab bar (next to your open file tabs) and click <strong>New Terminal</strong></li>'
                    + '<li>Type <code>gemini</code> to start</li>'
                    + '</ol>'
                    + _tip('Don\'t want to install it manually? Ask the Agent Manager: <em>"Install the Gemini CLI tool for me."</em>')
                    + '<p>The CLI is a text-only interface — same AI, same capabilities, just no graphical panel. CLI tools tend to have fewer bugs and get new features before the extensions or desktop apps, since they\'re closer to the core of these projects.</p>'
            },
            {
                title: 'Using Gemini',
                content: '<h2>Step 3: Using Gemini</h2>'
                    + '<p>Once Gemini is open, here are the key controls to know:</p>'
                    + '<h3>File Mentions</h3>'
                    + '<p>Type <code>@</code> to reference a specific file in your project. This helps Gemini focus on the right files when you\'re asking about or modifying specific parts of your code.</p>'
                    + '<h3>Attaching Images</h3>'
                    + '<p>Paste or drag screenshots, mockups, or images directly into the chat. Great for showing Gemini what you want your UI to look like.</p>'
                    + '<h3>Slash Commands</h3>'
                    + '<p>Type <code>/</code> to see available commands. The Agent Manager shows a menu — the CLI lists them in the terminal.</p>'
                    + '<h4>Agent Manager</h4>'
                    + '<ul>'
                    + '<li><code>/init</code> — Create a project instructions file (GEMINI.md) so Gemini remembers your project context</li>'
                    + '<li><code>/compact</code> — Summarize the conversation to free up context space</li>'
                    + '</ul>'
                    + '<h4>CLI</h4>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/clear</div><div class="path-card-desc">Start a fresh conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/init</div><div class="path-card-desc">Create a GEMINI.md project file</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/chat</div><div class="path-card-desc">Save or resume a conversation</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/compact</div><div class="path-card-desc">Summarize conversation to save context</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/rewind</div><div class="path-card-desc">Undo Gemini\'s last action</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">/stats</div><div class="path-card-desc">Show session statistics and token usage</div></div>'
                    + '</div>'
                    + '<h3>Keyboard Shortcuts</h3>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">esc</div><div class="path-card-desc">Interrupt Gemini while it\'s working</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">@</div><div class="path-card-desc">Mention a file in your project</div></div>'
                    + '</div>'
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 4: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into the Gemini Agent Manager. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Xcode Command Line Tools (run xcode-select --install first — tell me to click Install on the dialog, then continue installing the other tools while it downloads)\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('The agent will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools will open a dialog — click Install and agree to the license, then it downloads in the background while the other tools are set up.')
            },
            {
                title: 'Install Sourcetree & Connect GitHub',
                content: '<h2>Step 5: Install Sourcetree & Connect GitHub</h2>'
                    + '<p>Sourcetree is a free visual Git client. It makes it easier to see your changes, commit your work, and push to GitHub — without memorizing terminal commands.</p>'
                    + '<h3>1. Create a GitHub Account</h3>'
                    + '<p>If you don\'t already have one, sign up at <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" class="step-link-btn">github.com/signup</a> — it\'s free.</p>'
                    + '<h3>2. Install Sourcetree</h3>'
                    + '<h4>Mac</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Open Terminal and run:</li>'
                    + '</ol>'
                    + _term('brew install --cask sourcetree')
                    + '<h4>Windows</h4>'
                    + '<ol class="step-num-list">'
                    + '<li>Download <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">Sourcetree</a></li>'
                    + '<li>Run the installer</li>'
                    + '</ol>'
                    + _tip('When Sourcetree asks you to sign in to an Atlassian account during setup, you can skip it — it\'s not required.')
                    + '<h3>3. Connect Your GitHub Account</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Launch Sourcetree</li>'
                    + '<li>Go to <strong>Sourcetree → Settings</strong> (Mac) or <strong>Tools → Options</strong> (Windows)</li>'
                    + '<li>Click the <strong>Accounts</strong> tab</li>'
                    + '<li>Click <strong>Add</strong>, select <strong>GitHub</strong> as the host, and sign in</li>'
                    + '</ol>'
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 6: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Antigravity: <strong>File → Open Folder</strong> → select it</li>'
                    + '</ol>'
            },
            {
                title: "You're Ready!",
                content: "<h2>Step 7: You're Ready!</h2>"
                    + '<p>Your setup is complete:</p>'
                    + _check(['Antigravity installed', 'Gemini Agent open', 'Sourcetree installed', 'Project folder ready', 'Developer tools installed'])
            }
        ]
    }
};
