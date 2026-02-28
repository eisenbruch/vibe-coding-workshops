// ── Configuration Data ──────────────────────────────────────────
// Pure data structures and helper utilities used across the app.

const FONT_SIZES = ['font-small', 'font-default', 'font-large', 'font-xlarge', 'font-xxlarge'];
const FONT_LABELS = { 'font-small': 'S', 'font-default': 'M', 'font-large': 'L', 'font-xlarge': 'XL', 'font-xxlarge': 'XXL' };

const FILE_GROUPS = [
    {
        label: "Start Here",
        files: [
            { name: "Welcome", path: "welcome" },
            { name: "What is Vibe Coding?", path: "what-is-vibe-coding" },
            { name: "Why Vibe Coding?", path: "why-vibe-coding" },
            { name: "Who Is It For?", path: "who-is-vibe-coding-for" },
            { name: "What You'll Learn", path: "what-youll-learn" },
            { name: "Example Projects", path: "example-projects" },
        ]
    },
    {
        label: "Tool Setup (Pick Your Level)",
        files: [
            { name: "Pick Your Path", path: "pick-your-path" },
            { name: "Beginner: Quick Start", path: "setup-beginner" },
            { name: "Beginner: Google AI Studio", path: "setup-google-ai-studio" },
            { name: "Intermediate: Claude Desktop", path: "setup-claude-desktop" },
            { name: "Intermediate: Antigravity + Gemini", path: "setup-antigravity" },
            { name: "Advanced: Antigravity + Claude", path: "setup-antigravity-claude" },
            { name: "Advanced: Antigravity + Gemini", path: "setup-antigravity-gemini" },
            { name: "Advanced: VS Code + Claude", path: "setup-claude-code" },
            { name: "Advanced: VS Code + Gemini", path: "setup-gemini-cli" },
        ]
    },
    {
        label: "Build Together",
        files: [
            { name: "Group Project", path: "group-project" },
        ]
    },
    {
        label: "Level Up",
        files: [
            { name: "Vibe Coding Techniques", path: "Vibe Coding Techniques.md" },
            { name: "Solo Project Guide", path: "Solo Project Guide.md" },
        ]
    },
    {
        label: "Deployment & Beyond",
        files: [
            { name: "Firebase & Deployment", path: "Firebase & Deployment.md" },
            { name: "Vercel & Supabase", path: "Vercel & Supabase.md" },
            { name: "Custom Domains", path: "Custom Domains.md" },
        ]
    },
    {
        label: "Reference",
        files: [
            { name: "Git for Beginners", path: "Git for Beginners.md" },
            { name: "Claude Code Quick Reference", path: "Claude Code Quick Reference.md" },
            { name: "Advanced Techniques", path: "Advanced Techniques.md" },
            { name: "Project Idea Prompts", path: "Project Idea Prompts - Extended.md" },
            { name: "AI Tools Directory", path: "AI Tools Directory.md" },
            { name: "Backend & Hosting Platforms", path: "Backend & Hosting Platforms.md" },
            { name: "Workshop Projects", path: "Workshop Projects.md" },
        ]
    },
    {
        label: "DomainFlip Build Docs",
        files: [
            { name: "DomainFlip Summary", path: "docs/domainflip/domainflip_summary.md" },
            { name: "Part 1 - Setup & Architecture", path: "docs/domainflip/BUILD_GUIDE_PART1.md" },
            { name: "Part 2 - UI Components", path: "docs/domainflip/BUILD_GUIDE_PART2.md" },
            { name: "Part 3 - Layout & Utilities", path: "docs/domainflip/BUILD_GUIDE_PART3.md" },
            { name: "Part 4 - Mock Data: Domains", path: "docs/domainflip/BUILD_GUIDE_PART4.md" },
            { name: "Part 5 - Mock Data: Users & More", path: "docs/domainflip/BUILD_GUIDE_PART5.md" },
            { name: "Part 5B", path: "docs/domainflip/BUILD_GUIDE_PART5B.md" },
            { name: "Part 5C", path: "docs/domainflip/BUILD_GUIDE_PART5C.md" },
            { name: "Part 6 - Final Assembly", path: "docs/domainflip/BUILD_GUIDE_PART6.md" },
        ]
    }
];

