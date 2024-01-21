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
          "background": {
            "50": "#333333",
            "100": "#404040",
            "200": "#4d4d4d",
            "300": "#595959",
            "400": "#666666",
            "500": "#808080",
            "600": "#999999",
            "700": "#b3b3b3",
            "800": "#bfbfbf",
            "900": "#cccccc",
            "DEFAULT": "#121212"
          },
          "content1": "#595959",
          "content2": "#666666",
          "content3": "#808080",
          "content4": "#999999",
          "danger": {
            "50": "#61051d",
            "100": "#7a0625",
            "200": "#92072c",
            "300": "#aa0833",
            "400": "#c3093b",
            "500": "#f40b49",
            "600": "#f63c6e",
            "700": "#f86d92",
            "800": "#f985a4",
            "900": "#fa9eb6",
            "DEFAULT": "#EB154E"
          },
          "default": {
            "50": "#333333",
            "100": "#404040",
            "200": "#4d4d4d",
            "300": "#595959",
            "400": "#666666",
            "500": "#808080",
            "600": "#999999",
            "700": "#b3b3b3",
            "800": "#bfbfbf",
            "900": "#cccccc",
            "DEFAULT": "#808080"
          },
          "divider": "#b3b3b3",
          "focus": "#0792E3",
          "foreground": {
            "50": "#333333",
            "100": "#404040",
            "200": "#4d4d4d",
            "300": "#595959",
            "400": "#666666",
            "500": "#808080",
            "600": "#999999",
            "700": "#b3b3b3",
            "800": "#bfbfbf",
            "900": "#cccccc",
            "DEFAULT": "#FAFAFA"
          },
          "overlay": "#121212",
          "primary": {
            "50": "#024064",
            "100": "#02507e",
            "200": "#026097",
            "300": "#0370b0",
            "400": "#0380c9",
            "500": "#04a0fb",
            "600": "#36b3fc",
            "700": "#68c6fd",
            "800": "#81d0fd",
            "900": "#9bd9fd",
            "DEFAULT": "#0792E3"
          },
          "secondary": {
            "50": "#1d3849",
            "100": "#24465c",
            "200": "#2b546e",
            "300": "#326281",
            "400": "#397093",
            "500": "#478db8",
            "600": "#6ca3c6",
            "700": "#91bad4",
            "800": "#a3c6db",
            "900": "#b6d1e2",
            "DEFAULT": "#8DD2FC"
          },
          "success": {
            "50": "#006641",
            "100": "#008051",
            "200": "#009961",
            "300": "#00b371",
            "400": "#00cc81",
            "500": "#00ffa1",
            "600": "#33ffb4",
            "700": "#66ffc7",
            "800": "#80ffd0",
            "900": "#99ffda",
            "DEFAULT": "#00D184"
          },
          "warning": {
            "50": "#662b00",
            "100": "#803500",
            "200": "#994000",
            "300": "#b34a00",
            "400": "#cc5500",
            "500": "#ff6a00",
            "600": "#ff8833",
            "700": "#ffa666",
            "800": "#ffb580",
            "900": "#ffc499",
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
