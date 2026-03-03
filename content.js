// ── Workshop Content ─────────────────────────────────────────
// Guide data, project lists, and content helper functions.
// Loaded after config.js, before pages.js.

const WELCOME_PROJECTS = [
    { name: "Glitch QR", icon: '<img src="images/icons/qr-icon.svg" alt="QR">', url: "https://github.com/eisenbruch/qr-glitch", type: "QR Code Tool", learning: "Generate scannable QR codes with glitch visual effects like RGB shift and wave distortion" },
    { name: "Snark AI", icon: '<img src="https://snark-ai.com/apple-touch-icon.png" alt="Snark AI">', url: "https://snark-ai.com", type: "AI Email Service", learning: "Email bodyguard that intercepts hostile emails and crafts witty, sarcastic responses" },
    { name: "Nerktendo", icon: '<img src="https://nerktendo.com/apple-touch-icon.png" alt="Nerktendo">', url: "https://nerktendo.com", type: "Retro Portfolio", learning: "A playable portfolio and retro emulator with a video game aesthetic" },
    { name: "LinkPee", icon: '<img src="https://linkp.ee/apple-touch-icon.png" alt="LinkPee">', url: "https://linkp.ee", type: "Link-in-Bio Service", learning: "Free Linktree alternative for creating a single page with all your links" },
    { name: "Weather Worsener", icon: "🌧️", url: "https://nerktendo.com/weather-worsener", type: "Interactive Game", learning: "Climate awareness game where you control disasters and try to eradicate humanity" },
    { name: "DomainFlip", icon: '<img src="images/icons/domainflip-icon.svg" alt="DomainFlip">', url: "https://nerktendo.com/domainflip", type: "Startup Demo", learning: "A polished demo platform for trading premium domains instantly" },
    { name: "TrafficVision", icon: '<img src="https://trafficvision.live/android-chrome-512x512.png" alt="TrafficVision">', url: "https://trafficvision.live", type: "Map & Database", learning: "Directory of 135,000+ live traffic cameras with real-time feeds from around the globe" },
    { name: "CamGuessr", icon: '<img src="images/icons/camguessr-icon.svg" alt="CamGuessr">', url: "https://trafficvision.live/camguessr", type: "Browser Game", learning: "GeoGuessr-style game where you guess locations from live traffic camera feeds" },
];

