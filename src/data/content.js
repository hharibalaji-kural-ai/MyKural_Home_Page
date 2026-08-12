// Central place for site copy. Swap strings here to re-brand or localize.

export const brand = {
  name: "Kural AI",
  tagline: "குரல் — the voice that listens back",
  mission:
    "Kural AI turns every phone call into structured feedback and real-time support — in Tamil first, powered by voice AI built for how India actually speaks.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
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
    eyebrow: "Voice Feedback Collection",
    headline: "Let customers speak their mind — literally.",
    summary:
      "Kural 1-Way is an outbound and IVR voice service that calls or answers customers in Tamil, asks the right follow-up questions, and turns the conversation into feedback your team can act on the same day.",
    description:
      "Instead of a text survey nobody finishes, Kural 1-Way places a short, natural-sounding voice call after a purchase, delivery or service visit. Customers respond in their own words, in Tamil, at their own pace. The system listens, asks a smart follow-up when an answer is vague, and closes the loop — no call-center headcount required.",
    enterpriseBenefits: [
      {
        title: "3x higher response rates",
        body: "Voice calls in a customer's own language consistently outperform SMS and app-based surveys, especially outside metro markets.",
      },
      {
        title: "Real-time dashboards",
        body: "Every call lands in a live dashboard with sentiment scores, keyword trends and drop-off points — searchable the moment the call ends.",
      },
      {
        title: "Plug into your stack",
        body: "Webhooks and REST APIs push structured results straight into your CRM, helpdesk or data warehouse.",
      },
      {
        title: "Predictable, usage-based pricing",
        body: "Pay per completed call, not per seat — costs scale with the feedback you actually collect.",
      },
    ],
    endUserBenefits: [
      {
        title: "Speak, don't type",
        body: "Answer in Tamil, in full sentences, without hunting for the right multiple-choice option.",
      },
      {
        title: "Under 90 seconds",
        body: "A short, respectful call that ends the moment the customer has said what they need to.",
      },
      {
        title: "Call back on their time",
        body: "Missed calls are automatically retried at a better hour, never mid-workday.",
      },
      {
        title: "Heard, not surveyed",
        body: "Natural conversation instead of a form makes it feel like being asked, not audited.",
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
        title: "Real-time back-and-forth",
        body: "Sub-2-second response latency keeps the conversation feeling like a call, not a queue.",
      },
      {
        title: "Context that carries across turns",
        body: "Kural 2-Way remembers what was said two questions ago, so callers never repeat their order number.",
      },
      {
        title: "Live system lookups",
        body: "Connects to order, billing and CRM systems to answer with real account data, not a script.",
      },
      {
        title: "Human handoff, done well",
        body: "When a query needs a person, the agent transfers the call with a full summary already attached.",
      },
      {
        title: "Always-on coverage",
        body: "Handles after-hours and peak-load call spikes without a queue or a hold-music apology.",
      },
      {
        title: "Continuously learning",
        body: "Every resolved and escalated call feeds back into the model, sharpening accuracy over time.",
      },
    ],
  },
};

// Team section removed

export const about = {
  headline: "We think the phone call is still the most honest interface.",
  body: [
    "Kural AI started with a simple observation: across Tamil Nadu and much of regional India, people are far more comfortable speaking than typing — especially when they're frustrated, confused, or trying to explain something specific.",
    "Every text survey, chatbot and app-based ticket form asks customers to translate their experience into someone else's format. We build the opposite: voice AI that meets people in the language and medium they already trust, and turns that conversation into the structured data enterprises need.",
    "Today, Kural AI powers voice feedback and support for retail, logistics, healthcare and financial services teams who need to hear from customers who were never going to fill out a form.",
  ],
  values: [
    { title: "Language first", body: "Tamil isn't a translation layer bolted onto an English model — it's the foundation we build on." },
    { title: "Respect the caller's time", body: "Every interaction is designed to be as short as it can be and as long as it needs to be." },
    { title: "Data with a chain of custody", body: "Every call is encrypted, access-controlled and auditable, end to end." },
  ],
};
