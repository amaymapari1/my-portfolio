import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import type { CoverName } from "../types";
import { colors, font, media, shadow } from "./theme";

const hoverLift = {
  transition: "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease, background-color 300ms ease, color 300ms ease",
};

export const app = style({
  minHeight: "100vh",
  color: colors.gray100,
  backgroundColor: colors.gray900,
  backgroundImage: `
    radial-gradient(ellipse 55% 42% at 8% -8%, rgb(59 130 246 / 0.22), transparent 58%),
    radial-gradient(ellipse 42% 36% at 100% 12%, rgb(45 212 191 / 0.12), transparent 52%),
    radial-gradient(ellipse 36% 28% at 70% 100%, rgb(99 102 241 / 0.1), transparent 55%)
  `,
});
export const frame = style({
  width: "91.666%",
  margin: "0 auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  "@media": { [media.md]: { width: "75%" } },
});
export const main = style({ flex: 1 });

export const headingMain = style({
  textAlign: "center",
  fontFamily: font.primary,
  fontSize: "1.875rem",
  fontWeight: 900,
  textTransform: "capitalize",
  color: colors.gray300,
  transition: "transform 500ms ease-in-out, color 500ms ease-in-out",
  ":hover": { transform: "scale(1.05)", color: colors.yellow400 },
  "@media": { [media.md]: { fontSize: "3rem" } },
});

export const headingTagline = style({
  textAlign: "center",
  fontFamily: font.secondary,
  fontSize: "1.25rem",
  fontWeight: 600,
  textTransform: "capitalize",
  color: colors.blue500,
  "@media": { [media.md]: { fontSize: "1.5rem" } },
});

export const headingLink = style({ display: "inline-block", width: "100%" });
export const anchorOffset = style({ scrollMarginTop: "7rem" });

export const circledIcon = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "2.5rem",
  width: "2.5rem",
  borderRadius: "999px",
  border: `1px solid ${colors.gray400}`,
  fill: "currentColor",
  padding: "0.5rem",
  color: colors.gray400,
  transition: "color 300ms, border-color 300ms",
  ":hover": { borderColor: colors.blue500, color: colors.blue500 },
});

const buttonBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "0.375rem",
  padding: "0.75rem 1.5rem",
  textAlign: "center" as const,
  fontFamily: font.primary,
  fontSize: "1.125rem",
  fontWeight: 500,
  transition: "background-color 500ms ease-in-out, color 500ms ease-in-out, border-color 500ms ease-in-out",
  ":disabled": { cursor: "not-allowed", opacity: 0.6 },
};

export const btnSolid = style({
  ...buttonBase,
  background: colors.blue500,
  color: colors.white,
  ":hover": { background: colors.blue700 },
});

export const btnOutline = style({
  ...buttonBase,
  border: `1px solid ${colors.blue500}`,
  background: "transparent",
  color: colors.blue500,
  ":hover": { background: colors.blue500, color: colors.white },
});

export const btnCompact = style({ padding: "0.5rem 1rem", fontSize: "0.875rem" });
export const btnDanger = style({ background: colors.red600, ":hover": { background: "#b91c1c" } });
export const btnBlock = style({ width: "100%", marginTop: "1.5rem" });

export const field = style({
  width: "100%",
  borderRadius: "0.375rem",
  background: colors.gray700,
  padding: "1rem",
  fontFamily: font.poppins,
  color: colors.white,
  outline: "none",
  transition: "background-color 200ms, box-shadow 200ms",
  ":focus": { background: colors.gray600, boxShadow: `0 0 0 2px ${colors.blue500}` },
});
export const fieldInvalid = style({ boxShadow: "0 0 0 2px #ef4444" });
export const fieldArea = style({ minHeight: "12rem", flex: 1, resize: "vertical" });

