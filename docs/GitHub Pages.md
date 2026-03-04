# GitHub Pages
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

GitHub Pages is the simplest way to put a static website online — for free. If your project is already on GitHub, you're one settings toggle away from a live site.

> **When to use GitHub Pages:**
> - Your project is **static** (HTML, CSS, JavaScript — no server-side code)
> - Portfolio sites, landing pages, documentation, browser-based games
> - You want **free hosting** with a `yourname.github.io` URL
> - You're already using GitHub for your code
>
> **When to use something else:**
> - Your app needs a **backend** (database, auth, API routes) → [Firebase](Firebase.md) or [Vercel & Supabase](Vercel%20&%20Supabase.md)
> - You need **serverless functions** → [Vercel](Vercel%20&%20Supabase.md) or [Cloudflare](Cloudflare.md)
> - You expect **high traffic** and want unlimited bandwidth → [Cloudflare Pages](Cloudflare.md)

---

## What You Get (Free)

| Feature | Details |
|---|---|
| **Hosting** | Free static site hosting |
| **Bandwidth** | 100 GB/month |
| **Site size** | 1 GB max |
| **Custom domains** | Yes (free SSL included) |
| **Build support** | Jekyll built-in, or GitHub Actions for any framework |
| **Deploy method** | Push to GitHub → site updates automatically |
| **Commercial use** | Yes — no restrictions |

> **Limitations:** No server-side code, no database, no serverless functions. GitHub Pages serves files exactly as they are — it's a static file host, not an application platform.

---

## 1. The Vibe Coding Approach (Recommended)

Tell your AI what you want to deploy and let it guide you:

> "I have a static website in my GitHub repo. Help me deploy it to GitHub Pages. The main HTML file is in [the root / the `docs` folder / the `dist` folder]."

The AI will walk you through enabling Pages in your repo settings and configuring the source.

---

## 2. Deploying a Static Site (No Build Step)

This is the simplest path — your project has HTML/CSS/JS files that are ready to serve as-is.

### Step 1: Push Your Code to GitHub

If your project isn't on GitHub yet:

1. Create a new repository on [github.com](https://github.com).
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages**.
4. Under **Source**, select **Deploy from a branch**.
5. Choose your branch (`main`) and folder (`/ (root)` or `/docs`).
6. Click **Save**.

### Step 3: Access Your Site

After a minute or two, your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

Every time you push to the selected branch, the site updates automatically.

> **Important:** If your site loads but looks broken (missing CSS, images, or JS), it's usually a **path issue**. GitHub Pages serves your site at `/YOUR-REPO/`, not `/`. Ask your AI: *"My site works locally but CSS and images are broken on GitHub Pages. Fix the file paths."*

---

## 3. Deploying a Framework Project (React, Vite, Next.js)

If your project has a build step (e.g., `npm run build`), you'll use **GitHub Actions** to build and deploy automatically.

### Step 1: Add a GitHub Actions Workflow

Create the file `.github/workflows/deploy.yml` in your project:

**For Vite / vanilla build projects:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

> **Note:** Change `path: dist` to match your build output folder (`out` for Next.js static export).

### Step 2: Enable Pages with GitHub Actions Source

1. Go to **Settings > Pages** in your repo.
2. Under **Source**, select **GitHub Actions** (instead of "Deploy from a branch").

### Step 3: Configure Base Path

Most frameworks need to know they're being served from a subdirectory. Ask your AI:

> "Configure my [Vite/React/Next.js] project to deploy to GitHub Pages at `/MY-REPO-NAME/`."

**Common fixes:**
- **Vite:** Set `base: '/YOUR-REPO/'` in `vite.config.js`
- **Next.js:** Set `basePath: '/YOUR-REPO'` and `output: 'export'` in `next.config.js`

### Step 4: Push and Deploy

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

Go to the **Actions** tab in your repo to watch the build. Once it's green, your site is live.

---

## 4. User/Organization Site

You can create a special site at `YOUR-USERNAME.github.io` (no repo name suffix):

1. Create a repo named exactly `YOUR-USERNAME.github.io`.
2. Add your site files and push.
3. GitHub Pages automatically deploys it to `https://YOUR-USERNAME.github.io`.

This is perfect for a personal portfolio or homepage.

---

## 5. Custom Domains

1. In **Settings > Pages**, enter your custom domain (e.g., `mysite.com`).
2. Add DNS records at your domain registrar — GitHub will show you what to add.
3. GitHub provides **free SSL** automatically.

See [Custom Domains](Custom%20Domains.md) for detailed registrar setup instructions.

---

## 6. Troubleshooting

| Problem | Fix |
|---|---|
| Site shows README instead of my app | Make sure you have an `index.html` in the root (or the folder you selected as source). |
| CSS/images broken, but works locally | Path issue — your assets use absolute paths (`/style.css`) but the site is at `/repo-name/`. Use relative paths or set the base path in your framework config. |
| 404 on page refresh (SPA) | GitHub Pages doesn't support client-side routing. Add a `404.html` that redirects to `index.html`, or ask your AI to set this up. |
| Changes not showing up | GitHub Pages can take 1-2 minutes to update. Hard-refresh your browser (`Cmd+Shift+R` / `Ctrl+Shift+R`). Check the Actions tab for build errors. |
| Build fails in GitHub Actions | Check the Actions tab for error logs. Common: missing dependencies, wrong Node version, or wrong build output path. |

---

## 7. Summary Checklist

- [ ] Push your code to a GitHub repository
- [ ] Go to Settings > Pages and enable GitHub Pages
- [ ] Choose source: **branch** (static sites) or **GitHub Actions** (build-step projects)
- [ ] For framework projects: configure base path and add a deploy workflow
- [ ] Verify your site at `https://YOUR-USERNAME.github.io/YOUR-REPO/`
- [ ] (Optional) Add a [custom domain](Custom%20Domains.md)
