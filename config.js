/* =======================================================================
   Holler & Hellfire — Full Site Configuration
   -----------------------------------------------------------------------
   Single source of truth for hollerandhellfire.net
   Covers: site identity, navigation, music, books, merch, social,
           email capture, blog posts, and page-level helpers.

   Usage on any page:
     <script src="/config.js"></script>
   Then call any helper or read any constant below.
   ======================================================================= */


/* -----------------------------------------------------------------------
   SITE IDENTITY
   ----------------------------------------------------------------------- */

const SITE = {
  title:      "Holler & Hellfire",
  tagline:    "Appalachian Gothic. Outlaw Country. Pike County, Kentucky.",
  author:     "Kaylin Renea",
  artistName: "Dixie Deadshot",
  label:      "Holler & Hellfire Records",
  baseUrl:    "https://hollerandhellfire.net",   // no trailing slash
  logoPath:   "/assets/images/banners_logos/main.png",          // update path as needed
  faviconPath:"/assets/images/favicon.ico",

  // Email capture — paste your MailerLite / Kit (ConvertKit) form POST URL
  emailEndpoint: "",

  // Landing page / free prequel offer (used in blog CTAs and nav)
  freeOfferUrl:  "/free-story.html",

  // GoFundMe campaign
  gofundmeUrl: "https://www.gofundme.com/",  // paste full URL when live

  // Default SEO fallback (individual pages should override)
  seo: {
    description: "Holler & Hellfire is an Appalachian Gothic multimedia universe spanning 39 original novels, an outlaw country music catalog, and a streaming series in development.",
    keywords:    "holler and hellfire, dixie deadshot, appalachian gothic, outlaw country, folk horror, pike county, kaylin renea, southern gothic, original novels, holler and hellfire records"
  }
};


/* -----------------------------------------------------------------------
   NAVIGATION
   Links used to build the header/footer nav on every page.
   ----------------------------------------------------------------------- */

const NAV = [
  { label: "Home",     href: "/index.html" },
  { label: "Universe", href: "/bible.html" },
  { label: "Music",    href: "/holler_hellfire_records.html" },
  { label: "Books",    href: "/books.html" },
  { label: "Author",   href: "/kaylin_renea_author.html" },
  { label: "Merch",    href: "/store.html" },
  { label: "Blog",     href: "/blog.html" },
  { label: "EPK",      href: "/epk.html" },
  { label: "WEBBS ENTREPENURESHIP",   href: "/webbs_entrepenureship.html" },
  { label: "Brian Lee - Founder",  href: "/brian_lee_webb_website.html" }
];


/* -----------------------------------------------------------------------
   SOCIAL LINKS
   ----------------------------------------------------------------------- */

const SOCIAL = {
  youtube:    "https://www.youtube.com/@dixiedeadshot",   // update handle
  tiktok:     "https://www.tiktok.com/@dixiedeadshot",
  instagram:  "https://www.instagram.com/dixiedeadshot",
  facebook:   "",
  spotify:    "",     // add when distributed
  appleMusic: "",
  amazon:     "",     // amazon music / author page
  goodreads:  ""
};


/* -----------------------------------------------------------------------
   MUSIC CATALOG
   Albums appear in the order listed. Tracks list under each album.
   status: "released" | "unreleased" | "presale"
   ----------------------------------------------------------------------- */

const MUSIC = [
  {
    id:          "dead-reckoning-ep",
    title:       "Dead Reckoning EP",
    artist:      "Dixie Deadshot",
    year:        2026,
    status:      "released",          // primary publicly releasable album
    cover:       "/assets/images/album_art/deadreckoning.jpeg",
    description: "Five tracks of outlaw grit and hellfire truth from Pike County.",
    tracks: [
      { n: 1, title: "Fuck Around & Find Out" },
      { n: 2, title: "Whiskey & Warrants" },
      { n: 3, title: "Gravel Road Gangster" },
      { n: 4, title: "Dolly Never Packed a Strap" },
      { n: 5, title: "Coal Dust & Casings" }
    ],
    links: {
      youtube:    "",   // playlist or album video
      spotify:    "",
      appleMusic: "",
      amazon:     ""
    }
  },
  {
    id:     "outlaw-heaven",
    title:  "Outlaw Heaven",
    artist: "Dixie Deadshot",
    year:   2025,
    status: "unreleased",
    cover:  "/assets/images/album_art/outtlaw_heaven.png",
    description: "",
    tracks: [],
    links:  { youtube: "", spotify: "", appleMusic: "", amazon: "" }
  },
  {
    id:     "strike-me-down",
    title:  "Strike Me Down",
    artist: "Dixie Deadshot",
    year:   2025,
    status: "unreleased",
    cover:  "/assets/images/album_art/strike_album.png",
    description: "",
    tracks: [],
    links:  { youtube: "", spotify: "", appleMusic: "", amazon: "" }
  },
  {
    id:     "written-in-the-stars",
    title:  "Written in the Stars",
    artist: "Dixie Deadshot",
    year:   2025,
    status: "unreleased",
    cover:  "/assets/images/album_art/written_album.png",
    description: "",
    tracks: [],
    links:  { youtube: "", spotify: "", appleMusic: "", amazon: "" }
  },
  {
    id:     "reflection",
    title:  "Reflection",
    artist: "Dixie Deadshot",
    year:   2025,
    status: "unreleased",
    cover:  "/assets/images/album_art/reflection_album.png",
    description: "",
    tracks: [],
    links:  { youtube: "", spotify: "", appleMusic: "", amazon: "" }
  }
  // Add remaining albums as needed
];


