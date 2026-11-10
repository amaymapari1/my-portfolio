export const colors = {
  white: "#ffffff",
  black: "#000000",
  gray950: "#030712",
  gray900: "#111827",
  gray800: "#1f2937",
  gray700: "#374151",
  gray600: "#4b5563",
  gray500: "#6b7280",
  gray400: "#9ca3af",
  gray300: "#d1d5db",
  gray200: "#e5e7eb",
  gray100: "#f3f4f6",
  blue700: "#1d4ed8",
  blue500: "#3b82f6",
  blue400: "#60a5fa",
  blue300: "#93c5fd",
  yellow400: "#facc15",
  yellow200: "#fef08a",
  yellow100: "#fef9c3",
  red600: "#dc2626",
  red400: "#f87171",
  red300: "#fca5a5",
  green500: "#22c55e",
  indigo600: "#4f46e5",
  indigo500: "#6366f1",
  indigo800: "#3730a3",
  ink: "#1f2937",
} as const;

export const font = {
  primary: '"IBM Plex Mono", ui-monospace, monospace',
  secondary: '"Space Grotesk", "Segoe UI", sans-serif',
  poppins: '"Poppins", "Segoe UI", sans-serif',
} as const;

export const media = {
  sm: "screen and (min-width: 640px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 1024px)",
  xl: "screen and (min-width: 1280px)",
} as const;

export const shadow = {
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
} as const;
