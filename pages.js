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
    html += '<p style="color:var(--text-muted); font-size:0.9em;">By <a href="#who-am-i" onclick="event.preventDefault(); loadRoute(\'who-am-i\');" style="color:var(--text-muted); text-decoration:underline; text-decoration-style:dotted; text-underline-offset:2px;">Noah Eisenbruch</a> · <a href="mailto:noaheisenbruch@gmail.com">noaheisenbruch@gmail.com</a></p>';
    html += '</div>';

    // Follow Along
    html += '<div style="text-align:center; background:var(--bg-color); border:1.5px solid var(--border-color); border-radius:12px; padding:32px 12px; margin-bottom:40px;">';
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin:0 0 16px 0; border:none; padding:0;">Follow Along</h2>';
    html += '<p class="welcome-url" style="font-size:2em; font-weight:800; letter-spacing:-0.01em; margin-bottom:4px; color:var(--text-color);">workshop.nerktek.com</p>';
    html += '<p style="color:var(--text-muted); font-size:0.95em; margin-bottom:0;">Type the URL above to open this site on your device</p>';
    html += '</div>';

    // Explore the Workshop
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); text-align:center; margin-bottom:16px; border:none; padding:0;">Explore the Workshop</h2>';
    html += '<div class="path-picker-grid" style="margin-bottom:40px;">';
    html += '<div class="path-card" onclick="loadRoute(\'who-am-i\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">👋</div>';
    html += '<div class="path-card-name">Your Instructor</div>';
    html += '<div class="path-card-desc">Meet Noah — artist, product manager, educator</div>';
    html += '</div>';
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
    html += '<div class="path-card" onclick="loadRoute(\'what-youll-learn\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">📋</div>';
    html += '<div class="path-card-name">What You\'ll Learn</div>';
    html += '<div class="path-card-desc">Skills and concepts covered in the workshop</div>';
    html += '</div>';
    html += '<div class="path-card" onclick="loadRoute(\'example-projects\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">🚀</div>';
    html += '<div class="path-card-name">Example Projects</div>';
    html += '<div class="path-card-desc">See what you can build with vibe coding</div>';
    html += '</div>';
    html += '<div class="path-card" onclick="loadRoute(\'beyond-coding\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">🌐</div>';
    html += '<div class="path-card-name">Beyond Vibe Coding</div>';
    html += '<div class="path-card-desc">AI tools for writing, research, design, and more</div>';
    html += '</div>';
    html += '<div class="path-card" onclick="loadRoute(\'pick-your-path\')" tabindex="0" role="button">';
    html += '<div class="path-card-icon">🛤️</div>';
    html += '<div class="path-card-name">Pick Your Path</div>';
    html += '<div class="path-card-desc">Choose your setup and start building</div>';
    html += '</div>';
    html += '</div>';

    // Next page CTA
    html += '<div style="text-align:center; border-top:1px solid var(--border-color); padding-top:28px;">';
    html += '<a href="#who-am-i" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'who-am-i\');">Let\'s Get Started &rarr;</a>';
    html += '</div>';

    html += '</div>';
    contentDiv.innerHTML = html;
    addCardKeyboardSupport();
}


