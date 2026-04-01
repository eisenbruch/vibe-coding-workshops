const GROUP_PROJECT_OPTIONS = [
    { letter: 'A', name: 'Personal Dashboard', icon: '📊', desc: 'A customizable command center with widgets — clock, weather, to-do list, bookmarks, and notes' },
    { letter: 'B', name: 'Interactive Directory', icon: '🔍', desc: 'A searchable, filterable catalog for any collection — team members, resources, recipes, products' },
    { letter: 'C', name: 'Planning Board', icon: '📋', desc: 'A drag-and-drop kanban board or planner for tracking tasks, ideas, or projects' },
    { letter: 'D', name: 'Your Own Idea', icon: '💡', desc: 'Write your own prompt for any single-page project — a tool, tracker, visualizer, or anything else' },
];

// ── Group Project Guide ─────────────────────────────────────
const GROUP_PROJECT_GUIDE = {
    name: 'Group Project',
    subtitle: 'Build a real project together using the vibe coding workflow: prompt, test, iterate, commit.',
    lastStepCards: [
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🎯', name: 'Product Guidance', desc: 'Clarify what you\'re building and why', route: 'product-guidance' },
        { icon: '🛠️', name: 'Tech Stack & Hosting', desc: 'Choose the right tools and platform', route: 'tech-stack' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
        { icon: '🔥', name: 'Firebase', desc: 'Deploy your project to a real URL', route: 'docs/Firebase.md' },
        { icon: '⚡', name: 'Advanced Techniques', desc: 'Agents, worktrees, MCP servers, and more', route: 'advanced-techniques' },
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
                + _tip('Your first projects are all about experimenting and prototyping — not building a polished, professional product. Pick something fun, keep it simple, and focus on learning the workflow. You can always build something more ambitious later.')
                + '<h3>Option A: Personal Dashboard</h3>'
                + _term('Create a single HTML file for a personal dashboard — a customizable start page I can use every day. Include:\n- A greeting that changes based on time of day (good morning / afternoon / evening)\n- A live clock and current date\n- A to-do list where I can add, check off, and delete tasks (saved to localStorage)\n- A quick-links section with editable bookmarks (6-8 default ones I can customize)\n- A notes widget for jotting down quick thoughts (saved to localStorage)\n- A clean, modern design with a dark/light mode toggle — make it mobile-friendly')
                + '<h3>Option B: Interactive Directory</h3>'
                + _term('Create a single HTML file for an interactive, searchable directory. Pick a theme that interests you — a team roster, a recipe collection, a resource library, a product catalog, a reading list — and include:\n- At least 12 sample entries with names, descriptions, categories, and image placeholders\n- A search bar that filters results in real time as you type\n- Category filter buttons to narrow results by type\n- A toggle between grid view and list view\n- A detail modal or expanded card view when you click an entry\n- A clean, professional design — make it mobile-friendly')
                + '<h3>Option C: Planning Board</h3>'
                + _term('Create a single HTML file for a kanban-style planning board. Include:\n- Three columns: To Do, In Progress, and Done\n- Ability to add new cards with a title and optional description\n- Drag-and-drop to move cards between columns\n- Click a card to edit or delete it\n- Card count displayed on each column header\n- Save board state to localStorage so it persists on refresh\n- A clean, modern design with subtle animations — make it mobile-friendly')
                + '<h3>Option D: Pick Your Own</h3>'
                + '<p>Have a different idea? Go for it. Write your own prompt describing a single-page project — a tool, a tracker, a visualizer, anything. As long as it produces a single HTML file, the rest of the steps work the same.</p>'
                + _tip('Be specific about what the user sees and does. Include details about the design (colors, layout, animations). Ask for mobile-friendly (if it is needed for your project). Start simple — you\'ll iterate and add features in later steps.')
                + '<h3>Option E: Fairfield Campus Third-Space Index</h3>'
                + _term('I want to build a third-space index for Fairfield University — a tool that helps students find the best spots on campus to hang out, study alone, or work in groups.\n\nThe Layout: Make the left side of the screen a control panel with sliders and filters. Make the right side of the screen a large, interactive map.\n\nThe Data: Create a list of 15 different real or highly realistic places around the Fairfield campus in Fairfield, CT (like the Quick Center, DiMenna-Nyselius Library, Grauert Field, etc.). For each place, track a few things on a 0-10 score:\n\nNoise level\nAvailable seating\nNatural sunlight\nGeneral foot traffic\nNumber/level of electric outlets\nWiFi quality\nDrinks/snacks availability\n\nThe Details: Aside from the scores, include specific text notes for each location. The type of noise, the type of snacks, the name and password of the local WiFi network, and whether the seating is movable (so groups can pull chairs together) or fixed in place. Include any other physical factors that might attract or deter someone studying solo vs. a group hanging out.\n\nHow it should work: When I click a pin on the map, a nice pop-up or side panel should show me all the scores and notes for that location. When I adjust the sliders on the left (like asking for \'Fast WiFi\' and \'Low Noise\'), the pins on the map should instantly update to only show the spots that match my filters. I will fill in the mock data with accurate data later.')
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
            nextLabel: 'Test &amp; Give Feedback',
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
            title: 'Test & Give Feedback',
            nextLabel: 'Introduce Git',
            content: '<h2>Step 5: Test &amp; Give Feedback</h2>'
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
                + '<h3>Why Git?</h3>'
                + '<p style="font-size:1.05em; line-height:1.7;">Many hosting platforms automatically deploy your site every time you push code to the <strong>main</strong> branch. That\'s powerful — but it means broken code on main = a broken live site. Git gives you <strong>commits</strong> (save points) and <strong>branches</strong> (safe spaces to experiment):</p>'
                + '<div style="margin:24px 0; text-align:center;">'
                + '<img src="images/git.jpg" alt="Git branch diagram showing main branch and feature branch" style="width:100%;border-radius:12px;border:1px solid var(--border-color);" />'
                + '</div>'
                + '<p style="font-size:0.95em; line-height:1.7; margin-bottom:8px;"><strong>When should I commit?</strong> Every time something works. Commits are free — the more you have, the more save points you can roll back to if something breaks.</p>'
                + _cards([
                    { icon: '💾', name: 'Commits', desc: 'Save points in your project\'s history — like save files in a video game' },
                    { icon: '⏪', name: 'Undo Changes', desc: 'Broke something? Go back to any previous commit instantly' },
                    { icon: '🌳', name: 'Branches', desc: 'Try new features in isolation without risking your working code' },
                    { icon: '🤝', name: 'Collaboration', desc: 'Share your code on GitHub so others can see, use, or contribute to it' },
                ], { style: 'margin:16px 0;' })
                + '<p>Tell your agent:</p>'
                + _term('Initialize a git repository in this folder and create an initial commit')
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
                + _tip('If your agent isn\'t already committing automatically, tell it: <em>"From now on, automatically commit changes whenever we make progress or fix a bug."</em> Most AI coding tools can do this, and it means you\'ll always have a trail of snapshots to look back on.')
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
            nextLabel: 'Give Your AI a Memory',
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
            title: 'Give Your AI a Memory',
            nextLabel: 'Break Something on Purpose',
            content: '<h2>Step 13: Give Your AI a Memory</h2>'
                + '<p>The AI just explained your whole project — but start a new conversation and it won\'t remember any of it. Every new conversation is a blank slate.</p>'
                + _cards([
                    { icon: '🧠', name: 'The Problem', desc: 'New conversation = blank slate. The AI doesn\'t remember your project.' },
                    { icon: '📝', name: 'The Fix', desc: 'A <strong>context file</strong> the AI reads automatically every time — your project\'s cheat sheet.' },
                ], { style: 'margin:16px 0;' })
                + '<p>Start a <strong>new conversation</strong>, type <code>/init</code>, and hit Enter.</p>'
                + '<p style="margin-top:12px;">The AI will scan your project and create a context file (like <code>CLAUDE.md</code> or <code>GEMINI.md</code>) with your tech stack, file structure, and key details.</p>'
                + _tip('If your tool doesn\'t support <code>/init</code> or slash commands, paste this instead:')
                + _term('Review my entire project and create a CLAUDE.md (or GEMINI.md) file that summarizes the tech stack, file structure, and key details so you have context in future conversations.')
                + _note('From now on, every new conversation reads this file automatically. Run <code>/init</code> again as your project grows to keep it current.')
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
                + '<li>Click the <strong>Console</strong> tab — look for red error messages that tell you what went wrong and which line caused it. You\'ll also see yellow warnings and <code>console.log</code> output here, which are useful for debugging issues that don\'t produce errors.</li>'
                + '<li>If your app makes API calls, check the <strong>Network</strong> tab — it shows every request your app makes. Look for red entries or unexpected status codes to spot failed requests.</li>'
                + '</ol>'
                + '<h3>Fix the Error</h3>'
                + '<p>Copy the error message from the console and paste it to your AI agent:</p>'
                + _term('I\'m getting an error.\n\nWhat I expected: [describe what should happen]\nWhat actually happened: [describe what you see instead]\n\nHere\'s the error from the browser console:\n[paste the error message]\n\n[paste a screenshot if helpful]')
                + '<p style="margin-top:16px;">The AI will read the error, find the problem, and fix it. Refresh and confirm it works.</p>'
                + _warn('This is the #1 debugging workflow in vibe coding: see a problem → open the console → copy the error → paste it to the AI. AI agents are getting better at catching errors on their own, but they can\'t see your browser very well yet — so when something looks wrong, this loop is how you close the gap.')
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
            nextLabel: 'What\'s Next',
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
            title: 'What\'s Next',
            nextLabel: null,
            content: '<h2>Step 18: What\'s Next</h2>'
                + '<p>You\'ve got the core workflow down — prompt, test, iterate, commit. That cycle is the foundation of everything else you\'ll build.</p>'
                + '<p style="margin-top:12px;">From here, the best thing you can do is <strong>keep building</strong>. You already know the process. The next step is learning how to use it more effectively.</p>'
                + '<h3>Start Here: Prompting &amp; AI Mastery</h3>'
                + '<p>The biggest lever you have right now is <strong>how you talk to the AI</strong>. Better prompts get dramatically better results — and there are specific techniques that make a real difference. The Prompting guide covers strategies like giving context, being specific, and using the AI as a thinking partner (not just a builder).</p>'
                + _tip('The AI is a powerful tool, but <strong>you</strong> drive the direction. Come up with your own ideas for what to build and improve — then use the AI to help you execute. The best projects come from your vision, not the AI\'s suggestions.')
                + '<h3>Then Explore</h3>'
                + '<p>Depending on where you want to go, pick the guide that fits:</p>'
        }
    ]
};
