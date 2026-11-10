import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    name: "Lets Chat",
    description:
      "One-to-one and group chat. Messages are pushed over WebSockets instead of polled. Users, conversations, and messages live in MongoDB, and search starts a direct chat or a group room.",
    cover: "indigo",
    code: "https://github.com/amaymapari1",
    techStack: ["React", "Node.js", "Express", "Socket.io", "Chakra UI"],
    featured: true,
  },
  {
    name: "Event streaming",
    description:
      "A Spring Boot app fetches real-time events and writes them to a Kafka topic. A consumer reads that topic and shows the events in a readable form.",
    cover: "teal",
    techStack: ["Java", "Spring Boot", "Kafka", "Avro"],
    featured: true,
  },
  {
    name: "Hostel management portal",
    description: "A hostel portal for roommate details, the canteen menu, and complaints.",
    cover: "steel",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    featured: true,
  },
];
