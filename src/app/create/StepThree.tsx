"use client"
import ShowBox from '@/components/ShowBox'
import { Button, ConfigTheme } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import ColorPicker from './ColorPicker'
import { generatePallete } from '@/lib/generatePallete'
import { colors as Themes } from '@/constants'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { hslToHex } from '@/lib/hslToHex'
import MoreModal from '@/components/MoreModal'


interface StepTwoProps {
    setColors: Dispatch<SetStateAction<ConfigTheme>>
    colors: ConfigTheme
    setStep: Dispatch<SetStateAction<number>>
    step: number
}

const StepTwo: FC<StepTwoProps> = ({ colors, setColors, setStep, step }) => {
    const {theme, setTheme} = useTheme()
    const [focus, setFocus] = useState("")

    const isColorsDone = () => {
        if(
            !!colors.colors?.default &&
            !!colors.colors?.foreground &&
            !!colors.colors?.background
        ){
            return true
        }else{
            return false
        }
    }

  return (
    <ShowBox
    className='h-[75vh] max-h-[75vh] relative'
    >
        <Modal />
        <h2
        className='text-3xl font-semibold text-center'
        >
            Pick The boring colors
        </h2>
        <div
        className='flex gap-2 justify-evenly mt-5'
        >
              
            <ColorPicker
            colors={colors.colors?.primary ? ["#808080", "#fafafa", "#333333", "#c0c0c0", "#444", colors.colors.primary[100]!] : ["#808080", "#fafafa", "#333333", "#c0c0c0", "#444"]}
            resetFocus={() => setFocus("")}
            title="default"   
            key={"default"} 
            handleClick={() => {
                if("default" === focus){
                    setFocus("")
                }else{
                    setFocus("default")
                }
            }}
            // @ts-ignore
            themeColors={colors.colors?.default}
            inFocus={"default" === focus}
            onChange={(e: any) => {
                setColors({
                    ...colors,
                    colors: {
                        ...colors.colors,
                    default: {
                        ...generatePallete(e.hsv, colors.extend!),
                        foreground: generatePallete(e.hsv, colors.extend!)[900],
                        DEFAULT: generatePallete(e.hsv, colors.extend!)[200]
                    }
                        
                    }
                })
            }}
            onChangeComplete={(e: any) => {
                console.log(e);
                
            }}
            styles={{
                default: {
                    card:{
                        backgroundColor: theme ? Themes.find(t => t.name === theme)?.color : `transparent transparent ${theme}`,
                        borderRadius: "14px",
                        maxWidth: "135px"
                    },
                    body: {
                        backgroundColor: theme ? Themes.find(t => t.name === theme)?.color : `transparent transparent ${theme}`,
                        borderRadius: 4,
                    },
                    triangle: {
                        borderColor: theme ? `transparent transparent ${Themes.find(t => t.name === theme)?.color}` : `transparent transparent ${theme}`,
                    },
                    input: {
                        border: "1px solid primary",
                        borderRadius: 4
                    },
                    hash: {
                        display: "none"
                    }
                }
            }}
            />
            {colors.colors && Object.keys(colors.colors).reverse().map((key, index) => {
                    console.log(key === focus);
                    console.log(key, focus);
                if(
                    key === "foreground" ||
                    key === "background"
                ) return (
                <ColorPicker
                resetFocus={() => setFocus("")}
                direction={key === "background" ? "right": "left"}
                triangle={key === "background" ? "top-right": "top-left"}
                colors={["#fafafa", "#121212", "#808080", "#e0e0e0", "#333333", "#c0c0c0", "#f5f5f5"]}
                title={key}   
                key={key + index} 
                handleClick={() => {
                    if(key === focus){
                        setFocus("")
                    }else{
                        setFocus(key)
                    }
                }}
                // @ts-ignore
                themeColors={colors.colors?.[key]}
                inFocus={key === focus}
                onChange={(e: any) => {
                    key === "background" ? setColors({
                        ...colors,
                        colors: {
                            ...colors.colors,
                            [key]: {
                                DEFAULT: generatePallete(e.hsv, colors.extend!).DEFAULT,
                                foreground: generatePallete(e.hsv, colors.extend!)[900]
                            },
                            overlay: generatePallete(e.hsv, colors.extend!).DEFAULT,
                            content1: colors.extend! === "dark" ? hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 8) : hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 92),
                            content2: colors.extend! === "dark" ? hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 13) : hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 87),
                            content3: colors.extend! === "dark" ? hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 18) : hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 82),
                            content4: colors.extend! === "dark" ? hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 25) : hslToHex(Math.round(e.hsv.h), Math.round(e.hsv.s * 100), 75),
                            divider: generatePallete(e.hsv, "light")[600],
                        }
                    }) : setColors({
                        ...colors,
                        colors: {
                            ...colors.colors,
                            [key]: {
                                ...generatePallete(e.hsv, colors.extend!),
                                foreground: generatePallete(e.hsv, colors.extend!)[50]
                            }
                        }
                    })
                }}
                styles={{
                    default: {
                        card:{
                            backgroundColor: theme ? Themes.find(t => t.name === theme)?.color : `transparent transparent ${theme}`,
                            borderRadius: "14px",
                            maxWidth: "135px"
                        },
                        body: {
                            backgroundColor: theme ? Themes.find(t => t.name === theme)?.color : `transparent transparent ${theme}`,
                            borderRadius: 4,
                        },
                        triangle: {
                            borderColor: theme ? `transparent transparent ${Themes.find(t => t.name === theme)?.color}` : `transparent transparent ${theme}`,
                        },
                        input: {
                            border: "1px solid primary",
                            borderRadius: 4
                        },
                        hash: {
                            display: "none"
                        }
                    }
                }}
                />
            )})}
        </div>
        <div
        className={`border bg-background dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 right-10 -translate-y-2/4 ${isColorsDone() ? 2 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold cursor-pointer" : "hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer" : "opacity-25"} z-20`}
        onClick={() => {
            if(isColorsDone()){
                setStep(prevStep => prevStep + 1)
            }
        }}
        >
            <FaChevronRight />
        </div>
        <div
        className={`border bg-background dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 left-10 -translate-y-2/4 ${2 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold cursor-pointer" : "hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer"} z-20`}
        onClick={() => {
            setStep(prevStep => prevStep - 1)
        }}
        >
            <FaChevronLeft />
        </div>
    </ShowBox>
  )
}

