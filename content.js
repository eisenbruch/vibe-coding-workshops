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
function _check(items) { return '<ul class="step-checklist">' + items.map(function(t) { return '<li><span class="step-checklist-icon">✅</span><span>' + t + '</span></li>'; }).join('') + '</ul>'; }
function _cards(items, opts) {
    opts = opts || {};
    var style = opts.style || '';
    var html = '<div class="path-picker-grid"' + (style ? ' style="' + style + '"' : '') + '>';
    items.forEach(function(item) {
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
        subtitle: 'All-in-one AI assistant with Chat and Cowork modes. Visual interface, no IDE needed.',
        steps: [
            {
                title: 'Create Your Account',
                content: '<h2>Step 1: Create Your Account</h2>'
                    + _note('If you don\'t want a paid plan, use <a href="#" onclick="event.preventDefault(); loadRoute(\'setup-google-ai-studio\');">Google AI Studio</a> instead — it\'s free and follows a similar workflow.')
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://claude.ai/pricing" target="_blank" rel="noopener noreferrer" class="step-link-btn">claude.ai/pricing</a></li>'
                    + '<li>Sign up for a <strong>Pro</strong> plan (recommended for the workshop)</li>'
                    + '</ol>'
                    + _tip('Already have a Claude account? Just make sure you\'re on a paid plan — Pro gives you access to Cowork mode.')
            },
            {
                title: 'Download Claude Desktop',
                content: '<h2>Step 2: Download Claude Desktop</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" class="step-link-btn">claude.ai/download</a></li>'
                    + '<li>Download for your operating system (Mac or Windows)</li>'
                    + '<li>Run the installer</li>'
                    + '<li>Launch Claude Desktop and sign in</li>'
                    + '</ol>'
                    + _tip('Claude Desktop is a separate app from the browser version. You need to download it even if you already use claude.ai.')
            },
            {
                title: 'Explore the Interface',
                content: '<h2>Step 3: Explore the Interface</h2>'
                    + '<p>Claude Desktop has three modes — switch between them using the toggle at the top:</p>'
                    + '<div class="path-picker-grid" style="margin:20px 0;">'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-icon">💬</div><div class="path-card-name">Chat</div><div class="path-card-desc">Conversation — ask questions, brainstorm, get explanations</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center; border-color:var(--accent-color);"><div class="path-card-icon">🤝</div><div class="path-card-name">Cowork</div><div class="path-card-desc">Agentic — Claude reads and writes files on your computer</div></div>'
                    + '<div class="path-card" style="cursor:default; text-align:center;"><div class="path-card-icon">💻</div><div class="path-card-name">Code</div><div class="path-card-desc">Full coding agent running on cloud VMs</div></div>'
                    + '</div>'
                    + _tip('For the workshop, we\'ll use <strong>Cowork mode</strong>. You describe what you want, Claude builds it — writing real files you can open and run.')
            },
            {
                title: 'Set Up Your Project Folder',
                content: '<h2>Step 4: Set Up Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Claude Desktop, switch to <strong>Cowork mode</strong></li>'
                    + '<li>Tell Claude about your folder:</li>'
                    + '</ol>'
                    + _term('I\'m working in a project folder at ~/Desktop/workshop-project. We\'ll be building a project together.')
                    + '<p style="margin-top:12px;">Claude can now create and edit files in that folder.</p>'
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 5: Install Developer Tools</h2>'
                    + '<p>Paste this prompt into Claude Desktop. It will check and install everything automatically:</p>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (Mac only — package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes.')
                    + _warn('Having trouble? Don\'t worry — skip this step. You can install tools later, and the group project works without them.')
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 6: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['Claude Pro account', 'Claude Desktop installed', 'Project folder ready', 'Developer tools installed (or ready to install later)'])
            }
        ]
    },
    'setup-google-ai-studio': {
        name: 'Intermediate Setup — Google AI Studio',
        subtitle: 'Browser-based AI workspace powered by Gemini. No installs required.',
        steps: [
            {
                title: 'Create Your Account',
                content: '<h2>Step 1: Create Your Account</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Go to <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" class="step-link-btn">aistudio.google.com</a></li>'
                    + '<li>Sign in with your Google account</li>'
                    + '</ol>'
                    + _tip('Google AI Studio is completely free. No Google account? Create one at <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">accounts.google.com</a>.')
            },
            {
                title: 'Start a New Chat',
                content: '<h2>Step 2: Start a New Chat</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Click <strong>"New Chat"</strong> or <strong>"Create New"</strong></li>'
                    + '<li>Select the latest Gemini model available (e.g., Gemini 2.5 Pro)</li>'
                    + '</ol>'
                    + _tip('Always use the most capable model available — newer models write better code.')
            },
            {
                title: 'How It Works',
                content: '<h2>Step 3: How It Works</h2>'
                    + '<p>Google AI Studio gives you a chat interface where you:</p>'
                    + '<ol class="step-num-list">'
                    + '<li><strong>Describe</strong> what you want to build — Gemini generates the code</li>'
                    + '<li><strong>Copy</strong> the generated code into a file</li>'
                    + '<li><strong>Open</strong> the file in your browser to see it</li>'
                    + '<li><strong>Iterate</strong> — ask for changes in follow-up messages</li>'
                    + '</ol>'
                    + _note('You can also upload images (screenshots, mockups) and files (existing code) to give Gemini more context.')
            },
            {
                title: 'Set Up Your Project Folder',
                content: '<h2>Step 4: Set Up Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>When Gemini generates code, copy it from the chat</li>'
                    + '<li>Paste into a text editor (TextEdit, Notepad, or VS Code)</li>'
                    + '<li>Save with the filename Gemini suggests (e.g., <code>index.html</code>) into your folder</li>'
                    + '</ol>'
            },
            {
                title: 'Install Developer Tools (Optional)',
                content: '<h2>Step 5: Install Developer Tools (Optional)</h2>'
                    + '<p>Since AI Studio runs in the browser, it can\'t install tools for you. These are optional — you\'ll need them later for Git and deployment.</p>'
                    + '<h3>Mac</h3>'
                    + '<p>Open Terminal and run:</p>'
                    + _term('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\nbrew install node git gh\nnpm install -g firebase-tools', 'bash')
                    + '<h3>Windows</h3>'
                    + '<p>Download and install:</p>'
                    + '<ol class="step-num-list">'
                    + '<li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" class="step-link-btn">Node.js</a> (LTS version)</li>'
                    + '<li><a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" class="step-link-btn">Git</a></li>'
                    + '<li><a href="https://cli.github.com" target="_blank" rel="noopener noreferrer" class="step-link-btn">GitHub CLI</a></li>'
                    + '<li>Then run: <code>npm install -g firebase-tools</code></li>'
                    + '</ol>'
                    + _warn('Not comfortable with the terminal? Skip this step entirely. The group project works without these tools — you can always install them later.')
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 6: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['Google account with AI Studio access', 'Gemini ready to generate code', 'Project folder ready'])
                    + _tip('Gemini is fast and great at generating visual code. Don\'t hesitate to ask for big changes — regenerating is quick.')
            }
        ]
    },
    'setup-claude-code': {
        name: 'Advanced Setup — Claude Code',
        subtitle: 'AI coding agent in VS Code and the terminal. Full project control.',
        steps: [
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
                    + '<li>Go to <a href="https://claude.ai/pricing" target="_blank" rel="noopener noreferrer" class="step-link-btn">claude.ai/pricing</a></li>'
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
                    + '<h3>Option B: CLI Tool (for terminal users)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Follow the <a href="https://code.claude.com/docs/en/setup#native-install-recommended" target="_blank" rel="noopener noreferrer" class="step-link-btn">CLI installation guide</a></li>'
                    + '<li>Open a terminal in VS Code (<code>Ctrl+`</code>)</li>'
                    + '<li>Type <code>claude</code> to start</li>'
                    + '</ol>'
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 4: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Claude Code (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Claude Code ready to go.</p>'
            },
            {
                title: 'Quick Terminal Intro',
                content: '<h2>Step 5: Quick Terminal Intro</h2>'
                    + '<p>Open the terminal in VS Code with <code>Ctrl+`</code> or <strong>View → Terminal</strong>.</p>'
                    + '<p style="margin-top:12px;">The key thing to know: <strong>you don\'t need to memorize commands.</strong> Your AI runs commands for you. Just describe what you need.</p>'
                    + _tip('Try saying: "Start a local server so I can preview my project" — Claude will handle the rest.')
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 6: Install Developer Tools</h2>'
                    + '<p>Paste this prompt into Claude Code:</p>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (Mac only — package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Claude will ask permission to run commands — say yes. This may take a few minutes.')
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 7: You\'re Ready!</h2>'
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
                    + '<h3>Option B: CLI Tool (for terminal users)</h3>'
                    + '<ol class="step-num-list">'
                    + '<li>Follow the installation guide at <a href="https://codeassist.google" target="_blank" rel="noopener noreferrer" class="step-link-btn">codeassist.google</a></li>'
                    + '<li>Open a terminal in VS Code (<code>Ctrl+`</code>)</li>'
                    + '<li>Type <code>gemini</code> to start</li>'
                    + '</ol>'
            },
            {
                title: 'Create Your Project Folder',
                content: '<h2>Step 4: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Gemini (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Gemini ready to go.</p>'
            },
            {
                title: 'Quick Terminal Intro',
                content: '<h2>Step 5: Quick Terminal Intro</h2>'
                    + '<p>Open the terminal in VS Code with <code>Ctrl+`</code> or <strong>View → Terminal</strong>.</p>'
                    + '<p style="margin-top:12px;">The key thing to know: <strong>you don\'t need to memorize commands.</strong> Your AI runs commands for you. Just describe what you need.</p>'
                    + _tip('Try saying: "Start a local server so I can preview my project" — Gemini will handle the rest.')
            },
            {
                title: 'Install Developer Tools',
                content: '<h2>Step 6: Install Developer Tools</h2>'
                    + '<p>Paste this prompt into Gemini:</p>'
                    + _term('Check my system and install any of these developer tools that are missing:\n- Homebrew (Mac only — package manager)\n- Node.js and npm (JavaScript runtime)\n- Git (version control)\n- gh (GitHub CLI)\n- firebase-tools (Firebase deployment — install globally with npm)\n\nFor each tool: check if it\'s already installed first, skip it if so.\nFor anything you can\'t install directly, give me the exact steps to do it myself.\nDon\'t sign in to or configure anything yet — just install.')
                    + _note('Gemini will ask permission to run commands — say yes. This may take a few minutes.')
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 7: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['VS Code installed', 'Gemini connected', 'Project folder ready', 'Developer tools installed'])
                    + _tip('Gemini is extremely fast at generating code and completely free. Don\'t hesitate to ask for big changes — regenerating is quick.')
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
    name: 'Beginner Quick Start',
    subtitle: '',
    steps: [
        {
            title: 'Pick a Tool',
            content: '<p class="path-picker-subtitle">Open any of these in your browser — they all work the same way.</p>'
                + _cards([
                    { name: 'Claude.ai', icon: '💬', url: 'https://claude.ai', desc: 'Generates an interactive <strong>artifact</strong> — see and use it right in the chat' },
                    { name: 'ChatGPT', icon: '🤖', url: 'https://chatgpt.com', desc: 'Generates a <strong>canvas</strong> — live preview right in the conversation' },
                    { name: 'Gemini', icon: '✨', url: 'https://gemini.google.com', desc: 'Generates code with a <strong>preview</strong> panel alongside the chat' },
                    { name: 'Google AI Studio', icon: '🧪', url: 'https://aistudio.google.com', desc: 'Prototype with Gemini models — code output with preview' },
                ], { style: 'margin-bottom:32px;' })
        },
        {
            title: 'Try It Now',
            content: '<p class="path-picker-subtitle">Paste this into your chosen tool and watch it build.</p>'
                + _term('Create a personal countdown timer to New Year\'s Eve. Make it visually appealing with a dark theme and animated numbers.')
                + _cards([
                    { icon: '💬', name: 'Describe', desc: 'Tell the AI what you want in plain language' },
                    { icon: '👀', name: 'See It Appear', desc: 'The AI builds it and shows you the result — no files needed' },
                    { icon: '🔄', name: 'Iterate', desc: '"Make it neon green" or "Add confetti when it hits zero"' },
                ], { style: 'margin-top:24px; margin-bottom:32px;' })
        },
        {
            title: 'What You Can Build',
            content: '<p class="path-picker-subtitle">Browser AI is great for quick single-page creations.</p>'
                + _cards([
                    { icon: '🧮', name: 'Calculators & Tools', desc: 'Timers, converters, trackers' },
                    { icon: '🧠', name: 'Quizzes & Games', desc: 'Trivia, puzzles, simple games' },
                    { icon: '🎨', name: 'Visual Demos', desc: 'Animations, art, simulations' },
                    { icon: '📄', name: 'Landing Pages', desc: 'Portfolios, resumes, promo pages' },
                ], { style: 'margin-bottom:24px;' })
                + '<div class="step-callout note" style="margin-bottom:32px;">'
                + '<span class="step-callout-icon">📝</span>'
                + '<div class="step-callout-body">These creations live in the chat session — they\'re not saved as files on your computer. For real projects with version control and deployment, check out the Intermediate or Advanced setup paths.</div>'
                + '</div>'
        },
        {
            title: 'What\'s Next?',
            content: '<p class="path-picker-subtitle">Your setup is complete. Where would you like to go?</p></div>'
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
                    { icon: '🤝', name: 'Claude Desktop', desc: 'Launch the app, switch to Cowork mode, point it at your project folder' },
                    { icon: '🧪', name: 'Google AI Studio', desc: 'Open <a href="https://aistudio.google.com/" target="_blank">aistudio.google.com</a> in your browser' },
                    { icon: '💻', name: 'Claude Code', desc: 'Click the Claude icon in the VS Code editor toolbar' },
                    { icon: '✨', name: 'Gemini CLI', desc: 'Open a terminal in VS Code and type <code>gemini</code>' },
                    { icon: '💬', name: 'Browser AI', desc: 'Open your preferred AI chat and have a text editor ready' },
                ], { style: 'margin:20px 0;' })
                + _note('<strong>Using a desktop or IDE tool?</strong> Make sure it\'s pointed at your project folder — that\'s where the AI will create files.<br><br><strong>Using a browser AI?</strong> You\'ll copy code from the chat and paste it into files manually. Have a text editor open and ready.')
        },
        {
            title: 'Pick a Project',
            nextLabel: 'Get the Code Into a File',
            content: '<h2>Step 2: Pick a Project &amp; Write Your First Prompt</h2>'
                + '<p>Pick one of the project options below and paste the prompt into your AI tool. Feel free to tweak it — change the theme, swap details, make it yours.</p>'
                + (function() {
                    var h = '<div class="path-picker-grid" style="margin:20px 0;">';
                    GROUP_PROJECT_OPTIONS.forEach(function(opt) {
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
                + _tip('Be specific about what the user sees and does. Include details about the design (colors, layout, animations). Ask for mobile-friendly. Start simple — you\'ll iterate and add features in later steps.')
        },
        {
            title: 'Get the Code Into a File',
            nextLabel: 'Open in Browser',
            content: '<h2>Step 3: Get the Code Into a File</h2>'
                + '<p>This step depends on which tool you\'re using:</p>'
                + _note('<strong>Claude Desktop / Cowork mode:</strong> Claude will create the file directly in your project folder. Check that it saved an HTML file — you should see something like <code>index.html</code> appear.')
                + _note('<strong>Claude Code / Gemini CLI:</strong> The AI will create the file in your open project. You\'ll see it appear in VS Code\'s file explorer on the left side.')
                + _note('<strong>Browser AI (Claude.ai, ChatGPT, Gemini, AI Studio):</strong> Copy the entire code block the AI generated. Open your text editor, paste it in, and save it as <code>index.html</code> in your project folder.')
                + '<p style="margin-top:16px;">If the AI generated multiple files, that\'s fine — just make sure you save all of them in the same folder.</p>'
        },
        {
            title: 'Open in Browser',
            nextLabel: 'Polish the Design',
            content: '<h2>Step 4: Open in Browser — See It Work!</h2>'
                + '<ol class="step-num-list">'
                + '<li>Find the HTML file in your project folder (<code>index.html</code> or whatever the AI named it)</li>'
                + '<li>Double-click it to open in your browser</li>'
                + '<li>Try the whole thing — click through every feature and see how it works</li>'
                + '</ol>'
                + '<p style="margin-top:16px;">How does it look? Take a moment to note anything you\'d want to change:</p>'
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
                + '<p style="margin-top:16px;">After the AI updates the code:</p>'
                + '<ol class="step-num-list">'
                + '<li><strong>Save the file</strong> (or let your AI tool save it)</li>'
                + '<li><strong>Refresh your browser</strong> to see the changes</li>'
                + '<li><strong>Test the whole thing again</strong> — make sure nothing broke</li>'
                + '</ol>'
                + '<p style="margin-top:16px;">Does it look better? Tell the AI what you like ("the transitions are great") and what to change ("the colors are too bright, tone it down"). Be specific — the more precise your feedback, the better the result.</p>'
                + _note('Browser AI users: Copy the updated code and replace the contents of your HTML file entirely. Save and refresh.')
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
            nextLabel: 'Add a Share Feature',
            content: '<h2>Step 7: Introduce Git — Save Your Progress</h2>'
                + '<p>You now have a working project that you like. Before we change anything else, let\'s save this checkpoint.</p>'
                + '<p style="margin-top:12px;"><strong>Git</strong> creates save points (called <strong>commits</strong>) in your project\'s history. If you ever break something, you can go back to a working version. Think of it as a save file in a video game.</p>'
                + _note('<strong>Claude Code / Gemini CLI users:</strong> Tell your AI:<br>' + _term('Initialize a git repository in this folder and create an initial commit with all my files. Use the message "Working project with polished design"'))
                + _note('<strong>Claude Desktop / AI Studio users:</strong> If your tool supports running terminal commands, ask it to initialize Git. Otherwise, skip Git steps for now — you can learn it later from the <a href="#" onclick="event.preventDefault(); loadRoute(\'Git for Beginners.md\');">Git for Beginners</a> guide.')
                + _note('<strong>Browser AI users:</strong> Open a terminal in your project folder and run:<br>' + _term('git init\ngit add .\ngit commit -m "Working project with polished design"') + 'If you don\'t have Git installed or aren\'t comfortable with the terminal, skip this for now.')
                + _tip('<strong>Optional: Visualize with SourceTree</strong> — If you installed <a href="https://www.sourcetreeapp.com/" target="_blank">SourceTree</a>, open it and add your project folder. You\'ll see your first commit — a snapshot of everything you\'ve built so far.')
        },
        {
            title: 'Add a Share Feature',
            nextLabel: 'Commit Again',
            content: '<h2>Step 8: Iterate #3 — Add a Share Feature</h2>'
                + '<p>Let\'s add a way to share or save progress. Tell the AI something like:</p>'
                + _term('Add a share/save feature:\n- Add a "Copy Link" or "Share" button that copies a summary to clipboard\n- Add a "Start Over" or "Reset" button\n- Save the user\'s state in localStorage so it persists when they return')
                + '<p style="margin-top:16px;">Save, refresh, test. Try the full flow:</p>'
                + '<ol class="step-num-list">'
                + '<li>Use the project from start to finish</li>'
                + '<li>Try the share/copy feature — paste somewhere to verify it works</li>'
                + '<li>Try the reset button</li>'
                + '<li>Close the browser tab, reopen the file — does it remember your state?</li>'
                + '</ol>'
        },
        {
            title: 'Commit Again',
            nextLabel: 'Make It Yours',
            content: '<h2>Step 9: Commit Again</h2>'
                + '<p>Time for another save point. You\'ve added a significant feature — lock it in.</p>'
                + _note('<strong>Claude Code / Gemini CLI users:</strong><br>' + _term('Commit my changes with the message "Add share feature and localStorage"'))
                + _note('<strong>Terminal users:</strong><br>' + _term('git add .\ngit commit -m "Add share feature and localStorage"'))
                + _tip('<strong>SourceTree users:</strong> Open SourceTree and look at your commit history. You now have two commits — two snapshots. Click on the first one to see what the code looked like before the share feature. This is the power of Git: you can always go back.')
        },
        {
            title: 'Make It Yours',
            nextLabel: 'Show &amp; Tell',
            content: '<h2>Step 10: Make It Yours</h2>'
                + '<p>This is your project now. Spend the next few minutes customizing it however you want:</p>'
                + _cards([
                    { icon: '🎨', name: 'Change the Theme', desc: 'Dark mode, retro, neon, pastel, brutalist, minimalist' },
                    { icon: '✍️', name: 'Add Your Content', desc: 'Write your own copy, add personal touches' },
                    { icon: '🖼️', name: 'Add Visuals', desc: 'Images, GIFs, illustrations, or background art' },
                    { icon: '🔊', name: 'Add Audio', desc: 'Background music or sound effects' },
                ], { style: 'margin:20px 0;' })
                + '<p>Prompt your AI with whatever changes you want. There\'s no wrong answer here.</p>'
                + '<p style="margin-top:12px;">When you\'re happy with the result, make another commit:</p>'
                + _note('<strong>Claude Code / Gemini CLI users:</strong><br>' + _term('Commit my changes with a message describing what I customized'))
                + _note('<strong>Terminal users:</strong><br>' + _term('git add .\ngit commit -m "Customize project with [your changes here]"'))
        },
        {
            title: 'Show & Tell',
            nextLabel: null,
            content: '<h2>Step 11: Show &amp; Tell</h2>'
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

