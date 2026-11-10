export type Skill = {
  name: string;
  url: string;
};

export type CoverName = "sky" | "blue" | "indigo" | "cyan" | "navy" | "slate" | "steel" | "teal";

export type Project = {
  name: string;
  description: string;
  cover: CoverName;
  image?: string;
  code?: string;
  website?: string;
  deployment?: string;
  techStack: string[];
  sysArch?: string;
  featured?: boolean;
};

export type NavItem = {
  title: string;
  link: string;
};

export type Profile = {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  location: string;
  locationUrl: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  linkedin: string;
  portrait: string;
  portraitAlt: string;
  heroGreeting: string;
  heroIntro: string;
  heroSummary: string;
  roles: string[];
  bio: string[];
  footerNote: string;
};

export type WorkColumn = {
  title: string;
  summary: string;
};

export type DeveloperProfile = WorkColumn & {
  languagesLabel: string;
  languages: string;
  toolsLabel: string;
  tools: string[];
};

export type KnowledgeProfile = WorkColumn & {
  toolsLabel: string;
  tools: string;
  subjectsLabel: string;
  subjects: string[];
};

export type DashboardFarm = {
  id: string;
  pair: string;
  recommended: boolean;
  tvl: string;
  dailyReturns: string;
  stake: string;
  earned: string;
};

export type KeyValueStorage = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

export type FetchResponseLike = {
  ok: boolean;
  status: number;
  json?: () => Promise<unknown>;
};

export type FetchLike = (input: string, init?: RequestInit) => Promise<FetchResponseLike>;

export type EducationItem = {
  date: string;
  title: string;
  subtitle: string;
  grade: string;
};

export type ExperienceItem = {
  date: string;
  title: string;
  subtitle: string;
  website?: string;
  details: string[];
  techStack: string[];
};

export type Achievement = {
  name: string;
  position: string;
  date: string;
  website?: string;
  details: { label: string; value: string }[];
};

export type Organization = {
  date: string;
  position: string;
  name: string;
  initials: string;
  logo?: string;
  note?: string;
};

export type Recommendation = {
  name: string;
  designation: string;
  quote: string;
  image?: string;
  linkedin?: string;
};

export type Certificate = {
  name: string;
  issuer: string;
  detail: string;
  url?: string;
};

export type PortfolioMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactErrors = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
