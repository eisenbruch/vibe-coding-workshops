# Hosting & Backend Platforms
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This guide compares the most popular hosting and backend platforms for web projects: **GitHub Pages**, **Firebase**, **Vercel + Supabase**, **Netlify**, **Cloudflare Pages**, and **Turso**. Each has strengths — the right choice depends on what you're building.

> **Short answer:** If you just want to pick one and go:
> - **GitHub Pages** if you have a static site on GitHub and want it online in 2 minutes
> - **Firebase** if you want everything in one place (database, auth, hosting, storage, functions)
> - **Vercel + Supabase** if you want a SQL database and modern React/Next.js deployment
> - **Cloudflare Pages** if you're building a static site and want unlimited free bandwidth
> - **Turso** if you just need a database — lightweight SQL with a generous free tier
>
> All of these have generous free tiers. You won't pay anything for small projects.

---

## Quick Comparison

| | **GitHub Pages** | **Firebase** | **Vercel + Supabase** | **Netlify** | **Cloudflare Pages** |
|---|---|---|---|---|---|
| **What it is** | Free static site hosting from GitHub | All-in-one backend + hosting | Frontend hosting (Vercel) + SQL database & auth (Supabase) | Frontend hosting + serverless functions | Edge hosting + optional storage/database |
| **Database** | None | Firestore (NoSQL) | PostgreSQL (SQL) | None built-in | D1 (SQLite) |
| **Auth** | None | Built-in (email, Google, phone, etc.) | Built-in (email, Google, GitHub, etc.) | None built-in | None built-in |
| **File storage** | None | Firebase Storage | Supabase Storage | None built-in | R2 (S3-compatible) |
| **Serverless functions** | None (GitHub Actions only) | Cloud Functions | Vercel Serverless + Supabase Edge Functions | Netlify Functions | Cloudflare Workers |
| **Best for** | Portfolios, docs, static sites already on GitHub | Mobile apps, real-time apps, rapid prototyping | Full-stack web apps, SQL-based projects | Static sites, Jamstack, blogs | Static sites, cost-sensitive projects |
| **Learning curve** | Very low | Low | Low-medium | Low | Medium-high |

---

## Free Tier Comparison

This is what you get without paying anything.

| Resource | **GitHub Pages** | **Firebase** (Spark) | **Supabase** (Free) | **Vercel** (Hobby) | **Netlify** (Free) | **Cloudflare** (Free) |
|---|---|---|---|---|---|---|
| **Hosting bandwidth** | 100 GB/mo | 10 GB/mo | — | 100 GB/mo | 100 GB/mo | **Unlimited** |
| **Database storage** | None | 1 GB (Firestore) | 500 MB (PostgreSQL) | None | None | 5 GB (D1/SQLite) |
| **File storage** | None | 1 GB | 1 GB | 1 GB | — | 10 GB (R2) |
| **Auth users** | — | 50K/mo | 50K/mo | — | — | — |
| **Serverless invocations** | — | 2M/mo | 500K/mo (edge) | 1M/mo | 125K/mo* | 100K/day (~3M/mo) |
| **Commercial use** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ **No** (Hobby plan) | ✅ Yes | ✅ Yes |
| **Projects auto-pause** | No | No | **Yes (7 days inactive)** | No | No | No |

\* *Netlify's free tier numbers reflect legacy plans. New accounts (after Sept 2025) use a credit-based system — limits may differ.*

> **Key gotchas highlighted:**
> - **Vercel Hobby** prohibits commercial use — any project that earns revenue violates their terms. You need Pro ($20/mo) for that.
> - **Supabase free projects pause** after 7 days of inactivity. Your database goes to sleep and takes ~60 seconds to wake up on the next request. Portfolio projects or demos that aren't visited regularly will be affected.
> - **Firebase Cloud Functions** require the Blaze (pay-as-you-go) plan. The Spark free plan doesn't include them.

---

## Platform Deep Dives

### GitHub Pages

GitHub Pages is the simplest way to host a static website — for free, directly from a GitHub repository. No backend, no database, no serverless functions — just your files served to the web.

**Strengths:**
- ✅ **Easiest setup** — flip a switch in repo settings and your site is live
- ✅ Free hosting with 100 GB bandwidth, custom domains, and SSL
- ✅ Automatic deploys on every push to GitHub
- ✅ No account needed beyond GitHub — which you already have for your code
- ✅ Perfect for portfolios, documentation, and browser-based projects