export const panel = style({ borderRadius: "0.5rem", background: colors.gray800, boxShadow: shadow.xl });

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 20,
  background: "rgba(17, 24, 39, 0.8)",
  padding: "1rem 0",
  backdropFilter: "blur(12px)",
});
export const headerRow = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  "@media": { [media.lg]: { flexWrap: "nowrap" } },
});
export const brand = style({
  display: "inline-flex",
  alignItems: "center",
  fontFamily: font.primary,
  fontSize: "1.125rem",
  fontWeight: 700,
  color: colors.white,
  transition: "transform 500ms",
  ":hover": { transform: "scale(1.05)" },
});
export const brandMark = style({
  marginLeft: "0.5rem",
  marginRight: "0.65rem",
  display: "grid",
  height: "2.5rem",
  width: "2.5rem",
  placeItems: "center",
  borderRadius: "0.65rem",
  background: `linear-gradient(145deg, ${colors.blue400}, ${colors.blue700})`,
  boxShadow: "0 8px 16px rgb(29 78 216 / 0.35)",
  fontSize: "0.8rem",
  fontWeight: 700,
  letterSpacing: "0.04em",
  lineHeight: 1,
  color: colors.white,
});
export const menuButton = style({
  display: "inline-flex",
  height: "2.5rem",
  width: "2.5rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.25rem",
  color: colors.white,
  ":hover": { background: colors.gray800 },
  "@media": { [media.lg]: { display: "none" } },
});
export const nav = style({
  display: "none",
  width: "100%",
  flexDirection: "column",
  "@media": { [media.lg]: { display: "flex", width: "auto", flexDirection: "row", alignItems: "center" } },
});
export const navOpen = style({ display: "flex" });
export const navLink = style({
  padding: "0.75rem 1rem",
  textAlign: "center",
  fontFamily: font.primary,
  fontSize: "1.125rem",
  color: colors.white,
  transition: "color 300ms",
  ":hover": { color: colors.blue500 },
  "@media": { [media.lg]: { paddingTop: 0, paddingBottom: 0 } },
});
export const navLinkActive = style({ color: colors.blue500 });
export const navContact = style({
  margin: "0.5rem 1rem 0",
  "@media": { [media.lg]: { marginTop: 0 } },
});

export const footer = style({
  marginTop: "2rem",
  borderTop: `1px dashed ${colors.gray700}`,
  padding: "1.5rem 0.5rem",
});
export const footerRow = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  "@media": { [media.md]: { flexDirection: "row" } },
});
export const footerNote = style({
  order: 2,
  textAlign: "center",
  fontFamily: font.secondary,
  fontWeight: 600,
  color: colors.gray400,
  "@media": { [media.md]: { order: 1, textAlign: "left" } },
});
export const footerSocials = style({
  order: 1,
  display: "flex",
  gap: "1rem",
  "@media": { [media.md]: { order: 2 } },
});
export const footerNav = style({
  marginTop: "1rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: "1rem",
  rowGap: "0.5rem",
  "@media": { [media.md]: { justifyContent: "flex-start" } },
});
export const footerLink = style({
  fontFamily: font.poppins,
  fontSize: "0.875rem",
  color: colors.gray400,
  textUnderlineOffset: "4px",
  ":hover": { color: colors.yellow400, textDecoration: "underline" },
});

export const hero = style({
  marginTop: "1.5rem",
  display: "grid",
  alignItems: "center",
  gap: "2.5rem",
  "@media": { [media.lg]: { marginTop: "2.5rem", gridTemplateColumns: "1fr 1fr" } },
});
export const heroTitle = style({
  fontFamily: font.primary,
  fontSize: "2.25rem",
  fontWeight: 700,
  color: colors.white,
  "@media": { [media.sm]: { fontSize: "3rem" } },
});
export const block = style({ display: "block", marginTop: "0.5rem" });
export const heroRoles = style({
  marginTop: "1rem",
  minHeight: "3rem",
  fontFamily: font.primary,
  fontSize: "1.875rem",
  fontWeight: 500,
  color: colors.blue500,
  "@media": { [media.sm]: { fontSize: "2.25rem" } },
});
export const heroSummary = style({
  marginTop: "1rem",
  maxWidth: "36rem",
  fontFamily: font.secondary,
  fontSize: "1.125rem",
  color: colors.gray400,
  "@media": { [media.sm]: { fontSize: "1.25rem" } },
});
export const heroActions = style({
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  "@media": { [media.sm]: { flexDirection: "row" } },
});
export const centerRow = style({ display: "flex", justifyContent: "center" });
export const portrait = style({
  height: "18rem",
  width: "18rem",
  borderRadius: "999px",
  objectFit: "cover",
  objectPosition: "center 62%",
  boxShadow: `${shadow.xl}, 0 0 0 1px ${colors.gray700}, 0 24px 60px rgb(37 99 235 / 0.28)`,
  "@media": { [media.sm]: { height: "24rem", width: "24rem" } },
});

