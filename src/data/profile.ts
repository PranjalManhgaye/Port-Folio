export type PortfolioProfile = {
  name: string;
  handle: string;
  githubUrl: string;
  headline: string;
  /** One memorable line under the name (hero). */
  heroValueLine: string;
  /** Short kicker above the name, e.g. role. */
  heroRole: string;
  /** Compact strip under CTAs: e.g. Open source · Backend · APIs */
  credibilityStrip: string[];
  /** Path under /public for hero photo (e.g. "/profile.png"). */
  profileImageSrc?: string;
  location: string;
  focusAreas: string[];
  aboutParagraphs: string[];
  highlights: { label: string; value: string }[];
  social: {
    linkedinUrl?: string;
    leetcodeUrl?: string;
    githubUrl: string;
    email?: string;
  };
};

export const profile: PortfolioProfile = {
  name: "Pranjal Manhgaye",
  handle: "PranjalManhgaye",
  githubUrl: "https://github.com/PranjalManhgaye",
  headline: "Freelance backend engineer focused on reliable systems",
  heroRole: "Freelance backend",
  heroValueLine:
    "Shipping reliable APIs, auth, and clean architecture you can iterate on.",
  credibilityStrip: ["Open source", "REST & Node.js", "C++ & DSA"],
  profileImageSrc: "/profile.png",
  location: "Gwalior, India",
  focusAreas: [
    "DSA-based problem solving",
    "Backend systems & clean architecture",
    "Authentication / authorization patterns",
    "C++ depth for algorithms and performance",
    "Practical delivery for real requirements",
  ],
  aboutParagraphs: [
    "I build backend features that are easy to reason about, test, and extend. My focus is on clean architecture, correct behavior, and maintainable code.",
    "You bring the requirements. I translate them into a clear plan, implement the core logic and endpoints/services, and deliver a handoff you can keep building on.",
  ],
  highlights: [
    { label: "Primary stack", value: "Node.js + Express + APIs" },
    { label: "Strong in", value: "C++ OOP + DSA" },
    { label: "Value", value: "Clear delivery and dependable implementation" },
  ],
  social: {
    githubUrl: "https://github.com/PranjalManhgaye",
    // Optional: add these when you want to personalize the portfolio further.
    linkedinUrl: undefined,
    leetcodeUrl: undefined,
    // NOTE: replace with your real email to enable a real contact link.
    email: undefined,
  },
};