const WORKSHOP_PROJECTS = [
    { name: "Shuffleboard Jam", author: "Jeff Ziev", url: "https://shuffleboardjam.com", type: "Multiplayer Game", desc: "Online multiplayer shuffleboard videogame inspired by the Royal Palms Shuffleboard Club league" },
    { name: "ZigZag Explorer", author: "Ben Von Wong", url: "https://zigzag-explorer-vw.web.app/", type: "Star Wars", desc: "A non-linear journey through the Star Wars universe — explore characters, planets, and lore through an unconventional zigzag navigation pattern" },
    { name: "Surrender", author: "Ben Von Wong", url: "https://hope-surrender-vw.web.app/", type: "Personal", desc: "A journey back to us — an intimate, reflective experience exploring themes of reconciliation and reconnection" },
    { name: "The 3rd Door Brooklyn", author: "Ben Von Wong", url: "https://third-door-fundraiser.web.app/", type: "Concept / Fundraising", desc: "Concept site built in 15 minutes for a donation-based yoga & arts studio in DUMBO — showcases community loans and a solidarity fund" },
    { name: "Dune: Imperium Strategy Guide", author: "Ben Von Wong", url: "https://dune-strategy-guide.web.app/", type: "Board Games", desc: "Interactive strategy companion for the board game — select your player count, pick a leader, and get personalized recommendations" },
    { name: "Coach Pocket Guide to NYC", author: "Michelle", url: "https://coach-pocket-nyc.web.app/", type: "Travel Guide", desc: "A pocket-sized travel guide to New York City" },
    { name: "RHV Universe", author: "Michelle", url: "https://rhv-universe.surge.sh/", type: "Data Visualization", desc: "Interactive archive visualizing 500+ episodes of a healthcare podcast — spiral networks, topic maps, and language evolution across 12 years" },
    { name: "Ye Olde Hobby Finder", author: "Group Project", url: "https://workshop.nerktek.com/workshop-projects/2025-12-12-resistor/group-project-hobby-finder/hobby-finder.html", type: "Interactive Tool", desc: "Medieval-themed hobby discovery with Tinder-style swiping and head-to-head duels" },
    { name: "MJPEG Glitch Stream", author: "Noah", url: "https://workshop.nerktek.com/workshop-projects/2025-11-15-resistor/noah-eisenbruch-live-mjpeg-compression/index.html", type: "Webcam Tool", desc: "Live webcam feed with compression control and glitch effects like pixel sorting" },
    { name: "Top or Bottom?", author: "Hank", url: "https://workshop.nerktek.com/workshop-projects/2025-11-15-resistor/hank-top-or-bottom/index.html", type: "Parody Quiz", desc: "Quiz styled after early 2000s magazine flowcharts" },
    { name: "Band Tier Console", author: "Andy", url: "https://workshop.nerktek.com/workshop-projects/2025-11-15-resistor/andy-listing-thing/index.html", type: "Ranking Tool", desc: "Drag-and-drop ranking interface with cyberpunk aesthetic" },
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
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Claude Code (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Claude Code ready to go.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 7: You\'re Ready!</h2>'
                    + '<p>Your setup is complete:</p>'
                    + _check(['VS Code installed', 'Claude Code connected', 'Sourcetree installed', 'Project folder ready', 'Developer tools installed'])
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
                    + '<li>In VS Code: <strong>File → Open Folder</strong> → select it</li>'
                    + '<li>Open Gemini (extension panel or terminal)</li>'
                    + '</ol>'
                    + '<p style="margin-top:12px;">You should see your empty folder in VS Code\'s file explorer and Gemini ready to go.</p>'
            },
            {
                title: "You're Ready!",
                content: '<h2>Step 7: You\'re Ready!</h2>'
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
                    + '<li>Open the Claude Code panel</li>'
                    + '</ol>'
            },
            {
                title: "You're Ready!",
                content: "<h2>Step 7: You're Ready!</h2>"
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
                title: 'Create Your Project Folder',
                content: '<h2>Step 5: Create Your Project Folder</h2>'
                    + '<ol class="step-num-list">'
                    + '<li>Create a folder called <code>workshop-project</code> on your Desktop</li>'
                    + '<li>In Antigravity: <strong>File → Open Folder</strong> → select it</li>'
                    + '</ol>'
            },
            {
                title: "You're Ready!",
                content: "<h2>Step 6: You're Ready!</h2> "
                    + '<p>Your setup is complete:</p>'
                    + _check(['Antigravity installed', 'Gemini Agent open', 'Sourcetree installed', 'Project folder ready', 'Developer tools installed'])
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
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🎯', name: 'Product Guidance', desc: 'Clarify what you\'re building and why', route: 'product-guidance' },
        { icon: '🛠️', name: 'Tech Stack & Hosting', desc: 'Choose the right tools and platform', route: 'tech-stack' },
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
                + '<h3>Turn On Auto-Accept</h3>'
                + '<p>Set your agent to work autonomously so it can create files without asking permission for every change:</p>'
                + _cards([
                    { icon: '<img src="images/icons/claude.svg" alt="Claude">', name: 'Claude Desktop', desc: 'Set permissions to <strong>Auto Accept Edits</strong>' },
                    { icon: '<img src="images/icons/antigravity.png" alt="Antigravity">', name: 'Antigravity Agent Manager', desc: 'Already automatic — no changes needed' },
                    { icon: '🧩', name: 'Gemini or Claude Extension', desc: 'Set permissions to <strong>Auto Accept Edits</strong>' },
                    { icon: '⌨️', name: 'CLI Agents', desc: 'Press <code>shift+tab</code> to switch to <strong>Auto Accept</strong>' },
                ], { style: 'margin:16px 0;' })
                + '<h3>Paste &amp; Go</h3>'
                + '<p>Paste your prompt, hit <strong>Enter</strong>, and watch the agent work. If it asks questions or requests permission, answer and grant it.</p>'
                + _note('The agent might enter <strong>planning mode</strong> first — asking questions about what you want before building. Or it might just start writing files. Either way is fine.')
        },
        {
            title: 'Test Your Project',
            nextLabel: 'Make Some Changes',
            content: '<h2>Step 4: Test Your Project</h2>'
                + '<h3>Open It in Your Browser</h3>'
                + '<p>You have two options:</p>'
                + _cards([
                    { icon: '🌐', name: 'Start a Local Server <span class="path-card-badge">Recommended</span>', desc: 'Ask your agent to start a server — works with all project types' },
                    { icon: '📂', name: 'Double-Click the File', desc: 'Find <code>index.html</code> in your project folder and double-click it to open in your browser' },
                ], { style: 'margin:16px 0;' })
                + '<p>If you go the server route, try this prompt:</p>'
                + _term('Start a local web server so I can preview my project in the browser. Give me the URL to open.')
        },
        {
            title: 'Make Some Changes',
            nextLabel: 'Introduce Git',
            content: '<h2>Step 5: Make Some Changes</h2>'
                + '<h3>Click Through Everything</h3>'
                + _cards([
                    { icon: '👀', name: 'Layout', desc: 'Does it look right? Spacing, alignment, readability?' },
                    { icon: '👆', name: 'Interactions', desc: 'Do buttons, links, and features actually work?' },
                    { icon: '🔍', name: 'Missing Pieces', desc: 'Is anything broken, blank, or incomplete?' },
                    { icon: '💡', name: 'Ideas', desc: 'What would you change or add?' },
                ], { style: 'margin:16px 0;' })
                + '<p style="margin-top:12px;">Something not right, or just not how you want it? That\'s the workflow. You now have something specific to tell the AI to change.</p>'
                + '<h3>Give Feedback</h3>'
                + '<p>Tell the AI what you want to change — be as specific as you can:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li><strong>Design:</strong> layout, colors, fonts, borders, spacing, animations</li>'
                + '<li><strong>Functionality:</strong> broken features, missing interactions, things that don\'t work right</li>'
                + '<li><strong>Content:</strong> text, images, labels, placeholder data that needs replacing</li>'
                + '</ul>'
                + _tip('The more specific, the better. "Make it better" gives you random changes. "Make the header font bigger and add more space between the cards" gets exactly what you want.')
                + '<p style="margin-top:16px;">Do this a few times — test, give feedback, refresh, repeat. Each round gets your project closer to what you want.</p>'
        },
        {
            title: 'Introduce Git',
            nextLabel: 'View Your History in SourceTree',
            content: '<h2>Step 6: Introduce Git — Save Your Progress</h2>'
                + '<p>You have a working project. Before we change anything else, let\'s save a checkpoint.</p>'
                + _cards([
                    { icon: '💾', name: 'Commits', desc: 'Save points in your project\'s history — like save files in a video game' },
                    { icon: '⏪', name: 'Undo Changes', desc: 'Broke something? Go back to any previous commit instantly' },
                    { icon: '🌳', name: 'Branches', desc: 'Try new features in isolation without risking your working code' },
                    { icon: '🤝', name: 'Collaboration', desc: 'Share your code on GitHub so others can see, use, or contribute to it' },
                ], { style: 'margin:16px 0;' })
                + '<p>Tell your agent:</p>'
                + _term('Initialize a git repository in this folder and create an initial commit with all my files')
        },
        {
            title: 'View Your History in SourceTree',
            nextLabel: 'More Changes!',
            content: '<h2>Step 7: View Your History in SourceTree</h2>'
                + '<p><a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer">SourceTree</a> is a free app that lets you visualize your Git history. Here\'s how to load your project:</p>'
                + '<ol class="step-num-list">'
                + '<li>Open SourceTree and click <strong>New</strong> → <strong>Add Existing Local Repository</strong></li>'
                + '<li>Browse to your project folder and select it</li>'
                + '<li>You\'ll see your first commit — a snapshot of everything you\'ve built so far</li>'
                + '</ol>'
                + _tip('As you keep working and making commits, SourceTree shows a visual timeline of every change. If something breaks, you can see exactly when it happened and go back.')
        },
        {
            title: 'More Changes!',
            nextLabel: 'Show &amp; Tell',
            content: '<h2>Step 8: More Changes!</h2>'
                + '<p>Now that your progress is saved, make another change to your project. Pick anything:</p>'
                + _cards([
                    { icon: '🎨', name: 'Change the Theme', desc: 'Dark mode, retro, neon, pastel, brutalist, minimalist' },
                    { icon: '✍️', name: 'Add Your Content', desc: 'Write your own copy, add personal touches' },
                    { icon: '🖼️', name: 'Add Visuals', desc: 'Images, GIFs, illustrations, or background art' },
                    { icon: '🔊', name: 'Add Audio', desc: 'Background music or sound effects' },
                    { icon: '🧩', name: 'New Features', desc: 'Share buttons, save progress, new interactions' },
                    { icon: '📄', name: 'More Content', desc: 'Extra pages, sections, or levels' },
                ], { style: 'margin:16px 0;' })
                + '<p>Describe what you want to your agent and let it build. Test in the browser, then iterate — same cycle as before.</p>'
                + _tip('<strong>Queue your messages.</strong> You don\'t have to wait for the AI to finish before typing your next request. Most tools let you keep submitting messages and the AI will read them when it\'s ready.')
        },
        {
            title: 'Show & Tell',
            nextLabel: 'Commit &amp; View in SourceTree',
            content: '<h2>Step 9: Show &amp; Tell</h2>'
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
        },
        {
            title: 'Commit & View in SourceTree',
            nextLabel: 'Try @ Mentioning a File',
            content: '<h2>Step 10: Commit &amp; View in SourceTree</h2>'
                + '<p>You\'ve made changes since your last commit. Let\'s save another checkpoint.</p>'
                + '<p style="margin-top:12px;">Tell your agent:</p>'
                + _term('Commit my changes with a message describing what we added')
                + '<p style="margin-top:16px;">Now open SourceTree and look at your project — you\'ll see <strong>two commits</strong> in your history. Click between them to see exactly what changed.</p>'
                + _tip('This is the power of Git. Every commit is a snapshot you can compare, revisit, or roll back to. Get in the habit of committing after every meaningful change.')
        },
        {
            title: 'Try @ Mentioning a File',
            nextLabel: 'Ask AI to Explain Your App',
            content: '<h2>Step 11: Try @ Mentioning a File</h2>'
                + '<p>Most AI coding tools let you <strong>@ mention</strong> a file to give the AI direct context about it. Let\'s try this by adding an image to your project.</p>'
                + '<ol class="step-num-list">'
                + '<li>Find an image you want to use — a logo, a photo, a meme, anything. Download it to your computer.</li>'
                + '<li>Create an <code>images</code> folder inside your project folder and copy the image into it.</li>'
                + '<li>In your AI tool, type <code>@</code> and select the image file from the file picker that appears.</li>'
                + '<li>Write a prompt telling the AI what to do with it, like:</li>'
                + '</ol>'
                + _term('Add this logo to the header of my site. Size it appropriately and make sure it looks good next to the title.')
                + '<p style="margin-top:16px;">The AI will read the file and update your HTML to include it. Refresh your browser to see the result.</p>'
                + _tip('@ mentioning works with any file — images, code files, config files, data files. It\'s one of the most powerful ways to give the AI precise context about what you\'re asking for.')
        },
        {
            title: 'Ask AI to Explain Your App',
            nextLabel: 'Start Fresh &amp; Generate Context',
            content: '<h2>Step 12: Ask AI to Explain Your App</h2>'
                + '<p>You\'ve built something real — but do you know how it actually works? Let\'s find out.</p>'
                + '<p style="margin-top:12px;">Ask your AI agent:</p>'
                + _term('Explain how my website works in simple terms. What\'s my tech stack? Walk me through what happens when someone opens it — what they see, what they can interact with, and how the code makes it all work. Keep it simple, like you\'re explaining to someone who\'s never seen code before.')
                + '<p style="margin-top:16px;">The AI will explain your <strong>tech stack</strong> — the languages, tools, and technologies your project is built with — and walk through how they work together.</p>'
                + '<p style="margin-top:12px;">Try follow-up questions like:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>"What happens when someone clicks the button?"</li>'
                + '<li>"How does the scoring work?"</li>'
                + '<li>"What technologies could I add or upgrade to make this more powerful or professional?"</li>'
                + '</ul>'
                + _tip('You don\'t need to understand every line of code to vibe code effectively. But having a general sense of how your app is put together makes you better at describing what you want changed. The AI is always there to explain — just ask.')
        },
        {
            title: 'Start Fresh & Generate Context',
            nextLabel: 'Break Something on Purpose',
            content: '<h2>Step 13: Start Fresh &amp; Generate Context</h2>'
                + '<p>Start a <strong>new conversation</strong> in your AI tool. This is a blank slate — the AI doesn\'t remember anything from before.</p>'
                + _cards([
                    { icon: '🧹', name: 'New Conversation', desc: 'A fresh start — no stale context or old instructions carrying over' },
                    { icon: '⚡', name: 'Run /init', desc: 'Scans your project and generates a <strong>context file</strong> the AI reads every time' },
                    { icon: '📝', name: 'Context File', desc: 'A cheat sheet for the AI — your tech stack, preferences, and project rules' },
                ], { style: 'margin:16px 0;' })
                + '<p>Type <code>/init</code> and hit Enter. The AI will scan your project and create a context file (like CLAUDE.md) that it reads automatically at the start of every future conversation.</p>'
                + '<p style="margin-top:12px;">You can customize the context file with your own instructions, or just run <code>/init</code> again periodically to have it auto-update as your project evolves.</p>'
                + _tip('Start a new conversation when you\'re switching tasks, when the AI seems confused, or when a conversation gets long. The context file ensures the AI always has the basics.')
        },
        {
            title: 'Break Something on Purpose',
            nextLabel: 'Practice Debugging',
            content: '<h2>Step 14: Break Something on Purpose</h2>'
                + '<p>Things will break when you\'re building — that\'s normal. Let\'s practice what to do when it happens by breaking something intentionally.</p>'
                + '<p style="margin-top:12px;">Tell your agent:</p>'
                + _term('Add a new interactive feature to the page, but intentionally include a JavaScript error in it — something that will show up in the browser console. Don\'t tell me what the error is. Commit the change.')
                + '<p style="margin-top:16px;">Refresh your browser. The new feature probably won\'t work — that\'s the point.</p>'
        },
        {
            title: 'Practice Debugging',
            nextLabel: 'Verify & Commit the Fix',
            content: '<h2>Step 15: Practice Debugging</h2>'
                + '<p>Now let\'s find and fix that bug.</p>'
                + '<h3>Find the Error</h3>'
                + '<ol class="step-num-list">'
                + '<li>Open your browser\'s <strong>Developer Tools</strong> — press <code>Cmd + Option + J</code> or <code>F12</code></li>'
                + '<li>Click the <strong>Console</strong> tab</li>'
                + '<li>Look for red error messages — they\'ll tell you what went wrong and which line caused it</li>'
                + '</ol>'
                + '<h3>Fix the Error</h3>'
                + '<p>Copy the error message from the console and paste it to your AI agent:</p>'
                + _term('I\'m getting an error.\n\nWhat I expected: [describe what should happen]\nWhat actually happened: [describe what you see instead]\n\nHere\'s the error from the browser console:\n[paste the error message]\n\n[paste a screenshot if helpful]')
                + '<p style="margin-top:16px;">The AI will read the error, find the problem, and fix it. Refresh and confirm it works.</p>'
                + _warn('This is the #1 debugging workflow in vibe coding: see a problem → open the console → copy the error → paste it to the AI. Memorize this loop — you\'ll use it constantly.')
        },
        {
            title: 'Verify & Commit the Fix',
            nextLabel: 'Roll Back with Git',
            content: '<h2>Step 16: Verify &amp; Commit the Fix</h2>'
                + '<p>Refresh your browser and check — is the error gone? Does everything work the way it should?</p>'
                + '<p style="margin-top:12px;">If yes, commit it! You can either ask the AI:</p>'
                + _term('Commit my changes with a message about fixing the bug')
                + '<p style="margin-top:12px;">Or do it yourself in SourceTree:</p>'
                + '<ol class="step-num-list">'
                + '<li>Open SourceTree and click <strong>File Status</strong> in the left sidebar — you\'ll see your changed files</li>'
                + '<li>Check the boxes next to the files you want to include (or click <strong>Stage All</strong>)</li>'
                + '<li>Type a commit message like <code>Fix broken button bug</code></li>'
                + '<li>Click <strong>Commit</strong></li>'
                + '</ol>'
                + '<p style="margin-top:16px;">Either way works. As you get more comfortable, you\'ll develop a preference.</p>'
        },
        {
            title: 'Roll Back with Git',
            nextLabel: 'Ask AI What\'s Next',
            content: '<h2>Step 17: Roll Back with Git</h2>'
                + '<p>Debugging isn\'t the only way to fix a bad change. Sometimes it\'s easier to just <strong>undo the whole commit</strong> and start over.</p>'
                + '<p style="margin-top:12px;">This is another reason git is so powerful — every commit is a checkpoint you can go back to.</p>'
                + '<p style="margin-top:12px;">Open SourceTree and find the commit from <strong>before</strong> the bug was introduced. Copy its commit message or ID (the short code like <code>a3f7b2</code>), then tell your AI:</p>'
                + _term('Reset my project back to this commit: [paste commit message or ID]')
                + _warn('When you say "reset," the AI will most likely erase those commits from your git history permanently. That\'s fine for now — but know that you can also ask the AI to <strong>revert nondestructively</strong>, which undoes the changes but keeps the full history.')
                + '<p style="margin-top:16px;">Refresh your browser — your project should be back to that working state. Check SourceTree to see what changed in your history.</p>'
                + _tip('This is great for when the AI makes a change that breaks everything and debugging would take longer than just undoing it.')
        },
        {
            title: 'Ask AI What\'s Next',
            nextLabel: null,
            content: '<h2>Step 18: Ask AI What\'s Next</h2>'
                + '<p>One of the most powerful things about AI tools is that they\'re not just builders — they\'re advisors. When you\'re not sure what to do next, just ask.</p>'
                + '<p style="margin-top:12px;">Try prompts like these:</p>'
                + _term('Look at my project and suggest 3 features or improvements that would make it more impressive. Explain why each one would be valuable.')
                + _term('What would a professional developer do to make this project production-ready? What am I missing — security, performance, accessibility, anything?')
                + _term('Suggest some UI/UX improvements for my project. What would make it feel more polished and professional to a user?')
                + '<p style="margin-top:16px;">The AI will analyze your project and give you specific, actionable suggestions. Pick one that sounds interesting and try building it — same workflow as before.</p>'
                + '<p style="margin-top:12px;">This is how you learn things you didn\'t know to ask about. The AI might suggest:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>Tools and techniques you\'ve never heard of</li>'
                + '<li>Best practices that professional developers follow</li>'
                + '<li>Features you didn\'t realize were possible</li>'
                + '<li>Ways to prepare your project for going live on the internet</li>'
                + '</ul>'
        }
    ]
};

