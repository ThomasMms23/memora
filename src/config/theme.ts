/**
 * Configuration centralisée du thème Memora
 */

export const theme = {
  colors: {
    primary: "#7c3bed",
    primaryHover: "#6929d4",
    primaryLight: "#a855f7",
    primaryDark: "#c084fc",
    background: "#FFFFFF",
    backgroundSecondary: "#FAFAFA",
    text: "#171717",
    textSecondary: "#6b7280",
    border: "#e5e7eb",
    success: "#10b981",
  },
  spacing: {
    section: {
      mobile: "py-16",
      desktop: "py-24",
    },
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 0.8,
    },
  },
} as const;



