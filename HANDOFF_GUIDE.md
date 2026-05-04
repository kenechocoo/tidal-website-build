# Tidal Realty Services: Website Handoff Guide

**Last updated:** April 2026

This document is your complete reference for the Tidal Realty Services website. It covers everything you need to keep the site running, edit content, and onboard new people.

> **TL;DR:** The website is live at https://tidalrealtyservices.com. Content is edited at https://tidalrealtyservices.com/admin/. It costs $0/month to run. All accounts are tied to **info@tidalpm.com**, so as long as you have access to that inbox, you have access to everything.

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [Day 1: First-Time Walkthrough](#day-1-first-time-walkthrough)
3. [Editing Content](#editing-content)
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
| Live website | https://tidalrealtyservices.com |
| Content editor (CMS) | https://tidalrealtyservices.com/admin/ |
| Form submissions go to | info@tidalpm.com |
| Hosting | Netlify (free tier) |
| Domain registrar | GoDaddy |
| Code repository | https://github.com/kenechocoo/tidal-website-build |
| Form service | Web3Forms (free tier, 250 submissions/month) |
| Master email for all accounts | **info@tidalpm.com** |

**Time from CMS save to live site:** about 60 seconds (Netlify rebuilds automatically).

---

## Day 1: First-Time Walkthrough

Read through this section the first time you log in. Walk through it slowly.

### Before you start

You'll need three things:

1. Access to the **info@tidalpm.com** inbox. This is the email tied to every account that runs the website (GitHub, Web3Forms, etc.), so you must be able to read mail sent to it.
2. A **GitHub account** signed in with info@tidalpm.com. This is the account that owns the repo (kenechocoo) and authorizes you to edit through the CMS. If you ever forget the password, reset it using info@tidalpm.com.
3. A few minutes to make a test edit and see it go live.

### First login

1. Open **https://tidalrealtyservices.com/admin/**
2. Click **"Sign in with GitHub"**
3. A popup window opens. Log in with the info@tidalpm.com GitHub account, then click **"Authorize"**.
4. The popup closes and the editor appears.

### What you'll see

A sidebar on the left with two main sections:

**⚙️ Site Settings.** Things that appear on every page (logo, phone, email, address, social media, navigation menu, footer disclosures).

**📄 Pages.** Content for each individual page:
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
5. Wait 60 to 90 seconds
6. Open https://tidalrealtyservices.com in a new tab, scroll to the footer, and you should see your test edit
7. **Don't forget to undo your test edit** when you're done!

If you see your edit on the live site, everything works. You're now editing the website.

---

## Editing Content

### The "View Live Page" link

At the top of each page editor there's a **"View live page →"** link. Click it to open the actual page in a new tab while you edit. This way you can see what your changes will look like.

### Saving and publishing

Click **"Save"** (top right of editor). Your change commits to GitHub, Netlify rebuilds the site automatically, and the change is live in about 60 seconds.

The editor uses Sveltia CMS, which auto-saves drafts. Your work isn't lost if you close the tab.

### Field types you'll encounter

| Type | What it looks like | What to do |
|---|---|---|
| Text field | Single-line input | Type the new text |
| Long text | Multi-line box | Type a paragraph |
| Image | Drag-and-drop area | Drag a file in or click to browse. Recommended: JPG/PNG, under 2MB |
| List | A list of items with "Add" buttons | Click "Add" to add an item, drag to reorder, click trash to delete |
| Object | A group of related fields | Click to expand or collapse |
| Dropdown | Select menu | Pick from the options |

### Sections that take some thought

Some pages have a heading split into a "regular part" and an "italic part," like "Compare our *fees*". The CMS shows two fields for these:

- **Heading, Regular Part:** Compare our
- **Heading, Italic Part:** fees

This lets you change either half. Whatever you put in the italic field appears in italics on the live page.

Some descriptions have a "highlight phrase" that's emphasized. The highlight phrase MUST exactly match a phrase that appears in the description above. Example:

- Description: *"Most agents charge thousands... we offer a **full-service MLS listing for just $999**."*
- Highlight phrase: `full-service MLS listing for just $999`

If you change the description but the highlight phrase no longer appears in it, the styling won't apply. Either update both fields together, or just edit the description without changing the highlighted phrase.

### Tips

- **Make small changes and save often.** It's easier to undo if something looks wrong.
- **Don't change "URL" or "Link" fields** unless you understand what they do. These connect pages together (for example, "/contact" sends people to the Contact page).
- **Always preview before publishing.** Click "View live page →" to see what changed.
- **For images:** use clear, high-quality photos. The CMS uploads them to your GitHub repo automatically.

---

## What's Editable vs. What's Not

### ✅ You CAN edit (no developer needed)

**Site-wide (every page):**
- Business name
- Logo image (upload a new one)
- Tagline
- Phone number
- Email address
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

1. They need a free GitHub account at https://github.com/signup.
2. Add them as a collaborator to the repo:
   - Go to https://github.com/kenechocoo/tidal-website-build/settings/access
   - Click **"Add people"**, type their GitHub username, choose **"Write"** permission
   - Click **"Add to repository"**
3. They accept the invite from the email GitHub sends them.
4. They can now log in at https://tidalrealtyservices.com/admin/

To remove an editor: same Access page, click the trash icon next to their name.

---

## Troubleshooting

### "The CMS won't let me log in"

1. Confirm your GitHub account is listed at https://github.com/kenechocoo/tidal-website-build/settings/access
2. Try a different browser or an incognito window.
3. Check that the GitHub OAuth App still exists at https://github.com/settings/developers (named "Tidal Realty Services CMS").

### "I edited something but the site didn't update"

1. Wait 60 to 90 seconds. Netlify build takes time.
2. Hard refresh the page (Ctrl+Shift+R on Windows, ⌘+Shift+R on Mac) to bust the cache.
3. Check the Netlify deploys page: https://app.netlify.com/projects/tidal-realty-preview/deploys
   - Latest deploy should say "Published" with a green checkmark.
   - If it says "Failed", the build broke. See [Emergency Recovery](#emergency-recovery).
4. Confirm you actually clicked **Save** (top-right of editor).

### "Contact form submissions stopped arriving"

1. Check the spam folder in info@tidalpm.com.
2. Log into https://web3forms.com and check your submission count (free tier is 250 submissions per month).
3. If quota is exceeded, upgrade to Web3Forms paid (about $5/month).
4. Verify the access key in `src/pages/contact.tsx` still matches your Web3Forms account.

### "The live site is showing an error or is broken"

See [Emergency Recovery](#emergency-recovery) below.

### "I deleted something by accident"

Every CMS save commits to GitHub, so nothing is permanently lost.

1. Go to https://github.com/kenechocoo/tidal-website-build/commits/main
2. Find the commit before your accidental change.
3. Click "..." on that commit, then "Browse files", then find the file.
4. Copy its contents and paste them back into the CMS.

---

## Costs & Subscriptions

### Current monthly cost: **$0**

| Service | What | Cost |
|---|---|---|
| Netlify | Hosting + functions | Free tier (covers our usage easily) |
| GitHub | Code repository | Free |
| Web3Forms | Contact form delivery | Free (250 submissions/month) |
| Sveltia CMS | Content editor | Free, open source |

### Yearly cost: **about $15**

| Service | What | Cost |
|---|---|---|
| GoDaddy | Domain registration | About $15/year for tidalrealtyservices.com |

### When you might need to upgrade

- **Web3Forms:** if you ever exceed 250 form submissions in a month, upgrade to about $5/month.
- **Netlify:** if you ever exceed 100GB bandwidth/month or 300 build minutes/month, upgrade to about $19/month. Very unlikely for a small business site.
- **Visual editing:** if you ever want Squarespace-style click-to-edit visual editing, switch to TinaCMS (about $29/month). See "Future considerations" in the developer section.

---

## Account Inventory & Credentials

**Critical:** every account that runs the website is tied to **info@tidalpm.com**. As long as you have access to that inbox, you can recover any password and access every service. Save these login pages and your passwords in a password manager (1Password, Bitwarden, Apple Keychain, etc.).

| Service | URL | Email on file | What it controls |
|---|---|---|---|
| info@tidalpm.com inbox | (Gmail, Outlook, or wherever this inbox is hosted) | itself | Master recovery email for all other accounts |
| GitHub | https://github.com/kenechocoo/tidal-website-build | info@tidalpm.com | All website code + content |
| GitHub OAuth App | https://github.com/settings/developers | info@tidalpm.com | CMS login |
| Netlify | https://app.netlify.com/projects/tidal-realty-preview | (linked to the GitHub account) | Hosting, domain, env vars |
| Web3Forms | https://web3forms.com | info@tidalpm.com | Contact form delivery |
| GoDaddy | https://dcc.godaddy.com (search for tidalrealtyservices.com) | (your account) | Domain |

### What you need to do right now

1. Confirm you can log into **info@tidalpm.com**. If you can't, fix that first because every other recovery flow needs it.
2. Log into **GitHub** at https://github.com using info@tidalpm.com. If you don't remember the password, click "Forgot password?" and reset it via that inbox.
3. Log into **Netlify** at https://app.netlify.com. It uses GitHub for sign-in by default, so once GitHub works, Netlify works.
4. Log into **Web3Forms** at https://web3forms.com using info@tidalpm.com.
5. Log into **GoDaddy** at https://dcc.godaddy.com.
6. Save all six logins in a password manager. If anyone else needs access in the future, share through the password manager.

### If you ever lose access to info@tidalpm.com

That would be the worst case. Without that inbox, you can't reset passwords on GitHub, Web3Forms, or any service tied to it. Treat info@tidalpm.com like the master key to the website. Make sure two-factor authentication is enabled on it, and that recovery codes are saved somewhere safe (printed and locked in a drawer is fine).

---

## Technical Reference (For Developers)

This section is for whoever inherits the codebase as a developer (you, a future hire, or a freelancer).

### Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui components (Radix UI primitives)
- **CMS:** Sveltia CMS (modern fork of Decap CMS, drop-in compatible config)
- **Auth:** GitHub OAuth App + custom Netlify Functions OAuth proxy
- **Forms:** Web3Forms
- **Deployment:** Netlify continuous deployment from GitHub `main` branch
- **DNS:** GoDaddy with A record `@` pointing to `75.2.60.5` (Netlify), CNAME `www` pointing to `tidal-realty-preview.netlify.app`

### Project structure

```
.
├── src/
│   ├── content/                   ← All editable content (CMS reads/writes here)
│   │   ├── settings.json          ← Site-wide (header, footer, social, nav labels, logo)
│   │   ├── home.json              ← Home page
│   │   ├── services.json          ← List for Sale page ($999)
│   │   ├── rentals.json           ← List for Rent page ($399)
│   │   ├── asset-management.json  ← Property Management page
│   │   └── contact.json           ← Contact page
│   ├── pages/                     ← React page components (read from content/)
│   ├── layouts/parts/             ← Header, Footer (read from settings.json)
│   ├── components/ui/             ← shadcn/ui components
│   └── ...
├── public/
│   ├── admin/
│   │   ├── index.html             ← Sveltia CMS entry point
│   │   └── config.yml             ← CMS schema (defines all editable fields)
│   ├── documents/                 ← TREC PDF disclosures
│   ├── fonts/                     ← Brand fonts (Founders Grotesk, Tiempos Headline)
│   ├── uploads/                   ← CMS-uploaded images go here
│   ├── _headers                   ← Netlify cache headers
│   └── _redirects                 ← Netlify SPA fallback (/* → /index.html 200)
├── netlify/
│   └── functions/
│       ├── auth.js                ← OAuth start (redirects to GitHub)
│       └── callback.js            ← OAuth callback (exchanges code for token)
├── netlify.toml                   ← Netlify build config
└── HANDOFF_GUIDE.md               ← This file
```

### How content is wired up

1. The boss edits in the CMS at `/admin/`. Sveltia commits the JSON file change to GitHub via the GitHub API.
2. Netlify detects the push to `main` and triggers a build.
3. Vite builds the React app, which imports the JSON files at build time, producing `dist/client/`.
4. Netlify deploys `dist/client/`. The site goes live in about 60 seconds.

### How CMS auth works

1. User clicks "Sign in with GitHub" at `/admin/`.
2. Sveltia CMS calls `https://tidalrealtyservices.com/.netlify/functions/auth`.
3. That function (`netlify/functions/auth.js`) redirects to `https://github.com/login/oauth/authorize` with the Client ID.
4. User authorizes, GitHub redirects to `https://tidalrealtyservices.com/.netlify/functions/callback?code=...`.
5. The callback function exchanges the code for an access token using the Client ID + Secret.
6. The token is sent back to the CMS via `window.opener.postMessage`.
7. Sveltia uses the token to read and write files via the GitHub API.

**Required environment variables** (set in Netlify dashboard at Site settings → Environment variables):

- `GITHUB_CLIENT_ID`: public OAuth App ID (currently `Ov23liFJcRDWp7FkAnXn`)
- `GITHUB_CLIENT_SECRET`: secret OAuth credential (rotate if leaked)

The OAuth App config:

- Authorization callback URL: `https://tidalrealtyservices.com/.netlify/functions/callback`
- Homepage URL: `https://tidalrealtyservices.com`

### How forms work

The contact form (`src/pages/contact.tsx`) submits to `https://api.web3forms.com/submit` with:

- `access_key`: hardcoded in the source. Currently `2939e2b8-059e-442c-ad94-3b050a44129e`.
- All form field values.
- `subject`: auto-built from name and interest.
- `from_name`: identifies submissions in the inbox.

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

You usually don't need to deploy manually because pushing to `main` auto-deploys.

### Adding new editable fields

To make a new piece of text editable through the CMS:

1. Find the text in the React component (e.g. `src/pages/index.tsx`).
2. Add a corresponding key in the matching JSON file (e.g. `src/content/home.json`).
3. Replace the hardcoded text in the React component with `{home.someNewField}`.
4. Add a field definition in `public/admin/config.yml` so the CMS shows it.
5. Test locally with `npm run dev`.
6. Push to `main`. The change goes live in about 60 seconds.

### Future considerations

**Squarespace-style visual editing.** Switch to or add TinaCMS alongside Sveltia. TinaCMS lets users click directly on text on the live site to edit it inline. Costs about $29/month for business use. Both CMSs can coexist. Sveltia stays as a free fallback.

**Property listings feature.** The orphaned `/listings` page exists but isn't linked. To resurrect it:

1. Add a link in the navigation in `src/content/settings.json` under `navigation`.
2. Convert the hardcoded `properties` array in `src/pages/listings.tsx` to a folder collection in the CMS.
3. Each property becomes its own JSON file in `src/content/properties/`.
4. The boss can then add, remove, or edit properties through the CMS.

**Blog.** Add a folder collection in `config.yml` for `src/content/posts/`, then create a `src/pages/blog/` route to list and render them.

---

## Emergency Recovery

### "The live site is broken, what do I do?"

Don't panic. Every successful deploy is preserved on Netlify. You can roll back instantly:

1. Go to https://app.netlify.com/projects/tidal-realty-preview/deploys
2. Find the most recent deploy that has a **green checkmark** ("Published").
3. Click the **"..."** menu next to it.
4. Click **"Publish deploy"**.
5. Within 30 seconds, the live site is back to that working state.

This does not undo any CMS changes. They're still in GitHub. It just makes Netlify serve an older build until you fix the underlying issue.

### "I broke the CMS config, no one can log in"

1. Go to https://github.com/kenechocoo/tidal-website-build/commits/main/public/admin/config.yml
2. Find the previous working version of `config.yml`.
3. Click "...", then "View file", then click the raw button and copy the contents.
4. Edit `public/admin/config.yml` on GitHub directly with the working version.
5. Commit the change. Netlify rebuilds and the CMS works again.

### "The domain stopped pointing to the site"

1. Check GoDaddy DNS settings. The A record for `@` should be `75.2.60.5`.
2. Check Netlify domain settings. `tidalrealtyservices.com` should be added as the primary domain.
3. SSL certificate issues usually self-heal in 24 hours. Otherwise, click "Renew certificate" in Netlify.

---

## Final notes from the original developer

- The site was built with substantial customization that doesn't exist in any template. Treat it as a custom property. Small changes are safe, big architectural changes need a developer.
- Don't disable the OAuth App unless you're prepared for the CMS to stop working immediately.
- Don't change the GitHub repo name without updating `public/admin/config.yml`. The repo name is hardcoded in there.
- The Web3Forms access key lives in the codebase. If you ever rotate it, update `src/pages/contact.tsx`.
- Keep info@tidalpm.com locked down with two-factor authentication. It's the master key to every account.

For any questions or issues you can't solve from this guide, hire a freelance React/TypeScript developer. The codebase is small (about 6 pages), well-organized, and shouldn't take more than 1 to 2 hours for someone competent to get oriented.

Good luck! 🌊
