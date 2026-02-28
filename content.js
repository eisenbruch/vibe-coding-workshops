// ── Workshop Content ─────────────────────────────────────────
// Guide data, project lists, and content helper functions.
// Loaded after config.js, before pages.js.

const WELCOME_PROJECTS = [
    { name: "Glitch QR", icon: "📱", url: "https://github.com/eisenbruch/glitch-qr", type: "QR Code Tool", learning: "Simple tools in minutes" },
    { name: "Snark AI", icon: "📧", url: "https://snark-ai.com", type: "AI Email Service", learning: "Full services & websites" },
    { name: "Nerktendo", icon: "🎮", url: "https://nerktendo.com", type: "Retro Portfolio", learning: "Try different AI tools" },
    { name: "LinkPee", icon: "🔗", url: "https://linkp.ee", type: "Link-in-Bio Service", learning: "Complex features work" },
    { name: "Weather Worsener", icon: "🌧️", url: "https://nerktendo.com/weather-worsener", type: "Interactive Game", learning: "Fun iterative projects" },
    { name: "DomainFlip", icon: "💰", url: "https://nerktendo.com/domainflip", type: "Startup Demo", learning: "Vision + context = polish" },
    { name: "TrafficVision", icon: "🗺️", url: "https://trafficvision.live", type: "Map & Database", learning: "AI needs guidance at scale" },
];

