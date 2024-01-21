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
            "DEFAULT": "#000212",
            "foreground": "#f5f6ff"
          },
          "content1": "#000529",
          "content2": "#000842",
          "content3": "#000b5c",
          "content4": "#000f80",
          "danger": {
            "50": "#4b0117",
            "100": "#a10232",
            "200": "#ec0449",
            "300": "#fc4a80",
            "400": "#fd90b1",
            "500": "#fea5bf",
            "600": "#feb9cd",
            "700": "#fed2df",
            "800": "#ffebf1",
            "900": "#fff5f8",
            "DEFAULT": "#EB074B"
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
          "divider": "#475dff",
          "focus": "#5C6AD1",
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
          "overlay": "#000212",
          "primary": {
            "50": "#11163c",
            "100": "#242f7f",
            "200": "#3544bb",
            "300": "#707cd7",
            "400": "#a7afe6",
            "500": "#b7bdeb",
            "600": "#c7ccef",
            "700": "#dbdef5",
            "800": "#eff0fb",
            "900": "#f7f8fd",
            "DEFAULT": "#5C6AD1"
          },
          "secondary": {
            "50": "#241538",
            "100": "#4d2c77",
            "200": "#7041af",
            "300": "#9e79cd",
            "400": "#c3ade1",
            "500": "#cebce6",
            "600": "#d9cbec",
            "700": "#e7ddf3",
            "800": "#f4f0f9",
            "900": "#faf8fc",
            "DEFAULT": "#BB88FC"
          },
          "success": {
            "50": "#103c27",
            "100": "#228153",
            "200": "#32bd7a",
            "300": "#6ed8a5",
            "400": "#a6e7c8",
            "500": "#b6ecd2",
            "600": "#c7f0dc",
            "700": "#dbf5e8",
            "800": "#effbf5",
            "900": "#f7fdfa",
            "DEFAULT": "#4BB380"
          },
          "warning": {
            "50": "#4c3a01",
            "100": "#a27c02",
            "200": "#edb602",
            "300": "#fdd349",
            "400": "#fee490",
            "500": "#fee9a4",
            "600": "#feeeb8",
            "700": "#fff4d2",
            "800": "#fffaeb",
            "900": "#fffdf5",
            "DEFAULT": "#F0B905"
          }
        },
        "extend": "dark"
      },
      darkblue: {
        "colors": {
          "background": {
            "DEFAULT": "#000212",
            "foreground": "#f5f6ff"
          },
          "content1": "#000529",
          "content2": "#000842",
          "content3": "#000b5c",
          "content4": "#000f80",
          "danger": {
            "50": "#4b0117",
            "100": "#a10232",
            "200": "#ec0449",
            "300": "#fc4a80",
            "400": "#fd90b1",
            "500": "#fea5bf",
            "600": "#feb9cd",
            "700": "#fed2df",
            "800": "#ffebf1",
            "900": "#fff5f8",
            "DEFAULT": "#EB074B"
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
            "foreground": "#fafafa"
          },
          "divider": "#475dff",
          "focus": "#5C6AD1",
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
          "overlay": "#000212",
          "primary": {
            "50": "#11163c",
            "100": "#242f7f",
            "200": "#3544bb",
            "300": "#707cd7",
            "400": "#a7afe6",
            "500": "#b7bdeb",
            "600": "#c7ccef",
            "700": "#dbdef5",
            "800": "#eff0fb",
            "900": "#f7f8fd",
            "DEFAULT": "#5C6AD1"
          },
          "secondary": {
            "50": "#241538",
            "100": "#4d2c77",
            "200": "#7041af",
            "300": "#9e79cd",
            "400": "#c3ade1",
            "500": "#cebce6",
            "600": "#d9cbec",
            "700": "#e7ddf3",
            "800": "#f4f0f9",
            "900": "#faf8fc",
            "DEFAULT": "#BB88FC"
          },
          "success": {
            "50": "#103c27",
            "100": "#228153",
            "200": "#32bd7a",
            "300": "#6ed8a5",
            "400": "#a6e7c8",
            "500": "#b6ecd2",
            "600": "#c7f0dc",
            "700": "#dbf5e8",
            "800": "#effbf5",
            "900": "#f7fdfa",
            "DEFAULT": "#4BB380"
          },
          "warning": {
            "50": "#4c3a01",
            "100": "#a27c02",
            "200": "#edb602",
            "300": "#fdd349",
            "400": "#fee490",
            "500": "#fee9a4",
            "600": "#feeeb8",
            "700": "#fff4d2",
            "800": "#fffaeb",
            "900": "#fffdf5",
            "DEFAULT": "#F0B905"
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
    }
  })]
};
export default config;
