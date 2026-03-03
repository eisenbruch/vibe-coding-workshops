// ── Beginner Guide ──────────────────────────────────────────
const BEGINNER_GUIDE = {
    name: 'Beginner: Quick Start',
    subtitle: 'The fastest way to start vibe coding — no installs, no setup, no code.',
    steps: [
        {
            title: 'What Is This?',
            nextLabel: 'Pick a Tool',
            content: '<h2>The Simplest Way to Start Building</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Describe what you want in a chat window. The AI builds it right in your browser. No downloads, no code editors, no terminal — just a conversation.</p>'
                + _cards([
                    { icon: '💬', name: 'Describe', desc: '"Make me a quiz" or "Build a countdown timer"' },
                    { icon: '⚡', name: 'See It Appear', desc: 'A working preview shows up right in the chat' },
                    { icon: '🔄', name: 'Iterate', desc: '"Make it dark mode" or "Add a score counter"' },
                ], { style: 'margin:0 0 28px;' })
                + '<h3>What You Can Create</h3>'
                + _cards([
                    { icon: '🧮', name: 'Calculators & Tools', desc: 'Timers, converters, trackers' },
                    { icon: '🧠', name: 'Quizzes & Games', desc: 'Trivia, puzzles, simple games' },
                    { icon: '🎨', name: 'Visual Demos', desc: 'Animations, art, simulations' },
                    { icon: '📄', name: 'Landing Pages', desc: 'Portfolios, resumes, promo pages' },
                ], { style: 'margin-bottom:24px;' })
                + _note('These creations live in the chat session — they\'re not saved as files on your computer. For real projects with version control and deployment, check out the <a href="#" onclick="event.preventDefault(); loadRoute(\'pick-your-path\');">Intermediate or Advanced paths</a>.')
        },
        {
            title: 'Pick a Tool',
            nextLabel: 'Try It Now',
            content: '<h2>Pick a Tool</h2>'
                + '<p class="path-picker-subtitle">Open either of these in your browser — they both work the same way. Pick whichever you prefer.</p>'
                + _cards([
                    { name: 'Claude', icon: '💬', url: 'https://claude.com', desc: 'Generates an interactive <strong>artifact</strong> — see and use it right in the chat' },
                    { name: 'Gemini', icon: '✨', url: 'https://gemini.google.com', desc: 'Generates code with a <strong>preview</strong> panel alongside the chat' },
                ], { style: 'margin-bottom:16px;' })
                + _tip('Both are free to start. You can always switch later — the prompts work the same way in either tool.')
        },
        {
            title: 'Try It Now',
            content: '<h2>Try It Now</h2>'
                + '<p class="path-picker-subtitle">Paste this into your chosen tool and watch it build.</p>'
                + _term('Create an interactive color palette generator. Let me click a button to generate 5 random harmonious colors, show the hex codes, and let me click any color to copy its code. Make it visually clean with a dark background.')
                + _note('<strong>Gemini users:</strong> Click the <strong>Tools</strong> button in the chat window and enable <strong>Canvas</strong> — this is what lets Gemini show you a live preview.')
                + '<p style="margin-top:16px;">Then try asking for changes:</p>'
                + '<ul style="margin:8px 0 16px 20px; line-height:1.8;">'
                + '<li>"Add a gradient preview"</li>'
                + '<li>"Make the colors pastel"</li>'
                + '<li>"Add a dark/light mode toggle"</li>'
                + '</ul>'
                + _tip('This back-and-forth is the core loop. The more specific your feedback, the better the result.')
        },
        {
            title: 'What\'s Next?',
            content: '<p class="path-picker-subtitle">You\'re set up and ready to go. Where would you like to go next?</p>'
        }
    ]
};
