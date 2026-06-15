# Holler & Hellfire — Official Website

Static HTML site for **Kaylin Renea / Dixie Deadshot**.
Five novels, five albums, one Pike County corridor.

---

## ⭐ HOW TO UPDATE URLS — READ THIS FIRST

**You edit ONE file:** `config.js`

That file contains every URL the site uses — audio, lyric PDFs, novel PDFs,
synopsis sheets, GitHub/Netlify links, contact emails. Open it, paste the
URLs in the right slots, save, push to GitHub. Done. No HTML edits.

```js
window.HH_CONFIG = {
  audio: {
    vol1:          "PASTE_YOUR_ONEDRIVE_LINK_HERE",
    deadReckoning: "PASTE_YOUR_ONEDRIVE_LINK_HERE",
    vol2:          "PASTE_YOUR_ONEDRIVE_LINK_HERE",
    // ... etc
  },
  lyrics: {
    vol1: "PASTE_YOUR_ONEDRIVE_LINK_HERE",
    // ... etc
  },
  // ...
};
```

If a URL is left blank, the button stays on the page but shows
"coming soon" and alerts if clicked. You can fill them in over time.

---

## 📁 FILE STRUCTURE

```
holler-hellfire-site-v2/
├── config.js              ← YOU EDIT THIS (all URLs live here)
├── styles.css             ← shared design tokens & layout
├── index.html             ← landing page (series overview)
├── books.html             ← novel catalog
├── music.html             ← album catalog
├── epk.html               ← electronic press kit
├── netlify.toml           ← Netlify deployment config
├── _redirects             ← clean-URL rules
├── README.md              ← this file
└── images/                ← all visual assets (committed to repo)
    ├── couples/           ← book couple art (5 books)
    ├── heroines/          ← character portraits (12)
    ├── watchers/          ← chief Watcher portraits (11)
    └── posters/           ← banner + logo
```

---

## 🚀 DEPLOYMENT — STEP BY STEP

### 1. Create the GitHub repo

```bash
cd holler-hellfire-site-v2
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/holler-hellfire-site.git
git push -u origin main
```

### 2. Connect to Netlify

1. Go to <https://app.netlify.com/start>
2. Click **"Import from Git"** → choose **GitHub** → pick the repo
3. Build settings:
   - **Build command**: *(leave blank — no build needed)*
   - **Publish directory**: `.` *(the root)*
4. Click **Deploy site**

Netlify will give you a URL like `https://random-name-12345.netlify.app`.
Rename it under **Site settings → Site information → Change site name**.

### 3. Update `config.js` with the URLs

Open `config.js` and fill in:

- **`site.netlify`** — your Netlify URL
- **`site.github`** — your GitHub repo URL
- **`audio.*`** — OneDrive direct-download links for the 5 audio files
- **`lyrics.*`** — OneDrive links for the 4 lyric PDFs
- **`books.*`** — OneDrive links for novel PDFs (when ready)
- **`synopses.*`** — OneDrive links for one-page synopsis sheets

### 4. Push the update

```bash
git add config.js
git commit -m "Add asset URLs"
git push
```

Netlify auto-deploys on every push. The site updates in ~30 seconds.

---

## 📎 ONEDRIVE DIRECT-DOWNLOAD TIP

When you share a file on OneDrive, the URL looks like:

```
https://1drv.ms/u/s!XXXXXXXX?e=abcdef         ← opens a preview page
```

To make it a **direct download** (so clicking the button on the site
downloads the file instead of opening a preview), replace the
`?e=...` with `?download=1`:

```
https://1drv.ms/u/s!XXXXXXXX?download=1       ← downloads directly
```

For audio files, the preview links also work — they'll open OneDrive's
audio player. Use whichever you prefer.

---

## 🎨 ADDING / EDITING CONTENT

| Need to... | Edit... |
|---|---|
| Change a URL | `config.js` |
| Change a book description | `books.html` |
| Change an album tracklist | `music.html` |
| Change the bio | `epk.html` |
| Change contact emails | `config.js` → `contact:` |
| Add a new image | drop it in `images/`, reference by path |
| Change colors / fonts | `styles.css` → `:root { --gold: ... }` |

---

## 🔗 DESIGN TOKENS (CSS variables, edit in `styles.css`)

```css
--bg:          #04030a   /* deep near-black background       */
--gold:        #c9943a   /* primary gold                     */
--gold-bright: #e8b040   /* lighter gold for accents         */
--gold-dark:   #8a6018   /* darker gold for secondary text   */
--cream:       #e8d5b0   /* warm off-white for headings      */
--blood:       #7a0000   /* deep red                         */
--crimson:     #8B0000   /* brighter red                     */
--rust:        #4a1a00   /* burnt rust accent                */
```

Fonts (Google Fonts, loaded automatically):
- **Cinzel Decorative** — display / hero titles
- **IM Fell English SC** — accent labels (small caps)
- **Cinzel** — section headers
- **Cormorant Garamond** — body text

---

## 📦 INVENTORY OF LINKED ASSETS

The site is wired to handle this catalog. Fill in URLs in `config.js`
as files become available.

| Slot | Asset | Status |
|---|---|---|
| `audio.vol1` | *Fallin' For A Fallen* — 8 tracks, 29:19 | ✅ Recorded |
| `audio.deadReckoning` | *Dead Reckoning EP* — 5 tracks, 23:35 | ✅ Recorded |
| `audio.vol2` | *The Devil's in the Details* — 10 tracks, 39:49 | ✅ Recorded |
| `audio.vol3` | *Strike Me Down* — 10 tracks, 33:38 | ✅ Recorded |
| `audio.vol4` | *All Hell Breaks Loose* — 10 tracks, 37:00 | ✅ Recorded |
| `audio.vol5` | *Written in the Stars* — TBD | 📋 Forthcoming |
| `lyrics.vol1` | Vol. I lyric PDF — 27 pp | ✅ Built |
| `lyrics.vol2` | Vol. II lyric PDF — 38 pp | ✅ Built |
| `lyrics.vol3` | Vol. III lyric PDF — 27 pp | ✅ Built |
| `lyrics.vol4` | Vol. IV lyric PDF — 29 pp | ✅ Built |
| `lyrics.vol5` | Vol. V lyric PDF | 📋 Forthcoming |
| `books.book1` | *Fallin' For A Fallen* novel | 📋 Drafted |
| `books.book2` | *The Devil's in the Details* — 193 pp | ✅ PDF built |
| `books.book3` | *Strike Me Down* — 162 pp | ✅ PDF built |
| `books.book4` | *All Hell Breaks Loose* — 229 pp | ✅ PDF built |
| `books.book5` | *Written in the Stars* | 🔨 In progress |
| `synopses.book2` | One-page synopsis sheet | ✅ Built |
| `synopses.book3` | One-page synopsis sheet | ✅ Built |
| `synopses.book4` | One-page synopsis sheet | ✅ Built |

---

## 📝 LOCAL TESTING

To preview the site on your own machine before deploying:

```bash
cd holler-hellfire-site-v2

# Option A — Python (works everywhere)
python3 -m http.server 8000

# Option B — Node (if you have it)
npx serve .
```

Then open <http://localhost:8000> in your browser.

You can also just double-click `index.html` to open it directly,
but some browsers block `config.js` loading from local files.
The Python server avoids that.

---

## 🛟 SUPPORT

For corrections or new features, edit the HTML files directly —
the structure is plain, hand-written HTML with one CSS file and
one config file. No frameworks, no build step, no surprises.

Pikeville, Kentucky · 2026
*The corridor was always there.*
