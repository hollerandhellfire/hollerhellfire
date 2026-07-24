import { useState } from "react";

const css=`
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}

/* ── The Grigori Palette ── */
/* The color of the sky between the mortal layer and the divine — */
/* watched from both sides for twelve thousand years.              */

.bible{max-width:960px;margin:0 auto;padding:32px 20px 60px;background:#03050a;min-height:100vh;color:#e2e8f0;font-family:'Cormorant Garamond',Georgia,serif;}
.header{text-align:center;padding:50px 0 36px;border-bottom:1px solid #1a2a40;margin-bottom:36px;position:relative;}
.header::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:1px;height:50px;background:linear-gradient(to bottom,transparent,#94a3b8);}
.header::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 40% at 50% 0%,rgba(71,105,150,.09) 0%,transparent 70%);pointer-events:none;}
.series-label{font-family:'Cinzel',serif;font-size:10px;letter-spacing:.4em;color:#64748b;text-transform:uppercase;margin-bottom:14px;}
.main-title{font-family:'Cinzel Decorative',serif;font-size:clamp(20px,5vw,40px);font-weight:700;color:#e2e8f0;line-height:1.1;margin-bottom:8px;text-shadow:0 0 50px rgba(148,163,184,.25);}
.sub-title{font-family:'Cinzel',serif;font-size:clamp(10px,2.5vw,14px);color:#94a3b8;letter-spacing:.25em;margin-bottom:20px;}
.tagline{font-style:italic;font-size:14px;color:#334155;max-width:620px;margin:0 auto;line-height:1.8;}
.tabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:26px;border-bottom:1px solid #1a2a40;padding-bottom:12px;}
.tab{font-family:'Cinzel',serif;font-size:10px;letter-spacing:.2em;text-transform:uppercase;padding:6px 13px;border:1px solid #1a2a40;background:transparent;color:#334155;cursor:pointer;transition:all .2s;}
.tab:hover{border-color:#4a6fa5;color:#94a3b8;}
.tab.active{background:rgba(74,111,165,.18);border-color:#4a6fa5;color:#e2e8f0;}
.sec{font-family:'Cinzel',serif;font-size:11px;letter-spacing:.35em;text-transform:uppercase;color:#4a6fa5;margin:22px 0 14px;padding-bottom:7px;border-bottom:1px solid #1a2a40;}
.card{background:#070d18;border:1px solid #1a2a40;border-left:3px solid #4a6fa5;padding:16px 20px;margin-bottom:12px;}
.card.g{border-left-color:#c9943a;}
.card.sl{border-left-color:#94a3b8;}
.card.cr{border-left-color:#dc2626;}
.card.t{border-left-color:#0d9488;}
.card.w{border-left-color:#e2e8f0;}
.clabel{font-family:'Cinzel',serif;font-size:9px;letter-spacing:.35em;color:#1e3050;text-transform:uppercase;margin-bottom:5px;}
.ctitle{font-family:'Cinzel',serif;font-size:15px;color:#e2e8f0;margin-bottom:5px;}
.ctitle.sl{color:#cbd5e1;}.ctitle.g{color:#e8c06a;}.ctitle.t{color:#5eead4;}.ctitle.cr{color:#f87171;}.ctitle.bl{color:#7098c8;}
.cbody{font-size:13px;line-height:1.72;color:#334155;}
.cbody em{color:#e2e8f0;font-style:italic;}
.cbody strong{color:#94a3b8;font-weight:600;}
.cbody strong.g{color:#e8c06a;}
.cbody strong.t{color:#5eead4;}
.cbody strong.cr{color:#f87171;}
.pull{border-left:3px solid #4a6fa5;padding:14px 18px;background:rgba(74,111,165,.06);margin:14px 0;font-size:14px;font-style:italic;line-height:1.8;color:#e2e8f0;}
hr.rule{border:none;border-top:1px solid #1a2a40;margin:22px 0;}
.tag{display:inline-block;font-family:'Cinzel',serif;font-size:8px;letter-spacing:.18em;text-transform:uppercase;padding:2px 6px;border:1px solid;margin-right:4px;margin-bottom:3px;}
.tag.bl{color:#7098c8;border-color:#4a6fa5;}
.tag.g{color:#e8c06a;border-color:#c9943a;}
.tag.t{color:#5eead4;border-color:#0d9488;}
.tag.cr{color:#f87171;border-color:#dc2626;}
.tag.sl{color:#94a3b8;border-color:#4a5a70;}
.tag.m{color:#475569;border-color:#1a2a40;}
.orn{text-align:center;font-size:16px;color:#1e3050;margin:16px 0;letter-spacing:10px;}

/* WATCHER ROSTER */
.w12-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:12px;margin-top:12px;}
.wcard{background:#070d18;border:1px solid #1a2a40;border-left:3px solid #4a6fa5;padding:15px 17px;position:relative;transition:all .2s;}
.wcard:hover{border-color:#4a6fa5;box-shadow:0 0 18px rgba(74,111,165,.1);}
.wcard.leader{border-left-color:#94a3b8;background:rgba(74,111,165,.04);}
.wcard.bonded{border-left-color:#c9943a;}
.wcard.enforcement{border-left-color:#dc2626;}
.wcard.penitent{border-left-color:#0d9488;}
.wcard.unaligned{border-left-color:#1e3050;}
.wstatus{position:absolute;top:10px;right:11px;font-family:'Cinzel',serif;font-size:8px;letter-spacing:.18em;text-transform:uppercase;padding:2px 7px;border:1px solid;}
.ws-leader{color:#94a3b8;border-color:#4a5a70;}
.ws-bonded{color:#e8c06a;border-color:#c9943a;}
.ws-enf{color:#f87171;border-color:#dc2626;}
.ws-pen{color:#5eead4;border-color:#0d9488;}
.ws-un{color:#1e3050;border-color:#0f1a28;}
.ws-return{color:#5eead4;border-color:#0d9488;}
.wnum{font-family:'Cinzel',serif;font-size:9px;letter-spacing:.25em;color:#1e3050;margin-bottom:5px;}
.wname{font-family:'Cinzel',serif;font-size:16px;color:#e2e8f0;margin-bottom:2px;}
.wdomain{font-size:10px;font-style:italic;margin-bottom:7px;letter-spacing:.04em;}
.wbody{font-size:12px;line-height:1.62;color:#334155;}
.wbody em{color:#e2e8f0;font-style:italic;}
.wbody strong{font-weight:600;}
.wbond{margin-top:7px;padding-top:6px;border-top:1px solid #1a2a40;font-family:'Cinzel',serif;font-size:9px;letter-spacing:.15em;color:#c9943a;}

/* NEPHILIM TABLE */
.neph-row{display:grid;grid-template-columns:150px 130px 1fr;margin-bottom:7px;background:#070d18;border:1px solid #1a2a40;overflow:hidden;}
.neph-row.header{background:#04080f;}
.nc{padding:10px 14px;border-right:1px solid #1a2a40;font-size:12px;}
.nc:last-child{border-right:none;}

/* ARCHITECTURE STACK */
.arch-stack{display:flex;flex-direction:column;align-items:center;gap:0;margin:18px 0;}
.as{width:100%;max-width:540px;padding:10px 18px;text-align:center;font-family:'Cinzel',serif;font-size:11px;letter-spacing:.2em;border:1px solid;}
.as.grig{background:rgba(74,111,165,.2);border-color:#4a6fa5;color:#e2e8f0;}
.as.old{background:rgba(201,148,58,.08);border-color:#c9943a;color:#e8c06a;}
.as.div{background:rgba(148,163,184,.06);border-color:#4a5a70;color:#94a3b8;}
.as.mor{background:rgba(255,255,255,.02);border-color:#1a2a40;color:#334155;}
.sarr{font-size:15px;color:#1e3050;line-height:1;padding:2px 0;}
.snote{font-size:9px;color:#1e3050;font-style:italic;margin-top:3px;font-family:'Cormorant Garamond',serif;}
`;

