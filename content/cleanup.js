// ── Clean Up & Optimize Guide ──────────────────────────────
const CLEANUP_GUIDE = {
    name: 'Clean Up & Optimize',
    subtitle: 'A checklist for cleaning up your project — ask your AI to handle each one.',
    lastStepCards: [
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
        { icon: '⚡', name: 'Advanced Techniques', desc: 'Agents, skills, MCP servers, and more', route: 'advanced-techniques' },
    ],
    steps: [
        // ── Step 1: Organize Your Files ──
        {
            title: 'Organize Your Files',
            nextLabel: 'Clean Up Your Code',
            content: '<h2>Step 1: Give Your Project Structure</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">AI often puts everything into one or two files when building quickly. That works for prototyping, but once your project is working, splitting things into separate files makes it easier for you and the AI to work with going forward.</p>'
                + _cards([
                    { icon: '📄', name: 'HTML', desc: 'Structure and content — what\'s on the page' },
                    { icon: '🎨', name: 'CSS', desc: 'Styling and layout — how it looks' },
                    { icon: '⚡', name: 'JavaScript', desc: 'Behavior and logic — what it does' },
                ], { style: 'margin:16px 0 24px;' })
                + '<p>Ask your AI to reorganize:</p>'
                + _term('Review my project\'s file structure. Move all inline CSS into a separate stylesheet and all inline JavaScript into a separate .js file. Organize files into folders if needed (e.g., css/, js/, images/). Make sure everything still works after the changes.')
                + _note('This is a good time to commit your current working version before the AI starts reorganizing. If something breaks, you can go back.')
                + _tip('Ask your AI to explain the file structure it created. Understanding where things live helps you direct future prompts more effectively.')
        },
        // ── Step 2: Clean Up Your Code ──
        {
            title: 'Clean Up Your Code',
            nextLabel: 'Find & Fix Bugs',
            content: '<h2>Step 2: Remove the Clutter</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">AI-generated code accumulates leftover experiments, duplicate functions, and commented-out blocks over time. A cleanup pass makes the codebase easier for the AI to work with in future conversations.</p>'
                + _cards([
                    { icon: '🧹', name: 'Remove Dead Code', desc: 'Unused variables, commented-out blocks, leftover experiments' },
                    { icon: '🔄', name: 'Refactor', desc: 'Simplify complex code and consolidate repeated patterns' },
                    { icon: '📝', name: 'Add Comments', desc: 'Explain what major sections do and why' },
                    { icon: '📖', name: 'Update README', desc: 'Describe what the project does and how to run it' },
                ], { style: 'margin:16px 0 24px;' })
                + _note('<strong>Refactoring</strong> means restructuring your code without changing what it does — same behavior, better organization. Like rewriting a messy paragraph to say the same thing more clearly.')
                + _term('Review my entire codebase and clean it up:\n1. Remove any dead code, unused variables, and commented-out blocks\n2. Refactor the code — simplify anything overly complex and consolidate duplicate or near-duplicate code into reusable pieces\n3. Make sure naming is consistent and descriptive throughout\n4. Add clear comments explaining what each major section does and why')
                + '<p style="margin-top:16px;">Then update your documentation — type <code>/init</code> and hit Enter to regenerate your project context file.</p>'
                + _tip('If your tool doesn\'t support <code>/init</code>, paste this instead:')
                + _term('Review my entire project and update my README.md and CLAUDE.md to accurately describe the current state of the project — what it does, how to run it, and the tech stack.')
                + _tip('Good comments explain <em>why</em>, not <em>what</em>. Your AI can add both, but the "why" comments are the ones that matter when you come back to the project later.')
        },
        // ── Step 3: Find & Fix Bugs ──
        {
            title: 'Find & Fix Bugs',
            nextLabel: 'Make It Fast',
            content: '<h2>Step 3: Catch What You Missed</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">You\'ve been testing the happy path — the way things are <em>supposed</em> to work. Time to ask the AI to think about what happens when things go wrong.</p>'
                + _cards([
                    { icon: '🔍', name: 'Edge Cases', desc: 'Empty inputs, missing data, unexpected values' },
                    { icon: '⚠️', name: 'Error Handling', desc: 'Graceful failures with user-friendly messages' },
                    { icon: '🔄', name: 'Loading States', desc: 'What the user sees while data is being fetched' },
                    { icon: '🌐', name: 'Browser Compatibility', desc: 'Does it work in Chrome, Safari, Firefox?' },
                ], { style: 'margin:16px 0 24px;' })
                + _term('Review my project for bugs and edge cases:\n1. What happens with empty inputs, missing data, or unexpected values?\n2. Are there any error states that show a blank screen or crash the page?\n3. Add user-friendly error messages for anything that can fail\n4. Make sure loading states exist where data is being fetched\n5. Test that nothing breaks when the network is slow or offline')
                + '<p style="margin-top:16px;">After the AI makes fixes, test each scenario yourself. Open your project and deliberately try to break it — enter nothing, enter garbage, click things twice quickly, resize the window.</p>'
                + _warn('Don\'t skip this. The bugs your users find will always be the ones you didn\'t think to test.')
        },
        // ── Step 4: Make It Fast ──
        {
            title: 'Make It Fast',
            nextLabel: 'Accessible & Responsive',
            content: '<h2>Step 4: Speed Up Your Project</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Slow load times lose users. Most performance issues come from oversized images and unoptimized assets.</p>'
                + _cards([
                    { icon: '🖼️', name: 'Image Optimization', desc: 'Compress and resize images that are larger than they need to be' },
                    { icon: '⏳', name: 'Lazy Loading', desc: 'Only load images and content when they scroll into view' },
                    { icon: '📦', name: 'Reduce Bloat', desc: 'Remove unnecessary libraries, scripts, and API calls' },
                ], { style: 'margin:16px 0 24px;' })
                + _term('Optimize my project\'s performance:\n1. Compress and resize any images that are larger than they need to be\n2. Add lazy loading for images below the fold\n3. Minimize any render-blocking CSS or JavaScript\n4. Check for any unnecessary API calls or duplicate data fetching\n5. Tell me what the biggest performance bottlenecks are')
                + _tip('Open DevTools (<code>Cmd+Option+I</code> / <code>F12</code>), go to the <strong>Lighthouse</strong> tab, and run a performance audit. Share the results with your AI — it can fix whatever Lighthouse flags.')
                + _note('For static sites with just HTML/CSS/JS, images are almost always the biggest issue. If your page is slow, start there.')
        },
        // ── Step 5: Accessible & Responsive ──
        {
            title: 'Accessible & Responsive',
            nextLabel: 'Security Review',
            content: '<h2>Step 5: Works for Everyone, Everywhere</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Two things that share a goal: making sure your project is usable by anyone, on any device.</p>'
                + '<h3>Accessibility</h3>'
                + '<p>People use the web in different ways — screen readers, keyboard navigation, high-contrast modes. A few small changes make your project work for all of them.</p>'
                + _term('Run an accessibility audit on my project:\n1. Add descriptive alt text to all images\n2. Check color contrast ratios — make sure text is readable\n3. Ensure all interactive elements are keyboard-navigable\n4. Use semantic HTML (header, main, nav, button) instead of generic divs\n5. Add ARIA labels where needed for screen readers')
                + '<h3>Mobile Responsiveness</h3>'
                + '<p>If your project doesn\'t work on a phone, you\'re losing most of your audience.</p>'
                + _term('Check my project\'s mobile responsiveness:\n1. Does the layout work on phone screens (375px wide)?\n2. Are touch targets large enough (at least 44x44px)?\n3. Does text remain readable without zooming?\n4. Do any elements overflow or get cut off on small screens?\n5. Test at tablet size too (768px wide)')
                + _tip('Test on your actual phone, not just by resizing the browser. Pinch, scroll, and tap — it often feels different on a real device.')
        },
        // ── Step 6: Security Review ──
        {
            title: 'Security Review',
            nextLabel: null,
            content: '<h2>Step 6: Lock the Doors</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">If your project handles user input or connects to external services, a basic security review is worth doing.</p>'
                + _note('If your project is a static page with no forms, no user input, and no API calls, this step may not apply to you.')
                + _term('Do a security review of my project:\n1. Is any user input being inserted into the page without sanitization?\n2. Are there any API keys or secrets exposed in the frontend code?\n3. If I have forms, is the input validated on both client and server side?\n4. Are there any open redirects or unsafe URL handling?\n5. What other security issues should I fix before sharing this publicly?')
                + _cards([
                    { icon: '🛡️', name: 'Input Sanitization', desc: 'Never trust user input — always clean it before displaying or storing' },
                    { icon: '🔑', name: 'API Key Exposure', desc: 'No secrets in frontend code — use .env files and backend proxies' },
                    { icon: '🔒', name: 'HTTPS', desc: 'Make sure your deployed site uses HTTPS (most hosting platforms handle this)' },
                ], { style: 'margin:16px 0 16px;' })
                + _warn('This is not a comprehensive security audit. For projects handling real user data or payments, get a professional review. But for a personal project, these basics go a long way.')
                + _tip('You don\'t need to do every step in this guide for every project. Pick the ones that matter most for what you\'ve built. Even doing two or three of these will noticeably improve your project\'s quality.')
        }
    ]
};
