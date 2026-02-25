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
            { name: "What You'll Learn", path: "what-youll-learn" },
            { name: "Example Projects", path: "example-projects" },
            { name: "Pick Your Path", path: "pick-your-path" },
        ]
    },
    {
        label: "Tool Setup (Pick Your Level)",
        files: [
            { name: "Beginner Quick Start", path: "setup-beginner" },
            { name: "Intermediate: Claude Desktop", path: "setup-claude-desktop" },
            { name: "Intermediate: Google AI Studio", path: "setup-google-ai-studio" },
            { name: "Advanced: Claude Code", path: "setup-claude-code" },
            { name: "Advanced: Gemini CLI", path: "setup-gemini-cli" },
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
                icon: "\u{1F310}",
                description: "Try vibe coding in your browser with zero setup. Great as a reference or quick demo.",
                tools: "Browser only",
                time: "~1 min",
                cost: "free",
                file: "setup-beginner"
            }
        ]
    },
    {
        level: "Intermediate",
        paths: [
            {
                name: "Claude Desktop",
                icon: "\u{1F4AC}",
                description: "All-in-one AI assistant with Chat and Cowork modes. Visual interface, no IDE needed.",
                tools: "Claude Desktop app",
                time: "~5 min",
                cost: "paid",
                file: "setup-claude-desktop",
                recommended: true
            },
            {
                name: "Google AI Studio",
                icon: "\u2728",
                description: "Browser-based AI workspace powered by Gemini. No installs required.",
                tools: "Browser only",
                time: "~5 min",
                cost: "free",
                file: "setup-google-ai-studio"
            }
        ]
    },
    {
        level: "Advanced",
        paths: [
            {
                name: "Claude Code",
                icon: "\u{1F4BB}",
                description: "AI coding agent in VS Code and the terminal. Full project control.",
                tools: "VS Code + terminal",
                time: "~15 min",
                cost: "paid",
                file: "setup-claude-code"
            },
            {
                name: "Gemini CLI",
                icon: "\u26A1",
                description: "Free AI coding agent in VS Code and the terminal. Powered by Gemini.",
                tools: "VS Code + terminal",
                time: "~15 min",
                cost: "free",
                file: "setup-gemini-cli"
            }
        ]
    }
];

