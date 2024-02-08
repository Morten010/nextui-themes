import { cherryTheme } from "./cherryTheme";
import { politicalTheme } from "./politicalTheme";
import { posthogTheme } from "./posthogTheme";
import { purpleTheme } from "./purpleTheme";

export const colors = [
    {
        title: "Light",
        name: "light",
        color: "#fff"
    },
    {
        title: "Dark",
        name: "dark",
        color: "#121212"
    },
    {
        title: "Posthog",
        name: "posthog",
        color: "#232323",
        template: posthogTheme
    },
    {
        title: "Dark blue",
        name: "darkBlue",
        color: "#394989",
        template: posthogTheme
    },
    {
        title: "Blossom",
        name: "blossomTheme",
        color: "#ff9393",
        template: cherryTheme
    },
    {
        title: "Political",
        name: "political",
        color: "#0D2240",
        template: politicalTheme
    },
]
