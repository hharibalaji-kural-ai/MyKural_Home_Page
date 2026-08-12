// Central place for site copy. Swap strings here to re-brand or localize.

export const brand = {
  name: "Kural AI",
  tagline: "குரல் — the voice that listens back",
  mission:
    "Kural AI turns every phone call into structured feedback and real-time support — in Tamil first, powered by voice AI built for how India actually speaks.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Values ", to: "/Value" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Kural 1-Way", to: "/products/kural-1-way", desc: "Voice feedback collection" },
      { label: "Kural 2-Way", to: "/products/kural-2-way", desc: "Conversational voice support" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: "18M+", label: "Voice minutes processed" },
  { value: "97%", label: "Tamil transcription accuracy" },
  { value: "<2s", label: "Average response latency" },
  { value: "4.8/5", label: "Average caller sentiment" },
];

export const homeFeatures = [
  {
    title: "Built for the regional voice",
    body: "Kural AI is tuned on real Tamil call-center audio — accents, code-switching, background noise and all — so it understands callers the way a person would.",
    icon: "waveform",
  },
  {
    title: "No app. No survey fatigue.",
    body: "Customers just talk. There's nothing to download and nothing to type, so feedback and support happen at the moment people actually have something to say.",
    icon: "phone",
  },
  {
    title: "Every call becomes structured data",
    body: "Raw audio is transcribed, scored for sentiment and routed into the metrics your team already tracks — automatically, in minutes, not weeks.",
    icon: "chart",
  },
  {
    title: "Enterprise-grade from day one",
    body: "Encrypted call storage, role-based access and audit trails come standard, so voice data is as governed as any other system of record.",
    icon: "shield",
  },
];

export const products = {
  kural1: {
    id: "kural-1-way",
    name: "Kural 1-Way",
    eyebrow: "Kural 1-Way",
    headline: "Voice feedback that reaches every customer, in their own language",
    summary:
      "Kural 1-Way is an automated outbound voice service that collects structured customer feedback — in any regional language, at any scale, with no app required.",
    // description:
    //   "Instead of a text survey nobody finishes, Kural 1-Way places a short, natural-sounding voice call after a purchase, delivery or service visit. Customers respond in their own words, in Tamil, at their own pace. The system listens, asks a smart follow-up when an answer is vague, and closes the loop — no call-center headcount required.",
    
    enterpriseBenefits: [
      {
        title: "Feedback at true scale",
        body: "Run thousands of outbound feedback calls per day without a call-center headcount increase.",
      },
      {
        title: "Language-matched response rates",
        body: "Calling customers in their own language measurably lifts pickup and completion rates versus generic IVR.",
      },
      {
        title: "Structured, analysis-ready data",
        body: "Every call resolves into clean, structured responses — ratings, categories, transcripts — ready for your dashboards.",
      },
      {
        title: "Fast deployment",
        body: "Give us your survey or feedback script once; we localize it across every regional language you operate in.",
      },
    ],
    endUserBenefits: [
      {
        title: "No app, no literacy required",
        body: "Customers answer a normal phone call and speak naturally — nothing to download, read, or type.",
      },
      {
        title: "Short, respectful of their time",
        body: "Calls are designed to be brief and conversational, not a long scripted questionnaire read at them.",
      },
      {
        title: "Available on any phone",
        body: "Works on basic feature phones as well as smartphones — no data connection needed.",
      },
      
    ],
  },
  kural2: {
    id: "kural-2-way",
    name: "Kural 2-Way",
    eyebrow: "Conversational Voice Support",
    headline: "A support line that actually holds a conversation.",
    summary:
      "Kural 2-Way is an interactive voice AI agent that handles inbound customer support and query resolution in Tamil — understanding follow-up questions, checking order status, and escalating to a human only when it truly needs to.",
    description:
      "Where Kural 1-Way listens and records, Kural 2-Way talks back. It picks up support calls, understands intent in Tamil in real time, pulls live data from your systems to answer questions, and keeps the thread of a conversation across multiple turns — so customers never have to repeat themselves.",
    capabilities: [
      {
        title: "Real-time conversation",
        body: "Understands and responds mid-call, handling interruptions, follow-up questions, and topic changes naturally.",
      },
      {
        title: "Multi-turn memory",
        body: "Keeps track of what was said earlier in the call, so customers never have to repeat themselves.",
      },
      
      {
        title: "Seamless human handoff",
        body: "When a query needs a person, the call transfers with a transcript and summary already prepared.",
      },
      {
        title: "Query resolution",
        body: "Answers common support questions directly and routes complex cases to a human agent with full context.",
      },
      
    ],
  },
};

// Team section removed

export const about = {
  headline: "Built for the Enterprise, Designed for the People",
  body: [
    "Kural bridges the gap between organizations and their customers through the power of voice.",
  ],
  values: [
    { title: "Language first", body: "Tamil isn't a translation layer bolted onto an English model — it's the foundation we build on." },
    { title: "Respect the caller's time", body: "Every interaction is designed to be as short as it can be and as long as it needs to be." },
    { title: "Data with a chain of custody", body: "Every call is encrypted, access-controlled and auditable, end to end." },
  ],
};
