# Tidal Realty Services — Website Handoff Guide

**Last updated:** April 2026

This document is your complete reference for the Tidal Realty Services website. It covers everything you need to keep the site running, edit content, and onboard new people.

> **TL;DR:** The website is live at https://tidalrealtyservices.com. Content is edited at https://tidalrealtyservices.com/admin/. It costs $0/month to run. Everything is hosted on free tiers.

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [Day 1: First-Time Boss Walkthrough](#day-1-first-time-boss-walkthrough)
3. [Editing Content (For the Boss)](#editing-content-for-the-boss)
4. [What's Editable vs. What's Not](#whats-editable-vs-whats-not)
5. [Adding New Editors](#adding-new-editors)
6. [Troubleshooting](#troubleshooting)
7. [Costs & Subscriptions](#costs--subscriptions)
8. [Account Inventory & Credentials](#account-inventory--credentials)
9. [Technical Reference (For Developers)](#technical-reference-for-developers)
10. [Emergency Recovery](#emergency-recovery)

---

## Quick Reference

| What | Where |
|---|---|
| 🌐 Live website | https://tidalrealtyservices.com |
| ✏️ Content editor (CMS) | https://tidalrealtyservices.com/admin/ |
| 📧 Form submissions go to | info@tidalpm.com |
| ☁️ Hosting | Netlify (free tier) |
| 🌍 Domain registrar | GoDaddy |
| 💻 Code repository | https://github.com/kenechocoo/tidal-website-build |
| 📨 Form service | Web3Forms (free tier, 250 submissions/month) |

**Time from CMS save → live site:** ~60 seconds (Netlify rebuilds automatically).

---

## Day 1: First-Time Boss Walkthrough

Hand the boss this section the first time they log in. Walk through it together.

### Before you start
The boss needs:
1. A free **GitHub account** — sign up at https://github.com/signup
2. To be **added as a collaborator** to the repo (someone with admin access does this — see [Adding New Editors](#adding-new-editors))
3. The collaboration invite email from GitHub — they need to **click "Accept invite"**

### First login
1. Open **https://tidalrealtyservices.com/admin/**
2. Click **"Sign in with GitHub"**
3. A popup appears → log in with the GitHub account → click **"Authorize"**
4. The popup closes and the editor appears

### What you'll see
A sidebar on the left with two main sections:

**⚙️ Site Settings** — Things that appear on every page (logo, phone, email, address, social media, navigation menu, footer disclosures)

**📄 Pages** — Content for each individual page:
- 🏠 Home Page
- 💰 List for Sale Page ($999)
- 🏘️ List for Rent Page ($399)
- 🔧 Property Management Page
- ✉️ Contact Page

### Make your first edit (test run)
1. Click **⚙️ Site Settings → General Settings**
2. Find the **Tagline** field (currently: *"Full-Service Real Estate Brokerage"*)
3. Add a period or extra word at the end as a test
4. Click **Save** in the top right
5. Wait 60-90 seconds
6. Open https://tidalrealtyservices.com in a new tab → scroll to the footer → you should see your test edit
7. **Don't forget to undo your test edit** when done!

If you see your edit on the live site, **everything works**. You're now editing the website.

---

## Editing Content (For the Boss)

### The "View Live Page" link
At the top of each page editor, there's a **"View live page →"** link. Click it to open the actual page in a new tab while you edit. This way you can see what your changes will look like.

### Saving and publishing
- Click **"Save"** (top right of editor) → commits to GitHub → Netlify rebuilds → live in ~60s
- The editor uses **Sveltia CMS** which auto-saves drafts. Your work isn't lost if you close the tab.

### Field types you'll encounter

| Type | What it looks like | What to do |
|---|---|---|
| **Text field** | Single-line input | Type the new text |
| **Long text** | Multi-line box | Type a paragraph |
| **Image** | Drag-and-drop area | Drag a file in or click to browse. Recommended: JPG/PNG, under 2MB |
| **List** | A list of items with "Add" buttons | Click "Add" to add an item, drag to reorder, click trash to delete |
| **Object** | A group of related fields | Click to expand/collapse |
| **Dropdown** | Select menu | Pick from the options |

### Sections that take some thought

Some pages have a heading split into a "regular part" + "italic part" — like "Compare our *fees*". The CMS shows two fields:
- **Heading - Regular Part**: `Compare our`
- **Heading - Italic Part**: `fees`

This lets you change either half. Whatever's in the italic field will appear in italics on the page.

Some descriptions have a **"highlight phrase"** that's emphasized. The highlight phrase MUST exactly match a phrase that appears in the description above. Example:

- Description: *"Most agents charge thousands... we offer a **full-service MLS listing for just $999**."*
- Highlight phrase: `full-service MLS listing for just $999`

If you change the description but the highlight phrase no longer appears in it, the styling won't apply. Either edit both, or just edit the description without changing the highlighted phrase.

### Tips
- **Make small changes and save often** — easier to undo if something looks wrong
- **Don't change "URL" or "Link" fields** unless you understand what they do — these connect pages together (e.g. "/contact" sends to the Contact page)
- **Always preview before publishing** — click "View live page →" to see what changed
- **For images**: Use clear, high-quality photos. The CMS uploads them to your GitHub repo automatically.

---

## What's Editable vs. What's Not

### ✅ You CAN edit (no developer needed)

**Site-wide (every page):**
- Business name
- **Logo image** (upload a new one)
- Tagline
- Phone number
- Email
- Office address
- Social media URLs (LinkedIn, Instagram, X)
- Navigation menu labels (Home, List for Sale, etc.)
- Footer TREC disclosure text and link labels
- "The Nest" external URL

**Each page:**
- All headlines (including italic styling on section titles)
- All subtitles and paragraph descriptions
- All button labels and links
- All prices ($999, $399, $99, etc.)
- All section labels and CTAs
- All bullet lists, numbered steps, and savings tables
- All hero photos and feature photos (uploadable)
- SEO metadata (browser tab title, search engine description)
- Contact form dropdown options
- Contact form success messages

### ❌ You CANNOT edit without a developer

- Page layout, colors, fonts, or visual design
- Adding entirely new pages
- Custom code, animations, or interactive features
- Where the contact form sends submissions (currently info@tidalpm.com via Web3Forms)
- The TREC disclosure PDF files themselves (only the link labels)
- The Listings page or The Nest internal page (these exist in code but aren't linked from the menu)

---

## Adding New Editors

To let someone else edit the website:

1. **They need a free GitHub account** at https://github.com/signup
2. **Add them as a collaborator** to the repo:
   - Go to https://github.com/kenechocoo/tidal-website-build/settings/access
   - Click **"Add people"** → type their GitHub username → choose **"Write"** permission
   - Click **"Add to repository"**
3. **They accept the invite** from the email GitHub sends them
4. **They can now log in** at https://tidalrealtyservices.com/admin/

To remove an editor:
1. Same Access page → click the trash icon next to their name

---

## Troubleshooting

### "The CMS won't let me log in"
1. Confirm your GitHub account is listed at https://github.com/kenechocoo/tidal-website-build/settings/access
2. Try a different browser or incognito window
3. Check that the GitHub OAuth App still exists at https://github.com/settings/developers (named "Tidal Realty Services CMS")

### "I edited something but the site didn't update"
1. Wait 60-90 seconds (Netlify build takes time)
2. Hard refresh the page (Ctrl+Shift+R on Windows, ⌘+Shift+R on Mac) to bust the cache
3. Check the Netlify deploys page: https://app.netlify.com/projects/tidal-realty-preview/deploys
   - Latest deploy should say "Published" with a green checkmark
   - If it says "Failed", the build broke — see [Emergency Recovery](#emergency-recovery)
4. Confirm you actually clicked **Save** (top-right of editor)

### "Contact form submissions stopped arriving"
1. Check the spam folder in info@tidalpm.com
2. Log into https://web3forms.com → check submission count (free tier = 250/month)
3. If quota exceeded, upgrade to Web3Forms paid (~$5/month)
4. Verify the access key in `src/pages/contact.tsx` still matches your Web3Forms account

### "The live site is showing an error or is broken"
See [Emergency Recovery](#emergency-recovery) below.

### "I deleted something by accident"
Every CMS save commits to GitHub, so nothing is permanently lost.
- Go to https://github.com/kenechocoo/tidal-website-build/commits/main
- Find the commit before your accidental change
- Click "..." on that commit → "Browse files" → find the file
- Copy its contents and paste back into the CMS

---

## Costs & Subscriptions

### Current monthly cost: **$0**

| Service | What | Cost |
|---|---|---|
| Netlify | Hosting + functions | Free tier (covers our usage easily) |
| GitHub | Code repository | Free |
| Web3Forms | Contact form delivery | Free (250 submissions/month) |
| Sveltia CMS | Content editor | Free, open source |

### Yearly cost: **~$15**

| Service | What | Cost |
|---|---|---|
| GoDaddy | Domain registration | ~$15/year for tidalrealtyservices.com |

### When you might need to upgrade

- **Web3Forms**: If you ever exceed 250 form submissions/month → upgrade to ~$5/month
- **Netlify**: If you ever exceed 100GB bandwidth/month or 300 build minutes/month → upgrade to ~$19/month (very unlikely for a small business site)
- **Visual editing**: If your boss wants Squarespace-style click-to-edit visual editing → switch to TinaCMS (~$29/month) — see "Future Considerations" in the developer section

---

## Account Inventory & Credentials

**Critical:** Whoever is taking over the site must have access to ALL of these accounts before the original creator leaves.

| Service | URL | Currently owned by | What it controls |
|---|---|---|---|
| GitHub | https://github.com/kenechocoo/tidal-website-build | kenechocoo | All website code + content |
| GitHub OAuth App | https://github.com/settings/developers | kenechocoo | CMS login |
| Netlify | https://app.netlify.com/projects/tidal-realty-preview | (linked to kenechocoo's GitHub) | Hosting, domain, env vars |
| GoDaddy | https://dcc.godaddy.com → tidalrealtyservices.com | (boss's account) | Domain |
| Web3Forms | https://web3forms.com | (your account) | Contact form delivery |
| info@tidalpm.com | (Gmail / Outlook / wherever this is hosted) | (boss's account) | Inbox for form submissions |

### Handoff checklist
- [ ] Boss has owner-level GitHub access to the repo (or repo is transferred to boss's GitHub)
- [ ] Boss is admin on the Netlify project (or Netlify project is transferred)
- [ ] Boss can log into Web3Forms (account is in their email or transferred)
- [ ] Boss has GoDaddy login
- [ ] Boss has access to info@tidalpm.com inbox
- [ ] All credentials documented in a password manager (1Password, Bitwarden, etc.) shared with boss

---

## Technical Reference (For Developers)

This section is for whoever inherits the codebase as a developer.

### Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components (Radix UI primitives)
- **CMS**: [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (modern fork of Decap CMS, drop-in compatible config)
- **Auth**: GitHub OAuth App + custom Netlify Functions OAuth proxy
- **Forms**: [Web3Forms](https://web3forms.com)
- **Deployment**: Netlify continuous deployment from GitHub `main` branch
- **DNS**: GoDaddy → A record `@` → `75.2.60.5` (Netlify), CNAME `www` → `tidal-realty-preview.netlify.app`

### Project structure
```
.
├── src/
│   ├── content/              ← All editable content (CMS reads/writes here)
│   │   ├── settings.json     ← Site-wide (header, footer, social, nav labels, logo)
│   │   ├── home.json         ← Home page
│   │   ├── services.json     ← List for Sale page ($999)
│   │   ├── rentals.json      ← List for Rent page ($399)
│   │   ├── asset-management.json  ← Property Management page
│   │   └── contact.json      ← Contact page
│   ├── pages/                ← React page components (read from content/)
│   ├── layouts/parts/        ← Header, Footer (read from settings.json)
│   ├── components/ui/        ← shadcn/ui components
│   └── ...
├── public/
│   ├── admin/
│   │   ├── index.html        ← Sveltia CMS entry point
│   │   └── config.yml        ← CMS schema (defines all editable fields)
│   ├── documents/            ← TREC PDF disclosures
│   ├── fonts/                ← Brand fonts (Founders Grotesk, Tiempos Headline)
│   ├── uploads/              ← CMS-uploaded images go here
│   ├── _headers              ← Netlify cache headers
│   └── _redirects            ← Netlify SPA fallback (/* → /index.html 200)
├── netlify/
│   └── functions/
│       ├── auth.js           ← OAuth start (redirects to GitHub)
│       └── callback.js       ← OAuth callback (exchanges code for token)
├── netlify.toml              ← Netlify build config
└── HANDOFF_GUIDE.md          ← This file
```

### How content is wired up

1. **Boss edits in CMS** at `/admin/` → Sveltia commits the JSON file change to GitHub via the GitHub API
2. **Netlify detects the push** to `main` → triggers a build
3. **Vite builds** the React app, which imports the JSON files at build time → produces `dist/client/`
4. **Netlify deploys** `dist/client/` → live in ~60 seconds

### How CMS auth works

1. User clicks "Sign in with GitHub" at `/admin/`
2. Sveltia CMS calls `https://tidalrealtyservices.com/.netlify/functions/auth`
3. That function (`netlify/functions/auth.js`) redirects to `https://github.com/login/oauth/authorize` with the Client ID
4. User authorizes → GitHub redirects to `https://tidalrealtyservices.com/.netlify/functions/callback?code=...`
5. The callback function exchanges the code for an access token using the Client ID + Secret
6. The token is sent back to the CMS via `window.opener.postMessage`
7. Sveltia uses the token to read/write files via GitHub API

**Required environment variables** (set in Netlify dashboard → Site settings → Environment variables):
- `GITHUB_CLIENT_ID` — Public OAuth App ID (`Ov23liFJcRDWp7FkAnXn`)
- `GITHUB_CLIENT_SECRET` — Secret OAuth credential (rotate if leaked)

The OAuth App config:
- Authorization callback URL: `https://tidalrealtyservices.com/.netlify/functions/callback`
- Homepage URL: `https://tidalrealtyservices.com`

### How forms work

The contact form (`src/pages/contact.tsx`) submits to `https://api.web3forms.com/submit` with:
- `access_key`: hardcoded in the source — currently `2939e2b8-059e-442c-ad94-3b050a44129e`
- All form field values
- `subject`: auto-built from name and interest
- `from_name`: identifies submissions in the inbox

Web3Forms emails submissions to whatever address is set in the Web3Forms dashboard (currently info@tidalpm.com).

### Local development
```bash
git clone https://github.com/kenechocoo/tidal-website-build.git
cd tidal-website-build
npm install
npm run dev          # local server at http://localhost:5173
```

To deploy manually:
```bash
npm run build
sed -i '' 's/ crossorigin//g' dist/client/index.html  # workaround for Netlify
netlify deploy --prod --dir=dist/client --functions=netlify/functions
```

But normally you don't need to — pushing to `main` auto-deploys.

### Adding new editable fields

To make some new piece of text editable:

1. Find it in the React component (e.g. `src/pages/index.tsx`)
2. Add a corresponding key in the matching JSON file (e.g. `src/content/home.json`)
3. Replace the hardcoded text in the React component with `{home.someNewField}`
4. Add a field definition in `public/admin/config.yml` so the CMS shows it
5. Test locally with `npm run dev`
6. Push to `main` → live in ~60s

### Future considerations

**If you want Squarespace-style visual editing:** Switch to or add **TinaCMS** alongside Sveltia. TinaCMS lets users click directly on text on the live site to edit it inline. Costs ~$29/month for business use. Both can coexist — Sveltia stays as a free fallback.

**If you want a property listings feature:** The orphaned `/listings` page exists but isn't linked. To resurrect it:
1. Add a link in the navigation in `src/content/settings.json` → `navigation`
2. Convert the hardcoded `properties` array in `src/pages/listings.tsx` to a folder collection in the CMS
3. Each property becomes its own JSON file in `src/content/properties/`
4. Boss can then add/remove/edit properties through the CMS

**If you want a blog:** Add a folder collection in `config.yml` for `src/content/posts/`, create a `src/pages/blog/` route to list and render them.

---

## Emergency Recovery

### "The live site is broken — what do I do?"

Don't panic. Every successful deploy is preserved on Netlify. You can roll back instantly:

1. Go to https://app.netlify.com/projects/tidal-realty-preview/deploys
2. Find the most recent deploy that has a **green checkmark** ("Published")
3. Click the **"..."** menu next to it
4. Click **"Publish deploy"**
5. Within 30 seconds, the live site is back to that working state

This **does not undo** any CMS changes — they're still in GitHub. It just makes Netlify serve an older build until you fix the underlying issue.

### "I broke the CMS config — boss can't log in"

1. Go to https://github.com/kenechocoo/tidal-website-build/commits/main/public/admin/config.yml
2. Find the previous working version of `config.yml`
3. Click "..." → "View file" → click the raw button → copy the contents
4. Edit `public/admin/config.yml` on GitHub directly with the working version
5. Commit → Netlify rebuilds → CMS works again

### "Domain stopped pointing to the site"

1. Check GoDaddy DNS settings — the A record for `@` should be `75.2.60.5`
2. Check Netlify domain settings — `tidalrealtyservices.com` should be added as the primary domain
3. SSL certificate issues usually self-heal in 24 hours; otherwise, click "Renew certificate" in Netlify

---

## Final notes from the original developer

- The site was built with substantial customization that doesn't exist in any template. Treat it as a custom property — small changes are safe, big architectural changes need a developer.
- **Don't disable the OAuth App** unless you're prepared for the CMS to stop working immediately.
- **Don't change the GitHub repo name** without updating `public/admin/config.yml` (it has the repo name hardcoded).
- **Web3Forms access key** is in the codebase. If you ever rotate it, update `src/pages/contact.tsx`.

For any questions or issues you can't solve from this guide, hire a freelance React/TypeScript developer — the codebase is small (~6 pages), well-organized, and shouldn't take more than 1-2 hours for someone competent to get oriented.

Good luck! 🌊
