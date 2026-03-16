// ── Advanced Techniques Guide ──────────────────────────────
const ADVANCED_TECHNIQUES_GUIDE = {
    name: 'Advanced Techniques',
    subtitle: 'Power features for AI coding agents — parallel agents, worktrees, MCP servers, and more.',
    lastStepCards: [
        { icon: '🔌', name: 'Commands, Skills & Plugins', desc: 'Extend your AI with reusable instructions and packages', route: 'extending-ai' },
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
    ],
    steps: [
        // ── Agents ──
        {
            title: 'Running Parallel Agents',
            nextLabel: 'Git Worktrees',
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
