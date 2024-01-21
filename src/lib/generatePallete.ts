import convert from 'color-convert'
import { hslToHex } from './hslToHex'

export const generatePallete = ({ h, s, v, a}: { h: number, s: number, v: number, a: number}) => {
    const newH = Math.round(h)
    const newV = Math.round(v * 100)
    const newS = Math.round(s * 100)
    
    const hex = convert.hsv.hex([newH, newS, newV])
    const colors = {
        50: hslToHex(newH, newS, 98),
        100: hslToHex(newH, newS, 96),
        200: hslToHex(newH, newS, 91),
        300: hslToHex(newH, newS, 86),
        400: hslToHex(newH, newS, 82),
        500: hslToHex(newH, newS, 78),
        600: hslToHex(newH, newS, 64),
        700: hslToHex(newH, newS, 47),
        800: hslToHex(newH, newS, 32),
        900: hslToHex(newH, newS, 15),
        DEFAULT: "#" + hex,
    }
    
    return colors
}