/* -----------------------------------------------------------------------
   BOOKS / NOVELS
   The H&H Universe spans 39 novels. List them here.
   status: "available" | "preorder" | "upcoming"
   vol: volume number within the series
   ----------------------------------------------------------------------- */

const BOOKS = [
  {
    id:          "fallin-for-a-fallen",
    vol:         1,
    title:       "Fallin' For A Fallen",
    series:      "Holler & Hellfire Universe",
    author:      "Kaylin Renea",
    year:        2026,
    status:      "preorder",        // launching at end of 30-day campaign
    cover:       "/assets/images/book art/fallinforafallen.png",
    description: "The novel that started it all. Pike County, Kentucky — where the Veil runs thin and the Calhoun women have always known why.",
    isbn:        "",
    links: {
      amazon:    "",
      goodreads: "",
      direct:    ""     // your own store/Gumroad if applicable
    }
  }
  // Add Vol. 2–39 here as they become available
];


/* -----------------------------------------------------------------------
   KEY CHARACTERS
   Used for About/Universe pages, press kits, etc.
   ----------------------------------------------------------------------- */

const CHARACTERS = [
  { name: "Raelee Calhoun",  alias: "Dixie Deadshot",  role: "Protagonist" },
  { name: "Brian Lee",       alias: "",                 role: "Core cast" },
  { name: "Azazel",          alias: "",                 role: "Antagonist / force" },
  { name: "Bone Mother",     alias: "",                 role: "Mythic figure" },
  { name: "Samyaza",         alias: "",                 role: "Core cast" },
  { name: "Saraquel",        alias: "",                 role: "Core cast" },
  { name: "Mreza",           alias: "",                 role: "Core cast" },
  { name: "Leviathan",       alias: "",                 role: "Antagonist / force" }
];


/* -----------------------------------------------------------------------
   MERCH
   Add products as they go live.
   ----------------------------------------------------------------------- */

const MERCH = [
  // {
  //   id:       "deadshot-tee",
  //   title:    "Dixie Deadshot Logo Tee",
  //   price:    25.00,
  //   image:    "/assets/images/merch/deadshot-tee.jpg",
  //   storeUrl: "https://your-store.com/products/deadshot-tee",
  //   status:   "available"   // "available" | "sold-out" | "coming-soon"
  // }
];


/* -----------------------------------------------------------------------
   STREAMING SERIES
   Pre-production info block for the landing/about pages.
   ----------------------------------------------------------------------- */

const SERIES = {
  title:       "Holler & Hellfire",
  logline:     "An Appalachian Gothic streaming series set in Pike County, Kentucky — where the Veil is breaking and the women who've kept it shut are running out of time.",
  status:      "Pre-production",
  updatesUrl:  ""   // link to newsletter, mailing list, or press page
};


/* -----------------------------------------------------------------------
   BLOG POSTS
   Each entry:
     slug         unique url-safe id (becomes ?post=slug)
     title        H1 + <title>
     description  meta description (~150 chars)
     date         ISO "YYYY-MM-DD"
     keywords     comma string
     cover        path to header image ("" if none)
     readMins     estimated read time
     body         HTML string of post content
   ----------------------------------------------------------------------- */