// ── Workshop Kickoff ───────────────────────────────────────
function renderWorkshopKickoff() {
    let html = '<div class="path-picker">';
    html += '<h1>Workshop Kickoff</h1>';
    html += '<p class="path-picker-subtitle">Let\'s get to know the room before we dive in</p>';
    html += '</div>';

    // Room Check
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:16px; border:none; padding:0;">Room Check — Show of Hands</h2>';
    html += '<div class="path-picker-grid" style="margin-bottom:36px;">';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">💡</div>';
    html += '<div class="path-card-name">Had an Idea for an App, Game, Website, or Business?</div>';
    html += '<div class="path-card-desc">Even if it never left your head — that counts</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🤖</div>';
    html += '<div class="path-card-name">Used AI?</div>';
    html += '<div class="path-card-desc">ChatGPT, image generators, voice assistants — anything counts</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">💻</div>';
    html += '<div class="path-card-name">Written Any Code?</div>';
    html += '<div class="path-card-desc">HTML, Python, spreadsheet formulas — even a little bit</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">▶️</div>';
    html += '<div class="path-card-name">Used a Terminal?</div>';
    html += '<div class="path-card-desc">Command line, shell, or terminal — the text-based interface</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🚀</div>';
    html += '<div class="path-card-name">Launched Your Own Site or App?</div>';
    html += '<div class="path-card-desc">Something live on the internet that people can actually use</div>';
    html += '</div>';

    html += '</div>';

    // Quick Intros
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:16px; border:none; padding:0;">Quick Intros</h2>';
    html += '<div class="path-picker-grid" style="margin-bottom:36px;">';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon" style="font-family:var(--font-mono,monospace); font-weight:800; font-size:1.3em; color:var(--accent-color);">01</div>';
    html += '<div class="path-card-name">Your Name</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon" style="font-family:var(--font-mono,monospace); font-weight:800; font-size:1.3em; color:var(--accent-color);">02</div>';
    html += '<div class="path-card-name">Skills or Interests You\'re Bringing</div>';
    html += '<div class="path-card-desc">Doesn\'t have to be technical</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon" style="font-family:var(--font-mono,monospace); font-weight:800; font-size:1.3em; color:var(--accent-color);">03</div>';
    html += '<div class="path-card-name">What You Want to Build or Learn</div>';
    html += '</div>';

    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:16px 0;">';
    html += '<a href="#what-is-vibe-coding" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'what-is-vibe-coding\');">What is Vibe Coding? &rarr;</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
}


// ── Feedback ───────────────────────────────────────────────
function renderFeedback() {
    let html = '<div class="path-picker">';
    html += '<h1>Feedback</h1>';
    html += '<p class="path-picker-subtitle">Your feedback helps shape future workshops</p>';
    html += '</div>';

    html += '<div style="text-align:center; background:var(--bg-color); border:1.5px solid var(--border-color); border-radius:12px; padding:40px 20px; margin-bottom:32px;">';
    html += '<p style="font-size:1.1em; color:var(--text-color); margin-bottom:20px;">Let me know what worked, what didn\'t, and what you\'d like to see next.</p>';
    html += '<a href="https://forms.gle/3iVRWgUS6o8U51Ut5" target="_blank" rel="noopener noreferrer" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;">Leave Feedback &rarr;</a>';
    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:16px 0;">';
    html += '<a href="#pick-your-path" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'pick-your-path\');">Pick Your Path &rarr;</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
}


