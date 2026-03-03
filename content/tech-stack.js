// ── Tech Stack & Hosting Guide ────────────────────────────────
const TECH_STACK_GUIDE = {
    name: 'Tech Stack & Hosting',
    subtitle: 'Work with your AI to choose the right tools and platform for your project.',
    lastStepCards: [
        { icon: '🎯', name: 'Product Guidance', desc: 'Clarify what you\'re building before choosing tools', route: 'product-guidance' },
        { icon: '🚀', name: 'Solo Project Guide', desc: 'Step-by-step checklist from idea to deployment', route: 'solo-project' },
        { icon: '🔥', name: 'Firebase & Deployment', desc: 'Step-by-step deployment walkthrough', route: 'Firebase %26 Deployment.md' },
    ],
    steps: [
        {
            title: 'Ask Your AI First',
            nextLabel: 'Static vs. Backend',
            content: '<h2>Let Your AI Help You Decide</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Your AI knows the landscape of frameworks, hosting platforms, and databases better than most developers. Use it as a technical advisor — describe what you\'re building and have a real conversation about the trade-offs.</p>'
                + '<h3>Questions to Ask</h3>'
                + '<div style="display:flex; flex-direction:column; gap:12px; margin:16px 0 24px;">'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"What are the most professional tech stack options for building [idea]? Walk me through the differences and why I\'d choose one over another."</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"If I use React with Next.js vs. plain HTML/JS, what do I gain and what does it cost me in complexity? How does that affect where I can host it?"</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"I want this to feel like a real product, not a side project. What stack and hosting setup would a professional team use for something like this?"</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"What happens when 1,000 people use this at once? What breaks first, and what would I need to change?"</div>'
                + '</div>'
                + _tip('Don\'t just accept the first recommendation. Ask follow-ups: <em>"What are the downsides of that?"</em> and <em>"What would you pick if I wanted to scale this later?"</em> — push the AI to give you the full picture.')
        },
        {
            title: 'Static vs. Backend',
            nextLabel: 'Hosting & Cost',
            content: '<h2>Do You Need a Server?</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">The biggest architectural decision is whether your project runs entirely in the browser or needs a server behind it.</p>'
                + '<div style="display:flex; gap:16px; flex-wrap:wrap; margin:16px 0 24px;">'
                + '<div style="flex:1; min-width:260px; padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:8px;">Browser Only (Static)</div>'
                + '<div style="color:var(--text-muted); font-size:0.95em; line-height:1.7;">HTML, CSS, JavaScript. No server needed. Free to host almost everywhere.</div>'
                + '<ul style="margin:12px 0 0 16px; font-size:0.95em; line-height:1.8;">'
                + '<li>Tools, calculators, basic games</li>'
                + '<li>Portfolios and landing pages</li>'
                + '<li>Apps that save data locally (localStorage)</li>'
                + '</ul>'
                + '</div>'
                + '<div style="flex:1; min-width:260px; padding:20px; border-radius:12px; border:1px solid var(--border-color); background:var(--surface-color);">'
                + '<div style="font-weight:700; font-size:1.1em; margin-bottom:8px;">Needs a Backend</div>'
                + '<div style="color:var(--text-muted); font-size:0.95em; line-height:1.7;">A server that runs your code, stores data, and handles things the browser can\'t.</div>'
                + '<ul style="margin:12px 0 0 16px; font-size:0.95em; line-height:1.8;">'
                + '<li>User accounts and login</li>'
                + '<li>Data shared across users</li>'
                + '<li>Secret API keys that can\'t be in the browser</li>'
                + '<li>File uploads and storage</li>'
                + '</ul>'
                + '</div>'
                + '</div>'
                + _note('Think about what your project needs <em>now and in the near future</em>. If you know you\'ll need user accounts or shared data, plan for a backend from the start — retrofitting one later is a major rewrite.')
        },
        {
            title: 'Hosting & Cost',
            nextLabel: 'Start Simple, Scale Later',
            content: '<h2>Where Should It Live?</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Most projects can be hosted for free or nearly free. Cost only becomes a factor at scale.</p>'
                + '<h3>Hosting Platforms at a Glance</h3>'
                + '<table style="width:100%; border-collapse:collapse; margin-bottom:24px;">'
                + '<thead><tr>'
                + '<th style="text-align:left; padding:10px 12px; border-bottom:2px solid var(--border-color);">What You\'re Building</th>'
                + '<th style="text-align:left; padding:10px 12px; border-bottom:2px solid var(--border-color);">Good Options</th>'
                + '<th style="text-align:left; padding:10px 12px; border-bottom:2px solid var(--border-color);">Free Tier?</th>'
                + '</tr></thead>'
                + '<tbody>'
                + '<tr><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Static site / frontend</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">GitHub Pages, Vercel, Netlify, Firebase, Cloudflare</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Yes, all free</td></tr>'
                + '<tr><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Backend + database</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Firebase, Supabase, Vercel, Cloudflare</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Generous free tiers</td></tr>'
                + '<tr><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Full control / custom server</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Railway, Render, DigitalOcean, AWS, Google Cloud, Cloudflare</td><td style="padding:10px 12px; border-bottom:1px solid var(--border-color);">Limited or trial</td></tr>'
                + '</tbody></table>'
                + '<h3>What Costs Money</h3>'
                + '<p>Most costs come from three things:</p>'
                + _cards([
                    { icon: '💾', name: 'Database Storage', desc: 'Storing user data beyond the free tier. Usually not a concern until thousands of users.' },
                    { icon: '📡', name: 'API Calls', desc: 'Third-party APIs (AI, maps, payments) often charge per request. Watch your usage.' },
                    { icon: '🌐', name: 'Bandwidth / Compute', desc: 'Serving lots of traffic or running server-side code. Free tiers cover most small projects.' },
                    { icon: '🎬', name: 'Media Storage & Delivery', desc: 'Images, video, and audio files are much larger than database records. Storing and serving them adds up fast, especially video.' },
                    { icon: '🔗', name: 'Custom Domains', desc: 'A domain name costs ~$10–15/year. Small, but almost every real project needs one.' },
                ], { style: 'margin:16px 0 16px;' })
                + '<p>See <a href="#" onclick="event.preventDefault(); loadRoute(\'Backend & Hosting Platforms.md\');">Backend &amp; Hosting Platforms</a> for a detailed side-by-side comparison.</p>'
                + _tip('Ask your AI: <em>"What would it cost to host this project if 500 people used it daily?"</em> It can estimate based on your stack.')
        },
        {
            title: 'Start Simple, Scale Later',
            content: '<h2>Plan the Foundation, Not the Features</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Get the big decisions right upfront — things like whether you need a database, a backend, or user accounts are hard to add later. But don\'t build out every feature before you\'ve validated the core idea.</p>'
                + '<ol class="step-num-list">'
                + '<li><strong>Plan your foundation</strong> — decide on your stack, database, and hosting before you start. Swapping these later is painful.</li>'
                + '<li><strong>Build the core experience</strong> — get the one thing your project does working well. Skip the extras.</li>'
                + '<li><strong>Deploy it</strong> — put it online so people can actually use it.</li>'
                + '<li><strong>Iterate based on real usage</strong> — let feedback tell you what to build next, not your imagination.</li>'
                + '</ol>'
                + '<h3>Let Your AI Help You Scale</h3>'
                + '<p>When you\'re ready to grow, describe the problem to your AI:</p>'
                + '<div style="display:flex; flex-direction:column; gap:12px; margin:16px 0 24px;">'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"This is getting slow with lots of items on screen. How can I optimize it?"</div>'
                + '<div style="padding:14px 18px; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); font-style:italic;">"Users are asking for [feature]. What\'s the simplest way to add it without overcomplicating the codebase?"</div>'
                + '</div>'
                + _tip('Plan your infrastructure, iterate on your features. The foundation is hard to change — everything built on top of it is not.')
        }
    ]
};