const BLOG_POSTS = [
  {
    slug:        "appalachian-folk-magic-behind-holler-and-hellfire",
    title:       "The Real Appalachian Folk Magic Behind Holler & Hellfire",
    description: "The Southern gothic world of Holler & Hellfire is built on real Appalachian folk magic and mountain belief. What's true, what's invented, and where to start reading.",
    date:        "2026-05-28",
    keywords:    "appalachian folk magic, southern gothic, folk horror, mountain folklore, holler and hellfire, fantasy books",
    cover:       "",
    readMins:    5,
    body: `
      <p>People who read the first pages of <em>Holler &amp; Hellfire</em> tend to ask the same question: how much of this is real?</p>
      <p>The honest answer is that the places are invented but the beliefs are not. The mountain culture that runs through these books&mdash;the women who read the signs, the porch knowledge passed grandmother to granddaughter, the sense that some doors are better left shut&mdash;comes from a tradition that genuinely shaped life across the Appalachian region for generations.</p>
      <p>This world didn't start with a magic system I designed at a desk. It started with the things people in the hills actually held to be true.</p>

      <h2>The knowledge that lived in kitchens</h2>
      <p>A lot of fantasy builds its magic top-down: a grand system, rules, a hierarchy. Mountain folk belief worked the other way. It was practical and domestic. You planted by the phase of the moon because that was how you got a crop. You knew which plants drew a fever down and which ones were better left alone. You paid attention to birds, to weather signs, to the behavior of animals, because attention was survival.</p>
      <p>In the books, the Calhoun women and the other practitioners of Pike County carry that same texture. Their power isn't theatrical. It looks like knowing things&mdash;and the horror comes from what happens when the things they've always known stop being enough.</p>

      <h2>The doors that run thin</h2>
      <p>The central image of the series&mdash;that the boundary between the living world and the dark runs thin in certain places, and that certain people have always quietly kept it shut&mdash;grows out of a real strand of folk belief: the idea of liminal places and liminal people. Crossroads. Thresholds. The hour between night and morning. The seventh child. People who were "born knowing."</p>
      <p>The fiction takes that and asks a question folk belief never had to answer directly: what if the thing on the other side of the thin places started paying attention back?</p>

      <h2>What's invented</h2>
      <p>The larger structure&mdash;the cosmology, the named forces, the deep history beneath the mountain&mdash;is mine. I built it to give the human-scale stories somewhere to stand. But I tried to keep one rule throughout: the bigger the world gets, the more it has to be felt through something small and specific. A swept floor. A bird in the house. The particular quiet of a night that doesn't feel right.</p>
      <p>That tension&mdash;vast stakes, intimate detail&mdash;is the whole engine of the series.</p>

      <h2>Where to start</h2>
      <p>If any of this is your kind of thing&mdash;Southern gothic, folk horror, ancient bargains, women who hold the line&mdash;the best entry point is the free prequel story, which takes place the night before Pike County learns exactly what's been holding the door shut.</p>
      <p>It costs nothing but your email, and it's the cleanest way into the world.</p>
    `
  }

  // ,{ slug: "...", title: "...", description: "...", date: "...",
  //    keywords: "...", cover: "", readMins: 4, body: `...` }
];


/* -----------------------------------------------------------------------
   HELPERS
   Small functions any page can call after loading this file.
   ----------------------------------------------------------------------- */

