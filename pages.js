// ── Page Render Functions ───────────────────────────────────────
// Custom route renderers and page-building utilities.
// These reference globals (contentDiv, selector, etc.) defined in index.html.

function generateHeadingId(text) {
    return text.toString().toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s/g, '-');
}

// ── Pick Your Path ──────────────────────────────────────────
function renderPickYourPath() {
    let html = '<div class="path-picker">';
    html += '<h1>Pick Your Path</h1>';
    html += '<p class="path-picker-subtitle">Choose your setup based on comfort level. Everyone builds the same project — just with different tools.</p>';

    PATH_OPTIONS.forEach(group => {
        html += '<div class="path-picker-level">';
        html += `<div class="path-picker-level-label">${group.level}</div>`;
        html += '<div class="path-picker-grid pick-your-path-grid">';
        group.paths.forEach(p => {
            const costClass = p.cost === 'free' ? 'free' : 'paid';
            const costLabel = p.cost === 'free' ? 'Free' : 'Paid';
            const badge = p.recommended ? '<span class="path-card-badge">Recommended</span>' : '';
            html += `<div class="path-card" onclick="selectPath('${p.file}')" tabindex="0" role="button" aria-label="${p.name}">`;
            html += badge;
            html += `<div class="path-card-icon">${p.icon}</div>`;
            html += `<div class="path-card-name">${p.name}</div>`;
            html += `<div class="path-card-tools">${p.tools}</div>`;
            html += `<div class="path-card-desc">${p.description}</div>`;
            html += '<div class="path-card-pills">';
            html += `<span class="path-pill time">${p.time}</span>`;
            html += `<span class="path-pill ${costClass}">${costLabel}</span>`;
            html += '</div>';
            html += '</div>';
        });
        html += '</div></div>';
    });

    html += '<p class="path-picker-hint">Not sure? Start with Intermediate — you can always level up later.</p>';

    html += '<hr style="margin: 32px 0; border: none; border-top: 1px solid var(--border-color);">';
    html += '<h2 style="font-size:1.3em; font-weight:700; margin-bottom:12px;">Tool Comparison</h2>';
    html += '<p style="color:var(--text-muted); margin-bottom:16px;">A quick overview of the major AI models and when to reach for each:</p>';
    html += '<ul style="padding-left:1.5em; margin-bottom:16px;">';
    html += '<li><strong>Claude Opus and Sonnet:</strong> The architect. Best for backend logic, complex architecture, and understanding large projects.</li>';
    html += '<li><strong>Gemini 3+:</strong> The speed demon. Excellent for writing, rapid prototyping, and converting screenshots to UI code.</li>';
    html += '</ul>';
    html += '<blockquote style="padding:0 1em; color:var(--text-muted); border-left:0.25em solid var(--blockquote-border);"><strong>Tip:</strong> Switch models when you get stuck!</blockquote>';

    html += '</div>';
    contentDiv.innerHTML = html;

    // Keyboard support for cards
    contentDiv.querySelectorAll('.path-card').forEach(card => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}


function selectPath(filePath) {
    selector.value = filePath;
    loadMarkdown(filePath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Welcome Landing Page ─────────────────────────────────────
function renderWelcome() {
    let html = '<div class="welcome-landing">';

    // Hero
    html += '<div style="text-align:center; margin-bottom:40px;">';
    html += '<h1 style="font-size:2.4em; font-weight:800; border:none; margin-bottom:8px;">Welcome to the Vibe Coding Workshop</h1>';
    html += '<p style="color:var(--text-muted); font-size:1.1em; margin-bottom:4px;">Use AI to build real software — no coding experience required</p>';
    html += '<p style="color:var(--text-muted); font-size:0.9em;">By Noah Eisenbruch · <a href="mailto:noaheisenbruch@gmail.com">noaheisenbruch@gmail.com</a></p>';
    html += '</div>';

    // Follow Along
    html += '<div style="text-align:center; background:var(--bg-color); border:1.5px solid var(--border-color); border-radius:12px; padding:32px 24px; margin-bottom:40px;">';
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:16px; border:none; padding:0;">Follow Along</h2>';
    html += '<p style="font-size:2em; font-weight:800; letter-spacing:-0.01em; margin-bottom:4px; color:var(--text-color);">workshop.nerktek.com</p>';
    html += '<p style="color:var(--text-muted); font-size:0.95em; margin-bottom:20px;">Type the URL above or scan the QR code to open this site on your device</p>';
    html += '<img src="images/github-site-qr.png" alt="Workshop QR Code" style="width:180px; height:180px; border-radius:10px;">';
    html += '</div>';

    // Explore the Workshop
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); text-align:center; margin-bottom:16px; border:none; padding:0;">Explore the Workshop</h2>';
    html += '<div class="path-picker-grid" style="margin-bottom:40px;">';
    html += '<div class="path-card" onclick="loadRoute(\'what-is-vibe-coding\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">🧠</div>';
    html += '<div class="path-card-name">What is Vibe Coding?</div>';
    html += '<div class="path-card-desc">Learn how AI-assisted coding works</div>';
    html += '</div>';
    html += '<div class="path-card" onclick="loadRoute(\'why-vibe-coding\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">⚡</div>';
    html += '<div class="path-card-name">Why Vibe Coding?</div>';
    html += '<div class="path-card-desc">An essential skill for the AI era</div>';
    html += '</div>';
    html += '<div class="path-card" onclick="loadRoute(\'who-is-vibe-coding-for\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">🎯</div>';
    html += '<div class="path-card-name">Who Is It For?</div>';
    html += '<div class="path-card-desc">Bring your skills — technical or not</div>';
    html += '</div>';
    html += '<div class="path-card" onclick="loadRoute(\'pick-your-path\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">🛤️</div>';
    html += '<div class="path-card-name">Pick Your Path</div>';
    html += '<div class="path-card-desc">Choose your setup and start building</div>';
    html += '</div>';
    html += '</div>';

    // Feedback
    html += '<div style="text-align:center; border-top:1px solid var(--border-color); padding-top:28px;">';
    html += '<p style="color:var(--text-muted); font-size:0.95em; margin-bottom:12px;">Your feedback helps shape future workshops</p>';
    html += '<a href="https://forms.gle/3iVRWgUS6o8U51Ut5" target="_blank" rel="noopener noreferrer" class="step-link-btn" style="font-size:0.95em;">Leave Feedback</a>';
    html += '</div>';

    html += '</div>';
    contentDiv.innerHTML = html;
    addCardKeyboardSupport();
}


// ── What is Vibe Coding ────────────────────────────────────
function renderWhatIsVibeCoding() {
    let html = '<div class="path-picker">';
    html += '<h1>What is Vibe Coding?</h1>';
    html += '<p class="path-picker-subtitle">Describe what you want. AI writes the code. You guide the result.</p>';
    html += '</div>';

    // How it works — three visual columns
    html += '<div class="path-picker-grid" style="margin-bottom:32px;">';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">💬</div>';
    html += '<div class="path-card-name">You Describe</div>';
    html += '<div class="path-card-desc">Tell the AI what you want in plain language — no syntax or programming knowledge needed</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">⚡</div>';
    html += '<div class="path-card-name">AI Builds</div>';
    html += '<div class="path-card-desc">The AI generates working code — websites, tools, games, full applications</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🔄</div>';
    html += '<div class="path-card-name">You Iterate</div>';
    html += '<div class="path-card-desc">Test it, tell the AI what to change, and refine until it\'s exactly what you want</div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="step-callout note" style="margin-bottom:32px;">';
    html += '<span class="step-callout-icon">💡</span>';
    html += '<div class="step-callout-body">No coding experience required to start. As you build more complex projects, understanding your tools becomes important — and your AI can teach you along the way.</div>';
    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:16px 0;">';
    html += '<a href="#why-vibe-coding" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'why-vibe-coding\');">Why Vibe Coding? →</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
}

// ── Why Vibe Coding ────────────────────────────────────────
function renderWhyVibeCoding() {
    let html = '<div class="path-picker">';
    html += '<h1>Why Vibe Coding?</h1>';
    html += '<p class="path-picker-subtitle">In the AI era, building things is no longer limited to people who write code.</p>';
    html += '</div>';

    html += '<p style="font-size:1.05em; line-height:1.7; margin-bottom:24px;">AI has fundamentally changed what it means to build software. Ideas that used to take weeks of development can now be prototyped in an afternoon. Vibe coding puts that power in your hands — turning the ability to create software into an essential professional and creative skill.</p>';

    html += '<div class="path-picker-grid" style="margin-bottom:32px;">';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">💡</div>';
    html += '<div class="path-card-name">Turn Ideas Into Reality</div>';
    html += '<div class="path-card-desc">Build tools, prototypes, and products for your work or personal projects — without waiting on developers</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🚀</div>';
    html += '<div class="path-card-name">Move Faster</div>';
    html += '<div class="path-card-desc">Test concepts in hours instead of weeks. Iterate on real, working software instead of mockups and slide decks</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🔓</div>';
    html += '<div class="path-card-name">Unlock New Capabilities</div>';
    html += '<div class="path-card-desc">Automate workflows, build internal tools, create data visualizations — things you couldn\'t do before</div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="step-callout tip" style="margin-bottom:32px;">';
    html += '<span class="step-callout-icon">🎯</span>';
    html += '<div class="step-callout-body">Vibe coding isn\'t about becoming a software engineer. It\'s about adding <strong>building</strong> to your toolkit — the same way spreadsheets, presentations, and design tools became essential skills over time.</div>';
    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:16px 0;">';
    html += '<a href="#who-is-vibe-coding-for" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'who-is-vibe-coding-for\');">Who Is It For? →</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
}

// ── Who Is Vibe Coding For ─────────────────────────────────
function renderWhoIsVibeCodingFor() {
    let html = '<div class="path-picker">';
    html += '<h1>Who Is Vibe Coding For?</h1>';
    html += '<p class="path-picker-subtitle">Anyone who\'s curious and wants to build things. Your existing skills are your superpower.</p>';
    html += '</div>';

    html += '<div class="path-picker-grid" style="margin-bottom:32px;">';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">💻</div>';
    html += '<div class="path-card-name">Technical People</div>';
    html += '<div class="path-card-desc">Developers, engineers, data scientists — move 10x faster on prototypes, side projects, and automation</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🎨</div>';
    html += '<div class="path-card-name">Designers & Creatives</div>';
    html += '<div class="path-card-desc">Artists, designers, writers — bring your visual and creative instincts directly into interactive projects</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">📊</div>';
    html += '<div class="path-card-name">Marketers & Analysts</div>';
    html += '<div class="path-card-desc">Build landing pages, dashboards, and tools tailored to your exact needs — no dev team required</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🌱</div>';
    html += '<div class="path-card-name">Complete Beginners</div>';
    html += '<div class="path-card-desc">No experience needed — just curiosity and a willingness to experiment</div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="step-callout tip" style="margin-bottom:24px;">';
    html += '<span class="step-callout-icon">💡</span>';
    html += '<div class="step-callout-body"><strong>Bring your existing skills.</strong> A marketer who understands audiences will build better landing pages. A designer with an eye for layout will create more polished interfaces. A data analyst will build smarter dashboards. Your domain expertise is what makes your projects great and unique — the AI handles the code.</div>';
    html += '</div>';

    html += '<div class="step-callout note" style="margin-bottom:32px;">';
    html += '<span class="step-callout-icon">🔑</span>';
    html += '<div class="step-callout-body"><strong>The key ingredient is curiosity.</strong> The best vibe coders ask questions — "What if I tried this?" "Can I make it do that?" Asking questions is how you unlock new outcomes and capabilities. This workshop is built around that mindset.</div>';
    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:16px 0;">';
    html += '<a href="#what-youll-learn" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'what-youll-learn\');">What You\'ll Learn →</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
}

function renderWhatYoullLearn() {
    let html = '<div class="path-picker">';
    html += '<h1>What You\'ll Learn</h1>';
    html += '<p class="path-picker-subtitle">From idea to deployed project — the full vibe coding workflow</p>';
    html += '</div>';

    html += '<ol class="step-num-list" style="margin-bottom:32px;">';
    html += '<li><strong>Use any AI coding agent</strong> — Claude, Gemini, ChatGPT, and more. Pick the right tool for you.</li>';
    html += '<li><strong>Prompt effectively</strong> — Write clear descriptions that produce the code you actually want.</li>';
    html += '<li><strong>Iterate and debug</strong> — Test, refine, and fix issues by communicating with your AI.</li>';
    html += '<li><strong>Set up real projects</strong> — File structure, dependencies, and configuration from scratch.</li>';
    html += '<li><strong>Use Git and GitHub</strong> — Save checkpoints, create branches, push your code, and roll back if something breaks.</li>';
    html += '<li><strong>Deploy to the web</strong> — Ship your project so anyone can use it.</li>';
    html += '</ol>';

    html += '<div class="step-callout tip" style="margin-bottom:24px;">';
    html += '<span class="step-callout-icon">🎯</span>';
    html += '<div class="step-callout-body">The core workflow is <strong>prompt → test → iterate → commit</strong>. You\'ll practice this cycle throughout the workshop.</div>';
    html += '</div>';

    html += '<div class="step-callout note" style="margin-bottom:32px;">';
    html += '<span class="step-callout-icon">🙋</span>';
    html += '<div class="step-callout-body"><strong>Ask questions!</strong> During the workshop, ask about anything — your project, your tools, a concept you want to understand. The best way to learn vibe coding is to stay curious and explore what\'s possible.</div>';
    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:16px 0;">';
    html += '<a href="#example-projects" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'example-projects\');">See Example Projects →</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
}

function renderExampleProjects() {
    let html = '<div class="path-picker">';
    html += '<h1>Example Projects</h1>';
    html += '<p class="path-picker-subtitle">Real projects built with vibe coding — from quick tools to full applications</p>';
    html += '</div>';

    html += '<div class="path-picker-grid" style="margin-bottom:24px;">';
    WELCOME_PROJECTS.forEach(p => {
        html += `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="path-card" style="text-decoration:none; cursor:pointer;">`;
        html += `<div class="path-card-icon">${p.icon}</div>`;
        html += `<div class="path-card-name">${p.name}</div>`;
        html += `<div class="path-card-tools">${p.type}</div>`;
        html += `<div class="path-card-desc">${p.learning}</div>`;
        html += '</a>';
    });
    html += '</div>';

    html += '<h2 style="font-size:1.3em; font-weight:700; margin-bottom:12px; border-bottom:1px solid var(--header-border); padding-bottom:0.3em;">Other Projects</h2>';
    html += '<ul style="padding-left:1.5em; margin-bottom:24px; line-height:1.7;">';
    html += '<li><strong>Raspberry Pi Instant Camera</strong> — prints instant picture stickers with text and current date/time</li>';
    html += '<li><strong>Blender Addon</strong> — optimally rotates a 3D object to minimize its bounding box for manufacturing</li>';
    html += '</ul>';

    html += '<div class="step-callout note" style="margin-bottom:24px;">';
    html += '<span class="step-callout-icon">💡</span>';
    html += '<div class="step-callout-body"><strong>Key Takeaway:</strong> Don\'t limit yourself. If you think it should exist, just try to create it. Vibe coding can make testing concepts easier than creating a mockup.</div>';
    html += '</div>';

    html += '<div class="step-callout tip" style="margin-bottom:32px;">';
    html += '<span class="step-callout-icon">🔧</span>';
    html += '<div class="step-callout-body"><strong>Remember:</strong> AI can help with more than just code — it can help prototype your hardware, organize your files, and much more.</div>';
    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:24px 0;">';
    html += '<a href="#pick-your-path" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'pick-your-path\');">Choose Your Setup Path →</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
    addCardKeyboardSupport();
}

function loadRoute(route) {
    selector.value = route;
    loadMarkdown(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addCardKeyboardSupport() {
    contentDiv.querySelectorAll('.path-card').forEach(card => {
        if (!card.getAttribute('tabindex')) card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// ── Shared Step Guide Renderer ───────────────────────────────
// Used by setup guides, beginner quick start, and group project.
// guide: { name, subtitle, steps: [{ title, content, nextLabel? }] }
// navCall: function(stepNum) returning the onclick JS string, e.g. "renderGroupProject(3)"
function renderStepGuide(guide, navCall, step) {
    step = step || 0;
    var lastStep = guide.steps.length - 1;
    var s = guide.steps[step];
    var html = '';

    // Header
    html += '<div class="path-picker">';
    html += '<h1>' + guide.name + '</h1>';
    if (guide.subtitle) html += '<p class="path-picker-subtitle">' + guide.subtitle + '</p>';
    html += '</div>';

    // Step content
    html += s.content;

    // Navigation buttons
    function navBtn(targetStep, label, isPrimary) {
        var style = isPrimary
            ? 'font-size:1.05em; padding:10px 28px;'
            : 'font-size:1.05em; padding:10px 28px; background:var(--surface-color); color:var(--text-muted); border:1px solid var(--border-color); box-shadow:none;';
        return '<a href="#" class="step-link-btn" style="' + style + '" onclick="event.preventDefault(); ' + navCall(targetStep) + '; window.scrollTo({top:0,behavior:\'smooth\'});">' + label + '</a>';
    }

    var fwdLabel = step < lastStep ? (s.nextLabel || guide.steps[step + 1].title) : null;

    if (step < lastStep) {
        html += '<div style="display:flex; justify-content:center; align-items:center; gap:12px; padding:24px 0 0;">';
        if (step > 0) html += navBtn(step - 1, '\u2190 Back', false);
        if (fwdLabel) html += navBtn(step + 1, fwdLabel + ' \u2192', true);
        html += '</div>';
    } else {
        // Last step: back button + "what's next" cards
        if (step > 0) {
            html += '<div style="display:flex; justify-content:center; padding:8px 0 24px;">';
            html += navBtn(step - 1, '\u2190 Back', false);
            html += '</div>';
        }
        // Last-step nav cards can be overridden by guide.lastStepCards
        if (guide.lastStepCards) {
            html += _cards(guide.lastStepCards);
        } else {
            html += _cards([
                { icon: '\uD83D\uDEE4\uFE0F', name: 'Back to Pick Your Path', desc: 'Explore other setup options', route: 'pick-your-path' },
                { icon: '\uD83D\uDE80', name: 'Start the Group Project', desc: 'Jump into the hands-on group build', route: 'group-project' },
            ]);
        }
    }

    contentDiv.innerHTML = html;
    addCardKeyboardSupport();
    addCopyButtons();
}

function renderBeginnerQuickStart(step) {
    step = step || 0;
    updateStepHash('setup-beginner', step);
    renderStepGuide(BEGINNER_GUIDE, function (s) { return 'renderBeginnerQuickStart(' + s + ')'; }, step);
}

function renderSetupGuide(key, step) {
    step = step || 0;
    updateStepHash(key, step);
    renderStepGuide(SETUP_GUIDES[key], function (s) { return "renderSetupGuide('" + key + "'," + s + ")"; }, step);
}

function renderGroupProject(step) {
    step = step || 0;
    updateStepHash('group-project', step);
    renderStepGuide(GROUP_PROJECT_GUIDE, function (s) { return 'renderGroupProject(' + s + ')'; }, step);
}

// Update URL hash with step number without triggering hashchange
function updateStepHash(route, step) {
    var hash = step > 0 ? route + '/' + step : route;
    if (decodeURIComponent(window.location.hash.slice(1)) !== hash) {
        history.replaceState(null, '', '#' + encodeURIComponent(hash));
    }
    if (typeof updateSidebarDocsActive === 'function') updateSidebarDocsActive();
}

