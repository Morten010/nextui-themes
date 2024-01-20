export const purpleTheme = `import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  
  darkMode: "class",
  plugins: [nextui({
    themes: {
      purple: {
        colors: {
          background: {
            "50": "#353340",
            "100": "#403C4B",
            "200": "#4A4657",
            "300": "#555263",
            "400": "#605D6E",
            "500": "#6B677A",
            "600": "#756285",
            "700": "#807E91",
            "800": "#8B879D",
            "900": "#9684A8",
            DEFAULT: "#201c2b",
            foreground: "#fafafa"
          },
          foreground: "#fafafa",
          primary: "#522E91",
          content1: "#292836",
          content2: "#373649",
          content3: "#4d4c67",
          content4: "#636284",
          danger: "#bd5b5c",
          default: {
            "50": "#FDFCFE",
            "100": "#F5F0FF",
            "200": "#E1D4F7",
            "300": "#C9AFE9",
            "400": "#AB82D8",
            "500": "#8A5EDF",
            "600": "#6B3EB9",
            "700": "#522E91",
            "800": "#3B1E6B",
            "900": "#271245",
            DEFAULT: "#F5F0FF",
            foreground: "#522E91"
          },
          divider: "#8559c6",
          focus: "#522E91",
          overlay: "#201c2b",
          secondary: "#e5cd74",
          success: "#6cbc72",
          warning: "#f3aa6d",
        },
        layout: {
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px"
          },
          radius: {
            small: "8px",
            medium: "12px",
            large: "18px"
          },
        },
      },
    }
  })]
};
export default config;

`