const TABS=[
  {id:"origins",l:"Origins"},
  {id:"roster",l:"The 200"},
  {id:"bond",l:"The Bond"},
  {id:"nephilim",l:"The Nephilim"},
  {id:"arch",l:"Architecture"},
];

const TWELVE=[
  {
    n:"I",status:"leader",sb:"LEADER",sbCls:"ws-leader",
    name:"Samyaza",domain:"Earth Layer \u00b7 Horde General \u00b7 The Compact's Keeper",
    domainColor:"#94a3b8",
    body:"The first name on the list. He led the descent. He proposed the oath that bound two hundred Watchers to their decision — <em>if I am alone in this I will carry the blame alone; if we are together in this the weight is shared.</em> They swore. They descended.\n\nIn the H&H universe, Samyaza's domain is the earth layer's compact architecture — the space between the geological and the mortal, where the Horde's communication with the human practice is possible. His role as Horde General is not military authority. It is translation: he is the most effective mediator between the formal framework's language and the Horde's geological frequency.\n\nHe watched Della Combs's property for twenty-six years \u2014 since she was eight and left a cup of water out for a shape no one else could see. He stood at the east wood. He waited twenty-three mornings before she walked to the fence.\n\nHe felt Brian Lee conceived the instant it happened; a Watcher feels the frequency-event of a life beginning more clearly than anything else in creation. He knew his son was made the night he was made \u2014 and left, to keep the Nephilim signature dark from Hell. The fall had left him in static for ten thousand years; the bond with Della was the first thing that re-tuned his frequency to correction. He believed presence was the only love he was allowed, until she chose to let him be more than present.",
    bond:"\u27a1 Bonded: Della Combs \u00b7 Book 2 \u00b7 Brian Lee's father",
  },
  {
    n:"II",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Azazel",domain:"The Bond's Legal Architecture \u00b7 Compact Law",
    domainColor:"#c9943a",
    body:"In the classical record, Azazel taught humanity the art of metalworking — the making of weapons, the shaping of what endures. In the H&H universe, his domain is the Bond's legal architecture: the specific encoding of what holds. He is the Watcher who understands compact law at its deepest level, who can read the Older Mechanism's record the way a lawyer reads a foundational document.\n\nHe was already awake at 3:47 AM when the seal broke in WMB1. He did not want to wake Dixie. That is the whole of him in one sentence: he holds the full picture and chooses what to share, and he stays.",
    bond:"\u27a1 Bonded: Raelee \"Dixie\" Calhoun \u00b7 Book 1 \u00b7 Primary anchor bond",
  },
  {
    n:"III",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Armaros",domain:"Resolution of Enchantments \u00b7 Spell-Breaking",
    domainColor:"#c9943a",
    body:"In the classical record, Armaros taught the resolution of enchantments — the specific knowledge of how a binding is built and therefore how it can be undone. In the H&H universe: the spell-breaker. His gift identifies the fear-substrate in a wrong compact and removes it.\n\nThe discovery of Book 4: his craft and Mercy Tackett's grey-area practice are the same operation — the holding, the releasing, the Earth Mother's oldest idiom. Asmodeus had been working the same idiom alone for nine hundred years. The difference between Armaros and Asmodeus is that Armaros found Mercy. He did not hold alone.",
    bond:"\u27a1 Bonded: Mercy Tackett \u00b7 Book 4 \u00b7 Spell-breaking in the grey space",
  },
  {
    n:"IV",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Baraqiel",domain:"Atmospheric Layer \u00b7 Lightning \u00b7 Storm Domain",
    domainColor:"#c9943a",
    body:"In the classical record, Baraqiel taught astrology — the reading of the sky's language. In the H&H universe, his domain is the atmospheric interface: the layer where the sky touches the ground, where lightning's frequency runs along the same routes as the Ley Lines.\n\nThe quietest Watcher. Six years watching the woman at the counter from the south wood tree line; eight months of Tuesday coffees at the Hollow Diner making war on his own feelings before giving up. He holds the perimeter. Carla June warms the room. Two different kinds of work, the same corridor.\n\nTwo hundred years ago he last let himself be close to a mortal: Prim, a child who reached for his lightning unafraid, whom he could not save. He held his charge ever after \u2014 putting his storm into walls, never into a person \u2014 until Carla June, who is not afraid of it either, asked him to stop holding it.",
    bond:"\u27a1 Bonded: Carla June Maynard \u00b7 Book 3 \u00b7 Route 119 perimeter",
  },
  {
    n:"V",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Kokabiel",domain:"The Stellar Domain \u00b7 Star-Naming \u00b7 Celestial Navigation",
    domainColor:"#c9943a",
    body:"In the classical record, Kokabiel taught the knowledge of the constellations — the mapping of the sky. In the H&H universe, his domain is the stellar frequency: every star he has named is in the record, has been there since before the practice had language for itself.\n\nHis domain and June Tackett's Dreamer gift are calibrated to each other — the stellar frequency and the High Priestess Archive thread running adjacent. The star he names for the finding, aimed at the Unwritten in the Divine Arc, is already in his domain. He named it before it was needed.",
    bond:"\u27a1 Bonded: June Tackett \u00b7 Book 5 \u00b7 Stellar domain and the prophetic record",
  },
  {
    n:"VI",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Tamiel",domain:"Southern Knowledge \u00b7 Documentary Witness",
    domainColor:"#c9943a",
    body:"In the classical record, Tamiel taught astrology in the southern sky. In the H&H universe, his domain is the southern corridor's specific knowledge — the documentation of what the southern network witnesses. Aria Webb's journalism practice is his domain's correct mortal expression: the keeping of records that survive institutional suppression.\n\nHaniel's quiet enforcement operation in Book 7 targets the documentation center's frequency specifically — making recording gradually impossible. Tamiel's response is the southern archive's hardening against the interference pattern.",
    bond:"\u27a1 Bonded: Aria Webb \u00b7 Book 7 \u00b7 Tensaw Delta \u00b7 Southern network anchor",
  },
  {
    n:"VII",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Ramiel",domain:"Temporal Frequency \u00b7 Thunder as Time-Marker",
    domainColor:"#c9943a",
    body:"In the classical record, Ramiel was associated with thunder. In the H&H universe, his domain is temporal-frequency monitoring — the specific capacity to read the corridor's condition not just in the present but in its accumulated history and forward resonance. Thunder as a time-marker: the sound that tells you when something has already happened.\n\nDirectly opposed to Jeremiel (Heaven's enforcer of past records): Ramiel reads what is coming, Jeremiel judges what has been. These practices are in fundamental tension over whether the present moment's decisions are free or already determined. Carolyn's vision of Jeremiel's own enforcement history is what stops him.",
    bond:"\u27a1 Bonded: Carolyn Roberts \u00b7 Book 8 \u00b7 Virginia \u00b7 Temporal monitoring",
  },
  {
    n:"VIII",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Danel",domain:"Justice in the Geological Record \u00b7 The Coal Country's Weight",
    domainColor:"#c9943a",
    body:"In the classical record, Danel was associated with the justice of God, the governance of the natural world. In the H&H universe, his domain is the geological record's specific justice: the capacity to read what the land has been asked to carry and what that carrying has cost.\n\nThe Kanawha County corridor is one valley over from Pike County — coal country, the extraction economy's deepest reach. Danel's bonding with Abigail Ebony establishes the WV Thread: the first corridor explicitly in the Leviathan's direct geological range outside the primary. The Leviathan feels the WV Thread being placed.",
    bond:"\u27a1 Bonded: Abigail Ebony \u00b7 Book 9 \u00b7 Kanawha County \u00b7 WV Thread",
  },
  {
    n:"IX",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Ezeqeel",domain:"Weather Monitoring \u00b7 Cloud Knowledge \u00b7 Atmospheric Mapping",
    domainColor:"#c9943a",
    body:"In the classical record, Ezeqeel taught the knowledge of the clouds — the reading of weather as language. In the H&H universe, his domain is the atmospheric monitoring layer: the specific mapping of weather patterns as the surface expression of the Ley Line network. The Wardens communicate through the atmospheric layer; Ezeqeel's domain is the translation medium.\n\nHis specific nemesis: Vapula (Duke of Hell, science and skill corruption) who makes D's weather data unreliable through systematic interference. The atmospheric monitoring layer D builds is specifically hardened against Vapula's interference by Book 10's conclusion.",
    bond:"\u27a1 Bonded: D Coale \u00b7 Book 10 \u00b7 Penn State \u00b7 Atmospheric monitoring",
  },
  {
    n:"X",status:"enforcement",sb:"RETURNED \u2014 DEFECTED",sbCls:"ws-return",
    name:"Saraqael",domain:"The Hunter \u00b7 Originally: Earth Signs \u00b7 Course of the Moon",
    domainColor:"#f87171",
    body:"In the classical record, Saraqael (Sariel) taught the course of the moon — the cyclical movement, the sign-reading of what returns. His original Grigori domain: the earth's signs, what the land says when you know how to read it.\n\nAfter the descent, Saraqael was not bound under the earth with the others. He was assigned to Heaven's Enforcement Arm — a punishment specifically calibrated to his domain: the being who reads the earth's signs would spend millennia enforcing the institutional claim over what the earth's signs actually said. He became the Hunter: the most effective tracker the enforcement arm had, for two hundred years.\n\nHe came to Pike County to assess the new compact. His enforcement instrument — two hundred years of reading what the land says — turned toward Loren Ritcher and reported: <em>correct. Deeply correct.</em>\n\nHis defection is the most important defection in the series because it is the Grigori's own instrument returning to its original function. He was never Heaven's agent. He was a Watcher assigned to perform Heaven's function as punishment. The defection is a return.",
    bond:"\u27a1 Pike County assessor's office \u00b7 Loren Ritcher (Weaver \u00b7 heart changer) \u00b7 OS2: Vatican",
  },
  {
    n:"XI",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Penemue",domain:"The Written Archive \u00b7 Every Word Ever Written",
    domainColor:"#c9943a",
    body:"In the classical record, Penemue taught the art of writing — the bitter and the sweet, the act of inscription. He carries every word ever written in his domain's archive.\n\nAmong those words: Arcadia's first word, written in the soil above the Leviathan's heart twelve thousand years ago. He has been carrying it without knowing why it felt different from everything else. The bond with Emily Keldren — the written tradition anchor — is the moment the archive's specific significance to the Leviathan Arc becomes accessible to the network.\n\nSandalphon (Metatron's twin, prayers and music archivist) is watching Penemue's corridor from the Heaven's enforcement side — the two archives approaching the same records from different directions.",
    bond:"\u27a1 Bonded: Emily Keldren \u00b7 Book 11 \u00b7 Catskill Valley \u00b7 Written tradition anchor",
  },
  {
    n:"XII",status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Kasdeja",domain:"Healing Integration \u00b7 Natural-Healing Boundary",
    domainColor:"#c9943a",
    body:"In the classical record, Kasdeja taught knowledge of healing and of the smiting of the soul — both the cure and the wound. His domain encompasses the full spectrum of healing's practice: what it can do and what it costs.\n\nIn the H&H universe, Kasdeja's domain is the integration of natural and healing practice — the specific intersection that Raphael was commissioned by the formal framework to guard. <em>Kasdeja taught what Raphael was meant to guard.</em> This is the wound at the center of Book 6B: the Grigori practitioner whose domain preceded the formal framework's institutional claim to it.\n\nHis bonding with Velvet Thornbloom at the Blue Ridge establishes the template for the Expansion Arc.",
    bond:"\u27a1 Bonded: Velvet Thornbloom \u00b7 Book 6B \u00b7 Blue Ridge \u00b7 Web thread template",
  },
];