export const section = style({ margin: "4rem 0.25rem 0" });
export const sectionLoose = style({ marginTop: "5rem" });
export const certRow = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  gap: "1.5rem",
  padding: "2rem 1.25rem",
  "@media": { [media.sm]: { flexDirection: "row", flexWrap: "wrap" } },
});
export const certCard = style({
  display: "flex",
  height: "100%",
  width: "100%",
  maxWidth: "20rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.375rem",
  background: colors.gray700,
  padding: "1.25rem 1rem",
  textAlign: "center",
  ...hoverLift,
  ":hover": { transform: "translateY(-0.25rem)", boxShadow: shadow.lg },
});
export const certBadge = style({
  display: "grid",
  height: "4rem",
  width: "4rem",
  placeItems: "center",
  borderRadius: "999px",
  background: colors.gray800,
  fontFamily: font.primary,
  fontSize: "1.25rem",
  fontWeight: 700,
  color: colors.blue400,
});
export const certTitle = style({ marginTop: "1rem", fontFamily: font.primary, fontWeight: 700, color: colors.white });
export const certIssuer = style({ marginTop: "0.25rem", fontFamily: font.secondary, fontSize: "0.875rem", color: colors.gray300 });
export const certDetail = style({ marginTop: "0.5rem", fontFamily: font.poppins, fontSize: "0.875rem", color: colors.gray400 });

export const skillGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  padding: "1rem 0.75rem",
  "@media": {
    [media.sm]: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
    [media.md]: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
    [media.lg]: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
  },
});
export const skillCard = style({
  margin: "0.75rem auto",
  display: "flex",
  width: "7rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.375rem",
  background: colors.gray600,
  padding: "1rem 0.5rem",
  ...hoverLift,
  ":hover": { transform: "translateY(-0.25rem) scale(1.05)", boxShadow: shadow.lg },
});
export const skillIcon = style({ marginBottom: "0.5rem", height: "3rem", width: "3rem", objectFit: "contain" });
export const skillName = style({ textAlign: "center", fontFamily: font.secondary, fontSize: "0.875rem", fontWeight: 500, color: colors.white });

export const projectGrid = style({
  marginTop: "1rem",
  display: "grid",
  gap: "1.5rem",
  "@media": {
    [media.md]: { gridTemplateColumns: "1fr 1fr" },
    [media.xl]: { gridTemplateColumns: "1fr 1fr 1fr" },
  },
});
export const projectCard = style({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: "0.5rem",
  background: colors.gray800,
  boxShadow: shadow.xl,
  ...hoverLift,
  ":hover": { transform: "translateY(-0.25rem) scale(1.02)" },
});
export const projectImage = style({ height: "14rem", width: "100%", objectFit: "cover" });
export const projectCover = style({ display: "flex", height: "14rem", alignItems: "flex-end", padding: "1.5rem" });
export const covers = styleVariants({
  sky: { backgroundImage: "linear-gradient(to bottom right, #0369a1, #030712)" },
  blue: { backgroundImage: "linear-gradient(to bottom right, #1e40af, #020617)" },
  indigo: { backgroundImage: "linear-gradient(to bottom right, #4338ca, #030712)" },
  cyan: { backgroundImage: "linear-gradient(to bottom right, #155e75, #030712)" },
  navy: { backgroundImage: "linear-gradient(to bottom right, #1e3a8a, #09090b)" },
  slate: { backgroundImage: "linear-gradient(to bottom right, #334155, #030712)" },
  steel: { backgroundImage: "linear-gradient(to bottom right, #1d4ed8, #0a0a0a)" },
  teal: { backgroundImage: "linear-gradient(to bottom right, #1d4ed8, #030712)" },
} satisfies Record<CoverName, { backgroundImage: string }>);
export const coverTitle = style({ fontFamily: font.primary, fontSize: "1.5rem", fontWeight: 700, color: colors.white });
export const projectBody = style({ padding: "1rem 1.25rem" });
export const projectTitle = style({ textAlign: "center", fontFamily: font.primary, fontSize: "1.5rem", fontWeight: 700, color: colors.blue500 });
export const projectText = style({ marginTop: "0.5rem", textAlign: "left", fontFamily: font.secondary, fontSize: "0.875rem", color: colors.gray300 });
export const tagList = style({ marginBottom: "1rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", padding: "0 1rem" });
export const tag = style({ borderRadius: "999px", background: colors.gray700, padding: "0.25rem 0.75rem", fontFamily: font.secondary, fontSize: "0.875rem", color: colors.gray300 });
export const projectActions = style({ marginTop: "auto", display: "flex", justifyContent: "center", gap: "1rem", padding: "1rem 1.5rem" });
export const projectActionsBorder = style({ borderTop: `1px solid ${colors.gray700}` });

