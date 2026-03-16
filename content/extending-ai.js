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
            nextLabel: 'Custom Commands',
            content: '<h2>Extending Your AI</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:16px;">Your AI agent is powerful out of the box, but you can make it even better. Think of it like a phone — it\'s useful on its own, but apps make it great. There are three ways to extend what your AI can do:</p>'
                + _cards([
                    { icon: '📄', name: 'Commands', desc: 'Saved prompts you can reuse. Like a keyboard shortcut for things you ask your AI to do all the time.' },
                    { icon: '📁', name: 'Skills', desc: 'Teachable behaviors. Instead of explaining how you want something done every time, a skill remembers for you.' },
                    { icon: '📦', name: 'Plugins', desc: 'Ready-made upgrade packs. Install one and your AI instantly gains new abilities — no setup required.' },
                ], { style: 'margin:16px 0 24px;' })
                + _tip('You don\'t need to create any of these yourself. Start by installing a few plugins (we\'ll show you which ones), and explore commands and skills later as you get comfortable.')
        },
        // ── Custom Commands ──
        {
            title: 'Custom Commands',
            nextLabel: 'Skills',
            content: '<h2>Save Your Most Common Prompts</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Custom commands are reusable shortcuts that save your most common prompts so you don\'t have to describe them each time.</p>'
                + _note('Custom commands have been merged into the Skills system (next step). Your existing <code>.claude/commands/</code> files still work, but Skills are the recommended approach going forward.')
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
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Skills are folders of instructions and resources that your AI loads dynamically. They\'re the evolution of commands — everything commands can do, plus bundled files, automatic invocation, and more.</p>'
                + '<h3>When to Use It</h3>'
                + _check([
                    'You want your AI to follow a specific workflow or convention',
                    'You want something that triggers automatically when relevant',
                    'You need to bundle supporting files alongside the instructions',
                ])
                + '<h3>Finding & Installing Skills</h3>'
                + '<p>Before creating your own, check what\'s already available:</p>'
                + _cards([
                    { icon: '🔍', name: 'Browse skills.sh', desc: 'The full directory of community-built skills', url: 'https://skills.sh' },
                    { icon: '🤖', name: 'Claude Official Skills', desc: 'Frontend design, PDFs, spreadsheets, webapp testing, canvas design, and more', url: 'https://skills.sh/anthropics/skills' },
                    { icon: '⚡', name: 'Superpowers', desc: 'Brainstorming, debugging, planning, TDD, code review, and verification', url: 'https://skills.sh/obra/superpowers' },
                ], { style: 'margin:12px 0 20px;' })
                + _term('# Install a skill set\nnpx skills add anthropics/skills\nnpx skills add obra/superpowers')
                + '<h3>How to Invoke</h3>'
                + _cards([
                    { icon: '⌨️', name: 'Manual', desc: 'Type <code>/skill-name</code> to invoke directly (e.g., <code>/explain-code src/auth.ts</code>)' },
                    { icon: '🪄', name: 'Automatic', desc: 'The AI loads skills on its own when your request matches the skill\'s description' },
                ], { style: 'margin:12px 0 20px;' })
                + '<h3>Recommended Skill Packs</h3>'
                + '<p>These are from <a href="https://skills.sh" target="_blank">skills.sh</a> — especially good for design and animation work:</p>'
                + _cards([
                    { icon: '🏆', name: 'Awwwards Animations', desc: 'Award-level animations — GSAP, smooth scroll, parallax, text reveals, magnetic effects, and more' },
                    { icon: '🎬', name: 'Elite GSAP', desc: 'Full GSAP animation toolkit — ScrollTrigger, SplitText, MorphSVG, Flip, and all the premium plugins (now free)' },
                    { icon: '🖼️', name: 'Scroll Experiences', desc: 'Immersive scroll-driven storytelling — parallax, pinned sections, horizontal scroll, cinematic web experiences' },
                    { icon: '🎯', name: 'Frontend Design Pro', desc: 'Jaw-dropping UI with perfectly matched real photos from Unsplash/Pexels — zero AI slop' },
                    { icon: '📊', name: 'Data Visualization', desc: 'Charts, graphs, dashboards — chart selection, color theory, annotation best practices' },
                    { icon: '🎨', name: 'Canvas Design', desc: 'Beautiful visual art in PNG and PDF — posters, designs, and static creative pieces' },
                ], { style: 'margin:12px 0 8px;' })
                + _term('# Install from your terminal (not inside your AI)\nnpx skills add anthropics/skills')
                + '<h3>Creating Your Own</h3>'
                + '<p>Ask your agent to turn something it just did into a reusable skill:</p>'
                + _term('That code review process you just did was perfect. Create a skill so you always review code that way.')
                + '<p style="margin-top:16px;">Your agent creates a folder with a <code>SKILL.md</code> file. The <code>name</code> becomes the <code>/slash-command</code>, and the <code>description</code> tells the AI when to load it automatically.</p>'
        },
        // ── Plugins ──
        {
            title: 'Plugins',
            nextLabel: null,
            content: '<h2>Ready-Made Upgrades</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Plugins are complete packages that bundle skills, agents, hooks, and more into a single installable unit. If skills teach your AI how to do something, plugins let you share that knowledge with your team or the community.</p>'
                + '<h3>When to Use It</h3>'
                + _check([
                    'You want to add powerful capabilities to your AI with one command',
                    'Your team needs a standardized workflow everyone can install',
                    'You found a community plugin that adds features you need',
                ])
                + '<h3>Installing Plugins</h3>'
                + '<p>Browse available plugins with <code>/plugin</code> and go to the Discover tab, or install directly:</p>'
                + _term('/plugin install plugin-name')
                + '<h3>Recommended Starter Plugins</h3>'
                + '<p>These are from the official Claude plugin marketplace. Install these first — they make the biggest difference:</p>'
                + _cards([
                    { icon: '⚡', name: 'superpowers', desc: 'The biggest upgrade to your AI. Adds brainstorming, smarter debugging, planning, and code review — your AI thinks before it acts.' },
                    { icon: '🎨', name: 'frontend-design', desc: 'Makes your AI dramatically better at building good-looking interfaces. Less generic, more polished.' },
                ], { style: 'margin:12px 0 8px;' })
                + _term('# Install these two first\n/plugin install superpowers\n/plugin install frontend-design')
                + '<h3>More Plugins Worth Installing</h3>'
                + _cards([
                    { icon: '📚', name: 'context7', desc: 'Gives your AI access to up-to-date library docs so it doesn\'t use outdated or made-up code' },
                    { icon: '🎭', name: 'playwright', desc: 'Lets your AI open a browser and actually test your app — click buttons, fill forms, take screenshots' },
                    { icon: '🧠', name: 'claude-md-management', desc: 'Keeps your project memory file (CLAUDE.md) organized and up to date across sessions' },
                    { icon: '🛠️', name: 'skill-creator', desc: 'For when you\'re ready to create your own skills — helps you build, test, and refine them' },
                ], { style: 'margin:12px 0 8px;' })
                + _term('# Install any of these\n/plugin install context7\n/plugin install playwright\n/plugin install claude-md-management\n/plugin install skill-creator')
                + _tip('Browse all available plugins by typing <code>/plugin</code> and selecting the Discover tab.')
        }
    ]
};
