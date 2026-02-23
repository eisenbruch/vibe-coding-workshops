# Vercel & Supabase
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This guide covers building and deploying a full-stack web app using **Supabase** (database, auth, storage) and **Vercel** (hosting and deployment). This is a popular alternative to the Firebase stack — see [Backend & Hosting Platforms](Backend%20&%20Hosting%20Platforms.md) if you're unsure which to choose.

> **When to use this stack:**
> - Your app has **relational data** (users have posts, posts have comments, orders have items)
> - You're building with **React, Next.js, Svelte, or Vue**
> - You want a **SQL database** (industry standard, portable, no vendor lock-in)
> - You want **automatic deployments** from GitHub
>
> **When to use Firebase instead:**
> - You need real-time sync (chat, multiplayer games)
> - You're building a mobile app
> - You want everything in a single platform with one SDK

> **API Keys & Secrets:** If your project uses paid APIs (OpenAI, Stripe, etc.), make sure your keys are secured before deploying. Set environment variables in Vercel's dashboard (Project Settings > Environment Variables), and review the full [Protecting API Keys & Secrets](Solo%20Project%20Guide.md#protecting-api-keys--secrets) guide.

---

## 1. The Vibe Coding Approach (Recommended)

Tell your AI what you want to build and let it guide the setup. Example prompt:

> "I want to build a [describe your app] using Supabase for the database and auth, and deploy it on Vercel. Walk me through the setup — create the project, set up the database tables, add authentication, and configure deployment."

The AI will create your Supabase project, design your database schema, set up auth, and configure Vercel deployment.

---

## 2. Overview: How the Pieces Fit Together

```
┌──────────────────┐     ┌──────────────────┐
│     Vercel        │     │    Supabase       │
│                   │     │                   │
│  Hosts your app   │────▶│  Database (SQL)   │
│  Deploys from     │     │  Authentication   │
│  GitHub           │     │  File Storage     │
│  Serverless APIs  │     │  Edge Functions   │
│                   │     │  Real-time subs   │
└──────────────────┘     └──────────────────┘
         │
    Your users visit
    your-app.vercel.app
```

- **Supabase** handles your backend: database, user accounts, file uploads
- **Vercel** hosts your frontend and deploys it automatically when you push to GitHub
- Your app talks to Supabase using their JavaScript client library

---

## 3. Setting Up Supabase

### Step 1: Create a Supabase Project