// ── Who Am I ───────────────────────────────────────────────
function renderWhoAmI() {
    var html = '<div class="who-am-i">';

    // Header
    html += '<div style="text-align:center; margin-bottom:36px;">';
    html += '<div style="height:80px; border-radius:50%; background:var(--accent-color); color:#fff; font-size:2em; font-weight:800; display:inline-flex; align-items:center; justify-content:center; margin-bottom:16px; letter-spacing:-0.02em;">About Me</div>';
    html += '<h1 style="font-size:2.2em; font-weight:800; border:none; margin:0 0 6px 0;">Noah Eisenbruch</h1>';
    html += '<p style="color:var(--text-muted); font-size:1.1em; margin:0;">Artist &middot; Tech Founder &middot; Product Manager &middot; Creative Technologist &middot; Educator</p>';
    html += '</div>';

    // Three identity cards
    html += '<div class="path-picker-grid" style="margin-bottom:28px;">';

    html += '<div class="path-card" style="cursor:default; text-align:left;">';
    html += '<div class="path-card-icon" style="font-family:var(--font-mono,monospace); font-weight:800; font-size:1.3em; color:var(--accent-color);">01</div>';
    html += '<div class="path-card-name">Background</div>';
    html += '<div class="path-card-desc">Studied experimental video, sculpture, and film. Spent 15 years in tech as a founder, product manager, and consultant.</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:left;">';
    html += '<div class="path-card-icon" style="font-family:var(--font-mono,monospace); font-weight:800; font-size:1.3em; color:var(--accent-color);">02</div>';
    html += '<div class="path-card-name">Art Practice</div>';
    html += '<div class="path-card-desc">Art that blurs the line between real and fake — fully functional products, services, and websites built as conceptual pieces. Also spans video art, interactive installations, and jewelry design.</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:left;">';
    html += '<div class="path-card-icon" style="font-family:var(--font-mono,monospace); font-weight:800; font-size:1.3em; color:var(--accent-color);">03</div>';
    html += '<div class="path-card-name">Approach</div>';
    html += '<div class="path-card-desc">Strengths in ideation, product management, and strategy rather than deep-in-the-weeds coding. Vibe coding bridges that gap perfectly.</div>';
    html += '</div>';

    html += '</div>';

    // Feature card — the bridge narrative
    html += '<div class="path-card" style="cursor:default; text-align:left; padding:28px 32px; margin-bottom:28px; border:1px solid var(--border-color);">';
    html += '<div class="path-card-name" style="font-size:1.15em; margin-bottom:10px;">Why I Teach This</div>';
    html += '<div class="path-card-desc" style="font-size:1em; line-height:1.7;">';
    html += 'Vibe coding empowers me to build projects I\'d only dreamed about. ';
    html += 'I believe everyone deserves to bring their ideas to life without technical gatekeeping. ';
    html += 'That\'s why I teach workshops and private lessons — to help others bypass the same roadblocks I faced.';
    html += '</div>';
    html += '</div>';

    // Gantt Timeline
    // Range: 2008–2026 = 18 years. left% = (start-2008)/18*100, width% = (end-start)/18*100
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:16px; border:none; padding:0;">The Journey</h2>';
    html += '<div class="gantt-timeline">';
    html += '<div class="gantt-inner">';

    // Year axis labels
    html += '<div class="gantt-axis" style="height:20px; position:relative;">';
    var ganttYears = [2008,2010,2012,2014,2016,2018,2020,2022,2024,2026];
    for (var i = 0; i < ganttYears.length; i++) {
        var pct = ((ganttYears[i] - 2008) / 18 * 100).toFixed(1);
        html += '<div class="gantt-axis-label" style="left:' + pct + '%;">' + ganttYears[i] + '</div>';
    }
    html += '</div>';

    // Grid lines
    html += '<div class="gantt-grid">';
    for (var i = 0; i < ganttYears.length; i++) {
        var pct = ((ganttYears[i] - 2008) / 18 * 100).toFixed(1);
        html += '<div class="gantt-grid-line" style="left:' + pct + '%;"></div>';
    }
    html += '</div>';

    // Bars — each row is one role
    html += '<div class="gantt-rows">';

    var ganttData = [
        { start: 2012, end: 2022, name: 'IT Firm', desc: 'IT Technician \u2192 Product &amp; Tech Consultant \u2192 General Manager. Managed client accounts, development teams, and web solutions over nearly a decade.' },
        { start: 2008, end: 2012, name: 'Hampshire College', desc: 'Studied experimental film, video, sculpture, and digital art' },
        { start: 2012, end: 2018, name: 'Freelance Creative &amp; Tech', desc: 'Built websites and edited video for visual artists and musicians. Consulted on technical aspects of physical and digital work.' },
        { start: 2017, end: 2022, name: 'Automated Reminders SaaS Startup', desc: 'Customer Success, Support, &amp; Project Manager. Built onboarding flows, managed product updates, ran SEO and A/B experiments.' },
        { start: 2018, end: 2020, name: 'Augmented Reality SaaS Startup', desc: 'Founder &amp; CTO. Built web and mobile apps for collaborative 3D design reviews in augmented reality. Founders Institute and Newark Venture Partners Labs accelerator programs.' },
        { start: 2018, end: 2019, name: 'Street Art Database Startup', desc: 'AR Lead. Designed and developed immersive street art AR experiences in native Swift for iOS.' },
        { start: 2022, end: 2024, name: 'Web3 Startup', desc: 'Product Manager &amp; Event Organizer. Managed product at a web3 platform and organized one of the largest web3 conferences.' },
        { start: 2024, end: 2026, name: 'Independent', desc: 'Building creative projects and businesses while teaching others to do the same through workshops and private lessons.' }
    ];

    // Pack bars into lanes (first-fit: place each bar on the first lane where it won't overlap)
    var lanes = []; // each lane is an array of { start, end }
    var laneAssignments = [];
    for (var i = 0; i < ganttData.length; i++) {
        var d = ganttData[i];
        var placed = false;
        for (var l = 0; l < lanes.length; l++) {
            var fits = true;
            for (var j = 0; j < lanes[l].length; j++) {
                if (d.start < lanes[l][j].end && d.end > lanes[l][j].start) {
                    fits = false;
                    break;
                }
            }
            if (fits) {
                lanes[l].push({ start: d.start, end: d.end });
                laneAssignments.push(l);
                placed = true;
                break;
            }
        }
        if (!placed) {
            lanes.push([{ start: d.start, end: d.end }]);
            laneAssignments.push(lanes.length - 1);
        }
    }

    // Render one gantt-row per lane, with multiple bars per row
    for (var l = 0; l < lanes.length; l++) {
        html += '<div class="gantt-row">';
        for (var i = 0; i < ganttData.length; i++) {
            if (laneAssignments[i] !== l) continue;
            var d = ganttData[i];
            var left = ((d.start - 2008) / 18 * 100 + 0.3).toFixed(1);
            var width = ((d.end - d.start) / 18 * 100 - 0.6).toFixed(1);
            html += '<div class="gantt-bar" style="left:' + left + '%; width:' + width + '%;">';
            html += '<span class="gantt-bar-label">' + d.name + '</span>';
            html += '</div>';
        }
        html += '</div>';
    }

    html += '</div>';
    html += '</div>';

    // Detail cards below the chart (sorted chronologically)
    var ganttSorted = ganttData.slice().sort(function(a, b) { return a.start - b.start || a.end - b.end; });
    html += '<div class="gantt-details">';
    for (var i = 0; i < ganttSorted.length; i++) {
        var d = ganttSorted[i];
        var endLabel = d.end === 2026 ? 'Now' : d.end;
        html += '<div class="gantt-detail">';
        html += '<div style="flex-shrink:0;"><div class="gantt-detail-years">' + d.start + '\u2013' + endLabel + '</div></div>';
        html += '<div><div class="gantt-detail-name">' + d.name + '</div>';
        html += '<div class="gantt-detail-desc">' + d.desc + '</div></div>';
        html += '</div>';
    }
    html += '</div>';

    html += '</div>';

    // CTA
    html += '<div style="text-align:center; padding:16px 0;">';
    html += '<a href="#workshop-kickoff" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'workshop-kickoff\');">Workshop Kickoff &rarr;</a>';
    html += '</div>';

    html += '</div>';
    contentDiv.innerHTML = html;
}

