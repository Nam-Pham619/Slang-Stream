// ══════════════════════════════════════
//  SLANG DATA
// ══════════════════════════════════════
const SLANG_DATA = [
  {
    word: "rizz", tag: "hot", year: 2022,
    def: "Natural charm or charisma, especially the ability to attract romantic partners through one's vibe alone.",
    origin: "Derived from 'charisma', popularized by Kai Cenat and streamer culture on Twitch around 2021-2022 before going fully mainstream via TikTok.",
    context: "Gen Z coined it, but it exploded when mainstream media started reporting on it, and even the Oxford Dictionary named it Word of the Year 2023.",
    example: "Bro showed up to prom with unspoken rizz — didn't say a word and had everyone obsessed.",
    geo: { lat:40.7128, lng:-74.006, city:"New York (NYC Twitch scene)", radius:800 },
    communities: [
      {name:"Twitch Streaming",role:"Origin",pct:88},
      {name:"Black Twitter",role:"Amplifier",pct:74},
      {name:"TikTok Gen Z",role:"Mainstreamer",pct:91},
      {name:"NBA Twitter",role:"Adopter",pct:55}
    ],
    timeline: [
      {year:"2021",event:"Kai Cenat coins it in NYC streaming circles",platform:"Twitch"},
      {year:"2022",event:"Goes viral on TikTok with rizz tutorials",platform:"TikTok"},
      {year:"2023",event:"Oxford names it Word of the Year",platform:"Mainstream media"},
      {year:"2024",event:"Used in brand marketing and mainstream TV",platform:"Global"}
    ]
  },
  {
    word: "slay", tag: "viral", year: 2023,
    def: "To perform exceptionally well, look stunning, or execute anything with complete confidence and excellence.",
    origin: "Rooted in Black and LGBTQ+ drag culture of the 1980s Harlem ballroom scene. Brought into mainstream use through RuPaul's Drag Race, then turbocharged by Beyonce's 2016 Formation.",
    context: "A perfect example of AAVE (African American Vernacular English) traveling through queer spaces into mass pop culture — often without credit to its origins.",
    example: "She walked into the room, looked everyone dead in the eye, and just slayed.",
    geo: { lat:40.8448, lng:-73.8648, city:"Harlem, New York", radius:1200 },
    communities: [
      {name:"Black LGBTQ+ Ballroom",role:"Origin",pct:95},
      {name:"Drag Culture",role:"Carrier",pct:82},
      {name:"BeyHive / Stans",role:"Amplifier",pct:78},
      {name:"Gen Alpha",role:"Current driver",pct:66}
    ],
    timeline: [
      {year:"1980s",event:"Born in Harlem ballroom 'houses' as competitive praise",platform:"Underground culture"},
      {year:"2009",event:"RuPaul's Drag Race brings it to wider audiences",platform:"TV/Logo Network"},
      {year:"2016",event:"Beyonce's Formation cements mainstream adoption",platform:"Music"},
      {year:"2023",event:"Gen Alpha overuses it, slaying everything from math tests to sandwiches",platform:"TikTok/Instagram"}
    ]
  },
  {
    word: "bussin", tag: "hot", year: 2021,
    def: "Exceptionally good, typically referring to food but extended to anything outstanding.",
    origin: "AAVE term meaning something is delicious or amazing. First documented in Southern Black American communities, popularized nationally by food TikTok creators.",
    context: "Famous for the 2021 'bussin bussin' meme where TikTokers would hyper-enthusiastically review foods.",
    example: "This birria taco is genuinely bussin, no cap.",
    geo: { lat:29.7604, lng:-95.3698, city:"Houston, TX", radius:1100 },
    communities: [
      {name:"Black Southern Culture",role:"Origin",pct:90},
      {name:"Food TikTok",role:"Amplifier",pct:79},
      {name:"Gaming communities",role:"Adopter",pct:41},
      {name:"Suburban Gen Z",role:"Mainstreamer",pct:63}
    ],
    timeline: [
      {year:"Pre-2000",event:"Used in AAVE, particularly in Southern US communities",platform:"Oral tradition"},
      {year:"2020",event:"Starts appearing in food review TikToks",platform:"TikTok"},
      {year:"2021",event:"'Bussin bussin' format goes massively viral",platform:"TikTok"},
      {year:"2022",event:"Enters brand vocabulary and parody territory",platform:"Mass media"}
    ]
  },
  {
    word: "no cap", tag: "warm", year: 2021,
    def: "Truthfully, without lying. The opposite is 'cap' (a lie). Used to emphasize sincerity.",
    origin: "AAVE slang, with 'cap' meaning a lie or exaggeration. Popularized by rappers Future and Young Thug in the late 2010s before Twitter and TikTok made it ubiquitous.",
    context: "One of the clearest examples of hip-hop slang crossing into mainstream teen vocabulary globally — heard in schools worldwide.",
    example: "I cried watching that movie, no cap.",
    geo: { lat:33.749, lng:-84.388, city:"Atlanta, GA", radius:1500 },
    communities: [
      {name:"Atlanta Hip-Hop",role:"Origin",pct:85},
      {name:"Rap Twitter",role:"Amplifier",pct:77},
      {name:"Suburban teens",role:"Mainstreamer",pct:88},
      {name:"International K-pop fans",role:"Global spreader",pct:52}
    ],
    timeline: [
      {year:"2012",event:"Appears in AAVE — 'no cap' as emphasis in rap circles",platform:"Music"},
      {year:"2017",event:"Future & Young Thug mainstream it in lyrics",platform:"Hip-hop"},
      {year:"2019",event:"Twitter / meme usage explodes",platform:"Social media"},
      {year:"2021-now",event:"Used globally, even by grandparents ironically",platform:"Global"}
    ]
  },
  {
    word: "understood the assignment", tag: "viral", year: 2022,
    def: "Performed exactly what was needed, often used to praise someone who fully committed to a look, role, or situation.",
    origin: "Emerged from stan Twitter and Black social media, initially used in fashion/music contexts praising celebrities who fully committed to a theme.",
    context: "Popularized by the song Assignment by Tay Money and widely spread through celebrity Twitter reactions.",
    example: "Zendaya at the Met Gala? She 100% understood the assignment.",
    geo: { lat:32.7767, lng:-96.797, city:"Dallas, TX (Tay Money origin)", radius:900 },
    communities: [
      {name:"Black Twitter / stan culture",role:"Origin",pct:83},
      {name:"Fashion Twitter",role:"Carrier",pct:76},
      {name:"Celebrity gossip media",role:"Amplifier",pct:69},
      {name:"Corporate social media",role:"Late adopter",pct:44}
    ],
    timeline: [
      {year:"2020",event:"Tay Money releases Assignment, phrase begins circulating",platform:"Twitter"},
      {year:"2021",event:"Goes mainstream via celebrity reaction tweets",platform:"Twitter/Instagram"},
      {year:"2022",event:"Peak usage in award season coverage",platform:"Mainstream media"},
      {year:"2023",event:"Overused by brands — begins losing edge",platform:"Marketing"}
    ]
  },
  {
    word: "delulu", tag: "new", year: 2023,
    def: "Delusional in a self-aware, sometimes endearing way — believing something will happen against all evidence, especially in romance or fandoms.",
    origin: "Shortened from 'delusional', originated in K-pop stan communities on TikTok and Twitter, where fans jokingly admitted to fantasizing about their idols.",
    context: "'Delulu is the solulu' became a meme philosophy — meaning delusion is the solution to life's problems.",
    example: "I'm being completely delulu but I just know Harry Styles wrote that song about me.",
    geo: { lat:37.5665, lng:126.978, city:"Seoul, Global K-pop diaspora", radius:600 },
    communities: [
      {name:"K-pop stan Twitter",role:"Origin",pct:94},
      {name:"Romance BookTok",role:"Amplifier",pct:71},
      {name:"Dating app culture",role:"Adopter",pct:58},
      {name:"Mental health TikTok",role:"Reframer",pct:49}
    ],
    timeline: [
      {year:"2022",event:"K-pop fans use it to describe idol-fantasy behavior",platform:"Twitter/TikTok"},
      {year:"2023",event:"'Delulu is the solulu' meme goes global",platform:"TikTok"},
      {year:"2023",event:"Used as self-help framing for manifesting",platform:"TikTok"},
      {year:"2024",event:"Psychology accounts discuss healthy vs unhealthy delusion",platform:"Instagram"}
    ]
  },
  {
    word: "era", tag: "hot", year: 2023,
    def: "A defined period of one's life characterized by a particular vibe, look, or mindset. 'I'm in my villain era.'",
    origin: "Popularized massively by Taylor Swift's Eras Tour, though the usage predates it in stan circles and identity-defining social media posts.",
    context: "The phrase lets people rebrand life phases — 'healing era', 'glow-up era', 'rot era'. It's aspirational identity framing in compressed form.",
    example: "I deleted all my apps and went offline for a month. I'm in my monastic era.",
    geo: { lat:36.1627, lng:-86.7816, city:"Nashville, TN (Taylor Swift HQ)", radius:1300 },
    communities: [
      {name:"Swifties / stan culture",role:"Major amplifier",pct:89},
      {name:"Tumblr / fandom culture",role:"Pre-existing carrier",pct:72},
      {name:"Mental health TikTok",role:"Adopter",pct:66},
      {name:"LinkedIn culture",role:"Parody adopter",pct:38}
    ],
    timeline: [
      {year:"2019",event:"'Era' usage as identity phase begins on Tumblr",platform:"Tumblr"},
      {year:"2022",event:"Taylor Swift announces the Eras Tour concept",platform:"Music"},
      {year:"2023",event:"'___ era' format becomes universal self-ID meme",platform:"TikTok/Twitter"},
      {year:"2024",event:"Corporations and politicians adopt it awkwardly",platform:"Mass media"}
    ]
  },
  {
    word: "lowkey", tag: "warm", year: 2020,
    def: "Secretly, quietly, or to a restrained degree. Used to signal something you feel but don't want to loudly admit.",
    origin: "Originally AAVE slang used in hip-hop since the early 2000s. Gained national traction via rap lyrics and social media around 2015-2017.",
    context: "The perfect complement to 'highkey' — which means overtly or very much so. Together they created a sliding scale for emotional admission.",
    example: "I lowkey love that cringe reality show, don't tell anyone.",
    geo: { lat:34.0522, lng:-118.2437, city:"Los Angeles, CA", radius:1400 },
    communities: [
      {name:"Black/Hip-hop culture",role:"Origin",pct:86},
      {name:"Rap Twitter",role:"Carrier",pct:74},
      {name:"Suburban teens",role:"Mainstreamer",pct:82},
      {name:"Corporate casual",role:"Late adopter",pct:55}
    ],
    timeline: [
      {year:"Early 2000s",event:"AAVE usage — under the radar, on the low",platform:"Hip-hop culture"},
      {year:"2015",event:"Rap lyrics bring it to national audiences",platform:"Music"},
      {year:"2017",event:"Social media makes it a universal teen staple",platform:"Twitter/Instagram"},
      {year:"2021-now",event:"Appears in corporate emails without irony",platform:"Office culture"}
    ]
  },
  {
    word: "main character", tag: "cool", year: 2021,
    def: "Feeling or acting like the protagonist of a movie or story. Can be used seriously (self-empowerment) or ironically (someone being dramatic).",
    origin: "Born from the self-empowerment aesthetic on TikTok, where creators would film themselves doing mundane activities dramatically, as if in a film montage.",
    context: "Part of a broader 'you are the main character of your life' self-narrative trend that blends therapy language with cinematic self-image.",
    example: "She bought a train ticket to nowhere, ordered an espresso, and started journaling. Full main character energy.",
    geo: { lat:41.8781, lng:-87.6298, city:"Chicago (early TikTok content creators)", radius:750 },
    communities: [
      {name:"TikTok aesthetic creators",role:"Origin",pct:88},
      {name:"BookTok",role:"Amplifier",pct:63},
      {name:"Mental health communities",role:"Adopter",pct:59},
      {name:"Film/TV Twitter",role:"Critic",pct:45}
    ],
    timeline: [
      {year:"2020",event:"TikTok montage trend — living as the main character",platform:"TikTok"},
      {year:"2021",event:"Goes mainstream, used to describe both self-love and arrogance",platform:"Twitter"},
      {year:"2022",event:"Adopted by therapy-language adjacent wellness influencers",platform:"Instagram"},
      {year:"2023",event:"Used ironically to describe people being oblivious",platform:"TikTok"}
    ]
  },
  {
    word: "ate", tag: "hot", year: 2022,
    def: "Did something exceptionally well, usually performance or aesthetics. 'She ate that look.' Also used as 'ate and left no crumbs.'",
    origin: "From AAVE and Black drag culture — specifically ballroom slang where performers would 'eat' a category, meaning completely dominate it.",
    context: "'And left no crumbs' extends the metaphor — not only did they eat, they cleaned their plate. It signifies perfection.",
    example: "The choreography in that video? She ate and left absolutely no crumbs.",
    geo: { lat:40.6892, lng:-74.0445, city:"New York — Ballroom scene", radius:900 },
    communities: [
      {name:"Black drag/ballroom culture",role:"Origin",pct:93},
      {name:"RuPaul community",role:"Amplifier",pct:80},
      {name:"Fashion Twitter",role:"Carrier",pct:71},
      {name:"Sports Twitter",role:"Adopter",pct:48}
    ],
    timeline: [
      {year:"1980s-90s",event:"Ballroom culture — 'eating a category' means dominating",platform:"Underground balls"},
      {year:"2010",event:"RuPaul's Drag Race brings vocabulary wider",platform:"TV"},
      {year:"2021",event:"Fashion and stan Twitter mainstream 'ate'",platform:"Twitter"},
      {year:"2022-now",event:"'Ate and left no crumbs' becomes universal praise format",platform:"TikTok/Instagram"}
    ]
  },
  {
    word: "giving", tag: "new", year: 2022,
    def: "Having the vibe, energy, or aesthetic of something. 'This outfit is giving 90s supermodel.'",
    origin: "From Black queer vernacular and ballroom culture — 'giving' as in radiating or embodying an energy. Popularized through fashion TikTok and Twitter.",
    context: "It's a compliment machine — anything can be 'giving' something. It's faster and more evocative than 'reminds me of.'",
    example: "This coffee shop is giving Wes Anderson film set, I'm obsessed.",
    geo: { lat:40.7128, lng:-74.006, city:"New York City", radius:800 },
    communities: [
      {name:"Black queer culture",role:"Origin",pct:91},
      {name:"Fashion influencers",role:"Carrier",pct:77},
      {name:"Interior design TikTok",role:"Spreader",pct:60},
      {name:"Mainstream media",role:"Late adopter",pct:42}
    ],
    timeline: [
      {year:"Pre-2015",event:"AAVE ballroom — 'giving face', 'giving energy'",platform:"Black queer spaces"},
      {year:"2020",event:"Fashion Twitter starts using 'giving [vibe]' structure",platform:"Twitter"},
      {year:"2022",event:"TikTok explodes the format into every niche",platform:"TikTok"},
      {year:"2023",event:"Brand social media adopts it — often badly",platform:"Marketing"}
    ]
  },
  {
    word: "brain rot", tag: "viral", year: 2024,
    def: "The mental state caused by excessive consumption of low-effort, absurdist internet content. Also refers to the content itself.",
    origin: "Originated in ironic internet culture — people joking about their attention spans being destroyed by algorithm-fed content loops. Became the Oxford Word of the Year 2024.",
    context: "'Brain rot content' is its own genre — absurdist, disconnected from reality, funny to no one outside the community.",
    example: "I watched 4 hours of random skibidi toilet videos. My brain is completely rotted.",
    geo: { lat:37.3861, lng:-122.0839, city:"Silicon Valley (algorithmic origin)", radius:600 },
    communities: [
      {name:"Irony/meme culture",role:"Origin",pct:87},
      {name:"Gaming communities",role:"Carrier",pct:79},
      {name:"Neurodivergent TikTok",role:"Adopter",pct:66},
      {name:"Academic/media critics",role:"Analyser",pct:55}
    ],
    timeline: [
      {year:"2022",event:"Ironic self-description of doom-scrolling side effects",platform:"Reddit/Twitter"},
      {year:"2023",event:"'Brain rot content' becomes a defined genre",platform:"TikTok"},
      {year:"2024",event:"Oxford names it Word of the Year",platform:"Mainstream media"},
      {year:"2024",event:"Parents and educators start using it unironically",platform:"Global"}
    ]
  }
];