const OTHERS=[
  {
    status:"unaligned",sb:"WATCHING",sbCls:"ws-un",
    name:"Shamsiel",domain:"Signs of the Sun \u00b7 Solar Domain",
    domainColor:"#475569",
    body:"His domain is the solar frequency — the sun's specific language, distinct from Kokabiel's stellar domain. Not yet bonded in the H&H arc. Watching. The solar domain's connection to the Arcana layer runs through the Sun card — the same card present at DA10: The Resurrection.",
    bond:null,
  },
  {
    status:"unaligned",sb:"WATCHING",sbCls:"ws-un",
    name:"Turiel",domain:"Rock \u00b7 The Geological Voice",
    domainColor:"#475569",
    body:"His domain is the stone layer — distinct from Samyaza's earth-layer domain, operating at the geological frequency's most specific expression. Rock, not soil. The specific hardness and patience of what does not move. The Leviathan's cardiac frequency is closest to Turiel's domain of any of the Grigori. He has been listening to it for twelve thousand years.",
    bond:null,
  },
  {
    status:"unaligned",sb:"UNALIGNED",sbCls:"ws-un",
    name:"Gadreel",domain:"The Art of War \u00b7 Defense Architecture",
    domainColor:"#475569",
    body:"His domain in the classical record is warfare — the teaching of weapons and defense. In the H&H universe, his specific gift is defense architecture: the design of perimeters, the analysis of vulnerability. He is watching the Order of Shadow arc with the specific attention of a being whose domain is what the OS arc's tactical operations require. His alignment is not yet established.",
    bond:null,
  },
  {
    status:"bonded",sb:"BONDED",sbCls:"ws-bonded",
    name:"Asbeel",domain:"Counsel Against the Institutional Claim",
    domainColor:"#0d9488",
    body:"In the classical record, Asbeel gave counsel against God \u2014 the Grigori\u2019s earliest internal voice of dissent. In the H&H universe, his specific gift is the articulation of what the formal framework\u2019s claim gets wrong. He was right before the descent. He has been right since. For ten thousand years that was the question his character posed: what does a being do with being right when it has never been free to act on it?\n\nBook 5 answers it. Sent to enforce against the Pike County corridor, he is asked by June Tackett to use the right channel \u2014 and recognizes, in the half-second of leaving the library, that he has been operating in the wrong channel for forty-seven years while Iola Pruitt, senior Anchor of the Tennessee corridor, waited in the right one for exactly that long. He declares. He bonds Iola. The Grigori\u2019s oldest dissenter becomes the first to act on the dissent. (Note: distinct from Ramiel, whose temporal-frequency domain bonds Carolyn Roberts in Book 8 \u2014 the two are not the same Watcher.)",
    bond:"\u27a1 Bonded: Iola Pruitt \u00b7 Book 5 \u00b7 Tennessee corridor senior Anchor \u00b7 forty-seven-year wait",
  },
  {
    status:"unaligned",sb:"WATCHING",sbCls:"ws-un",
    name:"Rumjal",domain:"The Empty Places \u00b7 The Veil's Edge",
    domainColor:"#475569",
    body:"His domain is the void between definitions — the places the formal framework's taxonomy does not cover, the spaces between the Arcana layer's floor and the mortal layer's ceiling. In the Divine Arc, Rumjal's domain is the specific territory Hecate occupies in the Unwritten. He knows that space. He has been watching its edges since the descent.",
    bond:null,
  },

  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Turiel",
    "domain": "Geological Voice",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 6C in Holler & Hellfire. Turiel's domain is activated through Ruthanne Sizemore's corridor function: quarry stone-listener; reads pressure, patience, and the mountain's warnings. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Ruthanne Sizemore · Book 6C · Holler & Hellfire"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Bezaliel",
    "domain": "Angel of Shadows",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 6D in Holler & Hellfire. Bezaliel's domain is activated through Nadine Skaggs's corridor function: plain-sight witness; reveals what Pike County has learned not to see. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Nadine Skaggs · Book 6D · Holler & Hellfire"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Sariel",
    "domain": "Angel of the Waning Moon",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 6E in Holler & Hellfire. Sariel's domain is activated through Wren Justice's corridor function: waning-moon practitioner; releases, lessens, and returns what the full moon cannot touch. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Wren Justice · Book 6E · Holler & Hellfire"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Butator",
    "domain": "Angel of Calculations",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 12 in Expansion Arc. Butator's domain is activated through Marlene Byrd's corridor function: thread-count mathematics; derives the Web's equation from public weather data. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Marlene Byrd · Book 12 · Expansion Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Sachiel",
    "domain": "Angel of Coin",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 13 in Expansion Arc. Sachiel's domain is activated through Everett Marsh's corridor function: moral accounting; protects corridor land through debt, deed, and refusal to foreclose. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Everett Marsh · Book 13 · Expansion Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Chazaqiel",
    "domain": "Angel of Mists",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 14 in Expansion Arc. Chazaqiel's domain is activated through Fern Ridley's corridor function: fogbound Gulf corridor anchor; reads concealment without surrendering to confusion. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Fern Ridley · Book 14 · Expansion Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Suphlatus",
    "domain": "Angel of Dust",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 15 in Expansion Arc. Suphlatus's domain is activated through Opal Truitt's corridor function: Dust Bowl memory-holder; proves reduced land can still carry a thread. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Opal Truitt · Book 15 · Expansion Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Arakiel",
    "domain": "Signs of the Earth",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: Book 16 in Expansion Arc. Arakiel's domain is activated through Delphine Ashworth's corridor function: geomantic surveyor; maps Ley geometry into property boundaries. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Delphine Ashworth · Book 16 · Expansion Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Rahab",
    "domain": "Angel of the Deep",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WMB7 in Leviathan Arc. Rahab's domain is activated through Marisol Ochoa's corridor function: deep-water frequency reader; hears the Leviathan through ocean trenches and drowned riverbeds. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Marisol Ochoa · WMB7 · Leviathan Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Ananiel",
    "domain": "Angel of Storms",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WMB8 in Leviathan Arc. Ananiel's domain is activated through Wyatt Sorrel's corridor function: storm-pattern interpreter; tracks Leviathan waking through impossible weather. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Wyatt Sorrel · WMB8 · Leviathan Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Gadreel",
    "domain": "Defensive Tactics",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WMB9 in Leviathan Arc. Gadreel's domain is activated through Colton Vance's corridor function: corridor defense architect; turns the network from reactive survival to protected perimeter. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Colton Vance · WMB9 · Leviathan Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Af",
    "domain": "Angel of Anger",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WMB10 in Leviathan Arc. Af's domain is activated through Judith Calloway's corridor function: anger-as-justice practitioner; converts inherited rage into a shield instead of a wound. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Judith Calloway · WMB10 · Leviathan Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Apollyon",
    "domain": "Angel of the Void",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WMB11 in Leviathan Arc. Apollyon's domain is activated through Noor Fen's corridor function: astronomical void-mapper; gives absence shape without mistaking it for Abaddon's Abyss watch. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Noor Fen · WMB11 · Leviathan Arc"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Shamsiel",
    "domain": "Solar Domain",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WW4 in Web of Weavers. Shamsiel's domain is activated through Coral Whitfield's corridor function: solar corridor anchor; makes witness public and reveals what cannot survive daylight. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Coral Whitfield · WW4 · Web of Weavers"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Satarel",
    "domain": "Phases & Patience",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WW5 in Web of Weavers. Satarel's domain is activated through Ivy Marchetti's corridor function: slow-phase practitioner; proves a corridor can be correct before it is fast. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Ivy Marchetti · WW5 · Web of Weavers"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Jomjael",
    "domain": "The Unspoken Name",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WW6 in Web of Weavers. Jomjael's domain is activated through Birdie Loach's corridor function: private naming-rite keeper; protects identity before public record. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Birdie Loach · WW6 · Web of Weavers"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Samshiel",
    "domain": "Angel of the Eclipse",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WW7 in Web of Weavers. Samshiel's domain is activated through Solveig Ashby's corridor function: eclipse corridor anchor; opens only under totality and handles dangerous alignment. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Solveig Ashby · WW7 · Web of Weavers"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Scion",
    "domain": "The Heir's Portion",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WW8 in Web of Weavers. Scion's domain is activated through Nova Calhoun's corridor function: lineage-pressure practitioner; activates a dormant Calhoun/Nephilim thread without making bloodline ownership. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Nova Calhoun · WW8 · Web of Weavers"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Yomiel",
    "domain": "The Accounting of Days",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WW9 in Web of Weavers. Yomiel's domain is activated through Clementine Osei's corridor function: sacred calendar keeper; detects the stolen/missing day in the Web's record. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Clementine Osei · WW9 · Web of Weavers"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Yocun",
    "domain": "The Unclaimed Frequency",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: WW10 in Web of Weavers. Yocun's domain is activated through Persephone Winter's corridor function: erased-line restorer; proves omitted history still has frequency. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Persephone Winter · WW10 · Web of Weavers"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Sathriel",
    "domain": "Angel of Deception",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: OS5 in Order of Shadows. Sathriel's domain is activated through Delacroix Vane's corridor function: counter-intelligence witness; finds the lie the Order cannot survive. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Delacroix Vane · OS5 · Order of Shadows"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Asael",
    "domain": "The Art of Being Seen",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: OS6 in Order of Shadows. Asael's domain is activated through Lior Bellweather's corridor function: public-face defector; turns visibility from institutional polish into witness. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Lior Bellweather · OS6 · Order of Shadows"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Batariel",
    "domain": "Hidden Waters",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: OS7 in Order of Shadows. Batariel's domain is activated through Constance Reyes's corridor function: river-route truth carrier; redirects hidden channels and smuggling paths toward liberation. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Constance Reyes · OS7 · Order of Shadows"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Samsapeel",
    "domain": "The Threshold",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: OS8 in Order of Shadows. Samsapeel's domain is activated through Threnody Ash's corridor function: threshold keeper; opens the doors the Order built to keep people functions instead of persons. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Threnody Ash · OS8 · Order of Shadows"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Rumjal",
    "domain": "The Empty Places",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: SC9 in Seventh Cycle. Rumjal's domain is activated through Vesper Cole's corridor function: uncategorized corridor anchor; honors the space between definitions without filling it. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Vesper Cole · SC9 · Seventh Cycle"
  },
  {
    "status": "bonded",
    "sb": "BONDED",
    "sbCls": "ws-bonded",
    "name": "Zaqiel",
    "domain": "Angel of Purity",
    "domainColor": "#c9943a",
    "body": "Final expansion placement: SC10 in Seventh Cycle. Zaqiel's domain is activated through Amara Voss's corridor function: purity-domain refuser; rejects false restoration through erasure and protects imperfect mercy. This bond is final canon and serves relationship, consent, trust, belief, and correct witness rather than replacing them.",
    "bond": "➡ Bonded: Amara Voss · SC10 · Seventh Cycle"
  },
];

