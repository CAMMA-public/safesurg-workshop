// ============================================================
// SafeSurg Website — Centralized Content Configuration
// ============================================================
// Edit ALL website text, dates, names, and links HERE.
// Components read from this file so updates are instant & consistent.
// ============================================================

export const siteConfig = {
  title: "SafeSurg",
  subtitle: "Workshop on AI for Safe Surgery",
  conference: "MICCAI 2026 Satellite Workshop",
  date: "October 4/8, 2026",
  description:
    "Bringing together researchers, clinicians, industry, and regulatory partners to address safety across the data-to-deployment pipeline in surgical AI.",

  // Twitter / X feed configuration
  twitter: {
    // Your X/Twitter username (without @)
    username: "SafeSurgWorkshop",
    // Only tweets containing this hashtag will be displayed
    hashtag: "#SafeSurg",
    // Placeholder tweets for design preview — replace with live API data
    placeholderTweets: [
      {
        id: "1",
        text: "🎉 Inaugural edition of SafeSurg has been accepted as a satellite event at #MICCAI2026! We're thrilled to bring the community together around AI safety in surgery. #SafeSurg",
        date: "Mar 13, 2026",
        likes: 42,
        retweets: 18,
      },
      {
        id: "2",
        text: "📢 Call for Papers is now open! Submit your work on safety-directed topics across the data-to-deployment pipeline. Deadline: July 1, 2026. #SafeSurg",
        date: "Mar 15, 2026",
        likes: 31,
        retweets: 12,
      },
      {
        id: "3",
        text: "Excited to announce our keynote speakers for #SafeSurg at MICCAI 2026. Stay tuned for the full program! #SafeSurg",
        date: "Mar 18, 2026",
        likes: 56,
        retweets: 24,
      },
    ],
  },

  navLinks: [
    { label: "News", href: "#news" },
    { label: "Overview & CFP", href: "#overview" },
    { label: "Timeline", href: "#timeline" },
    { label: "Program", href: "#program" },
    { label: "Team", href: "#team" },
  ],

  news: [
    {
      date: "13.03.2026",
      text: "Inaugural edition of SafeSurg has been accepted as a satellite event at MICCAI 2026!",
      tag: "Announcement",
    },
  ],

  overview: {
    intro: [
      "Surgical data science has achieved considerable progress in recent years, with increasingly capable methods tackling novel application areas in surgery. As the field moves forward from proof-of-concept methods towards clinical translation, developing clinically meaningful surgical applications requires us to address the multi-faceted nature of surgery, with surgical safety at its core.",
      "The SafeSurg workshop aims to focus the attention of the MICCAI community on key aspects of safety across the data-to-deployment pipeline.",
      "SafeSurg brings together researchers, clinicians, industry, and regulatory partners to address questions about how we collect and annotate data, what we choose to model, how we evaluate generalization, and how AI systems behave in the operating room. These challenges cut across subfields that are usually treated in isolation: annotation quality, rare event detection, robustness, calibration, skill assessment, human-AI interaction. SafeSurg brings these threads together, and welcomes contributions ranging from mature methods to early-stage ideas that open up new safety-relevant directions.",
    ],
    cfpIntro:
      "SafeSurg invites full paper submissions on safety-directed topics across the data-to-deployment pipeline. Papers should follow the MICCAI 2026 workshop template (Lecture Notes in Computer Science format), up to 8 pages excluding references. All submissions will undergo double-blind peer review. Accepted papers will be published in the MICCAI Satellite Workshop proceedings via Springer LNCS.",
    topics: [
      {
        title: "Safe Data Use & Frameworks",
        items: [
          "Modelling annotator disagreement and inter-rater variability",
          "Confidence-aware and uncertainty-preserving label aggregation",
          "Frameworks for responsible surgical video collection and use",
          "Evaluation metrics that account for label ambiguity",
          "Privacy-preserving annotation workflows",
        ],
      },
      {
        title: "Safety-Critical Applications",
        items: [
          "Surgical error and near-miss detection from video and multimodal OR data",
          "Intraoperative risk assessment and adverse event anticipation",
          "Postoperative complication prediction",
          "Learning from limited positive examples and extreme class imbalance",
          "Surgical instrument, device, and environment safety",
          "Retrospective safety analytics and documentation",
          "Safety-aware interpretable surgical copilots",
          "Safety monitoring",
          "Safety considerations in embodied and physical AI systems in surgery",
        ],
      },
      {
        title: "Surgical Quality Measures & Protocols",
        items: [
          "Automated assessment of critical view of safety and similar constructs",
          "Go/no-go zone identification and boundary detection",
          "Procedural checklist compliance monitoring",
          "Skill assessment with safety-aware feedback",
          "Intelligent alarm and alert systems",
          "Interpretable risk explanations for clinical decision support",
        ],
      },
      {
        title: "Robustness & Multi-Centric Evaluation",
        items: [
          "Domain adaptation and transfer learning across surgical centres",
          "Test-time adaptation for deployment in new environments",
          "Out-of-distribution detection and selective prediction",
          "Continual learning in evolving surgical contexts",
          "Multi-centric generalisation studies and benchmarking protocols",
          "Calibration and uncertainty quantification benchmarks",
          "Regulatory-aligned validation frameworks",
        ],
      },
      {
        title: "Human-AI Interfaces",
        items: [
          "Workflow integration studies in realistic surgical settings",
          "Human-AI teaming and shared decision-making frameworks",
          "Trust calibration and appropriate reliance",
          "Situational awareness support systems",
          "Usability evaluation under time pressure",
          "Appropriate human oversight",
          "Empirical studies of surgical team interactions with AI",
        ],
      },
    ],
  },

  timeline: [
    { date: "July 1, 2026", label: "Paper submissions due", status: "upcoming" as const },
    { date: "July 31, 2026", label: "Notification of paper decisions", status: "upcoming" as const },
    { date: "August 31, 2026", label: "Camera-ready submissions due", status: "upcoming" as const },
    { date: "October 4/8, 2026", label: "SafeSurg Workshop day", status: "upcoming" as const },
  ] as Array<{ date: string; label: string; status: "upcoming" | "done" }>,

  program: [
    { time: "11:45 – 12:00", title: "Introduction", speaker: "Dr. Lalith Sharan", type: "talk" as const },
    { time: "12:00 – 12:30", title: "Selected Oral Presentations 1", speaker: "", type: "session" as const },
    { time: "12:30 – 13:30", title: "Lunch", speaker: "", type: "break" as const },
    {
      time: "13:30 – 14:10",
      title: "Keynote 1: AI-driven error detection in surgery — a clinical perspective",
      speaker: "Dr. Dan Hashimoto (Tentative)",
      affiliation: "Assistant Professor of Surgery, Hospital of the University of Pennsylvania",
      type: "keynote" as const,
    },
    { time: "14:10 – 15:10", title: "Selected Oral Presentations 2", speaker: "", type: "session" as const },
    { time: "15:10 – 15:30", title: "Short poster pitches & poster session", speaker: "", type: "session" as const },
    { time: "15:30 – 16:00", title: "Coffee break & poster session", speaker: "", type: "break" as const },
    {
      time: "16:00 – 16:40",
      title: "Keynote 2: Building holistic and trustworthy AI systems for the OR",
      speaker: "Prof. Dr. Nassir Navab",
      affiliation: "",
      type: "keynote" as const,
    },
    {
      time: "16:40 – 17:40",
      title: "Panel discussion: What will it take to move towards safer AI in surgery?",
      speaker: "TBD",
      type: "session" as const,
    },
    { time: "17:40 – 18:00", title: "Prizes and Closing", speaker: "", type: "talk" as const },
  ],

  team: {
    organizers: [
      { name: "Dr. Lalith Sharan", role: "Organizer", affiliation: "" },
    ],
    note: "Full team details coming soon.",
  },

  footer: {
    email: "",
    socialLinks: {
      twitter: "https://x.com/SafeSurgWorkshop",
    },
  },
};