// ── What is Vibe Coding ────────────────────────────────────
function renderWhatIsVibeCoding() {
    let html = '<div class="path-picker">';
    html += '<h1>What is Vibe Coding?</h1>';
    html += '<p class="path-picker-subtitle">A feedback loop between you and AI — describe, test, refine, repeat.</p>';
    html += '</div>';

    // Origin
    html += '<div class="step-callout note" style="margin-bottom:32px;">';
    html += '<span class="step-callout-icon">📖</span>';
    html += '<div class="step-callout-body">The term "vibe coding" was coined by Andrej Karpathy, co-founder of OpenAI and former head of AI at Tesla: "Fully give in to the vibes ... and forget that the code even exists."</div>';
    html += '</div>';

    // How it works — three visual columns
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); text-align:center; margin-bottom:16px; border:none; padding:0;">How It Works</h2>';
    html += '<div class="path-picker-grid" style="margin-bottom:12px;">';
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
    html += '<p style="text-align:center; color:var(--text-muted); font-size:0.9em; margin-bottom:32px;">This cycle repeats — each round gets you closer to what you envisioned.</p>';

    // Key concepts
    html += '<h2 style="font-size:1.1em; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); text-align:center; margin-bottom:16px; border:none; padding:0;">Key Concepts</h2>';
    html += '<div class="path-picker-grid" style="margin-bottom:32px;">';
    html += '<div class="path-card" style="cursor:default; text-align:left;">';
    html += '<div class="path-card-name">It\'s a Conversation</div>';
    html += '<div class="path-card-desc">You\'re collaborating with AI, not just pressing a generate button. The better you communicate, the better the results.</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:left;">';
    html += '<div class="path-card-name">You Don\'t Need to Understand the Code</div>';
    html += '<div class="path-card-desc">The AI handles the technical implementation. You focus on what you want it to do, look like, and feel like.</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:left;">';
    html += '<div class="path-card-name">It\'s Not Magic</div>';
    html += '<div class="path-card-desc">Good results come from clear communication and iteration — just like working with a human developer.</div>';
    html += '</div>';
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
    html += '<p class="path-picker-subtitle">Software development is dead. Long live software development.</p>';
    html += '</div>';

    html += '<p style="font-size:1.05em; line-height:1.7; color:var(--text-color); margin-bottom:32px;">';
    html += 'Traditional software development — hiring developers, learning to code, waiting months for results — is being replaced. ';
    html += 'In 2025, Anthropic CEO Dario Amodei predicted AI would write 90% of all code within a year. ';
    html += 'But building software isn\'t going away. It\'s becoming something <strong>anyone</strong> can do. ';
    html += 'The tools have changed. The gatekeepers are gone. What remains is the most important part: <strong>your ideas</strong>.';
    html += '</p>';

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
    html += '<div class="path-card-desc">Automate workflows, build internal tools, create data visualizations — capabilities you couldn\'t access before</div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:left; padding:28px 32px; margin-bottom:32px; border:1px solid var(--border-color);">';
    html += '<div class="path-card-name" style="font-size:1.2em; margin-bottom:12px;">The Most Important Professional Skill</div>';
    html += '<div class="path-card-desc" style="font-size:1em; line-height:1.7;">';
    html += 'The advantage won\'t go to AI itself — it\'ll go to the <strong>people who learn to use it</strong>. ';
    html += 'Vibe coding is how you stay ahead.';
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
    html += '<p class="path-picker-subtitle">Anyone who\'s curious and wants to build digital creations. Your existing skills are your superpower.</p>';
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
    html += '<div class="path-card-icon">🚀</div>';
    html += '<div class="path-card-name">Entrepreneurs & Founders</div>';
    html += '<div class="path-card-desc">Validate ideas and build MVPs without hiring a dev team</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">📚</div>';
    html += '<div class="path-card-name">Teachers & Educators</div>';
    html += '<div class="path-card-desc">Create custom tools and resources for your classroom</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🔬</div>';
    html += '<div class="path-card-name">Researchers & Academics</div>';
    html += '<div class="path-card-desc">Build data tools, automate analysis, and visualize findings</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🤝</div>';
    html += '<div class="path-card-name">Nonprofit & Community</div>';
    html += '<div class="path-card-desc">Build what you need without the budget for custom development</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🎵</div>';
    html += '<div class="path-card-name">Musicians & Performers</div>';
    html += '<div class="path-card-desc">Build setlist tools, booking sites, and fan experiences</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">⚖️</div>';
    html += '<div class="path-card-name">Lawyers & Legal</div>';
    html += '<div class="path-card-desc">Automate document workflows and build client intake tools</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">💼</div>';
    html += '<div class="path-card-name">Freelancers & Consultants</div>';
    html += '<div class="path-card-desc">Build invoicing, proposals, and client-facing tools</div>';
    html += '</div>';
    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-icon">🎓</div>';
    html += '<div class="path-card-name">Students</div>';
    html += '<div class="path-card-desc">Build projects, study tools, and portfolio sites</div>';
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
    html += '<p class="path-picker-subtitle">Real projects built with vibe coding — from quick experiments to full applications</p>';
    html += '</div>';

    // Workshop Projects
    html += '<h2 style="font-size:1.3em; font-weight:700; margin-bottom:12px; border-bottom:1px solid var(--header-border); padding-bottom:0.3em;">Workshop Projects</h2>';
    html += '<div class="path-picker-grid" style="margin-bottom:24px;">';
    WORKSHOP_PROJECTS.forEach(p => {
        html += '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer" class="path-card" style="text-decoration:none; cursor:pointer;">';
        html += '<div class="path-card-name">' + p.name + '</div>';
        html += '<div class="path-card-tools">' + p.author + ' — ' + p.type + '</div>';
        html += '<div class="path-card-desc">' + p.desc + '</div>';
        html += '</a>';
    });
    html += '</div>';

    html += '<h2 style="font-size:1.3em; font-weight:700; margin-bottom:12px; border-bottom:1px solid var(--header-border); padding-bottom:0.3em;">Instructor Projects</h2>';
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
    html += '<a href="#beyond-coding" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'beyond-coding\');">Beyond Vibe Coding →</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
    addCardKeyboardSupport();
}