// ── Prompting & AI Mastery Guide ───────────────────────────
const PROMPTING_GUIDE = {
    name: 'Prompting & AI Mastery',
    subtitle: 'How to communicate with AI effectively — prompting, context management, and debugging.',
    lastStepCards: [
        { icon: '🎯', name: 'Product Guidance', desc: 'Clarify what you\'re building and why', route: 'product-guidance' },
        { icon: '🛠️', name: 'Tech Stack & Hosting', desc: 'Choose the right tools and platform', route: 'tech-stack' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Project ideas, Git, GitHub, and the build cycle', route: 'Solo Project Guide.md' },
    ],
    steps: [
        {
            title: 'The Vibe Coding Spectrum',
            nextLabel: 'Writing Good Prompts',
            content: '<h2>The Vibe Coding Spectrum — Two Approaches to Building</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">All projects exist somewhere on a spectrum. Neither end is "right" — most projects use a mix.</p>'
                // ── Visual spectrum bar ──
                + '<div style="margin:0 0 32px; padding:24px 20px 16px; border-radius:12px; background:var(--surface-color); border:1px solid var(--border-color);">'
                + '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">'
                + '<span style="font-weight:700; font-size:0.95em;">Explore &amp; Iterate</span>'
                + '<span style="font-weight:700; font-size:0.95em;">Plan &amp; Execute</span>'
                + '</div>'
                + '<div style="height:8px; border-radius:4px; background:linear-gradient(to right, #60a5fa, #a78bfa, #f472b6); margin-bottom:10px;"></div>'
                + '<div style="display:flex; justify-content:space-between; font-size:0.85em; color:var(--text-muted);">'
                + '<span><a href="https://nerktendo.com/" target="_blank" style="color:var(--text-muted);">Nerktendo</a></span>'
                + '<span><a href="https://nerktendo.com/weather-worsener" target="_blank" style="color:var(--text-muted);">Weather Worsener</a> · <a href="https://linkp.ee" target="_blank" style="color:var(--text-muted);">LinkPee</a></span>'
                + '<span><a href="https://nerktendo.com/domainflip" target="_blank" style="color:var(--text-muted);">DomainFlip</a></span>'
                + '</div>'
                + '</div>'
                // ── Two approach cards side-by-side ──
                + '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:32px;">'
                // Card 1: Iterative
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-size:1.5em; margin-bottom:8px;">🌊</div>'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">Iterative Refinement</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Start broad, refine through conversation</div>'
                + '<div style="font-size:0.92em; line-height:1.7;">'
                + '<div style="margin-bottom:8px;"><span style="color:#22c55e;">✓</span> Explore possibilities &amp; spark creativity<br><span style="color:#22c55e;">✓</span> No planning required<br><span style="color:#22c55e;">✓</span> Perfect for learning &amp; prototyping</div>'
                + '<div><span style="color:var(--text-muted);">✗</span> More back-and-forth needed<br><span style="color:var(--text-muted);">✗</span> May drift from your vision<br><span style="color:var(--text-muted);">✗</span> Long context can slow things down</div>'
                + '</div>'
                + '</div>'
                // Card 2: Comprehensive
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-size:1.5em; margin-bottom:8px;">📋</div>'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">Comprehensive Brief</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Define everything upfront, then execute</div>'
                + '<div style="font-size:0.92em; line-height:1.7;">'
                + '<div style="margin-bottom:8px;"><span style="color:#22c55e;">✓</span> Faster to a polished result<br><span style="color:#22c55e;">✓</span> Stays true to your vision<br><span style="color:#22c55e;">✓</span> Better for complex requirements</div>'
                + '<div><span style="color:var(--text-muted);">✗</span> Requires knowing what you want<br><span style="color:var(--text-muted);">✗</span> Less room for discovery<br><span style="color:var(--text-muted);">✗</span> Harder for beginners to brief well</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                // ── DomainFlip workflow pipeline ──
                + '<h3>Real Example: The DomainFlip Workflow</h3>'
                + '<p style="margin-bottom:16px;"><a href="https://nerktendo.com/domainflip" target="_blank">DomainFlip</a> was built using the comprehensive brief approach — here\'s the pipeline:</p>'
                + _cards([
                    { icon: '💬', name: '1. Plan', desc: 'Used AI to define the product vision, revenue model, and marketing strategy' },
                    { icon: '📄', name: '2. Documents', desc: 'AI produced 8 build docs: architecture, UI components, mock data, and page specs' },
                    { icon: '⚡', name: '3. Execute', desc: 'Fed all documents to Claude Code in a single prompt' },
                    { icon: '✅', name: '4. Result', desc: 'Complete site built exactly to spec in one hour' },
                ], { style: 'margin-bottom:16px;' })
                + _tip('Use AI to plan your project in detail, then feed that plan to an AI coding agent. Read the <a href="#docs/domainflip/domainflip_summary.md" onclick="event.preventDefault(); loadRoute(\'docs/domainflip/domainflip_summary.md\');">DomainFlip build documents</a> for a real example.')
        },
        {
            title: 'Writing Good Prompts',
            nextLabel: 'Give Your AI Inspiration',
            content: '<h2>Good Prompts vs Better Prompts</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">The quality of your prompts directly determines the quality of the AI\'s output.</p>'
                + '<h3>Key Principles</h3>'
                + _cards([
                    { icon: '🎯', name: 'Be Specific', desc: 'Dimensions, colors, behaviors, structure — the more detail, the better the result' },
                    { icon: '📎', name: 'Include Context', desc: 'Tech stack, constraints, goals, what you\'ve already tried' },
                    { icon: '✅', name: 'Describe Outcomes', desc: 'What should happen, not just what to do' },
                    { icon: '🐛', name: 'Report Bugs Clearly', desc: 'Expected vs actual behavior + error messages' },
                ], { style: 'margin-bottom:28px;' })
                // ── Scenario cards ──
                + '<h3>Examples</h3>'
                + (function () {
                    var scenarios = [
                        { icon: '🏗️', label: 'Building', bad: 'Make me a website', good: 'Create a single-page portfolio site with a hero section, 3 project cards, and a contact form. Use a dark theme with blue accents.' },
                        { icon: '🐛', label: 'Debugging', bad: 'Fix it', good: 'The submit button doesn\'t work. When I click it, nothing happens but I expected [X]. Here\'s the error from the console: [paste error]' },
                        { icon: '🧩', label: 'Features', bad: 'Add a database', good: 'I think we need a database. Users should be able to save tasks with a title, description, and due date. Tasks should persist between sessions and each user should only see their own.' },
                        { icon: '🎨', label: 'Design', bad: 'Make it look better', good: 'Improve the card component: add subtle shadows, rounded corners, and a hover effect that slightly lifts the card.' },
                    ];
                    var h = '<div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:14px; margin-bottom:8px;">';
                    scenarios.forEach(function (s) {
                        h += '<div style="border-radius:10px; border:1px solid var(--border-color); overflow:hidden; background:var(--surface-color); padding:16px 20px;">';
                        h += '<div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;"><span style="font-size:1.1em;">' + s.icon + '</span><span style="font-weight:700; font-size:0.85em; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted);">' + s.label + '</span></div>';
                        h += '<div style="padding:8px 12px; border-radius:6px; border:1px dashed var(--border-color); margin-bottom:8px; font-size:0.92em; opacity:0.7;"><span style="color:var(--text-muted);">✗</span> "' + s.bad + '"</div>';
                        h += '<div style="padding:8px 12px; border-radius:6px; background:color-mix(in srgb, #22c55e 8%, var(--surface-color)); border:1px solid color-mix(in srgb, #22c55e 25%, var(--border-color)); font-size:0.95em;"><span style="color:#22c55e;">✓</span> "' + s.good + '"</div>';
                        h += '</div>';
                    });
                    h += '</div>';
                    return h;
                })()
        },
        {
            title: 'Give Your AI Inspiration',
            nextLabel: 'Steering the AI',
            content: '<h2>Show, Don\'t Just Tell</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Words are powerful, but visuals and references can communicate what\'s hard to describe. Give your AI something to work from.</p>'
                + '<h3>What You Can Share</h3>'
                + _cards([
                    { icon: '📸', name: 'Screenshots', desc: 'Capture a site, app, or design you like and paste it directly into the chat' },
                    { icon: '🔗', name: 'URLs', desc: 'Share links to sites you want to reference — many AI tools can read them' },
                    { icon: '🖼️', name: 'Design References', desc: 'Mockups, wireframes, sketches, or photos of whiteboard drawings' },
                    { icon: '📐', name: 'Specific Elements', desc: 'Screenshot just the nav bar, the card layout, or the color scheme you like' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>How to Use References Effectively</h3>'
                + '<ul style="padding-left:1.5em; margin-bottom:16px; line-height:1.8;">'
                + '<li><strong>Be specific about what you like</strong> — "I like the layout of this site, but I want different colors" is better than just pasting a link</li>'
                + '<li><strong>Combine references</strong> — "Use the navigation from this site and the card design from this one"</li>'
                + '<li><strong>Point out details</strong> — "Notice how the text fades in on scroll" or "I like the spacing between sections"</li>'
                + '</ul>'
                + _tip('You don\'t need to find the perfect reference. Even a rough sketch on paper, photographed and pasted into the chat, gives the AI more to work with than a text description alone.')
        },
        {
            title: 'Steering the AI',
            nextLabel: 'Plan Before You Build',
            content: '<h2>Stay in Control</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Sometimes AI goes off the rails. Know when to interrupt and how to course-correct.</p>'
                + '<h3>When to Interrupt</h3>'
                + _cards([
                    { icon: '📂', name: 'Wrong Files', desc: 'Editing the wrong file or creating unnecessary files' },
                    { icon: '🚫', name: 'Wrong Approach', desc: 'Taking a completely wrong approach to the problem' },
                    { icon: '🔧', name: 'Over-Engineering', desc: 'Making excessive changes beyond what you asked' },
                    { icon: '🔄', name: 'Going in Circles', desc: 'Trying the same failed fix repeatedly' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>How to Interrupt & Recover</h3>'
                + '<ol class="step-num-list">'
                + '<li><strong>Stop it</strong> — press the stop button or <code>esc</code> in command line tools</li>'
                + '<li><strong>Undo changes</strong> — go back in the conversation or reset files using Git</li>'
                + '<li><strong>Give clearer instructions</strong> — be more specific about what you want</li>'
                + '<li><strong>Add constraints</strong> — "only modify this file", "don\'t change the database schema"</li>'
                + '</ol>'
                + _warn('Mistakes compound. The longer AI goes down the wrong path, the more context gets polluted with bad code and failed attempts.')
        },
        {
            title: 'Plan Before You Build',
            nextLabel: 'How AI Context Works',
            content: '<h2>Use Plan Mode</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">For features and major changes, use <strong>plan mode</strong> to build out a detailed plan before the AI starts coding.</p>'
                + '<h3>Why It Matters</h3>'
                + _cards([
                    { icon: '🎯', name: 'Catch Misunderstandings', desc: 'Before code is written, not after' },
                    { icon: '🏗️', name: 'Control Architecture', desc: 'You decide the structure, not the AI' },
                    { icon: '⏱️', name: 'Save Time', desc: 'Prevents wasted effort from going down the wrong path' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>How to Use Plan Mode</h3>'
                + '<ol class="step-num-list">'
                + '<li>Describe the feature or change you want</li>'
                + '<li>Ask the AI to create a plan (or use the tool\'s built-in plan mode)</li>'
                + '<li>Review the proposed approach — files to create/modify, dependencies, structure</li>'
                + '<li>Request changes to the plan if needed</li>'
                + '<li>Approve and let the AI execute</li>'
                + '</ol>'
                + _tip('The bigger the change, the more valuable planning becomes. For small tweaks, just ask. For new features or refactors, plan first.')
        },
        {
            title: 'AI Context & Management',
            nextLabel: 'Debugging & Stubborn Bugs',
            content: '<h2>How AI Context Works</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Everything the AI knows fits inside a <strong>context window</strong> — a fixed-size memory. As conversations get long, older content gets compressed or dropped.</p>'
                + _cards([
                    { icon: '💬', name: 'Your Messages', desc: 'Every prompt, piece of feedback, and error you paste in' },
                    { icon: '📁', name: 'Project Files', desc: 'CLAUDE.md and any files the AI reads' },
                    { icon: '🕐', name: 'Conversation History', desc: 'All previous messages and code the AI has generated this session' },
                    { icon: '🌐', name: 'External Sources', desc: 'Web documentation, API responses, MCP server data' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>When to Start Fresh</h3>'
                + _cards([
                    { icon: '🔀', name: 'Switching Tasks', desc: 'Moving to an unrelated task or different part of the codebase' },
                    { icon: '🐌', name: 'Feeling Sluggish', desc: 'The conversation feels slow, repetitive, or confused' },
                    { icon: '🔄', name: 'Going in Circles', desc: 'AI keeps forgetting things you told it earlier' },
                    { icon: '🧹', name: 'Clean Slate', desc: 'You\'ve been through many iterations and want to reset' },
                ], { style: 'margin:16px 0 24px;' })
                + _note('Use the <code>/init</code> command to automatically generate and update your project documentation (CLAUDE.md). The AI scans your project and creates a context file it reads at the start of every conversation.')
        },
        {
            title: 'Debugging & Stubborn Bugs',
            content: '<h2>When Things Go Wrong</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">AI agents fix issues best when given complete information. Here\'s the workflow.</p>'
                + '<h3>The Debugging Workflow</h3>'
                + '<ol class="step-num-list">'
                + '<li><strong>Capture errors from DevTools</strong></li>'
                + '</ol>'
                + '<p>Open with <code>Cmd + Option + I</code> (Mac) or <code>F12</code> (Windows). Check the Console tab for red errors and the Network tab for failed requests.</p>'
                + '<ol class="step-num-list" start="2">'
                + '<li><strong>Describe the problem clearly</strong></li>'
                + '</ol>'
                + '<p>What you expected, what actually happened, steps to reproduce, and any recent changes.</p>'
                + '<ol class="step-num-list" start="3">'
                + '<li><strong>Provide context</strong></li>'
                + '</ol>'
                + '<p>Paste the full error message, include relevant code, and take a screenshot for visual bugs.</p>'
                + _tip('More context is better. AI can ignore what\'s irrelevant, but it can\'t guess what you didn\'t share.')
                + '<h3>Working Through Stubborn Bugs</h3>'
                + '<p>When the AI can\'t solve a bug after multiple attempts:</p>'
                + _cards([
                    { icon: '🔄', name: 'Try a Different AI', desc: 'Different models have different strengths. If Claude is stuck, try Gemini or vice versa.' },
                    { icon: '🤼', name: 'AI Debate Technique', desc: 'Ask two AIs the same question, then share each response with the other for critique.' },
                    { icon: '🧹', name: 'Fresh Context', desc: 'Start a new conversation with just the problem. Old failed attempts can mislead.' },
                    { icon: '🔬', name: 'Simplify & Isolate', desc: 'Ask the AI to create a minimal reproduction. Stripping away unrelated code reveals root causes.' },
                ], { style: 'margin-bottom:8px;' })
        }
    ]
};

// ── Product Guidance ───────────────────────────────────────
const PRODUCT_GUIDE = {
    name: 'Product Guidance',
    subtitle: 'Spend a few minutes thinking about what you\'re building before you start prompting.',
    lastStepCards: [
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🛠️', name: 'Tech Stack & Hosting', desc: 'Choose the right tools and platform for your project', route: 'tech-stack' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Project ideas, Git, GitHub, and the build cycle', route: 'Solo Project Guide.md' },
    ],
    steps: [
        {
            title: 'What Are You Building?',
            nextLabel: 'What Should It Feel Like?',
            content: '<h2>Start with the Purpose</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">The best vibe coders don\'t just describe code — they describe <strong>products</strong>. Before you start prompting, spend a minute thinking about what you\'re actually trying to create.</p>'
                + _cards([
                    { icon: '🎯', name: 'What problem does this solve?', desc: 'What need, frustration, or desire does this address? Even fun projects solve the problem of boredom.' },
                    { icon: '🔍', name: 'What exists today?', desc: 'What do people currently use? What\'s wrong with it? What would make yours better or different?' },
                    { icon: '✅', name: 'What does "done" look like?', desc: 'If this project worked perfectly, what would someone be able to do with it?' },
                ], { style: 'margin:16px 0 24px;' })
                + '<p>Even simple answers help. Compare these prompts:</p>'
                + '<div style="display:flex; gap:16px; flex-wrap:wrap; margin:16px 0;">'
                + '<div style="flex:1; min-width:200px; padding:16px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color);"><strong style="color:var(--text-muted);">Vague:</strong><br>"Make me a recipe app"</div>'
                + '<div style="flex:1; min-width:200px; padding:16px; border-radius:8px; border:1px solid var(--accent-color); background:var(--surface-color);"><strong>Clear purpose:</strong><br>"I meal prep on Sundays and need a recipe organizer that filters by dietary restrictions and generates a grocery list from selected recipes."</div>'
                + '</div>'
                + _tip('The more clearly you can answer these questions, the better your prompts and your product will be. For a real project, spend real time here — it pays off throughout the entire build.')
        },
        {
            title: 'What Should It Feel Like?',
            nextLabel: 'What\'s the Best Approach?',
            content: '<h2>Think About the Experience</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Describing the <em>experience</em> you want gives the AI better direction than a feature list alone.</p>'
                + '<h3>Set the Tone</h3>'
                + '<p>How should it feel to use?</p>'
                + '<ul style="margin:8px 0 20px 20px; line-height:1.8;">'
                + '<li><em>"Fast and minimal — no clutter, just the essentials"</em></li>'
                + '<li><em>"Playful and colorful — makes a boring task fun"</em></li>'
                + '<li><em>"Professional and trustworthy — someone would pay for this"</em></li>'
                + '</ul>'
                + '<h3>Walk Through a Feature</h3>'
                + '<p>Pick one key feature and describe the experience step by step. Here\'s an example for a recipe app\'s grocery list feature:</p>'
                + '<ol class="step-num-list">'
                + '<li><strong>The user browses recipes</strong> — they see recipe cards with photos, and can filter by "vegetarian" or "under 30 min"</li>'
                + '<li><strong>They select a few recipes</strong> — each selected recipe gets a checkmark, and a floating "Grocery List" button appears with a count</li>'
                + '<li><strong>They tap the grocery list</strong> — ingredients from all selected recipes are combined and organized by store aisle, with duplicates merged</li>'
                + '<li><strong>They go shopping</strong> — they can check off items as they shop, and the list saves so they can close the app and come back</li>'
                + '</ol>'
                + '<p>That level of detail — describing what the user sees, does, and gets back at each step — gives the AI everything it needs to build the right thing.</p>'
                + _tip('Do this for your project\'s most important feature. If you can walk through the experience clearly, your AI will build something much closer to what you actually want.')
        },
        {
            title: 'What\'s the Best Approach?',
            content: '<h2>Think About How It Should Work</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Before jumping into prompts, think about the <em>right way</em> to solve the problem — not the technology, but the approach.</p>'
                + _cards([
                    { icon: '🗺️', name: 'What\'s the core action?', desc: 'What\'s the one thing someone should be able to do? Start there, keep everything else secondary.' },
                    { icon: '⚖️', name: 'Simple or powerful?', desc: 'Does this need to do one thing perfectly, or many things flexibly? Both are valid — but pick one.' },
                    { icon: '📦', name: 'What data matters?', desc: 'What information does your app need to work with? Where does it come from — the user, an API, a file?' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>Ask Yourself</h3>'
                + '<ul style="margin:8px 0 24px 20px; line-height:1.8;">'
                + '<li>Is there a simpler version of this idea that still solves the problem?</li>'
                + '<li>What\'s the first thing I\'d show someone to prove this works?</li>'
                + '<li>What would make someone choose this over what already exists?</li>'
                + '</ul>'
                + _tip('You can also ask your AI for help here. Try: <em>"I want to build [idea]. What are the different ways I could approach this? What would you recommend for someone who wants to keep it simple?"</em>')
        }
    ]
};

// ── Tech Stack & Hosting Guide ────────────────────────────────
const TECH_STACK_GUIDE = {
    name: 'Tech Stack & Hosting',
    subtitle: 'Work with your AI to choose the right tools and platform for your project.',
    lastStepCards: [
        { icon: '🎯', name: 'Product Guidance', desc: 'Clarify what you\'re building before choosing tools', route: 'product-guidance' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Project ideas, Git, GitHub, and the build cycle', route: 'Solo Project Guide.md' },
        { icon: '🔥', name: 'Firebase & Deployment', desc: 'Step-by-step deployment walkthrough', route: 'Firebase %26 Deployment.md' },
    ],
    steps: [
        {
            title: 'Ask Your AI First',
            nextLabel: 'Static vs. Backend',
            content: '<h2>Let Your AI Help You Decide</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Your AI knows the landscape of frameworks, hosting platforms, and databases better than most developers. Use it as a technical advisor — describe what you\'re building and have a real conversation about the trade-offs.</p>'
                + '<h3>Questions to Ask</h3>'
                + '<div style="display:flex; flex-direction:column; gap:12px; margin:16px 0 24px;">'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"What are the most professional tech stack options for building [idea]? Walk me through the differences and why I\'d choose one over another."</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"If I use React with Next.js vs. plain HTML/JS, what do I gain and what does it cost me in complexity? How does that affect where I can host it?"</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"I want this to feel like a real product, not a side project. What stack and hosting setup would a professional team use for something like this?"</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"What happens when 1,000 people use this at once? What breaks first, and what would I need to change?"</div>'
                + '</div>'
                + _tip('Don\'t just accept the first recommendation. Ask follow-ups: <em>"What are the downsides of that?"</em> and <em>"What would you pick if I wanted to scale this later?"</em> — push the AI to give you the full picture.')
        },
        {
            title: 'Static vs. Backend',
            nextLabel: 'Hosting & Cost',
            content: '<h2>Do You Need a Server?</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">The biggest architectural decision is whether your project runs entirely in the browser or needs a server behind it.</p>'
                + '<div style="display:flex; gap:16px; flex-wrap:wrap; margin:16px 0 24px;">'
                + '<div style="flex:1; min-width:260px; padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:8px;">Browser Only (Static)</div>'
                + '<div style="color:var(--text-muted); font-size:0.95em; line-height:1.7;">HTML, CSS, JavaScript. No server needed. Free to host almost everywhere. <strong>Start here unless you have a reason not to.</strong></div>'
                + '<ul style="margin:12px 0 0 16px; font-size:0.95em; line-height:1.8;">'
                + '<li>Tools, calculators, basic games</li>'
                + '<li>Portfolios and landing pages</li>'
                + '<li>Apps that save data locally (localStorage)</li>'
                + '</ul>'
                + '</div>'
                + '<div style="flex:1; min-width:260px; padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:8px;">Needs a Backend</div>'
                + '<div style="color:var(--text-muted); font-size:0.95em; line-height:1.7;">A server that runs your code, stores data, and handles things the browser can\'t.</div>'
                + '<ul style="margin:12px 0 0 16px; font-size:0.95em; line-height:1.8;">'
                + '<li>User accounts and login</li>'
                + '<li>Data shared across users</li>'
                + '<li>Secret API keys that can\'t be in the browser</li>'
                + '<li>File uploads and storage</li>'
                + '</ul>'
                + '</div>'
                + '</div>'
                + _note('If none of the backend requirements apply, static HTML/JS is probably enough. A simple page that works is better than a complex app that\'s half-finished.')
        },
        {
            title: 'Hosting & Cost',
            nextLabel: 'Start Simple, Scale Later',
            content: '<h2>Where Should It Live?</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Most projects can be hosted for free or nearly free. Cost only becomes a factor at scale.</p>'
                + '<h3>Hosting Platforms at a Glance</h3>'
                + '<table style="width:100%; border-collapse:collapse; margin-bottom:24px;">'
                + '<thead><tr>'
                + '<th style="text-align:left; padding:10px 12px; border-bottom:2px solid var(--border-color);">What You\'re Building</th>'
                + '<th style="text-align:left; padding:10px 12px; border-bottom:2px solid var(--border-color);">Good Options</th>'
                + '<th style="text-align:left; padding:10px 12px; border-bottom:2px solid var(--border-color);">Free Tier?</th>'
                + '</tr></thead>'
                + '<tbody>'
                + '<tr><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Static site / frontend</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">GitHub Pages, Vercel, Netlify, Firebase, Cloudflare</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Yes, all free</td></tr>'
                + '<tr><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Backend + database</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Firebase, Supabase, Vercel, Cloudflare</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Generous free tiers</td></tr>'
                + '<tr><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Full control / custom server</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Railway, Render, DigitalOcean, AWS, Google Cloud, Cloudflare</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Limited or trial</td></tr>'
                + '</tbody></table>'
                + '<h3>What Costs Money</h3>'
                + '<p>Most costs come from three things:</p>'
                + _cards([
                    { icon: '💾', name: 'Database Storage', desc: 'Storing user data beyond the free tier. Usually not a concern until thousands of users.' },
                    { icon: '📡', name: 'API Calls', desc: 'Third-party APIs (AI, maps, payments) often charge per request. Watch your usage.' },
                    { icon: '🌐', name: 'Bandwidth / Compute', desc: 'Serving lots of traffic or running server-side code. Free tiers cover most small projects.' },
                    { icon: '🎬', name: 'Media Storage & Delivery', desc: 'Images, video, and audio files are much larger than database records. Storing and serving them adds up fast, especially video.' },
                    { icon: '🔗', name: 'Custom Domains', desc: 'A domain name costs ~$10–15/year. Small, but almost every real project needs one.' },
                ], { style: 'margin:16px 0 16px;' })
                + '<p>See <a href="#" onclick="event.preventDefault(); loadRoute(\'Backend & Hosting Platforms.md\');">Backend &amp; Hosting Platforms</a> for a detailed side-by-side comparison.</p>'
                + _tip('Ask your AI: <em>"What would it cost to host this project if 500 people used it daily?"</em> It can estimate based on your stack.')
        },
        {
            title: 'Start Simple, Scale Later',
            content: '<h2>Don\'t Over-Engineer</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">The biggest mistake is building for scale before you have users. Start with the simplest thing that works.</p>'
                + '<ol class="step-num-list">'
                + '<li><strong>Build the simplest version</strong> — get the core idea working, nothing more</li>'
                + '<li><strong>Deploy it</strong> — put it online so people can actually use it</li>'
                + '<li><strong>Get feedback</strong> — real usage tells you what to build next</li>'
                + '<li><strong>Add complexity when needed</strong> — add a database when localStorage isn\'t enough, add auth when you have real users, add a framework when plain HTML gets unwieldy</li>'
                + '</ol>'
                + '<h3>Let Your AI Help You Scale</h3>'
                + '<p>When you hit a wall, describe the problem to your AI:</p>'
                + '<div style="display:flex; flex-direction:column; gap:12px; margin:16px 0 24px;">'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"My app saves data to localStorage but I need multiple people to see the same data. What\'s the easiest way to add a shared database?"</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"This is getting slow with lots of items on screen. How can I optimize it?"</div>'
                + '</div>'
                + _tip('The best architecture is the simplest one that solves the problem. You can always add complexity later — removing it is much harder.')
        }
    ]
};

// ── GitHub Guide ──────────────────────────────────────────
const GITHUB_GUIDE = {
    name: 'GitHub Setup & First Push',
    subtitle: 'Create a GitHub account, connect your tools, and publish your first project.',
    lastStepCards: [
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Project ideas, Git, GitHub, and the build cycle', route: 'Solo Project Guide.md' },
        { icon: '🌐', name: 'Firebase & Deployment', desc: 'Deploy your project live on the web', route: 'Firebase & Deployment.md' },
    ],
    steps: [
        // ── Step 1: What is GitHub? ──
        {
            title: 'What is GitHub?',
            nextLabel: 'Create Your Account',
            content: '<h2>Your Project\'s Home on the Internet</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">GitHub is a website that stores your code online. Think of it as a cloud backup for your projects — but one that also lets you share your work, collaborate with others, and build a portfolio.</p>'
                + _cards([
                    { icon: '☁️', name: 'Backup', desc: 'Your code is safely stored online. If your computer dies, your projects survive.' },
                    { icon: '🤝', name: 'Collaboration', desc: 'Work on the same project with others without overwriting each other\'s changes.' },
                    { icon: '🌐', name: 'Portfolio', desc: 'Show off what you\'ve built. Employers and collaborators can see your work.' },
                    { icon: '🚀', name: 'Deployment', desc: 'Many hosting platforms deploy directly from GitHub with one click.' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>Git vs GitHub</h3>'
                + '<div style="display:flex; gap:16px; flex-wrap:wrap; margin:16px 0 24px;">'
                + '<div style="flex:1; min-width:220px; padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); text-align:center;">'
                + '<div style="font-size:2em; margin-bottom:8px;">🗂️</div>'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:8px;">Git</div>'
                + '<div style="color:var(--text-muted); font-size:0.95em;">A tool on <strong>your computer</strong> that tracks changes to your files. Like a super-powered undo history.</div>'
                + '</div>'
                + '<div style="flex:1; min-width:220px; padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); text-align:center;">'
                + '<div style="font-size:2em; margin-bottom:8px;">🌐</div>'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:8px;">GitHub</div>'
                + '<div style="color:var(--text-muted); font-size:0.95em;">A <strong>website</strong> that stores your Git projects online so you can share, collaborate, and back up your work.</div>'
                + '</div>'
                + '</div>'
                + _tip('You\'ve already been using Git if you followed any of the setup guides. GitHub is where you put that work online.')
        },
        // ── Step 2: Create Your Account ──
        {
            title: 'Create Your Account',
            nextLabel: 'Install Your Tools',
            content: '<h2>Sign Up for GitHub</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">GitHub is free for personal projects.</p>'
                + '<p style="font-size:1.1em; text-align:center; margin:24px 0;"><a href="https://github.com" target="_blank" rel="noopener noreferrer" style="font-weight:700;">Go to github.com</a> and click <strong>Sign up</strong>. Follow the on-screen steps to create your account.</p>'
                + _tip('Your username becomes part of your profile URL (github.com/your-name) and shows up on every project. Pick something you\'d be comfortable sharing professionally.')
        },
        // ── Step 3: Install Your Tools ──
        {
            title: 'Install Your Tools',
            nextLabel: 'Log In with Sourcetree',
            content: '<h2>Sourcetree & GitHub CLI</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">You\'ll use two tools to interact with GitHub. If you already installed these during setup, skip to the next step.</p>'
                + '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:24px;">'
                // Sourcetree card
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-size:1.8em; margin-bottom:8px;">🌳</div>'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">Sourcetree</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Visual Git app — see your changes, commit, and push with buttons instead of commands.</div>'
                + '<ol style="padding-left:1.3em; margin:0; font-size:0.95em; line-height:1.8;">'
                + '<li>Download from <a href="https://www.sourcetreeapp.com" target="_blank" rel="noopener noreferrer">sourcetreeapp.com</a></li>'
                + '<li>Open the installer and follow the prompts</li>'
                + '<li>Skip the Bitbucket account setup if asked</li>'
                + '</ol>'
                + '</div>'
                // gh CLI card
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-size:1.8em; margin-bottom:8px;">⌨️</div>'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">GitHub CLI (gh)</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Command-line tool for GitHub. <strong>Your AI coding agent needs this installed to create repos, push code, and manage GitHub for you.</strong></div>'
                + '<div style="margin-bottom:8px; font-size:0.95em; font-weight:600;">Mac:</div>'
                + _term('brew install gh')
                + '<div style="margin-bottom:8px; font-size:0.95em; font-weight:600; margin-top:12px;">Windows:</div>'
                + _term('winget install GitHub.cli')
                + '</div>'
                + '</div>'
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--accent-color); background:var(--surface-color); margin-bottom:16px;">'
                + '<div style="font-weight:700; font-size:1.05em; margin-bottom:8px;">Let Your AI Install These</div>'
                + '<div style="font-size:0.95em; line-height:1.7; color:var(--text-muted); margin-bottom:12px;">If you\'re using an AI coding agent with terminal access, just ask:</div>'
                + '<div style="padding:12px 16px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic; font-size:0.95em;">"Install Sourcetree and the GitHub CLI (gh) for me"</div>'
                + '</div>'
                + _note('Already installed these? Run <code>gh --version</code> in your terminal to check. If you see a version number, you\'re good — skip ahead.')
        },
        // ── Step 4: Log In with Sourcetree ──
        {
            title: 'Log In with Sourcetree',
            nextLabel: 'Log In with gh CLI',
            content: '<h2>Connect Sourcetree to GitHub</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">This lets Sourcetree push and pull code from your GitHub account.</p>'
                + '<ol class="step-num-list">'
                + '<li>Open <strong>Sourcetree</strong></li>'
                + '<li>Go to <strong>Sourcetree &rarr; Settings</strong> (Mac) or <strong>Tools &rarr; Options</strong> (Windows)</li>'
                + '<li>Click the <strong>Accounts</strong> tab</li>'
                + '<li>Click <strong>Add...</strong></li>'
                + '<li>Set <strong>Host</strong> to <strong>GitHub</strong></li>'
                + '<li>Set <strong>Preferred Protocol</strong> to <strong>HTTPS</strong></li>'
                + '<li>Click <strong>Connect Account</strong> — your browser will open to authorize Sourcetree</li>'
                + '<li>Log in to GitHub and click <strong>Authorize</strong></li>'
                + '</ol>'
                + _check([
                    'Your GitHub username appears in the Accounts list',
                    'The protocol says HTTPS',
                ])
                + '<div style="margin-top:24px;"></div>'
                + _warn('<strong>Getting SSH errors?</strong> This is common. Make sure you selected <strong>HTTPS</strong> (not SSH) in step 6. If you\'re still having trouble, the gh CLI method in the next step is often easier.')
                + '<div style="margin-top:16px;"></div>'
                + '<details style="border:1px solid var(--border-color); border-radius:8px; padding:12px 16px; background:var(--surface-color);">'
                + '<summary style="cursor:pointer; font-weight:600;">Troubleshooting: HTTPS Not Working?</summary>'
                + '<div style="margin-top:12px; font-size:0.95em; line-height:1.7;">'
                + '<p>If HTTPS authentication fails, try SSH as a fallback:</p>'
                + '<ol style="padding-left:1.3em;">'
                + '<li>In the Account settings, change <strong>Preferred Protocol</strong> to <strong>SSH</strong></li>'
                + '<li>If you don\'t have an SSH key, open your terminal and run:</li>'
                + '</ol>'
                + _term('ssh-keygen -t ed25519 -C "your-email@example.com"')
                + '<p>Press Enter through all the prompts (defaults are fine).</p>'
                + '<ol start="3" style="padding-left:1.3em;">'
                + '<li>Copy your public key:</li>'
                + '</ol>'
                + _term('# Mac\ncat ~/.ssh/id_ed25519.pub | pbcopy\n\n# Windows\ntype %USERPROFILE%\\.ssh\\id_ed25519.pub | clip')
                + '<ol start="4" style="padding-left:1.3em;">'
                + '<li>Go to <a href="https://github.com/settings/keys" target="_blank" rel="noopener noreferrer">github.com/settings/keys</a> &rarr; <strong>New SSH key</strong> &rarr; paste and save</li>'
                + '</ol>'
                + '</div></details>'
        },
        // ── Step 5: Log In with gh CLI ──
        {
            title: 'Log In with gh CLI',
            nextLabel: 'Create a Repository',
            content: '<h2>Authenticate the GitHub CLI</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">The <code>gh</code> CLI handles authentication automatically — no tokens or keys to manage.</p>'
                + '<h3>Run the Login Command</h3>'
                + _term('gh auth login')
                + '<h3>Answer the Prompts</h3>'
                + '<p>The CLI will ask you a few questions. Here\'s what to pick:</p>'
                + '<div style="margin:16px 0 24px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); overflow:hidden;">'
                + '<div style="display:grid; grid-template-columns:1fr 1fr; font-size:0.95em;">'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color); font-weight:600; background:var(--surface-color);">Question</div>'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color); font-weight:600; background:var(--surface-color);">Choose</div>'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color);">Where do you use GitHub?</div>'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color);"><strong>GitHub.com</strong></div>'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color);">Preferred protocol for Git?</div>'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color);"><strong>HTTPS</strong></div>'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color);">Authenticate Git with credentials?</div>'
                + '<div style="padding:12px 16px; border-bottom:1px solid var(--border-color);"><strong>Yes</strong></div>'
                + '<div style="padding:12px 16px;">How to authenticate?</div>'
                + '<div style="padding:12px 16px;"><strong>Login with a web browser</strong></div>'
                + '</div>'
                + '</div>'
                + '<p>The CLI will give you a one-time code and open your browser. Paste the code, authorize, and you\'re done.</p>'
                + _check([
                    'Run <code>gh auth status</code> — you should see your username and "Logged in"',
                ])
                + '<div style="margin-top:20px;"></div>'
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--accent-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.05em; margin-bottom:8px;">Let Your AI Help</div>'
                + '<div style="font-size:0.95em; line-height:1.7; color:var(--text-muted);">If you\'re using an AI coding agent (Claude Code, Gemini CLI, etc.), you can ask it:<br>'
                + '<em>"Help me log into GitHub using the gh CLI with HTTPS"</em><br>'
                + 'The AI will walk you through each prompt in real time.</div>'
                + '</div>'
        },
        // ── Step 6: Create a Repository ──
        {
            title: 'Create a Repository',
            nextLabel: 'Push Your Project',
            content: '<h2>Your Project\'s Online Home</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">A <strong>repository</strong> (or "repo") is a folder on GitHub that holds one project. You need one repo per project.</p>'
                + '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:28px;">'
                // Option A: Ask your AI
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">Option A: Ask Your AI</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Your AI agent will use the gh CLI to do it for you</div>'
                + _term('Create a public GitHub repository for this project and connect it')
                + '</div>'
                // Option B: GitHub website
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">Option B: On GitHub.com</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Do it yourself on the website</div>'
                + '<ol style="padding-left:1.3em; margin:0; font-size:0.95em; line-height:1.8;">'
                + '<li>Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">github.com/new</a></li>'
                + '<li>Enter a <strong>Repository name</strong> (e.g., <code>my-project</code>)</li>'
                + '<li>Set to <strong>Public</strong> (so others can see it)</li>'
                + '<li><strong>Don\'t</strong> check "Add a README" (we\'ll create one ourselves)</li>'
                + '<li>Click <strong>Create repository</strong></li>'
                + '</ol>'
                + '</div>'
                + '</div>'
                + _tip('Name your repo after your project. Use lowercase and hyphens: <code>weather-app</code>, <code>recipe-finder</code>, <code>my-portfolio</code>.')
                + '<div style="margin-top:16px;"></div>'
                + _note('If you used Option B on the website, GitHub will show you a page with setup commands. Keep that page open — you\'ll use it in the next step.')
        },
        // ── Step 7: Push Your Project ──
        {
            title: 'Push Your Project',
            nextLabel: 'Add a README',
            content: '<h2>Upload Your Code to GitHub</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;"><strong>Pushing</strong> means sending your local Git commits up to GitHub. Your code stays on your computer too — GitHub just gets a copy.</p>'
                + '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:28px;">'
                // Option A: Ask your AI
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">Option A: Ask Your AI</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Your AI agent will handle the git commands for you</div>'
                + _term('Push this project to my GitHub repository')
                + '</div>'
                // Option B: Sourcetree
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:4px;">Option B: With Sourcetree</div>'
                + '<div style="color:var(--text-muted); font-size:0.9em; margin-bottom:12px;">Visual approach</div>'
                + '<ol style="padding-left:1.3em; margin:0; font-size:0.95em; line-height:1.8;">'
                + '<li>Open your project in Sourcetree</li>'
                + '<li>If you haven\'t committed yet: stage your files and click <strong>Commit</strong></li>'
                + '<li>Click <strong>Repository &rarr; Repository Settings</strong></li>'
                + '<li>Under <strong>Remotes</strong>, click <strong>Add</strong></li>'
                + '<li>Name: <code>origin</code>, URL: paste the HTTPS URL from GitHub</li>'
                + '<li>Click <strong>Push</strong> in the toolbar</li>'
                + '<li>Check <strong>main</strong> (or <strong>master</strong>) and click <strong>OK</strong></li>'
                + '</ol>'
                + '</div>'
                + '</div>'
                + _check([
                    'Go to <code>github.com/YOUR-USERNAME/my-project</code> — you should see your files',
                ])
                + '<div style="margin-top:16px;"></div>'
                + _warn('<strong>Push rejected?</strong> If you get an error about "updates were rejected," it usually means the remote has files you don\'t (like an auto-generated README). Ask your AI: <em>"My git push was rejected, help me fix it."</em>')
        },
        // ── Step 8: Add a README ──
        {
            title: 'Add a README',
            content: '<h2>Your Project\'s Front Page</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">A <strong>README.md</strong> file is displayed automatically on your repo\'s GitHub page. It\'s the first thing anyone sees when they visit your project.</p>'
                + '<h3>The Essentials</h3>'
                + '<p>A good README needs at least these four things:</p>'
                + _cards([
                    { icon: '📛', name: 'Project Name & Description', desc: 'What it\'s called and what it does in a sentence or two' },
                    { icon: '🏃', name: 'How to Use It', desc: 'Link to the live site, or instructions for how to try it out' },
                    { icon: '💻', name: 'Development Setup', desc: 'How to clone the repo, install dependencies, and run it locally' },
                    { icon: '📸', name: 'Screenshot or Demo', desc: 'A picture or GIF of your project in action — first impressions matter' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>Nice to Have</h3>'
                + '<p>As your project grows, consider adding:</p>'
                + '<ul style="margin:8px 0 24px 20px; line-height:1.8;">'
                + '<li><strong>Tech stack</strong> — languages, frameworks, and key libraries</li>'
                + '<li><strong>Project structure</strong> — overview of key files and folders</li>'
                + '<li><strong>Contributing guide</strong> — how others can submit changes</li>'
                + '<li><strong>License</strong> — what others can do with your code (MIT is a safe default)</li>'
                + '</ul>'
                + '<h3>Have Your AI Write It</h3>'
                + '<p>Don\'t overthink it — your AI already knows your project. Just ask:</p>'
                + _term('Create a README.md for this project')
                + '<h3>Commit & Push the README</h3>'
                + '<p>After the AI creates the file:</p>'
                + _term('Commit the README and push it to GitHub')
                + '<p>Or do it yourself in Sourcetree — stage the <code>README.md</code> file, commit with a message like "Add README", and click Push.</p>'
                + _check([
                    'Visit your repo on GitHub — the README renders below your file list',
                    'It includes all the key sections: description, tech stack, usage, and development setup',
                ])
                + '<div style="margin-top:20px;"></div>'
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); text-align:center;">'
                + '<div style="font-size:1.8em; margin-bottom:8px;">🎉</div>'
                + '<div style="font-weight:700; font-size:1.15em; margin-bottom:8px;">Your Project is on GitHub!</div>'
                + '<div style="color:var(--text-muted); font-size:0.95em;">You now have a public portfolio piece. Share the link with anyone: <code>github.com/YOUR-USERNAME/my-project</code></div>'
                + '</div>'
        },
        // ── Step 9: Learn More ──
        {
            title: 'Learn More',
            content: '<h2>What Else Can You Do with Git & GitHub?</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">You\'ve covered the basics — but Git and GitHub can do a lot more. Here\'s what to explore next as your projects grow.</p>'
                + _cards([
                    { icon: '🌿', name: 'Branches', desc: 'Work on new features without affecting your main code. Merge them in when they\'re ready.' },
                    { icon: '🔀', name: 'Pull Requests', desc: 'Propose changes and review code before merging. The standard way teams collaborate on GitHub.' },
                    { icon: '🌐', name: 'GitHub Pages', desc: 'Host a static website directly from your repo for free. Great for portfolios and project demos.' },
                    { icon: '⚙️', name: 'GitHub Actions', desc: 'Automate tasks like testing, building, and deploying your code every time you push.' },
                ], { style: 'margin:16px 0 16px;' })
                + _cards([
                    { icon: '🐛', name: 'Issues', desc: 'Track bugs, feature requests, and to-dos right inside your repo. Useful even for solo projects.' },
                    { icon: '🔖', name: 'Releases & Tags', desc: 'Mark specific versions of your project so you can always go back to a known-good state.' },
                    { icon: '👥', name: 'Forking', desc: 'Copy someone else\'s repo to your account, make changes, and submit them back as a pull request.' },
                    { icon: '🔒', name: '.gitignore', desc: 'Tell Git which files to skip — API keys, node_modules, build artifacts, and other junk.' },
                ], { style: 'margin:0 0 24px;' })
                + _tip('You don\'t need to learn all of this at once. Branches and GitHub Pages are the most useful next steps for most people.')
                // ── Essential Git Commands ──
                + '<h3>Essential Git Commands</h3>'
                + '<p>You only need a handful of commands to use Git effectively. Your AI can run these for you, but it\'s good to know what\'s happening.</p>'
                + '<div style="margin:16px 0 24px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); overflow:hidden;">'
                + '<div style="display:grid; grid-template-columns:auto 1fr 1fr; font-size:0.95em;">'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color); font-weight:600;">Command</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color); font-weight:600;">What It Does</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color); font-weight:600;">Plain English</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git init</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Create a new repository</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Start tracking this folder</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git add .</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Stage all changes</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Select everything I changed</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git commit -m "msg"</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Create a commit</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Save this checkpoint</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git push</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Upload to GitHub</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Back up to the cloud</div>'
                + '<div style="padding:10px 16px;"><code>git status</code></div>'
                + '<div style="padding:10px 16px;">See what\'s changed</div>'
                + '<div style="padding:10px 16px;">What have I done since last save?</div>'
                + '</div>'
                + '</div>'
                + '<p>The workflow is simple: make changes, <code>git add .</code>, <code>git commit -m "message"</code>, <code>git push</code>. Repeat every time you get something working.</p>'
                // ── What If I Mess Up? ──
                + '<h3>What If I Mess Up?</h3>'
                + '<p>Git\'s whole point is that you can undo things. The more often you commit, the more save points you have.</p>'
                + '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px; margin:16px 0 24px;">'
                + '<div style="padding:16px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:600; margin-bottom:6px;">Undo uncommitted changes</div>'
                + '<div style="font-size:0.95em; color:var(--text-muted); margin-bottom:8px;">Revert everything back to the last commit</div>'
                + _term('git checkout .')
                + '</div>'
                + '<div style="padding:16px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:600; margin-bottom:6px;">Undo the last commit (keep changes)</div>'
                + '<div style="font-size:0.95em; color:var(--text-muted); margin-bottom:8px;">Removes the commit but keeps your files as they were</div>'
                + _term('git reset --soft HEAD~1')
                + '</div>'
                + '</div>'
                + '<p>Or just ask your AI: <em>"Undo my last commit"</em> or <em>"Revert my project to the commit where I added the login page."</em></p>'
                // ── .gitignore ──
                + '<h3>Set Up .gitignore</h3>'
                + '<p>A <code>.gitignore</code> file tells Git which files to skip — things you don\'t want tracked or uploaded to GitHub:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li><strong><code>.env</code></strong> — API keys and secrets (never commit these)</li>'
                + '<li><strong><code>node_modules/</code></strong> — installed packages (can be reinstalled)</li>'
                + '<li><strong><code>.DS_Store</code></strong> — macOS system files</li>'
                + '<li><strong>Build folders</strong> — generated files that can be recreated</li>'
                + '</ul>'
                + _term('Create a .gitignore file for my project')
        }
    ]
};

// ── Beyond Coding Data ─────────────────────────────────────
const BEYOND_CODING_CATEGORIES = [
    { icon: '📊', name: 'Data & Files', desc: 'Analyze CSV/JSON data, convert file formats, rename and organize files in bulk, create test data', examples: ['Analyze spreadsheets', 'Convert formats', 'Bulk rename files', 'Generate test data'] },
    { icon: '🔍', name: 'Organization & Research', desc: 'Organize notes, research APIs and libraries, summarize long documents or codebases', examples: ['Organize Notion/Obsidian', 'Research solutions', 'Summarize documents'] },
    { icon: '⚡', name: 'Automation', desc: 'Shell scripts for repetitive tasks, scheduled jobs and workflows, batch processing files or images', examples: ['Shell scripts', 'Scheduled jobs', 'Batch processing'] },
];

