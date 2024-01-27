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
      "greenTheme": {
        "colors": {
          "background": {
            "DEFAULT": "#001a00",
            "foreground": "#f5f6ff"
          },
          "content1": "#002400",
          "content2": "#003700",
          "content3": "#004b00",
          "content4": "#006400",
          "danger": {
            "50": "#170b01",
            "100": "#32020a",
            "200": "#49040e",
            "300": "#804afc",
            "400": "#b1fd90",
            "500": "#bfeaa5",
            "600": "#cdfeb9",
            "700": "#dffed2",
            "800": "#f1ffeb",
            "900": "#f8fff5",
            "DEFAULT": "#4BEB07"
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
            "foreground": "#262626"
          },
          "divider": "#00ff47",
          "focus": "#1db31c",
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
            "DEFAULT": "#FAFAFA",
            "foreground": "#262626"
          },
          "overlay": "#001a00",
          "primary": {
            "50": "#003c11",
            "100": "#007f24",
            "200": "#00bb35",
            "300": "#a57cd7",
            "400": "#afe6a7",
            "500": "#bdebce",
            "600": "#ccefcc",
            "700": "#def5db",
            "800": "#fbf0ef",
            "900": "#f8fdf7",
            "DEFAULT": "#1CDB6A"
          },
          "secondary": {
            "50": "#381524",
            "100": "#772c4d",
            "200": "#af415e",
            "300": "#cd799e",
            "400": "#e1adc3",
            "500": "#e6bccc",
            "600": "#ecebd9",
            "700": "#f3ddf7",
            "800": "#f9f0f4",
            "900": "#fcfaf8",
            "DEFAULT": "#88FCBB"
          },
          "success": {
            "50": "#27103c",
            "100": "#538122",
            "200": "#7abd32",
            "300": "#a5d86e",
            "400": "#c8e7a6",
            "500": "#d2ecc6",
            "600": "#dcf0c7",
            "700": "#e8f5db",
            "800": "#f5fbe9",
            "900": "#fafdf7",
            "DEFAULT": "#80B34B"
          },
          "warning": {
            "50": "#3a4c01",
            "100": "#027ca2",
            "200": "#b602ed",
            "300": "#d349fd",
            "400": "#e490fe",
            "500": "#e9a4fe",
            "600": "#eeb8fe",
            "700": "#f4d2ff",
            "800": "#faebff",
            "900": "#fdf5ff",
            "DEFAULT": "#05F0B9"
          }
        },
        "extend": "dark"
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
            "DEFAULT": "#787878",
            foreground: "#fafafa"
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
            "DEFAULT": "#FAFAFA",
            "foreground": "#262626"
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
      "blossomTheme":  {
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
      "fluentTheme": {
        "colors": {
          "background": {
            "DEFAULT": "#F8F8F8",
            "foreground": "#000000"
          },
          "content1": "#E0E0E0",
          "content2": "#D1D1D1",
          "content3": "#B5B5B5",
          "content4": "#A2A2A2",
          "danger": {
            "50": "#FEE8E8",
            "100": "#FCC3C3",
            "200": "#FA9999",
            "300": "#F87575",
            "400": "#F45151",
            "500": "#F23636",
            "600": "#E32929",
            "700": "#D02020",
            "800": "#B81818",
            "900": "#9D1212",
            "DEFAULT": "#E50000"
          },
          "default": {
            "50": "#F8F8F8",
            "100": "#F1F1F1",
            "200": "#E1E1E1",
            "300": "#CFCFCF",
            "400": "#B1B1B1",
            "500": "#979797",
            "600": "#7C7C7C",
            "700": "#616161",
            "800": "#454545",
            "900": "#2C2C2C",
            "DEFAULT": "#000000",
            "foreground": "#F8F8F8"
          },
          "divider": "#C6C6C6",
          "focus": "#4C4CFF",
          "foreground": {
            "50": "#F8F8F8",
            "100": "#F1F1F1",
            "200": "#E1E1E1",
            "300": "#CFCFCF",
            "400": "#B1B1B1",
            "500": "#979797",
            "600": "#7C7C7C",
            "700": "#616161",
            "800": "#454545",
            "900": "#2C2C2C",
            "DEFAULT": "#000000",
            "foreground": "#F8F8F8"
          },
          "overlay": "#F8F8F8",
          "primary": {
            "50": "#E5ECFF",
            "100": "#BBD4FF",
            "200": "#8BBFFF",
            "300": "#5C9DFF",
            "400": "#347FFF",
            "500": "#206EFF",
            "600": "#1651E3",
            "700": "#1040C9",
            "800": "#0D32A9",
            "900": "#0A258C",
            "DEFAULT": "#0053FF"
          },
          "secondary": {
            "50": "#F1F9FF",
            "100": "#D1E4FF",
            "200": "#A3C9FF",
            "300": "#75AFFF",
            "400": "#4A90FF",
            "500": "#2F78FF",
            "600": "#1E62E3",
            "700": "#144DBF",
            "800": "#0F3D9E",
            "900": "#0C307F",
            "DEFAULT": "#0078D4"
          },
          "success": {
            "50": "#E9FCEB",
            "100": "#B9F7C5",
            "200": "#88F2A1",
            "300": "#58ED7D",
            "400": "#2BE45F",
            "500": "#14D84D",
            "600": "#0CBF41",
            "700": "#089E38",
            "800": "#067F30",
            "900": "#04682A",
            "DEFAULT": "#0BDA51"
          },
          "warning": {
            "50": "#FFFDE7",
            "100": "#FFF9C4",
            "200": "#FFF59D",
            "300": "#FFF176",
            "400": "#FFEE58",
            "500": "#FFEB3B",
            "600": "#FDD835",
            "700": "#FBC02D",
            "800": "#F9A825",
            "900": "#F57F17",
            "DEFAULT": "#FFC107"
          }
        },
        "extend": "dark"
      },
    },
    
  })]
};
export default config;