**Weaknesses:**
- ❌ **Static only** — no server-side code, no database, no API routes
- ❌ 1 GB site size limit
- ❌ No serverless functions (must use GitHub Actions for build steps only)
- ❌ No preview deployments for branches (unlike Vercel/Cloudflare)
- ❌ Base path issues with framework projects (`/repo-name/` prefix)

**Choose GitHub Pages when:**
- Your project is a static site with no backend needs
- You want the fastest path from code to live URL
- You're already on GitHub and don't want to set up another platform

> **Guide:** [GitHub Pages](GitHub%20Pages.md)

---

### Firebase (Google)

Firebase is an all-in-one backend platform from Google. You get a database, authentication, file storage, hosting, and serverless functions in a single dashboard.

**Strengths:**
- ✅ Everything in one place — one SDK, one console, one bill
- ✅ Real-time data sync out of the box (data updates across all connected clients instantly)
- ✅ Excellent for mobile apps (push notifications, offline support)
- ✅ Massive community — most AI tools generate Firebase code well
- ✅ Blaze plan has no base fee; you keep the free quotas and only pay for overages

**Weaknesses:**
- ❌ **Vendor lock-in** — Firestore's NoSQL model and proprietary API make it hard to migrate away
- ❌ NoSQL means no SQL joins, no relations — you have to structure data differently than you'd expect
- ❌ Pricing is per-document-read, which can produce surprise bills on read-heavy apps
- ❌ Limited querying compared to SQL databases
- ❌ Cloud Functions require Blaze plan

**Pricing model:** Free Spark plan for small projects. Blaze plan (pay-as-you-go) retains all free quotas — you only pay for what exceeds them. No monthly base fee. Typical costs for small-medium apps: $0-5/month.

**Choose Firebase when:**
- You want to get a full-stack app running as fast as possible
- Your app needs real-time updates (chat, collaborative tools, live dashboards)
- You're building a mobile app
- You don't need complex data queries or relationships

> **Guide:** [Firebase & Deployment](Firebase.md)

---

### Supabase

Supabase is an open-source Firebase alternative built on **PostgreSQL** — the industry-standard SQL database. It provides a database, authentication, file storage, edge functions, and real-time subscriptions.

**Strengths:**
- ✅ **PostgreSQL** — standard SQL, portable, no vendor lock-in on your data model
- ✅ Full relational database with joins, foreign keys, views, and complex queries
- ✅ Open source — can self-host if needed
- ✅ Row Level Security (RLS) for fine-grained access control
- ✅ Built-in dashboard with SQL editor — great for learning
- ✅ Strong community momentum; widely recommended in 2025-2026