// ── Content Helpers ──────────────────────────────────────────
function _tip(t) { return '<div class="step-callout tip"><span class="step-callout-icon">💡</span><div class="step-callout-body">' + t + '</div></div>'; }
function _note(t) { return '<div class="step-callout note"><span class="step-callout-icon">📝</span><div class="step-callout-body">' + t + '</div></div>'; }
function _warn(t) { return '<div class="step-callout warning"><span class="step-callout-icon">⚠️</span><div class="step-callout-body">' + t + '</div></div>'; }
function _term(code) { return '<div class="step-terminal"><pre><code>' + code + '</code></pre></div>'; }
function _check(items) { return '<ul class="step-checklist">' + items.map(function (t) { return '<li><span class="step-checklist-icon">✅</span><span>' + t + '</span></li>'; }).join('') + '</ul>'; }
function _cards(items, opts) {
    opts = opts || {};
    var style = opts.style || '';
    var html = '<div class="path-picker-grid"' + (style ? ' style="' + style + '"' : '') + '>';
    items.forEach(function (item) {
        if (item.url) {
            html += '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer" class="path-card" style="text-decoration:none; cursor:pointer;">';
        } else if (item.route) {
            html += '<div class="path-card" onclick="loadRoute(\'' + item.route + '\')" tabindex="0" role="button">';
        } else {
            html += '<div class="path-card" style="cursor:default; text-align:center;">';
        }
        html += '<div class="path-card-icon">' + item.icon + '</div>';
        html += '<div class="path-card-name">' + item.name + '</div>';
        if (item.tools) html += '<div class="path-card-tools">' + item.tools + '</div>';
        html += '<div class="path-card-desc">' + item.desc + '</div>';
        html += item.url ? '</a>' : '</div>';
    });
    html += '</div>';
    return html;
}

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
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 5: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Claude Desktop. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n- Xcode Command Line Tools (install this last — it can take a while)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools in particular can take a while to download.')

            },
            {
                title: 'Set Up Your Project Folder',
                content: '<h2>Step 6: Set Up Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Claude Desktop, click the project folder dropdown below the chat input</li>'
                    + '<li>Click <strong>Choose a project folder</strong> and select the folder you just created</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">Claude can now read and write files in that folder.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 7: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['Claude Pro account', 'Claude Desktop installed', 'Project folder ready', 'Developer tools installed (or ready to install later)'])
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
                    + '<p>Here are the key controls to know:</p>'
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
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n- Xcode Command Line Tools (install this last — it can take a while)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('The agent will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools in particular can take a while to download.')
            },
            {
                title: 'Set Up Your Project Folder',
                content: '<h2>Step 4: Set Up Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>In the sidebar, click <strong>Open Workspace</strong></li>'
                    + '<li>Create a new folder called <code>workshop-project</code> on your Desktop and select it</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">The agent can now read and write files in that folder.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 5: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['Antigravity installed', 'Agent manager open', 'Developer tools installed', 'Project folder ready'])
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
                title: 'Install Developer Tools',
                content: '<h2>Step 4: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Claude Code. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n- Xcode Command Line Tools (install this last — it can take a while)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools in particular can take a while to download.')
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 5: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Claude Code (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Claude Code ready to go.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 6: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['VS Code installed', 'Claude Code connected', 'Project folder ready', 'Developer tools installed'])
                    + '<h3 style="margin-top:24px;">Quick Reference</h3>'
                    + '<div class="path-picker-grid" style="margin-top:12px;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">claude</div><div class="path-card-desc">Start Claude in your terminal</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">shift + tab</div><div class="path-card-desc">Change modes (planning, accept edits, permissions)</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">@</div><div class="path-card-desc">Mention a file in your project</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-name" style="font-family:monospace;">esc</div><div class="path-card-desc">Interrupt Claude while it\'s working</div></div>'
                    + '</div>'
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
                title: 'Install Developer Tools',
                content: '<h2>Step 4: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Gemini. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n- Xcode Command Line Tools (install this last — it can take a while)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Gemini will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools in particular can take a while to download.')
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 5: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Gemini (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Gemini ready to go.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 6: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['VS Code installed', 'Gemini connected', 'Project folder ready', 'Developer tools installed'])
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
                title: 'Install Developer Tools',
                content: '<h2>Step 4: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into Claude Code. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n- Xcode Command Line Tools (install this last — it can take a while)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes.')
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 5: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Antigravity: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open the Claude Code panel</li>'
                    + '</ol>'
            },
            {
                title: "You're Ready!",
                content: "<h2>Step 6: You're Ready!</h2>"
                    + '<p>Your setup is complete:</p>'
                    + _check(['Antigravity installed', 'Claude Code connected', 'Project folder ready', 'Developer tools installed'])
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
                title: 'Install Developer Tools',
                content: '<h2>Step 3: Install Developer Tools</h2>'
                    + '<p>Paste the prompt for your operating system into the Gemini Agent Manager. It will install what it can automatically, but some tools require you to follow manual steps (like downloading an installer or clicking through a setup wizard). Read its instructions carefully, and if anything is unclear, ask it to explain with simple step-by-step instructions anyone can follow.</p>'
                    + '<h3>Mac</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n- Xcode Command Line Tools (install this last — it can take a while)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + '<h3>Windows</h3>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Node.js and npm (give me the exact download link for the prebuilt Windows installer and instructions to install it)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('The agent will ask permission to run commands — say yes. This may take a few minutes. Xcode Command Line Tools in particular can take a while to download.')
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 4: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Antigravity: <strong>File → Open Folder</strong> → select it</li>'
                    + '</ol>'
            },
            {
                title: "You're Ready!",
                content: "<h2>Step 5: You're Ready!</h2> "
                    + '<p>Your setup is complete:</p>'
                    + _check(['Antigravity installed', 'Gemini Agent open', 'Project folder ready', 'Developer tools installed'])
            }
        ]
    }
};

const GROUP_PROJECT_OPTIONS = [
    { letter: 'A', name: 'Personality Quiz', icon: '🧠', desc: '"Would You Rather" quiz with personality types, progress bar, and animations' },
    { letter: 'B', name: 'Portfolio Page', icon: '🎨', desc: 'Personal portfolio with hero, projects, skills, and contact sections' },
    { letter: 'C', name: 'Browser Game', icon: '🎮', desc: 'Reaction-time game with scoreboard, difficulty levels, and visual feedback' },
    { letter: 'D', name: 'Your Own Idea', icon: '💡', desc: 'Write your own prompt for any single-page project — a tool, game, or visualizer' },
];

