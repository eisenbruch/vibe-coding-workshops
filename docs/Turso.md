# Turso Database
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

Turso is a managed database built on **libSQL** — an open-source fork of SQLite. It gives you a real SQL database that runs at the edge (close to your users), with a generous free tier and none of the complexity of managing a PostgreSQL server.

> **When to use Turso:**
> - You want a **SQL database** without the overhead of PostgreSQL
> - Your app needs **fast reads** (Turso replicates data to edge locations near your users)
> - You want a **generous free tier** — 9 GB storage, 500 databases, unlimited reads
> - You're pairing it with **Vercel**, **Cloudflare**, **Netlify**, or any other frontend host
> - You want **database branching** for safe development (like Git branches for your database)
>
> **When to use something else:**
> - You need **built-in auth** → [Firebase](Firebase.md) or [Supabase](Vercel%20&%20Supabase.md)
> - You need **complex PostgreSQL features** (PostGIS, full-text search, advanced extensions) → [Supabase](Vercel%20&%20Supabase.md)
> - You want **everything in one platform** (auth + database + storage + hosting) → [Firebase](Firebase.md) or [Supabase](Vercel%20&%20Supabase.md)
> - Your app needs **real-time data sync** → [Firebase](Firebase.md)

---

## Why Turso?

Turso fills a gap that other platforms leave open: a **lightweight SQL database** that's easy to set up, cheap to run, and fast everywhere.

| Feature | **Turso** | **Supabase** | **Firebase** | **Cloudflare D1** |
|---|---|---|---|---|
| **Database type** | libSQL (SQLite fork) | PostgreSQL | Firestore (NoSQL) | SQLite |
| **Free storage** | **9 GB** | 500 MB | 1 GB | 5 GB |
| **Free databases** | **500** | 2 | Unlimited | 50K reads/day |
| **Edge replicas** | Yes (data near users) | No (single region) | Multi-region | Yes |
| **Database branching** | Yes | No | No | No |
| **Built-in auth** | No | Yes | Yes | No |
| **Vendor lock-in** | Low (libSQL/SQLite) | Low (PostgreSQL) | High | Low (SQLite) |
| **Learning curve** | Low | Low-medium | Low | Medium |

### Turso's Standout Features

- **9 GB free storage** — more than any competitor's free tier
- **500 free databases** — spin up a database per user, per feature, or per branch
- **Edge replicas** — data is copied to locations near your users for faster reads
- **Database branching** — create a copy of your production database for testing, then merge or discard
- **Embedded replicas** — run a local SQLite copy inside your app for near-zero latency reads

---

## 1. The Vibe Coding Approach (Recommended)

> "I want to use Turso as my database. Help me set it up, create tables for [describe your data], and connect it to my [React/Next.js/plain HTML] app deployed on [Vercel/Cloudflare/Netlify]."

---

## 2. Getting Started

### Step 1: Install the Turso CLI

```bash
# macOS
brew install tursodatabase/tap/turso

# Linux / WSL
curl -sSfL https://get.tur.so/install.sh | bash
```

### Step 2: Sign Up & Log In

```bash
turso auth signup   # Creates an account (uses GitHub OAuth)
turso auth login    # Log in on subsequent sessions
```

### Step 3: Create a Database

```bash
turso db create my-app-db
```

This creates a database and places the primary in a location close to you. Turso will show you the database URL.

### Step 4: Get Your Credentials

```bash
# Get database URL
turso db show my-app-db --url

# Create an auth token
turso db tokens create my-app-db
```

Save both — you'll need them to connect from your app.

---

## 3. Creating Tables

### Option A: Turso CLI Shell

```bash
turso db shell my-app-db
```

Then write SQL directly:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Option B: From Your Code

You can also run migrations from your app — ask your AI to set this up for your framework.

---

## 4. Connecting From Your App

### Install the Client Library

```bash
npm install @libsql/client
```

### Initialize the Client

```javascript
import { createClient } from '@libsql/client';

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
```

### Common Operations

**Read data:**
```javascript
const result = await db.execute("SELECT * FROM users WHERE id = ?", [userId]);
const user = result.rows[0];
```

**Insert data:**
```javascript
await db.execute(
  "INSERT INTO users (name, email) VALUES (?, ?)",
  ["Alice", "alice@example.com"]
);
```

**Update data:**
```javascript
await db.execute(
  "UPDATE posts SET title = ? WHERE id = ?",
  ["Updated Title", postId]
);
```

