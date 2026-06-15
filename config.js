/* =======================================================================
   Holler & Hellfire — Site & Blog Configuration
   -----------------------------------------------------------------------
   Central config for the author site. Add new blog posts by appending an
   object to the BLOG_POSTS array. Each post can be rendered by a template
   page (blog.html) that reads from this file, or used to build an index.

   Usage in a page:
     <script src="config.js"></script>
     <script> renderPostList(document.getElementById('post-list')); </script>
   ======================================================================= */

const SITE = {
  title: "Holler & Hellfire",
  tagline: "Southern gothic folk horror from the Appalachian hills.",
  author: "[Your Name]",
  baseUrl: "https://your-domain.com",     // no trailing slash
  // Email capture — same endpoint used on the landing page.
  // Paste your MailerLite / Kit (ConvertKit) form POST URL here.
  emailEndpoint: "",
  // Where the free-offer landing page lives, for CTAs in blog posts.
  freeOfferUrl: "/index.html",
  social: {
    tiktok:    "https://tiktok.com/@yourhandle",
    instagram: "https://instagram.com/yourhandle",
    goodreads: "https://goodreads.com/yourprofile",
    amazon:    "https://amazon.com/author/yourpage"
  }
};

/* -----------------------------------------------------------------------
   BLOG POSTS
   Each entry:
     slug         unique url-safe id (becomes ?post=slug or /blog/slug)
     title        H1 + <title>
     description  meta description for SEO (~150 chars)
     date         ISO date "YYYY-MM-DD"
     keywords     comma string for <meta name="keywords"> + internal search
     cover        path to header image (optional, "" if none)
     readMins     estimated read time
     body         HTML string of the post content
   Add new posts by copying the last object and editing it.
   ----------------------------------------------------------------------- */

const BLOG_POSTS = [
  {
    slug: "appalachian-folk-magic-behind-holler-and-hellfire",
    title: "The Real Appalachian Folk Magic Behind Holler & Hellfire",
    description: "The Southern gothic world of Holler & Hellfire is built on real Appalachian folk magic and mountain belief. What's true, what's invented, and where to start reading.",
    date: "2026-05-28",
    keywords: "appalachian folk magic, southern gothic, folk horror, mountain folklore, holler and hellfire, fantasy books",
    cover: "",
    readMins: 5,
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
   Helpers — small renderers a blog template page can call.
   ----------------------------------------------------------------------- */

// Return a post by slug (from ?post=slug in the URL, or passed in).
function getPost(slug) {
  if (!slug) {
    const params = new URLSearchParams(window.location.search);
    slug = params.get("post");
  }
  return BLOG_POSTS.find(p => p.slug === slug) || null;
}

// Render a list of post cards (newest first) into a container element.
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

// Render a single post (title, meta, body, CTA) into a container element.
function renderPost(el, slug) {
  if (!el) return;
  const p = getPost(slug);
  if (!p) { el.innerHTML = "<p>Post not found.</p>"; return; }

  // SEO: set document title + meta description dynamically
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

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) { tag = document.createElement("meta"); tag.name = name; document.head.appendChild(tag); }
  tag.content = content;
}

// Make available if loaded as a module elsewhere.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SITE, BLOG_POSTS, getPost, renderPostList, renderPost };
}
