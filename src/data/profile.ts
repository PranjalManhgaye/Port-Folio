export type PortfolioProfile = {
  name: string;
  handle: string;
  githubUrl: string;
  headline: string;
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
  location: "Gwalior, India",
  focusAreas: [
    "DSA-backed problem solving",
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

