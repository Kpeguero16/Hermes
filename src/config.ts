/**
 * Central site configuration.
 * Everything marked TODO needs a real value from the owner before launch —
 * the site builds and runs fine with these placeholders in the meantime.
 */

export const SITE = {
  name: "HermeΣ",
  /** ASCII fallback for contexts where the sigma may not render (alt text, emails). */
  nameAscii: "Hermes",
  url: "https://usehermes.online",
  tagline: "Chapter admin, automated.",
  description:
    "HermeΣ reads your chapter's meeting minutes the moment they hit Slack — posting clean summaries, assigning action items by member, and keeping Google Calendar in sync. Built for fraternities and sororities.",
  // TODO: confirm or create this inbox (any address you control works).
  contactEmail: "hello@usehermes.online",
  // TODO: paste your Calendly scheduling link, e.g. "https://calendly.com/your-handle/hermes-demo".
  // While empty, the demo page shows the request form only (no broken embed).
  calendlyUrl: "",
  social: {
    instagram: "", // TODO: optional — full URL
    linkedin: "", // TODO: optional — full URL
  },
  // TODO: replace with your registered business entity once formed.
  legalEntity: "HermeΣ",
  foundedYear: 2025,
};

export const CLIENT = {
  /** First (live, paying) customer — featured in the case study. */
  fullName:
    "The Theta Delta Chapter of Sigma Lambda Beta International Fraternity Inc. at Florida International University",
  shortName: "Theta Delta · Sigma Lambda Beta · FIU",
  org: "Sigma Lambda Beta International Fraternity Inc.",
  chapter: "Theta Delta Chapter",
  school: "Florida International University",
};

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

// TODO: confirm tier names, prices, and billing period before launch.
export const PRICING: { billingNote: string; tiers: PricingTier[] } = {
  billingNote:
    "Prices are per chapter. Semester billing is available — ask about it at your demo.",
  tiers: [
    {
      name: "Chapter",
      price: "$39",
      period: "/month per chapter",
      blurb: "For chapters that want meeting minutes handled, start to finish.",
      features: [
        "AI meeting summaries posted to Slack",
        "Action items organized by member",
        "One minutes channel",
        "Email support",
      ],
      cta: { label: "Book a Demo", href: "/demo" },
    },
    {
      name: "Chapter Plus",
      price: "$79",
      period: "/month per chapter",
      blurb: "The full messenger god — minutes, tasks, and a calendar that updates itself.",
      features: [
        "Everything in Chapter",
        "Google Calendar sync — create, edit, delete",
        "Multiple minutes channels",
        "Priority support",
        "White-glove onboarding call",
      ],
      cta: { label: "Book a Demo", href: "/demo" },
      featured: true,
    },
    {
      name: "Council & Nationals",
      price: "Custom",
      period: "",
      blurb: "Deploy HermeΣ across every chapter in your council or national organization.",
      features: [
        "Everything in Chapter Plus",
        "Multi-chapter deployment",
        "Centralized administration",
        "Custom integrations",
        "Dedicated support",
      ],
      cta: { label: "Contact Us", href: "/demo" },
    },
  ],
};