**Delete data:**
```javascript
await db.execute("DELETE FROM posts WHERE id = ?", [postId]);
```

**Transactions (multiple operations that succeed or fail together):**
```javascript
await db.batch([
  {
    sql: "INSERT INTO users (name, email) VALUES (?, ?)",
    args: ["Bob", "bob@example.com"]
  },
  {
    sql: "INSERT INTO posts (user_id, title) VALUES (last_insert_rowid(), ?)",
    args: ["My first post"]
  }
]);
```

---

## 5. Environment Variables

Store your credentials as environment variables — never hardcode them.

**Local development (`.env` or `.env.local`):**
```
TURSO_DATABASE_URL=libsql://your-db-name-your-username.turso.io
TURSO_AUTH_TOKEN=your-token-here
```

**On your hosting platform:**

| Platform | Where to add env vars |
|---|---|
| **Vercel** | Project Settings > Environment Variables |
| **Cloudflare** | `npx wrangler secret put TURSO_DATABASE_URL` |
| **Netlify** | Site Settings > Environment Variables |

---

## 6. Common Stacks with Turso

| Stack | When to use it |
|---|---|
| **Turso + Vercel** | React/Next.js app with a SQL database. Great default choice. |
| **Turso + Cloudflare Pages** | Static or full-stack app with unlimited bandwidth and edge database. |
| **Turso + Netlify** | Simple site with form handling and a database. |
| **Turso + any static host** | Add a database to any frontend — Turso works from server-side code or edge functions. |

> **Note:** Turso is a **database only** — it doesn't handle auth, file storage, or hosting. Pair it with a hosting platform and add auth separately (e.g., Clerk, Auth.js, or Lucia) if your app needs user accounts.

---

## 7. Database Branching

Turso's branching feature lets you create a copy of your database for testing — like a Git branch for your data.

```bash
# Create a branch from your production database
turso db create my-app-db-dev --from-db my-app-db

# Work on the branch — test schema changes, seed test data
turso db shell my-app-db-dev

# When done, drop the branch
turso db destroy my-app-db-dev
```

This is safer than testing against production and cheaper than maintaining a separate staging database.

---

## 8. Turso vs. Supabase

These are the two most common SQL database choices for new projects. Here's how to decide:

| | **Turso** | **Supabase** |
|---|---|---|
| **Database** | libSQL (SQLite fork) | PostgreSQL |
| **Free storage** | 9 GB | 500 MB |
| **Auth** | None — bring your own | Built-in (email, Google, GitHub, etc.) |
| **File storage** | None — use R2, S3, etc. | Built-in |
| **Edge replicas** | Yes | No (single region) |
| **Dashboard/UI** | CLI-focused, basic web UI | Full dashboard with SQL editor, table viewer |
| **Ecosystem** | Growing | Large, many tutorials |
| **Best for** | Database-only needs, high-read apps, cost-sensitive | Full backend (auth + db + storage), relational apps |

**Choose Turso** if you want a lightweight database and are handling auth/storage separately.
**Choose Supabase** if you want auth, storage, and database in one platform.

---

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| "TURSO_DATABASE_URL is undefined" | Make sure your `.env` file is loaded. For Next.js, restart the dev server after changing env vars. |
| "Unauthorized" errors | Your auth token may have expired. Create a new one: `turso db tokens create my-app-db` |
| Slow queries | Add indexes: `CREATE INDEX idx_users_email ON users(email);` Ask your AI to analyze your queries. |
| "Database is sleeping" | Free-tier databases stay active as long as they receive occasional traffic. Rarely an issue with Turso (unlike Supabase). |
| Can't connect from Cloudflare Workers | Make sure you're using `@libsql/client/web` (the web-compatible client) instead of the default Node.js client. |

---

## 10. Summary Checklist

- [ ] Install the Turso CLI (`brew install tursodatabase/tap/turso` or the install script)
- [ ] Sign up and log in (`turso auth signup`)
- [ ] Create a database (`turso db create my-app-db`)
- [ ] Get your URL and auth token (`turso db show --url` and `turso db tokens create`)
- [ ] Install `@libsql/client` in your project
- [ ] Add `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` to your env vars (local + hosting platform)
- [ ] Create your tables (via CLI shell or migrations)
- [ ] Connect and query from your app
- [ ] (Optional) Set up database branching for development
