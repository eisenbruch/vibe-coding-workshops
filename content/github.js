// ── GitHub Guide ──────────────────────────────────────────
const GITHUB_GUIDE = {
    name: 'Git & GitHub',
    subtitle: 'Understand version control, create a GitHub account, and publish your first project.',
    lastStepCards: [
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
        { icon: '🌐', name: 'Firebase', desc: 'Deploy your project live on the web', route: 'docs/Firebase.md' },
    ],
    steps: [
        // ── Step 1: What is Git? ──
        {
            title: 'What is Git?',
            nextLabel: 'What is GitHub?',
            content: '<h2>Your Project\'s Save System</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;"><strong>Git</strong> is a tool that runs on your computer and tracks every change you make to your files. Think of it as a super-powered save system — instead of just one "undo," you get an unlimited history of save points you can jump back to at any time.</p>'
                + '<h3>Why It Matters</h3>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:16px;">Without Git, if you break something, you\'re stuck. With Git, you can always go back to a version that worked.</p>'
                + _cards([
                    { icon: '💾', name: 'Save Points', desc: 'Every time you "commit," Git saves a snapshot of your entire project. You can return to any snapshot at any time.' },
                    { icon: '🔄', name: 'Undo Anything', desc: 'Made a mistake? Rolled something out too early? Go back to any previous save point with a single command.' },
                    { icon: '🌿', name: 'Branches', desc: 'Work on a new feature in a separate branch without touching your main code. Merge it in when it\'s ready.' },
                    { icon: '📋', name: 'Change History', desc: 'See exactly what changed, when, and why. Great for understanding how your project evolved.' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>How It Works</h3>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:16px;">Your AI agent handles the Git commands — but here\'s what\'s happening under the hood:</p>'
                + '<div style="margin:24px 0; text-align:center;">'
                + '<img src="images/git.jpg" alt="Git branch diagram showing commits on main and a feature branch merging back" style="width:100%;border-radius:12px;border:1px solid var(--border-color);" />'
                + '</div>'
                + '<p style="font-size:1.05em; line-height:1.7;">Each circle is a <strong>commit</strong> — a save point. The <strong>main</strong> branch is your live code. <strong>Feature branches</strong> let you work on new things without touching what\'s live. When the feature is ready, you <strong>merge</strong> it back into main.</p>'
                + '<h3>When Should I Commit?</h3>'
                + '<p style="font-size:1.05em; line-height:1.7;">Every time something works. Commits are free — the more you make, the more checkpoints you have. Good moments to commit:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>You just got a new feature working</li>'
                + '<li>You fixed a bug</li>'
                + '<li>You\'re about to try something risky</li>'
                + '<li>You\'re done for the day</li>'
                + '</ul>'
                + _tip('You\'ve likely already been using Git if you followed the group project. You can ask your AI agent to commit updates as it makes progress.')
        },
        // ── Step 2: What is GitHub? ──
        {
            title: 'What is GitHub?',
            nextLabel: 'Create Your Account',
            content: '<h2>Your Project\'s Home on the Internet</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Git saves your work locally. <strong>GitHub</strong> is a website that stores your Git projects online — so you have a backup in the cloud, a way to share your work, and a portfolio of everything you\'ve built.</p>'
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
                + '<p style="font-size:1.05em; line-height:1.7;">Git handles the saving. GitHub handles the sharing. You\'ll use both together.</p>'
        },
        // ── Step 3: Create Your GitHub Account ──
        {
            title: 'Create Your Account',
            nextLabel: 'Install Your Tools',
            content: '<h2>Sign Up for GitHub</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">GitHub is free for personal projects.</p>'
                + '<p style="font-size:1.1em; text-align:center; margin:24px 0;"><a href="https://github.com" target="_blank" rel="noopener noreferrer" style="font-weight:700;">Go to github.com</a> and click <strong>Sign up</strong>. Follow the on-screen steps to create your account.</p>'
                + _tip('Your username becomes part of your profile URL (github.com/your-name) and shows up on every project. Pick something you\'d be comfortable sharing professionally.')
        },
        // ── Step 4: Install Your Tools ──
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
        // ── Step 5: Log In with Sourcetree ──
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
        // ── Step 6: Log In with gh CLI ──
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
        // ── Step 7: Create a Repository ──
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
        // ── Step 8: Push Your Project ──
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
        // ── Step 9: Add a README ──
        {
            title: 'Add a README',
            nextLabel: 'Work Safely with Branches',
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
        // ── Step 10: Work Safely with Branches ──
        {
            title: 'Work Safely with Branches',
            nextLabel: 'Learn More',
            content: '<h2>Why Branches Matter</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Right now, all your work is on the <strong>main</strong> branch (sometimes called <strong>master</strong>). That\'s fine for getting started — but it becomes a problem once your site is live.</p>'
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); margin-bottom:24px;">'
                + '<div style="font-weight:700; font-size:1.05em; margin-bottom:12px;">The Problem</div>'
                + '<div style="font-size:0.95em; line-height:1.7; color:var(--text-muted);">Many people set up their hosting (GitHub Pages, Vercel, Netlify, Firebase) to <strong>automatically deploy from the main branch</strong>. If that\'s your setup, every time you push to main, your live site updates almost instantly.</div>'
                + '<div style="margin-top:12px; font-size:0.95em; line-height:1.7;">That means if you push a half-finished feature to main → <strong>your users see the half-finished feature</strong>.</div>'
                + '</div>'
                + '<div style="padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); margin-bottom:24px;">'
                + '<div style="font-weight:700; font-size:1.05em; margin-bottom:12px;">The Solution: Branches</div>'
                + '<div style="font-size:0.95em; line-height:1.7; color:var(--text-muted);">A <strong>branch</strong> is like a parallel version of your project. You can create a branch, make changes on it, and your main branch stays exactly as it was. When you switch branches, the files on your computer actually change to match that branch\'s version.</div>'
                + '<div style="margin-top:12px; font-size:0.95em; line-height:1.7; color:var(--text-muted);">This means you can work on a new feature on its own branch, switch back to main to see the current live version, then switch back to your feature branch to keep building. When the feature is done and tested, you <strong>merge</strong> it into main — and <em>then</em> it goes live.</div>'
                + '</div>'
                // ── The workflow ──
                + '<h2>The Branch Workflow</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:20px;">Here\'s the cycle professional developers use for every feature:</p>'
                + '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:24px;">'
                + '<div style="padding:16px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); text-align:center;">'
                + '<div style="font-size:1.5em; margin-bottom:6px;">1</div>'
                + '<div style="font-weight:700; margin-bottom:4px;">Create a branch</div>'
                + '<div style="font-size:0.9em; color:var(--text-muted);">Branch off from main</div>'
                + '</div>'
                + '<div style="padding:16px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); text-align:center;">'
                + '<div style="font-size:1.5em; margin-bottom:6px;">2</div>'
                + '<div style="font-weight:700; margin-bottom:4px;">Build the feature</div>'
                + '<div style="font-size:0.9em; color:var(--text-muted);">Commit as you go</div>'
                + '</div>'
                + '<div style="padding:16px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); text-align:center;">'
                + '<div style="font-size:1.5em; margin-bottom:6px;">3</div>'
                + '<div style="font-weight:700; margin-bottom:4px;">Test it</div>'
                + '<div style="font-size:0.9em; color:var(--text-muted);">Make sure it works</div>'
                + '</div>'
                + '<div style="padding:16px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); text-align:center;">'
                + '<div style="font-size:1.5em; margin-bottom:6px;">4</div>'
                + '<div style="font-weight:700; margin-bottom:4px;">Merge to main</div>'
                + '<div style="font-size:0.9em; color:var(--text-muted);">Now it goes live</div>'
                + '</div>'
                + '</div>'
                // ── How to do it ──
                + '<h3>Ask Your AI</h3>'
                + '<p>The easiest way — just tell your AI agent what you want:</p>'
                + _term('Create a new branch called "add-dark-mode" and switch to it')
                + '<p style="margin-top:12px;">When the feature is done:</p>'
                + _term('Merge my add-dark-mode branch into main')
                + '<h3>Do It Yourself</h3>'
                + '<div style="margin:16px 0 24px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color); overflow:hidden;">'
                + '<div style="display:grid; grid-template-columns:auto 1fr; font-size:0.95em;">'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color); font-weight:600;">Command</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color); font-weight:600;">What It Does</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git checkout -b add-dark-mode</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Create a new branch and switch to it</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git add . && git commit -m "Add dark mode toggle"</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Save your progress on the branch</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git checkout main</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Switch back to main</div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);"><code>git merge add-dark-mode</code></div>'
                + '<div style="padding:10px 16px; border-bottom:1px solid var(--border-color);">Bring the feature into main</div>'
                + '<div style="padding:10px 16px;"><code>git push</code></div>'
                + '<div style="padding:10px 16px;">Push to GitHub (and deploy)</div>'
                + '</div>'
                + '</div>'
                + '<p>Or use Sourcetree — click <strong>Branch</strong> in the toolbar, name it, and Sourcetree will switch you to it automatically. When you\'re done, right-click the branch and choose <strong>Merge</strong>.</p>'
                // ── Best practices ──
                + '<h2>Best Practices Your AI May Not Do Automatically</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:20px;">AI coding agents are great at writing code, but they may not always follow the habits that keep projects healthy. Here\'s what to watch for:</p>'
                + _cards([
                    { icon: '🌿', name: 'Use branches for features', desc: 'AI agents work on whatever branch you\'re on — usually main. Tell them to create a branch before starting new work.' },
                    { icon: '💾', name: 'Commit often', desc: 'AI agents can make huge changes in one go. Ask them to commit after each meaningful milestone so you have save points to roll back to.' },
                    { icon: '🧪', name: 'Test before merging', desc: 'Thoroughly test your project before merging a branch into main. AI-generated code can look right but break in unexpected ways.' },
                ], { style: 'margin:16px 0 16px;' })
                + _cards([
                    { icon: '🚫', name: 'Keep main deployable', desc: 'Main should always be in a working state. If something is broken, fix it before pushing — or fix it on a branch.' },
                    { icon: '🔑', name: 'Never commit secrets', desc: 'API keys, passwords, and .env files should never go to GitHub. AI agents sometimes miss this. Use .gitignore.' },
                    { icon: '📦', name: 'One feature per branch', desc: 'Don\'t pile unrelated changes together. A branch called "add-search" should only contain search-related code.' },
                ], { style: 'margin:0 0 24px;' })
                + _warn('<strong>Already deployed on main?</strong> If your site is live and you\'ve been pushing everything to main, that\'s fine — just start using branches from now on. Create a branch before your next feature and you\'re following best practices.')
                + '<div style="margin-top:16px;"></div>'
                + _tip('Tell your AI agent upfront: <em>"Always create a new branch before starting a new feature. Never push directly to main without asking me first."</em> Most AI agents will remember this for the rest of the session. You can also add this to your project\'s <code>CLAUDE.md</code> or context file so the AI follows this rule every time.')
        },
        // ── Step 11: Learn More ──
        {
            title: 'Learn More',
            content: '<h2>What Else Can You Do with Git & GitHub?</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">You\'ve covered the basics — but Git and GitHub can do a lot more. Here\'s what to explore next as your projects grow.</p>'
                + _cards([
                    { icon: '🔀', name: 'Pull Requests', desc: 'Propose changes and review code before merging. The standard way teams collaborate on GitHub.' },
                    { icon: '🌐', name: 'GitHub Pages', desc: 'Host a static website directly from your repo for free. Great for portfolios and project demos.' },
                    { icon: '⚙️', name: 'GitHub Actions', desc: 'Automate tasks like testing, building, and deploying your code every time you push.' },
                    { icon: '🐛', name: 'Issues', desc: 'Track bugs, feature requests, and to-dos right inside your repo. Useful even for solo projects.' },
                ], { style: 'margin:16px 0 16px;' })
                + _cards([
                    { icon: '🔖', name: 'Releases & Tags', desc: 'Mark specific versions of your project so you can always go back to a known-good state.' },
                    { icon: '👥', name: 'Forking', desc: 'Copy someone else\'s repo to your account, make changes, and submit them back as a pull request.' },
                    { icon: '🔒', name: '.gitignore', desc: 'Tell Git which files to skip — API keys, node_modules, build artifacts, and other junk.' },
                ], { style: 'margin:0 0 24px;' })
                + _tip('You don\'t need to learn all of this at once. GitHub Pages and Pull Requests are the most useful next steps for most people.')
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
                + _term('git restore .')
                + '<div style="font-size:0.9em; color:var(--text-muted); margin-top:4px; margin-bottom:8px;">Older tutorials may use <code>git checkout .</code> which also works.</div>'
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
