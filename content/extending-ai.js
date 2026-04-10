// ── Commands, Skills & Plugins Guide ────────────────────────
const EXTENDING_AI_GUIDE = {
    name: 'Commands, Skills & Plugins',
    subtitle: 'Extend your AI with reusable instructions, workflows, and shareable packages.',
    lastStepCards: [
        { icon: '⚡', name: 'Advanced Techniques', desc: 'Agents, worktrees, MCP servers, and more', route: 'advanced-techniques' },
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
    ],
    steps: [
        // ── Extending Your AI (intro) ──
        {
            title: 'Extending Your AI',
            nextLabel: 'Slash Commands',
            content: '<h2>Extending Your AI</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:16px;">Your AI agent is powerful out of the box, but you can make it even better. There are four ways to customize and extend what your AI can do, from simplest to most powerful:</p>'
                + _cards([
                    { icon: '📝', name: 'CLAUDE.md', desc: 'Your default prompt — loaded into every conversation automatically. Set project-specific instructions or global ones across all projects.' },
                    { icon: '⌨️', name: 'Slash Commands', desc: 'Saved prompts you invoke manually with <code>/command-name</code>. Great for things you do often but not every conversation.' },
                    { icon: '🧠', name: 'Skills', desc: 'Structured instructions your AI loads automatically when relevant. More token-efficient than CLAUDE.md since they only load when needed.' },
                    { icon: '📦', name: 'Plugins', desc: 'Packages that bundle skills, commands, and integrations together. The easiest way to install a full set of capabilities at once.' },
                ], { style: 'margin:16px 0 24px;' })
                + _tip('You don\'t need to create any of these yourself. Start by installing a few skills and plugins (we\'ll show you which ones), and explore commands later as you get comfortable.')
        },
        // ── Custom Commands ──
        {
            title: 'Slash Commands',
            nextLabel: 'Skills',
            content: '<h2>Save Your Most Common Prompts</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Slash commands are saved prompts you can invoke with <code>/command-name</code>. They\'re similar to skills, but designed primarily for you to use at your own pace — when you need something precise, at exactly the right moment. Claude can also invoke them on its own when relevant.</p>'
                + '<h3>When to Use It</h3>'
                + _check([
                    'You keep typing the same kind of request over and over',
                    'You want a shortcut for a multi-step process (deploy, commit, scrape, etc.)',
                    'You want to share a prompt with someone else as a single file',
                ])
                + '<h3>How to Create One</h3>'
                + '<p>Just ask your agent. Describe what you want, or ask it to save something it just did as a command.</p>'
                + _term('That deploy process you just ran — save that as a /deploy command.')
                + '<p style="margin-top:16px;">Your agent creates a markdown file in <code>.claude/commands/</code> that you can invoke anytime with <code>/command-name</code>.</p>'
                + _tip('Think of any prompt you\'ve typed more than twice. That\'s a command waiting to happen.')
        },
        // ── Skills ──
        {
            title: 'Skills',
            nextLabel: 'Plugins',
            content: '<h2>Teach Your AI New Abilities</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Skills are like better-structured CLAUDE.md files. The key difference: they only load when needed, so they don\'t take up space in every conversation. Your AI loads them automatically when your request matches the skill\'s description — you can also invoke them manually with <code>/skill-name</code>.</p>'

                + '<h3>Installing Skills</h3>'
                + '<p>In Claude Desktop, click <strong>Customize</strong> in the code sidebar. You\'ll see a <strong>Skills</strong> section — click the <strong>+</strong> icon to browse and add skills.</p>'
                + '<p>You can also browse the full directory at <a href="https://skills.sh" target="_blank">skills.sh</a>. If you find a skill there that isn\'t in the built-in list, just ask your agent to install it:</p>'
                + _term('Install this skill globally for my whole user: https://skills.sh/anthropics/skills\n\n# Or just for the current project:\nInstall this skill in my project: https://skills.sh/anthropics/skills')
                + _note('<strong>Terminal alternative:</strong> You can also install from the command line with <code>npx skills add anthropics/skills</code>')

                + '<h3>Recommended Skills</h3>'
                + '<p>These are great starting points — especially for design and animation work:</p>'
                + _cards([
                    { icon: '🔍', name: 'Find Skills', desc: 'Your agent searches skills.sh for you — describe what you need and it finds the right skill', url: 'https://skills.sh/vercel-labs/skills/find-skills' },
                    { icon: '🤖', name: 'Claude Official Skills', desc: 'Frontend design, PDFs, spreadsheets, webapp testing, canvas design, and more', url: 'https://skills.sh/anthropics/skills' },
                    { icon: '⚡', name: 'Superpowers', desc: 'Brainstorming, debugging, planning, TDD, code review, and verification', url: 'https://skills.sh/obra/superpowers' },
                    { icon: '🏆', name: 'Awwwards Animations', desc: 'Award-level animations — GSAP, smooth scroll, parallax, text reveals, magnetic effects', url: 'https://skills.sh/devmartinese/awwwards-animations-skill/awwwards-animations' },
                    { icon: '🎯', name: 'Frontend Design Pro', desc: 'Jaw-dropping UI with perfectly matched real photos from Unsplash/Pexels', url: 'https://skills.sh/binjuhor/shadcn-lar/frontend-design-pro' },
                    { icon: '🖼️', name: 'Scroll Experiences', desc: 'Immersive scroll-driven storytelling — parallax, pinned sections, cinematic web experiences', url: 'https://skills.sh/sickn33/antigravity-awesome-skills/scroll-experience' },
                    { icon: '🎨', name: 'Frontend Design', desc: 'Distinctive, production-grade interfaces — avoids generic AI aesthetics', url: 'https://skills.sh/anthropics/skills/frontend-design' },
                    { icon: '🎬', name: 'GSAP ScrollTrigger', desc: 'Scroll-based animations — pinning, scrubbing, snap points, and parallax effects', url: 'https://skills.sh/greensock/gsap-skills/gsap-scrolltrigger' },
                    { icon: '📊', name: 'Data Visualization', desc: 'Charts, graphs, dashboards — chart selection, color theory, annotation best practices', url: 'https://skills.sh/anthropics/knowledge-work-plugins/data-visualization' },
                    { icon: '📈', name: 'KPI Dashboard Design', desc: 'Business intelligence dashboards with KPI cards, real-time updates, and interactive layouts', url: 'https://skills.sh/wshobson/agents/kpi-dashboard-design' },
                ], { style: 'margin:12px 0 20px;' })

                + '<h3>Using Skills</h3>'
                + _cards([
                    { icon: '⌨️', name: 'Manual', desc: 'Type <code>/skill-name</code> to invoke directly (e.g., <code>/frontend-design</code>)' },
                    { icon: '🪄', name: 'Automatic', desc: 'Your AI loads skills on its own when your request matches the skill\'s description' },
                ], { style: 'margin:12px 0 20px;' })

                + '<h3>Creating Your Own</h3>'
                + '<p>Ask your agent to turn something it just did into a reusable skill:</p>'
                + _term('That code review process you just did was perfect. Create a skill so you always review code that way.')
                + '<p style="margin-top:16px;">Your agent creates a folder with a <code>SKILL.md</code> file. The <code>name</code> becomes the <code>/slash-command</code>, and the <code>description</code> tells the AI when to load it automatically.</p>'
        },
        // ── Plugins ──
        {
            title: 'Plugins',
            nextLabel: null,
            content: '<h2>Add Tools & Integrations</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Plugins are a way to package skills, slash commands, agents, hooks, and MCP servers together into a single installable unit. A plugin doesn\'t have to use all of these — many are essentially just a skill in a format that\'s easier to install and share.</p>'
                + _note('<strong>Claude Code CLI and other AI coding agents.</strong> Plugin support is coming to Claude Desktop — for now, the instructions below are for the terminal-based tools. If you\'re using Claude Desktop, check the Skills page for what you can install today.')

                + '<h3>Installing Plugins</h3>'
                + '<p>In Claude Code, type <code>/plugin</code> and go to the <strong>Discover</strong> tab to browse available plugins. Or install directly:</p>'
                + _term('/plugin install plugin-name')

                + '<h3>Recommended Plugins</h3>'
                + '<p>These are from the <a href="https://claude.com/plugins" target="_blank">official Claude plugin marketplace</a>:</p>'
                + _cards([
                    { icon: '📚', name: 'context7', desc: 'Live, up-to-date library docs — your AI stops guessing outdated APIs and reads the real documentation', url: 'https://claude.com/plugins/context7' },
                    { icon: '🎭', name: 'playwright', desc: 'Your AI can open a browser and test your app — click buttons, fill forms, take screenshots', url: 'https://claude.com/plugins/playwright' },
                    { icon: '🔍', name: 'code-review', desc: 'Automated PR review with specialized agents that catch bugs, security issues, and style problems', url: 'https://claude.com/plugins/code-review' },
                    { icon: '🛠️', name: 'skill-creator', desc: 'Build, test, and refine your own skills — for when you\'re ready to teach your AI new tricks', url: 'https://claude.com/plugins/skill-creator' },
                ], { style: 'margin:12px 0 8px;' })
                + _term('# Install these from Claude Code\n/plugin install context7\n/plugin install playwright\n/plugin install code-review\n/plugin install skill-creator')

                + '<h3>More Integrations</h3>'
                + '<p>The official marketplace also has plugins for services you already use:</p>'
                + _cards([
                    { icon: '🐙', name: 'GitHub', desc: 'Work with issues, PRs, and repos directly from your AI' },
                    { icon: '📋', name: 'Linear', desc: 'Manage issues and projects without leaving your editor' },
                    { icon: '💬', name: 'Slack', desc: 'Send messages and read channels from your AI' },
                    { icon: '🔥', name: 'Firebase / Supabase', desc: 'Manage your backend services directly' },
                ], { style: 'margin:12px 0 8px;' })
                + _tip('Browse the full list at <a href="https://claude.com/plugins" target="_blank">claude.com/plugins</a> or type <code>/plugin</code> in Claude Code.')
        }
    ]
};
