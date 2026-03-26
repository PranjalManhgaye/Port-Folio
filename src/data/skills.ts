export type SkillsGroup = {
  title: string;
  items: string[];
};

export const skills: SkillsGroup[] = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication patterns",
      "Authorization / role-based access",
      "Validation + error handling",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma (workflow)"],
  },
  {
    title: "DevOps & tooling",
    items: [
      "Docker (images, containerized dev & delivery)",
      "GitHub Actions (CI workflows, PR automation)",
      "Linux environments & shell-oriented pipelines",
      "Git workflows (branches, PRs, open-source collaboration)",
      "Build, test, and release hygiene on real OSS repos",
    ],
  },
  {
    title: "Systems & Algorithms",
    items: ["C++ OOP", "DSA", "STL", "Trees/Graphs", "Dynamic Programming", "Complexity reasoning"],
  },
];

