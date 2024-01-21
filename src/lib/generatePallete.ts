import convert from 'color-convert'
import { hslToHex } from './hslToHex'

export const generatePallete = ({ h, s, v, a}: { h: number, s: number, v: number, a: number}, theme: "dark" | "light") => {
    const newH = Math.round(h)
    const newV = Math.round(v * 100)
    const newS = Math.round(s * 100)
    
    const hex = convert.hsv.hex([newH, newS, newV])
    const colors = {
        50: theme === "dark" ? hslToHex(newH, newS, 15) : hslToHex(newH, newS, 98),
        100: theme === "dark" ? hslToHex(newH, newS, 32) : hslToHex(newH, newS, 96),
        200: theme === "dark" ? hslToHex(newH, newS, 47) : hslToHex(newH, newS, 91),
        300: theme === "dark" ? hslToHex(newH, newS, 64) : hslToHex(newH, newS, 86),
        400: theme === "dark" ? hslToHex(newH, newS, 78) : hslToHex(newH, newS, 82),
        500: theme === "dark" ? hslToHex(newH, newS, 82) : hslToHex(newH, newS, 72),
        600: theme === "dark" ? hslToHex(newH, newS, 86) : hslToHex(newH, newS, 64),
        700: theme === "dark" ? hslToHex(newH, newS, 91) : hslToHex(newH, newS, 47),
        800: theme === "dark" ? hslToHex(newH, newS, 96) : hslToHex(newH, newS, 32),
        900: theme === "dark" ? hslToHex(newH, newS, 98) : hslToHex(newH, newS, 15),
        DEFAULT: "#" + hex,
    }
    
    return colors
}