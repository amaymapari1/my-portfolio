import type { NavItem, Profile } from "../types";

export const profile: Profile = {
  name: "Amay Mapari",
  shortName: "Amay",
  initials: "AM",
  role: "Software Engineer",
  location: "Pune, India",
  locationUrl: "https://maps.google.com/?q=Pune%2C%20India",
  email: "amaymapari@gmail.com",
  phone: "+91 9657917502",
  phoneHref: "tel:+919657917502",
  github: "https://github.com/amaymapari1",
  linkedin: "https://www.linkedin.com/in/amay-mapari1",
  portrait: "/images/portrait.jpg",
  portraitAlt: "Amay Mapari",
  heroGreeting: "Hey there,",
  heroIntro: "I'm Amay Mapari",
  heroSummary:
    "Full-stack software engineer with 2+ years of experience building APIs, UIs, and cloud-native services.",
  roles: ["Software Engineer", "API Design", "Cloud-native Systems"],
  bio: [
    "Hey there! I'm Amay Mapari, a full-stack software engineer based in Pune. I build APIs, user interfaces, and cloud-native services.",
    "I graduated from Pune Institute of Computer Technology with a B.E. in Computer Engineering and a CGPA of 9.59. I like contract-first APIs, careful rollouts, and interfaces that stay understandable. I use AI-assisted development to move faster, and I still review the design and the code myself.",
    "At Avaya I build TypeScript interfaces and backend APIs with Node.js, Express, and MySQL through Prisma. I have also built a Java and Spring Boot orchestrator, with Python and Ansible, for upgrading software on remote hosts.",
    "During my internship I worked on real-time event streaming with Java, Spring Boot, Kafka, and Avro, and a neural-network model that ranks the best match for an incoming query.",
    "On my own I have built a chat app, a Kafka event stream, and a hostel portal. I keep practicing data structures and algorithms: 500+ problems solved, and a CodeChef 3-star rating of 1687.",
    "Let's connect and build something useful together.",
  ],
  footerNote: "Made with care by Amay Mapari.",
};

export const navItems: NavItem[] = [
  { title: "Home", link: "/" },
  { title: "About Me", link: "/about" },
  { title: "Skills & Stack", link: "/work" },
  { title: "Resume", link: "/resume" },
];