const PATH_OPTIONS = [
    {
        level: "Beginner",
        paths: [
            {
                name: "Quick Start",
                icon: '<img src="images/icons/browser.svg" alt="Browser">',
                description: "Try basic vibe coding in your browser with zero setup. Great as a reference or quick demo.",
                tools: "Claude or Gemini in the browser",
                time: "~1 min",
                cost: "free",
                file: "setup-beginner"
            },
            {
                name: "Google AI Studio",
                icon: '<img src="images/icons/gemini.svg" alt="Gemini">',
                description: "Browser-based AI workspace powered by Gemini. No installs required, but can create more complex multi-file experiences.",
                tools: "Browser only",
                time: "~5 min",
                cost: "free",
                file: "setup-google-ai-studio"
            }
        ]
    },
    {
        level: "Intermediate",
        paths: [
            {
                name: "Claude Desktop",
                icon: '<img src="images/icons/claude.svg" alt="Claude">',
                description: "All-in-one AI assistant with Code mode. Visual interface, no IDE needed.",
                tools: "Claude Desktop app",
                time: "~5 min",
                cost: "paid",
                file: "setup-claude-desktop",
                recommended: true
            },
            {
                name: "Antigravity + Gemini",
                icon: '<img src="images/icons/antigravity.png" alt="Antigravity">',
                description: "Free AI-powered IDE by Google with a built-in agent manager. Works like Claude Desktop.",
                tools: "Antigravity IDE",
                time: "~10 min",
                cost: "free",
                file: "setup-antigravity"
            }
        ]
    },
    {
        level: "Advanced",
        paths: [
            {
                name: "Antigravity + Claude",
                icon: '<div style="display:flex; align-items:center; gap:8px;"><img src="images/icons/antigravity.png" alt="Antigravity"><span style="font-size:24px; font-weight:700; color:var(--text-muted);">+</span><img src="images/icons/claude.svg" alt="Claude"></div>',
                description: "Claude AI coding agent in Antigravity. Combines Google's IDE with Claude's capabilities.",
                tools: "Antigravity + Claude extension or CLI",
                time: "~15 min",
                cost: "paid",
                file: "setup-antigravity-claude"
            },
            {
                name: "Antigravity + Gemini",
                icon: '<div style="display:flex; align-items:center; gap:8px;"><img src="images/icons/antigravity.png" alt="Antigravity"><span style="font-size:24px; font-weight:700; color:var(--text-muted);">+</span><img src="images/icons/gemini.svg" alt="Gemini"></div>',
                description: "Free Gemini AI coding agent in Antigravity. Combines Google's IDE with Gemini.",
                tools: "Antigravity + Gemini CLI",
                time: "~15 min",
                cost: "free",
                file: "setup-antigravity-gemini"
            },
            {
                name: "VS Code + Claude",
                icon: '<div style="display:flex; align-items:center; gap:8px;"><img src="images/icons/vscode.svg" alt="VS Code"><span style="font-size:24px; font-weight:700; color:var(--text-muted);">+</span><img src="images/icons/claude.svg" alt="Claude"></div>',
                description: "AI coding agent in VS Code. Powerful, flexible, and standard.",
                tools: "VS Code + Claude extension or CLI",
                time: "~15 min",
                cost: "paid",
                file: "setup-claude-code"
            },
            {
                name: "VS Code + Gemini",
                icon: '<div style="display:flex; align-items:center; gap:8px;"><img src="images/icons/vscode.svg" alt="VS Code"><span style="font-size:24px; font-weight:700; color:var(--text-muted);">+</span><img src="images/icons/gemini.svg" alt="Gemini"></div>',
                description: "Free AI coding agent in VS Code. Powerful, flexible, and standard.",
                tools: "VS Code + Gemini CLI",
                time: "~15 min",
                cost: "free",
                file: "setup-gemini-cli"
            }
        ]
    }
];

