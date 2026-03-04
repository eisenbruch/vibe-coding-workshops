// ── Advanced Techniques Guide ──────────────────────────────
const ADVANCED_TECHNIQUES_GUIDE = {
    name: 'Advanced Techniques',
    subtitle: 'Power features for AI coding agents — agents, commands, skills, plugins, and more.',
    lastStepCards: [
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '✨', name: 'Clean Up & Optimize', desc: 'Polish your code, fix bugs, and improve performance', route: 'cleanup-guide' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
    ],
    steps: [
        // ── Agents ──
        {
            title: 'Running Parallel Agents',
            nextLabel: 'Extending Your AI',
            content: '<h2>Run Multiple Tasks at Once</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">AI coding agents can spawn parallel instances that autonomously complete complex workflows simultaneously. Instead of doing things one at a time, you can have multiple agents working on different parts of your project at once.</p>'
                + _cards([
                    { icon: '🔀', name: 'Parallel Work', desc: 'Multiple agents working on independent tasks simultaneously' },
                    { icon: '📊', name: 'Batch Analysis', desc: 'Analyze several files, data sources, or reports at the same time' },
                    { icon: '🔧', name: 'Multi-Part Tasks', desc: 'Refactoring across files, running independent subtasks' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>When to Use It</h3>'
                + '<p>You have a large or multi-part task — analyzing several data sources, refactoring across files, or running independent subtasks simultaneously.</p>'
                + '<h3>How to Use It</h3>'
                + '<p>Ask your AI to start agents or tasks. It will spawn parallel instances that coordinate and report back.</p>'
                + _term('Spin up agents to analyze each of these three CSV reports and summarize the findings')
                + _term('Use agents to refactor the authentication, database, and API modules in parallel')
                + _term('I want to add tests to all my API routes — would it help to use parallel agents?')
                + _tip('Agents work best when tasks are independent — if one task depends on another\'s output, they should run sequentially. Your AI will usually handle this automatically.')
        },
        // ── Extending Your AI (intro) ──
        {
            title: 'Extending Your AI',
            nextLabel: 'Custom Commands',
            content: '<h2>Commands, Skills & Plugins</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:16px;">AI coding agents can be extended with reusable instructions and tools. There are three layers — each builds on the last:</p>'
                + '<div style="overflow-x:auto; margin:0 0 24px;"><table style="width:100%; border-collapse:collapse; font-size:0.95em;"><thead><tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left; padding:8px 12px;"></th><th style="text-align:left; padding:8px 12px;">Commands</th><th style="text-align:left; padding:8px 12px;">Skills</th><th style="text-align:left; padding:8px 12px;">Plugins</th></tr></thead><tbody>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px; font-weight:600;">What</td><td style="padding:8px 12px;">Single <code>.md</code> file</td><td style="padding:8px 12px;">Folder with instructions + supporting files</td><td style="padding:8px 12px;">Package bundling skills, agents, hooks, & more</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px; font-weight:600;">Invocation</td><td style="padding:8px 12px;">Manual (<code>/name</code>)</td><td style="padding:8px 12px;">Manual + automatic</td><td style="padding:8px 12px;">Via namespaced skills</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px; font-weight:600;">Sharing</td><td style="padding:8px 12px;">Copy the file</td><td style="padding:8px 12px;">Copy the folder</td><td style="padding:8px 12px;">Install from marketplace</td></tr>'
                + '<tr><td style="padding:8px 12px; font-weight:600;">Best for</td><td style="padding:8px 12px;">Quick personal shortcuts</td><td style="padding:8px 12px;">Workflows & conventions</td><td style="padding:8px 12px;">Team & community distribution</td></tr>'
                + '</tbody></table></div>'
                + _tip('You don\'t need to write any of these by hand. Your AI is great at creating commands, skills, and plugins for you — just describe what you want or ask it to turn a workflow you just did into one.')
        },
        // ── Custom Commands ──
        {
            title: 'Custom Commands',
            nextLabel: 'Skills',
            content: '<h2>Save Your Most Common Prompts</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Custom commands are reusable shortcuts that save your most common prompts so you don\'t have to describe them each time.</p>'
                + _note('Custom commands have been merged into the Skills system (next step). Your existing <code>.claude/commands/</code> files still work, but Skills are the recommended approach going forward.')
                + '<h3>When to Use It</h3>'
                + '<p>You find yourself repeating the same type of request — scraping a new source, committing with a specific format, generating boilerplate.</p>'
                + '<h3>How to Create One</h3>'
                + '<p>Just ask your agent. Describe what you want, or better yet — if you just had it do something you\'ll want again, ask it to save that as a command.</p>'
                + _term('I keep asking you to scrape URLs and save them as JSON. Create a command for that.')
                + _term('That deploy process you just ran — save that as a /deploy command.')
                + '<p style="margin-top:16px;">Your agent creates a markdown file in <code>.claude/commands/</code> that you can invoke anytime with <code>/command-name</code>.</p>'
                + _tip('Think of any prompt you\'ve typed more than twice. That\'s a command waiting to happen.')
        },
        // ── Skills ──
        {
            title: 'Skills',
            nextLabel: 'Plugins',
            content: '<h2>Teach Your AI New Abilities</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Skills are folders of instructions, scripts, and resources that your AI loads dynamically to perform specialized tasks. They\'re the evolution of custom commands — everything commands can do, plus bundled files, automatic invocation, and invocation control.</p>'
                + '<h3>When to Use It</h3>'
                + '<p>You want your AI to follow specific workflows, conventions, or step-by-step procedures — either on demand or automatically when relevant.</p>'
                + '<h3>Finding & Installing Skills</h3>'
                + '<p>Before creating your own, check what\'s already available. Browse <a href="https://skills.sh" target="_blank">skills.sh</a> for the full directory, or start with these recommended sets:</p>'
                + '<p style="margin:16px 0 8px;"><strong><a href="https://skills.sh/anthropics/skills" target="_blank">Claude Official Skills</a></strong> — install with <code>npx skills add anthropics/skills</code></p>'
                + '<p style="margin:0 0 4px; font-size:0.95em;">Frontend design, PDFs, Word docs, spreadsheets, PowerPoints, webapp testing, MCP server builder, canvas design, algorithmic art, doc co-authoring, and more.</p>'
                + '<p style="margin:16px 0 8px;"><strong><a href="https://skills.sh/obra/superpowers" target="_blank">Superpowers</a></strong> — install with <code>npx skills add obra/superpowers</code></p>'
                + '<p style="margin:0 0 4px; font-size:0.95em;">Brainstorming, systematic debugging, writing &amp; executing plans, test-driven development, code review, verification before completion, parallel agents, and git worktrees.</p>'
                + '<h3>How to Invoke</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>Type <code>/skill-name</code> to invoke directly (e.g., <code>/explain-code src/auth.ts</code>)</li>'
                + '<li>The AI can also invoke skills automatically when your request matches the description</li>'
                + '</ul>'
                + '<h3>Creating Your Own</h3>'
                + '<p>Ask your agent. Describe the workflow you want, or ask it to turn something it just did into a reusable skill.</p>'
                + _term('Create a skill that explains code using analogies, ASCII diagrams, and step-by-step walkthroughs.')
                + _term('That code review process you just did was perfect. Create a skill so you always review code that way.')
                + '<p style="margin-top:16px;">Your agent creates a folder with a <code>SKILL.md</code> file like this:</p>'
                + _term('---\nname: explain-code\ndescription: Explains code with visual diagrams and analogies.\n  Use when explaining how code works.\n---\n\nWhen explaining code, always include:\n1. Start with an analogy\n2. Draw a diagram using ASCII art\n3. Walk through the code step-by-step\n4. Highlight a common gotcha')
                + '<p style="margin-top:12px;">The <code>name</code> becomes the <code>/slash-command</code>. The <code>description</code> tells the AI when to load it automatically.</p>'
        },
        // ── Plugins ──
        {
            title: 'Plugins',
            nextLabel: 'Git Worktrees',
            content: '<h2>Package & Share Extensions</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Plugins are complete packages that bundle skills, agents, hooks, and MCP servers into a single installable unit. If skills teach your AI how to do something, plugins let you share that knowledge with your team or the community.</p>'
                + '<h3>When to Use It</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>You want to share a set of skills and tools across multiple projects</li>'
                + '<li>Your team needs a standardized workflow everyone can install</li>'
                + '<li>You found a community plugin that adds capabilities you need</li>'
                + '</ul>'
                + '<h3>Installing Plugins</h3>'
                + '<p>Browse available plugins with <code>/plugin</code> and go to the Discover tab, or install directly:</p>'
                + _term('# Install a plugin\n/plugin install plugin-name\n\n# List installed plugins\n/plugin list')
                + '<h3>Recommended Plugins</h3>'
                + '<div style="overflow-x:auto; margin:12px 0 20px;"><table style="width:100%; border-collapse:collapse; font-size:0.95em;"><thead><tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left; padding:8px 12px;">Plugin</th><th style="text-align:left; padding:8px 12px;">What it adds</th></tr></thead><tbody>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;"><code>superpowers</code></td><td style="padding:8px 12px;">Brainstorming, debugging, planning, TDD, code review, and more</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;"><code>frontend-design</code></td><td style="padding:8px 12px;">Production-grade UI design with high design quality</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;"><code>vercel</code></td><td style="padding:8px 12px;">Deploy and manage Vercel projects</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;"><code>github</code></td><td style="padding:8px 12px;">Manage PRs, issues, and repo operations</td></tr>'
                + '<tr><td style="padding:8px 12px;"><code>figma</code></td><td style="padding:8px 12px;">Import designs directly from Figma</td></tr>'
                + '</tbody></table></div>'
                + '<h3>What\'s Inside a Plugin</h3>'
                + '<p>A plugin is a directory with a <code>.claude-plugin/plugin.json</code> manifest that can contain any combination of:</p>'
                + '<div style="overflow-x:auto; margin:12px 0 20px;"><table style="width:100%; border-collapse:collapse; font-size:0.95em;"><thead><tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left; padding:8px 12px;">Component</th><th style="text-align:left; padding:8px 12px;">What it adds</th></tr></thead><tbody>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Skills</td><td style="padding:8px 12px;">Reusable instructions and workflows</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Agents</td><td style="padding:8px 12px;">Specialized sub-agents for specific tasks</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Hooks</td><td style="padding:8px 12px;">Automated actions triggered by events</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">MCP Servers</td><td style="padding:8px 12px;">Connections to external tools and services</td></tr>'
                + '<tr><td style="padding:8px 12px;">Settings</td><td style="padding:8px 12px;">Default configuration applied on install</td></tr>'
                + '</tbody></table></div>'
                + '<h3>Namespacing</h3>'
                + '<p>Plugin skills are namespaced to prevent conflicts. If a plugin called <code>my-tools</code> includes a skill called <code>deploy</code>, you invoke it as <code>/my-tools:deploy</code>.</p>'
                + '<h3>Creating a Plugin</h3>'
                + '<p>Create a <code>.claude-plugin/plugin.json</code> manifest in your project:</p>'
                + _term('{\n  "name": "my-team-tools",\n  "version": "1.0.0",\n  "description": "Shared workflows for our team",\n  "skills": ["skills/*"],\n  "agents": ["agents/*"],\n  "hooks": ["hooks/*"]\n}')
                + '<p style="margin-top:16px;">Then organize your components alongside it:</p>'
                + _term('my-team-tools/\n├── .claude-plugin/\n│   └── plugin.json        # Manifest (required)\n├── skills/\n│   ├── deploy/SKILL.md    # Deploy workflow\n│   └── review/SKILL.md    # Code review process\n├── agents/\n│   └── test-runner.md     # Specialized test agent\n└── hooks/\n    └── pre-commit.sh      # Auto-lint before commits')
                + _tip('Start by installing community plugins to see what\'s possible. When you find yourself copying skills between projects, that\'s a plugin waiting to happen.')
        },
        // ── Git Worktrees ──
        {
            title: 'Git Worktrees',
            nextLabel: 'MCP Servers',
            content: '<h2>Work on Multiple Branches at Once</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Git worktrees let you work on multiple branches simultaneously without switching contexts or cloning the repo again. Each worktree has its own directory and branch, but shares git history.</p>'
                + '<h3>When to Use It</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>You\'re building a feature but need to fix a bug on main</li>'
                + '<li>You want to test different approaches side-by-side</li>'
                + '<li>You need to do code review without disrupting your current work</li>'
                + '</ul>'
                + '<h3>Try It</h3>'
                + '<ol style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>Pick a feature or change you want to make (e.g., add a dark mode toggle, create a new page, refactor a component)</li>'
                + '<li>Ask your agent to create a worktree based on a branch and implement the change there:</li>'
                + '</ol>'
                + _term('Create a worktree from the main branch and add [describe your feature/change] there.')
                + '<ol start="3" style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>While the agent works in the worktree, your main branch stays untouched — you can keep working on something else</li>'
                + '<li>When it\'s done, review the changes and merge or discard the branch</li>'
                + '</ol>'
                + _tip('Your agent handles the git commands for you — you don\'t need to memorize worktree syntax.')
                + _tip('If worktrees are confusing to you (or if any advanced workflow is), ask your AI to explain it as it works.')
        },
        // ── MCP Servers ──
        {
            title: 'MCP Servers',
            nextLabel: null,
            content: '<h2>Connect to External Tools & Services</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">MCP (Model Context Protocol) servers are plugins that connect your AI to external tools, APIs, databases, and services through a standardized protocol.</p>'
                + '<h3>When to Use It</h3>'
                + '<p>You need real-time data, want to connect to services like GitHub/Slack/Google Drive, or need specialized capabilities like browser automation or web search.</p>'
                + '<h3>How to Use It</h3>'
                + '<p><strong>Claude Desktop:</strong> Settings → Extensions → Browse extensions (one-click install)</p>'
                + '<p><strong>Claude Code (CLI):</strong></p>'
                + _term('# Add a server (use --scope user for all projects)\nclaude mcp add github --scope user\n\n# Add with environment variables\nclaude mcp add -e API_KEY=your_key servername -- npx @org/server\n\n# Check what\'s installed\nclaude mcp list')
                + '<h3>Common Servers</h3>'
                + '<div style="overflow-x:auto; margin:12px 0 20px;"><table style="width:100%; border-collapse:collapse; font-size:0.95em;"><thead><tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left; padding:8px 12px;">Server</th><th style="text-align:left; padding:8px 12px;">What it does</th></tr></thead><tbody>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Filesystem</td><td style="padding:8px 12px;">Read/write local files with permission-based access</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">GitHub</td><td style="padding:8px 12px;">Manage PRs, issues, and repository operations</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Puppeteer</td><td style="padding:8px 12px;">Browser automation and web scraping</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Context7</td><td style="padding:8px 12px;">Up-to-date library docs with version-specific references</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Brave Search</td><td style="padding:8px 12px;">Real-time web search results</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Sequential Thinking</td><td style="padding:8px 12px;">Break down complex tasks into structured steps</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Google Drive</td><td style="padding:8px 12px;">Access and manage Drive documents</td></tr>'
                + '<tr><td style="padding:8px 12px;">Slack</td><td style="padding:8px 12px;">Send messages and interact with Slack workspaces</td></tr>'
                + '</tbody></table></div>'
                + '<h3>Configuration Scopes</h3>'
                + '<div style="overflow-x:auto; margin:12px 0 20px;"><table style="width:100%; border-collapse:collapse; font-size:0.95em;"><thead><tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left; padding:8px 12px;">Scope</th><th style="text-align:left; padding:8px 12px;">Flag</th><th style="text-align:left; padding:8px 12px;">Availability</th></tr></thead><tbody>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">Local</td><td style="padding:8px 12px;"><em>(default)</em></td><td style="padding:8px 12px;">Current directory only</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px 12px;">User</td><td style="padding:8px 12px;"><code>--scope user</code></td><td style="padding:8px 12px;">All projects globally</td></tr>'
                + '<tr><td style="padding:8px 12px;">Project</td><td style="padding:8px 12px;"><code>.mcp.json</code> file</td><td style="padding:8px 12px;">Shared with team via version control</td></tr>'
                + '</tbody></table></div>'
                + _tip('Use user scope for personal tools, project scope for team-shared servers. Restart your AI tool after adding servers to activate them.')
                + '<h3>Finding More Servers</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li><strong>Official:</strong> <a href="https://github.com/modelcontextprotocol/servers" target="_blank">github.com/modelcontextprotocol/servers</a></li>'
                + '<li><strong>Community:</strong> <a href="https://mcp.so" target="_blank">mcp.so</a></li>'
                + '<li><strong>Smithery:</strong> <a href="https://smithery.ai" target="_blank">smithery.ai</a></li>'
                + '</ul>'
        }
    ]
};
