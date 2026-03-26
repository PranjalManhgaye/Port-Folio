export type WorkStep = {
  step: string;
  title: string;
  details: string;
  deliverables: string[];
};

export const processSteps: WorkStep[] = [
  {
    step: "01",
    title: "Brief + scope",
    details: "I clarify requirements, define success criteria, and agree on scope so delivery is predictable.",
    deliverables: ["Short requirement summary", "Feature list + edge cases", "Suggested milestones"],
  },
  {
    step: "02",
    title: "Architecture + plan",
    details: "I map the system into modules/endpoints and share an implementation approach with estimates.",
    deliverables: ["API / route plan", "Data modeling outline", "Risk/edge-case checklist"],
  },
  {
    step: "03",
    title: "Build in iterations",
    details: "I implement core logic first, then integrate endpoints, validation, and error handling.",
    deliverables: ["Working core features", "Consistent endpoints", "Basic test/verification notes"],
  },
  {
    step: "04",
    title: "Delivery + handoff",
    details: "I deliver a clean project structure with clear usage instructions and next-step guidance.",
    deliverables: ["Run instructions", "Repo structure explanation", "Support for the first improvements"],
  },
];

