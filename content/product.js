// ── Product Guidance ───────────────────────────────────────
const PRODUCT_GUIDE = {
    name: 'Product Guidance',
    subtitle: 'Spend a few minutes thinking about what you\'re building before you start prompting.',
    lastStepCards: [
        { icon: '🧠', name: 'Prompting & AI Mastery', desc: 'Prompting strategies and core techniques', route: 'prompting-guide' },
        { icon: '🛠️', name: 'Tech Stack & Hosting', desc: 'Choose the right tools and platform for your project', route: 'tech-stack' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
    ],
    steps: [
        {
            title: 'What Are You Building?',
            nextLabel: 'What Should It Feel Like?',
            content: '<h2>Start with the Purpose</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">The best vibe coders don\'t just describe code — they describe <strong>products</strong>. Before you start prompting, spend a minute thinking about what you\'re actually trying to create.</p>'
                + _cards([
                    { icon: '🎯', name: 'What problem does this solve?', desc: 'What need, frustration, or desire does this address? Even fun projects solve the problem of boredom.' },
                    { icon: '🔍', name: 'What exists today?', desc: 'What do people currently use? What\'s wrong with it? What would make yours better or different?' },
                    { icon: '✅', name: 'What does "done" look like?', desc: 'If this project worked perfectly, what would someone be able to do with it?' },
                ], { style: 'margin:16px 0 24px;' })
                + '<p>Even simple answers help. Compare these prompts:</p>'
                + '<div style="display:flex; gap:16px; flex-wrap:wrap; margin:16px 0;">'
                + '<div style="flex:1; min-width:200px; padding:16px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color);"><strong style="color:var(--text-muted);">Vague:</strong><br>"Make me a recipe app"</div>'
                + '<div style="flex:1; min-width:200px; padding:16px; border-radius:8px; border:1px solid var(--accent-color); background:var(--surface-color);"><strong>Clear purpose:</strong><br>"I meal prep on Sundays and need a recipe organizer that filters by dietary restrictions and generates a grocery list from selected recipes."</div>'
                + '</div>'
                + _tip('The more clearly you can answer these questions, the better your prompts and your product will be. For a real project, spend real time here — it pays off throughout the entire build.')
        },
        {
            title: 'What Should It Feel Like?',
            nextLabel: 'What\'s the Best Approach?',
            content: '<h2>Think About the Experience</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Describing the <em>experience</em> you want gives the AI better direction than a feature list alone.</p>'
                + '<h3>Set the Tone</h3>'
                + '<p>How should it feel to use?</p>'
                + '<ul style="margin:8px 0 20px 20px; line-height:1.8;">'
                + '<li><em>"Fast and minimal — no clutter, just the essentials"</em></li>'
                + '<li><em>"Playful and colorful — makes a boring task fun"</em></li>'
                + '<li><em>"Professional and trustworthy — someone would pay for this"</em></li>'
                + '</ul>'
                + '<h3>Walk Through a Feature</h3>'
                + '<p>Pick one key feature and describe the experience step by step. Here\'s an example for a recipe app\'s grocery list feature:</p>'
                + '<ol class="step-num-list">'
                + '<li><strong>The user browses recipes</strong> — they see recipe cards with photos, and can filter by "vegetarian" or "under 30 min"</li>'
                + '<li><strong>They select a few recipes</strong> — each selected recipe gets a checkmark, and a floating "Grocery List" button appears with a count</li>'
                + '<li><strong>They tap the grocery list</strong> — ingredients from all selected recipes are combined and organized by store aisle, with duplicates merged</li>'
                + '<li><strong>They go shopping</strong> — they can check off items as they shop, and the list saves so they can close the app and come back</li>'
                + '</ol>'
                + '<p>That level of detail — describing what the user sees, does, and gets back at each step — gives the AI everything it needs to build the right thing.</p>'
                + _tip('Do this for your project\'s most important feature. If you can walk through the experience clearly, your AI will build something much closer to what you actually want.')
        },
        {
            title: 'What\'s the Best Approach?',
            content: '<h2>Think About How It Should Work</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Before jumping into prompts, think about the <em>right way</em> to solve the problem — not the technology, but the approach.</p>'
                + _cards([
                    { icon: '🗺️', name: 'What\'s the core action?', desc: 'What\'s the one thing someone should be able to do? Start there, keep everything else secondary.' },
                    { icon: '⚖️', name: 'Simple or powerful?', desc: 'Does this need to do one thing perfectly, or many things flexibly? Both are valid — but pick one.' },
                    { icon: '📦', name: 'What data matters?', desc: 'What information does your app need to work with? Where does it come from — the user, an API, a file?' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>Ask Yourself</h3>'
                + '<ul style="margin:8px 0 24px 20px; line-height:1.8;">'
                + '<li>Is there a simpler version of this idea that still solves the problem?</li>'
                + '<li>What\'s the first thing I\'d show someone to prove this works?</li>'
                + '<li>What would make someone choose this over what already exists?</li>'
                + '</ul>'
                + _tip('You can also ask your AI for help here. Try: <em>"I want to build [idea]. What are the different ways I could approach this? What would you recommend for someone who wants to keep it simple?"</em>')
        }
    ]
};
