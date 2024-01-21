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
            "DEFAULT": "#ACD7E6",
            "foreground": "#f9fbfb"
          },
          "content1": "#f3f5f7",
          "content2": "#e3e8ed",
          "content3": "#d3dbe3",
          "content4": "#c7d1db",
          "danger": {
            "50": "#fef6f6",
            "100": "#fceded",
            "200": "#f9d7d7",
            "300": "#f6c1c1",
            "400": "#f4afaf",
            "500": "#f19d9d",
            "600": "#e85e5e",
            "700": "#d21e1e",
            "800": "#8f1414",
            "900": "#430a0a",
            "DEFAULT": "#FF4040"
          },
          "default": {
            "50": "#f9fafb",
            "100": "#f3f5f7",
            "200": "#e3e8ed",
            "300": "#d3dbe3",
            "400": "#c7d1db",
            "500": "#bbc7d3",
            "600": "#8fa3b7",
            "700": "#5d7892",
            "800": "#405264",
            "900": "#1e262f",
            "DEFAULT": "#6F7F8F",
            "foreground": "#1e262f"
          },
          "divider": "#8cafba",
          "focus": "#00598C",
          "foreground": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#e8e8e8",
            "300": "#dbdbdb",
            "400": "#d1d1d1",
            "500": "#c7c7c7",
            "600": "#a3a3a3",
            "700": "#787878",
            "800": "#525252",
            "900": "#262626",
            "DEFAULT": "#FFFFFF",
            "foreground": "#262626"
          },
          "overlay": "#ACD7E6",
          "primary": {
            "50": "#f5fbff",
            "100": "#ebf8ff",
            "200": "#d1eeff",
            "300": "#b8e5ff",
            "400": "#a3ddff",
            "500": "#8fd6ff",
            "600": "#47bcff",
            "700": "#0098f0",
            "800": "#0067a3",
            "900": "#00304d",
            "DEFAULT": "#00598C"
          },
          "secondary": {
            "50": "#f5fcff",
            "100": "#ebf9ff",
            "200": "#d1f2ff",
            "300": "#b8ebff",
            "400": "#a3e5ff",
            "500": "#8fdfff",
            "600": "#47cbff",
            "700": "#00acf0",
            "800": "#0075a3",
            "900": "#00374d",
            "DEFAULT": "#00A6E8"
          },
          "success": {
            "50": "#f6fef9",
            "100": "#edfdf3",
            "200": "#d6fae5",
            "300": "#c0f7d7",
            "400": "#aef4cb",
            "500": "#9cf2c0",
            "600": "#5dea97",
            "700": "#1cd468",
            "800": "#139047",
            "900": "#094421",
            "DEFAULT": "#2FCC70"
          },
          "warning": {
            "50": "#fffaf5",
            "100": "#fff6eb",
            "200": "#ffead1",
            "300": "#ffdfb8",
            "400": "#ffd6a3",
            "500": "#ffcd8f",
            "600": "#ffac47",
            "700": "#f08400",
            "800": "#a35a00",
            "900": "#4d2a00",
            "DEFAULT": "#FF8C00"
          }
        },
        "extend": "light"
      },
      posthog: {
        "colors": {
          "background": {
            "DEFAULT": "#1C1E26",
            "foreground": "#f9f9fb"
          },
          "content1": "#1c2030",
          "content2": "#3c4567",
          "content3": "#596597",
          "content4": "#8b95bb",
          "danger": {
            "50": "#3f0d0d",
            "100": "#871d1d",
            "200": "#c62a2a",
            "300": "#df6868",
            "400": "#eba2a2",
            "500": "#efb3b3",
            "600": "#f3c4c4",
            "700": "#f7d9d9",
            "800": "#fbeeee",
            "900": "#fdf7f7",
            "DEFAULT": "#F25555"
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
            "DEFAULT": "#FAFAFA",
            foreground: "#1C1E26"
          },
          "divider": "#8b95bb",
          "focus": "#F7A500",
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
          "overlay": "#1C1E26",
          "primary": {
            "50": "#4d3300",
            "100": "#a36d00",
            "200": "#f0a000",
            "300": "#ffc247",
            "400": "#ffda8f",
            "500": "#ffe0a3",
            "600": "#ffe7b8",
            "700": "#fff0d1",
            "800": "#fff8eb",
            "900": "#fffcf5",
            "DEFAULT": "#F7A500"
          },
          "secondary": {
            "50": "#072045",
            "100": "#104494",
            "200": "#1764d9",
            "300": "#5994ee",
            "400": "#99bef4",
            "500": "#accaf6",
            "600": "#bed6f8",
            "700": "#d5e4fb",
            "800": "#edf3fd",
            "900": "#f6f9fe",
            "DEFAULT": "#2F80FA"
          },
          "success": {
            "50": "#0b4221",
            "100": "#178c46",
            "200": "#22ce67",
            "300": "#61e596",
            "400": "#9fefbf",
            "500": "#b0f2ca",
            "600": "#c2f5d6",
            "700": "#d8f9e5",
            "800": "#edfcf3",
            "900": "#f6fef9",
            "DEFAULT": "#36C26E"
          },
          "warning": {
            "50": "#4d1800",
            "100": "#a33400",
            "200": "#f04c00",
            "300": "#ff8247",
            "400": "#ffb28f",
            "500": "#ffc0a3",
            "600": "#ffceb8",
            "700": "#ffe0d1",
            "800": "#fff1eb",
            "900": "#fff8f5",
            "DEFAULT": "#F54E00"
          }
        },
        "extend": "dark"
      },
    }
  })]
};
export default config;
