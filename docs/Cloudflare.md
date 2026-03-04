# Cloudflare
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

Cloudflare offers two levels of hosting: **Cloudflare Pages** for simple static sites (the easiest option), and a **full developer platform** with serverless functions, databases, and storage for more complex apps. Both run on Cloudflare's global edge network (300+ cities).

> **Short version:**
> - **Static site?** → Cloudflare Pages. Free, unlimited bandwidth, deploy from GitHub.
> - **Need a backend?** → Add Workers (serverless functions), D1 (database), and R2 (file storage) for a full-stack app at very low cost.

See [Hosting & Backend Platforms](Hosting%20&%20Backend%20Platforms.md) if you're still deciding between platforms.

---

# Part 1: Cloudflare Pages (Static Hosting)

This is what most workshop projects need — put your static site online with unlimited free bandwidth.

## What You Get (Free)

| Feature | Details |
|---|---|
| **Bandwidth** | **Unlimited** (no other free host matches this) |
| **Sites** | Unlimited projects |
| **Builds** | 500 builds/month |
| **Custom domains** | Yes (free SSL, auto-renewing) |
| **Preview deployments** | Yes — every branch/PR gets its own URL |
| **DDoS protection** | Built-in (Cloudflare's core business) |
| **Commercial use** | Yes |

---

## 1. The Vibe Coding Approach

> "I want to deploy my static website to Cloudflare Pages. Help me connect my GitHub repo and get it live."

---

## 2. Deploying a Static Site

### Step 1: Create a Cloudflare Account

Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) (free).

### Step 2: Create a Pages Project

1. In the Cloudflare dashboard, go to **Workers & Pages**.
2. Click **Create** > **Pages** > **Connect to Git**.
3. Authorize Cloudflare to access your GitHub account.
4. Select your repository.

### Step 3: Configure Build Settings

Cloudflare auto-detects most frameworks. If not:

| Project type | Build command | Output directory |
|---|---|---|
| **Static HTML** (no build) | *(leave empty)* | `/` or `.` |
| **Vite / React (Vite)** | `npm run build` | `dist` |
| **Create React App** | `npm run build` | `build` |
| **Next.js (static)** | `npx next build` | `out` |
| **Astro** | `npm run build` | `dist` |
| **Hugo** | `hugo` | `public` |

### Step 4: Deploy

Click **Save and Deploy**. Your site will be live at:

```
https://YOUR-PROJECT.pages.dev
```

Every push to your main branch triggers a new deployment. Branch pushes create preview URLs.

---

## 3. Custom Domains

1. In your Pages project, go to **Custom domains**.
2. Add your domain.
3. If your domain is already on Cloudflare, DNS is configured automatically.
4. If not, Cloudflare will tell you what DNS records to add.

See [Custom Domains](Custom%20Domains.md) for registrar setup details.

---

## 4. Troubleshooting (Pages)

| Problem | Fix |
|---|---|
| Build fails | Check the build logs in the Cloudflare dashboard. Common: wrong build command or output directory. |
| Site loads but looks broken | Path issue — make sure asset paths are relative, not absolute. |
| 404 on page refresh (SPA) | Add a `_redirects` file in your output folder: `/* /index.html 200` |
| Old version still showing | Cloudflare caches aggressively. Wait a minute, then hard-refresh (`Cmd+Shift+R`). |

---

# Part 2: Full Cloudflare Stack

When your project needs more than static hosting — a database, serverless functions, or file storage — Cloudflare's developer platform provides all of these at the edge.

## Platform Overview

| Service | What it does | Free tier |
|---|---|---|
| **Pages** | Static site hosting | Unlimited bandwidth, 500 builds/month |
| **Workers** | Serverless functions (like AWS Lambda, but at the edge) | 100K requests/day (~3M/month) |
| **D1** | SQLite database at the edge | 5 GB storage, 5M rows read/day |
| **R2** | Object storage (like AWS S3, but no egress fees) | 10 GB storage, 1M reads/month |
| **KV** | Key-value storage (fast reads, eventual consistency) | 100K reads/day |

> **Workers Paid plan** is only **$5/month** and bumps everything up significantly (10M Worker requests, 25 GB D1, 10M R2 reads). One of the cheapest paid tiers of any platform.

---

## 5. Workers (Serverless Functions)

Workers run JavaScript/TypeScript at the edge — close to your users, not in a single data center. They're Cloudflare's equivalent of Vercel Serverless Functions or Firebase Cloud Functions.

### When to Use Workers

- Calling paid APIs without exposing keys
- Processing form submissions or webhooks
- Adding server-side logic to a Pages site
- Building an API backend

### Creating a Worker

**Option A: Attach to a Pages project (recommended for most apps)**

Create a `functions/` directory in your project. Each file becomes an API endpoint:

```
your-project/
├── functions/
│   └── api/
│       └── hello.js      → /api/hello
├── index.html
├── style.css
└── script.js
```

```javascript
// functions/api/hello.js
export async function onRequest(context) {
  return new Response(JSON.stringify({ message: "Hello from the edge" }), {
    headers: { "Content-Type": "application/json" }
  });
}
```

Deploy as normal with Pages — Workers are included automatically.

**Option B: Standalone Worker (API-only projects)**

```bash
npm create cloudflare@latest my-worker
cd my-worker
npx wrangler dev    # Local development
npx wrangler deploy # Deploy to production
```

### Workers vs. Node.js

