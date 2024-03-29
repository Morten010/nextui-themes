export const cherryTheme = `import type { Config } from "tailwindcss";
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
      cherryBlossom: {
        colors: {
          background: "#F9EBEA",
          foreground: "#333",
          primary: "#E74C3C",
          content1: "#e8b4ae",
          content2: "#e89f97",
          content3: "#e88a80",
          content4: "#e88074",
          danger: "#C0392B",
          default: "#ff9393",
          divider: "#3498DB",
          focus: "#C0392B",
          overlay: "#F9EBEA",
          secondary: "#D35400",
          success: "#6bc484",
          warning: "#F39C12",
        },
        layout: {
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
          radius: {
            small: "8px",
            medium: "12px",
            large: "18px",
          },
        },
      },
      darkBlue: {
        colors: {
          background: {
            "50": "#1C1F26",
            "100": "#222933",
            "200": "#293142",
            "300": "#2F3951",
            "400": "#35425F",
            "500": "#3B4B6E",
            "600": "#42547D",
            "700": "#485D8C",
            "800": "#4E669A",
            "900": "#546FA9",
            DEFAULT: "#1C1F26",
            foreground: "#fafafa"
          },
          foreground: {
            "50": "#ffffff",
            "100": "#ffffff",
            "200": "#ffffff",
            "300": "#ffffff",
            "400": "#ffffff",
            "500": "#fafafa",
            "600": "#eaeaea",
            "700": "#d4d4d4",
            "800": "#b7b7b7",
            "900": "#999999",
            DEFAULT: "#fafafa"
          },
          primary: {
            "50": "#394989",
            "100": "#3D4F9A",
            "200": "#4154AB",
            "300": "#4659BC",
            "400": "#4A5FCD",
            "500": "#4E64DE",
            "600": "#5369EF",
            "700": "#576EFF",
            "800": "#5C73FF",
            "900": "#6078FF",
            DEFAULT: "#394989",
            foreground: "#fafafa"
          },
          content1: "#36415B",
          content2: "#44516F",
          content3: "#556384",
          content4: "#667498",
          danger: "#CC4455",
          default: {
            "50": "#F0F1F4",
            "100": "#D8DAE1",
            "200": "#C0C3D8",
            "300": "#A8ABCF",
            "400": "#9196C6",
            "500": "#7A81BD",
            "600": "#6269B4",
            "700": "#4B52AB",
            "800": "#333AA2",
            "900": "#1C2399",
            DEFAULT: "#7A81BD",
            foreground: "#36415B"
          },
          divider: "#59677E",
          focus: "#394989",
          overlay: "#1C1F26",
          secondary: "#6C839D",
          success: "#55AA77",
          warning: "#FFAA55",
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
export default config;`