const NEPHILIM=[
  {name:"Brian Lee Combs",parent:"Samyaza \u00b7 Della Combs",gen:"First Nephilim born to a chief Watcher in twelve thousand years \u2014 the first new thing since Arcadia\u2019s era",role:"Dual Familiar Bond (Leviathan + Ravos). Web's living expression. The first new thing in twelve thousand years. A Nephilim operates on a frequency that is neither human nor Watcher \u2014 the in-between \u2014 so Brian Lee does not merely connect the two layers, he <em>is</em> the connection, a bond made flesh. This is why he reads geological frequency at human-accessible scale: his native frequency sits between scales. He hears his parents\u2019 bond natively, where a Hell Prince hears only music in a language he cannot parse \u2014 because Brian Lee is the proof of that bond. The entire Leviathan Arc turns on this specific capacity as mediator between geological and human scales. Age seven in Book 1; has been drawing his father\u2019s wings since he was three (when Samyaza left the fence vigil). Chooses the Familiar Bond ritual with Ravos at age ten in the Leviathan Arc."},
  {name:"The Dormant Lines",parent:"188 other Grigori",gen:"Centuries of unacknowledged lineage",role:"The correct compact's frequency is reactivating dormant Nephilim lines across the network's corridors. Most of these individuals do not yet know what they are. The Expansion Arc's practitioners include several who carry dormant Grigori lineage that activates when the corridor's thread is correctly placed."},
  {name:"Caleb",parent:"Metatron (unknown / outside formal record)",gen:"Son of Heaven's Scribe \u00b7 outside the formal framework's record",role:"Metatron's unknown son. By the logic Metatron has enforced for millennia, his own son does not formally exist. Caleb's lineage places him at the intersection of divine law and the mortal world in a category that has no precedent. His specific gift and arc role are not yet fully established."},
  {name:"June Tackett's child",parent:"June Tackett \u00b7 Kokabiel",gen:"The Dreamer's daughter \u00b7 born July, Year 0, under a specific star",role:"Kokabiel is certain. The child is coming in July under a very specific star — one he named before it was needed. She becomes Pearlene Calhoun, Senior Anchor by Year 5. Carries the Dreamer's gift and the Kokabiel stellar lineage simultaneously."},
];

