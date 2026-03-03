const GROUP_PROJECT_OPTIONS = [
    { letter: 'A', name: 'Personality Quiz', icon: '🧠', desc: '"Would You Rather" quiz with personality types, progress bar, and animations' },
    { letter: 'B', name: 'Portfolio Page', icon: '🎨', desc: 'Personal portfolio with hero, projects, skills, and contact sections' },
    { letter: 'C', name: 'Browser Game', icon: '🎮', desc: 'Reaction-time game with scoreboard, difficulty levels, and visual feedback' },
    { letter: 'D', name: 'Your Own Idea', icon: '💡', desc: 'Write your own prompt for any single-page project — a tool, game, or visualizer' },
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