export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.7)",
  padding: "1rem",
});
export const dialog = style({ width: "100%", maxWidth: "28rem", padding: "1.5rem" });
export const dialogWide = style({ position: "relative", height: "70vh", width: "100%", maxWidth: "56rem", padding: "1.5rem" });
export const dialogClose = style({ position: "absolute", right: "1rem", top: "1rem", color: colors.gray200 });
export const dialogTitle = style({ marginBottom: "1rem", textAlign: "center", fontFamily: font.primary, fontSize: "1.5rem", color: colors.gray200 });
export const dialogFrame = style({ height: "calc(100% - 3rem)", width: "100%", borderRadius: "0.375rem", background: colors.white });
export const dialogActions = style({ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end", gap: "0.75rem" });
export const dialogHeading = style({ fontFamily: font.primary, fontSize: "1.5rem", color: colors.white });
export const dialogCopy = style({ marginTop: "0.75rem", fontFamily: font.secondary, color: colors.gray300 });

export const quoteCard = style({
  margin: "4rem auto 0",
  width: "100%",
  borderRadius: "0.5rem",
  background: colors.gray800,
  padding: "1.25rem 1.25rem 2.5rem",
  boxShadow: shadow.lg,
  transition: "transform 300ms",
  ":hover": { transform: "scale(1.02)" },
});
export const quotePlain = style({
  margin: "1.5rem auto 0",
  width: "100%",
  borderRadius: "0.5rem",
  background: colors.gray800,
  padding: "2rem 1.5rem",
  boxShadow: shadow.lg,
  "@media": { [media.md]: { padding: "2.5rem 3rem" } },
});
export const avatar = style({
  margin: "-4rem auto 0",
  height: "6rem",
  width: "6rem",
  overflow: "hidden",
  borderRadius: "999px",
  border: `4px solid ${colors.yellow400}`,
  boxShadow: shadow.lg,
});
export const avatarFallback = style({
  display: "grid",
  height: "100%",
  width: "100%",
  placeItems: "center",
  background: colors.gray700,
  fontFamily: font.primary,
  fontSize: "1.25rem",
  color: colors.blue300,
});
export const avatarImage = style({ height: "100%", width: "100%", objectFit: "cover" });
export const quote = style({ margin: "1.5rem auto 0", maxWidth: "48rem", textAlign: "center", fontFamily: font.secondary, color: colors.gray300 });
export const recName = style({ marginTop: "1.5rem", textAlign: "center", fontFamily: font.primary, fontSize: "1.25rem", fontWeight: 700, color: colors.blue500 });
export const recRole = style({ textAlign: "center", fontFamily: font.secondary, color: colors.gray300 });
export const carousel = style({ marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" });
export const dots = style({ display: "flex", gap: "0.5rem" });
export const dot = style({
  height: "1rem",
  width: "1rem",
  borderRadius: "999px",
  border: `1px solid ${colors.gray300}`,
  background: "transparent",
  ":hover": { borderColor: colors.yellow400 },
});
export const dotActive = style({ background: colors.gray300, borderColor: colors.gray300, ":hover": { background: colors.yellow400 } });

export const cta = style({
  position: "relative",
  margin: "3rem 0.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.5rem",
  overflow: "hidden",
  padding: "2rem",
  "@media": { [media.md]: { flexDirection: "row" } },
});
export const ctaCopy = style({ position: "relative", zIndex: 1, maxWidth: "36rem" });
export const ctaTitle = style({
  textAlign: "center",
  fontFamily: font.primary,
  fontSize: "2.25rem",
  fontWeight: 700,
  color: colors.white,
  "@media": { [media.md]: { textAlign: "left" } },
});
export const ctaText = style({
  marginTop: "0.5rem",
  textAlign: "center",
  fontFamily: font.secondary,
  color: "rgba(255,255,255,0.7)",
  "@media": { [media.md]: { textAlign: "left" } },
});
export const ctaButton = style({ position: "relative", zIndex: 1 });
export const ctaBlob = style({
  pointerEvents: "none",
  position: "absolute",
  right: "-4rem",
  top: "-6rem",
  height: "18rem",
  width: "18rem",
  borderRadius: "999px",
  background: "rgba(55, 65, 81, 0.7)",
  "@media": { [media.md]: { height: "28rem", width: "28rem" } },
});

export const seeAll = style({ marginTop: "2rem", textAlign: "center" });
export const bio = style({ paddingBottom: "2rem" });
export const bioSection = style({ marginTop: "2rem" });
export const prose = style({ margin: "1.5rem auto 0", maxWidth: "56rem" });
export const proseParagraph = style({
  marginTop: "1rem",
  textAlign: "left",
  fontFamily: font.secondary,
  fontSize: "1.125rem",
  color: colors.gray400,
  "@media": { [media.sm]: { fontSize: "1.25rem" } },
});
export const timeline = style({ margin: "2rem auto 0", maxWidth: "48rem" });
export const timelineItem = style({ display: "grid", gridTemplateColumns: "2.75rem minmax(0, 1fr)", gap: "1rem" });
export const timelineRail = style({ display: "flex", flexDirection: "column", alignItems: "center" });
export const timelineIcon = style({
  display: "grid",
  height: "2.75rem",
  width: "2.75rem",
  flexShrink: 0,
  placeItems: "center",
  borderRadius: "999px",
  background: colors.blue500,
  color: colors.gray950,
});
export const timelineLine = style({ marginTop: "0.5rem", width: "1px", flex: 1, background: colors.gray700 });
export const timelineBody = style({ paddingBottom: "2rem" });
export const timelineDate = style({ fontFamily: font.secondary, fontSize: "0.875rem", fontWeight: 500, color: colors.gray200 });
export const timelineCard = style({ marginTop: "0.5rem", padding: "1.25rem", "@media": { [media.md]: { padding: "1.5rem" } } });
export const timelineTitle = style({ fontFamily: font.primary, fontSize: "1.25rem", fontWeight: 700, color: colors.blue500 });
export const timelineSub = style({ marginTop: "0.25rem", fontFamily: font.secondary, color: colors.white });
export const timelineMeta = style({ marginTop: "0.75rem", fontFamily: font.secondary, color: colors.gray400 });
export const titleRow = style({ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" });
export const bulletList = style({ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: font.secondary, color: colors.gray400 });
export const iconLink = style({ color: colors.gray400, ":hover": { color: colors.blue400 } });
export const iconSvg = style({ height: "1.5rem", width: "1.5rem", fill: "currentColor" });
export const strokeIcon = style({ height: "1.5rem", width: "1.5rem", fill: "none", stroke: "currentColor", strokeWidth: 2 });
export const smallStroke = style({ height: "1rem", width: "1rem", fill: "none", stroke: "currentColor", strokeWidth: 2 });
export const fillIcon = style({ height: "100%", width: "100%", fill: "currentColor" });
export const fullStroke = style({ height: "100%", width: "100%", fill: "none", stroke: "currentColor", strokeWidth: 2 });
export const bigIcon = style({ margin: "0 auto", height: "7rem", width: "7rem", fill: "currentColor", color: colors.blue500 });

export const cardGrid = style({
  marginTop: "2rem",
  display: "grid",
  gap: "1.5rem",
  "@media": { [media.lg]: { gridTemplateColumns: "1fr 1fr" } },
});
export const achievement = style({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  borderRadius: "0.5rem",
  background: colors.gray800,
  padding: "1.5rem",
  boxShadow: shadow.xl,
  ...hoverLift,
  ":hover": { transform: "translateY(-0.25rem) scale(1.02)" },
});
export const achievementTitle = style({ fontFamily: font.primary, fontSize: "1.5rem", fontWeight: 700, color: colors.blue500 });
export const achievementMeta = style({ marginTop: "0.5rem", display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem" });
export const achievementPosition = style({ fontFamily: font.secondary, color: colors.white });
export const achievementDate = style({ fontFamily: font.secondary, fontSize: "0.875rem", color: colors.gray400 });
export const detailList = style({ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" });
export const detailText = style({ fontFamily: font.secondary, fontSize: "0.875rem", color: colors.gray300 });
export const orgCard = style({ height: "100%", padding: "1.5rem" });
export const orgRow = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  "@media": { [media.sm]: { flexDirection: "row" } },
});
export const orgMark = style({
  display: "grid",
  height: "6rem",
  width: "6rem",
  placeItems: "center",
  borderRadius: "999px",
  background: colors.gray700,
  fontFamily: font.primary,
  fontSize: "1.5rem",
  color: colors.blue300,
});
export const orgLogo = style({ height: "6rem", width: "6rem", borderRadius: "999px", background: colors.white, objectFit: "contain" });
export const orgCopy = style({ textAlign: "center", "@media": { [media.sm]: { textAlign: "left" } } });
export const orgName = style({ fontFamily: font.primary, fontSize: "1.5rem", fontWeight: 700, color: colors.blue500 });
export const orgRole = style({ fontFamily: font.secondary, fontSize: "1.125rem", color: colors.gray300 });
export const orgDate = style({ fontFamily: font.secondary, color: colors.gray400 });
export const orgNote = style({ marginTop: "0.5rem", fontFamily: font.poppins, fontSize: "0.875rem", color: colors.yellow400 });

export const workShell = style({
  margin: "2rem 0",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundImage: "linear-gradient(120deg, #1e293b 0%, #1f2937 48%, #13262c 100%)",
  "@media": { [media.lg]: { flexDirection: "row" } },
});
export const workColumn = style({
  width: "100%",
  borderBottom: `2px dashed ${colors.gray700}`,
  padding: "2rem",
  backgroundImage: "linear-gradient(180deg, rgb(59 130 246 / 0.08), transparent 70%)",
  "@media": { [media.lg]: { width: "50%", borderBottom: 0, borderRight: `2px dashed ${colors.gray700}` } },
});
export const workColumnPlain = style({
  width: "100%",
  padding: "2rem",
  backgroundImage: "linear-gradient(180deg, rgb(45 212 191 / 0.08), transparent 70%)",
  "@media": { [media.lg]: { width: "50%" } },
});
export const workTitle = style({
  marginTop: "2rem",
  textAlign: "center",
  fontFamily: font.primary,
  fontSize: "2.25rem",
  fontWeight: 700,
  color: colors.white,
  transition: "transform 500ms, color 500ms",
  ":hover": { transform: "scale(1.05)", color: colors.yellow400 },
});
export const workSummary = style({ marginTop: "1rem", textAlign: "center", fontFamily: font.secondary, fontSize: "1.125rem", color: colors.gray400 });
export const workLabel = style({ marginTop: "3rem", textAlign: "center", fontFamily: font.secondary, fontSize: "1.125rem", fontWeight: 500, color: colors.blue500 });
export const workList = style({ marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", textAlign: "center", fontFamily: font.secondary, fontSize: "1.125rem", color: colors.gray400 });
export const workLine = style({ marginTop: "0.5rem", textAlign: "center", fontFamily: font.secondary, fontSize: "1.125rem", color: colors.gray400 });

export const resumeShell = style({ margin: "2.5rem auto 0", maxWidth: "64rem", overflow: "hidden", borderRadius: "0.5rem", boxShadow: shadow.md });
export const resumeBar = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  background: colors.gray800,
  padding: "1.5rem",
  "@media": { [media.sm]: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } },
});
export const resumeTitle = style({ fontFamily: font.secondary, fontSize: "1.25rem", fontWeight: 600, color: colors.gray300 });
export const resumeFrame = style({ height: "75vh", minHeight: "32rem", width: "100%", background: colors.white });

export const contact = style({ margin: "2rem auto", width: "100%", padding: "2rem 1.25rem", "@media": { [media.xl]: { width: "83.333%" } } });
export const lead = style({ marginTop: "1rem", textAlign: "center", fontFamily: font.secondary, fontSize: "1.125rem", color: colors.gray400 });
export const contactGrid = style({
  marginTop: "2rem",
  display: "grid",
  gap: "1.5rem",
  "@media": { [media.lg]: { gridTemplateColumns: "1fr 1fr 1fr" } },
});
export const contactLink = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.35rem",
  borderRadius: "0.5rem",
  padding: "0.75rem",
  textAlign: "center",
  cursor: "pointer",
  background: "transparent",
  color: "inherit",
  transition: "transform 300ms",
  ":hover": { transform: "scale(1.05)" },
});
export const contactLabel = style({ display: "block", fontFamily: font.primary, fontSize: "1.25rem", fontWeight: 700, color: colors.gray200 });
export const contactValue = style({
  display: "block",
  fontFamily: font.secondary,
  fontSize: "1.125rem",
  lineHeight: 1.4,
  color: colors.blue400,
});
export const note = style({ margin: "2rem auto 0", maxWidth: "48rem", textAlign: "center", fontFamily: font.poppins, fontSize: "0.875rem", color: colors.gray400 });
export const formGrid = style({
  display: "grid",
  gap: "1.5rem",
  "@media": { [media.lg]: { gridTemplateColumns: "1fr 1fr" } },
});
export const formStack = style({ display: "flex", flexDirection: "column", gap: "1rem" });
export const label = style({ marginBottom: "0.5rem", display: "block", fontFamily: font.poppins, fontSize: "1.125rem", color: colors.gray300 });
export const errorText = style({ marginTop: "0.5rem", fontSize: "0.875rem", color: colors.red400 });
export const statusError = style({ marginTop: "1rem", fontFamily: font.secondary, color: colors.red400 });
export const statusOk = style({ marginTop: "1rem", fontFamily: font.secondary, color: colors.blue300 });
export const formTop = style({ marginTop: "1.5rem" });

export const pagePad = style({ paddingBottom: "2.5rem" });
export const centerNarrow = style({ margin: "1rem auto 0", maxWidth: "42rem", textAlign: "center", fontFamily: font.secondary, color: colors.gray400 });
export const narrowForm = style({ margin: "1.5rem auto 0", maxWidth: "28rem" });
export const hint = style({ marginTop: "0.5rem", fontFamily: font.poppins, fontSize: "0.875rem", color: colors.gray500 });
export const spinnerWrap = style({ display: "flex", minHeight: "40vh", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" });
const spin = keyframes({ to: { transform: "rotate(360deg)" } });

export const spinner = style({
  height: "3rem",
  width: "3rem",
  borderRadius: "999px",
  border: `4px solid ${colors.blue500}`,
  borderTopColor: "transparent",
  animation: `${spin} 0.8s linear infinite`,
});
export const alertCard = style({ margin: "2rem auto 0", maxWidth: "36rem", padding: "2rem", textAlign: "center" });
export const alertText = style({ fontFamily: font.secondary, fontSize: "1.125rem", color: colors.red300 });
export const emptyMark = style({ fontFamily: font.primary, fontSize: "3.75rem", color: colors.blue500 });
export const emptyTitle = style({ marginTop: "1rem", fontFamily: font.secondary, fontSize: "1.25rem", color: colors.white });
export const messageList = style({ margin: "2rem auto 0", maxWidth: "48rem", display: "flex", flexDirection: "column", gap: "1.5rem" });
export const messageCard = style({ padding: "1.5rem" });
export const messageRow = style({ display: "flex", alignItems: "flex-start", gap: "1rem" });
export const messageBody = style({ minWidth: 0, flex: 1 });
export const messageName = style({ fontFamily: font.secondary, fontSize: "1.25rem", fontWeight: 700, color: colors.gray200 });
export const messagePhone = style({ fontWeight: 500, color: colors.gray500 });
export const messageEmail = style({ fontFamily: font.secondary, color: colors.gray400 });
export const messageText = style({ marginTop: "0.75rem", fontFamily: font.primary, fontSize: "1.125rem", color: colors.gray300 });
export const deleteButton = style({
  display: "none",
  borderRadius: "0.25rem",
  padding: "0.5rem",
  color: colors.red400,
  ":hover": { background: colors.gray700 },
  ":disabled": { cursor: "not-allowed", opacity: 0.4 },
  "@media": { [media.sm]: { display: "inline-flex" } },
});
export const deleteText = style({
  marginTop: "1rem",
  width: "100%",
  fontFamily: font.secondary,
  color: colors.red400,
  ":disabled": { cursor: "not-allowed", opacity: 0.4 },
  "@media": { [media.sm]: { display: "none" } },
});

export const demoBanner = style({
  borderRadius: "0.5rem",
  border: "1px solid rgba(234, 179, 8, 0.4)",
  background: "rgba(234, 179, 8, 0.1)",
  padding: "0.75rem 1rem",
  textAlign: "center",
  fontFamily: font.secondary,
  color: colors.yellow100,
});
export const demoBannerStrong = style({ color: colors.yellow200 });
export const demoPage = style({ margin: "2rem 0" });
export const demoCard = style({
  margin: "0 auto",
  maxWidth: "48rem",
  borderRadius: "0.5rem",
  background: colors.gray100,
  padding: "1.5rem",
  color: colors.ink,
  boxShadow: shadow.lg,
  "@media": { [media.sm]: { padding: "2.5rem" } },
});
export const demoTitle = style({ textAlign: "center", fontFamily: font.poppins, fontSize: "1.5rem", fontWeight: 700 });
export const demoForm = style({ marginTop: "1.5rem" });
export const demoLabel = style({ marginBottom: "0.5rem", display: "block", fontFamily: font.poppins, fontWeight: 500 });
export const demoLabelGap = style({ marginTop: "1rem" });
export const demoControl = style({ width: "100%", borderRadius: "0.25rem", border: `1px solid ${colors.gray400}`, background: colors.white, padding: "0.5rem 1rem" });
export const demoSubmit = style({
  marginTop: "1rem",
  borderRadius: "0.25rem",
  background: colors.indigo500,
  padding: "0.5rem 1rem",
  fontFamily: font.poppins,
  color: colors.white,
  ":hover": { background: colors.indigo600 },
});
export const demoStatus = style({ marginTop: "1rem", fontFamily: font.poppins, fontSize: "0.875rem", color: colors.indigo800 });
export const demoFine = style({ marginTop: "1.5rem", textAlign: "center", fontFamily: font.poppins, color: colors.gray500 });
export const demoTermsButton = style({ color: colors.indigo600, textDecoration: "underline" });
export const demoTerms = style({ marginTop: "0.75rem", textAlign: "center", fontFamily: font.poppins, fontSize: "0.875rem", color: colors.gray700 });

export const dashPage = style({ padding: "2rem 0" });
export const dashCard = style({ marginTop: "1.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.4)", padding: "1.25rem", "@media": { [media.sm]: { padding: "1.5rem" } } });
export const dashHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "@media": { [media.sm]: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } },
});
export const dashTitle = style({ fontFamily: font.secondary, fontSize: "1.5rem", fontWeight: 500, color: colors.gray100 });
export const ghostButton = style({
  borderRadius: "1rem",
  border: "2px solid currentColor",
  padding: "0.5rem 1.5rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  textTransform: "uppercase",
  color: colors.white,
  ":hover": { background: colors.blue700 },
});
export const dashSub = style({ marginTop: "0.5rem", fontFamily: font.secondary, color: colors.gray300 });
export const dashStatus = style({ marginTop: "1rem", minHeight: "1.5rem", fontFamily: font.poppins, fontSize: "0.875rem", color: colors.blue300 });
export const farmList = style({ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "2.5rem" });
export const farm = style({ borderTop: "1px solid rgba(96, 165, 250, 0.7)", paddingTop: "1.5rem" });
export const farmHead = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  "@media": { [media.lg]: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } },
});
export const farmPair = style({ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem" });
export const farmName = style({ fontFamily: font.secondary, fontSize: "1.875rem", fontWeight: 600, color: colors.white });
export const recommended = style({ borderRadius: "0.375rem", background: colors.green500, padding: "0.25rem 0.5rem", fontSize: "0.875rem", color: colors.white });
export const farmStats = style({
  marginTop: "1rem",
  display: "grid",
  gap: "1rem",
  color: colors.white,
  "@media": { [media.sm]: { gridTemplateColumns: "1fr 1fr 1fr" } },
});
export const statLabel = style({ color: colors.gray400 });
export const statValue = style({ fontSize: "1.5rem" });
export const actionRow = style({
  marginTop: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  "@media": { [media.sm]: { flexDirection: "row" } },
});

export const squidPage = style({ padding: "2.5rem 0" });
export const squidHidden = style({ visibility: "hidden" });
export const squidCard = style({
  margin: "2rem auto 0",
  display: "flex",
  maxWidth: "48rem",
  flexDirection: "column",
  alignItems: "center",
  padding: "3rem 1.5rem",
});
export const squidArt = style({ height: "11rem", width: "100%", maxWidth: "28rem" });
export const squidCopy = style({ marginTop: "1.5rem", maxWidth: "36rem", textAlign: "center", fontFamily: font.secondary, fontSize: "1.125rem", color: colors.gray300 });
export const topGap = style({ marginTop: "2rem" });

export const missing = style({ margin: "0 auto", maxWidth: "48rem", padding: "2.5rem 0", textAlign: "center" });
export const missingArt = style({ margin: "0 auto", height: "auto", width: "100%", maxWidth: "32rem" });
export const missingTitle = style({
  marginTop: "1rem",
  fontFamily: font.primary,
  fontSize: "2.25rem",
  fontWeight: 900,
  color: colors.white,
  transition: "transform 500ms, color 500ms",
  ":hover": { transform: "scale(1.05)", color: colors.yellow400 },
  "@media": { [media.sm]: { fontSize: "3rem" } },
});
export const missingCopy = style({ marginTop: "1rem", fontFamily: font.secondary, fontSize: "1.25rem", color: colors.gray400 });
export const missingAction = style({ marginTop: "1.5rem" });

export const toastStack = style({
  pointerEvents: "none",
  position: "fixed",
  right: "1rem",
  top: "1rem",
  zIndex: 50,
  display: "flex",
  width: "min(100% - 2rem, 24rem)",
  flexDirection: "column",
  gap: "0.75rem",
});
export const toast = style({
  pointerEvents: "auto",
  borderRadius: "0.375rem",
  padding: "0.75rem 1rem",
  fontFamily: font.secondary,
  boxShadow: shadow.xl,
});
export const toastSuccess = style({ background: colors.gray800, color: colors.gray100, boxShadow: `${shadow.xl}, inset 0 0 0 1px ${colors.blue500}` });
export const toastError = style({ background: colors.red600, color: colors.white });
