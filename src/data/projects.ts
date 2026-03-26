export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  repoUrl?: string;
  stackTags: string[];
  /** Wider card on large screens (e.g. flagship / team project). */
  featured?: boolean;
  /** Primary language or stack label for the meta row. */
  primaryLanguage?: string;
  /** Shown as "Updated · …" (static label for portfolio). */
  updatedLabel?: string;
  /** Optional image under `/public/...` */
  imageSrc?: string;
};

export const projects: PortfolioProject[] = [
  {
    id: "interviewos-hacksagon",
    title: "InterviewOS",
    subtitle:
      "Team Invincibles · Hacksagon · Category: Software · Theme: Hiring Technology / EdTech",
    description:
      "A browser-based interview platform that unifies secure online interviews for companies and AI-powered mock interviews for candidates—the same IDE, constraints, and environment for fairness, realism, and integrity.",
    highlights: [
      "Problem: cheating in remote interviews (tab switching, external help)",
      "Problem: inconsistent evaluation across interviewers and companies",
      "Problem: lack of realistic interview practice for beginners",
      "Impact: unfair hiring, wasted interview time, and missed talent—addressed with one consistent technical environment",
    ],
    repoUrl: "https://github.com/hacksagon/hacksagon",
    stackTags: ["EdTech", "Hiring", "Web platform", "Team"],
    featured: true,
    primaryLanguage: "TypeScript",
    updatedLabel: "Team / hackathon",
  },
  {
    id: "oops-budget-tracker",
    title: "C++ Budget Tracker",
    subtitle: "Role-based expense management (OOP)",
    description:
      "Console-based budget and expense tracking with authentication, role-specific menus (polymorphism), file persistence, and analytics—aligned with the published repo README.",
    highlights: [
      "User authentication + role selection",
      "Role-based menus: Shopkeeper, Teacher, Housewife, Worker",
      "Categorized expenses and file-based persistence",
      "Monthly and category-wise summaries and ASCII-style reports",
    ],
    repoUrl: "https://github.com/PranjalManhgaye/OOPS-BASED-PROJECT-CPP",
    stackTags: ["C++", "OOP", "STL", "File I/O"],
    primaryLanguage: "C++",
    updatedLabel: "Console app",
  },
  {
    id: "the-shoes-store",
    title: "The Shoes Store",
    subtitle: "Storefront / e-commerce style web project",
    description:
      "A shoe-store project focused on product flows, layout, and shipping a usable shopping experience. See the repository for structure and stack details.",
    highlights: [
      "End-to-end product-oriented UI flows",
      "Iterative feature delivery",
      "Repository-first source of truth for implementation details",
    ],
    repoUrl: "https://github.com/PranjalManhgaye/The-Shoes-Store",
    stackTags: ["Web", "E-commerce", "UI"],
    primaryLanguage: "Web",
    updatedLabel: "Product UI",
  },
  {
    id: "conference-app2",
    title: "Conference App",
    subtitle: "Conference experience (second iteration)",
    description:
      "A conference application project emphasizing scheduling, discovery, or event-style flows—details live in the repo.",
    highlights: [
      "Conference-oriented user flows",
      "Structured codebase for iteration",
      "See README and commits in the repository for specifics",
    ],
    repoUrl: "https://github.com/PranjalManhgaye/conference_app2",
    stackTags: ["Web", "Events", "Product"],
    primaryLanguage: "Web",
    updatedLabel: "Events",
  },
];