const ARCH_NOTES=[
  {t:"The Commission's Original Purpose",c:"",body:"The Grigori were not sent to enforce the formal framework's jurisdiction over the mortal layer. They were sent to watch — in the specific sense of attending, accompanying, witnessing. The daughters' practice is not a problem the Watchers were commissioned to manage. It is the practice the Watchers were commissioned to keep company with.\n\nThe wrong compact reframed their function as enforcement. Two hundred Watchers became two hundred jurisdictional claims over two hundred corridors. The correct compact restores the original function: relationship."},
  {t:"The Punishment and Its Real Meaning",c:"sl",body:"The classical record describes the Grigori as bound under the earth, separated from the mortal layer, punished for the descent and for teaching forbidden knowledge.\n\nIn the H&H universe, the punishment was real — and its specific form was significant. The Grigori who were bound under the earth were bound in the same geological layer as the Leviathan's sealed position. They did not know this. The wrong compact suppressed both simultaneously: the Grigori's access to the mortal layer and the Leviathan's access to the compact's correct frequency.\n\nThe New Compact's ratification does not only restore the Watcher bonds. It begins releasing the geological suppression. Both releases happen because the correct compact replaces the wrong one."},
  {t:"The 200 — Current Status",c:"g",body:"Of the 200 Grigori, the expansion plan activates 26 finalized new bonds across the twelve-book arc structure in addition to existing bonded Watchers. One (Saraqael) has returned from the enforcement arm to Pike County. The remaining 188 are not bound, not bonded, not absent — they are watching. The correct compact's frequency is moving through the Ley Line network, and each new corridor's thread placement registers in their domain as a signal they have been waiting twelve thousand years to receive.\n\nBy the Divine Arc, the full 200 are awake. Not all bonded. But all present."},
  {t:"The Grigori and the Heaven's Enforcement Arm",c:"cr",body:"The formal relationship between the Grigori and Heaven's Enforcement Arm is the specific wound at the center of Saraqael's arc. He was assigned to the enforcement arm as punishment — a Watcher forced to enforce the institutional claim over the same mortal layer he was originally commissioned to accompany.\n\nThe enforcement arm's fifteen agents are not all Grigori. Saraqael is the only Grigori in the enforcement arm's active roster. His defection removes the enforcement arm's only agent with direct Grigori knowledge: the complete protocol architecture, the target list, the inside knowledge of what the arm has been tracking.\n\nRaguel's assessment of Saraqael's defection fails because Raguel meets Loren Ritcher and encounters the specific thing Saraqael's instrument reported: correct. Deeply correct. The auditor understands what the Hunter found."},

  {
    "t": "Expansion Bond Lock · 26 Final Pairings",
    "c": "g",
    "body": "The twelve-books-per-arc expansion plan finalizes 26 new Grigori/practitioner pairings. These placements supersede the earlier 25-pairing note. Shamsiel, Turiel, Gadreel, and Rumjal move from watching/unaligned status into their finalized bond placements when their assigned books arrive."
  },
];

