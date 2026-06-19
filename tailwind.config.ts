import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F3EB",
        "paper-2": "#FBF8F2",
        teal: "#2C474F",
        "teal-deep": "#243A41",
        bronze: "#AF7338",
        "bronze-soft": "#C4915F",
        ink: "#33424A",
        muted: "#8C877C",
        line: "#E4DCCE",
        "line-soft": "#ECE5D8",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        ku: ["var(--font-vazirmatn)", "sans-serif"],
      },
      maxWidth: {
        shell: "1080px",
        reader: "760px",
      },
      boxShadow: {
        photo: "0 16px 38px rgba(0,0,0,.32)",
        portrait: "0 14px 32px rgba(0,0,0,.10)",
      },
    },
  },
  plugins: [],
};

export default config;
