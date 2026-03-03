# Custom Domains
*Part of the [Vibe Coding Workshop](https://workshop.nerktek.com/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*

This guide covers buying a custom domain and connecting it to your Firebase-hosted project so users visit `yoursite.com` instead of `your-project.web.app`.

---

## 1. Why a Custom Domain?

Firebase Hosting gives you a free URL like `your-project.web.app`. That works, but a custom domain (like `myproject.com`) looks more professional and is easier to share.

---

## 2. Where to Buy Your Domain

### Cloudflare Registrar (Recommended)

We recommend buying domains through [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) for two reasons:

1. **At-cost pricing.** Cloudflare sells domains at the wholesale price with no markup — typically the cheapest option available.
2. **Automatic Cloudflare CDN & caching.** When you buy through Cloudflare, your domain is already set up with their global caching network. This means:
   - **Faster load times** — your site is served from whichever Cloudflare data center is closest to the visitor.
   - **Lower Firebase costs** — Cloudflare serves cached copies of your pages and assets, so fewer requests hit Firebase. This can significantly reduce bandwidth costs on the Blaze plan.
   - **DDoS protection** — Cloudflare automatically absorbs malicious traffic before it reaches your site.
   - **No extra setup** — all of this is enabled by default when you register through Cloudflare.

### How to Buy on Cloudflare

1. Create a free account at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Go to **Domain Registration** > **Register Domains**.
3. Search for your desired domain name.
4. Pick a TLD (`.com`, `.dev`, `.io`, etc.) and complete checkout.
5. Your domain is now active and managed through Cloudflare's dashboard.

> **Other registrars:** You can also buy domains from Namecheap, Squarespace, GoDaddy, etc. If you do, you'll need to either point your nameservers to Cloudflare (to get the caching benefits) or set up DNS records manually. Buying directly through Cloudflare skips this step entirely.

---

## 3. Connect Your Domain to Firebase

### Step 1: Tell Firebase About Your Domain

1. Open the [Firebase Console](https://console.firebase.google.com) and select your project.
2. Go to **Hosting** (in the left sidebar under Build).
3. Click **Add custom domain**.
4. Enter your domain (e.g., `myproject.com`).
5. Firebase will give you a **TXT record** to verify you own the domain, and then **two A records** to point your domain to Firebase's servers.

### Step 2: Add DNS Records in Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and select your domain.
2. Click **DNS** > **Records** > **Add record**.
3. First, add the **TXT record** Firebase gave you:
   - **Type:** TXT
   - **Name:** `@` (or your subdomain)
   - **Content:** the verification string Firebase provided
4. Wait for Firebase to verify (usually a few minutes, can take up to 24 hours).
5. After verification, add the **A records** Firebase gave you:
   - **Type:** A
   - **Name:** `@`
   - **IPv4 address:** the first IP Firebase provided
   - Add a second A record with the second IP.
6. If you also want `www.myproject.com` to work, add a **CNAME record**:
   - **Type:** CNAME
   - **Name:** `www`
   - **Target:** `myproject.com`

> **Cloudflare proxy (orange cloud):** Leave the proxy enabled (orange cloud icon) on your A and CNAME records. This routes traffic through Cloudflare's CDN and gives you the caching and protection benefits.

### Step 3: SSL is Handled by Cloudflare

Because your domain runs through Cloudflare's proxy, Cloudflare automatically provisions the SSL certificate that visitors see — this happens almost instantly. You don't need to wait for Firebase's own SSL provisioning.

In your Cloudflare dashboard, go to **SSL/TLS** and set the encryption mode to **Full (strict)**. This encrypts traffic both between visitors and Cloudflare, and between Cloudflare and Firebase's servers.

> **Tip:** You can check your domain status in Firebase Console > Hosting. It will show "Needs setup," "Pending," or "Connected" next to your domain. Even if Firebase shows "Pending" for a while, your site will already be accessible via HTTPS thanks to Cloudflare.

---

## 4. Cloudflare Caching Settings

Cloudflare caches your site by default, but you can tune it for better performance.

### Recommended Settings

In your Cloudflare dashboard, go to **Caching** > **Configuration**:

- **Caching Level:** Standard (default, works well for most sites)
- **Browser Cache TTL:** Respect Existing Headers (lets Firebase control caching) or set to 4 hours for static sites
- **Always Online:** Turn on — shows a cached version of your site if Firebase goes down

### What Gets Cached

Cloudflare automatically caches static assets (images, CSS, JS, fonts). HTML pages are not cached by default unless you set up a **Page Rule** or **Cache Rule**:

- For mostly-static sites (portfolios, landing pages), you can cache everything for big savings.
- For dynamic apps (dashboards, real-time data), leave HTML uncached so users always see fresh data.

> **Tip:** Ask your AI: *"My site is hosted on Firebase behind Cloudflare. Set up Cloudflare cache rules to cache all static assets and HTML pages for 1 hour."*

---

## 5. Managing Cache During Development

Once Cloudflare is caching your site, you may deploy changes and not see them right away. Here's how to deal with that.

### Quick Fix: Cache-Busting Query Strings

The fastest way to bypass the cache and see your latest changes is to add a query string to the URL:

```
https://myproject.com?v=2
https://myproject.com/page.html?cachebust=123
```

The parameter name and value don't matter — any unique query string forces Cloudflare to fetch a fresh copy from Firebase. This is useful for quick checks without touching any settings.

> **Tip:** Increment the number each time (`?v=1`, `?v=2`, `?v=3`) or use the current time (`?t=1234567890`) to guarantee a fresh response.

### Development Mode

Cloudflare's Development Mode temporarily bypasses the cache entirely for your domain — every request goes straight to Firebase for 3 hours.

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and select your domain.
2. Click **Caching** > **Configuration**.
3. Find **Development Mode** and toggle it **On**.

While active, all visitors see the latest version directly from Firebase with no caching. Development Mode automatically turns off after 3 hours, or you can turn it off manually when you're done testing.

> **Warning:** Development Mode disables caching for *everyone*, not just you. If your site has real traffic, use query strings or purge the cache instead.

### Purging the Cache

If you've deployed changes and want all visitors to see them immediately, purge the cache:

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and select your domain.
2. Click **Caching** > **Configuration**.
3. Click **Purge Everything** to clear all cached files.

You can also purge specific URLs if you only changed one page:
1. Click **Custom Purge** instead of Purge Everything.
2. Enter the full URL(s) you want to clear (e.g., `https://myproject.com/index.html`).

After purging, the next visitor request will pull fresh content from Firebase and re-cache it.

### Recommended Workflow

When you're actively developing and deploying frequently:

1. **Turn on Development Mode** so you can see changes instantly without purging.
2. **Deploy with `firebase deploy`** as normal.
3. **Reload the page** — no cache to worry about while Development Mode is on.
4. **When you're done for the day**, turn off Development Mode (or let it expire after 3 hours).
5. **Purge the cache once** after your final deploy so all visitors get the latest version.

For quick one-off checks after a deploy, just add `?v=2` to the URL instead of changing any settings.

---

## 6. Using a Subdomain

If you don't want your project on the root domain, you can use a subdomain like `app.myproject.com`:

1. In Firebase Console > Hosting > **Add custom domain**, enter `app.myproject.com`.
2. In Cloudflare DNS, add a **CNAME record**:
   - **Type:** CNAME
   - **Name:** `app`
   - **Target:** `your-project.web.app`
3. Cloudflare handles SSL automatically — your subdomain will be live shortly.

This is useful if you want multiple projects on one domain (e.g., `blog.mysite.com`, `app.mysite.com`).

---

## 7. Summary Checklist

- [ ] Buy a domain on [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
- [ ] In Firebase Console > Hosting > **Add custom domain**
- [ ] Add the TXT verification record in Cloudflare DNS
- [ ] Wait for Firebase to verify ownership
- [ ] Add the two A records in Cloudflare DNS
- [ ] (Optional) Add a CNAME for `www`
- [ ] Set Cloudflare SSL/TLS mode to **Full (strict)**
- [ ] Verify your site loads at `https://yourdomain.com`
- [ ] (Optional) Tune Cloudflare caching settings

---

## 8. Troubleshooting

| Problem | Fix |
|---------|-----|
| Firebase says "Pending" for hours | Double-check DNS records in Cloudflare. Make sure A records point to the correct Firebase IPs. DNS propagation can take up to 24 hours. |
| SSL errors or "not secure" warning | Make sure SSL mode is set to **Full (strict)** in Cloudflare > SSL/TLS. If you just added the domain, wait a few minutes for Cloudflare's cert to provision. |
| Site shows Cloudflare error page | Verify Firebase Hosting is deployed (`firebase deploy`). Make sure A records point to the Firebase IPs, not a placeholder. |
| `www` doesn't work | Make sure you added a CNAME record for `www` pointing to your root domain. |