Workers use a **Web Standards runtime**, not Node.js. Most JavaScript works fine, but some Node.js APIs (`fs`, `path`, `child_process`) aren't available. The `fetch` API, Web Crypto, and standard JavaScript all work normally.

> **Ask Your AI:** *"Convert this Node.js function to run as a Cloudflare Worker."* It will handle the runtime differences.

---

## 6. D1 (SQLite Database)

D1 is a serverless SQLite database. It's simpler than PostgreSQL (Supabase) but handles most use cases well, and it's very cheap.

### When to Use D1

- User data, settings, content
- Any structured data your app needs to store
- Projects where you want a SQL database without managing a server

### Setting Up D1

1. Create a database:
   ```bash
   npx wrangler d1 create my-database
   ```
   This outputs a database ID — add it to your `wrangler.toml`:
   ```toml
   [[d1_databases]]
   binding = "DB"
   database_name = "my-database"
   database_id = "your-database-id"
   ```

2. Create tables with a migration:
   ```bash
   npx wrangler d1 execute my-database --command "CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)"
   ```

3. Query from a Worker:
   ```javascript
   export async function onRequest(context) {
     const { results } = await context.env.DB
       .prepare("SELECT * FROM users WHERE id = ?")
       .bind(1)
       .all();

     return Response.json(results);
   }
   ```

### D1 vs. Other Databases

| | **D1 (Cloudflare)** | **Firestore (Firebase)** | **PostgreSQL (Supabase)** |
|---|---|---|---|
| **Type** | SQLite (SQL) | NoSQL (documents) | PostgreSQL (SQL) |
| **Best for** | Simple-medium apps, low cost | Real-time apps, mobile | Complex data, relational apps |
| **Free storage** | 5 GB | 1 GB | 500 MB |
| **Auth** | None (use a library) | Built-in | Built-in |
| **Learning curve** | Low (standard SQL) | Low | Low-medium |
| **Vendor lock-in** | Low (SQLite is standard) | High | Low |

> **Want more SQL power?** See [Turso](Turso.md) — a managed libSQL/SQLite platform with more features, replicas, and built-in branching.

---

## 7. R2 (Object Storage)

R2 stores files (images, videos, PDFs, backups) with **zero egress fees** — downloading files is free, unlike AWS S3 or Google Cloud Storage.

### When to Use R2

- User-uploaded files (profile photos, attachments)
- Hosting images or media for your app
- Any file storage where you don't want surprise bandwidth bills

### Setting Up R2

1. Create a bucket:
   ```bash
   npx wrangler r2 bucket create my-files
   ```

2. Add to `wrangler.toml`:
   ```toml
   [[r2_buckets]]
   binding = "FILES"
   bucket_name = "my-files"
   ```

3. Use from a Worker:
   ```javascript
   // Upload
   export async function onRequestPut(context) {
     const file = await context.request.arrayBuffer();
     await context.env.FILES.put("uploads/photo.jpg", file);
     return new Response("Uploaded");
   }

   // Download
   export async function onRequestGet(context) {
     const object = await context.env.FILES.get("uploads/photo.jpg");
     return new Response(object.body, {
       headers: { "Content-Type": "image/jpeg" }
     });
   }
   ```

---

## 8. Putting It All Together

A typical full-stack Cloudflare project structure:

```
my-app/
├── functions/          ← Workers (API routes)
│   └── api/
│       ├── users.js    → /api/users (reads from D1)
│       └── upload.js   → /api/upload (stores in R2)
├── migrations/         ← D1 database migrations
│   └── 0001_init.sql
├── wrangler.toml       ← Cloudflare config (D1, R2 bindings)
├── index.html          ← Frontend (served by Pages)
├── style.css
└── script.js
```

### Wrangler CLI Reference

| Command | What it does |
|---|---|
| `npx wrangler dev` | Start local development server |
| `npx wrangler deploy` | Deploy Worker to production |
| `npx wrangler d1 execute DB --local --command "..."` | Run SQL locally |
| `npx wrangler d1 execute DB --command "..."` | Run SQL on production |
| `npx wrangler r2 bucket list` | List R2 buckets |
| `npx wrangler tail` | Live stream Worker logs |

---

## 9. Environment Variables & Secrets

```bash
# Set a secret (never stored in code)
npx wrangler secret put API_KEY

# Access in your Worker
export async function onRequest(context) {
  const key = context.env.API_KEY;
  // ...
}
```

For local development, create a `.dev.vars` file (add to `.gitignore`):
```
API_KEY=your-key-here
```

---

## 10. Summary Checklist

### Static site (Pages only)
- [ ] Create a Cloudflare account at [dash.cloudflare.com](https://dash.cloudflare.com)
- [ ] Connect your GitHub repo via Workers & Pages > Create
- [ ] Configure build command and output directory (or leave empty for static HTML)
- [ ] Deploy — your site is live at `your-project.pages.dev`
- [ ] (Optional) Add a [custom domain](Custom%20Domains.md)

### Full-stack (Pages + Workers + D1 + R2)
- [ ] Install Wrangler: `npm install -g wrangler`
- [ ] Set up Pages for your frontend
- [ ] Add `functions/` directory for API routes (Workers)
- [ ] Create a D1 database if you need data storage
- [ ] Create an R2 bucket if you need file storage
- [ ] Set secrets with `wrangler secret put`
- [ ] Test locally with `npx wrangler dev`
- [ ] Deploy — push to GitHub or run `npx wrangler deploy`
