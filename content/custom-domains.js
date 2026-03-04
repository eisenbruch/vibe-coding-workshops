// ── Custom Domains Guide ──────────────────────────────────────────
const CUSTOM_DOMAINS_GUIDE = {
    name: 'Custom Domains',
    subtitle: 'Buy a custom domain and connect it to your hosted project so users visit yoursite.com instead of a default URL.',
    lastStepCards: [
        { icon: '🌐', name: 'Hosting Platforms', desc: 'Compare hosting and backend options', route: 'hosting-platforms' },
        { icon: '🔥', name: 'Firebase', desc: 'Deploy your project with Firebase Hosting', route: 'docs/Firebase.md' },
        { icon: '☁️', name: 'Cloudflare', desc: 'Deploy with Cloudflare Pages', route: 'docs/Cloudflare.md' },
    ],
    steps: [
        // ── Step 1: Why a Custom Domain? ──
        {
            title: 'Why a Custom Domain?',
            nextLabel: 'Where to Buy',
            content: '<h2>Make Your Project Yours</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Hosting platforms give you a free URL like <code>your-project.web.app</code> or <code>your-project.pages.dev</code>. That works, but a custom domain (like <code>myproject.com</code>) looks more professional and is easier to share.</p>'
                + _cards([
                    { icon: '🎯', name: 'Professional', desc: 'A custom domain makes your project look polished and ready to share with anyone.' },
                    { icon: '🔗', name: 'Easy to Share', desc: 'Short, memorable URLs are easier for people to type and remember.' },
                    { icon: '🏗️', name: 'Portable', desc: 'Your domain stays the same even if you switch hosting platforms later.' },
                    { icon: '💰', name: 'Affordable', desc: 'Domains cost around $10/year — a small investment for a professional presence.' },
                ], { style: 'margin:16px 0 24px;' })
                + _tip('You don\'t need a custom domain to launch your project. The free URLs from hosting platforms work perfectly. A custom domain is a nice upgrade when you\'re ready.')
        },
        // ── Step 2: Where to Buy Your Domain ──
        {
            title: 'Where to Buy',
            nextLabel: 'Connect to Your Host',
            content: '<h2>Cloudflare Registrar (Recommended)</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">We recommend buying domains through <a href="https://www.cloudflare.com/products/registrar/" target="_blank" rel="noopener noreferrer">Cloudflare Registrar</a> for two reasons:</p>'
                + _cards([
                    { icon: '💵', name: 'At-Cost Pricing', desc: 'Cloudflare sells domains at the wholesale price with no markup — typically the cheapest option available.' },
                    { icon: '⚡', name: 'Built-In CDN & Caching', desc: 'Your domain automatically gets Cloudflare\'s global caching network — faster load times, lower hosting costs, and DDoS protection with no extra setup.' },
                ], { style: 'margin:16px 0 24px;' })
                + '<h3>How to Buy on Cloudflare</h3>'
                + '<ol class="step-num-list">'
                + '<li>Create a free account at <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer">dash.cloudflare.com</a></li>'
                + '<li>Go to <strong>Domain Registration</strong> > <strong>Register Domains</strong></li>'
                + '<li>Search for your desired domain name</li>'
                + '<li>Pick a TLD (<code>.com</code>, <code>.dev</code>, <code>.io</code>, etc.) and complete checkout</li>'
                + '<li>Your domain is now active and managed through Cloudflare\'s dashboard</li>'
                + '</ol>'
                + _note('You can also buy domains from Namecheap, Squarespace, GoDaddy, etc. If you do, you\'ll need to either point your nameservers to Cloudflare (to get the caching benefits) or set up DNS records manually. Buying directly through Cloudflare skips this step entirely.')
        },
        // ── Step 3: Connect to Your Hosting Platform ──
        {
            title: 'Connect to Your Host',
            nextLabel: 'Add DNS Records',
            content: '<h2>Add Your Domain in Your Hosting Platform</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Every hosting platform has a section where you add a custom domain. The exact steps differ, but the process is the same:</p>'
                + '<ol class="step-num-list">'
                + '<li>Open your hosting platform\'s dashboard and find the <strong>Domains</strong> or <strong>Custom Domains</strong> section</li>'
                + '<li>Click <strong>Add domain</strong> (or similar) and enter your domain (e.g., <code>myproject.com</code>)</li>'
                + '<li>The platform will give you <strong>DNS records</strong> to add — typically a TXT record for verification and one or more A/CNAME records to point your domain to their servers</li>'
                + '</ol>'
                + '<h3>Where to Find It</h3>'
                + _cards([
                    { icon: '🔥', name: 'Firebase', desc: 'Console > Hosting > Add custom domain' },
                    { icon: '▲', name: 'Vercel', desc: 'Project Settings > Domains > Add' },
                    { icon: '☁️', name: 'Cloudflare Pages', desc: 'Pages project > Custom domains > Set up a domain' },
                    { icon: '🐙', name: 'GitHub Pages', desc: 'Repo Settings > Pages > Custom domain' },
                ], { style: 'margin:16px 0 24px;' })
                + _tip('Keep your hosting dashboard open — you\'ll need the DNS records it provides in the next step.')
        },
        // ── Step 4: Add DNS Records ──
        {
            title: 'Add DNS Records',
            nextLabel: 'SSL & Security',
            content: '<h2>Point Your Domain to Your Host</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">Now add the DNS records your hosting platform gave you into your domain registrar\'s dashboard (e.g., Cloudflare).</p>'
                + '<h3>Typical Process</h3>'
                + '<ol class="step-num-list">'
                + '<li>Go to your domain registrar\'s DNS settings (e.g., <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer">dash.cloudflare.com</a> > your domain > <strong>DNS</strong> > <strong>Records</strong>)</li>'
                + '<li>Add the <strong>verification record</strong> your host provided (usually a TXT record)</li>'
                + '<li>Wait for verification (usually a few minutes, can take up to 24 hours)</li>'
                + '<li>Add the <strong>A records</strong> or <strong>CNAME record</strong> your host provided — these point your domain to their servers</li>'
                + '</ol>'
                + '<h3>Optional: Add www Subdomain</h3>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:16px;">If you also want <code>www.myproject.com</code> to work, add a <strong>CNAME record</strong>:</p>'
                + '<ul style="font-size:1.05em; line-height:1.7; margin-bottom:16px; padding-left:24px;">'
                + '<li><strong>Type:</strong> CNAME, <strong>Name:</strong> <code>www</code>, <strong>Target:</strong> <code>myproject.com</code></li>'
                + '</ul>'
                + _tip('If you bought your domain through Cloudflare, leave the proxy enabled (orange cloud icon) on your records. This routes traffic through Cloudflare\'s CDN for caching and protection.')
        },
        // ── Step 5: SSL & Security ──
        {
            title: 'SSL & Security',
            nextLabel: 'Subdomains',
            content: '<h2>SSL Certificates</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">SSL gives your site the <code>https://</code> lock icon. Most hosting platforms and registrars handle this automatically.</p>'
                + _cards([
                    { icon: '☁️', name: 'Cloudflare Domains', desc: 'SSL is automatic. Go to <strong>SSL/TLS</strong> and set encryption mode to <strong>Full (strict)</strong> for best security.' },
                    { icon: '▲', name: 'Vercel', desc: 'SSL is provisioned automatically when you add a domain. No action needed.' },
                    { icon: '🔥', name: 'Firebase', desc: 'SSL is provisioned automatically, though it may take a few minutes to activate.' },
                    { icon: '🐙', name: 'GitHub Pages', desc: 'Check "Enforce HTTPS" in your repo\'s Pages settings after adding the domain.' },
                ], { style: 'margin:16px 0 24px;' })
                + _tip('If your domain runs through Cloudflare\'s proxy, Cloudflare provisions the SSL certificate almost instantly — you don\'t need to wait for your hosting platform\'s own SSL.')
        },
        // ── Step 6: Subdomains ──
        {
            title: 'Subdomains',
            nextLabel: 'Checklist & Troubleshooting',
            content: '<h2>Using a Subdomain</h2>'
                + '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">If you don\'t want your project on the root domain, you can use a subdomain like <code>app.myproject.com</code>:</p>'
                + '<ol class="step-num-list">'
                + '<li>In your hosting platform\'s dashboard, add <code>app.myproject.com</code> as a custom domain</li>'
                + '<li>Your hosting platform will provide the DNS records to add — follow their instructions in your registrar\'s DNS settings</li>'
                + '<li>SSL is typically handled automatically — your subdomain will be live shortly</li>'
                + '</ol>'
                + _tip('This is useful if you want multiple projects on one domain (e.g., <code>blog.mysite.com</code>, <code>app.mysite.com</code>).')
        },
        // ── Step 7: Checklist & Troubleshooting ──
        {
            title: 'Checklist & Troubleshooting',
            content: '<h2>Summary Checklist</h2>'
                + _check([
                    'Buy a domain (e.g., on <a href="https://www.cloudflare.com/products/registrar/" target="_blank" rel="noopener noreferrer">Cloudflare Registrar</a>)',
                    'Add your domain in your hosting platform\'s dashboard',
                    'Add the verification record (TXT) in your registrar\'s DNS settings',
                    'Wait for your host to verify ownership',
                    'Add the A or CNAME records your host provided',
                    '(Optional) Add a CNAME for <code>www</code>',
                    'Confirm SSL is active (set to <strong>Full (strict)</strong> if using Cloudflare)',
                    'Verify your site loads at <code>https://yourdomain.com</code>',
                ])
                + '<h2 style="margin-top:32px;">Troubleshooting</h2>'
                + '<div style="overflow-x:auto;">'
                + '<table style="width:100%; border-collapse:collapse; font-size:1.05em;">'
                + '<tr style="border-bottom:2px solid var(--border-color);"><th style="text-align:left; padding:12px 16px;">Problem</th><th style="text-align:left; padding:12px 16px;">Fix</th></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:12px 16px;">Domain shows "Pending" for hours</td><td style="padding:12px 16px;">Double-check DNS records in your registrar. Make sure records point to the correct IPs/targets. DNS propagation can take up to 24 hours.</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:12px 16px;">SSL errors or "not secure" warning</td><td style="padding:12px 16px;">If using Cloudflare, make sure SSL mode is set to <strong>Full (strict)</strong> in SSL/TLS settings. Otherwise, wait a few minutes for your host\'s cert to provision.</td></tr>'
                + '<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:12px 16px;">Site shows an error page</td><td style="padding:12px 16px;">Verify your project is deployed on your hosting platform. Make sure DNS records point to the correct target, not a placeholder.</td></tr>'
                + '<tr><td style="padding:12px 16px;"><code>www</code> doesn\'t work</td><td style="padding:12px 16px;">Make sure you added a CNAME record for <code>www</code> pointing to your root domain.</td></tr>'
                + '</table>'
                + '</div>'
        }
    ]
};
