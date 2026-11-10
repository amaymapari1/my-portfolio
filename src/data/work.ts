import type { DeveloperProfile, KnowledgeProfile } from "../types";

export const workProfile: { developer: DeveloperProfile; knowledge: KnowledgeProfile } = {
  developer: {
    title: "Developer",
    summary: "I like to code things from scratch and bring ideas to life.",
    languagesLabel: "Languages I know",
    languages: "TypeScript, JavaScript, Go, Java, Python, C++, HTML, CSS",
    toolsLabel: "Dev tools",
    tools: ["React", "Node.js", "Express", "Spring Boot", "Prisma", "MySQL", "MongoDB", "Redis", "Kafka", "REST APIs", "gRPC", "Kubernetes", "Docker", "Playwright", "Git"],
  },
  knowledge: {
    title: "Knowledge",
    summary: "I use core coursework alongside the tools I ship with.",
    toolsLabel: "Tools",
    tools: "Cursor and Claude Code compatible, AI-assisted development, VS Code, IntelliJ, GitHub Actions, Helm, Ansible, Linux",
    subjectsLabel: "Core subjects",
    subjects: ["Data structures and algorithms", "Operating systems", "Computer networks", "Object-oriented programming", "Database management", "Machine learning and neural networks"],
  },
};