// ── Enhance with Data & APIs ──────────────────────────────
function renderDataApis() {
    var html = '<div class="path-picker">';
    html += '<h1>Enhance with Data & APIs</h1>';
    html += '<p class="path-picker-subtitle">Your project doesn\'t have to live in a vacuum. Connect it to real-world data and services to make it useful, dynamic, and unique.</p>';
    html += '</div>';

    // API discovery resources
    html += '<div class="path-card" style="cursor:default; text-align:left; padding:28px 32px; margin-bottom:28px; border:1px solid var(--border-color);">';
    html += '<div class="path-card-name" style="font-size:1.15em; margin-bottom:10px;">Finding APIs</div>';
    html += '<div class="path-card-desc" style="font-size:1em; line-height:1.7;">';
    html += 'Not sure where to start? These directories catalog thousands of free and open APIs:';
    html += '</div>';
    html += '<ul style="padding-left:1.5em; margin:12px 0 0; line-height:2;">';
    html += '<li><a href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener noreferrer">Public APIs</a> — massive curated list of free APIs across every category</li>';
    html += '<li><a href="https://rapidapi.com/hub" target="_blank" rel="noopener noreferrer">RapidAPI Hub</a> — API marketplace with testing tools built in</li>';
    html += '<li><a href="https://any-api.com" target="_blank" rel="noopener noreferrer">Any API</a> — searchable directory with documentation links</li>';
    html += '</ul>';
    html += '</div>';

    // Category cards
    html += '<h2 style="font-size:1.3em; font-weight:700; text-align:center; margin-bottom:6px; border:none; padding:0;">API Categories</h2>';
    html += '<p style="color:var(--text-muted); text-align:center; margin-bottom:20px;">There are many types of APIs across different categories — here are some of the most common.</p>';
    html += '<div class="path-picker-grid" style="margin-bottom:28px;">';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Public & Government Data</div>';
    html += '<div class="path-card-desc">Many cities and countries publish open data portals — transit schedules, 311 complaints, permits, demographics, and more</div>';

    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Weather</div>';
    html += '<div class="path-card-desc">Current conditions, forecasts, historical data, and severe weather alerts for any location</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Maps & Location</div>';
    html += '<div class="path-card-desc">Interactive maps, geocoding, directions, and location search</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Images & Media</div>';
    html += '<div class="path-card-desc">Stock photos, GIFs, webcam streams, and image search to make your project visual</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Music & Audio</div>';
    html += '<div class="path-card-desc">Track metadata, artist info, album art, playlists, and audio analysis</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Finance & Stocks</div>';
    html += '<div class="path-card-desc">Stock prices, crypto rates, currency exchange, and market data for dashboards</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Sports</div>';
    html += '<div class="path-card-desc">Live scores, team stats, schedules, and historical records across major leagues</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">News</div>';
    html += '<div class="path-card-desc">Headlines, article search, and topic-based feeds from sources around the world</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">Entertainment</div>';
    html += '<div class="path-card-desc">Movie databases, TV show info, book catalogs, and game data</div>';
    html += '</div>';

    html += '<div class="path-card" style="cursor:default; text-align:center;">';
    html += '<div class="path-card-name">AI APIs</div>';
    html += '<div class="path-card-desc">Image generation, text analysis, translation, and speech-to-text you can build into your project</div>';
    html += '</div>';

    html += '</div>';

    html += _tip('You don\'t need to understand how APIs work to use them. Describe what data you want to your AI agent and it will handle the integration for you.');

    // CTA
    html += '<div style="text-align:center; padding:24px 0;">';
    html += '<a href="#prompting-guide" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'prompting-guide\');">Prompting & AI Mastery &rarr;</a>';
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

function renderPromptingGuide(step) {
    step = step || 0;
    updateStepHash('prompting-guide', step);
    renderStepGuide(PROMPTING_GUIDE, function (s) { return 'renderPromptingGuide(' + s + ')'; }, step);
}

function renderProductGuide(step) {
    step = step || 0;
    updateStepHash('product-guidance', step);
    renderStepGuide(PRODUCT_GUIDE, function (s) { return 'renderProductGuide(' + s + ')'; }, step);
}

function renderCustomDomainsGuide(step) {
    step = step || 0;
    updateStepHash('custom-domains', step);
    renderStepGuide(CUSTOM_DOMAINS_GUIDE, function (s) { return 'renderCustomDomainsGuide(' + s + ')'; }, step);
}

function renderHostingPlatformsGuide(step) {
    step = step || 0;
    updateStepHash('hosting-platforms', step);
    renderStepGuide(HOSTING_PLATFORMS_GUIDE, function (s) { return 'renderHostingPlatformsGuide(' + s + ')'; }, step);
}

function renderTechStackGuide(step) {
    step = step || 0;
    updateStepHash('tech-stack', step);
    renderStepGuide(TECH_STACK_GUIDE, function (s) { return 'renderTechStackGuide(' + s + ')'; }, step);
}

function renderGithubGuide(step) {
    step = step || 0;
    updateStepHash('github-guide', step);
    renderStepGuide(GITHUB_GUIDE, function (s) { return 'renderGithubGuide(' + s + ')'; }, step);
}

function renderSoloProjectGuide(step) {
    step = step || 0;
    updateStepHash('solo-project', step);
    renderStepGuide(SOLO_PROJECT_GUIDE, function (s) { return 'renderSoloProjectGuide(' + s + ')'; }, step);
}

function renderCleanupGuide(step) {
    step = step || 0;
    updateStepHash('cleanup-guide', step);
    renderStepGuide(CLEANUP_GUIDE, function (s) { return 'renderCleanupGuide(' + s + ')'; }, step);
}

function renderAdvancedTechniquesGuide(step) {
    step = step || 0;
    updateStepHash('advanced-techniques', step);
    renderStepGuide(ADVANCED_TECHNIQUES_GUIDE, function (s) { return 'renderAdvancedTechniquesGuide(' + s + ')'; }, step);
}

function renderBeyondCoding() {
    var html = '<div class="path-picker">';
    html += '<h1>Beyond Vibe Coding</h1>';
    html += '<p class="path-picker-subtitle">AI agents can help with way more than just building apps — here are some things you might not have thought of.</p>';
    html += '</div>';

    html += '<div class="path-picker-grid" style="margin-bottom:24px;">';
    BEYOND_CODING_CATEGORIES.forEach(function (cat) {
        html += '<div class="path-card" style="cursor:default; text-align:center;">';
        html += '<div class="path-card-icon">' + cat.icon + '</div>';
        html += '<div class="path-card-name">' + cat.name + '</div>';
        html += '<div class="path-card-desc">' + cat.desc + '</div>';
        html += '</div>';
    });
    html += '</div>';

    html += _tip('If you can describe what you need, an AI agent can probably help — whether it\'s on your computer or in the cloud.');

    html += '<div style="text-align:center; padding:24px 0;">';
    html += '<a href="#feedback" class="step-link-btn" style="font-size:1.05em; padding:10px 28px;" onclick="event.preventDefault(); loadRoute(\'feedback\');">Leave Feedback \u2192</a>';
    html += '</div>';

    contentDiv.innerHTML = html;
    addCardKeyboardSupport();
}

// Update URL hash with step number without triggering hashchange
function updateStepHash(route, step) {
    var hash = step > 0 ? route + '/' + step : route;
    if (decodeURIComponent(window.location.hash.slice(1)) !== hash) {
        history.replaceState(null, '', '#' + encodeURIComponent(hash));
    }
    if (typeof updateSidebarDocsActive === 'function') updateSidebarDocsActive();
}