// ── Beginner Guide ──────────────────────────────────────────
const BEGINNER_GUIDE = {
    name: 'Beginner: Quick Start',
    subtitle: 'The fastest way to start vibe coding — no installs, no setup, no code.',
    steps: [
        {
            title: 'What Is This?',
            nextLabel: 'Pick a Tool',
            content: '<h2>The Simplest Way to Start Building</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Describe what you want in a chat window. The AI builds it right in your browser. No downloads, no code editors, no terminal — just a conversation.</p>'
                + _cards([
                    { icon: '💬', name: 'Describe', desc: '"Make me a quiz" or "Build a countdown timer"' },
                    { icon: '⚡', name: 'See It Appear', desc: 'A working preview shows up right in the chat' },
                    { icon: '🔄', name: 'Iterate', desc: '"Make it dark mode" or "Add a score counter"' },
                ], { style: 'margin:0 0 28px;' })
                + '<h3>What You Can Create</h3>'
                + _cards([
                    { icon: '🧮', name: 'Calculators & Tools', desc: 'Timers, converters, trackers' },
                    { icon: '🧠', name: 'Quizzes & Games', desc: 'Trivia, puzzles, simple games' },
                    { icon: '🎨', name: 'Visual Demos', desc: 'Animations, art, simulations' },
                    { icon: '📄', name: 'Landing Pages', desc: 'Portfolios, resumes, promo pages' },
                ], { style: 'margin-bottom:24px;' })
                + _note('These creations live in the chat session — they\'re not saved as files on your computer. For real projects with version control and deployment, check out the <a href="#" onclick="event.preventDefault(); loadRoute(\'pick-your-path\');">Intermediate or Advanced paths</a>.')
        },
        {
            title: 'Pick a Tool',
            nextLabel: 'Try It Now',
            content: '<h2>Pick a Tool</h2>'
                + '<p class="path-picker-subtitle">Open either of these in your browser — they both work the same way. Pick whichever you prefer.</p>'
                + _cards([
                    { name: 'Claude', icon: '💬', url: 'https://claude.com', desc: 'Generates an interactive <strong>artifact</strong> — see and use it right in the chat' },
                    { name: 'Gemini', icon: '✨', url: 'https://gemini.google.com', desc: 'Generates code with a <strong>preview</strong> panel alongside the chat' },
                ], { style: 'margin-bottom:16px;' })
                + _tip('Both are free to start. You can always switch later — the prompts work the same way in either tool.')
        },
        {
            title: 'Try It Now',
            content: '<h2>Try It Now</h2>'
                + '<p class="path-picker-subtitle">Paste this into your chosen tool and watch it build.</p>'
                + _term('Create an interactive color palette generator. Let me click a button to generate 5 random harmonious colors, show the hex codes, and let me click any color to copy its code. Make it visually clean with a dark background.')
                + _note('<strong>Gemini users:</strong> Click the <strong>Tools</strong> button in the chat window and enable <strong>Canvas</strong> — this is what lets Gemini show you a live preview.')
                + '<p style="margin-top:16px;">Then try asking for changes:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>"Add a gradient preview"</li>'
                + '<li>"Make the colors pastel"</li>'
                + '<li>"Add a dark/light mode toggle"</li>'
                + '</ul>'
                + _tip('This back-and-forth is the core loop. The more specific your feedback, the better the result.')
        },
        {
            title: 'What\'s Next?',
            content: '<p class="path-picker-subtitle">You\'re set up and ready to go. Where would you like to go next?</p>'
        }
    ]
};