1. Sign up at [supabase.com](https://supabase.com) (free).
2. Click **New Project**.
3. Choose an organization (create one if prompted).
4. Name your project and set a **database password** (save this somewhere — you'll need it if connecting directly to PostgreSQL).
5. Select a region close to your users.
6. Click **Create new project**. Setup takes about 2 minutes.

### Step 2: Get Your API Keys

1. In your Supabase dashboard, go to **Settings > API**.
2. You'll see two keys:
   - **`anon` (public)** — safe to use in frontend code. Access is controlled by Row Level Security (RLS) policies.
   - **`service_role` (secret)** — has full database access, bypasses RLS. **Never expose this in frontend code.**
3. Copy the **Project URL** and **`anon` key**. You'll need these in your app.

> **Important:** The `anon` key is designed to be public (like Firebase config), but it only works because Supabase uses Row Level Security to control what each user can access. Always set up RLS policies on your tables.

### Step 3: Create Your Database Tables

Supabase gives you a full PostgreSQL database with a visual table editor and SQL editor.

**Option A: Table Editor (Visual)**
1. Go to **Table Editor** in the sidebar.
2. Click **New Table**.
3. Add columns with names, types, and defaults.
4. Enable **Row Level Security** (RLS) — Supabase will prompt you.

**Option B: SQL Editor (Recommended)**
1. Go to **SQL Editor** in the sidebar.
2. Write SQL to create your tables. Example for a to-do app:

```sql
create table todos (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  completed boolean default false,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table todos enable row level security;

-- Users can only see their own todos
create policy "Users can view own todos"
  on todos for select
  using (auth.uid() = user_id);

-- Users can only insert their own todos
create policy "Users can create own todos"
  on todos for insert
  with check (auth.uid() = user_id);

-- Users can only update their own todos
create policy "Users can update own todos"
  on todos for update
  using (auth.uid() = user_id);

-- Users can only delete their own todos
create policy "Users can delete own todos"
  on todos for delete
  using (auth.uid() = user_id);
```

> **Ask Your AI:** *"I'm building [describe your app] with Supabase. Design the database schema — create the SQL for all tables, relationships, and RLS policies."*

### Step 4: Enable Authentication

1. Go to **Authentication > Providers** in the Supabase dashboard.
2. **Email/Password** is enabled by default.
3. To add social logins (Google, GitHub, etc.):
   - Click the provider you want.
   - Follow the instructions to create OAuth credentials (each provider has a setup link).
   - Paste the Client ID and Secret into Supabase.

---

## 4. Setting Up Vercel

### Step 1: Connect Your GitHub Repository

1. Sign up at [vercel.com](https://vercel.com) using your **GitHub account**.
2. Click **Add New Project**.
3. Select your GitHub repository.
4. Vercel auto-detects your framework (Next.js, React, Vite, etc.) and configures build settings.
5. Click **Deploy**.

That's it — your app is live. Every time you push to GitHub, Vercel redeploys automatically.

### Step 2: Add Environment Variables

Your Supabase credentials need to be available to your deployed app:

1. In Vercel, go to your project **Settings > Environment Variables**.
2. Add these variables:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase `anon` key |

> **Note:** The `NEXT_PUBLIC_` prefix makes these available in browser code (for Next.js). For Vite projects, use `VITE_` prefix instead. For plain React (Create React App), use `REACT_APP_`.

3. If you have secret keys (like `service_role` or third-party API keys), add them **without** the public prefix so they're only available server-side.

### Step 3: Set Up Local Development

For local development, create a `.env.local` file in your project root:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Add `.env.local` to your `.gitignore` (it should already be there for Next.js projects).

---

## 5. Connecting Your App to Supabase

### Install the Supabase Client

```bash
npm install @supabase/supabase-js
```

### Initialize the Client

Create a file to configure the Supabase connection (e.g., `lib/supabase.js`):

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Common Operations

**Sign up a user:**
```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
})
```

**Sign in:**
```javascript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})
```

**Read data:**
```javascript
const { data, error } = await supabase
  .from('todos')
  .select('*')
  .order('created_at', { ascending: false })
```

**Insert data:**
```javascript
const { data, error } = await supabase
  .from('todos')
  .insert({ title: 'Buy groceries', user_id: user.id })
```

**Update data:**
```javascript
const { data, error } = await supabase
  .from('todos')
  .update({ completed: true })
  .eq('id', todoId)
```

**Delete data:**
```javascript
const { data, error } = await supabase
  .from('todos')
  .delete()
  .eq('id', todoId)
```

> **Ask Your AI:** *"Connect my app to Supabase. I need [auth/database/storage]. Here are my Supabase credentials: [URL and anon key]. Update my code to use Supabase for [describe what you need]."*

---

## 6. File Storage

Supabase Storage works similarly to Firebase Storage — you create **buckets** (folders) and upload files to them.

### Set Up a Storage Bucket

1. Go to **Storage** in the Supabase dashboard.
2. Click **New Bucket**.
3. Name it (e.g., `avatars`, `uploads`).
4. Choose **Public** (anyone can view files via URL) or **Private** (requires authentication).

### Upload a File

```javascript
const { data, error } = await supabase.storage
  .from('avatars')
  .upload(`${userId}/profile.jpg`, file)
```

### Get a Public URL

```javascript
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl(`${userId}/profile.jpg`)

// data.publicUrl → "https://your-project.supabase.co/storage/v1/object/public/avatars/..."
```

### Storage Policies

Storage uses the same RLS-style policies as the database. Example — users can upload to their own folder:

```sql
create policy "Users can upload own avatar"
  on storage.objects for insert
  with check (
    bucket_id = 'avatars'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Anyone can view avatars"
  on storage.objects for select
  using (bucket_id = 'avatars');
```

> **Ask Your AI:** *"Set up Supabase Storage for [profile photos / image gallery / file uploads]. Create the bucket, upload logic, and storage policies."*

---

## 7. Row Level Security (RLS)

RLS is Supabase's equivalent of Firebase Security Rules. It controls who can read, insert, update, and delete data at the database level.

### Why RLS Matters

Without RLS, anyone with your `anon` key can read and modify all data in your tables. RLS policies ensure users can only access their own data.

### Common Patterns

**Users can only access their own rows:**
```sql
-- Read own data
create policy "Users read own data"
  on my_table for select
  using (auth.uid() = user_id);

-- Write own data
create policy "Users write own data"
  on my_table for insert
  with check (auth.uid() = user_id);
```

**Public read, authenticated write:**
```sql
-- Anyone can read
create policy "Public read"
  on my_table for select
  using (true);

-- Only logged-in users can create
create policy "Authenticated insert"
  on my_table for insert
  with check (auth.uid() is not null);
```

**Admin-only access:**
```sql
create policy "Admin only"
  on my_table for all
  using (
    auth.uid() in (
      select id from auth.users where raw_user_meta_data->>'role' = 'admin'
    )
  );
```

### How to Apply RLS Policies

- **Dashboard:** Go to **Authentication > Policies**, select your table, and add policies visually.
- **SQL Editor:** Write policies directly in SQL (recommended — easier for AI to generate).

> **Tip:** Ask your AI: *"Look at my Supabase tables and write RLS policies so users can only read and write their own data."*

---

## 8. Serverless Functions (API Routes)

If you need server-side logic (calling paid APIs, processing webhooks, etc.), Vercel provides serverless functions through your framework's API routes.

### Next.js API Routes (App Router)

Create a file at `app/api/hello/route.js`:

```javascript
export async function GET(request) {
  // This runs on the server — safe to use secret keys here
  const apiKey = process.env.OPENAI_API_KEY

  return Response.json({ message: 'Hello from the server' })
}
```

### When to Use Serverless Functions

- Calling paid APIs (OpenAI, Stripe) without exposing keys
- Processing webhooks from third-party services
- Any logic that needs secret credentials

> **Ask Your AI:** *"I need to call the OpenAI API from my app without exposing my API key. Create a Vercel API route that proxies the request."*

---

## 9. Deploy to the Public Web

### Automatic Deployments

If you connected Vercel to GitHub (Step 4.1), deployment is automatic:

1. Make changes to your code.
2. Commit and push to GitHub.
3. Vercel detects the push and builds your site.
4. Your live site updates within ~30-60 seconds.
5. Your app is live at `your-project.vercel.app`.

### Preview Deployments

Every pull request or branch push gets its own preview URL (e.g., `your-project-git-feature-name.vercel.app`). This lets you test changes before merging to production.

### Custom Domains

1. In Vercel, go to **Settings > Domains**.
2. Add your domain (e.g., `myapp.com`).
3. Vercel will show you DNS records to add at your registrar (Cloudflare, Namecheap, etc.).
4. SSL is automatic.

> **Note:** Vercel handles custom domains differently than Firebase. You add DNS records pointing to Vercel's servers instead of Firebase's. See [Custom Domains](Custom%20Domains.md) for registrar setup — the Cloudflare domain purchase steps are the same, but you'll point DNS to Vercel instead of Firebase.

---

## 10. Local Development

### Running Your Project Locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Your app runs at `http://localhost:3000` (Next.js) or `http://localhost:5173` (Vite).

### Supabase Local Development (Optional)

For advanced users, Supabase has a local development setup using Docker:

```bash
npx supabase init
npx supabase start
```

This runs a local PostgreSQL, Auth, and Storage instance. For most workshop projects, connecting directly to your cloud Supabase project is simpler.

---

## 11. Summary Checklist

- [ ] Create a Supabase project at [supabase.com](https://supabase.com)
- [ ] Design your database tables and RLS policies
- [ ] Enable authentication providers (Email, Google, etc.)
- [ ] Create a Vercel account and connect your GitHub repo
- [ ] Add Supabase environment variables in Vercel (and `.env.local` for local dev)
- [ ] Install `@supabase/supabase-js` and initialize the client
- [ ] Connect your app to Supabase (auth, database, storage)
- [ ] [Secure your API keys](Solo%20Project%20Guide.md#protecting-api-keys--secrets) — add secret keys to Vercel env vars, never in frontend code
- [ ] Set up RLS policies on all tables before going live
- [ ] Deploy (push to GitHub → Vercel deploys automatically)

---

## 12. Troubleshooting

| Problem | Fix |
|---|---|
| "Permission denied" or empty data from Supabase | RLS is enabled but you haven't created policies. Go to Authentication > Policies and add policies for your tables. |
| App works locally but not on Vercel | Check that environment variables are set in Vercel Settings > Environment Variables. Redeploy after adding them. |
| Supabase project is paused | Free projects pause after 7 days of inactivity. Go to your Supabase dashboard and click "Restore". Takes ~60 seconds. |
| Auth redirects not working | Add your Vercel URL to Supabase Auth > URL Configuration > Redirect URLs. |
| "Invalid API key" errors | Make sure you're using the `anon` key (not `service_role`) in frontend code, and that env variable names match your framework's prefix (`NEXT_PUBLIC_`, `VITE_`, etc.). |
| Build fails on Vercel | Check the build logs in Vercel's dashboard. Common causes: missing dependencies, TypeScript errors, or environment variables not set. |
