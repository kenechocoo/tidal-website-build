# Tidal Realty Services — Handoff Guide

This document explains how the website works, how to edit content, and how to maintain it going forward.

---

## 🌐 The Website

- **Live URL**: https://tidalrealtyservices.com
- **Admin / Content Editor**: https://tidalrealtyservices.com/admin/
- **Hosting**: Netlify (free tier)
- **Domain**: GoDaddy (separate account)
- **Code**: GitHub repo at https://github.com/kenechocoo/tidal-website-build

---

## ✏️ How to edit content (for the boss)

### Step 1: Log in
1. Open **https://tidalrealtyservices.com/admin/**
2. Click **Sign in with GitHub**
3. Use your GitHub account (must be a collaborator on the repo — see "Adding new editors" below)

### Step 2: Edit content
The sidebar shows two main sections:
- **⚙️ Site Settings** — for things that appear on EVERY page (phone, email, address, social media URLs, navigation menu, footer disclosures)
- **📄 Pages** — for content specific to each page

Click any item to open the editor. Each field has a hint explaining where it appears on the page. There's also a "View live page →" link at the top of each page editor — click that to open the live site in a new tab while you edit.

### Step 3: Save and publish
After making changes:
1. Click the **Save** button (top right)
2. The change commits to GitHub automatically
3. Netlify rebuilds the site automatically (~60 seconds)
4. Refresh the live site to see your change

### What you CAN edit
- ✅ All text on every page (headlines, descriptions, prices, button labels)
- ✅ Phone, email, address, social media URLs
- ✅ Navigation menu labels
- ✅ Photos (upload new ones via the image fields)
- ✅ Bullet lists (add/remove items)
- ✅ Pricing tables and rows

### What you CANNOT edit (without a developer)
- ❌ Page layout, colors, or fonts
- ❌ Adding entirely new pages
- ❌ Custom code, animations, or interactions
- ❌ Form submission destination (currently goes to info@tidalpm.com via Web3Forms)
- ❌ The TREC disclosure PDF files themselves (only the link labels)

### Tips
- **Always click "View live page →"** before editing to see what you're changing
- **Make small changes and save often** — easier to undo if something looks wrong
- **Don't change "URL" or "Link" fields** unless you know what you're doing — these connect pages together
- **For "highlight phrases"** — these MUST exactly match a phrase that appears in the description above. The matching phrase appears in bold/italic.

---

## 🛠️ Technical details (for whoever inherits this)

### Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **CMS**: Sveltia CMS (a fork of Decap CMS)
- **Auth**: GitHub OAuth via Netlify Functions
- **Forms**: Web3Forms (https://web3forms.com)
- **Deployment**: Netlify (continuous deployment from GitHub `main` branch)
- **Domain**: tidalrealtyservices.com on GoDaddy (DNS pointed at Netlify)

### How content works
All editable content lives in `src/content/*.json`. The React components import these JSON files and render their content. The CMS at `/admin/` writes to these files via the GitHub API.

```
src/content/
├── settings.json              ← Site-wide (header, footer, social, etc.)
├── home.json                  ← Home page
├── services.json              ← List for Sale ($999) page
├── rentals.json               ← List for Rent ($399) page
├── asset-management.json      ← Property Management page
└── contact.json               ← Contact page
```

### How the CMS auth works
- A GitHub OAuth App was created in the kenechocoo GitHub account.
- Two Netlify Functions handle the OAuth flow:
  - `netlify/functions/auth.js` — redirects user to GitHub
  - `netlify/functions/callback.js` — exchanges code for token
- Two Netlify env vars store the credentials: `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`
- Sveltia CMS config is at `public/admin/config.yml`

### How forms work
- Form on `/contact` page submits to **Web3Forms** (https://api.web3forms.com/submit)
- Uses access key in `src/pages/contact.tsx` — currently `2939e2b8-059e-442c-ad94-3b050a44129e`
- Submissions are emailed to `info@tidalpm.com`
- Free tier: 250 submissions/month

### Deployment
- **Auto-deploys on push to GitHub `main`** (Netlify continuous deployment)
- Build command: `npm run build`
- Publish directory: `dist/client`
- Manual deploy: `netlify deploy --prod --dir=dist/client`

---

## 👥 Adding new editors

For the boss to add new people who can edit the website:

1. **The new editor needs a free GitHub account** at https://github.com/signup
2. **Boss adds them as collaborator** to the repo:
   - Go to https://github.com/kenechocoo/tidal-website-build/settings/access
   - Click "Add people" → enter their GitHub username → "Write" permission
3. **They accept the invite** in their email
4. **They can now log in** at https://tidalrealtyservices.com/admin/

---

## 🚨 What to do if something breaks

### "The CMS won't let me log in"
- Check your GitHub account is a collaborator on the repo
- Try a different browser or incognito window
- Check the OAuth App at https://github.com/settings/developers still exists

### "I edited something but the site didn't update"
- Wait 60-90 seconds (Netlify build takes time)
- Check the Netlify deploys page for errors: https://app.netlify.com/projects/tidal-realty-preview/deploys
- Make sure you actually clicked "Save" (top-right of the editor)

### "Contact form submissions stopped arriving"
- Check spam folder in info@tidalpm.com
- Log into https://web3forms.com to check submission count (250/month limit on free tier)
- Verify the access key in `src/pages/contact.tsx` matches your Web3Forms account

### "The live site is showing an error"
- Check Netlify deploy status — last deploy may have failed
- Roll back: in Netlify deploys page, click "..." on a previous successful deploy → "Publish deploy"
- This restores the old version while you fix the broken one

---

## 💰 Costs

Currently $0/month:
- Netlify hosting: free tier (more than enough)
- GitHub: free for public repos
- Web3Forms: free tier (250 submissions/month)
- Domain: ~$15/year on GoDaddy (already paid)

If contact form submissions ever exceed 250/month, upgrade Web3Forms (~$5/month).

---

## 📞 Service accounts and credentials

| Service | URL | Owner |
|---|---|---|
| GitHub repo | github.com/kenechocoo/tidal-website-build | kenechocoo |
| Netlify project | app.netlify.com/projects/tidal-realty-preview | (linked to kenechocoo's GitHub) |
| GoDaddy domain | dcc.godaddy.com → tidalrealtyservices.com | (your account) |
| Web3Forms | web3forms.com | (your account) |
| GitHub OAuth App | github.com/settings/developers | kenechocoo |

Make sure the boss has access to all of these accounts before any handoff.
