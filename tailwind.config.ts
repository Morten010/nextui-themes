import type { Config } from "tailwindcss";
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
        extend: "dark"
      },
      oceanBlue: {
        colors: {
          background: "#001f3f",
          foreground: "#ecf0f1",
          primary: "#3498db",
          content1: "#2980b9",
          content2: "#2ecc71",
          content3: "#16a085",
          content4: "#16a085",
          danger: "#e74c3c",
          default: "#ecf0f1",
          divider: "#16a085",
          focus: "#e74c3c",
          overlay: "#001f3f",
          secondary: "#2ecc71",
          success: "#27ae60",
          warning: "#f39c12",
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
      forestGreen: {
        colors: {
          background: "#2c3e50",
          foreground: "#ecf0f1",
          primary: "#2ecc71",
          content1: "#2c3e50",
          content2: "#27ae60",
          content3: "#1abc9c",
          content4: "#1abc9c",
          danger: "#e74c3c",
          default: "#ecf0f1",
          divider: "#1abc9c",
          focus: "#e74c3c",
          overlay: "#2c3e50",
          secondary: "#27ae60",
          success: "#16a085",
          warning: "#f39c12",
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
      cherryBlossom: {
        colors: {
          background: "#F9EBEA",
          foreground: "#333",
          primary: "#E74C3C",
          content1: "#F9EBEA",
          content2: "#ECF0F1",
          content3: "#3498DB",
          content4: "#3498DB",
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
      turquoiseDelight: {
        colors: {
          background: "#16A085",
          foreground: "#ECF0F1",
          primary: "#1ABC9C",
          content1: "#27AE60",
          content2: "#3498DB",
          content3: "#2C3E50",
          content4: "#2C3E50",
          danger: "#E74C3C",
          default: "#ECF0F1",
          divider: "#2C3E50",
          focus: "#E74C3C",
          overlay: "#16A085",
          secondary: "#3498DB",
          success: "#2ECC71",
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
      }
      
    }
  })]
};
export default config;
