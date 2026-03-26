export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: "Backend APIs (Node.js + Express)",
    description:
      "Build RESTful endpoints with clean structure: routes, services, validation, and predictable behavior.",
    bullets: [
      "Auth & role-based access (JWT/session patterns)",
      "CRUD APIs with proper error handling",
      "Project-ready architecture (modular folders, clear boundaries)",
      "Performance-minded implementation",
    ],
  },
  {
    title: "Database + Data Modeling",
    description:
      "Design schemas and data flow to keep your app stable as it grows.",
    bullets: [
      "PostgreSQL/MySQL-style modeling principles",
      "MongoDB-friendly document design",
      "Prisma-friendly workflow (when using Prisma)",
      "Indexes/queries that match the product behavior",
    ],
  },
  {
    title: "Scalable Auth & Security Basics",
    description:
      "Implement practical security patterns so your application doesn't collapse under edge cases.",
    bullets: [
      "Authentication + authorization flows",
      "Role-based permission checks",
      "Input validation and safe defaults",
      "Clear, auditable logic",
    ],
  },
  {
    title: "Algorithmic Modules (C++)",
    description:
      "For performance-critical logic or interview-grade cores.",
    bullets: [
      "DSA modules (graphs/trees/DP) integrated with app logic",
      "Clean C++ OOP + STL implementation",
      "Fast and correct solutions with clear complexity reasoning",
    ],
  },
];

