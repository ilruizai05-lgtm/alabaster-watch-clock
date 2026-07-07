# Deployment Guide — John Alabaster Watch & Clock

This guide takes the website live on the internet and points the existing
domain (`alabasterwatchandclock.com`) at it. It's written for a non-developer —
follow it top to bottom.

**The golden rule:** do these steps *in order*. Do **not** cancel the Wix plan
until the very end, after the new site is confirmed live on the real domain.

---

## The big picture (what we're doing and why)

Right now:

- The new website is **code on GitHub** (branch `main`) — not yet on the public internet.
- The domain `alabasterwatchandclock.com` currently points to the **old Wix site**.

We will:

1. **Host** the new site for free on **Cloudflare Pages** → gives a temporary URL.
2. **Point** the domain from Wix to the new site.
3. **Verify** everything works.
4. **Cancel** the Wix Premium plan (saves ~$200+/year).

The domain stays the same the whole time — customers notice nothing except a
better site.

---

## Step 1 — Create a Cloudflare account (free)

1. Go to <https://dash.cloudflare.com/sign-up>
2. Sign up with an email + password. Verify the email.
3. That's it — no credit card needed for Pages.

---

## Step 2 — Connect the GitHub repo to Cloudflare Pages

1. In the Cloudflare dashboard, in the left sidebar click **Compute (Workers & Pages)** → **Pages**.
   (Depending on the version it may just say **Workers & Pages**.)
2. Click **Create application** → **Pages** tab → **Connect to Git**.
3. Click **Connect GitHub** and authorize Cloudflare. When asked which repos,
   you can allow just **`ilruizai05-lgtm/alabaster-watch-clock`**.
4. Back in Cloudflare, select the **`alabaster-watch-clock`** repository → **Begin setup**.

---

## Step 3 — Set the build settings

Cloudflare needs to know how to build the site. Enter these **exactly**:

| Field | Value |
|---|---|
| **Production branch** | `main` |
| **Framework preset** | `Vite` (if offered) — otherwise leave as "None" |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

Leave everything else at its default. Click **Save and Deploy**.

Cloudflare will now build the site (takes 1–2 minutes). When it finishes you'll
get a live URL like:

```
https://alabaster-watch-clock.pages.dev
```

**Open that link.** 🎉 That's the new site, live on the internet. Send it to
John for approval — this is the preview URL. (It stays free and working even
after you connect the real domain.)

> From now on, **every time changes are pushed to the `main` branch on GitHub,
> Cloudflare rebuilds and redeploys automatically.** You don't have to do
> anything to update the live site.

---

## Step 4 — Add the real domain in Cloudflare Pages

1. In your Pages project, go to the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Type `alabasterwatchandclock.com` and click **Continue**.
4. Cloudflare will show you the DNS records (or nameservers) it needs. **Keep
   this tab open** — you'll need these values in the next step.
5. Repeat for the `www` version: add `www.alabasterwatchandclock.com` too.

Cloudflare will tell you the domain "isn't active yet" — that's expected until
Step 5 is done.

---

## Step 5 — Point the Wix domain to Cloudflare

The domain is **registered with Wix**, so you have two options. **Option A is
simpler and faster** and is recommended for launch.

### Option A — Keep the domain at Wix, just re-point it (recommended)

The cleanest version of this is to hand DNS control to Cloudflare by changing
the domain's **nameservers**:

1. When you set up the custom domain in Step 4, Cloudflare may offer to add the
   domain as a **full site** and give you **two nameservers** that look like:
   `xxxx.ns.cloudflare.com` and `yyyy.ns.cloudflare.com`. Write them down.
   - If it only gave you a CNAME/A record instead, use those in the Wix DNS
     editor (Wix → Domains → the `…` menu → **Manage DNS Records**) and skip the
     nameserver part.
2. In **Wix**: go to **wix.com/account/domains** → click the **`…`** menu next
   to `alabasterwatchandclock.com` → **Manage Domain** → look for **Advanced /
   Nameservers**.
3. Choose **"Use external / custom nameservers"** and paste in the two
   Cloudflare nameservers. Save.
4. Done. DNS changes take anywhere from **15 minutes to a few hours** (sometimes
   up to 24h) to take effect worldwide.

> With this option you keep paying Wix only for the **domain registration**
> (~$15/year) and cancel the expensive **site plan**. Confirm in Wix that the
> domain renewal is separate from the site subscription before cancelling
> (see Step 7).

### Option B — Transfer the domain to Cloudflare (cheaper long-term)

Everything (domain + hosting) ends up in one place, and Cloudflare charges the
wholesale price (~$10/year). It takes ~5 days and can't be done in the last 60
days before renewal (fine here — renewal is Jan 2028).

1. In **Wix** (Domains → `…` → **Transfer away from Wix**): **unlock** the
   domain and request the **authorization / EPP code**.
2. In **Cloudflare**: **Domain Registration** → **Transfer Domains**, enter the
   code, and follow the prompts.
3. Approve the confirmation email. The transfer completes in a few days;
   the domain keeps working the whole time.

---

## Step 6 — Verify the site is live on the real domain

After DNS has had time to update:

1. Open a **private/incognito** browser window (avoids old cached versions).
2. Go to `https://alabasterwatchandclock.com` — you should see the **new** site.
3. Also check `https://www.alabasterwatchandclock.com`.
4. Confirm the padlock 🔒 (HTTPS) shows — Cloudflare adds the security
   certificate automatically; it can take a few minutes after the domain connects.
5. Test on your **phone** too.

If it still shows the old site after a few hours, the DNS change may still be
propagating — wait, then re-check in incognito.

---

## Step 7 — Cancel the Wix Premium plan (do this LAST)

Only after Step 6 confirms the new site is live on the real domain:

1. In Wix: **Account** → **Subscriptions** (or **Premium Subscriptions**).
2. Cancel the **site/Premium plan** for "Mysite 1".
3. **Do NOT cancel or delete the domain** if you chose Option A (you still need
   Wix to keep the registration until/unless you transfer it).
4. If in doubt, cancel *only* the site plan and leave the domain alone.

---

## Step 8 — Post-launch checklist

- [ ] Test the **repair form** — submit once, click the Formspree confirmation
      email so submissions start reaching the inbox.
- [ ] Claim / update the **Google Business Profile** with the website URL.
- [ ] Update the **Yelp** and **Google** listings with the new URL.
- [ ] Submit the site to **Google Search Console** (add the property, submit
      `https://alabasterwatchandclock.com/sitemap.xml`).

---

## How to make future edits

1. Change the code (or ask Claude to).
2. The change gets pushed to the `main` branch on GitHub.
3. Cloudflare automatically rebuilds and the live site updates in ~2 minutes.

No manual deploy step needed.

---

## Quick reference

| Thing | Value |
|---|---|
| GitHub repo | `ilruizai05-lgtm/alabaster-watch-clock` |
| Production branch | `main` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Domain | `alabasterwatchandclock.com` (registered at Wix, renews Jan 2028) |
| Host | Cloudflare Pages (free) |
| Form backend | Formspree (`https://formspree.io/f/xaqgdgpz`) |