// ── Group Project Guide ─────────────────────────────────────
const GROUP_PROJECT_GUIDE = {
    name: 'Group Project',
    subtitle: 'Build a real project together using the vibe coding workflow: prompt, test, iterate, commit.',
    lastStepCards: [
        { icon: '🧠', name: 'Vibe Coding Techniques', desc: 'Prompting strategies and core techniques', route: 'Vibe Coding Techniques.md' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Project ideas, Git, GitHub, and the build cycle', route: 'Solo Project Guide.md' },
        { icon: '🔥', name: 'Firebase & Deployment', desc: 'Deploy your project to a real URL', route: 'Firebase %26 Deployment.md' },
        { icon: '⚡', name: 'Advanced Techniques', desc: 'Agents, skills, MCP servers, and more', route: 'Advanced Techniques.md' },
    ],
    steps: [
        {
            title: 'Open Your AI Tool',
            nextLabel: 'Pick a Project',
            content: '<h2>Step 1: Open Your AI Tool</h2>'
                + '<p>Open the AI tool you set up during installation:</p>'
                + _cards([
                    { icon: '<img src="images/icons/claude.svg" alt="Claude">', name: 'Claude Desktop', desc: 'Launch the app, switch to Code mode, point it at your project folder' },
                    { icon: '<img src="images/icons/antigravity.png" alt="Antigravity">', name: 'Antigravity', desc: 'Open the Agent Chat panel, Agent Manager, or a CLI AI agent in the terminal' },
                    { icon: '<img src="images/icons/vscode.svg" alt="VS Code">', name: 'VS Code', desc: 'Open your AI extension (Claude or Gemini) or a CLI AI agent in the terminal' },
                ], { style: 'margin:20px 0;' })
                + _note('Make sure your tool is pointed at your project folder — that\'s where the AI will create files.')
        },
        {
            title: 'Pick a Project',
            nextLabel: 'Let the Agent Build It',
            content: '<h2>Step 2: Pick a Project &amp; Write Your First Prompt</h2>'
                + '<p>Pick one of the project options below and paste the prompt into your AI tool. Feel free to tweak it — change the theme, swap details, make it yours.</p>'
                + (function () {
                    var h = '<div class="path-picker-grid" style="margin:20px 0;">';
                    GROUP_PROJECT_OPTIONS.forEach(function (opt) {
                        h += '<div class="path-card" style="cursor:default; text-align:center;">';
                        h += '<div class="path-card-icon">' + opt.icon + '</div>';
                        h += '<div class="path-card-name">Option ' + opt.letter + ': ' + opt.name + '</div>';
                        h += '<div class="path-card-desc">' + opt.desc + '</div>';
                        h += '</div>';
                    });
                    h += '</div>';
                    return h;
                })()
                + '<h3>Option A: "Would You Rather" Personality Quiz</h3>'
                + _term('Create a single HTML file for a "Would You Rather" personality quiz. Include:\n- A fun, colorful design with animations\n- 8 "would you rather" questions with two choices each (e.g., "Would you rather explore a deep cave or climb a tall mountain?")\n- Track the user\'s choices and calculate a personality type at the end\n- Show 4 possible personality types with fun descriptions and emoji\n- Include a progress bar showing how far through the quiz they are\n- Make it mobile-friendly')
                + '<h3>Option B: Personal Portfolio / Landing Page</h3>'
                + _term('Create a single HTML file for a personal portfolio page. Include:\n- A hero section with my name, a short bio, and a profile image placeholder\n- A section showcasing 3-4 projects (use placeholder content)\n- A skills or interests section with visual tags or icons\n- A contact section with links (email, GitHub, LinkedIn — use placeholder URLs)\n- Smooth scroll navigation between sections\n- A clean, modern design with good typography — make it mobile-friendly')
                + '<h3>Option C: Simple Browser Game</h3>'
                + _term('Create a single HTML file for a simple reaction-time game. Include:\n- A start screen with instructions\n- The game: a shape appears at a random time and position, the player clicks it as fast as they can\n- Track and display their reaction time in milliseconds\n- Keep a running scoreboard of their best 5 times\n- Add difficulty levels (easy = bigger shape and longer wait, hard = smaller and faster)\n- Fun visual feedback on click (animations, color changes)\n- Make it mobile-friendly')
                + '<h3>Option D: Pick Your Own</h3>'
                + '<p>Have a different idea? Go for it. Write your own prompt describing a single-page project — a tool, a game, a visualizer, anything. As long as it produces a single HTML file, the rest of the steps work the same.</p>'
                + _tip('Be specific about what the user sees and does. Include details about the design (colors, layout, animations). Ask for mobile-friendly (if it is needed for your project). Start simple — you\'ll iterate and add features in later steps.')
        },
        {
            title: 'Let the Agent Build It',
            nextLabel: 'Test Your Project',
            content: '<h2>Step 3: Let the Agent Build It</h2>'
                + '<p>Before you paste your prompt, set your agent to work autonomously so it can create files without asking permission for every change:</p>'
                + '<ul>'
                + '<li><strong>Claude Desktop:</strong> Set permissions to <strong>Auto Accept Edits</strong></li>'
                + '<li><strong>Antigravity Agent Manager:</strong> The agent creates files automatically — no changes needed</li>'
                + '<li><strong>VS Code extensions:</strong> Set permissions to <strong>Auto Accept Edits</strong> or equivalent</li>'
                + '<li><strong>CLI agents:</strong> Press <code>shift+tab</code> to switch to <strong>Auto Accept Edits</strong></li>'
                + '</ul>'
                + '<p style="margin-top:16px;">Now paste your prompt, hit <strong>Enter</strong> to send it, and watch the agent work.</p>'
                + '<p style="margin-top:12px;">The agent may enter <strong>planning mode</strong> automatically — creating a plan document and asking you questions about what you want before it starts building. You can also intentionally put it into plan mode if you want to think things through first. Or it may just start writing files directly into your project folder. Either way is fine.</p>'
                + '<p style="margin-top:12px;">If it asks questions or requests permission to do anything, answer and grant it permission.</p>'
        },
        {
            title: 'Test Your Project',
            nextLabel: 'Polish the Design',
            content: '<h2>Step 4: Test Your Project</h2>'
                + '<p>Ask your agent to start a <strong>local web server</strong> so you can test your project in the browser. A local web server runs on your computer and serves your files just like a real website would — this is how developers test their work before deploying it.</p>'
                + '<p style="margin-top:12px;">Try a prompt like:</p>'
                + _term('Start a local web server so I can preview my project in the browser. Give me the URL to open.')
                + '<p style="margin-top:12px;">The agent will start a server and give you a URL (usually something like <code>http://localhost:8000</code>). Click the link or copy-paste it into your browser to see your project.</p>'
                + '<p style="margin-top:12px;">Try the whole thing — click through every feature and see how it works. Take a moment to note anything you\'d want to change:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>Does the layout look good?</li>'
                + '<li>Do interactions feel smooth?</li>'
                + '<li>Is anything missing or broken?</li>'
                + '<li>What would make it better?</li>'
                + '</ul>'
                + _tip('Something looks wrong or doesn\'t work? That\'s not a failure — that\'s the workflow. You now have something specific to tell the AI to fix. Identifying problems and describing them clearly is the core skill of vibe coding.')
        },
        {
            title: 'Polish the Design',
            nextLabel: 'Add More Content',
            content: '<h2>Step 5: Iterate #1 — Polish the Design</h2>'
                + '<p>Time to improve. Go back to your AI tool and paste a prompt like this:</p>'
                + _term('Make the project look more polished:\n- Add smooth transitions and animations\n- Improve the color scheme and typography\n- Make buttons and interactions more satisfying (hover effects, click feedback)\n- Add subtle visual details that make it feel professional')
                + '<p style="margin-top:16px;">After the agent updates your code, go back to your browser to see the changes. If it doesn\'t update automatically, refresh the page. Test the whole thing again to make sure nothing broke.</p>'
                + '<p style="margin-top:12px;">Does it look better? Tell the AI what you like ("the transitions are great") and what to change ("the colors are too bright, tone it down"). Be specific — the more precise your feedback, the better the result.</p>'
        },
        {
            title: 'Add More Content',
            nextLabel: 'Introduce Git',
            content: '<h2>Step 6: Iterate #2 — Add More Content</h2>'
                + '<p>Let\'s make the project more substantial. Tell the AI to add more content and depth. Some ideas depending on your project:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li><strong>Quiz:</strong> "Expand to 10 questions, add 6 personality types with detailed descriptions and a trait breakdown"</li>'
                + '<li><strong>Portfolio:</strong> "Add a testimonials section, a timeline of experience, and smooth parallax scrolling"</li>'
                + '<li><strong>Game:</strong> "Add a countdown mode, particle effects on click, and a high score leaderboard"</li>'
                + '<li><strong>Your own:</strong> "Add more features, content, or sections — make it feel complete"</li>'
                + '</ul>'
                + _term('Add more content and depth to the project:\n- Expand the main feature with more detail and variety\n- Add at least one new section or feature\n- Include more visual polish (icons, illustrations, or decorative elements)\n- Make the overall experience feel more complete and satisfying')
                + '<p style="margin-top:16px;">Save, refresh, test. Go through the whole thing again. If anything feels off, tell the AI exactly what to change.</p>'
        },
        {
            title: 'Introduce Git',
            nextLabel: 'View Your History in SourceTree',
            content: '<h2>Step 7: Introduce Git — Save Your Progress</h2>'
                + '<p>You now have a working project that you like. Before we change anything else, let\'s save this checkpoint.</p>'
                + '<p style="margin-top:12px;"><strong>Git</strong> creates save points (called <strong>commits</strong>) in your project\'s history. If you ever break something, you can go back to a working version. Think of it as a save file in a video game.</p>'
                + '<p style="margin-top:12px;">Tell your agent:</p>'
                + _term('Initialize a git repository in this folder and create an initial commit with all my files')
                + '<p style="margin-top:16px;">The agent will set up Git and save a snapshot of your current project.</p>'
        },
        {
            title: 'View Your History in SourceTree',
            nextLabel: 'Make It Yours',
            content: '<h2>Step 8: View Your History in SourceTree</h2>'
                + '<p><a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer">SourceTree</a> is a free app that lets you visualize your Git history. Here\'s how to load your project:</p>'
                + '<ol class="step-num-list">'
                + '<li>Download and install <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">SourceTree</a> if you haven\'t already</li>'
                + '<li>Open SourceTree and click <strong>New</strong> → <strong>Add Existing Local Repository</strong></li>'
                + '<li>Browse to your project folder and select it</li>'
                + '<li>You\'ll see your first commit — a snapshot of everything you\'ve built so far</li>'
                + '</ol>'
                + _tip('As you keep working and making commits, SourceTree shows a visual timeline of every change. If something breaks, you can see exactly when it happened and go back.')
        },
        {
            title: 'Make It Yours',
            nextLabel: 'Show &amp; Tell',
            content: '<h2>Step 9: Make It Yours</h2>'
                + '<p>This is your project now. Decide as a group what to add next — there\'s no wrong answer here.</p>'
                + _cards([
                    { icon: '🎨', name: 'Change the Theme', desc: 'Dark mode, retro, neon, pastel, brutalist, minimalist' },
                    { icon: '✍️', name: 'Add Your Content', desc: 'Write your own copy, add personal touches' },
                    { icon: '🖼️', name: 'Add Visuals', desc: 'Images, GIFs, illustrations, or background art' },
                    { icon: '🔊', name: 'Add Audio', desc: 'Background music or sound effects' },
                    { icon: '🧩', name: 'New Features', desc: 'Share buttons, save progress, new interactions' },
                    { icon: '📄', name: 'More Content', desc: 'Extra pages, sections, or levels' },
                ], { style: 'margin:20px 0;' })
                + '<p>Describe what you want to your agent and let it build. Test in the browser, then iterate — same cycle as before.</p>'
                + '<p style="margin-top:12px;">When you\'re happy with the changes, tell your agent to commit:</p>'
                + _term('Commit my changes with a message describing what we added')
                + _tip('Check SourceTree after each commit to see your history grow. Click on older commits to see what the code looked like at each point — this is the power of Git.')
        },
        {
            title: 'Show & Tell',
            nextLabel: null,
            content: '<h2>Step 10: Show &amp; Tell</h2>'
                + '<p>Open your project in the browser and show it to the group!</p>'
                + '<h3>Things to share:</h3>'
                + '<ul style="margin:8px 0 20px 20px; line-height:1.8;">'
                + '<li>Walk through your project — show what it does and how it works</li>'
                + '<li>What did you customize? What makes yours unique?</li>'
                + '<li>What was surprising about the process?</li>'
                + '<li>Did you run into any issues? How did you solve them?</li>'
                + '</ul>'
                + '<h3>The Build Cycle</h3>'
                + '<p style="margin-bottom:16px;">Everything you just did follows the same four-step pattern:</p>'
                + _cards([
                    { icon: '💬', name: 'Prompt', desc: 'Describe what you want to the AI' },
                    { icon: '🧪', name: 'Test', desc: 'Open the file in your browser and try it' },
                    { icon: '🔄', name: 'Iterate', desc: 'Tell the AI what to fix or improve' },
                    { icon: '💾', name: 'Commit', desc: 'Save a checkpoint with Git' },
                ], { style: 'margin-bottom:24px;' })
                + '<p>This is the vibe coding workflow. It works for a simple single-page project and it works for a full web application. The projects get bigger, but the cycle stays the same.</p>'
        }
    ]
};