// --- Nav ---
// Inject a <nav> into `el`, marking the current page active.
function renderNav(el) {
  if (!el) return;
  const current = window.location.pathname.split("/").pop() || "index.html";
  el.innerHTML = NAV.map(item => {
    const active = item.href.includes(current) ? ' class="active"' : "";
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join("");
}

// --- Social icons (text links fallback) ---
function renderSocialLinks(el) {
  if (!el) return;
  const labels = {
    youtube:"YouTube", tiktok:"TikTok", instagram:"Instagram",
    facebook:"Facebook", spotify:"Spotify", appleMusic:"Apple Music",
    amazon:"Amazon Music", goodreads:"Goodreads"
  };
  el.innerHTML = Object.entries(SOCIAL)
    .filter(([, url]) => url)
    .map(([key, url]) => `<a class="social-link social-${key}" href="${url}" target="_blank" rel="noopener">${labels[key] || key}</a>`)
    .join("");
}

// --- Music ---
// Render album cards (released only by default; pass true to show all)
function renderAlbums(el, showAll = false) {
  if (!el) return;
  const list = showAll ? MUSIC : MUSIC.filter(a => a.status === "released");
  el.innerHTML = list.map(a => `
    <div class="album-card" id="album-${a.id}">
      ${a.cover ? `<img class="album-cover" src="${a.cover}" alt="${a.title} cover">` : ""}
      <div class="album-title">${a.title}</div>
      <div class="album-meta">${a.artist} &middot; ${a.year}</div>
      ${a.description ? `<p class="album-desc">${a.description}</p>` : ""}
      ${a.tracks.length ? `<ol class="track-list">${a.tracks.map(t => `<li>${t.title}</li>`).join("")}</ol>` : ""}
      <div class="album-links">
        ${a.links.youtube    ? `<a href="${a.links.youtube}"    target="_blank" rel="noopener">YouTube</a>` : ""}
        ${a.links.spotify    ? `<a href="${a.links.spotify}"    target="_blank" rel="noopener">Spotify</a>` : ""}
        ${a.links.appleMusic ? `<a href="${a.links.appleMusic}" target="_blank" rel="noopener">Apple Music</a>` : ""}
        ${a.links.amazon     ? `<a href="${a.links.amazon}"     target="_blank" rel="noopener">Amazon Music</a>` : ""}
      </div>
    </div>
  `).join("");
}

// --- Books ---
function renderBooks(el, showAll = false) {
  if (!el) return;
  const list = showAll ? BOOKS : BOOKS.filter(b => b.status !== "upcoming");
  el.innerHTML = list.map(b => `
    <div class="book-card" id="book-${b.id}">
      ${b.cover ? `<img class="book-cover" src="${b.cover}" alt="${b.title} cover">` : ""}
      <div class="book-vol">Vol. ${b.vol}</div>
      <div class="book-title">${b.title}</div>
      <div class="book-meta">${b.author} &middot; ${b.year}</div>
      ${b.description ? `<p class="book-desc">${b.description}</p>` : ""}
      <div class="book-status">${b.status.charAt(0).toUpperCase() + b.status.slice(1)}</div>
      <div class="book-links">
        ${b.links.amazon    ? `<a href="${b.links.amazon}"    target="_blank" rel="noopener">Amazon</a>` : ""}
        ${b.links.goodreads ? `<a href="${b.links.goodreads}" target="_blank" rel="noopener">Goodreads</a>` : ""}
        ${b.links.direct    ? `<a href="${b.links.direct}"    target="_blank" rel="noopener">Buy Direct</a>` : ""}
      </div>
    </div>
  `).join("");
}

// --- Blog ---
function getPost(slug) {
  if (!slug) {
    const params = new URLSearchParams(window.location.search);
    slug = params.get("post");
  }
  return BLOG_POSTS.find(p => p.slug === slug) || null;
}

function renderPostList(el) {
  if (!el) return;
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  el.innerHTML = posts.map(p => `
    <a class="post-card" href="blog.html?post=${encodeURIComponent(p.slug)}">
      <div class="post-date">${formatDate(p.date)} &middot; ${p.readMins} min read</div>
      <div class="post-title">${p.title}</div>
      <div class="post-desc">${p.description}</div>
    </a>
  `).join("");
}

function renderPost(el, slug) {
  if (!el) return;
  const p = getPost(slug);
  if (!p) { el.innerHTML = "<p>Post not found.</p>"; return; }

  document.title = `${p.title} — ${SITE.title}`;
  setMeta("description", p.description);
  setMeta("keywords", p.keywords);

  el.innerHTML = `
    <article>
      <div class="post-date">${formatDate(p.date)} &middot; ${p.readMins} min read</div>
      <h1>${p.title}</h1>
      ${p.cover ? `<img class="post-cover" src="${p.cover}" alt="">` : ""}
      <div class="post-body">${p.body}</div>
      <div class="post-cta">
        <h3>Get the free prequel story</h3>
        <p>Step into the Holler. The Veil is already breaking.</p>
        <a class="cta-btn" href="${SITE.freeOfferUrl}">Claim Your Free Story</a>
      </div>
    </article>
  `;
}

// --- Email capture ---
async function submitEmail(email, successEl, errorEl) {
  if (!SITE.emailEndpoint) return;
  try {
    const res = await fetch(SITE.emailEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    if (res.ok) {
      if (successEl) successEl.style.display = "block";
    } else {
      throw new Error("Server error");
    }
  } catch {
    if (errorEl) errorEl.style.display = "block";
  }
}

// --- SEO helpers ---
function setPageSEO(title, description, keywords) {
  document.title = title ? `${title} — ${SITE.title}` : SITE.title;
  setMeta("description", description || SITE.seo.description);
  setMeta("keywords",    keywords    || SITE.seo.keywords);
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// --- Module export (Node / build tools) ---
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SITE, NAV, SOCIAL, MUSIC, BOOKS, CHARACTERS, MERCH, SERIES, BLOG_POSTS,
    renderNav, renderSocialLinks, renderAlbums, renderBooks,
    getPost, renderPostList, renderPost,
    submitEmail, setPageSEO, setMeta, formatDate
  };
}
