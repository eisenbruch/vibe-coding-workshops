// ── Solo Project Guide ─────────────────────────────────────
const SOLO_PROJECT_GUIDE = {
    name: 'Solo Project Guide',
    subtitle: 'A step-by-step checklist from idea to deployed project — works with any tool, stack, or hosting platform.',
    lastStepCards: [
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🎯', name: 'Product Guidance', desc: 'Clarify what you\'re building and why', route: 'product-guidance' },
        { icon: '🛠️', name: 'Tech Stack & Hosting', desc: 'Choose the right tools and platform', route: 'tech-stack' },
        { icon: '✨', name: 'Clean Up & Optimize', desc: 'Polish your code, fix bugs, and improve performance', route: 'cleanup-guide' },
        { icon: '🔥', name: 'Firebase & Deployment', desc: 'Deploy your project to a real URL', route: 'Firebase %26 Deployment.md' },
        { icon: '⚡', name: 'Advanced Techniques', desc: 'Agents, skills, MCP servers, and more', route: 'Advanced Techniques.md' },
    ],
    steps: [
        // ── Step 1: Set Up Your Workspace ──
        {
            title: 'Set Up Your Workspace',
            nextLabel: 'Plan It Out',
            content: '<h2>Step 1: Set Up Your Workspace</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Create a home for your project and point your AI tool at it.</p>'
                + '<ol class="step-num-list">'
                + '<li><strong>Create a project folder</strong> — name it something relevant (e.g., <code>habit-tracker</code>). Use hyphens instead of spaces.</li>'
                + '<li><strong>Open your AI tool</strong> — Claude Desktop, Antigravity, VS Code, or whatever you set up.</li>'
                + '<li><strong>Point it at your folder</strong> — make sure the AI knows where to create files.</li>'
                + '</ol>'
                + _cards([
                    { icon: '<img src="images/icons/claude.svg" alt="Claude">', name: 'Claude Desktop', desc: 'Open the app, switch to Code mode, point it at your project folder' },
                    { icon: '<img src="images/icons/antigravity.png" alt="Antigravity">', name: 'Antigravity', desc: 'Open the Agent Chat panel or a CLI AI agent in the terminal' },
                    { icon: '<img src="images/icons/vscode.svg" alt="VS Code">', name: 'VS Code', desc: 'Open your folder, then use your AI extension or CLI agent' },
                ], { style: 'margin:16px 0 16px;' })
                + _note('Haven\'t set up a tool yet? Go back to <a href="#" onclick="event.preventDefault(); loadRoute(\'pick-your-path\');">Pick Your Path</a> and choose one.')
        },
        // ── Step 2: Plan It Out ──
        {
            title: 'Plan It Out',
            nextLabel: 'Build Your First Version',
            content: '<h2>Step 2: Plan Before You Build</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">How much you plan is up to you. You can jump straight to building with just a sentence describing your idea, or you can spend time writing out a detailed brief. Both work — it depends on where you are on the <a href="#" onclick="event.preventDefault(); loadRoute(\'prompting-guide\');">vibe coding spectrum</a>.</p>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">That said, the more detail you give the AI upfront, the better your first version will be and the less time you\'ll spend going back and forth. If you want to be on the comprehensive side, here\'s how to do it well.</p>'
                // ── Part 1: Write it down ──
                + '<h3>Write Down Everything You Know</h3>'
                + '<p>Open a document, a notes app, or even grab a piece of paper. Write out your idea in as much detail as you can — the more you put down now, the better everything that follows will be.</p>'
                + _cards([
                    { icon: '🎯', name: 'What does it do?', desc: 'Describe the core idea. What is the main thing a user can do with this?' },
                    { icon: '👤', name: 'Who is it for?', desc: 'Who would use this? What problem does it solve for them?' },
                    { icon: '🖥️', name: 'What do they see?', desc: 'Walk through the screens. What\'s on the main page? What happens when they click things?' },
                    { icon: '✅', name: 'What does "done" look like?', desc: 'If it worked perfectly, what would someone be able to do with it?' },
                ], { style: 'margin:16px 0 24px;' })
                // ── Part 2: Gather inspiration ──
                + '<h3>Gather Inspiration & References</h3>'
                + '<p>This is where most people skip ahead — don\'t. Spend time looking at similar tools, sites, and apps. Collect everything that\'s relevant and include it in what you give the AI.</p>'
                + '<ul style="margin:8px 0 20px 20px; line-height:1.8;">'
                + '<li><strong>Links to similar products</strong> — "I want something like [this site] but with [these differences]"</li>'
                + '<li><strong>Screenshots</strong> — capture layouts, color schemes, or UI patterns you like</li>'
                + '<li><strong>Specific design details</strong> — "I like how Notion does their sidebar" or "I want the card style from Airbnb"</li>'
                + '<li><strong>What you\'d change</strong> — what\'s missing or annoying about what already exists?</li>'
                + '</ul>'
                // ── Part 3: Feature list ──
                + '<h3>Write Out Your Features</h3>'
                + '<p>List everything you want your project to do. Don\'t hold back — write the full vision, then mark what\'s essential for version 1 vs. what can come later.</p>'
                + '<div style="display:flex; gap:16px; flex-wrap:wrap; margin:16px 0 24px;">'
                + '<div style="flex:1; min-width:240px; padding:16px; border-radius:10px; border:1px solid var(--border-color); background:var(--surface-color);"><strong>Version 1 (Must Have)</strong><br><span style="color:var(--text-muted); font-size:0.92em;">The simplest version that actually works. What\'s the one thing it absolutely needs to do?</span></div>'
                + '<div style="flex:1; min-width:240px; padding:16px; border-radius:10px; border:1px solid var(--border-color); background:var(--surface-color);"><strong>Version 2 (Nice to Have)</strong><br><span style="color:var(--text-muted); font-size:0.92em;">Features that make it better but aren\'t critical. Add these after version 1 works.</span></div>'
                + '</div>'
                // ── Part 4: Collaborate with AI ──
                + '<h3>Give It All to Your AI & Build Out the Plan Together</h3>'
                + '<p>Paste everything you\'ve written — your description, feature list, links, screenshots, all of it — into your AI tool. Then <strong>don\'t start building yet</strong>. Work with the AI to refine and expand your plan:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li><strong>Pages & layout</strong> — what are the key screens? How does a user move through them?</li>'
                + '<li><strong>Features & interactions</strong> — walk through each feature in detail. What does the user see, click, and get back?</li>'
                + '<li><strong>Style & design direction</strong> — share your references and describe the vibe. Modern and clean? Playful and colorful? Dark and minimal?</li>'
                + '</ul>'
                + _term('Here\'s my project idea, feature list, and some references for inspiration. Before we start building, help me flesh this out:\n1. What pages or screens do I need?\n2. Walk me through the user experience step by step\n3. What features should be in version 1 vs later?\n4. What design direction fits this project?\n\n[paste everything you wrote]')
                // ── Part 5: Plan the infrastructure ──
                + '<h3>Plan Your Infrastructure</h3>'
                + '<p>Before writing a single line of code, figure out the technical foundation with your AI. Getting these decisions right now means you won\'t have to tear things apart and rebuild later.</p>'
                + _term('Based on the plan we just created, help me decide:\n1. What tech stack should I use? (HTML/CSS/JS, React, Next.js, etc.)\n2. Do I need a backend or database? If so, what\'s the best option?\n3. Where should I host this?\n4. Will I need any APIs or external services?\n5. Is there anything about this architecture I\'d regret later if I don\'t set it up now?')
                + _note('You don\'t need to understand the technical details yourself — that\'s what the AI is for. But making these decisions <em>before</em> you start building means the AI will set up the right foundation from the beginning, instead of you having to migrate to a different stack halfway through.')
                + '<p style="margin-top:16px;">For deeper guidance on product planning, see <a href="#" onclick="event.preventDefault(); loadRoute(\'product-guidance\');">Product Guidance</a>. For help choosing a tech stack and hosting platform, see <a href="#" onclick="event.preventDefault(); loadRoute(\'tech-stack\');">Tech Stack & Hosting</a>.</p>'
                + _tip('The difference between a frustrating project and a smooth one is almost always the planning. AI can\'t read your mind — but it can read a detailed brief, and it can help you think through decisions you didn\'t know you needed to make.')
        },
        // ── Step 3: Build Your First Version ──
        {
            title: 'Build Your First Version',
            nextLabel: 'The Build Cycle',
            content: '<h2>Step 3: Build Your First Version</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">You have a plan. Now it\'s time to hand it to the AI and let it build.</p>'
                + '<h3>Start a Fresh Conversation</h3>'
                + '<p>If you used the same AI conversation for planning, start a new one before building. The planning conversation is full of back-and-forth that can muddy the AI\'s focus. A fresh conversation with just your finalized plan gives the AI a clean, clear brief to work from.</p>'
                + '<h3>Feed It Your Plan</h3>'
                + '<p>Paste in everything you produced in the previous step — your project description, feature list, design direction, tech stack decisions, infrastructure plan, links, screenshots, all of it. Then tell the AI to start building:</p>'
                + _term('Here\'s the full plan for my project. Read through everything and ask me any questions before you start building. Once you\'re clear on what I want, go ahead and build version 1.\n\n[paste your planning documents here]')
                + _tip('Telling the AI to ask questions first is important. It might catch gaps in your plan, suggest a better approach, or clarify something ambiguous — all before writing a single line of code.')
                + '<h3>Let It Work</h3>'
                + '<p>Once the AI starts building, let it run. If it asks questions or requests permission along the way, answer and grant it. When it\'s done, preview your project in the browser:</p>'
                + _cards([
                    { icon: '🌐', name: 'Ask Your AI', desc: '"Start a local server so I can preview my project in the browser"' },
                    { icon: '📂', name: 'Open the File', desc: 'Find <code>index.html</code> in your project folder and double-click it' },
                ], { style: 'margin:16px 0 0;' })
        },
        // ── Step 4: Save Your Progress with Git ──
        {
            title: 'Save Your Progress with Git',
            nextLabel: 'The Build Cycle',
            content: '<h2>Step 4: Initialize Git & Start Committing</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Git saves snapshots of your project so you can undo mistakes, track changes, and eventually share your code. Set it up early.</p>'
                + '<h3>Initialize Your Repository</h3>'
                + '<p>Tell your AI agent:</p>'
                + _term('Initialize a git repository in this folder and create an initial commit')
                + '<h3>The Commit Habit</h3>'
                + '<p>After every meaningful change that works, commit it:</p>'
                + _term('Commit my changes with a message describing what we added')
                + _cards([
                    { icon: '💾', name: 'Commit Often', desc: 'Every working feature, fix, or improvement gets its own commit' },
                    { icon: '⏪', name: 'Revert Easily', desc: 'Broke something? Go back to any previous commit instantly' },
                    { icon: '📜', name: 'Track History', desc: 'See exactly what changed and when — useful for debugging' },
                ], { style: 'margin:16px 0 16px;' })
                + _tip('Use <a href="https://www.sourcetreeapp.com/" target="_blank">SourceTree</a> (free) to visualize your commit history. It makes Git much more approachable than the command line.')
                + '<p style="margin-top:16px;">For a detailed Git walkthrough, see <a href="#" onclick="event.preventDefault(); loadRoute(\'github-guide\');">Git & GitHub</a>.</p>'
        },
        // ── Step 5: The Build Cycle ──
        {
            title: 'The Build Cycle',
            nextLabel: 'Protect Your API Keys',
            content: '<h2>Step 5: Prompt → Test → Fix → Repeat</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Building with AI follows a repeating loop. Don\'t try to build everything at once — work in small increments and verify as you go.</p>'
                + _cards([
                    { icon: '💬', name: '1. Prompt', desc: 'Describe what you want to build, change, or fix. Be specific.' },
                    { icon: '🧪', name: '2. Test', desc: 'Open it in your browser. Does it work? Does it look right?' },
                    { icon: '🔄', name: '3. Fix', desc: 'Tell the AI what\'s wrong. Paste errors, describe bugs, request changes.' },
                    { icon: '💾', name: '4. Commit', desc: 'When you\'ve made significant progress, save a checkpoint with Git.' },
                ], { style: 'margin:16px 0 24px;' })
                + '<p>This is the entire vibe coding workflow. It works for a single-page toy and it works for a full web application. The projects get bigger, but the cycle stays the same.</p>'
                + '<h3>Tips for Each Round</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li><strong>One thing at a time.</strong> Focus on one feature or task per conversation. When you\'re moving on to something new, start a fresh conversation so the AI isn\'t carrying stale context from the last thing you worked on.</li>'
                + '<li><strong>Be specific when giving feedback.</strong> "Make the header font bigger and add more space between the cards" beats "make it better."</li>'
                + '<li><strong>Paste error messages.</strong> Open DevTools (<code>Cmd+Option+I</code> / <code>F12</code>), check the Console tab, and copy any red errors directly to your AI.</li>'
                + '</ul>'
                + _tip('You don\'t need to commit after every single change — commit whenever you want. But it\'s good practice to commit after significant changes so you have a checkpoint to go back to if something breaks later.')
        },
        // ── Step 6: Protect Your API Keys ──
        {
            title: 'Protect Your API Keys',
            nextLabel: 'Push to GitHub',
            content: '<h2>Step 6: Secure Your Secrets</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">If your project uses any external services (AI APIs, payment processing, databases), you\'ll have API keys that must be kept secret. Never hardcode them in your source code.</p>'
                + _warn('Bots actively scan GitHub for exposed API keys. A leaked key can be found and exploited within minutes.')
                + '<h3>The Easy Way: Ask Your AI</h3>'
                + _term('Review my codebase for any exposed API keys or secrets. Move them into a .env file, add .env to .gitignore, and tell me if anything else needs to be secured.')
                + '<h3>The Core Rules</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>Store keys in a <strong><code>.env</code></strong> file — never in your source code</li>'
                + '<li>Add <strong><code>.env</code></strong> to your <strong><code>.gitignore</code></strong> so it\'s never pushed to GitHub</li>'
                + '<li>If your frontend calls a paid API, you need a <strong>backend proxy</strong> — keys in browser JavaScript are visible to anyone</li>'
                + '<li>When you deploy, set keys as <strong>environment variables</strong> in your hosting platform\'s dashboard</li>'
                + '</ul>'
                + '<h3>Quick Safety Checklist</h3>'
                + _check([
                    '<code>.env</code> is listed in <code>.gitignore</code>',
                    'No API keys are hardcoded in source files',
                    'Secret keys for paid APIs are routed through a backend',
                    'API keys are restricted by domain or scope where possible',
                ])
                + _note('<strong>Firebase config values</strong> (<code>apiKey</code>, <code>projectId</code>, etc.) are designed to be public — security comes from Firebase Security Rules, not from hiding the config. This is an exception; most other API keys should be kept secret.')
        },
        // ── Step 7: Push to GitHub ──
        {
            title: 'Push to GitHub',
            nextLabel: 'Deploy & Go Live',
            content: '<h2>Step 7: Put Your Code Online</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">This step is optional, but worth doing. GitHub gives you a cloud backup of your code, makes it easy to connect to hosting platforms, and builds a portfolio of your work over time. You can keep your repository private if you just want a personal backup.</p>'
                + '<ol class="step-num-list">'
                + '<li><strong>Create a GitHub account</strong> at <a href="https://github.com" target="_blank">github.com</a> (free)</li>'
                + '<li><strong>Create a new repository</strong> — click <strong>+</strong> → <strong>New repository</strong>, name it to match your folder</li>'
                + '<li><strong>Don\'t</strong> check "Add README", ".gitignore", or "license" (you already have a local project)</li>'
                + '<li><strong>Connect and push</strong> — GitHub shows setup commands. Copy the ones under <em>"push an existing repository"</em>:</li>'
                + '</ol>'
                + _term('git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git\ngit branch -M main\ngit push -u origin main')
                + '<p style="margin-top:16px;">Or just ask your AI:</p>'
                + _term('I created a GitHub repository at [paste your repo URL]. Connect my local project to it and push my code.')
                + _tip('For a more detailed walkthrough with SourceTree, SSH keys, and troubleshooting, see <a href="#" onclick="event.preventDefault(); loadRoute(\'github-guide\');">Git & GitHub</a>.')
        },
        // ── Step 8: Deploy & Go Live ──
        {
            title: 'Deploy & Go Live',
            nextLabel: 'Keep Building',
            content: '<h2>Step 8: Deploy & Go Live</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">If you planned your infrastructure in Step 2, you already know where you\'re hosting. Now it\'s time to deploy and start testing at the URL your hosting platform gives you.</p>'
                + '<h3>Deploy with Your AI</h3>'
                + '<p>Tell your AI what platform you chose and let it walk you through the deployment:</p>'
                + _term('I want to deploy my project to [your hosting platform]. Walk me through the full deployment process step by step.')
                + '<p style="margin-top:16px;">Most platforms give you a free URL (like <code>yourproject.vercel.app</code> or <code>yourproject.web.app</code>) as soon as you deploy. Use that to test your project in a real environment — things can behave differently online than they do locally.</p>'
                + '<h3>Test at Your Live URL</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>Open the URL on your phone — does it look right on mobile?</li>'
                + '<li>Try all the features — do they work the same as they did locally?</li>'
                + '<li>Share the link with someone else — can they use it without issues?</li>'
                + '</ul>'
                + '<p>For step-by-step deployment walkthroughs, see <a href="#" onclick="event.preventDefault(); loadRoute(\'Firebase %26 Deployment.md\');">Firebase & Deployment</a> or <a href="#" onclick="event.preventDefault(); loadRoute(\'Vercel %26 Supabase.md\');">Vercel & Supabase</a>. For help choosing a platform, see <a href="#" onclick="event.preventDefault(); loadRoute(\'tech-stack\');">Tech Stack & Hosting</a>.</p>'
                + _tip('Most hosting platforms have generous free tiers. You can deploy a real project with a real URL for $0. If you want your own domain like <code>yourproject.com</code>, see <a href="#" onclick="event.preventDefault(); loadRoute(\'Custom Domains.md\');">Custom Domains</a> — it costs ~$10–15/year.')
        },
        // ── Step 9: Keep Building ──
        {
            title: 'Keep Building',
            nextLabel: null,
            content: '<h2>Step 9: What\'s Next?</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Your project is live. Now keep iterating — the build cycle doesn\'t stop at deployment.</p>'
                + '<h3>Ask Your AI for Ideas</h3>'
                + _term('Look at my project and suggest 3 features or improvements that would make it more impressive. Explain why each one would be valuable.')
                + _term('What would a professional developer do to make this project production-ready? What am I missing — security, performance, accessibility?')
                + '<h3>Level Up Your Skills</h3>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li><strong>Add a database</strong> — move from localStorage to a real backend so data persists across devices</li>'
                + '<li><strong>Add user accounts</strong> — authentication, profiles, personalized experiences</li>'
                + '<li><strong>Connect an API</strong> — weather, AI, payments, maps, or any external data source</li>'
                + '<li><strong>Improve the design</strong> — polish the UI, add animations, make it feel professional</li>'
                + '<li><strong>Buy a domain</strong> — <code>yourproject.com</code> costs ~$10/year and makes it feel real</li>'
                + '</ul>'
                + _tip('The best way to learn is to keep building. Every project teaches you something new — and with AI, you can attempt things that would have taken months to learn on your own.')
        }
    ]
};
