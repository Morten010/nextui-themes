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
      test: {
        "colors": {
          "background": "#121212",
          "content1": "#525252",
          "content2": "#787878",
          "content3": "#a3a3a3",
          "content4": "#c7c7c7",
          "danger": {
            "50": "#490316",
            "100": "#9c072f",
            "200": "#e50b45",
            "300": "#f7507c",
            "400": "#fa94af",
            "500": "#fba7be",
            "600": "#fcbbcc",
            "700": "#fdd3de",
            "800": "#feecf0",
            "900": "#fff5f8",
            "DEFAULT": "#EB154E"
          },
          "default": {
            "50": "#262626",
            "100": "#525252",
            "200": "#787878",
            "300": "#a3a3a3",
            "400": "#c7c7c7",
            "500": "#d1d1d1",
            "600": "#dbdbdb",
            "700": "#e8e8e8",
            "800": "#f5f5f5",
            "900": "#fafafa",
            "DEFAULT": "#FFFFFF"
          },
          "divider": "#bc47ff",
          "focus": "#9800F0",
          "foreground": {
            "50": "#262626",
            "100": "#525252",
            "200": "#787878",
            "300": "#a3a3a3",
            "400": "#c7c7c7",
            "500": "#d1d1d1",
            "600": "#dbdbdb",
            "700": "#e8e8e8",
            "800": "#f5f5f5",
            "900": "#fafafa",
            "DEFAULT": "#FAFAFA"
          },
          "overlay": "#333333",
          "primary": {
            "50": "#30004d",
            "100": "#6700a3",
            "200": "#9800f0",
            "300": "#bc47ff",
            "400": "#d68fff",
            "500": "#dda3ff",
            "600": "#e5b8ff",
            "700": "#eed1ff",
            "800": "#f8ebff",
            "900": "#fbf5ff",
            "DEFAULT": "#9800F0"
          },
          "secondary": {
            "50": "#4d3800",
            "100": "#a37800",
            "200": "#f0b000",
            "300": "#ffce47",
            "400": "#ffe18f",
            "500": "#ffe7a3",
            "600": "#ffecb8",
            "700": "#fff3d1",
            "800": "#fffaeb",
            "900": "#fffcf5",
            "DEFAULT": "#FCB900"
          },
          "success": {
            "50": "#15372a",
            "100": "#2e7659",
            "200": "#43ad82",
            "300": "#7bccab",
            "400": "#aee0cc",
            "500": "#bde5d5",
            "600": "#ccebde",
            "700": "#def2ea",
            "800": "#f0f9f6",
            "900": "#f8fcfa",
            "DEFAULT": "#7BDBB5"
          },
          "warning": {
            "50": "#4d2000",
            "100": "#a34400",
            "200": "#f06400",
            "300": "#ff9447",
            "400": "#ffbe8f",
            "500": "#ffc9a3",
            "600": "#ffd5b8",
            "700": "#ffe4d1",
            "800": "#fff3eb",
            "900": "#fff9f5",
            "DEFAULT": "#FF6A00"
          }
        },
        "extend": "dark"
      },
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
            "50": "#FDFCFE05",
            "100": "#F5F0FF10",
            "200": "#F5F0FF20",
            "300": "#F5F0FF30",
            "400": "#F5F0FF40",
            "500": "#F5F0FF50",
            "600": "#F5F0FF60",
            "700": "#F5F0FF70",
            "800": "#F5F0FF80",
            "900": "#F5F0FF90",
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
          default: {
            "50": "#EED3DC",
            "100": "#E6C1CA",
            "200": "#DEAEB8",
            "300": "#D79CA6",
            "400": "#CF8A94",
            "500": "#C87882",
            "600": "#C16670",
            "700": "#B9545E",
            "800": "#B2424C",
            "900": "#AA303A",
            DEFAULT: "#C87882"
          },
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
            "50": "#7A81BD05",
            "100": "#7A81BD10",
            "200": "#262a38",
            "300": "#7A81BD30",
            "400": "#7A81BD40",
            "500": "#7A81BD50",
            "600": "#7A81BD60",
            "700": "#7A81BD70",
            "800": "#7A81BD80",
            "900": "#7A81BD90",
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
export default config;
