import convert from 'color-convert'
import { hslToHex } from './hslToHex'

export const generatePallete = ({ h, s, v, a}: { h: number, s: number, v: number, a: number}) => {
    const newH = Math.round(h)
    const newV = Math.round(v * 100)
    const newS = Math.round(s * 100)
    
    const hex = convert.hsv.hex([newH, newS, newV])
    const colors = {
        50: hslToHex(newH, newS, 20),
        100: hslToHex(newH, newS, 25),
        200: hslToHex(newH, newS, 30),
        300: hslToHex(newH, newS, 35),
        400: hslToHex(newH, newS, 40),
        500: hslToHex(newH, newS, 50),
        600: hslToHex(newH, newS, 60),
        700: hslToHex(newH, newS, 70),
        800: hslToHex(newH, newS, 75),
        900: hslToHex(newH, newS, 80),
        DEFAULT: "#" + hex,
    }
    
    return colors
}