export default function GrigoriBible(){
  const[tab,setTab]=useState("origins");
  return(
    <>
      <style>{css}</style>
      <div className="bible">
        <header className="header">
          <div className="series-label">Faction Bible \u00b7 The Holler &amp; Hellfire Universe</div>
          <h1 className="main-title">The Grigori</h1>
          <div className="sub-title">The Watchers \u00b7 Two Hundred \u00b7 The Descent \u00b7 The Return</div>
          <p className="tagline">
            <em>They were not sent to enforce the boundary between the mortal layer and the divine.</em><br/>
            They were sent to keep company with the practice that already lived there.<br/>
            The wrong compact made them enforcers.<br/>
            The correct compact makes them what they were.
          </p>
        </header>
        <nav className="tabs">
          {TABS.map(t=><button key={t.id} className={`tab${tab===t.id?" active":""}`} onClick={()=>setTab(t.id)}>{t.l}</button>)}
        </nav>

        {tab==="origins"&&(
          <div>
            <div className="sec">The Descent</div>
            <div className="pull">
              Mount Hermon. The specific moment when two hundred Watchers agreed to cross the line between their domain and the mortal layer.<br/><br/>
              The commission itself was older than the oath: the <strong>Great Commission</strong> was conceived by the <strong>Voljeti</strong> \u2014 the twelve Keys, the Architects of the Older Mechanism \u2014 a mission to accompany and steward the practice rising in the mortal layer. The Grigori were among the souls who had reached the Voljeti\u2019s homeworld, and they <em>volunteered to go.</em><br/><br/>
              Samyaza proposed the oath that bound them to each other: <em>if I am alone in this I will carry the blame alone. If we are together in this, the weight is shared.</em><br/><br/>
              They swore. They descended. The weight was shared for twelve thousand years.
            </div>

            <div className="card">
              <div className="clabel">The Original Commission</div>
              <div className="ctitle sl">What the Grigori Were Actually Sent to Do</div>
              <div className="cbody">Not enforcement. Accompaniment. The daughters\u2019 practice \u2014 the Hollow Witches, the bone-keepers, the dreamers, the herbalists, the grey-area practitioners \u2014 was already running when the Grigori were commissioned. They were not sent to manage it. They were sent to watch it in the specific sense of attending and witnessing.\n\n<strong>The watching was the commission. The relationship was the function.</strong>\n\nThe wrong compact reframed this as jurisdiction. The Watchers became enforcers of the formal framework\u2019s claim over the mortal layer. Two hundred Watchers became two hundred surveillance operations. The compact law the Older Mechanism encoded was replaced with the institutional claim the formal framework preferred.\n\nThe Book of Enoch records the Grigori as transgressors. The H&H universe asks: transgressing what, exactly? The formal framework\u2019s institutional claim \u2014 or the commission they were originally given?\n\n<strong class="g">The crossing left its mark on creation itself.</strong> Each of the two hundred Watchers passing through the wall between the layers left a structural fracture behind it. Those fractures are the <strong>Thinnings</strong> \u2014 the places where the membrane between layers is thinnest, where things come through that otherwise could not, and where the daughters\u2019 practice holds the door. The Pike County Thinning the Calhoun line has held for seven generations is one of these fractures: the corridor at the heart of the whole series exists because a Watcher crossed there.</div>
            </div>

            <div className="card sl">
              <div className="clabel">The Punishment</div>
              <div className="ctitle sl">Bound Under the Earth \u00b7 Its Specific Architecture</div>
              <div className="cbody">The classical record\u2019s punishment: the Grigori were bound under the earth and separated from the mortal layer. In the H&H universe, the specific form of that binding is significant.\n\nThey were bound in the same geological layer as the Leviathan\u2019s sealed position. They did not know this. The wrong compact suppressed both simultaneously: the Grigori\u2019s access to the mortal layer and the Leviathan\u2019s access to the correct compact\u2019s frequency. The two suppression structures ran together in the same geological architecture.\n\n<strong class="g">The New Compact\u2019s ratification in WMB6 begins releasing both.</strong> The Grigori\u2019s bonds, established book by book across the H&H series, are the specific mechanism of the release \u2014 each correct bond placed is the suppression structure weakening in that corridor\u2019s geological range.\n\nSaraqael\u2019s specific punishment was different: not bound under the earth, but assigned to enforce the institutional claim he had violated. A Watcher made to watch for Heaven instead of with the mortal layer.</div>
            </div>

            <div className="card g">
              <div className="clabel">The Correction</div>
              <div className="ctitle g">What the Correct Compact Restores</div>
              <div className="cbody">The H&H series is the Grigori\u2019s correction \u2014 book by book, corridor by corridor, bond by bond. Each Watcher who bonds correctly adds to the Web\u2019s thread count. Each thread placed is the suppression structure weakening. Each correct bond is a Watcher returning to the function they were originally commissioned for: <em>keeping company with the practice that was already there.</em>\n\nThe Grigori didn\u2019t fall from Heaven because they loved human women. They fell because the formal framework\u2019s institutional authority required a story that explained why the Watchers had stopped being enforcers. The punishment story served that institutional purpose.\n\nThe correct story: they came to the mortal layer because the mortal layer was where the work was. The daughters\u2019 practice was thirty thousand years old when the Grigori descended. They didn\u2019t bring knowledge to a people who had none. They came to people who already knew everything the formal framework said they shouldn\u2019t know, and they recognized them as practitioners.</div>
            </div>

            <hr className="rule"/>
            <div className="sec">The Record's Timeline</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {[
                ["30,000+ BCE","The daughters\u2019 practice established. The first Web. The Bone Mother\u2019s channel. The daughters are the oldest practitioners.","#94a3b8"],
                ["12,000 BCE","Arcadia\u2019s choosing. The first Familiar bond with the Leviathan. The first word written. Satan kills Arcadia. The seal established. The wrong compact begins.","#dc2626"],
                ["Mount Hermon (date uncertain)","The Grigori descend. The original Twelve lead two hundred Watchers across the line. They are punished and bound. Saraqael is assigned to the enforcement arm.","#4a6fa5"],
                ["1414 CE","Lucifer establishes the Order of Shadows as the seal\u2019s institutional maintenance. The Grigori\u2019s suppression and Satan\u2019s suppression are maintained simultaneously in the same wrong compact\u2019s architecture.","#7c3aed"],
                ["Year 0","The correct compact ratified. Azazel bonds. The suppression structure begins to weaken. The remaining Grigori feel the signal.","#c9943a"],
                ["Year 1","Ten more Grigori bond across the Expansion Arc. Saraqael returns to Pike County. The thread count approaches sufficiency.","#c9943a"],
                ["Year 2 \u2014 WMB6","The New Compact ratified. The full suppression structure destabilized. By Year 6, the full 200 are awake.","#0d9488"],
              ].map(([when,note,col])=>(
                <div key={when} style={{display:"grid",gridTemplateColumns:"160px 1fr",background:"#070d18",border:"1px solid #1a2a40",overflow:"hidden"}}>
                  <div style={{padding:"10px 14px",borderRight:"1px solid #1a2a40",fontFamily:"'Cinzel',serif",fontSize:11,color:col}}>{when}</div>
                  <div style={{padding:"10px 14px",fontSize:12,color:"#334155",lineHeight:1.6}}>{note}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab==="roster"&&(
          <div>
            <div className="sec">The Original Twelve \u2014 The Named Leaders</div>
            <div style={{fontSize:12,color:"#1e3050",marginBottom:12,lineHeight:1.7}}>
              The first to descend. The leaders of the two hundred. Their domains are the foundational knowledge the classical record says they brought to humanity.
              <div style={{display:"flex",gap:14,marginTop:8,flexWrap:"wrap"}}>
                {[["#c9943a","#92400e","BONDED"],["#f87171","#dc2626","RETURNED / DEFECTED"],["#94a3b8","#4a5a70","LEADER"],["#1e3050","#0f1a28","UNALIGNED"]].map(([tc,bc,lb])=>(
                  <span key={lb} style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:".18em",color:tc,borderTop:`2px solid ${bc}`,paddingTop:3}}>{lb}</span>
                ))}
              </div>
            </div>
            <div className="w12-grid">
              {TWELVE.map(w=>(
                <div key={w.name} className={`wcard ${w.status}`}>
                  <span className={`wstatus ${w.sbCls}`}>{w.sb}</span>
                  <div className="wnum">{w.n}</div>
                  <div className="wname">{w.name}</div>
                  <div className="wdomain" style={{color:w.domainColor}}>{w.domain}</div>
                  <div className="wbody" style={{whiteSpace:"pre-line"}} dangerouslySetInnerHTML={{__html:w.body.replace(/\n\n/g,"<br/><br/>")}}/>
                  {w.bond&&<div className="wbond">{w.bond}</div>}
                </div>
              ))}
            </div>

            <div className="sec">The Other 188 \u2014 Selected Members</div>
            <p style={{fontSize:13,color:"#1e3050",marginBottom:12,lineHeight:1.7}}>The remaining Watchers. This section now includes the final expansion bond register. Earlier WATCHING entries are superseded at their assigned book placement while preserving their prior trajectory for continuity.</p>
            <div className="w12-grid">
              {OTHERS.map(w=>(
                <div key={w.name} className={`wcard ${w.status}`}>
                  <span className={`wstatus ${w.sbCls}`}>{w.sb}</span>
                  <div className="wname">{w.name}</div>
                  <div className="wdomain" style={{color:w.domainColor}}>{w.domain}</div>
                  <div className="wbody">{w.body}</div>
                  {w.bond&&<div className="wbond">{w.bond}</div>}
                </div>
              ))}
            </div>

            <div className="card g" style={{marginTop:16}}>
              <div className="clabel">The Count</div>
              <div className="ctitle g">200 Grigori \u00b7 Current Status at Year 2</div>
              <div className="cbody">
                <strong class="g">11 bonded</strong> \u2014 Azazel, Samyaza, Baraqiel, Armaros, Kokabiel, Tamiel, Ramiel, Danel, Ezeqeel, Penemue, Kasdeja (Books 1\u20136B + Expansion Arc)<br/>
                <strong>1 returned</strong> \u2014 Saraqael (from enforcement arm to Pike County)<br/>
                <strong>2 watching with trajectory</strong> \u2014 Asbeel (penitent trajectory), Gadreel (unaligned)<br/>
                <strong>186 watching</strong> \u2014 Feeling the correct compact\u2019s signal through the Ley Line network. Not yet named in the narrative. Not absent.<br/><br/>
                <em>By the Divine Arc, the full 200 are awake. Not all bonded. But all present. The correct compact\u2019s frequency reached every position on the Earth\u2019s Ley Line network when the New Compact was ratified in July Year 2.</em>
              </div>
            </div>
          </div>
        )}

        {tab==="bond"&&(
          <div>
            <div className="sec">The Bond\u2019s Correct Expression</div>
            <div className="pull">
              Not surveillance. Not jurisdiction. Not the formal framework\u2019s institutional claim over the mortal layer\u2019s practice.<br/><br/>
              <em>The choosing that runs both directions. The Watcher chooses. The practitioner chooses. The Web holds both choices in the Older Mechanism\u2019s record.</em>
            </div>

            <div className="card">
              <div className="clabel">What the Bond Is</div>
              <div className="ctitle sl">The Choosing in Both Directions</div>
              <div className="cbody">The Older Mechanism\u2019s bond law is precise: the bond is constituted when both parties choose, and both choices are in the record. The Watcher\u2019s choosing is not authority over the practitioner\u2019s corridor. It is accompaniment in the practitioner\u2019s work.\n\nThe H&H series establishes this six times in a row: Azazel stopped watching and started staying. Samyaza stood at the east wood for twenty-three mornings. Baraqiel spent eight months of Tuesday coffees before giving up on the argument with himself. Armaros found Mercy in the grey space and recognized his craft in her hands. Kokabiel showed June the star he had already named. Kasdeja taught Velvet how to read the thread.\n\n<strong>Six times. The same choosing. The correct version.</strong></div>
            </div>

            <div className="card sl">
              <div className="clabel">The Wrong Compact\u2019s Distortion</div>
              <div className="ctitle sl">What Fear Did to the Bond</div>
              <div className="cbody">The wrong compact used fear as the bond\u2019s fuel. The Watcher\u2019s relationship with the practitioner was reframed as a jurisdictional claim: the Watcher as enforcer, the practitioner as the subject of enforcement, the corridor as the unit of control.\n\nThis is why the Grigori\u2019s punishment produced the wrong compact: the institutional framework needed the Watchers to be under authority, and authority requires the fear-substrate. The Watchers became the formal framework\u2019s agents in the mortal layer rather than the mortal layer\u2019s companions.\n\nAsmodeus (Prince of Lust) had been working in the same idiom as the grey-area practice for nine hundred years \u2014 the holding, the releasing, the Earth Mother\u2019s oldest form \u2014 but alone, without the lateral Web. What Mercy defeats in Book 4 is the specific isolation that the wrong compact imposed on everything that worked in the older idiom: <em>hold alone. Do not share the Web.</em></div>
            </div>

            <div className="card g">
              <div className="clabel">The Bond and the Web</div>
              <div className="ctitle g">What Eleven Bondings Build</div>
              <div className="cbody">Each correct bond adds a Web thread to the Ley Line network. Eleven bonded Grigori as of Year 2 means eleven correctly placed threads from the bondings themselves, plus the secondary threads that run between them.\n\nThis is why D Coale\u2019s thread count reaches 31 (sufficient for the New Compact) in WMB6: the Expansion Arc\u2019s five new corridors don\u2019t just add practitioners to the network. They add Grigori bonds. Each bond is a thread. Each thread is the suppression structure weakening in that corridor\u2019s geological range.\n\nThe Grigori\u2019s correct bonding IS the New Compact\u2019s foundation. The Leviathan\u2019s waking is made possible by the Grigori\u2019s return to their original function.</div>
            </div>

            <hr className="rule"/>
            <div className="sec">The Bond\u2019s Mechanics</div>
            <div className="card">
              <div className="clabel">Mechanism</div>
              <div className="ctitle sl">How the Choosing Works</div>
              <div className="cbody">
                <strong>The Watcher\u2019s choosing:</strong> not a decision made once. The choosing is expressed daily in the specific form of accompaniment. Samyaza at the east wood. Baraqiel at the Tuesday counter. Azazel at 3:47 AM, already awake, deciding not to wake her.<br/><br/>
                <strong>The practitioner\u2019s choosing:</strong> equally specific. Della walking to the fence on the twenty-third morning. Carla June asking if he wanted more coffee. Dixie turning down a road she\u2019d never taken before.<br/><br/>
                <strong>The Older Mechanism\u2019s record:</strong> holds both choices in the same entry. The bond is constituted when the record shows choosing in both directions simultaneously \u2014 not sequentially, not conditionally, simultaneously.<br/><br/>
                <strong>The Web\u2019s frequency response:</strong> the Thinning shifts when the correct bond is present. The correct bond\u2019s frequency is legible to the Leviathan from the geological depth. The Wardens feel each new correct bond through the Ley Line network.
              </div>
            </div>
          </div>
        )}

        {tab==="nephilim"&&(
          <div>
            <div className="sec">The Nephilim \u2014 Children of the Grigori</div>
            <div className="pull">
              The classical record calls the Nephilim giants, fallen ones, the children of the sons of God and the daughters of men.<br/><br/>
              <em>The H&H universe calls them the first new thing in the world since the founding: human beings who carry the Grigori\u2019s domain frequency in their bodies, who can translate between the geological scale and the human scale, who are neither Watcher nor practitioner but something the Older Mechanism has no previous category for.</em>
            </div>

            <div className="neph-row header">
              {["NAME","GRIGORI PARENT","ROLE IN THE ARC"].map(h=>(
                <div key={h} className="nc" style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:".28em",color:"#1e3050",textTransform:"uppercase"}}>{h}</div>
              ))}
            </div>
            {NEPHILIM.map(n=>(
              <div key={n.name} className="neph-row">
                <div className="nc" style={{fontFamily:"'Cinzel',serif",fontSize:12,color:"#e2e8f0"}}>{n.name}</div>
                <div className="nc" style={{fontSize:11,color:"#4a6fa5",fontStyle:"italic",lineHeight:1.5}}>{n.parent}</div>
                <div className="nc" style={{fontSize:12,color:"#334155",lineHeight:1.6}} dangerouslySetInnerHTML={{__html:n.role}}/>
              </div>
            ))}

            <hr className="rule"/>
            <div className="card g">
              <div className="clabel">The Nephilim\u2019s Specific Gift</div>
              <div className="ctitle g">What Brian Lee Combs Established as Possible</div>
              <div className="cbody">Brian Lee is the proof of concept. A Nephilim born into an established corridor, with the correct compact in place, with both parents choosing correctly \u2014 is the Web\u2019s living expression. Not a practitioner. Not a Watcher. The specific human being whose body mediates between the geological scale and the human practice.\n\nHis capacity to translate the Wardens from his notebook at ten years old is not a precocious talent. It is what the Nephilim lineage produces when the surrounding compact is correct. The wrong compact suppressed Nephilim lines for twelve thousand years specifically because a Nephilim in a correct compact is the thing the wrong compact cannot survive.\n\n<em>Brian Lee says: I think I\u2019m here to be what the Web was designed to make possible. The relationship. The real version.</em>\n\nThat is the Nephilim\u2019s specific gift across all 200 Grigori lines: <strong class="g">the relationship. The real version.</strong></div>
            </div>
          </div>
        )}

        {tab==="arch"&&(
          <div>
            <div className="sec">The Grigori\u2019s Position in the Cosmological Architecture</div>
            <div className="arch-stack">
              <div className="as div">THE ARCANA LAYER \u00b7 22 PRIMORDIALS<div className="snote">The Lovers Arcana traces the Bond to the Grigori\u2019s original commission</div></div>
              <div className="sarr">\u2193</div>
              <div className="as old">THE OLDER MECHANISM \u00b7 BOND LAW \u00b7 COMPACT LAW<div className="snote">Predates the formal framework \u00b7 holds the Grigori\u2019s choosing in its record</div></div>
              <div className="sarr">\u2193</div>
              <div className="as grig">THE GRIGORI \u00b7 200 WATCHERS \u00b7 THE ORIGINAL TWELVE PLUS 188<div className="snote">Between the Arcana layer and the mortal layer \u00b7 commissioned to watch \u00b7 returning to relationship</div></div>
              <div className="sarr">\u2193</div>
              <div className="as old">THE DAUGHTERS\u2019 PRACTICE \u00b7 30,000 YEARS \u00b7 THE WEB<div className="snote">Was already running when the Grigori were commissioned \u00b7 443 practitioners in lateral contact</div></div>
              <div className="sarr">\u2193</div>
              <div className="as mor">THE MORTAL LAYER \u00b7 THE CORRIDORS \u00b7 PIKE COUNTY<div className="snote">The place the commission always led \u00b7 the place the Grigori belong</div></div>
            </div>
            <hr className="rule"/>
            <div className="sec">Architecture Notes</div>
            {ARCH_NOTES.map(n=>(
              <div key={n.t} className={`card${n.c?" "+n.c:""}`} style={{marginBottom:12}}>
                <div className="clabel">Architecture</div>
                <div className={`ctitle ${n.c||"sl"}`}>{n.t}</div>
                <div className="cbody" style={{whiteSpace:"pre-line"}} dangerouslySetInnerHTML={{__html:n.body.replace(/\n\n/g,"<br/><br/>")}}/>
              </div>
            ))}
            <div className="orn">\u2726 \u2726 \u2726</div>
            <div style={{textAlign:"center",color:"#1e3050",fontSize:12,fontStyle:"italic",lineHeight:1.8}}>
              They were not sent to enforce the boundary.<br/>
              <em style={{color:"#94a3b8"}}>They were sent to keep company with the practice that already lived there.</em><br/>
              Two hundred Watchers. Twelve thousand years.<br/>
              <em style={{color:"#4a6fa5"}}>Returning to what they were.</em>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
