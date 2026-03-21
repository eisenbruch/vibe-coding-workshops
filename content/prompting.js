// ── Prompting & AI Mastery Guide ───────────────────────────
const PROMPTING_GUIDE = {
    name: 'Prompting & AI Mastery',
    subtitle: 'How to communicate with AI effectively — prompting, context management, and debugging.',
    lastStepCards: [
        { icon: '🎯', name: 'Product Guidance', desc: 'Clarify what you\'re building and why', route: 'product-guidance' },
        { icon: '🛠️', name: 'Tech Stack & Hosting', desc: 'Choose the right tools and platform', route: 'tech-stack' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
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
                + '<span><a href="https://domainflip.nerktek.com" target="_blank" style="color:var(--text-muted);">DomainFlip</a></span>'
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
                + '<p style="margin-bottom:16px;"><a href="https://domainflip.nerktek.com" target="_blank">DomainFlip</a> was built using the comprehensive brief approach — here\'s the pipeline:</p>'
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
