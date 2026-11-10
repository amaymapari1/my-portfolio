import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { colors, font } from "./theme";

const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(18px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const blink = keyframes({
  "50%": { opacity: 0 },
});

const spin = keyframes({
  to: { transform: "rotate(360deg)", filter: "hue-rotate(360deg)" },
});

const shakeFrames = keyframes({
  "0%": { transform: "translateX(0)" },
  "20%": { transform: "translateX(-8px)" },
  "40%": { transform: "translateX(8px)" },
  "60%": { transform: "translateX(-8px)" },
  "80%": { transform: "translateX(8px)" },
  "100%": { transform: "translateX(0)" },
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: colors.gray700,
});

globalStyle("html, body, #root", {
  minHeight: "100%",
});

globalStyle("html", {
  lineHeight: 1.5,
});

globalStyle("body", {
  margin: 0,
  background: colors.gray900,
  color: colors.gray100,
  fontFamily: font.secondary,
});

globalStyle("h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote", {
  margin: 0,
  padding: 0,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button, input, select, textarea", {
  font: "inherit",
  color: "inherit",
  margin: 0,
});

globalStyle("button", {
  background: "transparent",
});

globalStyle("img, svg, iframe", {
  display: "block",
  maxWidth: "100%",
});

globalStyle(":focus-visible", {
  outline: `2px solid ${colors.blue400}`,
  outlineOffset: "3px",
});

globalStyle("::-webkit-scrollbar", {
  width: "8px",
  background: "transparent",
});

globalStyle("::-webkit-scrollbar-thumb", {
  background: "linear-gradient(#00c6ff, transparent)",
  borderRadius: "6px",
});

globalStyle("*, *::before, *::after", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      scrollBehavior: "auto",
      animationDuration: "0.01ms",
      animationIterationCount: "1",
      transitionDuration: "0.01ms",
    },
  },
});

export const srOnly = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});

export const reveal = style({
  animation: `${fadeUp} 0.7s ease both`,
});

export const revealDelay = style({
  animationDelay: "140ms",
});

export const revealDelayLong = style({
  animationDelay: "280ms",
});

export const shake = style({
  animation: `${shakeFrames} 0.8s ease both`,
});

export const caret = style({
  marginLeft: "0.15rem",
  animation: `${blink} 1s steps(1) infinite`,
});

export const loaderWrap = style({
  position: "fixed",
  inset: 0,
  zIndex: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.85)",
});

export const loader = style({
  position: "relative",
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  background: "linear-gradient(45deg, transparent, transparent 40%, #e5f403)",
  animation: `${spin} 2s linear infinite`,
});

globalStyle(`${loader}::before`, {
  content: "",
  position: "absolute",
  inset: "6px",
  zIndex: 1,
  borderRadius: "50%",
  background: colors.black,
});

globalStyle(`${loader}::after`, {
  content: "",
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  background: "linear-gradient(45deg, transparent, transparent 40%, #e5f403)",
  filter: "blur(40px)",
});

export const skipLink = style({
  position: "absolute",
  left: "1rem",
  top: "-4rem",
  zIndex: 50,
  borderRadius: "0.375rem",
  background: colors.blue500,
  color: colors.white,
  padding: "0.5rem 0.75rem",
  ":focus": { top: "1rem" },
});