const Modal = () => {

    return(
        <MoreModal>
            <h3
            className='text-lg font-bold'
            >
                Default color
            </h3>
            <p
            className='text-foreground'
            >
                This color is used for some borders, and other default colors mostly the opposite of the background color or the same as the foreground color.
            </p>
            <ShowBox
            className='mr-auto px-4 mb-3'
            >
                This border
            </ShowBox>
            <h3
            className='text-lg font-bold'
            >
                Foreground colors
            </h3>
            <p
            className='text-foreground'
            >
                This color is used for the foreground(Text color).
            </p>
            <ShowBox
            className='mr-auto px-4 mb-3'
            >
                <h4
                className='font-bold'
                >
                    This is the foreground color
                </h4>
                <p
                className='text-foreground-500'
                >
                    This is a muted foreground color
                </p>
            </ShowBox>

            <h3
            className='text-lg font-bold'
            >
                Background color
            </h3>
            <p
            className='text-foreground'
            >
                This is the color for the background of the page
            </p>
            <ShowBox
            className='bg-background px-4'
            >
               <h4
               className='text-lg font-bold'
               >
                    This is the background color
               </h4>
               <p
               className='text-foreground-500'
               >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ipsa distinctio ab dolorum voluptatem soluta dignissimos est ducimus suscipit illo optio voluptatum cum incidunt eveniet, nostrum maxime facilis non exercitationem.
               </p>
            </ShowBox>
        </MoreModal>            
    )
}

export default StepTwo