**Weaknesses:**
- ❌ **Free projects auto-pause after 7 days of inactivity** — biggest gotcha for beginners
- ❌ Only 2 free projects
- ❌ 500 MB database limit on free plan (fills up faster than you'd think with logs/metadata)
- ❌ No built-in hosting — you need to pair it with Vercel, Netlify, or Cloudflare Pages
- ❌ Newer platform = fewer tutorials than Firebase (though growing fast)

**Pricing model:** Free plan with limits above. Pro plan is $25/month per organization (8 GB database, 100K auth users, 100 GB storage).

**Choose Supabase when:**
- Your data has relationships (users have posts, posts have comments, orders have items)
- You want to learn SQL — the industry standard
- You want the option to migrate your data later without rewriting everything
- You're pairing it with Vercel or another frontend host

> **Guide:** [Vercel & Supabase](Vercel%20&%20Supabase.md)

---

### Vercel

Vercel is a frontend hosting platform that excels at deploying React, Next.js, and other JavaScript framework projects. It's not a full backend — you pair it with Supabase, Firebase, or another database provider.

**Strengths:**
- ✅ **Best deployment experience** — connect GitHub, push code, site updates automatically
- ✅ Preview URLs for every branch/PR (great for testing before going live)
- ✅ Created Next.js — best-in-class support for React and Next.js projects
- ✅ Global edge network with fast load times
- ✅ 100 GB free bandwidth, 1M serverless function invocations

**Weaknesses:**
- ❌ **Hobby plan prohibits commercial use** — you must upgrade to Pro ($20/mo) if your project earns money
- ❌ No built-in database or auth (must integrate external services)
- ❌ When you hit free tier limits, your site goes down (hard cap, no overage billing)
- ❌ Serverless functions limited to 60 seconds on Hobby plan

**Pricing model:** Hobby plan is free (non-commercial). Pro is $20/month per team member. Overages on Pro: $20/100 GB bandwidth, $4/100K function invocations.

**Choose Vercel when:**
- You're building with React, Next.js, Svelte, or Vue
- You want the simplest possible deployment flow (push to GitHub → site updates)
- You're combining it with Supabase or Firebase for the backend

> **Guide:** [Vercel & Supabase](Vercel%20&%20Supabase.md)

---

### Netlify

Netlify is similar to Vercel — a frontend hosting platform with serverless functions. It was the original leader in this space but has been losing ground to Vercel.

**Strengths:**
- ✅ Built-in form handling — collect form submissions without any backend code
- ✅ Deploy previews for every PR
- ✅ Framework-agnostic (works with anything)
- ✅ Split testing / A/B testing built in

**Weaknesses:**
- ❌ **Credit-based pricing** (introduced Sept 2025) is confusing and can pause all your projects if one exceeds limits
- ❌ No built-in database
- ❌ 300 build minutes on free plan is restrictive for active development
- ❌ Serverless functions have a 10-second timeout on free plan

**Pricing model:** Free credit-based plan. Pro is $19/month per member. When free credits run out, all projects on your account are paused until the next billing cycle.

**Choose Netlify when:**
- You need simple form handling without a backend
- You're building a static site or blog with a Jamstack framework (Hugo, Astro, 11ty)
- You're already using Netlify's ecosystem

---

### Cloudflare Pages

Cloudflare Pages provides static site hosting with **unlimited bandwidth** on the free plan — no other platform matches this. You can add Cloudflare Workers (serverless functions), R2 (file storage), and D1 (SQLite database) for a full backend.

**Strengths:**
- ✅ **Unlimited free bandwidth** — unmatched by any competitor
- ✅ R2 storage has **zero egress fees** (downloading your files is free, unlike AWS S3)
- ✅ Global edge network (300+ cities)
- ✅ Free SSL, DDoS protection, and CDN
- ✅ Workers Paid plan is only $5/month (10M requests, much more than most projects need)

**Weaknesses:**
- ❌ **Steepest learning curve** — Workers use a non-standard runtime (not full Node.js)
- ❌ D1 is SQLite, not PostgreSQL — less powerful for complex queries
- ❌ No built-in auth
- ❌ Fewer tutorials and less AI-generated code compared to Firebase/Supabase
- ❌ Pages deployment workflow is less polished than Vercel

**Pricing model:** Free plan with limits above. Workers Paid plan is $5/month — one of the cheapest paid tiers available.

**Choose Cloudflare Pages when:**
- You're building a static site (portfolio, docs, blog) that might get unpredictable traffic
- You want the cheapest possible hosting at scale
- You're already using Cloudflare for your domain (see [Custom Domains](Custom%20Domains.md))
- You need affordable file storage (R2) without egress fees

> **Guide:** [Cloudflare](Cloudflare.md)

---

### Turso

Turso is a managed database built on **libSQL** (an open-source fork of SQLite). It's not a hosting platform — it's a **database only**, designed to pair with any frontend host. Turso stands out for its generous free tier (9 GB storage, 500 databases) and edge replicas that put your data close to users.

**Strengths:**
- ✅ **9 GB free storage** — more than any competitor's free tier
- ✅ **500 free databases** — great for branching, multi-tenant apps, or experimentation
- ✅ Edge replicas for fast reads worldwide
- ✅ Database branching — create copies for safe testing, like Git branches for your data
- ✅ Low vendor lock-in (libSQL/SQLite is standard and portable)

**Weaknesses:**
- ❌ **Database only** — no auth, no file storage, no hosting (bring your own)
- ❌ SQLite-based — less powerful than PostgreSQL for complex queries and extensions
- ❌ Smaller ecosystem — fewer tutorials and AI-generated code than Firebase/Supabase
- ❌ CLI-focused workflow — web dashboard is basic compared to Supabase

**Pricing model:** Free plan with 9 GB storage, 500 databases, 1B row reads/month. Scaler plan is $29/month (24 GB storage, unlimited databases).

**Choose Turso when:**
- You just need a database and are handling auth/storage/hosting separately
- You want the most free storage available
- Your app is read-heavy and benefits from edge replicas
- You want database branching for safe development workflows

> **Guide:** [Turso Database](Turso.md)

---

## Common Combinations

You don't have to pick just one platform. Here are popular stacks:

| Stack | When to use it |
|---|---|
| **GitHub Pages only** | Static sites (portfolio, docs, browser games) with no backend needs. Simplest option. |
| **Firebase only** | Rapid prototyping, mobile apps, real-time apps. Everything in one place. |
| **Vercel + Supabase** | Full-stack web apps with React/Next.js. Best frontend hosting + SQL database. |
| **Supabase + Cloudflare Pages** | Same as above but with unlimited free bandwidth and lower costs at scale. |
| **Turso + Vercel** | Lightweight SQL database + React/Next.js hosting. Good when you don't need built-in auth. |
| **Turso + Cloudflare Pages** | Edge database + unlimited bandwidth hosting. Cheapest full-stack option at scale. |
| **Cloudflare Pages + Firebase** | Static frontend on Cloudflare, backend services from Firebase. |
| **Vercel + Firebase** | Next.js frontend on Vercel, Firebase for auth/database/storage. |

---

## Pricing at Scale

What happens when your project grows beyond the free tier?

| Monthly users | **GitHub Pages** | **Firebase** (Blaze) | **Supabase** (Pro) | **Vercel** (Pro) | **Cloudflare** (Workers Paid) | **Turso** (Scaler) |
|---|---|---|---|---|---|---|
| ~100 | Free | Free | Free | Free | Free | Free |
| ~1,000 | Free | Free–$2 | Free–$5 | Free | Free | Free |
| ~10,000 | Free | $5–15 | $25 | $20 | $5 | Free |
| ~100,000 | Free* | $30–100+ | $25–50 | $20–40 | $5–10 | $29 |

\*\* *GitHub Pages is always free but has a 100 GB/month bandwidth limit. High-traffic static sites should use Cloudflare Pages instead.*

*Estimates vary widely based on how your app uses resources. Read-heavy Firebase apps cost more. Storage-heavy apps cost more on Supabase. These are rough guides for typical workshop-style projects.*

> **Important:** Firebase pricing depends heavily on how many document reads your app does. A poorly optimized app can cost 10x more than a well-optimized one. If you're on Firebase and costs are growing, ask your AI: *"Review my Firestore usage and suggest ways to reduce document reads."*

---

## Decision Flowchart

**What are you building?**

- **Static site** (portfolio, blog, docs) → **GitHub Pages** (simplest) or **Cloudflare Pages** (unlimited bandwidth)
- **Frontend app + simple backend** (to-do list, dashboard) → **Firebase** or **Vercel + Supabase**
- **App with complex data relationships** (e-commerce, social network, CMS) → **Vercel + Supabase**
- **Real-time app** (chat, multiplayer game, live collaboration) → **Firebase**
- **Mobile app** → **Firebase**
- **Not sure yet** → **Firebase** (easiest to start, widest documentation)

**How important is cost?**

- **Free is essential** → GitHub Pages (static) or Firebase (Spark) or Cloudflare Pages
- **$5/mo budget** → Cloudflare Workers Paid
- **$20-25/mo budget** → Vercel Pro or Supabase Pro

**Which database?**

- **No database needed** (static site) → GitHub Pages or Cloudflare Pages
- **Simple structured data, low cost** → Turso (libSQL) or Cloudflare D1 (SQLite)
- **Relational data, full-featured SQL** → Supabase (PostgreSQL)
- **Real-time sync, no SQL** → Firebase (Firestore)

**Do you care about vendor lock-in?**

- **Yes, I want portable data** → Vercel or Cloudflare + Supabase (PostgreSQL)
- **No, I want the fastest setup** → Firebase

---

## Summary

| Platform | One-line summary |
|---|---|
| **GitHub Pages** | Free static hosting from GitHub. Simplest setup — no backend, no frills. |
| **Firebase** | All-in-one backend. Fast to start, hard to leave. Best for real-time and mobile. |
| **Supabase** | PostgreSQL backend. Portable, SQL-based, open source. Best for relational data. |
| **Vercel** | Frontend hosting. Best deployment experience for React/Next.js. Pair with a backend. |
| **Netlify** | Frontend hosting with forms. Solid but losing ground to Vercel. |
| **Cloudflare Pages** | Static hosting with unlimited bandwidth. Cheapest at scale. Steeper learning curve. |
| **Turso** | Lightweight SQL database (libSQL). Generous free tier. Pair with any host. |
